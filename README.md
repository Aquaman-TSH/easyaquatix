# EasyAquatix — Smart Aquarium Solutions

**Live site:** [https://easyaquatix.com](https://easyaquatix.com)

EasyAquatix helps new fishkeepers keep their tanks alive and thriving. We publish practical, beginner-friendly education on water quality, cycling, and maintenance — and we build the software that makes it easier, starting with **Aquatic Sentinel**, smart aquarium management software.

## Why EasyAquatix exists

Every year, thousands of fish are lost to problems that are entirely preventable: ammonia spikes nobody noticed, heaters that failed at 2 AM, pH crashes that came on slowly and then all at once. Most "sudden" aquarium disasters are really slow drifts that can be caught days in advance — if you have a system for watching them.

EasyAquatix closes that gap with two things:

1. **Education** — a growing library of free guides written for new fishkeepers, not marine biologists.
2. **Software** — tools like Aquatic Sentinel that track water parameters, log maintenance, and alert you the moment something drifts out of range.

## The shop

Products are sold digitally through **Lemon Squeezy**, which handles the storefront, checkout, and license delivery:

- **Aquatic Sentinel** — smart aquarium management software (free during beta). Track parameters, set alerts, schedule maintenance, monitor smart devices, and view historical trends.

## Tech stack

| Layer | Technology |
|---|---|
| UI | React 19 (function components + hooks) |
| Routing | React Router v7 |
| Build / dev server | Vite 8 |
| Styling | Tailwind CSS v4 |
| Payments / store | Lemon Squeezy |
| Newsletter | Buttondown |
| Deployment | Cloudflare Pages (Wrangler) |

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at **http://localhost:4105** (port is fixed via `strictPort`).

### Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the Vite dev server on port 4105 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run deploy` | Build, then deploy `dist/` to Cloudflare Pages |

## Environment variables

Copy `.env.example` to `.env` and fill in real values:

| Variable | Purpose |
|---|---|
| `BUTTONDOWN_API_KEY` | Newsletter signup via the `/api/subscribe` endpoint |

Never commit the real `.env` — it's gitignored.

## Project structure

```
src/
├── main.jsx                # React entry
├── App.jsx                 # CartProvider + BrowserRouter + layout
├── routes.jsx              # All routes
├── index.css               # Tailwind import
├── pages/                  # Home, Shop, Blog, Care Guides, Tools, Support, etc.
├── components/
│   ├── layout/             # Header, Footer
│   └── ui/                 # ProductCard, BlogCard, NewsletterCTA, etc.
├── context/                # CartContext (useReducer)
├── hooks/                  # usePageMeta, useInView
└── data/
    ├── products.js         # Shop catalog (source of truth)
    └── blog.js             # Blog post content
```

## Blog

The blog is the education engine of the site — 20+ articles written for new fishkeepers, from cycling and water parameters to species care guides and smart-tank setup. Content lives in `src/data/blog.js`.

## API

`functions/api/subscribe.js` is a Cloudflare Pages Function that forwards newsletter signups to Buttondown. In local dev, the same handler runs through a Vite middleware plugin in `vite.config.js`.

## Deployment

```bash
npm run deploy
```

Builds the site and publishes `dist/` to Cloudflare Pages (`easyaquatix` project, `main` branch). Requires Wrangler authentication.
