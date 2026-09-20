# Loof / RelayX

## Project Overview

Loof is the public brand of the project. RelayX remains the internal codename
used for the repository, internal project references, and continuity documents
unless the user explicitly decides to rename those assets.

Loof is a user-driven marketplace for useful information, local knowledge,
contacts, recommendations, opportunities, and other hard-to-find information.

The core idea is to allow people to monetize useful information or connections
they already know. A contributor can create a Lead, decide its value, and make
the protected information available to another user after purchase.

Loof is not limited to a single category or use case. The product should
remain flexible enough to support different kinds of useful information.

## Core Workflow

The current core workflow is:

1. A registered user creates a Lead.
2. The contributor provides useful public and protected information.
3. The contributor chooses the Lead price.
4. The Lead becomes discoverable to other users.
5. A buyer searches for and views the Lead.
6. The buyer pays to unlock the protected information.
7. The buyer receives access to the protected information.
8. The buyer can use the information and provide feedback.
9. The contributor builds reputation through successful transactions.
10. The contributor earns the contributor share of the transaction.
11. Loof receives its configurable platform commission.

A user can act as both a buyer and a contributor.

## Pricing and Commission

The contributor chooses the listing price.

Pricing is completely open during the current development stage. The platform
may introduce configurable minimum and maximum price limits later.

The platform commission is configurable and must not be hard-coded throughout
the application. The commission percentage may change in the future and may
depend on platform rules or contributor performance.

Financial calculations must use integer minor currency units (for INR, paise)
rather than floating-point values.

## Information Protection

A listing may contain both public and protected information.

Public information can include details such as:
- Title
- Description
- Category
- General location
- Price
- Images
- Reputation-related information

Protected information may include:
- Phone number
- WhatsApp number
- Email address
- Exact address
- Private notes
- Other restricted contact information

Protected information must never be exposed through public APIs.

The backend must verify that the authenticated user is entitled to access
protected information before returning it.

Never rely on frontend state to decide whether protected information can be
shown.

## Product and Development Scope

RelayX is currently in an early development stage.

Requirements and workflows may evolve as the product is designed and tested.
Do not assume that ideas discussed for later stages are fixed requirements.

Do not implement features only because they are mentioned as possibilities,
ideas, or future directions. Implement what is explicitly required for the
current task.

Avoid premature architecture for functionality that is not currently needed.

## Technology Stack

### Frontend

- React
- TypeScript
- Vite
- React Router
- TanStack Query
- Tailwind CSS
- React Hook Form
- Zod

Frontend development should favor reusable, maintainable components and
feature-oriented organization.

All pages and UI components must be responsive and usable across mobile,
tablet, and desktop screen sizes.

### Backend

- Python
- Django
- Django REST Framework

Backend development remains part of the same product architecture. The
developer is comfortable working directly on the backend and may take a more
hands-on role in Django design and implementation.

### Database

Use the database already configured for the current development environment.
Do not introduce or migrate database technology without an explicit reason
and task requirement.

## Architecture

Use a modular monolith architecture unless there is a clear reason to change it.

The frontend and backend are separate applications within the same repository.

Initial high-level architecture:

React frontend
→ Django REST API
→ Database

Keep responsibilities clear:

- Frontend: presentation, interaction, client-side state, and API consumption.
- Backend: business rules, authorization, validation, financial logic,
  data access, and protected information access.

Do not introduce microservices or unnecessary infrastructure without a
demonstrated need.

## Frontend Development Principles

The frontend is an area where Codex should provide strong implementation
assistance.

Prefer:

- Reusable components
- Feature-oriented organization
- Clear separation between UI and data/API logic
- Shared components for repeated UI patterns
- Shared hooks for repeated client-side behavior
- Centralized API/data-access logic
- Strong TypeScript typing
- Consistent loading, error, empty, and success states
- Responsive layouts by default

Before creating a new component, hook, utility, or service:

1. Check whether an existing implementation can be reused.
2. Check whether an existing implementation can be extended cleanly.
3. Create a new abstraction only when it has a clear responsibility.

Do not force unrelated functionality into an existing abstraction merely to
avoid creating a new file.

Prefer clear boundaries over premature abstraction.

Avoid giant components, duplicated JSX, duplicated API logic, and unclear
responsibilities.

Use descriptive names.

Examples:
- Components: `ListingCard`, `SearchFilters`
- Functions: `getListingDetails`
- Hooks: `useListingSearch`
- Types: `Listing`, `SearchFilters`

Avoid unnecessary abbreviations.

## TypeScript and Naming Conventions

Use TypeScript consistently.

Prefer explicit and useful types over `any`.

Do not use `any` merely to silence a type error. Resolve the underlying type
problem when practical.

Naming conventions:

- React components: PascalCase
- Types/interfaces: PascalCase
- Functions: camelCase
- Variables: camelCase
- React hooks: `useSomething`
- Constants: UPPER_SNAKE_CASE when appropriate
- Python modules/functions/variables: snake_case
- Django models/classes: PascalCase

Use names that communicate purpose rather than implementation details.

## Backend Interaction

Frontend API calls should be organized through a clear API/data-access
layer instead of scattering request logic throughout UI components.

The frontend must not contain business rules that belong on the backend.

The backend must be the source of truth for:

- Authorization
- Listing ownership
- Purchase entitlement
- Payment state
- Commission calculation
- Earnings calculation
- Protected information access
- Other security-sensitive business rules

## Reuse and Code Quality

Prefer the smallest clean solution that completely satisfies the task.

Before adding code:

- Inspect relevant existing code.
- Reuse existing functionality when appropriate.
- Avoid unnecessary duplication.
- Avoid unnecessary dependencies.
- Avoid unrelated refactoring.
- Preserve existing working behavior unless the task requires a change.

Do not add a library when the requirement can reasonably be solved with the
existing stack.

If a new dependency is genuinely useful, explain why it is needed before
introducing it.

## Codex Working Method

For small, clear tasks:

- Make the requested change.
- Keep the implementation focused.
- Provide a concise summary afterward.

For non-trivial tasks:

1. Inspect the relevant existing code first.
2. Identify reusable components, utilities, hooks, services, or patterns.
3. Determine the smallest appropriate implementation.
4. Give a concise implementation plan.
5. Implement the required changes only.
6. Check the affected code for obvious issues.
7. Summarize the result concisely.

Do not generate large amounts of code before understanding the existing
structure.

Do not rewrite unrelated files or systems while implementing a feature.

Do not invent requirements that were not requested.

When requirements are ambiguous and the ambiguity materially affects the
architecture or behavior, ask for clarification rather than making a large
assumption.

## Backend Modification Boundary

Both frontend and backend are part of the same product and may be worked on
by Codex.

However, the developer is a backend developer and may intentionally implement
backend changes manually.

When the task is primarily frontend-focused:

- Prefer making only the backend changes strictly required for the frontend
  feature.
- Do not restructure or refactor backend architecture without a clear reason.
- Preserve existing backend conventions.

When a backend change is necessary for an end-to-end feature, make the smallest
appropriate backend change and keep existing behavior intact.

## Security Basics

Always treat the frontend as untrusted.

Never:
- Expose secrets to the frontend.
- Expose protected contact information through public endpoints.
- Trust client-side payment success state.
- Trust client-provided commission or earnings values.
- Trust client-provided authorization decisions.

Sensitive business rules must be enforced server-side.

Keep secrets in environment variables and never commit them to Git.

## Git

The repository contains both frontend and backend applications.

Treat them as one product and one Git repository unless explicitly instructed
otherwise.

Codex may inspect Git status, diffs, and history when useful.

Codex must not create commits, push changes, reset history, or perform
destructive Git operations unless explicitly instructed.

## Current Product / Design Status

### Public brand
- Public brand: **Loof**
- Internal codename: **RelayX**
- Do not reopen naming work unless explicitly asked.
- "Loof Market" is not the brand name; use **Loof** as the wordmark.
- "Marketplace" is a descriptor of the product, not part of the brand name.

### Public Launching Soon page
A separate public Launching Soon page has been created for Loof.
It is intentionally separate from the existing product/development Landing page.

The Launching Soon page:
- Uses the existing ledger/editorial design language.
- Introduces Loof as a marketplace for useful local knowledge, trusted connections,
  recommendations, and hard-to-find information.
- Uses "COMING SOON".
- Has "Discover How Loof Works →" as the main CTA.
- Has an expandable category section explaining Local Knowledge, Trusted Connections,
  Useful Recommendations, and Hard-to-Find Information.
- Ends with a simple CTA leading to How Loof Works.
- Must not replace or redesign the existing product Landing page.

### How Loof Works page
A new explanatory page has also been created and was accepted as a strong result.

Purpose:
- Explain what Loof is.
- Explain what a Lead is.
- Explain buyer and seller roles.
- Explain the marketplace transaction flow.
- Explain protected information.
- Explain how sellers earn.
- Explain good Lead quality.
- Explain trust/reputation.
- Lead users to the existing Explore and Sell What You Know screens.

The page is a general marketplace overview, not a replacement for the seller-focused
"Sell What You Know" page.

### Current terminology
The product now uses **Lead** as the user-facing term for an individual marketplace
listing. The product remains broader than traditional lead generation.

## Communication Style

Keep implementation responses concise and practical.

For completed tasks, report only what is useful:

- What changed
- Important files affected
- Checks performed
- Any remaining issue or decision needed

Do not provide lengthy narration of individual coding steps unless requested.

## Current Priority

Optimize for:

1. Correctness
2. Simplicity
3. Reusability
4. Maintainability
5. Clear architecture
6. Minimal unnecessary code

Build only what is currently required and let the product evolve based on
actual requirements and usage.
