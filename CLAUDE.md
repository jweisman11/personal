# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Layout

The repo root holds only `README.md`, this file, `docs/` and `.github/`. The whole web app lives in `personal/` — run every npm/firebase command from there. `docs/PRD.md` is the product spec (site structure, goals); `docs/FIREBASE.md` covers how Firebase is used.

## Commands (run in `personal/`)

- `npm run dev` — dev server (Turbopack) at http://localhost:3000
- `npm run build` — static export into `out/`
- `npm run lint` — ESLint (flat config, `eslint.config.mjs`)
- `firebase deploy --only hosting` — publish `out/` (requires `firebase login`)

There is no test suite.

## Architecture

Next.js 16 App Router + TypeScript + Tailwind v4 + shadcn/ui, exported as a fully static site (`output: "export"` in `next.config.ts`). Because it is static, there are no API routes or runtime server features; anything dynamic must resolve at build time.

- `app/` — routes: home (hero, latest posts, about), blog, `blog/[slug]` (uses `generateStaticParams`), `not-found`.
- `components/bender/` — the Bender-style mascot. `bender.tsx` is the animated SVG; `bender-art.tsx` swaps in `public/bender/<name>.(gif|webp|png|jpg|svg)` at build time if present (slots: `hero`, `post-footer`, `404`).
- `content/posts/*.md` — blog posts (frontmatter: `title`, `date` + markdown). `lib/blog.ts` reads them from disk with `gray-matter` and renders with remark/remark-html at build time. It resolves the folder via `process.cwd()`, so builds must run from `personal/`.
- `components/ui` is shadcn-generated (`components.json`); `components/layout/header.tsx` is the nav (light/dark toggle only); `lib/utils.ts` has the `cn` helper.

## Deployment

Pushing to `main` triggers `.github/workflows/firebase-deploy.yml`, which does `npm ci`, `npm run build` and `firebase deploy --only hosting` with `working-directory: personal` (uses the `FIREBASE_TOKEN` secret). `personal/firebase.json` serves `out/`. Manual deploys must run `npm run build` first.

## Notes

- `README.md` still contains Create React App boilerplate below the deploy notes; it does not describe this app.
- `.mcp.json` (shadcn MCP server) is in `personal/`, so start Claude Code from there for it to apply.
- Git workflow: commit and push directly to `main`; only create a branch/PR when explicitly told to.
