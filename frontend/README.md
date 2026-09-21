# Loof frontend

The frontend is the public React + TypeScript + Vite application for Loof.

## Commands

Run from the repository root:

```bash
npm run dev --prefix frontend
npm run lint --prefix frontend
npm run build --prefix frontend
```

## Current public routes

- `/` — Launching Soon
- `/how-loof-works` — How Loof Works

The frontend uses React Router with a Vercel SPA fallback in
`frontend/vercel.json`, so both routes must work on direct load and refresh.

## Stack

React, TypeScript, Vite, React Router, Tailwind CSS, TanStack Query, React Hook
Form, and Zod.

## Public assets and SEO

Static public files live in `frontend/public/`. `robots.txt` and `sitemap.xml`
contain only the approved public routes. Route-specific SEO metadata is managed
by `src/components/seo/Seo.tsx`.

See [`../LOOF_PROJECT_CONTEXT.md`](../LOOF_PROJECT_CONTEXT.md) for the current
product, deployment, security, and development handoff.
