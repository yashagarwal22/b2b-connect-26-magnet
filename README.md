# i95Dev · B2B Connect 2026 — Personalized AI-in-Commerce Lead Magnet

> "Where AI Actually Lifts *Your* Commerce." A QR-scanned, mobile-first, per-account
> mini-report that earns the diagnostic. Built to the spec in
> `../B2B_Connect_2026_LeadMagnet_Spec.md`. **ChemPoint is the first fully-worked account.**

## Stack (spec §11.1)
Next.js 15 (App Router, TS) · Tailwind + ShadCN-only UI · Supabase (Postgres) ·
HubSpot CRM v3 · PostHog · Framer Motion · Recharts. Dark navy theme, mobile-first.

## Run it
```bash
npm install
cp .env.example .env.local   # all integrations optional — app runs from local seed
npm run dev                  # http://localhost:3000
```
Open **http://localhost:3000** → search "ChemPoint" → read the personalized report →
the email gate unlocks the dollarized payoff.

It works with **zero configuration**: with no Supabase/HubSpot/PostHog keys the account
config is read from `data/accounts/*`, leads are logged to the server console, and CRM
sync / analytics no-op gracefully.

## How the gate works (spec §11.3 — a real boundary, not CSS)
- `/r/[slug]` server-renders the **teaser only** (modules 1–3). The payoff is never in the
  page payload.
- `POST /api/unlock` validates the work email, persists the lead, upserts HubSpot, and
  **only then** returns the below-gate payoff (modules 4–7), which animates in (blur→reveal).

## Routes
| Route | Purpose |
|---|---|
| `/` | Landing — thesis headline + company typeahead (62 attendees + fallback) |
| `/r/[slug]` | Personalized report (teaser server-side; payoff after unlock) |
| `GET /api/account/[slug]` | Teaser config only |
| `POST /api/unlock` | Lead → Supabase + HubSpot → returns payoff |

## The 7 modules (config-driven, spec §6/§11.5)
1 Reframe · 2 Hype Filter · 3 Commodity-vs-Compounding Map *(above gate)* —
4 Money Pools · 5 Sequencing Roadmap · 6 3-Play Shortlist · 7 Why i95Dev + CTA *(below gate)*.

Every module reads from an `AccountConfig` (`lib/types.ts`). **Adding/editing an account is a
data change only** — add a file in `data/accounts/` (or a Supabase row), never a code change.

## Wiring the integrations (when ready)
- **Supabase:** run `data/schema.sql`, set `SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY`, then
  `npm run seed` to push the configs. RLS on, server-only access.
- **HubSpot:** set `HUBSPOT_PRIVATE_APP_TOKEN`; create the `b2bconnect_*` custom properties
  (spec §11.7) before launch.
- **PostHog:** set `NEXT_PUBLIC_POSTHOG_KEY` (+ host). Event taxonomy per spec §11.8 is wired.

## Still needs sign-off before launch (spec §13)
Exact i95dev.com brand hex/fonts (placeholders in `app/globals.css` / `tailwind.config.ts`),
the real diagnostic offer name/price, ROI bracket approval, case-study clearance, consent copy,
and the remaining 61 attendee configs.
```
data/accounts/chempoint.ts   ← the worked reference. Clone it for each attendee.
```
