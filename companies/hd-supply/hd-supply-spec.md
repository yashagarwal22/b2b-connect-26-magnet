# HD Supply: Enterprise AI + Commerce Advisory Spec

**Account:** HD Supply (The Home Depot) · **Vertical:** MRO / facilities-maintenance distribution
**Prepared by:** i95Dev · **Source basis:** Account 360 (Claude research, Jun 2026) + B2B Connect 2026 AI research dump
**Status:** Final content. Every field below is finished copy, not a fill-in. It maps 1:1 to a `data/accounts/hd-supply.ts` config and drops into the build with no rewriting.

> **What this document is.** A complete, advisory-grade content spec for the HD Supply lead-magnet report, above and below the email gate, with the rationale behind each line and the graphics that replace prose. Benchmark: Sequoia's *Services: The New Software*. Same reusable template as ChemPoint and Bob Barker.

---

## 0. The spine (read this first)

Everything below hangs on one insight about HD Supply, drawn straight from the Account 360.

**HD Supply already won the hard infrastructure fight. The next gain is not faster code, it is the buyer finding and reordering without a rep.** The SAP HANA migration planned for 18 months landed in 9, with a 66% IT-productivity gain and sub-10ms pricing. That is a company that can execute. It arrived at B2B Connect with a named agenda: AI-enabled SDLC, eCommerce software delivery, and Optimizely B2B CMS, backed by a $27M budget under VP Technology Emil DiMotta.

Here is the reframe the agenda invites. AI that writes code faster is the easiest thing in the building to demo and the hardest to bank, and within 18 months it is table-stakes. The compounding gain is one layer down, where a contractor still phones a rep to find the right part. HD Supply already built the engine. It just has not pointed it at the buyer.

Grainger is the proof and the warning. Grainger runs RAG technical discovery in production on 2.5M SKUs, deflecting technical calls and growing digital sales double digits. That is the same MRO catalog problem HD Supply has, solved by pointing AI at the catalog and the call center, not the codebase.

So the strategic question for HD Supply is whether the $27M makes engineers faster or makes buyers self-sufficient. For an MRO distributor whose pricing engine is already real-time, the answer decides whether the SAP HANA investment ever reaches the customer.

That is where AI actually pays here. Not an SDLC copilot. Not a storefront chatbot that cannot read a spec. It is RAG discovery, account-aware pricing served live from HANA, and the buyer experience on top. The model is the commodity. The SAP HANA pricing engine, the MRO catalog, and the Home Depot Pro relationship that Grainger and Ferguson cannot copy are the moat.

That spine runs through the thesis, the wedge, every module, and every play. Guardrail: SAP is the core, so lead with AI-enabled commerce delivery and integration, never an ERP play.

---

## 1. The fixed facts (confirmed from the Account 360)

| Field | Value | Notes for the build |
|---|---|---|
| Company name | HD Supply (The Home Depot) | MRO segment within The Home Depot; 40+ DCs across 25 states |
| Vertical label | MRO / facilities-maintenance distribution | Multifamily, hospitality, healthcare, institutional facilities |
| Revenue band | $1B+ (MRO segment) | Standalone not broken out post-acquisition. Drives the gated $ math |
| Buyers we write to | VP Technology + Director | Emil DiMotta (champion, economic buyer, $27M); Long Lam (influencer) |
| Role emphasis | `ai-strategy` + `ecommerce` | IT-owned, commerce-delivery agenda |
| Active requirement | Yes (both attendees) | Self-reported budget $27M / $19M |
| Domains (email match) | hdsupplysolutions.com, hdsupply.com | Email pattern first.last@hdsupply.com (inferred) |

**The triggers we lean on.**

1. **A verbatim agenda.** "AI Enabled SDLC, E-Commerce Software Delivery, CMS (Optimizely, B2B)," from the buyer himself.
2. **A proven ability to execute.** SAP HANA migration in 9 months against an 18-month plan, +66% IT productivity, sub-10ms pricing.
3. **A serious, IT-owned budget.** $27M, with a clear economic buyer in Emil DiMotta.

**The champions.** Emil DiMotta (VP Technology) is the primary champion and economic buyer. Long Lam (Director) is the technical influencer. Write to the delivery and AI-SDLC agenda for both, then steer it toward the buyer-facing payoff.

**The guardrail (do not break).** SAP is the core. Do **not** pitch an ERP play. Lead with AI-enabled eCommerce software delivery and the integration that ships AI onto the storefront, around SAP, Adobe and Optimizely. Treat AI-SDLC as real but table-stakes, the means, not the moat.

**The audience rule.** This is a sophisticated, AI-fluent IT buyer. Respect that; do not explain AI to him. Reframe where the value is, with named proof.

**One thing to verify live.** HD Supply standalone revenue (now inside Home Depot). Whether the $27M is the attendee's or program-level. The SI of record. Optimizely scope (B2B CMS) and Adobe Commerce versus Experience.

---

## 2. Voice rules (the bar for every line)

- **Aphoristic, contrastive openers.** "AI that writes your code is table stakes. AI that answers your buyer is the moat."
- **A name on every claim.** Grainger, Ferguson, Databricks, Adobe, Optimizely. No floating assertions.
- **One load-bearing stat per idea.** A single number, dropped where it lands hardest.
- **Reframes that flip intuition.** "Build velocity is the means. Buyer velocity is the moat."
- **Economy.** One to three sentence paragraphs. Cut any word that can go.
- **No AI tells.** No em-dashes. Periods, colons, commas only. En-dashes live in numeric ranges ($3–11M).
- **It is about them.** Lead with what HD Supply owns and what Grainger and Ferguson cannot copy.

| Write this | Not this |
|---|---|
| "Point AI at the catalog, not the codebase." | "Accelerate the software development lifecycle." |
| "A spec question answered before a rep picks up." | "Improve customer self-service capabilities." |
| "Account pricing live from HANA." | "Enable real-time personalized pricing." |

---

## 3. The thesis (line one of the report)

Target 8–16 words.

> **AI that writes your code is table stakes. AI that answers your buyer is the moat.**

*Why this line.* It meets DiMotta on his own agenda, then flips it: the value he came for is real but commoditizing, and the durable edge is the buyer experience. Repeatable, and about them.

---

## 4. The wedge (the one play they start with)

- **Wedge label:** RAG technical discovery: answer a spec question on your catalog before a rep picks up.
- **Wedge detail:** Grainger runs exactly this in production on 2.5M SKUs with Databricks, deflecting technical calls that cost $40 to $80 each. It runs on the product data you already hold in SAP HANA, and it is the eCommerce software delivery you came for, aimed at the highest-value workflow you have.

*Why this one.* It is high-compounding (runs on the HANA catalog and pricing only HD Supply owns), bolt-on-ready (no replatform, ships fast), and a direct answer to the stated commerce-delivery agenda, while quietly reframing it from codebase to buyer.

---

## 5. Module 1: The Reframe

**Device:** one arresting stat plus the thesis setup.

- **Opener:** Everyone here is selling you AI that writes code faster. Your buyers are stuck one layer down, unable to find a part.
- **Stat:** `95%`
- **Stat label:** of enterprise AI pilots return nothing to the P&L.
- **Stat source:** MIT NANDA, ~95% of pilots · `https://nanda.media.mit.edu/`
- **Body:**

> 95% of enterprise AI pilots return nothing to the P&L, and AI-enabled SDLC is the easiest of all to demo and the hardest to bank. HD Supply already did the hard infrastructure work: the SAP HANA migration planned for 18 months landed in 9, with sub-10ms pricing. That speed is wasted if a contractor still phones a rep to find the right part. Point AI at the catalog instead of the codebase and it runs on the asset Grainger and Ferguson cannot copy: your SAP HANA pricing engine, your MRO catalog, and the Home Depot Pro relationship behind it.

*Why it works.* The 95% figure lands hard on a technical buyer whose agenda is the easiest pilot to demo, and the body redirects to the asset only HD Supply owns.

---

## 6. Module 2: The Hype Filter

**Device:** a two-column cut, four per column, then a single pitch-warning bar.

- **Opener:** Commodity AI accelerates how you build. Compounding AI accelerates how your buyer finds and reorders.

| Commodity · rent it | Compounding · own it |
|---|---|
| AI-SDLC copilots that speed the build, not the sale | RAG discovery on the full MRO catalog |
| A storefront chatbot that cannot read a spec | Visual and spec search for the part in hand |
| Optimizely content with no product data behind it | Account-based pricing live from SAP HANA |
| Generic recs blind to contract pricing | AEO so AI engines cite your SKUs |

- **Pitch warning:**

> You arrived with an AI-SDLC and commerce-delivery agenda, so expect a pitch for copilots that make engineers faster. Real, and table-stakes within 18 months. The delivery that compounds is the AI you ship to the buyer: search and discovery on the catalog, fed by the SAP HANA data you already migrated. Build velocity is the means. Buyer velocity is the moat.

*One fact worth weaving from the research.* Gartner finds only 16% of M365 Copilot deployments reach full production, and Copilot adds about 83% to MS licensing. Coding copilots are real but rarely the ROI story. Keep it for the live conversation.

---

## 7. Module 2.5: Your Stack (the "we read your stack" infographic)

| Signal (system you run) | The play it unlocks | What you'll be pitched instead |
|---|---|---|
| SAP HANA (sub-10ms pricing) | Serve account-specific price and inventory into search and discovery in real time | Another data platform. You already own the real-time engine. |
| Adobe Commerce / Experience | Layer RAG discovery and account personalization onto the existing storefront | A replatform. The unlock is AI on top, not a new platform. |
| Optimizely B2B CMS | Make content the answer layer: spec-grounded discovery and AEO feeds | More page templates. The value is structured, machine-readable product data. |
| Google Cloud + Splunk | Run RAG and observability on infrastructure you already trust | A new cloud. Build on what is already instrumented. |

*Why these rows.* Each is confirmed in the Account 360, and each steers the $27M from build-side tooling to the buyer-facing AI the HANA investment makes possible.

---

## 8. Module 3: The Commodity vs Compounding Map

**Device:** the signature 2×2. Bubble size = dollar magnitude. Wedge starred, top-right. AI-SDLC is lit-adjacent but greyed on purpose, the agenda they arrived with, real but table-stakes.

**Map intro line:**

> We mapped HD Supply's world. The lit bubbles pay for an MRO distributor that already modernized its core. The greyed one is the agenda you arrived with, real but table-stakes. The star is where your SAP HANA investment finally reaches the buyer.

**The plays and coordinates** (compounding 0–1, bolt-on 0–1, magnitude 1–5):

| Play | Compounding | Bolt-on | Magnitude | Lit (yours) | Wedge |
|---|---|---|---|---|---|
| RAG technical discovery | 0.85 | 0.78 | 4 | yes | ★ |
| Account-based pricing / personalization | 0.86 | 0.65 | 5 | yes | |
| B2B-aware search | 0.82 | 0.80 | 4 | yes | |
| Visual / spec search | 0.80 | 0.55 | 3 | yes | |
| AEO + answer layer | 0.90 | 0.74 | 3 | yes | |
| AI PIM enrichment | 0.80 | 0.58 | 3 | yes | |
| Agentic-commerce ready | 0.95 | 0.28 | 4 | yes | |
| AI-enabled SDLC | 0.45 | 0.85 | 2 | no | |
| Generic storefront chatbot | 0.15 | 0.90 | 1 | no | |
| LLM product copy | 0.10 | 0.78 | 1 | no | |

**Text rendering of the quadrant** (for reviewers without the live chart):

```
 COMPOUNDING (runs on your data)
        ▲
        │  Agentic-commerce ready ●         AEO ●          ★ RAG TECHNICAL DISCOVERY
        │     Account-based pricing ●     B2B-aware search ●     Visual / spec search ●
        │        AI PIM enrichment ●
        │
        │  · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
        │                                    AI-enabled SDLC ○ (real, but table-stakes)
        │                LLM product copy ○          Generic chatbot ○
        ▼
 COMMODITY (runs on the model)
  FOUNDATION-REQUIRED ◀──────────────────────────────────────────▶ BOLT-ON-READY
        (data work first)                                          (start now)

  ● lit = yours   ○ greyed = table-stakes   ★ wedge = found money, start now
  bubble size = dollar magnitude
```

*Why the map lands.* The star is RAG discovery, top-right. Greying AI-SDLC, the agenda they arrived with, is the bold, honest move that protects the $27M from being spent on build velocity alone.

---

## 9. The gate teaser (the blurred line on the lock)

> Your estimated annual call-deflection and conversion opportunity is a real number we calculated for HD Supply. Enter your work email to reveal your model.

**The number behind the blur:** $3–11M (modeled from the pools below). Concrete, and a fraction of the $27M already in play.

---

---

# Below the gate (the payoff)

## 10. The money pools (where the dollars are)

**Device:** four bars, each with one named proof point. Headline $3–11M.

```
 Call deflection: spec questions answered without a rep          $1M ██████████████ $4M
 Conversion: AI search lift on the digital mix                  $1M ████████████ $3M
 Account pricing: rep-assisted orders go self-service           $0.5M ████████████ $3M
 Foundation: catalog and pricing data, AI-ready                 $0.3M ████████ $1M
                                                                 └─ headline: $3–11M ─┘
```

**Pool 1. Call deflection: spec questions answered without a rep. ($1–4M)**
Technical calls cost $40 to $80 each, and an MRO catalog generates a lot of them. Grainger runs RAG discovery on 2.5M SKUs to deflect exactly this. Deflecting 20% of a high call volume at $50 each is real money on the desk. *(Verified. Source: Grainger / Databricks.)*

**Pool 2. Conversion: AI search lift on the digital mix. ($1–3M)**
AI search converts at roughly 1.67 times keyword, and HD Supply runs a strong eCommerce mix. On the search-driven share of the channel, that lift recovers demand that today fails on a zero-result lookup. *(Verified. Source: research dump, Part 3.2.)*

**Pool 3. Account pricing: rep-assisted orders go self-service. ($0.5–3M)**
With sub-10ms pricing already live in HANA, account-aware self-service pricing converts rep-assisted orders into hands-off ones. Cutting rep-assisted orders from 40% to 25% on a large channel saves several million a year. *(Verified. Source: research dump, Part 3.2; HD Supply SAP HANA.)*

**Pool 4. Foundation: catalog and pricing data, AI-ready. ($0.3–1M)**
RAG, search and AEO all run on complete, machine-readable product data. AI PIM enrichment cuts manual data time up to 60% and gates the ROI of the rest. *(Verified. Source: research dump, Part 3.2.)*

*Why four.* They are the four levers of a modernized MRO distributor: deflect the calls, convert the search, move orders to self-service, and ready the data. Each maps to a phase and a play.

---

## 11. The roadmap (sequence it so it self-funds)

```
 NOW ───────── 3–6 MO ───────── 6–12 MO ───────── FOUNDATION
  ●               ○                  ○                  ○
 Phase 1        Phase 2            Phase 3           Phase 4
 [ACTIVE]
 RAG discovery  Account pricing +  AEO + PIM         Agentic-commerce
 POC on one     visual / spec      enrichment        readiness
 category       search
```

**Phase 1, starts now. RAG discovery POC on one category.**
Spec-grounded discovery on one product category, grounded in SAP HANA data, with call deflection measured against a baseline. This is the Grainger pattern, scoped surgically, and it is the wedge.

**Phase 2, 3 to 6 months. Account pricing and visual search.**
Account-aware pricing and personalization served live from HANA, plus visual and spec search for the part in hand.

**Phase 3, 6 to 12 months. AEO and PIM enrichment.**
AEO so AI engines cite HD Supply SKUs, on top of AI-enriched, machine-readable catalog data.

**Phase 4, the foundation. Agentic-commerce readiness.**
Make the catalog contract-aware and API-first for agentic buyers. The data work begins in Phase 1 and matures here.

*Why this order.* The fast, HANA-fed win goes first and proves call deflection, then self-funds the deeper buyer-experience and data work. AI-SDLC can run in parallel as a separate, table-stakes track.

---

## 12. The play shortlist (discovery, commerce, and the foundation)

### Discovery and the buyer experience

**A. RAG technical discovery.** *(Wedge)*
- *Problem:* A contractor with a maintenance problem still calls a rep to find the right part and spec, and AI-SDLC does nothing about that.
- *Named case:* Grainger runs RAG discovery on 2.5M SKUs in production to deflect technical calls.
- *ROI:* Each deflected technical call saves $40 to $80 and moves the buyer to self-service.
- *What i95Dev does:* Spec-grounded discovery on one category, grounded in SAP HANA data, ranked on inventory and approved items. *(Verified. Grainger / Databricks.)*

**B. Account-based pricing and personalization.**
- *Problem:* Sub-10ms pricing lives in HANA but does not always reach the buyer as account-aware self-service.
- *Named case:* Cutting rep-assisted orders 40% to 25% on a large channel saves several million a year (research benchmark).
- *ROI:* Rep-assisted orders become hands-off, on pricing you already compute in real time.
- *What i95Dev does:* Serve account-specific price and entitlements live from HANA into the Adobe storefront. *(Verified. Research dump, Part 3.2.)*

**C. Visual and spec search.**
- *Problem:* MRO buyers often have the part, not the number, and a failed lookup is a call or a lost sale.
- *Named case:* Grainger runs sub-three-second mobile visual part matching.
- *ROI:* Every 1% shift from rep to digital saves $1 to $3M a year.
- *What i95Dev does:* Visual and spec search on the catalog, integrated to HANA inventory. *(Verified. Grainger.)*

### Acquisition and the foundation

**D. AEO and AI PIM enrichment.**
- *Problem:* AI engines cite whoever has machine-readable spec content, and incomplete attributes block search and AEO alike.
- *Named case:* AI referral visits hit 1.13B in June 2025; AI PIM enrichment cuts manual data time up to 60%.
- *ROI:* Being cited by AI engines and a complete, searchable catalog.
- *What i95Dev does:* AI-drafted, human-approved enrichment plus a schema feed for AEO. *(Verified. Research dump, Part 3.2.)*

**E. Agentic-commerce readiness.**
- *Problem:* B2B agentic purchasing is forming, and an unstructured catalog is invisible to it.
- *Named case:* Gartner projects most B2B purchases AI-intermediated by 2028.
- *ROI:* The risk is not being behind in 2026, it is being invisible in 2027 to 2028.
- *What i95Dev does:* Contract-aware, API-first catalog structure on the clean layer. *(Directional. Research dump, Part 3.2.)*

*Why this set.* It spans discovery, commerce and the foundation, all pointed at the buyer rather than the codebase, and every named case is a real MRO or distribution analog.

---

## 13. Why i95Dev (the close)

**Opener:**

> You'll be sold faster engineering. Your gain is the buyer who never needs a rep.

**Body:**

> The AI-SDLC vendors will make this about build velocity, and the Big-4 will make it a program. Your highest-return move is neither. It is shipping AI onto the storefront, RAG discovery, account pricing, visual search, fed by the SAP HANA data you already migrated. That is exactly i95Dev's lane: AI-enabled eCommerce software delivery on the commerce-to-ERP seam, surgical where the Big-4 are sprawling, delivery pods that ship in weeks. Grainger proved the MRO model. We bring it to your catalog.

**The proof to weave (from the research).** A $200M company was quoted a $3M, eight-month, seven-platform transformation; a specialist shipped the same outcome in six weeks. The giants over-scope the surgical delivery you actually need.

**CTA title:** Book your AI Commerce-Delivery Diagnostic.
**CTA subtitle:** A fixed-scope assessment that scopes a RAG-discovery POC on one category, sizes the call-deflection and conversion upside against HD Supply's HANA data, and maps the delivery without a platform program. Weeks, not months.

**Credibility strip:** 500+ B2B brands · 25+ years · 1,200+ projects.

---

## 14. Sources and credibility

| Claim | Label | Source |
|---|---|---|
| 95% of AI pilots return nothing | Verified | MIT NANDA · nanda.media.mit.edu |
| Grainger RAG on 2.5M SKUs, technical-call deflection | Verified | Databricks / DC360 |
| Grainger 10.1% Q1 sales growth | Verified | DC360 (Grainger) |
| AI search ~1.67x keyword conversion | Verified | Research dump, Part 3.2 |
| Grainger sub-3s visual part matching | Verified | Research dump, Part 3.2 |
| AI PIM enrichment cuts manual data time up to 60% | Verified | Research dump, Part 3.2 |
| AI referral visits 1.13B in June 2025 | Verified | Research dump, Part 3.2 |
| Only 16% of M365 Copilot deployments reach production | Verified | Gartner (research dump Part 4.1) |
| Most B2B purchases AI-intermediated by 2028 | Directional | Gartner (research dump Part 3.2) |
| Big-4 $3M/8-mo vs 6-week specialist fix | Directional | Research dump, Part 5.4 |

**Flagged to verify live:** HD Supply standalone revenue (inside Home Depot). Whether the $27M is the attendee's or program-level. SI of record. Optimizely scope (B2B CMS) and Adobe Commerce versus Experience.

---

## 15. Handback and reuse

This file is the finished content and the template; every block maps to a field in `data/accounts/hd-supply.ts`, mirroring `bob-barker.ts`.

**Note on positioning.** The Account 360 scores HD Supply a fit of 25 by formula, but the IT-owned $27M budget and named agenda make it one of the hottest signals in the set. The content reframes a build-side agenda toward the buyer-facing payoff, on the SAP core, with AI-SDLC treated as a real but table-stakes parallel track.
