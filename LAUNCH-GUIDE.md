# Launch Guide — EasyAquatix Website & Marketing Manager

Last updated: 2026-08-10

## Overview

There are **two separate applications** that must NOT be confused. They are unrelated codebases:

| App | Purpose | Location | Audience |
|---|---|---|---|
| **Marketing Manager** | Internal marketing tool (content queue, campaigns, AI agent, projects, calendar). Also called "TSH Project Marketing". | `C:\Dev\Project-Marketing` | Internal only |
| **EasyAquatix Website** | Public company site (shop, blog, product pages). | `C:\Users\toddhaf\Desktop\Claude ai\Projects\Aqualog\aquasentinel-web` | Public (deploys to the internet) |

## Port Map (THE critical knowledge)

The Marketing Manager runs TWO servers (Express API + Vite frontend). The EasyAquatix website is frontend-only (no API). They use **separate, non-overlapping ports** so both can run at the same time:

| App | Frontend (Vite) | API (Express) | API proxy |
|---|---|---|---|
| **Marketing Manager** | `http://localhost:3005` | `http://localhost:3001` | `/api` -> `localhost:3001` |
| **EasyAquatix Website** | `http://localhost:4105` | — | — |

> **Rule:** Never change these to overlap. If one app takes port 3005 and the other is also configured for 3005, the second one will silently jump to 3006 (or fail loudly), which looks like a broken or white screen.

---

## Launching the Marketing Manager (internal)

Location: `C:\Dev\Project-Marketing`

### Method A — recommended
```powershell
cd C:\Dev\Project-Marketing
npm run marketing
```
Starts both servers via `concurrently`:
- API: `http://localhost:3001`
- Frontend: `http://localhost:3005`

Open **http://localhost:3005** in the browser.

### Method B — double-click launcher
Double-click `start-dev.bat` in `C:\Dev\Project-Marketing`. It opens two terminal windows (API on 3001, Frontend on 3005). Close both windows to stop the servers.

### Method C — frontend only (no API)
```powershell
npm run dev
```
Starts Vite on 3005 only. Pages that fetch data (dashboard, projects, agent) will show errors because the API on 3001 is not running. Use this only for UI work.

---

## Launching the EasyAquatix Website (public)

Location: `C:\Users\toddhaf\Desktop\Claude ai\Projects\Aqualog\aquasentinel-web`

### Run locally (frontend only — no API)
```powershell
npm run dev
```
Starts Vite on 4105. Open **http://localhost:4105** in the browser.

### Deploying to production (unaffected by dev ports)
```powershell
npm run deploy
```
Runs `vite build` and publishes `dist/` to Cloudflare Pages via Wrangler. Production does NOT use the dev ports (3001/3005/4105).

---

## Verifying everything is up

Check the listening ports:
```powershell
Get-NetTCPConnection -State Listen | Where-Object { $_.LocalPort -in 3001,3005,4105 }
```

Expected result when BOTH apps are running:

| Port | Owner |
|---|---|
| 3001 | Marketing Manager API |
| 3005 | Marketing Manager frontend (Vite) |
| 4105 | EasyAquatix frontend (Vite) |

Smoke-test the Marketing Manager API:
```powershell
Invoke-RestMethod http://localhost:3001/api/posts   # Marketing Manager
```

---

## Troubleshooting

### 1. White screen / blank page (app loads but nothing renders)
A white screen is almost always a **JavaScript crash during render**, NOT a port problem. Fix the code, not the ports.

1. Look at the Vite terminal window (or the log file) for an `[Unhandled error]` line — it names the exact file and line.
2. Example that was fixed on 2026-08-10: `ReferenceError: linkClass is not defined` in `C:\Dev\Project-Marketing\src\components\layout\Header.jsx`. The nav used `className={linkClass}` but the variable was never defined. Fix: define `linkClass` (a NavLink styling function) before the `return` in Header.
3. After fixing, hard-refresh the browser (Ctrl+Shift+R). Vite hot-reloads most changes automatically.

### 2. Vite is on a different port than expected (e.g., 3006 instead of 3005)
Vite **silently auto-increments** to the next free port when the configured port is busy — unless `strictPort: true` is set.

- The Marketing Manager does NOT set `strictPort` (it uses `--port 3005` in package.json / start-dev.bat), so a busy 3005 means Vite jumps to 3006. That is confusing.
- The EasyAquatix project DOES set `strictPort: true` in `vite.config.js`, so it fails loudly instead.

Check what is actually occupying the port:
```powershell
Get-NetTCPConnection -State Listen | Where-Object { $_.LocalPort -eq 3005 }
Get-Process -Id <OwningProcess> | Select-Object Id, ProcessName, StartTime
```

### 3. Port already in use / EADDRINUSE on the API
This means another instance is already running (often from `start-dev.bat` or a previous `npm run marketing` that was never closed).

- **Do not run `start-dev.bat` while an instance is already running.** Close existing windows first.
- To stop a stale instance, identify it first, then stop it:
```powershell
Get-NetTCPConnection -State Listen | Where-Object { $_.LocalPort -in 3001,3005 } |
  ForEach-Object { Stop-Process -Id $_.OwningProcess -Force }
```
Caution: only kill processes you have identified. Do NOT kill unrelated `node` processes (e.g., the opencode/Claude host) blindly.

### 4. API unreachable from the frontend
Only the Marketing Manager calls `/api`. The frontend calls a relative path `/api/...`; Vite proxies it to the API server:
- Marketing Manager: `vite.config.js` proxy target `http://localhost:3001`

If `/api` calls fail, either the API server is down or the proxy target does not match the API server's port. The EasyAquatix website has no API and no proxy.

---

## Changing the ports (if ever needed)

Each app has TWO files that must stay in sync (API port + proxy target). If you change one, change the other, and never overlap with the other app.

### Marketing Manager (`C:\Dev\Project-Marketing`)
- `marketing-server.js` — `const PORT = 3001`
- `vite.config.js` — `server.port` (3005) and `server.proxy['/api'].target` (3001)
- Also update hardcoded copies in: `package.json` scripts, `start-dev.bat`, `start-dev.ps1`

### EasyAquatix (`aquasentinel-web`)
- `vite.config.js` — `server.port` (4105, with `strictPort: true`)

The EasyAquatix website is frontend-only — no API server and no proxy.

---

## Context / history (why it is set up this way)

- Originally BOTH apps used ports 3001 (API) and 3005 (frontend). This caused port collisions, confusing Vite port jumps, and white screens.
- Decision made 2026-08-10:
  - Marketing Manager keeps **3001 / 3005** (its start scripts hardcode these; it is the established internal tool).
  - EasyAquatix moved to **4105** (its local dev port does not matter because production deploys via Cloudflare Pages).
- Also on 2026-08-10, the EasyAquatix marketing section was removed from the public site: the `/marketing` dashboard, its Express API (`marketing-server.js` on 4101), the content queue, and related npm scripts were deleted. The site is now frontend-only (Vite on 4105).
- The white screen that prompted this work was actually a code bug (`linkClass` undefined in Marketing Manager's Header.jsx), not a port issue. Port conflicts and code bugs can look identical — always check the Vite log for `[Unhandled error]` before assuming ports.
