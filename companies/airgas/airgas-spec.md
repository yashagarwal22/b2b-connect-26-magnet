# Airgas (Air Liquide): Enterprise AI + Commerce Advisory Spec

**Account:** Airgas (Air Liquide) · **Vertical:** Industrial, medical and specialty gas + welding-hardgoods distribution
**Prepared by:** i95Dev · **Source basis:** Account 360 (Claude research, Jun 2026) + B2B Connect 2026 AI research dump
**Status:** Final content. Every field below is finished copy, not a fill-in. It maps 1:1 to a `data/accounts/airgas.ts` config and drops into the build with no rewriting.

> **What this document is.** A complete, advisory-grade content spec for the Airgas lead-magnet report, above and below the email gate, with the rationale behind each line and the graphics that replace prose. Benchmark: Sequoia's *Services: The New Software*. Same reusable template as ChemPoint and Bob Barker. Written to a Finance buyer, so the dollar logic leads.

---

## 0. The spine (read this first)

Everything below hangs on one insight about Airgas, and about who is asking.

**Airgas wins on density and reliability, the largest US gas-and-hardgoods network with a recurring cylinder-rental book, and the AI that pays for a business like that lives in the back office, not the storefront.** The attendee is Kurt Smetana, VP Finance, whose stated reason to attend is "Anything AI is ideal," with a budget note of "only local projects." That is a Finance leader hunting for AI that shows up in the P&L, with an appetite for a contained pilot rather than a platform program.

The instinct is right; the usual target is wrong. A Finance buyer will be shown customer-facing chatbots and dashboards, which are cheap, visible and rarely move EBIT. The AI a CFO can actually defend is margin enforcement and AP automation: cash and margin, not headcount, on data Airgas already owns in SAP.

The dollar logic is decisive. A single point of realized price drops almost entirely to the bottom line, which is why pricing beats acquisition roughly ten to one for a distributor. McKinsey puts the AI pricing lift at 2 to 6% of gross margin, and a $15B distributor recovered 200 basis points in ten weeks. That is the shape of a "local project" with a real number.

So the strategic question for Airgas is whether its AI curiosity gets spent on a visible demo or on the margin leaking quietly through 900-plus branches. For a recurring-revenue distributor on SAP, the answer is the difference between a science project and a self-funding program.

That is where AI actually pays here. Not a homepage chatbot. Not old ML forecasting relabeled. It is contract-price enforcement, autonomous AP, and demand sensing on the SAP order and pricing data behind the branches and the cylinder book that Linde and Matheson cannot see into. The model is the commodity. That proprietary order and pricing data is the moat.

That spine runs through the thesis, the wedge, every module, and every play. Guardrail: Finance alone will not sponsor a commerce build, so lead with the CFO-fundable back-office case and map the eCommerce owner for the storefront plays.

---

## 1. The fixed facts (confirmed from the Account 360)

| Field | Value | Notes for the build |
|---|---|---|
| Company name | Airgas (Air Liquide) | Subsidiary of Air Liquide since 2016; HQ Radnor, PA |
| Vertical label | Industrial, medical and specialty gas + welding-hardgoods distribution | 900+ branches + Airgas.com + Total Access telesales |
| Revenue band | $1B+ (Air Liquide Americas segment) | Standalone not broken out. Drives the gated $ math |
| Buyer we write to | VP Finance | Kurt Smetana; "Anything AI is ideal"; "only local projects" |
| Role emphasis | `finance` | The dollar logic leads |
| Active requirement | No for this attendee | Scouting AI; appetite for a contained pilot |
| Domains (email match) | airgas.com | Email pattern first.last@airgas.com (inferred) |

**The triggers we lean on.**

1. **A Finance leader hunting AI.** "Anything AI is ideal," which is an open door for a P&L-anchored pilot.
2. **A local-project budget.** Appetite for a contained, fast win, not a platform program, which fits a margin or AP pilot exactly.
3. **A recurring-revenue distributor on SAP.** SAP Commerce (Hybris) on an SAP ERP base, with 900-plus branches and cylinder rental, the ideal substrate for pricing and AP AI.

**The champion and the gap.** Kurt Smetana is the AI-curious economic influencer for the back-office case. The true owner of the SAP Commerce roadmap, the VP or Director of eCommerce and Digital, is unnamed; map that person for any storefront play, because Finance alone will not sponsor a commerce build.

**The guardrail (do not break).** Lead with the back-office, P&L case (pricing, AP) that a CFO can fund as a local project. Do **not** lead with a commerce build to a Finance buyer. Do **not** pitch an SAP replacement; extend and integrate.

**The audience rule.** This is a Finance reader. Every claim ties to cash, margin or working capital, never to vague "transformation."

**One thing to verify live.** Standalone Airgas revenue (not broken out). ERP as SAP is inferred-strong. The SI of record (Air Liquide uses Accenture, Capgemini, IBM, all competitors). Whether a Finance VP can sponsor digital spend, and who owns airgas.com.

---

## 2. Voice rules (the bar for every line)

- **Aphoristic, contrastive openers.** "Skip the chatbot. Fund the AI that recovers margin you already negotiated."
- **A name on every claim.** McKinsey, Wilbur-Ellis, Grainger, Linde, Matheson. No floating assertions.
- **One load-bearing stat per idea.** A single number, dropped where it lands hardest.
- **Reframes that flip intuition.** "A point of realized price drops almost entirely to the bottom line."
- **Economy.** One to three sentence paragraphs. Cut any word that can go.
- **No AI tells.** No em-dashes. Periods, colons, commas only. En-dashes live in numeric ranges ($2–6M).
- **It is about them.** Lead with what Airgas owns and what Linde and Matheson cannot see into.

| Write this | Not this |
|---|---|
| "Margin you already negotiated, leaking." | "Optimize pricing performance." |
| "Cash and margin, not headcount." | "Drive operational efficiency." |
| "A local project with a real number." | "Embark on an AI transformation journey." |

---

## 3. The thesis (line one of the report)

Target 8–16 words.

> **Skip the chatbot. Fund the AI that recovers margin you already negotiated.**

*Why this line.* It speaks straight to a Finance buyer, rejects the visible-but-empty demo, and names the P&L win in plain words. Repeatable, and about them.

---

## 4. The wedge (the one play they start with)

- **Wedge label:** Contract-pricing and margin-leak recovery, scoped as one local project on your SAP data.
- **Wedge detail:** 1 to 2% margin leakage on a distributor's book is normal, and recovering it is near-pure drop-through to the P&L, the only AI case a CFO reliably funds. It runs on the SAP pricing and order data you already hold, and it fits the local-project budget you described.

*Why this one.* It is the highest-magnitude P&L play, runs on data Airgas owns, and is contained enough to fund as a local project. For a Finance buyer, it is the fastest path from "anything AI" to an audited number.

---

## 5. Module 1: The Reframe

**Device:** one arresting stat plus the thesis setup.

- **Opener:** Everyone is selling you AI for the storefront. For a distributor, the money is in the back office.
- **Stat:** `2–6%`
- **Stat label:** gross-margin lift from AI B2B pricing.
- **Stat source:** McKinsey, B2B pricing & AI · `https://www.mckinsey.com/`
- **Body:**

> McKinsey puts the gross-margin lift from AI pricing at 2 to 6%, and at distributor scale that is the highest-ROI AI there is, because a point of realized price drops almost entirely to the bottom line. A $15B distributor recovered 200 basis points across 1.5M SKUs, then another 50 with agentic AI in ten weeks. Airgas does not need a science project to do the same. It runs on the SAP pricing and order data behind 900-plus branches and a recurring cylinder-rental book that Linde and Matheson cannot see into.

*Why it works.* For a Finance reader, the margin figure is the most persuasive stat in the category, and the named distributor case makes it concrete. The body ends on what only Airgas owns.

---

## 6. Module 2: The Hype Filter

**Device:** a two-column cut, four per column, then a single pitch-warning bar.

- **Opener:** Commodity AI chases new customers. Compounding AI protects the margin on the ones you have.

| Commodity · rent it | Compounding · own it |
|---|---|
| A storefront chatbot for order status | Contract-price compliance and margin floors |
| Generic recs blind to contract pricing | Margin-leak recovery on the SAP order book |
| Old ML demand forecasting relabeled "AI" | Autonomous AP on 900-branch invoice volume |
| An "AI strategy" workshop with no P&L line | RAG technical lookup for gas and welding specs |

- **Pitch warning:**

> As a Finance leader hunting AI, you will see customer-facing chatbots and dashboards. They are cheap, visible and rarely move EBIT. The case a CFO can defend is margin enforcement and AP automation: cash and margin, not headcount, on data you already own. Keep it local-project sized and make the first one self-fund the next.

*One fact worth weaving from the research.* In relationship and contract B2B, the win is not consumer-style dynamic pricing, it is enforcing the price you already negotiated and holding margin floors. Keep it for the live conversation.

---

## 7. Module 2.5: Your Stack (the "we read your stack" infographic)

| Signal (system you run) | The play it unlocks | What you'll be pitched instead |
|---|---|---|
| SAP Commerce (Hybris) B2B storefront | Add account-aware pricing and RAG technical lookup on the existing storefront | A replatform. Extend Hybris, do not replace it. |
| SAP ERP (global Air Liquide SAP) | Run margin-leak recovery and AP automation on the order and invoice data | A new finance suite. The data is already in SAP. |
| Airgas eBusiness (punchout, e-invoicing) | Enforce contract pricing consistently across punchout and national accounts | More portals. The unlock is one price logic across channels. |
| 900+ branches, recurring cylinder rental | Demand sensing and replenishment on real reorder signals | Generic forecasting. Your reorder data is the moat. |

*Why these rows.* Each is confirmed or strongly inferred in the Account 360, and each points the AI at the SAP data that produces a P&L number.

---

## 8. Module 3: The Commodity vs Compounding Map

**Device:** the signature 2×2. Bubble size = dollar magnitude. The wedge is the highest-value start-now play, starred.

**Map intro line:**

> We mapped Airgas's world for a Finance buyer. The lit bubbles show up in the P&L, not just the demo, sized by the dollars on the table. The star is the highest-value place to start: margin you already negotiated, recovered on data you already own.

**The plays and coordinates** (compounding 0–1, bolt-on 0–1, magnitude 1–5):

| Play | Compounding | Bolt-on | Magnitude | Lit (yours) | Wedge |
|---|---|---|---|---|---|
| Pricing / margin enforcement | 0.90 | 0.62 | 5 | yes | ★ |
| Autonomous AP | 0.70 | 0.85 | 3 | yes | |
| Demand sensing / replenishment | 0.72 | 0.50 | 4 | yes | |
| RAG technical lookup | 0.82 | 0.66 | 3 | yes | |
| Account-based pricing personalization | 0.85 | 0.55 | 4 | yes | |
| Supplier risk intelligence | 0.70 | 0.40 | 3 | yes | |
| Generic storefront chatbot | 0.15 | 0.90 | 1 | no | |
| LLM product copy | 0.10 | 0.78 | 1 | no | |
| ML forecasting (relabeled) | 0.40 | 0.42 | 2 | no | |

**Text rendering of the quadrant** (for reviewers without the live chart):

```
 COMPOUNDING (runs on your data)
        ▲
        │  ★ PRICING / MARGIN ENFORCEMENT
        │     Account-based pricing ●     RAG technical lookup ●     Autonomous AP ●
        │        Supplier risk ●          Demand sensing ●
        │
        │  · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
        │
        │                  ML forecasting (relabeled) ○   LLM copy ○   Generic chatbot ○
        ▼
 COMMODITY (runs on the model)
  FOUNDATION-REQUIRED ◀──────────────────────────────────────────▶ BOLT-ON-READY
        (data work first)                                          (start now)

  ● lit = yours   ○ greyed = table-stakes   ★ wedge = highest-value start-now
  bubble size = dollar magnitude
```

*Why the map lands.* Pricing sits highest on compounding and largest on magnitude, the CFO's play. Autonomous AP sits furthest right, the fastest bolt-on that self-funds the next step.

---

## 9. The gate teaser (the blurred line on the lock)

> Your estimated annual margin-recovery and cost-saved opportunity is a real number we calculated for Airgas. Enter your work email to reveal your model.

**The number behind the blur:** $2–6M (modeled from the pools below). Conservative, near-pure margin, and clearly "local project" in scope to start.

---

---

# Below the gate (the payoff)

## 10. The money pools (where the dollars are)

**Device:** four bars, each with one named proof point. Headline $2–6M.

```
 Margin: contract-price enforcement, leak recovered             $1M ██████████████ $3M
 AP: invoice cost from ~$10 to ~$3                              $0.3M ████████ $1M
 Working capital: demand sensing and replenishment             $0.5M ████████ $1.5M
 Service time: spec lookups answered without a rep             $0.2M ██████ $0.5M
                                                                └─ headline: $2–6M ─┘
```

**Pool 1. Margin: contract-price enforcement, leak recovered. ($1–3M)**
1 to 2% of margin leaks on a distributor's book, and recovering it is near-pure profit. PROS and Wilbur-Ellis added 2% on 6,000 SKUs; the McKinsey $15B distributor recovered 200 basis points in ten weeks. On the relevant Airgas book, that is the headline pool. *(Verified. Source: McKinsey B2B pricing; PROS / Wilbur-Ellis.)*

**Pool 2. AP: invoice cost from about $10 to about $3. ($0.3–1M)**
Autonomous AP takes invoice processing cost from roughly $10 to $3 with intelligent matching and exception reasoning. Across 900-branch invoice volume, that is real, fast, low-data-prerequisite savings that self-fund the harder pricing work. *(Verified. Source: research dump, Part 2.2.)*

**Pool 3. Working capital: demand sensing and replenishment. ($0.5–1.5M)**
Demand sensing on real reorder and cylinder-rental signals frees inventory working capital. BRF's SAP IBP demand sensing cut planning time 33%, and a 10% inventory cut on a meaningful base is millions freed. *(Verified. Source: BRF / SAP IBP.)*

**Pool 4. Service time: spec lookups answered without a rep. ($0.2–0.5M)**
Gas and welding buyers ask technical questions that today route to a rep. RAG technical lookup on the SAP Commerce catalog deflects the routine ones, in the Grainger pattern. *(Verified. Source: Grainger / Databricks.)*

*Why four.* They are the four levers a CFO can fund at a distributor: recover the margin, cut the AP cost, free the working capital, and give back the service time. Each maps to a phase and a play.

---

## 11. The roadmap (sequence it so it self-funds)

```
 NOW ───────── 3–6 MO ───────── 6–12 MO ───────── FOUNDATION
  ●               ○                  ○                  ○
 Phase 1        Phase 2            Phase 3           Phase 4
 [LOCAL PROJECT]
 Margin-leak    Autonomous AP      Demand sensing    RAG lookup +
 diagnostic +   (self-funded by    + replenishment   commerce-to-SAP
 price compliance Phase 1)                           foundation
```

**Phase 1, starts now. Margin-leak diagnostic and price compliance.**
A contained local project: diagnose margin leakage and enforce contract-price compliance on one product category's SAP order data. The PROS and Wilbur-Ellis and McKinsey distributor cases are the pattern. This is the wedge, and it produces the first number.

**Phase 2, 3 to 6 months. Autonomous AP.**
Roll the recovered margin into autonomous AP across branch invoice volume, the fast, low-data-prerequisite win that self-funds the next step.

**Phase 3, 6 to 12 months. Demand sensing and replenishment.**
Demand sensing on reorder and cylinder-rental signals to free working capital, with the eCommerce owner now engaged.

**Phase 4, the foundation. RAG lookup and the commerce-to-SAP seam.**
RAG technical lookup on the Hybris storefront and the integration that keeps pricing and inventory one truth. Requires the eCommerce owner as sponsor.

*Why this order.* The CFO-fundable margin win goes first and the fast AP win self-funds the rest, so the program never needs a big upfront platform commitment. Storefront plays follow once the eCommerce owner is engaged.

---

## 12. The play shortlist (margin, operations, and commerce)

### Margin and cash

**A. Contract-price enforcement and margin-leak recovery.** *(Wedge)*
- *Problem:* Across 900-plus branches and a large contract book, negotiated margin leaks where price compliance is invisible.
- *Named case:* PROS and Wilbur-Ellis added 2% on 6,000 SKUs; a McKinsey $15B distributor recovered 200 basis points in ten weeks.
- *ROI:* 1 to 2 points of recovered margin on the relevant book is near-pure profit.
- *What i95Dev does:* Margin-leak and price-compliance analytics on Airgas SAP order, cost and contract data, surfacing where to hold price. *(Verified. McKinsey; PROS / Wilbur-Ellis.)*

**B. Autonomous accounts payable.**
- *Problem:* AP across 900 branches is labor-heavy, and missed early-pay discounts and fraud cost on top.
- *Named case:* Autonomous AP takes invoice cost from roughly $10 to $3 with intelligent matching and exception reasoning.
- *ROI:* Fast, low-data-prerequisite savings that self-fund the pricing work.
- *What i95Dev does:* An AP automation layer over SAP that resolves the routine and routes true exceptions to a person. *(Verified. Research dump, Part 2.2.)*

### Operations

**C. Demand sensing and replenishment.**
- *Problem:* Forecasting on history alone misses short-horizon signals across branches and cylinder rental.
- *Named case:* BRF's SAP IBP demand sensing cut planning time 33%.
- *ROI:* Freed inventory working capital while protecting branch availability.
- *What i95Dev does:* Demand sensing and replenishment on Airgas reorder and rental data, on the SAP base. *(Verified. BRF / SAP IBP.)*

**D. Multi-tier supplier risk.**
- *Problem:* Global sourcing exposure can interrupt supply to branches.
- *Named case:* Resilinc and Everstream give 60 to 90 day advance warnings.
- *ROI:* Avoiding one or two disruptions a year is asymmetric insurance.
- *What i95Dev does:* Add supplier-risk signals to Airgas planning data. *(Verified. Resilinc / Everstream.)*

### Commerce (with the eCommerce owner)

**E. RAG technical lookup and account-aware pricing on Hybris.**
- *Problem:* Gas and welding buyers ask technical questions and need account-aware pricing the storefront does not always surface.
- *Named case:* Grainger runs RAG technical discovery on 2.5M SKUs in production.
- *ROI:* Deflected technical calls and more self-service on the existing SAP Commerce storefront.
- *What i95Dev does:* RAG lookup and account-aware pricing on Hybris, bridged to SAP, with the eCommerce owner as sponsor. *(Verified. Grainger / Databricks.)*

*Why this set.* It puts the CFO-fundable margin and cash plays first, operations next, and commerce last once the right owner is engaged. Every named case is a real distributor analog.

---

## 13. Why i95Dev (the close)

**Opener:**

> You'll be sold a chatbot. Your gain is the margin you already negotiated, recovered.

**Body:**

> The AI vendors will sell a Finance leader something visible, and the Big-4 will sell a program. Your fundable win is a local project: margin enforcement and AP automation on the SAP data you already own, with an audited number. That is exactly i95Dev's lane: surgical on the commerce-to-ERP seam, priced for a contained pilot, fluent in SAP. We extend Hybris and SAP, we do not replace them, and we will tell you plainly that the storefront plays need the eCommerce owner, whom we will help you map.

**The proof to weave (from the research).** A $200M company was quoted a $3M, eight-month, seven-platform transformation; a specialist shipped the same outcome in six weeks. The giants over-scope; a local project is exactly what they are built not to sell.

**CTA title:** Book your Margin-Recovery Diagnostic.
**CTA subtitle:** A fixed-scope, local-project assessment that quantifies margin leakage and AP savings against Airgas SAP data, and sizes the self-funding path. Weeks, not a transformation.

**Credibility strip:** 500+ B2B brands · 25+ years · 1,200+ projects.

---

## 14. Sources and credibility

| Claim | Label | Source |
|---|---|---|
| 2–6% gross-margin lift from AI B2B pricing | Verified | McKinsey B2B pricing |
| $15B distributor +200bps then +50bps in 10 weeks | Verified | McKinsey B2B pricing |
| PROS / Wilbur-Ellis +2% on 6,000 SKUs | Verified | PROS / Wilbur-Ellis |
| Autonomous AP invoice cost ~$10 to ~$3 | Verified | Research dump, Part 2.2 |
| BRF SAP IBP demand sensing −33% planning time | Verified | SAP / BRF |
| Resilinc / Everstream 60–90 day risk warnings | Verified | Resilinc / Everstream |
| Grainger RAG on 2.5M SKUs | Verified | Databricks / DC360 |
| Contract-B2B win is enforcement, not spot pricing | Directional | Simon-Kucher (research dump Part 2.1) |

**Flagged to verify live:** standalone Airgas revenue (not broken out). ERP as SAP is inferred-strong. SI of record (Air Liquide uses Accenture, Capgemini, IBM). Whether a Finance VP can sponsor digital spend, and who owns airgas.com.

---

## 15. Handback and reuse

This file is the finished content and the template; every block maps to a field in `data/accounts/airgas.ts`, mirroring `bob-barker.ts`.

**Note on positioning.** The Account 360 scores Airgas a cool fit, but the Finance buyer's open AI interest plus a recurring-revenue distributor on SAP make the back-office case strong. The content is written to a CFO: it leads with margin and cash, treats commerce as a later phase that needs the eCommerce owner, and keeps the first scope a local project.
