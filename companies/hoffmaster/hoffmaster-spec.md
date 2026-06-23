# Hoffmaster Group: Enterprise AI + Commerce Advisory Spec

**Account:** Hoffmaster Group · **Vertical:** Premium single-use tableware and baking products (manufacturer)
**Prepared by:** i95Dev · **Source basis:** Account 360 (Jun 2026) + B2B Connect 2026 AI research dump
**Status:** Final content. Every field below is finished copy, not a fill-in. It maps 1:1 to `data/accounts/hoffmaster.ts` and drops into the build with no rewriting.

> **What this document is.** A complete, advisory-grade content spec for the Hoffmaster lead-magnet report, built from scratch off the Account 360. It carries the finished copy for the whole page (above and below the email gate), the rationale behind each line, and the graphics that replace prose with a picture. The benchmark for every word is Sequoia's *Services: The New Software*: one argument, one axis, a handful of load-bearing facts. The spec is also the reusable template. To run the next account, copy this file and rebuild the spine first.

---

## 0. The spine (read this first)

Everything below hangs on one insight about Hoffmaster's business, drawn straight from the Account 360.

**Hoffmaster makes premium. It sells through other people's shelves.** It is a design-led, ESG-certified maker of premium napkins, plates, cups and baking products, with two divisions, 30+ categories and brands from Hoffmaster to Aardvark to Creative Converting. But it does not sell first-party to the end buyer. Its sales flow through foodservice distributors, big-box and party retailers, WebstaurantStore and Amazon. The brand is premium. The places it is bought are someone else's.

That is the strategic problem. A premium brand wins or loses at the digital shelf it does not own, and on a distributor portal or an Amazon listing, premium design and an FSC or compostable claim either show up clearly or get buried under a competitor with better-merchandised data. Right now the product data that should sell the premium is thin and fragmented across two divisions and many brands, with no evident PIM holding it together.

So the reflex in the matchmaking brief, optimize conversion and checkout, points at the wrong place. Most of Hoffmaster's sales do not happen at a Hoffmaster checkout. They happen on the distributor's site and the Amazon page, where the lever is not a checkout button. It is the product data, the imagery, the ESG claim and the reviews that decide whether the premium brand reads as premium.

The timing is right for the real work. A 2023 Gamut recap refinanced a distressed balance sheet, the 2024 to 2025 phase was manufacturing consolidation, and 2026 is the natural pivot from cost and integration to commercial and digital growth. A new CEO and CIO are both in place since 2023, and the eCommerce director is at the table. For a business still deleveraging, the first move should be the cheapest and lowest-risk one with the broadest reach.

So the strategic question is not "how do we optimize our checkout." It is "how do we make a premium brand actually win on every shelf we do not own." Answer it with a product-data foundation first, then rebuild commerce on top. Lead with a storefront project, and you spend scarce capital on the smallest slice of the business while the premium keeps losing on the shelves that sell it.

That spine runs through the thesis, the wedge, every module, and every play.

---

## 1. The fixed facts (confirmed from the Account 360)

| Field | Value | Notes for the build |
|---|---|---|
| Company name | Hoffmaster Group | PE-owned (Wellspring 2016, Gamut 2023 recap); HQ Oshkosh WI; founded 1947 |
| Vertical label | Premium single-use tableware and baking (manufacturer) | Two divisions: Foodservice and Consumer (Creative Converting); 30+ categories |
| Revenue band | $500M+ | ~$500M verified (2021, Moody's); one-pager states $700M+; estimates range $386–889M. Drives the gated $ math |
| Buyer we write to | Director, eCommerce | Dana Bulbin (attendee, key); CIO Joe Van Derven on the committee |
| Role emphasis | `ecommerce` | Digital shelf, product data and distributor channel, not first-party DTC |
| Active requirement | Yes | 6–12mo: conversion, CX, marketing automation, acquisition, retention; reviews "Now" |
| Domains (email match) | hoffmaster.com, hoffmastergroupinc.com | Sells mainly via distributors, big-box, WebstaurantStore and Amazon |

**The triggers we lean on.** A modernization window that is finally clear of balance-sheet and factory distractions, with the right people at the table.

1. **The Gamut recap (2023) refinanced a distressed structure** and the manufacturing-consolidation phase wrapped with the Fort Wayne closure in 2025. The pivot to commercial and digital growth is now.
2. **A new CEO (Craig Cappel) and CIO (Joe Van Derven), both since 2023**, with an innovation, ESG and efficiency mandate. New leaders fund the next chapter.
3. **The eCommerce director is in the room** and the CIO is on the committee. The buyer and the technical sponsor are both present.

**The asset that is real.** The brand. Design-led premium plus genuine ESG credentials (SFI and FSC certified, compostable lines, paper straws) is the moat. The work is making that legible and discoverable on every channel, not inventing a new value proposition.

**The guardrails (do not break).**
- Do **not** position Magento as the problem (per the one-pager).
- Do **not** lead with a Dynamics 365 migration. The verified ERP signal is **Infor LX**; integrate to it.
- Do **not** assume a live checkout to optimize. Lead with product data and the digital shelf, the levers that work regardless of storefront status.

**Reconcile before you build (a real conflict in the sources).** The one-pager and the dashboard disagree on the stack, and the whole sequencing depends on it. Confirm all four on the call:
- **Commerce platform:** one-pager lists Magento / Adobe Commerce as live; dashboard research found the Magento store decommissioned around June 2025 and the current site a WordPress brochure with no live cart.
- **ERP:** one-pager says "SAP or Oracle (to be validated)"; dashboard found Infor LX (IBM i, via job postings).
- **CRM / marketing:** dashboard found Salesforce Pardot; the one-pager is silent.
- **Revenue:** one-pager $700M+ vs ~$500M verified (2021); copy uses the conservative $500M+ figure.

The copy below leads with claims that hold true regardless of how these resolve: the brand sells through channels Hoffmaster does not own, so product data and the digital shelf are the highest-ROI first move either way.

---

## 2. Voice rules (the bar for every line)

Hold every line to these. They are the difference between advisory content and AI slop.

- **Aphoristic, contrastive openers.** "Your brand is premium. Your listings are not."
- **A name on every claim.** Aardvark, Creative Converting, WebstaurantStore, Amazon, Salsify, Infor LX. No floating assertions.
- **One load-bearing stat per idea.** A single number, dropped where it lands hardest. Never a wall of figures.
- **Reframes that flip intuition.** "Everyone will sell you a checkout to optimize. Your sales don't happen at your checkout."
- **Economy.** One to three sentence paragraphs. If a word can go with no loss, cut it.
- **No AI tells.** No em-dashes. Periods, colons, commas only. En-dashes live in numeric ranges ($7–22M).
- **It is about them.** Lead with what Hoffmaster owns and what a private-label competitor cannot copy.

| Write this | Not this |
|---|---|
| "You sell premium on other people's shelves." | "Omnichannel presence drives brand synergy." |
| "The fix isn't checkout. It's the data behind every listing." | "Conversion optimization unlocks significant upside." |
| "FSC-certified, and the listing should say so first." | "Sustainability is a key brand pillar." |

---

## 3. The thesis (line one of the report)

Shows huge at the top. The one sentence the reader can repeat to a colleague. Target 8–16 words.

> **The fix isn't your checkout. It's the product data that sells premium on every shelf you don't own.**

*Why this line.* It redirects the stated checkout instinct to where the money actually is, the distributor and Amazon shelf, and names the moat (premium product data). It holds true whether or not the storefront is live, which is exactly right given the stack conflict. Repeatable, and about them.

---

## 4. The wedge (the one play they start with)

The compounding play they can start without fixing everything first: high value, runs on data they already own, fast to prove, self-funds the rest.

- **Wedge label:** A PIM foundation that makes every distributor and Amazon listing sell the premium.
- **Wedge detail:** It runs on the brand, design and ESG content you already own, it lifts the channels that actually drive your sales today, distributors, WebstaurantStore and Amazon, without waiting on a storefront decision, and it is the cheapest, lowest-risk first move for a business still deleveraging. Prove it on one division, then unify both.

*Why this one.* It is the only play that is simultaneously high-reach (it touches every channel Hoffmaster sells through), defensible (clean, claim-rich data makes the premium legible in a way private label cannot match), bolt-on-ready (it does not depend on resolving the storefront question), and low-risk for a deleveraging, PE-owned business. It is also the foundation every later play needs, so starting here de-risks the whole sequence.

---

## 5. Module 1: The Reframe

**Device:** one arresting stat plus the thesis setup. **Purpose:** everyone is selling you a checkout; your sales happen on shelves you do not own.

- **Opener:** Everyone will sell you a checkout to optimize. Your sales don't happen at your checkout.
- **Stat:** `95%`
- **Stat label:** of enterprise AI pilots return nothing to the P&L.
- **Stat source:** MIT NANDA, ~95% of pilots · `https://nanda.media.mit.edu/`
- **Body:**

> 95% of enterprise AI pilots return nothing to the P&L. They sit beside the work instead of inside it. Your work is a premium brand sold through distributors, WebstaurantStore and Amazon, where the listing either shows the design and the FSC claim or buries them under a private-label competitor. The edge is not a new storefront or a chatbot. It is the product data only you can author, the design and the ESG credentials that make your premium read as premium on every shelf you do not own.

*Why it works.* The 95% MIT NANDA figure is the most quotable credibility stat in the category, and its failure cause is the last mile and the data, not the model. The body reframes from checkout to the shelf and ends on the product-data and ESG asset only Hoffmaster owns.

---

## 6. Module 2: The Hype Filter

**Device:** a two-column cut. Left, commodity you rent (table-stakes or aimed at the wrong place). Right, compounding you own (defensible, runs on Hoffmaster's brand data and channels). Then a single pitch-warning bar. Exactly four per column, parallel and concrete.

- **Opener:** Commodity AI optimizes a funnel you barely own. Compounding AI makes your premium win on every shelf.

| Commodity · rent it | Compounding · own it |
|---|---|
| Checkout tweaks on a funnel you don't control | PIM that makes every listing sell the premium |
| A generic chatbot on the brand site | ESG and design claims structured for the digital shelf |
| AI-written product copy at scale | A distributor portal built on the ERP you run |
| More performance media for acquisition | Marketing automation that nurtures distributors on Pardot |

- **Pitch warning:**

> Expect a pitch for a checkout overhaul and a Dynamics 365 migration. Your orders run through Infor LX and your sales run through distributors and Amazon. Lead with the product data and the shelf, not a replatform you do not need while you are still deleveraging.

*One fact worth weaving from the research.* The digital shelf is where the category is growing: B2B e-commerce rose about 13% in 2025, and most of that volume reaches buyers on distributor and marketplace pages, not brand storefronts. For a premium maker, a thin or wrong listing on those pages is margin handed to private label. The first dollar belongs to the data that fixes it. Keep this for the live conversation; the four-bullet grid stays clean.

---

## 7. Module 2.5: Your Stack (the "we read your stack" infographic)

**Device:** a scannable signal → unlock → trap table, one row per system Hoffmaster runs (per verified dashboard research; reconcile the flagged items live). Each trap line respects the guardrails: integrate to Infor LX, do not migrate to Dynamics, do not call the storefront the problem.

| Signal (system you run) | The play it unlocks | What you'll be pitched instead |
|---|---|---|
| Infor LX (ERP, IBM i) | Integrate commerce and a distributor portal to the ERP you actually run | A Dynamics 365 or SAP migration. Integrate to Infor LX, do not swap it. |
| Distributor, Amazon, WebstaurantStore channels | Win the digital shelf: PIM-fed content, ESG claims and reviews where you sell | More ad spend. The shelf content sells the premium. Fix it first. |
| Salesforce Pardot | Nurture distributors and buyers with marketing automation you already run | "Buy a new platform." You have Pardot. The gap is activation. |
| Catalog across 30+ categories, two divisions | One PIM across Foodservice and Consumer so the brand is consistent everywhere | A storefront rebuild first. Data is the foundation. Build it first. |
| Stripe payments | Reconnect commerce to the payments you already run when the storefront returns | A payments re-architecture. Stripe stays. Orchestrate to it. |

*Why these rows.* Each is from verified dashboard research and maps to a play below. The trap column names the commodity pitch before a competitor makes it, and it stays inside the guardrails. These rows reflect verified dashboard research, not call-confirmed fact; confirm the ERP, CRM and storefront status live, per Section 1.

---

## 8. Module 3: The Commodity vs Compounding Map

**Device:** the signature 2×2. **Y axis:** Commodity (runs on the model) to Compounding (runs on your brand data and channels). **X axis:** Foundation-required (needs data work first) to Bolt-on-ready (start now). Each play is a bubble; **bubble size = dollar magnitude.** The **wedge is the starred bubble, top-right.** Hoffmaster-relevant plays are lit; misaimed ones greyed.

**Map intro line:**

> We mapped Hoffmaster's world. The lit bubbles pay for a premium maker that sells through other people's channels, sized by the dollars on the table. The greyed ones aim at a funnel you barely own.

**The plays and coordinates** (compounding 0–1, bolt-on 0–1, magnitude 1–5):

| Play | Compounding | Bolt-on | Magnitude | Lit (yours) | Wedge |
|---|---|---|---|---|---|
| PIM + digital shelf | 0.85 | 0.80 | 4 | yes | ★ |
| Distributor B2B portal (Infor LX) | 0.80 | 0.50 | 4 | yes | |
| AEO for premium / ESG tableware | 0.88 | 0.65 | 3 | yes | |
| Marketing automation (Pardot) | 0.70 | 0.72 | 3 | yes | |
| Reviews and UGC (your "Now") | 0.60 | 0.80 | 2 | yes | |
| Cross-sell across brands / divisions | 0.78 | 0.55 | 3 | yes | |
| Commerce rebuild + Infor LX | 0.72 | 0.45 | 4 | yes | |
| Agentic order intake / AI PIM | 0.90 | 0.35 | 3 | yes | |
| Generic chatbot | 0.14 | 0.90 | 1 | no | |
| AI product copy | 0.12 | 0.80 | 1 | no | |
| Checkout-only CRO | 0.30 | 0.70 | 1 | no | |

**Text rendering of the quadrant** (for reviewers without the live chart):

```
 COMPOUNDING (runs on your brand data + channels)
        ▲
        │  Agentic intake ●     AEO ●                  ★ PIM + DIGITAL SHELF
        │  Commerce rebuild ●   Cross-sell ●            Marketing automation ●
        │  Distributor portal ●                         Reviews / UGC ●
        │
        │  · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
        │
        │                          Checkout-only CRO ○    Generic chatbot ○
        │                                                 AI product copy ○
        ▼
 COMMODITY (runs on the model)
  FOUNDATION-REQUIRED ◀────────────────────────────────▶ BOLT-ON-READY
        (data work first)                                 (start now)

  ● lit = yours   ○ greyed = table-stakes/misaimed   ★ wedge = the shelf, start now
  bubble size = dollar magnitude
```

*Why the map lands.* The eye goes top-right to the starred wedge: PIM and digital shelf is the play that is both high-reach and bolt-on-ready, because it runs on data you own and does not wait on the storefront decision. The commerce rebuild sits lower on bolt-on because it depends on resolving the stack first, so it is Phase 3. The greyed cluster, checkout-only CRO and a chatbot, aims at the smallest, least-owned slice of the business.

---

## 9. The gate teaser (the blurred line on the lock)

The carrot on the email gate. The dollar figure stays blurred until a work email is entered, and it is computed from the revenue band, not written here. We only control the framing.

> Your estimated annual digital-shelf, distributor and discovery opportunity is a real number we calculated for Hoffmaster. Enter your work email to reveal your model.

**The number behind the blur:** $7–22M (computed from the conservative $500M+ band; see Money Pools below). Reads as a measured share of revenue for a deleveraging business, not a fantasy figure.

---

---

# Below the gate (the payoff)

Above the gate makes the argument. Below the gate proves it pays, sequences it, and hands them the shortlist. Same voice rules apply.

## 10. The money pools (where the dollars are)

**Device:** four horizontal bars, sized to the dollar range, each with one named proof point. Headline opportunity $7–22M.

```
 The shelf you don't own: distributor + Amazon listings  $3M ████████████████████ $9M
 The distributor relationship: a portal + nurture        $2M █████████████ $6M
 Premium discovery: AEO + reviews for design and ESG      $1M █████████ $4M
 The data foundation: one PIM across two divisions        $1M ███████ $3M
                                                          └─ headline opportunity: $7–22M ─┘
```

**Pool 1. The shelf you don't own: distributor and Amazon listings. ($3–9M)**
Most of your sales reach the buyer on a distributor or Amazon page, where a thin or wrong listing hands a premium sale to private label. Watsco lifted average order value 10% with better digital-shelf content and recommendations. Most of that volume reaches buyers on channels like yours, not on a brand storefront. Better listing data is the highest-reach dollar you can spend. *(Verified. Source: Watsco, Adobe / DC360.)*

**Pool 2. The distributor relationship: a portal and nurture. ($2–6M)**
You sell through distributors but engage them through spreadsheets and email. Kawasaki Engines USA put dealers on a B2B portal with order automation and saw average order value rise fivefold since launch. The same connected-commerce move grows the distributor relationships you already have. *(Verified. Source: Kawasaki Engines USA, Salesforce / DC360.)*

**Pool 3. Premium discovery: AEO and reviews for design and ESG. ($1–4M)**
A foodservice buyer now asks an AI for "compostable catering supplies" or "premium dinner napkins," and the answer engine cites whoever structured their claims. Watts structured its content so Perplexity cites it over rivals, and AI referrals grew 357% year on year. Your FSC and compostable credentials are exactly the proof these engines reward, and few in your category have done it. *(Illustrative. Source: Watts Water / AEO; AI referral growth, 2025.)*

**Pool 4. The data foundation: one PIM across two divisions. ($1–3M)**
30 to 60% of B2B catalogs have incomplete attributes, and with two divisions and 30+ categories and no evident PIM, that gap caps every channel at once. A single PIM cuts manual stewardship 60 to 70% and gates the ROI of the three pools above. It is the cheapest insurance on the whole portfolio. *(Illustrative. Source: Stibo / Informatica, Gartner MDM.)*

*Why four.* They are not a vendor wish list. They are the four corners of how a premium maker grows when it sells through other people's channels. The shelf where buyers actually buy. The distributor relationship you can own digitally. The discovery moment moving to AI. And the data foundation under all of it. Each maps to a phase of the roadmap and a cluster of the shortlist, and the reader can hold four.

---

## 11. The roadmap (sequence it so it self-funds)

**Device:** a four-phase timeline. Phase 1 is the wedge and is lit "active." Each phase funds the next. Sequence is the data and the shelf first, the distributor relationship second, the rebuilt storefront third, the bet last. The storefront decision comes after the data wins, not before.

```
 NOW ───────── 3–6 MO ───────── 6–12 MO ───────── THE BET
  ●               ○                  ○                   ○
 Phase 1        Phase 2            Phase 3            Phase 4
 [ACTIVE]
 PIM +          Distributor        Commerce rebuild   Cross-division
 digital shelf  portal + Pardot    + Infor LX + AEO   cross-sell + agentic
```

**Phase 1, starts now. PIM and the digital shelf.**
Stand up one PIM across both divisions and push clean, claim-rich, image-complete content to every distributor and Amazon listing. It runs on data you own, lifts the channels that drive sales today, and is the lowest-risk first move while you deleverage. This is the wedge.

**Phase 2, 3 to 6 months. The distributor portal and Pardot nurture.**
Build a B2B distributor portal integrated to Infor LX, with reordering and PunchOut into customer eProcurement, and activate Salesforce Pardot to nurture distributors and buyers. This turns transactional accounts into managed digital relationships.

**Phase 3, 6 to 12 months. Commerce rebuild and AEO.**
With the stack reconciled, rebuild the DTC and B2B storefront integrated to Infor LX and retaining Stripe, and structure your design and ESG content so AI engines cite Hoffmaster for premium and sustainable tableware. The storefront decision lands here, after the data foundation is paying.

**Phase 4, the bet. Cross-division cross-sell and agentic readiness.**
Add cross-sell across Foodservice and Consumer brands, and stand up agentic order intake that turns distributor emails, PDFs and spreadsheets into structured orders. Gartner expects 90% of B2B purchases to be AI-intermediated by 2028. The risk is being invisible, not being behind.

*Why this order.* For a deleveraging, PE-owned business with a stack still being reconciled, the safe and highest-reach move is the data and the shelf, which run on assets in hand and do not depend on the storefront question. The capital-heavier rebuild comes only after the foundation is already returning.

---

## 12. The play shortlist (foundation, distributor channel, discovery, the bet)

Each play: the problem in the buyer's language, a named case, the ROI shape, and what i95Dev actually does. Eight plays, grouped by where the value sits.

### Foundation and the shelf

**A. PIM and digital-shelf control.** *(Wedge)*
- *Problem:* Most of your sales land on distributor and Amazon pages, where thin or inconsistent product data lets a private-label competitor out-merchandise a premium brand on its own listing.
- *Named case:* M-D Building Products runs Salsify to syndicate content across Home Depot, Lowe's and Amazon; Watsco lifted average order value 10% with digital-shelf discipline and recommendations.
- *ROI:* better listing data is the highest-reach dollar you can spend, because it lifts every channel you sell through at once.
- *What i95Dev does:* one PIM across both divisions that authors clean, claim-rich, image-complete content and syndicates it to every distributor, marketplace and retail channel. *(Verified. M-D / Salsify; Watsco, DC360.)*

**B. AI Master Data foundation across two divisions.**
- *Problem:* 30 to 60% of B2B catalogs have incomplete attributes, and with two divisions, 30+ categories and no evident PIM, the gap caps search, syndication and AEO simultaneously.
- *Named case:* Stibo and Informatica are Gartner MDM Leaders; agentic PIM enriches attributes from supplier and spec documents with human-in-the-loop.
- *ROI:* 60 to 70% less manual stewardship, and it gates the ROI of every other play. The cheapest insurance on the portfolio.
- *What i95Dev does:* AI-enriched MDM that standardizes attributes, units and ESG claims across both divisions and feeds the shelf, the portal and discovery from one source. *(Illustrative. Stibo / Informatica.)*

### The distributor channel

**C. A B2B distributor portal on Infor LX.**
- *Problem:* You sell through distributors but engage them through spreadsheets and email, with no self-service reorder, pricing visibility or PunchOut into their procurement.
- *Named case:* Kawasaki Engines USA put dealers on a B2B portal with order automation and saw average order value rise fivefold since launch; Dawn Foods, an ingredient wholesaler, saw triple-digit online growth on connected commerce.
- *ROI:* a connected distributor portal lowers cost-to-serve and grows the relationships you already have, on the ERP you already run.
- *What i95Dev does:* a distributor portal with reorder, contract pricing and PunchOut into customer eProcurement, integrated to Infor LX and retaining Stripe. *(Verified. Kawasaki Engines USA, DC360; Dawn Foods, DC360.)*

**D. Marketing automation and distributor nurture on Pardot.**
- *Problem:* Acquisition and retention are stated goals, but distributor and buyer nurture is manual, and the Pardot you already run is underused.
- *Named case:* SAP Concur activated first-party intent with Demandbase and lifted closed-won 52%. The same signal sits unused in the Pardot you already run.
- *ROI:* activating a platform you already pay for is reallocation, not new spend, and it compounds the portal and the shelf.
- *What i95Dev does:* lifecycle and distributor-nurture programs on Pardot, wired to the portal and the order data in Infor LX. *(Verified. SAP Concur / Demandbase; Pardot, your stack.)*

### Discovery and the storefront

**E. Answer Engine Optimization for premium and sustainable tableware.**
- *Problem:* Foodservice and party buyers now ask AI for "compostable catering supplies" or "premium dinner napkins," and the answer engine cites whoever structured their claims, not the strongest brand.
- *Named case:* Watts structured its content so Perplexity cites it over rivals, while AI referrals grew 357% year on year.
- *ROI:* your FSC, SFI and compostable credentials are exactly the structured proof these engines reward, and few in the category have done it.
- *What i95Dev does:* structure design, application and ESG content so AI engines cite Hoffmaster brands for the premium and sustainable terms buyers search. *(Illustrative. Watts; AI referral growth, 2025.)*

**F. Reviews, UGC and content (your "Now").**
- *Problem:* Customer Reviews and Forums are a stated near-term priority, but a premium brand with thin reviews on distributor and marketplace pages loses to better-rated private label.
- *Named case:* Bazaarvoice-style ratings and reviews are among the most reliable digital-shelf conversion levers, and they feed the same AI engines that now answer buyers.
- *ROI:* structured reviews lift both conversion and AI citation, on the channels that carry your sales.
- *What i95Dev does:* a reviews and UGC program syndicated across owned and distributor channels, feeding both the shelf and AEO. *(Illustrative. Digital-shelf reviews benchmarks.)*

**G. DTC and B2B commerce rebuild integrated to Infor LX.**
- *Problem:* The direct storefront has regressed, and any rebuild must connect to the ERP you actually run rather than triggering a costly platform migration.
- *Named case:* MKM Building Supplies rebuilt on composable B2B commerce for +82% revenue and +26% web orders; the pattern is a modern storefront on the existing ERP, not a rip-and-replace.
- *ROI:* a storefront rebuilt on clean PIM data and integrated to Infor LX converts the demand the shelf and AEO now create.
- *What i95Dev does:* a modern DTC and B2B storefront on the reconciled stack, integrated to Infor LX, retaining Stripe, fed by the PIM. *(Verified. MKM / BigCommerce.)*

### The bet

**H. Cross-division cross-sell and agentic order intake.**
- *Problem:* Foodservice and Consumer still sell as separate brands, and distributor orders still arrive as emails, PDFs and spreadsheets that staff rekey by hand.
- *Named case:* commercetools built a B2B intake agent for Mirion that turns emails, PDFs and spreadsheets into structured quotes; Gartner expects 90% of B2B purchases to be AI-intermediated by 2028.
- *ROI:* agentic intake removes manual order handling, and cross-division cross-sell grows basket on relationships you already hold.
- *What i95Dev does:* cross-brand next-best-action plus agentic order intake that structures distributor orders into Infor LX automatically. *(Illustrative. commercetools, Mirion; Gartner, directional.)*

*Why this set.* It spans the data foundation, the distributor channel, discovery and the agentic bet, but it leads with the PIM and shelf plays that run on data in hand and lift every channel at once, then funds the portal, the rebuild and the bet behind them. Every named case is a real manufacturer, distributor or commerce analog, never a vanity metric, and every play integrates to Infor LX rather than triggering a migration.

---

## 13. Why i95Dev (the close)

**Opener:**

> You'll be sold a $3M replatform. Your first dollar is in the product data you already have.

**Body:**

> The platform pitch is the most expensive way to start, and it spends scarce capital on the smallest slice of your business while the premium keeps losing on the shelf. Your first move is cheaper and higher-reach: the product data that makes every distributor and Amazon listing sell premium, integrated to the Infor LX you actually run. That is i95Dev's lane: surgical, deep in commerce, ERP and product data, on mid-market economics. We do not migrate you to Dynamics or rebuild before the data pays. We make the shelf win first, then the storefront.

**The proof to weave (from the research).** A $200M manufacturer asked a Big-4 firm for a focused fix and got a $3M, 8-month, 7-platform transformation; a specialist later shipped the same outcome in six weeks. A deleveraging, PE-owned business needs a low-risk win with a sell-through number, not a multi-year program. That gap is the close.

**CTA title:** Book your Digital Shelf and Commerce Diagnostic.
**CTA subtitle:** A fixed-scope, fixed-fee assessment that validates these numbers against Hoffmaster's real channel and product data, and reconciles the stack before anyone proposes a build. Two weeks, not a $3M replatform.

**Credibility strip:** 500+ B2B brands · 25+ years · 1,200+ projects.

---

## 14. Sources and credibility

Per-claim labels follow the research convention. Verified = independently corroborated. Illustrative = vendor or directional benchmark. Directional = widely cited, no single primary source. Confirm flagged items before the meeting.

| Claim | Label | Source |
|---|---|---|
| 95% of AI pilots return nothing | Verified | MIT NANDA · nanda.media.mit.edu |
| ~$500M revenue (2021); leverage ~12x; Gamut recap 2023 | Verified | Moody's; Gamut / BusinessWire |
| Premium, design-led, FSC / SFI / compostable | Company | Hoffmaster / Account 360 |
| Sells via distributors, Amazon, WebstaurantStore | Company | Hoffmaster / Account 360 |
| Watsco AI recs / digital shelf, AOV +10% | Verified | Adobe / DC360 |
| B2B e-commerce grew ~13% in 2025 | Directional | Research dump, Part 4 |
| Kawasaki Engines USA B2B portal, AOV 5x | Verified | Salesforce / DC360 |
| Dawn Foods triple-digit online growth | Verified | DC360 |
| SAP Concur + Demandbase, +52% closed-won | Verified | Demandbase case study |
| Ratings and reviews a top digital-shelf lever | Illustrative | Bazaarvoice |
| Watts cited by Perplexity over rivals | Illustrative | Watts Water / AEO |
| AI referrals +357% YoY | Illustrative | AI referral growth, 2025 |
| MKM Building Supplies +82% revenue, +26% orders | Verified | BigCommerce / BusinessWire |
| 30–60% of catalogs have incomplete attributes | Illustrative | Research dump, Part 3 |
| Stibo / Informatica MDM Leaders; 60–70% less stewardship | Illustrative | Gartner MDM |
| commercetools B2B Intake Agent (Mirion) | Illustrative | commercetools / DC360 |
| Gartner 90% of B2B purchases AI-intermediated by 2028 | Directional | Gartner |
| Big-4 $3M / 8-mo vs 6-week specialist fix | Directional | Research dump, Part 5.4 |

**Flagged to verify live (material to sequencing):** commerce platform (one-pager says Magento / Adobe Commerce live; dashboard found it decommissioned with a brochure site); ERP (one-pager "SAP or Oracle"; dashboard found Infor LX); CRM (dashboard found Salesforce Pardot; one-pager silent); revenue ($700M+ one-pager vs ~$500M verified 2021, range $386–889M). The copy leads with claims that hold regardless, but reconcile all four before proposing a build.

---

## 15. Handback and reuse

This file is the finished content and the template. To wire Hoffmaster: every block maps to a field in `data/accounts/hoffmaster.ts` (thesis, wedge, wedgeDetail, reframe, hypeFilter, stackFlags, mapPlays, payoff.moneyPools, payoff.roadmap, payoff.plays, payoff.why). To run the next account, copy this file and rebuild the spine in Section 0 first. The spine is the insight that makes the rest inevitable; everything downstream follows from it.
