# STIHL Inc / STIHL USA: Enterprise AI + Commerce Advisory Spec

**Account:** STIHL Inc (STIHL USA) · **Vertical:** Outdoor power equipment manufacturing / dealer-distributed durables
**Prepared by:** i95Dev · **Source basis:** Account 360 (Jun 2026) + B2B Connect 2026 AI research dump
**Status:** Final content. Every field below is finished copy, not a fill-in. It maps 1:1 to `data/accounts/stihl.ts` and drops into the build with no rewriting.

> **What this document is.** A complete, advisory-grade content spec for the STIHL lead-magnet report, built from scratch off the Account 360. It carries the finished copy for the whole page (above and below the email gate), the rationale behind each line, and the graphics that replace prose with a picture. The benchmark for every word is Sequoia's *Services: The New Software*: one argument, one axis, a handful of load-bearing facts. The spec is also the reusable template. To run the next account, copy this file and rebuild the spine first.

---

## 0. The spine (read this first)

Everything below hangs on one insight about STIHL's business, drawn straight from the Account 360.

**STIHL does not sell online. It sells through 11,000 independent servicing dealers, and just put them online for the first time.** Eighty-plus equipment models move exclusively through that dealer network, never direct, and on March 4, 2026 STIHL launched a Mirakl marketplace on stihlusa.com to unify the network on one storefront. The order is dealer-fulfilled. So the product is no longer the chainsaw. The product is the promise that the dealer down the road has it, services it, and hands it over.

That promise is kept or broken in one place: order management.

The marketplace runs on SAP Commerce Cloud against an SAP S/4HANA backbone, and the hard part is not the storefront. It is the orchestration between S/4HANA, SAP Commerce, the Mirakl marketplace, and 11,000 dealers' own fulfillment, all of it landing during the largest transformation in STIHL's history. CEO Michael Traub calls the gas-to-battery shift exactly that, with a target of 35% battery revenue by 2027. The order-entry layer is being asked to coordinate a brand-new channel, a brand-new product platform, and a network that has never sold a unified catalog online.

STIHL's own moves point at the gap. The team is staffing the integration in-house and is recruiting its own SAP Commerce and Mirakl architect to do it, which means the orchestration work is real and the capacity to ship it is short. Rob Jenson, Director and Head of US E-Commerce, owns the channel and came to the conference naming Order Management as the Now priority with a stated $5–10M budget. The leadership seat above him is in flux: the US President chair is vacant after Chris Keffer departed in February 2026, and IT and digital report up through interim Co-President Uwe Hirsch.

So the strategic question is not "should we build a marketplace." STIHL already did. It is "when a dealer order flows from the marketplace through SAP to a dealer's shelf, does it run on orchestration wired to the SAP backbone you already own, or on integration you are still trying to hire for in the middle of a leadership transition." Answer it, and every one of the 11,000 dealer relationships compounds on a network no competitor can copy. Miss it, and the most defensible asset in the business, the dealer service network, throttles the marketplace you just launched to showcase it.

**GUARDRAIL:** the ERP is SAP, not Dynamics 365. i95Dev enters as the ERP-to-commerce-to-Mirakl integration and order-management partner STIHL is hiring in-house, not as a D365 ERP replacement. Integrate with SAP. Do not propose displacing it.

That spine runs through the thesis, the wedge, every module, and every play.

---

## 1. The fixed facts (confirmed from the Account 360)

| Field | Value | Notes for the build |
|---|---|---|
| Company name | STIHL Inc (STIHL USA) | Subsidiary of family-owned STIHL Group; US HQ Virginia Beach VA, largest production site in the group |
| Vertical label | Outdoor power equipment manufacturing / dealer-distributed durables | Chainsaws, trimmers, blowers; gas + battery; proprietary AP/AK battery platforms |
| Revenue band | STIHL Group €5.48B (2025, +2.8%); NA ≈ 1/3 of group; USA single largest market | US not separately disclosed. Drives the gated $ math directionally |
| Buyer we write to | Director / Head of US E-Commerce | Rob Jenson (champion); economic context via interim Co-President Uwe Hirsch (IT/digital) |
| Role emphasis | `ecommerce` | Mirakl marketplace, order management, dealer-fulfillment orchestration |
| Active requirement | Yes | $5–10M budget. Now: Order Management. 6–12mo: Loyalty/Retention. Reason to attend: "Affiliates, AI." |
| Domains (email match) | stihlusa.com | 11,000 dealers; marketplace live Mar 4, 2026 |

**The triggers we lean on.** A launched marketplace that forces the orchestration issue, a transformation that raises the stakes, and a champion who owns the channel and named the priority.

1. **A live marketplace and a stated Order Management priority.** The Mirakl marketplace went live March 4, 2026 across 10,000+ dealers, and Rob Jenson named Order Management as the Now priority with a $5–10M budget. The marketplace is built; the orchestration that makes it deliver is the open work.
2. **The biggest transformation in STIHL's history.** The gas-to-battery shift, with a 35%-battery-revenue target by 2027, adds new product platforms and new fulfillment paths onto the same order-entry layer at the same moment.
3. **An in-house staffing gap.** STIHL is recruiting its own SAP Commerce and Mirakl architect and has named no external SI for the rollout. The integration is real, the timeline is now, and the capacity is short during a CEO and US-President transition.

**The data the moat runs on.** STIHL owns the 11,000-dealer servicing network and the proprietary AP/AK battery platforms no competitor can copy, and it runs SAP S/4HANA and SAP Commerce Cloud as the backbone. The asset is the dealer network and the order data, not a system still to be bought.

**The guardrail (do not break).** This is SAP-backbone integration, not backbone replacement. Keep SAP S/4HANA as the system of record and SAP Commerce as the storefront. The work is orchestrating order management across S/4HANA, SAP Commerce, Mirakl, and the dealers, not migrating the ERP to D365.

**One thing to verify live.** US revenue is not separately disclosed, so do not cite a hard number. Confirm the PIM, site-search and dealer-locator vendors in the room, confirm the payment PSP in the Mirakl ecosystem (Adyen, Mangopay or Stripe), confirm whether a permanent US President has been named, and confirm whether any external SI has been added for the Mirakl rollout.

---

## 2. Voice rules (the bar for every line)

Hold every line to these. They are the difference between advisory content and AI slop.

- **Aphoristic, contrastive openers.** "A storefront takes an order. A marketplace promises a dealer will keep it."
- **A name on every claim.** Mirakl, SAP S/4HANA, SAP Commerce, Traub, Jenson, Hirsch, Husqvarna. No floating assertions.
- **One load-bearing stat per idea.** A single number, dropped where it lands hardest. Never a wall of figures.
- **Reframes that flip intuition.** "Your marketplace is not a storefront. It is a dealer-orchestration problem wearing a checkout button."
- **Economy.** One to three sentence paragraphs. If a word can go with no loss, cut it.
- **No AI tells.** No em-dashes. Periods, colons, commas only. En-dashes live in numeric ranges ($8–24M).
- **It is about them.** Lead with what STIHL owns and what Husqvarna cannot copy.

| Write this | Not this |
|---|---|
| "The order is a dealer promise, not a checkout." | "We optimize the end-to-end omnichannel journey." |
| "Run the orchestration on the SAP backbone you already own." | "Leverage synergies across the digital ecosystem." |
| "Order management is where the dealer promise is kept or broken." | "Enable a holistic marketplace transformation." |

---

## 3. The thesis (line one of the report)

Shows huge at the top. The one sentence the reader can repeat to a colleague. Target 8–16 words.

> **You built the marketplace. Now make the order keep the dealer's promise.**

*Why this line.* It credits the real move (the Mirakl launch), names the real moat (the dealer who fulfills), and reframes the work from "stand up a storefront" to "orchestrate the order that 11,000 dealers fulfill." Repeatable, and about them.

---

## 4. The wedge (the one play they start with)

The compounding play they can start without fixing everything first: high value, runs on systems they already own, fast to prove, self-funds the rest.

- **Wedge label:** ERP-to-commerce-to-Mirakl order orchestration, the integration role you are hiring in-house.
- **Wedge detail:** It runs on the SAP S/4HANA, SAP Commerce and Mirakl systems STIHL already owns, it solves the dealer-fulfillment orchestration that makes or breaks the marketplace launch, it answers the Now priority Rob Jenson named (Order Management), and it gives STIHL capacity it is currently short, faster than hiring an in-house architect during a CEO and President transition. Prove it on the order spine between SAP and Mirakl, then extend the same orchestration across dealer onboarding, reorder and the battery catalog.

*Why this one.* It is the only play that is simultaneously the most differentiated (the order is a dealer promise, and no competitor orchestrates an 11,000-dealer network the way STIHL must), the highest-compounding (every well-fulfilled order strengthens a dealer relationship that rides SAP rails competitors cannot copy), bolt-on-ready in its first cut (it proves on the SAP-to-Mirakl order spine without waiting for the whole network to be digitized), and exactly the role the buyer is trying to fill in-house. It also sets up everything else: the orchestration needs clean dealer and product data, onboarding velocity, and a reorder spine, which is the rest of the roadmap.

---

## 5. Module 1: The Reframe

**Device:** one arresting stat plus the thesis setup. **Purpose:** everyone is selling you an AI marketplace; the asset is the dealer-fulfillment orchestration and the SAP backbone only you own.

- **Opener:** A marketplace homepage is a launch. The dealer order arriving complete and on time is the business.
- **Stat:** `95%`
- **Stat label:** of enterprise AI pilots return nothing to the P&L.
- **Stat source:** MIT NANDA, ~95% of pilots · `https://nanda.media.mit.edu/`
- **Body:**

> 95% of enterprise AI pilots return nothing to the P&L. They sit beside the work instead of inside it. STIHL's work is the dealer-fulfilled order: a model configured, a battery platform chosen, a dealer assigned, a promise kept. The edge is not a smarter marketplace homepage. It is making that order orchestrate cleanly across the SAP S/4HANA and SAP Commerce backbone you already run, so the marketplace you launched on March 4 can finally scale with the 11,000-dealer network behind it.

*Why it works.* The 95% MIT NANDA figure is the most quotable credibility stat in the category, and its failure cause is the last mile, not the model. The body refuses the AI-marketplace frame, restates the real product (the dealer-fulfilled order), and ends on the two assets only STIHL holds: the SAP backbone and the dealer network.

---

## 6. Module 2: The Hype Filter

**Device:** a two-column cut. Left, commodity you rent (table-stakes or actively harmful). Right, compounding you own (defensible, runs on STIHL's dealer data and SAP backbone). Then a single pitch-warning bar. Exactly four per column, parallel and concrete.

- **Opener:** Commodity AI decorates the marketplace. Compounding AI makes the dealer-fulfilled order land right, on rails competitors cannot copy.

| Commodity · rent it | Compounding · own it |
|---|---|
| A chatbot bolted onto stihlusa.com | Order orchestration across SAP and Mirakl |
| Generic recs that ignore dealer territory | Dealer-aware fulfillment routing on your network |
| AI-written product copy at scale | A real PIM that grounds every dealer listing |
| An "AI marketplace" deck, not shipped OMS | Order management wired to SAP S/4HANA |

- **Pitch warning:**

> You run SAP S/4HANA and SAP Commerce, and you just launched on Mirakl. Expect a pitch to rip up the backbone for a fashionable new platform, or to sell you a second marketplace you do not need. Do not. The order belongs on the SAP rails and the dealer belongs in the loop. Orchestrate order management across S/4HANA, SAP Commerce and Mirakl, and fill the missing dealer-fulfillment, onboarding and reorder logic. Modernize the order spine, not the system of record.

*One fact worth weaving from the research.* The cautionary tale is autonomous AI that ignores the buyer's reality: 11x.ai, backed by a16z and Benchmark at $74M, lost an estimated 70 to 80% of customers when its AI replaced judgment with volume. For a dealer expecting the right unit at the right store, a confident wrong fulfillment is worse than none. The win is orchestration grounded in clean dealer and order data, not generation. Keep this for the live conversation; the four-bullet grid stays clean.

---

## 7. Module 2.5: Your Stack (the "we read your stack" infographic)

**Device:** a scannable signal → unlock → trap table, one row per system STIHL actually runs. Each trap line respects the guardrail: orchestrate the order, keep the backbone.

| Signal (system you run) | The play it unlocks | What you'll be pitched instead |
|---|---|---|
| SAP S/4HANA (ERP) | Wire order management onto the backbone you already own | A new ERP that displaces SAP. You own the rail; build on it. |
| SAP Commerce Cloud (storefront) | Orchestrate the order from storefront to dealer, not just render a catalog | A re-platform you do not need. The storefront is fine; fix the order spine. |
| Mirakl marketplace (live Mar 4) | Automate dealer onboarding and fulfillment routing at network scale | A second marketplace. You have Mirakl; make the orchestration behind it work. |
| In-house SAP Commerce + Mirakl architect (hiring) | Buy the integration capacity now, faster than the hire lands | "Wait for the in-house build." The launch is live; the gap is now. |
| No SI named for the rollout | A Dynamics-and-commerce-deep partner who ships the order spine | A Big-4 transformation, or offshore body shops on a critical launch. |

*Why these rows.* Each system is confirmed in the Account 360, and each maps to a play below. The trap column names the commodity or over-scoped pitch before a competitor makes it, and every line keeps SAP as the rail while orchestrating the order on top.

---

## 8. Module 3: The Commodity vs Compounding Map

**Device:** the signature 2×2. **Y axis:** Commodity (runs on the model) to Compounding (runs on your dealer data and SAP backbone). **X axis:** Foundation-required (needs data work first) to Bolt-on-ready (start now). Each play is a bubble; **bubble size = dollar magnitude.** The **wedge is the starred bubble, top-right.** STIHL-relevant plays are lit; the hype pitches greyed.

**Map intro line:**

> We mapped STIHL's world. The lit bubbles pay for a maker whose moat is the dealer who fulfills the order, sized by the dollars on the table. The greyed ones are the AI-marketplace demo.

**The plays and coordinates** (compounding 0–1, bolt-on 0–1, magnitude 1–5):

| Play | Compounding | Bolt-on | Magnitude | Lit (yours) | Wedge |
|---|---|---|---|---|---|
| ERP-to-Mirakl order orchestration | 0.90 | 0.70 | 5 | yes | ★ |
| Dealer-fulfillment routing + OMS | 0.86 | 0.62 | 4 | yes | |
| Dealer onboarding velocity | 0.80 | 0.66 | 4 | yes | |
| Loyalty / reorder on dealer base | 0.82 | 0.55 | 4 | yes | |
| AI PIM foundation | 0.84 | 0.34 | 3 | yes | |
| B2B semantic search + dealer locator | 0.70 | 0.74 | 3 | yes | |
| Agentic bulk-order intake | 0.92 | 0.40 | 4 | yes | |
| AEO for spec and battery content | 0.86 | 0.60 | 3 | yes | |
| Generic chatbot | 0.14 | 0.90 | 1 | no | |
| AI product copy | 0.12 | 0.80 | 1 | no | |
| "AI marketplace" deck | 0.20 | 0.30 | 1 | no | |

**Text rendering of the quadrant** (for reviewers without the live chart):

```
 COMPOUNDING (runs on your dealer data + SAP backbone)
        ▲
        │  Agentic intake ●      AEO ●                    ★ ERP-TO-MIRAKL ORCHESTRATION
        │  AI PIM ●              Loyalty/reorder ●        Dealer-fulfillment + OMS ●
        │                        Dealer onboarding ●      B2B search + locator ●
        │
        │  · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
        │
        │     "AI marketplace" deck ○               Generic chatbot ○
        │                                           AI product copy ○
        ▼
 COMMODITY (runs on the model)
  FOUNDATION-REQUIRED ◀────────────────────────────────▶ BOLT-ON-READY
        (data work first)                                 (start now)

  ● lit = yours   ○ greyed = table-stakes/hype   ★ wedge = the order spine, start now
  bubble size = dollar magnitude
```

*Why the map lands.* The eye goes top-right to the starred wedge: ERP-to-Mirakl order orchestration is the biggest play that can still start on the order spine now, because it rides the SAP and Mirakl systems already in hand. Dealer onboarding and loyalty sit high on compounding and follow close behind. The PIM sits high but needs foundation work, so it is the underpinning, not the first move. The greyed cluster, the chatbot and the AI copy, is the AI-marketplace pitch the buyer should refuse.

---

## 9. The gate teaser (the blurred line on the lock)

The carrot on the email gate. The dollar figure stays blurred until a work email is entered, and it is computed from the budget and revenue base, not written here. We only control the framing.

> Your estimated annual order-orchestration, dealer-fulfillment and reorder opportunity is a real number we calculated for STIHL. Enter your work email to reveal your model.

**The number behind the blur:** $8–24M (computed against the stated $5–10M budget and a conservative fraction of the US digital and dealer-channel base; US revenue is undisclosed, so the model is directional and conservative). See Money Pools below.

---

---

# Below the gate (the payoff)

Above the gate makes the argument. Below the gate proves it pays, sequences it, and hands them the shortlist. Same voice rules apply.

## 10. The money pools (where the dollars are)

**Device:** four horizontal bars, sized to the dollar range, each with one named proof point. Headline opportunity $8–24M (a conservative fraction of the US digital and dealer-channel base, against a stated $5–10M budget).

```
 The order spine: ERP-to-Mirakl orchestration + OMS       $3M ████████████████████ $9M
 Onboarding velocity: dealer activation at scale          $2M ███████████ $6M
 Loyalty + reorder: the installed dealer base              $2M ██████████ $6M
 Agentic / AI readiness: bulk intake + affiliates          $1M ████ $3M
                                                          └─ headline opportunity: $8–24M ─┘
```

**Pool 1. The order spine: ERP-to-Mirakl orchestration and OMS. ($3–9M)**
Every marketplace order is dealer-fulfilled, and the value is created or lost in the handoff between SAP S/4HANA, SAP Commerce, Mirakl and the dealer. JPW Industries cut order processing from 16 to 24 hours to under one hour with AI order automation, and Kawasaki Engines USA grew AOV 5x after putting dealer ordering on a real B2B portal. On the marketplace STIHL just launched, clean orchestration is the largest line in the model. *(Illustrative. Source: JPW Industries, Salesforce; Kawasaki Engines, DC360.)*

**Pool 2. Onboarding velocity: dealer activation at scale. ($2–6M)**
A marketplace is only as good as the dealers live on it, and STIHL is bringing 10,000+ dealers onto Mirakl for the first time. Sonepar put seven AI agents into production and grew digital sales 50% year on year to $13.9B by activating its network, not just its storefront. Faster, cleaner dealer onboarding turns a launched marketplace into a transacting one. *(Verified. Source: Sonepar, DC360.)*

**Pool 3. Loyalty and reorder: the installed dealer base. ($2–6M)**
STIHL named Loyalty and Retention as its 6–12 month priority, and the same dealers reorder the same consumables, parts and battery packs on a cycle. Watsco's AI recommendations lifted average order value 10% on its contractor platform, and growing a known dealer is cheaper and higher-converting than recruiting a new one. One-click reorder and next-best-action on the dealer base is recurring margin. *(Verified. Source: Watsco, Adobe / DC360.)*

**Pool 4. Agentic readiness: bulk-order intake and affiliates. ($1–3M)**
STIHL came to the conference naming "Affiliates, AI" as a reason to attend, and its largest dealers still place bulk orders the messy way. commercetools built a B2B intake agent for Mirion that turns emails, PDFs and spreadsheets into structured quotes, and the same readiness keeps STIHL visible as Gartner expects 90% of B2B purchases to be AI-intermediated by 2028. Turning bulk intake into structured, validated orders is real value now. *(Directional. Source: commercetools / Mirion; Gartner.)*

*Why four.* They are not a vendor wish list. They are the four layers of how STIHL takes a dealer order. The order spine where the value is created, the onboarding that fills the marketplace, the reorder that compounds on the base, and the agentic intake coming next. Each maps to a phase of the roadmap and a cluster of the shortlist, and the reader can hold four.

---

## 11. The roadmap (sequence it so it self-funds)

**Device:** a four-phase timeline. Phase 1 is the wedge and is lit "active." Each phase funds the next. Sequence is the order spine first, onboarding and reorder second, the foundation third, the agentic bet last.

```
 NOW ───────── 3–6 MO ───────── 6–12 MO ───────── THE SPINE & THE BET
  ●               ○                  ○                      ○
 Phase 1        Phase 2            Phase 3               Phase 4
 [ACTIVE]
 ERP-to-Mirakl  Dealer onboarding   Loyalty + reorder     Agentic bulk-order
 order spine    + fulfillment       on the dealer base    intake + AEO at
 + OMS          routing             + PIM foundation      catalog scale
```

**Phase 1, starts now. The ERP-to-Mirakl order spine and OMS.**
Orchestrate order management across SAP S/4HANA, SAP Commerce and Mirakl so a dealer-fulfilled order flows clean from marketplace to dealer shelf, answering Rob Jenson's Order Management ask. It runs on systems you own and ships without waiting for the in-house architect to land. This is the wedge.

**Phase 2, 3 to 6 months. Dealer onboarding and fulfillment routing.**
Automate the onboarding of the 10,000+ dealers onto Mirakl and wire dealer-aware fulfillment routing so the right order reaches the right store. The marketplace fills with transacting dealers; the order routing gets reliable.

**Phase 3, 6 to 12 months. Loyalty, reorder and the PIM foundation.**
Turn on one-click reorder and next-best-action across the dealer base, answering the stated Loyalty and Retention priority, and stand up a real PIM so every dealer listing and battery-platform spec grounds in clean data. Recurring dealer purchasing gets faster every cycle.

**Phase 4, the spine and the bet. Agentic intake and AEO.**
Turn bulk dealer orders from emails, PDFs and spreadsheets into structured, validated orders, and structure battery-platform and spec content so AI engines cite STIHL for the design. Gartner expects 90% of B2B purchases to be AI-intermediated by 2028. The risk is being invisible, not being behind.

*Why this order.* STIHL named Order Management as Now and Loyalty as 6–12 months, so the sequence leads with the order-spine win that proves on the SAP-to-Mirakl handoff, then funds onboarding, reorder, the foundation and the agentic bet behind it. Each phase pays for the next.

---

## 12. The play shortlist (the order spine, the network, the foundation, the bet)

Each play: the problem in the buyer's language, a named case, the ROI shape, and what i95Dev actually does. Eight plays, grouped by where the value sits.

### The order spine

**A. ERP-to-commerce-to-Mirakl order orchestration and OMS.** *(Wedge)*
- *Problem:* Every marketplace order is dealer-fulfilled, and the value is kept or lost in the handoff between SAP S/4HANA, SAP Commerce, Mirakl and the dealer. Order Management is the priority Rob Jenson came to the conference for, and the role STIHL is hiring in-house.
- *Named case:* JPW Industries cut order processing from 16 to 24 hours to under one hour with AI order automation; Kawasaki Engines USA grew AOV 5x after putting dealer ordering on a real B2B portal.
- *ROI:* faster, clean orchestration on a just-launched marketplace is the largest pool in the model and protects the dealer promise the brand runs on.
- *What i95Dev does:* order management orchestration across SAP and Mirakl, valid by construction, starting on the order spine. *(Illustrative. JPW Industries, Salesforce; Kawasaki, DC360.)*

**B. Dealer-fulfillment routing.**
- *Problem:* 11,000 dealers fulfill, and a marketplace order has to reach the right dealer with the right unit, BOPIS-first, or the promise breaks at pickup.
- *Named case:* US Foods built MOXe with image-and-doc-to-order and a "Where's My Truck" AI, lifting delivery accuracy 40% and adding 1.3M cases a year on a dealer-and-route-fulfilled model.
- *ROI:* routing the order to the right dealer cuts failed pickups and protects the dealer relationship the moat depends on.
- *What i95Dev does:* dealer-aware fulfillment routing wired to Mirakl and SAP, so the order lands where it can be kept. *(Verified. US Foods, DC360.)*

### The network

**C. Dealer onboarding velocity.**
- *Problem:* A marketplace is only as good as the dealers live on it, and STIHL is bringing 10,000+ dealers onto Mirakl for the first time on a tight launch timeline.
- *Named case:* Sonepar put seven AI agents into production and grew digital sales 50% year on year to $13.9B by activating its network at scale.
- *ROI:* faster onboarding turns a launched marketplace into a transacting one, accelerating every downstream order.
- *What i95Dev does:* automated dealer onboarding and listing workflows on Mirakl, grounded in clean dealer and product data. *(Verified. Sonepar, DC360.)*

**D. Loyalty, reorder and next-best-action.**
- *Problem:* The same dealers reorder the same consumables, parts and battery packs on a cycle, but reorder and adjacent-product prompts stay manual, and STIHL named Loyalty and Retention as its 6–12 month priority.
- *Named case:* Watsco's AI recommendations lifted average order value 10%; Johnson Controls whitespace models unlocked $40M from 23 accounts.
- *ROI:* growing a known dealer is cheaper and higher-converting than recruiting a new one; retention compounds on the network.
- *What i95Dev does:* one-click reorder and next-best-action on SAP order history, surfaced to the dealer and the field team. *(Verified. Watsco, DC360; Johnson Controls, Beyond the Arc.)*

### The foundation

**E. AI PIM foundation.**
- *Problem:* 30 to 60% of B2B catalogs have incomplete attributes, and a marketplace listing or an answer engine on dirty data is confidently wrong, which is unacceptable across 80+ models and two proprietary battery platforms.
- *Named case:* inriver and Akeneo ship agentic enrichment; Stibo and Informatica are Gartner MDM Leaders running regulated, multi-attribute catalogs at scale.
- *ROI:* clean product data gates the marketplace listing, the search, the AEO and the agentic intake. The cheapest insurance on the portfolio.
- *What i95Dev does:* a real PIM with human-in-the-loop enrichment, standardizing model and battery-platform attributes across the dealer catalog. *(Illustrative. inriver / Akeneo; Stibo / Informatica.)*

**F. B2B semantic search and dealer locator.**
- *Problem:* A dealer or a pro searches by model, application and battery platform, and a contractor needs the nearest stocking dealer. If search is not tuned and the locator is not wired to inventory, the order is lost before checkout.
- *Named case:* AI search converts about 1.67 times keyword; Dawn Foods grew search queries 20x and online at triple-digit rates after tuning search on a wholesale catalog.
- *ROI:* on a network this size, relevance and accurate dealer-locator results are measured upside on the channel that now carries marketplace orders.
- *What i95Dev does:* tune semantic search for model and battery intent, and wire the dealer locator to live dealer inventory. *(Verified. Search-AI benchmarks; Dawn Foods, DC360.)*

### The bet

**G. Agentic bulk-order intake.**
- *Problem:* STIHL's largest dealers place bulk and seasonal stocking orders as emails, PDFs and spreadsheets, and the team rekeys them by hand.
- *Named case:* commercetools built a B2B intake agent for Mirion that turns exactly those documents into structured quotes; JPW Industries cut order processing from 16 to 24 hours to under one hour with AI order automation.
- *ROI:* structured intake removes manual rekeying and error exactly as the marketplace and the battery transformation raise order volume.
- *What i95Dev does:* an AI intake agent that turns bulk-order documents into validated, structured orders on the SAP and Mirakl rails. *(Illustrative. commercetools / Mirion; JPW Industries, Salesforce.)*

**H. Agentic-commerce readiness and AEO.**
- *Problem:* STIHL named "Affiliates, AI" as a reason to attend, and a catalog that is not machine-readable and not cited by AI engines is invisible to the AI buyer and the affiliate channel coming for outdoor power equipment.
- *Named case:* Gartner expects 90% of B2B purchases to be AI-intermediated by 2028; AI referrals grew 357% year on year and convert about 31% higher than organic, and almost no power-equipment seller has structured for it.
- *ROI:* readiness is a low-cost option on the channel that defines 2027 and 2028, bought now on a foundation you are already building.
- *What i95Dev does:* structure battery-platform and spec content so AI engines cite STIHL, and make the catalog machine-purchasable for agents and affiliates. *(Directional. Gartner; AEO research, Part 3.5.)*

*Why this set.* It spans the order spine, the dealer network, the data foundation and the agentic bet, but it leads with the orchestration and onboarding plays that run on the SAP and Mirakl systems already in hand and answer the buyer's stated priorities. Every named case is a real distributor, manufacturer or dealer-network analog, never a vanity metric, and every play keeps SAP as the backbone rather than replacing it.

---

## 13. Why i95Dev (the close)

**Opener:**

> You'll be sold a platform that replaces the backbone you just launched on. You do not need it.

**Body:**

> The platform pitch is a rebuild of the wrong layer. Your backbone is SAP and it works. Your marketplace is Mirakl and it is live. Your problem is the order spine: dealer-fulfilled orders that have to orchestrate across S/4HANA, SAP Commerce, Mirakl and 11,000 dealers, on a launch timeline, with the integration architect still a job posting. That is i95Dev's lane: deep in ERP-to-commerce integration, deep in order management, surgical, at mid-market economics. We orchestrate the order spine onto the SAP and Mirakl rails you already own and fill the missing dealer-fulfillment, onboarding and reorder logic, so the marketplace finally scales with the network. We do not migrate your ERP. We make it deliver.

**The proof to weave (from the research).** A $200M manufacturer asked a Big-4 firm for a focused fix and got a $3M, 8-month, 7-platform transformation; a specialist later shipped the same outcome in six weeks. STIHL does not need a transformation, and it does not need the offshore body shops that circle a high-profile launch. It needs an integration-deep specialist who ships the order spine with a real number behind it, the exact role STIHL is trying to hire in-house during a leadership transition. That gap is the close.

**CTA title:** Book your AI-in-Commerce Diagnostic.
**CTA subtitle:** A fixed-scope, fixed-fee assessment that validates these numbers against STIHL's real order, dealer and SAP-Mirakl data. Two weeks, not a platform rebuild.

**Credibility strip:** 500+ B2B brands · 25+ years · 1,200+ projects · ERP-to-commerce integration depth.

---

## 14. Sources and credibility

Per-claim labels follow the research convention. Verified = independently corroborated. Illustrative = vendor or directional benchmark. Directional = widely cited, no single primary source. Company = from STIHL / Account 360. Confirm flagged items before the meeting.

| Claim | Label | Source |
|---|---|---|
| 95% of AI pilots return nothing | Verified | MIT NANDA · nanda.media.mit.edu |
| 11,000 dealers; dealer-exclusive model; Mirakl live Mar 4 2026 | Company | STIHL / Account 360 |
| SAP S/4HANA ERP + SAP Commerce Cloud storefront | Verified | STIHL "eCommerce Systems Architect" job posting / Account 360 |
| Mirakl marketplace, 10,000+ dealers, BOPIS-first | Company | STIHL / Mirakl / Account 360 |
| Staffing integration in-house; recruiting SAP Commerce + Mirakl architect | Company | STIHL job postings / Account 360 |
| STIHL Group €5.48B 2025 (+2.8%); equity ratio 69%; NA ≈ 1/3 | Verified | STIHL Group results / Account 360 |
| Battery "biggest transformation in our history"; 35% battery by 2027 | Company | CEO Michael Traub / Account 360 |
| Rob Jenson champion; $5–10M budget; Now Order Management; 6–12mo Loyalty | Company | B2B Connect 2026 attendee data |
| US President vacant (Keffer departed Feb 2026); interim Co-Presidents | Company | Account 360 (verify permanent appointment live) |
| JPW Industries order time 16–24h to <1h | Illustrative | Salesforce / research dump Part 6.3 |
| Kawasaki Engines USA AOV 5x on B2B portal | Verified | DC360 / research dump Part 6.1 |
| US Foods MOXe, +1.3M cases/yr, 40% delivery-accuracy gain | Verified | DC360 / research dump Part 6.1 |
| Sonepar 7 AI agents, digital sales +50% YoY to $13.9B | Verified | DC360 / research dump Part 6.1 |
| Watsco AI recs, AOV +10% | Verified | Adobe / DC360 |
| Johnson Controls $40M from 23 accounts | Verified | Beyond the Arc / JCI |
| Dawn Foods 20x search growth, triple-digit online growth | Verified | commercetools / DC360 |
| AI search converts ~1.67x keyword | Verified | Search-AI benchmarks (research dump Part 3.2) |
| 30–60% of B2B catalogs carry incomplete attributes | Verified | B2B catalog attribute benchmarks (Part 3.2) |
| inriver / Akeneo agentic enrichment; Stibo / Informatica MDM Leaders | Illustrative | Gartner MDM / research dump |
| commercetools B2B Intake Agent (Mirion) | Illustrative | commercetools / DC360 |
| AI referrals +357% YoY, ~31% higher conversion | Illustrative | AEO research, Part 3.5 |
| 11x.ai customer loss | Verified | TechCrunch |
| Gartner 90% of B2B purchases AI-intermediated by 2028 | Directional | Gartner |
| Big-4 $3M / 8-mo vs 6-week specialist fix | Directional | Research dump, Part 5.4 |

**Flagged to verify live:** US revenue is not separately disclosed, so do not cite a hard number; confirm the PIM, site-search and dealer-locator vendors in the room; confirm the payment PSP in the Mirakl ecosystem (Adyen, Mangopay or Stripe); confirm whether a permanent US President has been named; confirm whether any external SI has been added for the Mirakl rollout; note STIHL's stated marketplace partner stack (Diconium, SAP Commerce Cloud, Mirakl, Bazaarvoice) from the attendee record without naming competitors on the page.

---

## 15. Handback and reuse

This file is the finished content and the template. To wire STIHL: every block maps to a field in `data/accounts/stihl.ts` (thesis, wedge, wedgeDetail, reframe, hypeFilter, stackFlags, mapPlays, payoff.moneyPools, payoff.roadmap, payoff.plays, payoff.why). To run the next account, copy this file and rebuild the spine in Section 0 first. The spine is the insight that makes the rest inevitable; everything downstream follows from it.
