# Loof / RelayX — Product Context & Continuity

## Purpose
Portable continuity file for continuing the RelayX product across fresh ChatGPT conversations. Attach this file to a new chat and use the one-time continuation prompt supplied separately.

**Loof is the confirmed public brand. RelayX remains the internal codename. Do not reopen naming work unless explicitly asked.**

---

## 1. Product in One Sentence
Loof is a peer-to-peer marketplace where people can sell useful knowledge, local connections, recommendations, opportunities, and hard-to-find information that has practical value to someone else.

Core loop:

**Know something useful → create a listing → someone discovers it → pays to unlock protected information → contributor earns most of the payment.**

The product can now refer to an individual marketplace listing as a **Lead**. The concept remains broader than traditional lead generation.

### Example
Someone in Kochi knows a reliable mobile puncture-repair person who is difficult to find online. They create a listing, explain the useful context publicly, protect the actual contact, set a price such as ₹20, and earn most of the purchase amount when someone unlocks it.

Another possible use case is difficult-to-find accommodation/contact information. The product should remain broader than any single use case.

---

## 2. Product Principles

### Value useful knowledge, not generic information
Strong listings may contain:
- Context
- Personal verification
- Hard-to-find connections
- Availability
- Trust
- Local knowledge
- Experience
- Recommendations
- Direct access to a person/resource/opportunity

Do not encourage selling information that is trivial to find publicly.

### Make it understandable
A normal user should quickly understand:
1. What can I sell?
2. What should stay private?
3. How much can I charge?
4. What does the buyer receive?
5. When do I get paid?

### Protected information is central
Public information helps a buyer decide whether a listing is useful. Protected information is what the buyer pays to unlock.

Possible protected fields:
- Phone
- WhatsApp
- Email
- Private notes
- Other valuable non-public details

### Trust is essential
A reputation/feedback system is intended to be mandatory after transactions. It should eventually include:
- Rating
- Review
- Successful/useful transaction measure
- Transaction history/reputation

The concept is inspired partly by trust systems in peer-to-peer marketplaces/P2P trading, but exact scoring is not finalized.

### Do not overbuild for future ideas
Potential future ideas include AI search, referrals, referral conditions, competition/incentives, advanced reputation, wallets and withdrawals. These are ideas, not MVP requirements.

---

## 3. MVP Scope

Core marketplace loop:

**Create → Discover → Purchase → Unlock → Use/Connect → Feedback**

Main areas:
1. Authentication
2. Basic profile
3. Discovery/browsing
4. Listing details
5. Create listing
6. Purchase/unlock
7. Protected information access
8. Transaction history
9. Rating/review/reputation foundation

Earnings/wallet/withdrawal can come after the core purchase flow is stable.

---

## 4. Product Language

Prefer these user-facing terms:
- **Loof**
- **Lead** — an individual marketplace listing
- “What you know”
- “Sell what you know”
- “Unlock”
- “Protected information”
- “Your earnings”
- “Useful connection”
- “Local knowledge”
- “Recommendation”
- “Opportunity”
- “Seller”
- “Buyer”

Use **Lead** consistently in the current product UX and explanatory screens.
The product remains broader than traditional lead generation.

## 5. Naming Status

### Public brand
**Loof**

Loof is the final public brand name chosen for the product.

The name was derived internally from the concept of Local + Information + Market,
but the website should treat **Loof** as the standalone brand rather than repeatedly
explaining the name.

Use:
- Brand: **Loof**
- Descriptor: **A marketplace for useful knowledge, connections, and information**

Do not use "Loof Market" or "Loofmarket" as the primary brand name.

### Internal codename
**RelayX**

RelayX remains the internal codename for the repository, internal references,
and continuity documents unless the user explicitly decides to rename those assets.

### Rule
Do not rename the repository, Figma files, React app, Django project, or internal
docs merely because the public brand is now Loof. Keep internal naming stable until
explicitly instructed otherwise.

## 6. User Journey

### Seller
Landing → understand concept → Sell what you know → Create listing → Preview → Publish → Buyer discovers → Buyer purchases → Buyer unlocks → Seller earns → Feedback/reputation

### Buyer
Landing/discovery → search/browse → listing card → listing detail → evaluate public information → purchase → unlock → use/connect → rating/review

---

## 7. Current Navigation / Entry Points

### Existing product/development navigation
The existing product Landing page and application navigation remain separate from
the new public Launching Soon page.

Current product navigation can include:
- Home
- Explore
- Sell what you know
- About us
- Profile/avatar

Profile menu:
- View Profile
- Logout

All seller entry points should lead to the same canonical Create Lead flow.

### Public pre-launch entry
A separate public **Launching Soon** page exists for the Loof domain/entry experience.
It must not replace the existing product Landing page.

Launching Soon → **Discover How Loof Works** → How Loof Works

How Loof Works → **Explore Loof** → existing Explore page
How Loof Works → **Sell What You Know** → existing Sell What You Know page

## 8. Authentication — Design Completed

Unified passwordless authentication; no separate login/register experience.

### Phone-first
1. Phone number with country-code selector
2. WhatsApp OTP
3. OTP verification
4. If new user → name
5. Authenticated

### Email
1. Email
2. Verification code
3. Authenticated

Decisions:
- Phone is primary/default.
- Email is alternative.
- No traditional password flow.
- Profile completion can remain optional.

Authentication design is considered complete for now.

---

## 9. Landing Page — Current State

The existing product/development Landing page is intentionally preserved.

Do not replace it with the public Launching Soon page.

The Launching Soon page is a separate public-facing pre-launch experience.
The existing Landing page remains available for the actual product/development flow
and should not be redesigned during unrelated work.

The Landing page is considered good enough for now.

## 10. “Sell What You Know” Explanatory Page — Design Completed

This page bridges the landing page and actual Create Listing form.

Purpose:
- Explain what can be sold
- Explain valuable information
- Explain public vs protected information
- Explain good listing quality
- Explain pricing
- Explain transaction flow
- Lead to Create Listing

### Visual story
**Know something → Is it valuable? → Turn it into a listing → Protect the important part → Set a price → Get paid**

### Sections
**01 — What can you sell?**
- Local connections
- Recommendations
- Opportunities
- Useful contacts
- Local knowledge

**02 — Make it valuable**
Do not sell what Google already gives people. Sell context, connection, availability, trust, personal verification.

**03 — Keep the important part private**
Clearly distinguish public vs protected information. Only share contact information the contributor has permission to share.

**04 — What makes a good listing?**
Good: specific, useful, hard to find elsewhere, genuine, recently verified.
Avoid: public information, fake/outdated information, vague descriptions, contacts shared without permission.

**05 — You set the price**
Illustrative example:
- ₹100 listing
- ₹80 contributor
- ₹20 RelayX

This is only an example. Actual commission/earnings must remain configurable and be shown before publishing.

**06 — Get paid when someone buys**
**LIST → DISCOVER → UNLOCK → CONNECT → EARN**

Final CTA:
**Ready to sell what you know? Create a listing →**

### Sticky CTA
A sticky CTA is useful after roughly 20–25% scroll past the hero. Keep it restrained/compact, especially on mobile.

### Status
Successfully generated in Figma Make and considered good enough for now. Minor tweaks can wait.

---

## 11. Responsive Design

Every screen must work on:
- Mobile
- Tablet
- Desktop

Mobile should not be a shrunken desktop layout.

Prefer:
- Single-column stacking
- Comfortable touch targets
- Readable typography
- Simple navigation
- Low horizontal density

Known later polish item: the “How it works” mobile section looked too compressed. Fix later rather than interrupting current progress.

---

## 12. Design System

Visual direction: **ledger/editorial**

Characteristics:
- Warm paper background
- Near-black ink
- Terracotta accent
- Restrained borders/rules
- Compact rectangular controls
- Editorial/ledger feeling
- Practical, trustworthy, not generic SaaS

Typography:
- Hanken Grotesk
- Spline Sans Mono

Use Auto Layout and reusable components.

Existing design-system files:
1. `relayx-figma-ai-prompt.md`
2. `relayx-ledger-style-guide.md`
3. `relayx-ledger-tokens.json`

These are already used as Figma Make context. Reuse them; do not regenerate unnecessarily.

---

## 13. Figma Make Workflow

Figma Make is used for rapid screen design/prototyping.

Every prompt should:
- Identify the exact screen/change
- State the user goal
- Reuse the existing design system/components
- Require responsive behavior
- Explicitly avoid redesigning unrelated screens
- Avoid speculative future features
- Avoid unnecessary context/repetition

### Available models observed
- Gemini 3.1 Pro — deep/creative
- Claude Sonnet 4.6 — balanced/efficient
- Gemini 3.6 Flash — fast/iterative
- GPT-5.6 — capable/quick

Practical preference:
- New major screen/flow → Gemini 3.1 Pro
- Significant refinement → Claude Sonnet 4.6
- Small targeted edit → Gemini 3.6 Flash or GPT-5.6
- Very simple edit → default/light option

A prompt may include:
**MODEL: Gemini 3.1 Pro**

### Credit strategy
Figma Make credit use varies with model, complexity, agent actions, context, existing design and prompt history. Revisions can cost more than initial generation.

Therefore:
- Prioritize missing major screens.
- Batch related changes.
- Avoid wasting credits on tiny cosmetic edits.
- Defer low-value polish.
- Goal is avoiding rework, not merely minimizing every prompt.

---

## 14. Create Lead — Current Product Direction

The individual marketplace listing can be called a **Lead**. Create Lead should be simple enough for any level of user and use a single-page form rather than a complicated wizard.

Flow:
**Create Lead → Preview → Close/return → Submit Lead → Terms & Conditions confirmation → Publish**

### Public information
- **Title** — required
- **Category** — required
- **Location** — controlled dropdown/backend-provided values to reduce duplicates
- **Description** — required
- **Tags** — optional, unlimited; used for search/discovery

General city/area can be public; an exact location can instead be protected when appropriate.

### Protected information
Use dynamic typed blocks rather than a fixed set of private fields. The creator can use **+ Add protected information** and choose: **Contact Number, Alternative Contact, WhatsApp, Email, Location, Link, Text, Rich Text**.

Multiple blocks are allowed. The eventual dropdown is backend/configuration-driven; Figma may use example options.

For phone fields, the first is naturally **Contact Number** and additional numbers are **Alternative Contact**. Avoid unnecessary role-specific labels. Optional labels may exist where useful for other information types.

Rich Text is sufficient for MVP long/structured protected content. Whiteboard/drawing is a future idea, not current MVP.

### “What’s inside”
Automatically summarize the protected information types and quantities without revealing values, e.g. Contact Number, Alternative Contact, Location, Link, Rich Text. This summary is intended to help buyers understand what they are unlocking before purchase.

### Price
The creator chooses the price. While entering it, show a transparent live breakdown, e.g.:
- Listing price: ₹100
- You receive: ₹80
- Platform fee: ₹20

₹100 is only an editable prototype/example value. The actual commission is backend-configurable; 20% must not become a hard-coded business rule.

### Permission
Require an acknowledgement such as: **“I have permission to share the information included in this lead.”**

### Actions
Bottom actions: **Preview** and **Submit Lead**. Include a close/cross button in the upper-right.

---

## 15. Create Lead Preview Flow

Preview opens in a modal/overlay so the creator does not leave the form. Entered data must remain intact when the modal closes.

### Card preview
Show the actual lead as it could appear in marketplace discovery: category, title, public description/summary, public location, price, and the “What’s inside” protected-information summary. Never reveal protected values. Include **View details**.

### Detail preview
Clicking **View details** changes the same modal into a buyer-facing detail preview showing full public information, price, and “What’s inside”. Protected values remain locked. No real purchase/unlock occurs. Provide return/close controls.

The preview answers: **“This is what another user sees before paying.”**

---

## 16. Submit Lead → Terms & Conditions

Submit should validate required public fields, price, permission acknowledgement, and applicable protected-information requirements. After validation, open a Terms & Conditions confirmation modal.

Detailed legal terms have not been written yet and must not be invented during design. The current prototype only needs the interaction/state, e.g. **Before you publish** → agreement text → **Cancel / Agree & Submit**.

---

## 17. Protected Information UX Principle

The protected-information area should feel like a simple way to assemble the useful private part of a lead, not a technical form builder. Flexibility should exist underneath a simple UX.

## 18. Pricing / Commission

Current illustrative example:
**₹100 listing → ₹80 contributor → ₹20 platform**

This represents a 20% example only.

Commission must be configurable. Future possibilities may include different rates, performance-based rates, promotions, user-specific economics, etc.

Never turn the illustrative 20% into an inflexible architecture rule.

---

## 19. Reputation / Feedback

Feedback is intended to be mandatory after transactions.

Potential elements:
- Rating
- Written review
- Successful/useful transaction rate
- Transaction count
- Reputation history

Do not invent a complex reputation formula before the core transaction model is validated.

---

## 20. Discovery / Search

Initial MVP:
- Search
- Categories
- Location
- Filters
- Listing cards
- Listing details

Future possibility: AI natural-language discovery, e.g.
**“Find the best dental doctor in Kodungallur.”**

Treat this as future unless required by the MVP.

---

## 21. Future Ideas — Not Requirements

- AI-powered search/discovery
- Referral system
- Referral conditions
- Competition/incentives
- Advanced reputation
- Wallet
- Withdrawals

Do not allow these ideas to overcomplicate the MVP.

---

## 22. Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- TanStack Query
- React Hook Form
- Zod

### Backend
- Python
- Django
- Django REST Framework

The user is a backend developer and is comfortable implementing backend architecture manually. Codex should provide heavier assistance on frontend implementation. AI can assist both sides, but architecture should remain deliberate and maintainable.

---

## 23. Repository

One parent Git repository containing separate frontend/backend directories:

```text
project-root/
├── frontend/
└── backend/
```

Do not create separate FE/BE repositories unless explicitly decided later.

---

## 24. Development Workflow

Preferred approach is **vertical slices**:

**Product flow → screen/wireframe → API contract → frontend → backend → integration → manual test → next slice**

For each feature:
1. Define user goal.
2. Define screen(s).
3. Define API/data contract.
4. Build frontend with realistic mock data if needed.
5. Build backend.
6. Connect.
7. Manually test happy/error/loading/empty states.
8. Move on.

This is preferred over designing all screens first and building all APIs first.

---

## 25. Development Phases

Rough sequence:

### Slice 1 — Foundation
App shell, routing, responsive layout, authentication, basic profile.

### Slice 2 — Discovery
Search, categories, filters, listing cards, listing details.

### Slice 3 — Create Listing
Create, edit, preview, publish, my listings.

### Slice 4 — Purchase / Unlock
Payment state, transaction, entitlement, protected information access.

### Slice 5 — Feedback
Rating, review, usefulness/success metric, reputation foundation.

### Slice 6 — Earnings
Seller earnings, transaction ledger, wallet, withdrawal.

Order can change as product understanding improves.

---

## 26. Frontend / Code Quality

Prioritize:
- Reusable components
- Clear naming
- Maintainability
- Minimal duplication
- Minimal unnecessary dependencies
- Focused changes
- Consistent responsiveness
- Existing design-system reuse

Do not create abstractions without a real need.

---

## 27. Backend / API Principles

Backend should support:
- Listing ownership
- Validation
- Protected information access
- Transaction state
- Purchase entitlement
- Configurable pricing/commission
- Reputation/feedback foundation

Security rule:
A public listing endpoint must never expose protected information. Protected fields should only be returned after the correct transaction/entitlement check.

---

## 28. Security / Privacy

Important because the marketplace can contain contact information.

Rules:
- Never expose protected contacts in public listing/search responses.
- Verify purchase entitlement before returning protected data.
- Verify listing ownership for edits.
- Require/validate permission to share contact information.
- Avoid unnecessary sensitive logging.
- Avoid putting private contacts into URLs.
- Be careful with serializers so protected fields cannot leak accidentally.

---

## 29. Git Rules

Codex may inspect:
- Git status
- Diffs
- History

Codex must not:
- Commit
- Push
- Reset
- Perform destructive Git operations

unless explicitly instructed.

---

## 30. Testing

The user can manually test at this stage.

Automated testing requirements were intentionally omitted from the current AGENTS.md. Do not introduce a large testing framework without a concrete need.

---

## 31. Project Instructions

A root `AGENTS.md` exists and covers:
- Product overview
- Workflow
- Security
- Pricing/commission
- Protected information
- Architecture
- Frontend/backend conventions
- Codex working method
- Git rules

Current intention is one root AGENTS.md, not multiple nested instruction files.

---

## 32. Current Design Status

### Completed / sufficiently designed
- Existing product Landing page
- Unified authentication flow
- “Sell What You Know” explanatory page
- Create Lead flow and preview
- Separate public Loof Launching Soon page
- New **How Loof Works** marketplace overview page

### Public Launching Soon page
The new Launching Soon page is a separate screen from the existing product Landing page.

Current accepted direction:
- Brand shown as **Loof**
- No "Loof Market" wordmark
- Minimal "COMING SOON" treatment
- Hero explains Loof without authentication/product-action UI
- Main CTA: **Discover How Loof Works →**
- Category accordion for:
  - Local Knowledge
  - Trusted Connections
  - Useful Recommendations
  - Hard-to-Find Information
- Final CTA points to How Loof Works
- Footer: Loof / "Useful knowledge. Real connections."

The expandable category rows now provide concise explanations/examples and should
not be redesigned unless a concrete UX problem appears.

### How Loof Works page
This new page was generated with Gemini 3.1 Pro and accepted as a strong result.

Purpose:
- General marketplace overview for new visitors.
- Explain Leads, sellers, buyers, protected information, transactions, earnings,
  Lead quality, and trust/reputation.
- It is intentionally different from the seller-focused Sell What You Know page.

Primary final CTAs:
- **Explore Loof →** → existing Explore
- **Sell What You Know →** → existing Sell What You Know

### Later polish
- Mobile “How it works” vertical stacking
- Minor responsive refinements
- Landing/product copy polish when explicitly requested

### Current direction
Stop polishing accepted screens. Continue with the next important MVP flow or
implementation slice.

## 33. Decision Log

### Public brand chosen
**Loof** is the confirmed public brand.
**RelayX** remains the internal codename.

### Keep Launching Soon separate
The public Launching Soon page must remain separate from the existing product Landing
page. Do not replace the development/product Landing page with the launch page.

### Use a dedicated How Loof Works page
The launch page introduces the brand and creates curiosity.
How Loof Works explains the entire marketplace.
Sell What You Know remains the seller-focused educational page.

### Use Lead consistently
The current product UX uses **Lead** as the term for an individual marketplace listing.
The product is still broader than traditional lead generation.

### Keep Loof as the brand, not Loof Market
Use **Loof** as the wordmark. "Marketplace" is a product descriptor.

### Use vertical slices
Chosen to reduce integration risk and keep progress demonstrable.

### Unified passwordless authentication
Chosen to avoid separate login/register/password complexity.

### Phone-first authentication
Phone/WhatsApp is primary; email is alternative.

### Explanatory page before Create Lead
Users should understand value and privacy before creating a Lead.

### Simple Create Lead
The marketplace should be accessible to users with different technical ability.

### Public vs protected information
This distinction is central to the value exchange.

### Configurable commission
The 20% example is not a permanent business rule.

### Do not architect speculative features
Future ideas must not dictate MVP complexity.

## 34. Open Questions

Do not silently finalize these unless required by the current task:
- Exact listing categories
- Exact listing data model
- Payment provider
- Transaction states
- Refund/cancellation rules
- Commission configuration model
- Reputation formula
- Exact feedback timing
- Seller withdrawals
- Geographic/location model
- Moderation/reporting
- Prohibited-listing policy
- Search implementation
- AI discovery architecture
- Referral system

When one becomes necessary, make the smallest sensible decision and record it.

## 35. How a Fresh Chat Should Use This File

When this file is attached:
1. Read it before proposing product changes.
2. Treat it as continuity context and the current project source of truth.
3. Preserve established decisions unless the user explicitly changes them.
4. Do not reopen parked/rejected decisions unnecessarily.
5. Never ask the user to repeat information already covered here.
6. If a new idea conflicts with an established decision, point out the conflict.
7. Clearly distinguish confirmed decisions, proposals, future ideas and open questions.
8. Do not turn speculative ideas into requirements.
9. For Figma prompts, stay focused on the requested screen and reuse the established design system.
10. Avoid unnecessary Figma credit-consuming iterations.
11. For coding, prefer small, maintainable, focused changes.
12. Update this file after major decisions/progress.

---

## 36. Context Maintenance

This is a living continuity document.

Update it after:
- Major product decisions
- Major screen/flow completion
- Important rejected ideas
- Architecture changes
- Resolved problems
- Intense working sessions
- Or roughly every few days/week during active development

Do not turn it into a transcript. Keep it concise enough to remain useful while preserving important continuity.

---

## 37. Immediate Context

Public brand is now **Loof**. RelayX remains the internal codename.

Completed recent design work:
1. Public Loof Launching Soon page — accepted.
2. New How Loof Works page — accepted and liked.
3. Existing product Landing page remains untouched and separate.
4. Existing Sell What You Know page remains separate and seller-focused.

Current page relationship:

Launching Soon
    ↓
How Loof Works
    ├── Explore Loof → existing Explore
    └── Sell What You Know → existing Sell What You Know

For the next Figma screen:
- Use the existing ledger/editorial system.
- Reuse components.
- Make it responsive.
- Keep UX simple.
- Do not redesign completed screens unless explicitly requested.
- Select the appropriate Figma model for the task.
- Keep prompts precise to conserve credits.
- Major new screens/flows → Gemini 3.1 Pro.
- Significant refinement → Claude Sonnet 4.6.
- Small targeted edits → Gemini 3.6 Flash or GPT-5.6.

The next work should continue naturally from the accepted How Loof Works screen
rather than reopening branding or completed launch-page decisions.

# END — LOOF / RELAYX PRODUCT CONTEXT
