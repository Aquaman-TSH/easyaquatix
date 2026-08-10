# AGENTS.md — EasyAquatix Website

Instructions for AI coding agents working in this repository. Read this fully before making changes.

## 1. What this project is

- **EasyAquatix public website** — the company shop site for the EasyAquatix brand and the **Aquatic Sentinel** product suite.
- Sells digital products through **Lemon Squeezy** (the `lemon.js` script is loaded in `index.html`).
- **This is the PUBLIC site** and will be deployed to the internet. Keep content and UI production-quality.

> **Note — there is a SECOND project:** the internal **Marketing Manager** ("TSH Project Marketing") lives at `C:\Dev\Project-Marketing`. It is a completely separate codebase. Do NOT confuse the two, and do NOT edit files in the other project from here. See `LAUNCH-GUIDE.md` for the full map.

## 2. Tech stack

| Layer | Technology | Notes |
|---|---|---|
| UI | React 19 (`react`, `react-dom` ^19.2) | Function components + hooks only |
| Routing | React Router v7 (`react-router-dom` ^7.18) | `Routes`/`Route`, `Link`, `NavLink` |
| Build/dev server | Vite 8 | Dev server + bundler; ESM (`"type": "module"`) |
| Styling | Tailwind CSS v4 (via `@tailwindcss/vite`) | Utility classes in JSX; `src/index.css` only imports Tailwind |
| Deployment | Vite build + Wrangler | Publishes `dist/` to Cloudflare Pages |

## 3. Project structure

```
aquasentinel-web/
├── index.html                  # App shell; loads Lemon Squeezy + Inter font
├── vite.config.js              # Port 4105 (strictPort)
├── package.json                # Scripts: dev, build, deploy
├── public/                     # Static assets (favicon etc.)
└── src/
    ├── main.jsx                # React entry
    ├── App.jsx                 # CartProvider + BrowserRouter + layout
    ├── routes.jsx              # All routes (Home, Shop, Blog, About, Contact, Cart)
    ├── index.css               # Tailwind import
    ├── pages/                  # Home, Shop, ProductDetail, Blog, BlogPost, About,
    │                           # Contact, Cart, NotFound
    ├── components/
    │   ├── layout/             # Header, Footer
    │   └── ui/                 # ProductCard, BlogCard
    ├── context/CartContext.jsx # Shopping cart state (useReducer)
    └── data/
        ├── products.js         # SOURCE OF TRUTH for the shop catalog
        └── blog.js             # Blog post content (getPostBySlug, etc.)
```

## 4. Running the app

| Command | What it does | URL |
|---|---|---|
| `npm run dev` | Vite dev server | http://localhost:4105 |
| `npm run build` | Production build to `dist/` | — |
| `npm run deploy` | `vite build` + `wrangler pages deploy dist` | production URL |

The frontend port is **fixed**: 4105 (`strictPort: true` in `vite.config.js` — if 4105 is busy, Vite fails loudly rather than jumping to another port). Never change it to 3001/3005 — those belong to the Marketing Manager app.

## 5. Key architecture & data flow

- **Routing**: `App.jsx` wraps everything in `CartProvider` + `BrowserRouter`. `routes.jsx` maps paths to page components.
- **Products**: `src/data/products.js` is the single source of truth. `ProductDetail` renders `/product/:slug` by looking up `getProductBySlug(slug)`. To add/change products or prices, edit this file.
- **Blog**: `src/data/blog.js` holds posts with frontmatter-like fields; `Blog` lists them, `BlogPost` renders `/blog/:slug`.
- **Cart**: `CartContext.jsx` provides `useCart()` (add/remove/update/clear). Product cards add items to the cart; `Cart` page shows checkout flow (Lemon Squeezy handles payment).

## 6. Code conventions

- Function components + hooks (`useState`, `useEffect`, `useContext`); no class components.
- Tailwind utility classes in JSX; this site does not have a theme context — don't add `dark:` classes unless adding a theme system.
- Relative imports (e.g., `./components/...`, `../../context/CartContext`).
- React Router v7: use `Link`/`NavLink` — avoid raw `<a href>` for internal navigation.
- Keep `products.js` / `blog.js` data shaped consistently (add fields there, not in components).

## 7. Deployment

- `npm run deploy` runs `vite build` then `wrangler pages deploy dist` (Cloudflare Pages).
- Requires Wrangler to be authenticated (Cloudflare account).
- Production builds are independent of the local dev ports.

## 8. Gotchas & debugging

1. **White screen** = a JavaScript crash during render, not a port issue. Check the Vite terminal/log for an `[Unhandled error]` line naming the file + line.
2. **Port conflicts**: This app owns 4105. The Marketing Manager owns 3001/3005. If Vite errors about port 4105, something else is on the port — find it with `Get-NetTCPConnection -State Listen | Where-Object { $_.LocalPort -eq 4105 }`.
3. **Do not** edit files under `C:\Dev\Project-Marketing` from this project.
4. **Do not** change the port to 3001/3005 (Marketing Manager's ports).
5. **Do not** create stray `.md` docs unless asked.

## 9. Related docs

- `LAUNCH-GUIDE.md` — launch steps, port map, troubleshooting (read first for any run/port questions).
