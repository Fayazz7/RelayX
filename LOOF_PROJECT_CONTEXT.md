# Loof Project Context

This is the current handoff document for continuing Loof development. It records verified repository and deployment state; `AGENTS-loof.md` remains the working instruction file.

## Identity and product

- Public brand: **Loof**.
- Internal repository codename: **RelayX**.
- Loof is a peer-to-peer marketplace for useful local knowledge, connections, recommendations, opportunities, and hard-to-find information.
- An individual marketplace listing is called a **Lead**.
- Core loop: **Create → Discover → Purchase → Unlock → Use/Connect → Feedback**.
- The product is broader than traditional business lead generation.

## Repository and stack

The repository contains separate applications:

```text
frontend/  React + TypeScript + Vite + React Router
backend/   Python + Django + Django REST Framework
```

The frontend also includes Tailwind CSS, TanStack Query, React Hook Form, and Zod. The backend remains a simple Django modular monolith; Django global project files stay in their existing location and backend apps belong under `backend/apps/`.

Frontend responsibilities are presentation, interaction, client state, and API consumption. Backend responsibilities are business rules, validation, authorization, financial logic, data access, and protected-information access.

## Approved public frontend

The currently implemented public routes are:

| Route | Purpose |
| --- | --- |
| `/` | Launching Soon page |
| `/how-loof-works` | How Loof Works overview |

These pages use the approved editorial/ledger direction: warm paper background, near-black ink, terracotta accents, restrained rules, compact controls, Hanken Grotesk, Spline Sans Mono, and responsive layouts. Treat them as approved; do not redesign or casually polish them during unrelated work.

The existing product/development landing flow is conceptually separate from the public Launching Soon page. Do not replace one with the other without an explicit request.

## Frontend implementation

- `frontend/src/routes/AppRoutes.tsx` uses `BrowserRouter`.
- `frontend/src/pages/LaunchingSoonPage.tsx` implements `/`.
- `frontend/src/pages/HowLoofWorksPage.tsx` implements `/how-loof-works`.
- `frontend/src/components/loof/LoofChrome.tsx` contains shared public-page chrome.
- `frontend/src/components/seo/Seo.tsx` manages route-specific document metadata and JSON-LD.
- `frontend/src/styles/loof.css` contains the approved public-page styles.
- `frontend/public/` contains the favicon, Figma-exported chevron asset, `robots.txt`, and `sitemap.xml`.

There is no production marketplace Explore, Lead creation, purchase, unlock, wallet, payout, or public individual-Lead route implemented in the current frontend state.

## Deployment and routing

- Production domain: `https://loofmarket.com`.
- The frontend is deployed through Vercel and the custom domain is connected.
- DNS is managed outside this repository; do not change it from code.
- `frontend/vercel.json` provides the SPA fallback rewrite from application paths to `/index.html`.
- Existing static files must continue to be served normally. When adding public routes, preserve direct-load and refresh behavior.
- The Vercel project should use `frontend` as its project root.

## SEO foundation

The two public routes have route-specific titles, descriptions, canonical URLs, robots metadata, Open Graph metadata, and Twitter/X card metadata. Organization and WebSite JSON-LD are present without unsupported claims.

- Homepage canonical: `https://loofmarket.com/`
- How Loof Works canonical: `https://loofmarket.com/how-loof-works`
- `https://loofmarket.com/robots.txt` allows crawling and references the sitemap.
- `https://loofmarket.com/sitemap.xml` contains only the two approved public routes.
- No suitable production social preview image currently exists, so no `og:image` is claimed.
- Google Search Console has been configured for the domain and URL-prefix properties, and the sitemap has been submitted. New-site indexing may take time.

## Security and financial rules

- The frontend is untrusted; protected Lead information must never be exposed by public APIs.
- The backend must enforce ownership, entitlement, authorization, and protected-field access.
- Protected information can include contact numbers, WhatsApp, email, exact location, links, and private notes.
- Financial calculations use integer minor units; INR uses paise, not floating-point values.
- Commission is configurable. The ₹100/₹80/₹20 example is illustrative and must not become a hard-coded business rule.

## Development workflow

Use focused vertical slices:

**Product flow → screen → API contract → frontend → backend → integration → manual test**

Inspect existing code and documentation before changing architecture. Prefer small, maintainable, Django-native/React-native changes. Do not add speculative services, abstractions, schemas, payment systems, or infrastructure.

Future work must not be described as complete unless verified. In particular, do not assume production OTP, payment gateway, purchase entitlement, wallet, payouts, reputation, referrals, AI discovery, or public Lead SEO pages exist.

## Git and deployment rules

- Inspect `git status`, `git diff`, and relevant history before significant changes.
- Do not commit, push, reset, rebase destructively, or delete unrelated work without explicit instruction.
- Normal production flow is GitHub → Vercel → `https://loofmarket.com`.
- Do not modify DNS or Vercel domain settings from the repository.

## Completed work

- Public Loof brand finalized.
- Launching Soon and How Loof Works pages implemented responsively.
- Approved visual design implemented.
- Vercel deployment and custom domain connected.
- SPA deep-link routing fixed with `frontend/vercel.json`.
- SEO foundation, `robots.txt`, and `sitemap.xml` implemented.
- Google Search Console configured and sitemap submitted.

## Do not change casually

Do not redesign the approved public pages, replace React Router, move the Django project into a new architecture, expose protected information, treat RelayX as the public brand, or turn illustrative product examples into fixed business rules.

For a new conversation, read this file and `AGENTS-loof.md` before proposing implementation work.
