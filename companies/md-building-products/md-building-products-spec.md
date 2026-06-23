# M-D Building Products: Enterprise AI + Commerce Advisory Spec

**Account:** M-D Building Products (M-D) · **Vertical:** Building-products manufacturing, multi-channel
**Prepared by:** i95Dev · **Source basis:** Account 360 (Claude research + one-pager, Jun 2026) + B2B Connect 2026 AI research dump
**Status:** Final content. Every field below is finished copy, not a fill-in. It maps 1:1 to a `data/accounts/md-building-products.ts` config and drops into the build with no rewriting.

> **What this document is.** A complete, advisory-grade content spec for the M-D Building Products lead-magnet report. It carries the finished copy for the whole page (above and below the email gate), the rationale behind each line, and the graphics that replace prose with a picture. The benchmark for every word is Sequoia's *Services: The New Software*: one argument, one axis, a handful of load-bearing facts. Same reusable template as the ChemPoint, American Textile and Bob Barker specs; copy it and swap the company.

---

## 0. The spine (read this first)

Everything below hangs on one insight about M-D's business, drawn straight from the Account 360.

**M-D sells to businesses but only lets them buy like consumers.** Its highest-value customers are pros, OEMs and distributors: the PROVA pro channel, the custom-extrusion and OEM work in Manufactured Solutions and Cardinal Aluminum, the authorized pro-distributor program. Yet the only modern self-service buying experience M-D runs is a Shopify store built for DIY shoppers. The pro placing a recurring trim order and the OEM specifying a custom aluminum profile get a worse digital experience than someone buying a draft stopper for a front door.

And here is the part a family owner feels. Those pros and OEMs are the stickiest revenue M-D has, and the least locked in. Any one of them is a phone call from a competitor, because there is no account, no contract price, no reorder history holding them. The customers you are least likely to lose are the ones you have done the least to keep.

That gap is the opportunity, and it is unusually clean.

M-D is a century-old manufacturer (founded 1920) selling the same catalog through radically different channels: Home Depot, Lowe's, Ace and Menards on the shelf, Amazon and marketplaces through Rithum, its own Shopify D2C store, plus OEM and pro-distributor. Each channel wants product data in its own shape, and today that data fragments. The company already owns the two assets that fix it: Salsify as a product-information system and 90%+ North American manufacturing as a differentiator. Today neither earns its keep.

So the strategic question for M-D is not "should we add AI." It is "why do our best customers, the pros and OEMs who buy the most and switch the least, still order the hardest way." For a manufacturer whose growth mandate under a new CEO is to scale with operational excellence, closing that gap is the most direct path there is.

Here is where AI and commerce pay for M-D. Not a chatbot on the homepage. It is clean product data that wins every retailer's shelf, a real B2B buying experience for pros and OEMs built on that data, and a quote engine that turns a custom-extrusion request into minutes instead of days. The model is the commodity. The Salsify data, the contracts, and "made in North America" are the moat.

That spine runs through the thesis, the wedge, every module, and every play.

---

## 1. The fixed facts (confirmed from the Account 360)

| Field | Value | Notes for the build |
|---|---|---|
| Company name | M-D Building Products (M-D) | Founded 1920 (Macklanburg-Duncan); HQ Oklahoma City; 8 North American sites; 90%+ made in North America |
| Vertical label | Building-products manufacturing, multi-channel | Weatherization, flooring trims, sealants, engineered extrusions; brands PROVA, Tower Sealants, Cardinal Aluminum, M-D Pro |
| Revenue band | $300–500M | One-pager band; dashboard estimates ~$284M. Both directional. Drives the gated $ math |
| Buyer we write to | Director of eCommerce Operations / President and CEO | Paul Townsend owns eCommerce day to day; CEO Christian Leard is the sponsor (see routing note) |
| Role emphasis | `ecommerce` | Multi-channel manufacturer; product data and B2B commerce lead |
| Active requirement | Yes | Selected "B2B Solution Providers"; flagged PunchOut, CPQ, PIM, ERP, OMS, Marketplace, Pricing |
| Domains (email match) | mdbuildingproducts.com, mdteam.com | Corporate site is mdteam.com; storefront is mdbuildingproducts.com |

**The triggers we lean on.** A fresh planning window before priorities harden.

1. **New CEO, scale mandate.** Christian Leard (CEO since March 2026, ex-Perennials and Sutherland, Newell, Levolor) is mandated to scale with operational excellence. New leaders fund initiatives early.
2. **An active, stated B2B intent.** M-D came to the event for "B2B Solution Providers" and named PunchOut, CPQ, PIM, ERP, OMS and Marketplace as investment areas. They are telling us the gap.
3. **The reshoring push.** Vice Chairman Ryan Plotkin is leading a domestic-manufacturing expansion. "Made in North America" is a differentiator that should win on the shelf and in OEM quotes, if the data and the buying motion carry it.

**The routing note (read before writing to anyone).** The registered attendee, Mark Francazio, is listed as "former" Senior Director of eCommerce and now runs his own consultancy. He is a warm route in, not the buyer. The live owner is **Paul Townsend, Director of eCommerce Operations**, sponsored by **CEO Christian Leard**. Write the report to that role, not to the attendee.

**The guardrail (do not break).** Do **not** pitch a Shopify replatform or a Salsify replacement. Both are assets and the team is lean (about three people in eCommerce). The gap is additive: a B2B buying experience that does not exist yet, plus the product-data discipline to feed it. Lead with that, not with rip-and-replace.

**The ownership fact (get this right).** M-D is **family-controlled (Plotkin family), not private-equity-owned.** Cyprium Partners made a 2015 mezzanine investment and has since exited. A family owner rewards pragmatic, ROI-clear, surgical work and distrusts consultant bloat. Pitch accordingly.

**Two things to verify live.** Revenue (one-pager $300–500M vs dashboard ~$284M) and the ERP and OMS identity (undisclosed; Dynamics 365 is plausible but unconfirmed). The ERP and OMS middle is the discovery opening. Confirm both before scoping.

---

## 2. Voice rules (the bar for every line)

Hold every line to these. They are the difference between advisory content and AI slop.

- **Aphoristic, contrastive openers.** "A consumer store sells one box. A B2B store sells the reorder."
- **A name on every claim.** MKM, Kawasaki, Watsco, Salsify, Home Depot, Cardinal Aluminum. No floating assertions.
- **One load-bearing stat per idea.** A single number, dropped where it lands hardest. Never a wall of figures.
- **Reframes that flip intuition.** "Your best customers buy the hardest way."
- **Economy.** One to three sentence paragraphs. If a word can go with no loss, cut it.
- **No AI tells.** No em-dashes. Periods, colons, commas only. En-dashes live in numeric ranges ($7–24M).
- **It is about them.** Lead with what M-D owns and what an import-only competitor cannot copy.

| Write this | Not this |
|---|---|
| "Your best customers buy the hardest way." | "Optimize the omnichannel B2B journey." |
| "One bad attribute, one Home Depot chargeback." | "Improve data quality across channels." |
| "A custom extrusion quoted in minutes, not days." | "Accelerate the quote-to-cash process." |

---

## 3. The thesis (line one of the report)

Shows huge at the top. The one sentence the reader can repeat to a colleague. Target 8–16 words.

> **You sell to pros and OEMs. You only built a store for DIY.**

*Why this line.* It states the gap in plain words, flips the intuition that the consumer storefront is the modern part of the business, and points straight at the prize. It is repeatable, and it is entirely about them.

---

## 4. The wedge (the one play they start with)

The compounding play they can start without fixing everything first: high value, runs on data they already own, fast to prove, self-funds the rest.

- **Wedge label:** Salsify done right: product data clean enough to win every shelf, and ready to launch B2B.
- **Wedge detail:** It runs on the PIM you already own, proves fast across Home Depot, Lowe's, Amazon and Rithum, and becomes the foundation the pro and OEM buying experience needs next. Few building-products makers have ever made their catalog data this clean.

*Why this one.* It is the only play that is at once bolt-on-ready (Salsify is already in place, so this is enrichment and syndication discipline, not a new system), fast for a three-person team to prove, immediately valuable on the retail and marketplace shelf, and the exact foundation the bigger B2B-portal prize depends on. Clean data is the cheapest thing that unlocks the most: the shelf, the B2B experience, search, and AI readiness all sit on it. The research is blunt that 30 to 60% of catalogs have incomplete attributes, which silently caps all of the above at once.

---

## 5. Module 1: The Reframe

**Device:** one arresting stat plus the thesis setup. **Purpose:** everyone is selling you AI; the value is the channel gap and the data you already own.

- **Opener:** Everyone here is selling you AI. The model is the cheapest thing in the room.
- **Stat:** `95%`
- **Stat label:** of enterprise AI pilots return nothing to the P&L.
- **Stat source:** MIT NANDA, ~95% of pilots · `https://nanda.media.mit.edu/`
- **Body:**

> 95% of enterprise AI pilots return nothing to the P&L. They sit beside the work instead of inside it. You do not need a model to fix your biggest gap: your best customers, pros and OEMs, still order the hardest way. The edge is pointing ordinary commerce and AI at what an import-only rival cannot copy: a century of building-products engineering data in Salsify, your custom-extrusion expertise, and 90%+ North American manufacturing.

*Why it works.* The 95% MIT NANDA figure is the most quotable credibility stat in the category, and the reframe redirects from "buy AI" to "close the channel gap with the assets you own." The body ends on what only M-D owns, per the voice rule.

---

## 6. Module 2: The Hype Filter

**Device:** a two-column cut. Left, commodity you rent (table-stakes or actively harmful). Right, compounding you own (defensible, runs on M-D's data). Then a single pitch-warning bar. Exactly four per column, parallel and concrete.

- **Opener:** Commodity AI runs on the model. Compounding AI runs on the product data and the channels only you own.

| Commodity · rent it | Compounding · own it |
|---|---|
| A chatbot bolted onto the Shopify store | Salsify data clean enough to win every retailer's shelf |
| A DTC redesign that still ignores pros and OEMs | A punchout and contract-priced portal for pros and OEMs |
| AI copy that invents a dimension or a spec | CPQ that quotes a custom extrusion in minutes, not days |
| Basic ML forecasting relabeled as "AI" | "Made in North America," provable at the point of decision |

- **Pitch warning:**

> You run Shopify and Salsify with a lean team, so expect a pitch to replatform the storefront or buy a sprawling suite. Skip both. Shopify and Salsify are assets. The gap is the B2B buying experience your pros and OEMs do not have, and the data discipline to feed it. And any AI that invents a product dimension is a returns problem, not a content win.

*One fact worth weaving from the research.* Generic AI content backfires in a spec-driven category: a wrong attribute on a building product is a failed install, a chargeback, or a return, not a copy refinement. The right model is AI-drafted and human-approved with confidence scoring. Keep this for the live conversation; the four-bullet grid stays clean.

---

## 7. Module 2.5: Your Stack (the "we read your stack" infographic)

**Device:** a scannable signal → unlock → trap table, one row per system M-D actually runs. This replaces "we understand your environment" with proof that we do.

| Signal (system you run) | The play it unlocks | What you'll be pitched instead |
|---|---|---|
| Salsify (PIM / PXM), verified | Enrich and govern product data, then syndicate clean to every retailer and marketplace | A new PIM. Salsify is the asset; make it work harder, do not replace it. |
| Shopify (D2C storefront), verified | Add a B2B buying experience beside the consumer store: punchout, contract pricing, CPQ | A storefront replatform. The gap is B2B, not a new theme. |
| Rithum + ShipEngine | Connect marketplace orders and shipping into one order flow | "Add more channels." The win is orchestrating the channels you already run. |
| PriceSpider (MAP monitoring) | Turn price-monitoring data into margin and MAP enforcement across channels | "Just watch the violations." The value is acting on them, on price and mix. |
| ERP / OMS (not disclosed) | Connect the fragmented middle between Shopify, Salsify, Rithum and the channels | "Agentforce or Copilot for everything." It only works once that middle is connected. |

*Why these rows.* Salsify, Shopify, Rithum, ShipEngine and PriceSpider are confirmed in the Account 360 or the one-pager, and each maps to a play below. The last row turns the biggest unknown into a discovery question instead of a guess.

---

## 8. Module 3: The Commodity vs Compounding Map

**Device:** the signature 2×2. **Y axis:** Commodity (runs on the model) to Compounding (runs on your data). **X axis:** Foundation-required (needs data work first) to Bolt-on-ready (start now). Each play is a bubble; **bubble size = dollar magnitude.** The **wedge is the starred bubble, top-right.** M-D-relevant plays are lit; generic ones greyed.

**Map intro line:**

> We mapped M-D's world. The lit bubbles are the plays that pay for a multi-channel maker like yours, sized by the dollars on the table.

**The plays and coordinates** (compounding 0–1, bolt-on 0–1, magnitude 1–5):

| Play | Compounding | Bolt-on | Magnitude | Lit (yours) | Wedge |
|---|---|---|---|---|---|
| Salsify product-data syndication | 0.85 | 0.82 | 4 | yes | ★ |
| B2B portal (punchout + contract pricing) | 0.92 | 0.50 | 5 | yes | |
| Marketplace and retail shelf + AEO | 0.80 | 0.78 | 4 | yes | |
| CPQ for engineered extrusions | 0.85 | 0.42 | 4 | yes | |
| AI search + recs (DTC) | 0.65 | 0.72 | 3 | yes | |
| MAP enforcement / RGM pricing | 0.80 | 0.50 | 3 | yes | |
| Connected OMS / order orchestration | 0.65 | 0.45 | 4 | yes | |
| Demand sensing + reshoring supply | 0.70 | 0.40 | 3 | yes | |
| AI MDM / data foundation | 0.88 | 0.30 | 4 | yes | |
| Generic chatbot | 0.14 | 0.90 | 1 | no | |
| Ungoverned AI product copy | 0.12 | 0.80 | 1 | no | |
| ML forecasting (relabeled) | 0.40 | 0.42 | 2 | no | |

**Text rendering of the quadrant** (for reviewers without the live chart):

```
 COMPOUNDING (runs on your data)
        ▲
        │  AI MDM/foundation ●        B2B portal ●               ★ SALSIFY SYNDICATION
        │        CPQ for extrusions ●                              Marketplace + AEO ●
        │     Demand sensing ●         MAP / RGM ●
        │           Connected OMS ●                       AI search + recs ●
        │  · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
        │
        │                                                      Ungoverned AI copy ○
        │                          ML forecasting ○                  Generic chatbot ○
        ▼
 COMMODITY (runs on the model)
  FOUNDATION-REQUIRED ◀──────────────────────────────────────────▶ BOLT-ON-READY
        (data work first)                                          (start now)

  ● lit = yours   ○ greyed = table-stakes/harmful   ★ wedge = found money, start now
  bubble size = dollar magnitude
```

*Why the map lands.* The eye goes top-right and lands on the starred wedge: Salsify syndication, the most bolt-on-ready compounding play. The B2B portal sits one notch left because it is the biggest prize (magnitude 5) but needs the clean data first, which is exactly why it is Phase 2 and the wedge is Phase 1. The greyed bubbles are the pitches to refuse, and "ungoverned AI product copy" is greyed for a reason a building-products buyer will feel in the returns rate.

---

## 9. The gate teaser (the blurred line on the lock)

The carrot on the email gate. The dollar figure stays blurred until a work email is entered, and it is computed from the revenue band, not written here.

> Your estimated annual B2B, shelf and margin opportunity is a real number we calculated for M-D. Enter your work email to reveal your model.

**The number behind the blur:** $7–24M (computed from the $300–500M band; see Money Pools below). Reads as concrete and conservative, not a fantasy figure.

---

---

# Below the gate (the payoff)

Above the gate makes the argument. Below the gate proves it pays, sequences it, and hands them the shortlist. Same voice rules apply.

## 10. The money pools (where the dollars are)

**Device:** four horizontal bars, sized to the dollar range, each with one named proof point. Headline opportunity $7–24M. The four pools are the four channels M-D's product data has to win.

```
 B2B channel: the pro and OEM experience you don't have    $2.5M ████████████████████ $9M
 Digital shelf: win retail and marketplace, penalty-free   $2M   ██████████████ $6M
 Margin: MAP enforcement and mix across channels           $1.5M ███████████ $5M
 Operations: one order flow across eight sites             $1M   █████████ $4M
                                                            └─ headline opportunity: $7–24M ─┘
```

**Pool 1. B2B channel: the pro and OEM experience you don't have. ($2.5–9M)**
Your highest-margin, stickiest customers order through a storefront built for DIY. MKM Building Supplies, a building-materials distributor, went composable B2B with AI personalization and grew revenue 82% with 26% more web orders. This is the largest channel you own and have never built, and it defends the revenue you can least afford to lose. *(Verified. Source: MKM Building Supplies, BigCommerce / Bloomreach.)*

**Pool 2. Digital shelf: win retail and marketplace, penalty-free. ($2–6M)**
The same product data feeds Home Depot, Lowe's, Amazon and Rithum, each with its own requirements, and a wrong attribute is a chargeback or a delisting. 30 to 60% of catalogs have incomplete attributes, which caps search and sell-through at once. Clean Salsify data, syndicated correctly, lifts placement and stops the penalties. *(Illustrative. Source: digital-shelf and PIM enrichment, CPG.)*

**Pool 3. Margin: MAP enforcement and mix across channels. ($1.5–5M)**
You already run PriceSpider, so you can see violations; the value is acting on them. Cost-to-serve-aware pricing and MAP enforcement protect the points you give away across four retailers, Amazon and pro channels. A McKinsey-cited $15B distributor recovered 200 basis points in 10 weeks. *(Verified. Source: McKinsey B2B pricing; Zilliant / PROS RGM.)*

**Pool 4. Operations: one order flow across eight sites. ($1–4M)**
Orders arrive through Shopify, Rithum, retail EDI and pro channels, and the middle between Salsify, Shopify and the ERP is stitched by hand. Demand sensing on your own order history frees about 10 to 12% of inventory, and one connected order flow removes the manual reconciliation. General Mills saved $20M+ applying AI across its daily shipment flow. *(Verified. Source: General Mills; BRF SAP IBP.)*

*Why four.* They are not a vendor wish list. They are the four channels M-D's product data must win: the B2B channel you have not built, the retail shelf you cannot afford to lose, the margin leaking across channels, and the operations that tie them together. Each maps to a phase of the roadmap and a cluster of the shortlist.

---

## 11. The roadmap (sequence it so it self-funds)

**Device:** a four-phase timeline. Phase 1 is the wedge and is lit "active." Each phase funds the next. The fast, lean-team-friendly win goes first; the bigger B2B prize and the deeper data work follow.

```
 NOW ───────── 3–6 MO ───────── 6–12 MO ───────── OPERATIONS & THE FOUNDATION
  ●               ○                  ○                      ○
 Phase 1        Phase 2            Phase 3               Phase 4
 [ACTIVE]
 Salsify data + B2B portal:        DTC intelligence      Connected order flow,
 shelf            punchout,        + MAP and RGM         demand sensing,
 syndication      contract, CPQ    pricing               data foundation
```

**Phase 1, starts now. Salsify done right and the shelf.**
Enrich and govern the product data in Salsify, then syndicate clean, compliant content to Home Depot, Lowe's, Amazon and Rithum, and turn on AEO so AI engines answer pro and DIY product questions with M-D. It runs on what you own and proves fast for a lean team. This is the wedge.

**Phase 2, 3 to 6 months. The B2B buying experience.**
Launch a punchout-enabled, contract-priced portal for pros, OEMs and distributors, and a CPQ that turns a custom-extrusion request into a same-day quote. Built on the clean Salsify data from Phase 1, beside the Shopify store, not on top of it. This is the largest prize.

**Phase 3, 6 to 12 months. DTC intelligence and margin.**
AI search, recommendations and personalization on the Shopify store, Klaviyo lifecycle on the data you own, and MAP enforcement and revenue growth management that turn PriceSpider monitoring into recovered margin across channels.

**Phase 4, operations and the foundation. One order flow and one truth.**
Connect Shopify, Salsify, Rithum, ShipEngine and the ERP into one order flow, layer demand sensing across the eight sites, and build the MDM and ERP data foundation that makes product, price and inventory one source of truth. The integration begins quietly in Phase 1 and matures here.

*Why this order.* Salsify is in place, so the fastest defensible win is making that data work, which also de-risks and feeds the B2B portal. Front-of-house plays that run on data M-D already owns go first and self-fund the deeper B2B and operations work behind them.

---

## 12. The play shortlist (all pillars plus the foundation)

Each play: the problem in the buyer's language, a named case, the ROI shape, and what i95Dev actually does. Eight plays, grouped by pillar.

### Product data and the shelf

**A. Salsify product data, syndicated to win every shelf.** *(Wedge)*
- *Problem:* The same catalog feeds Home Depot, Lowe's, Amazon and Rithum in different shapes, and one wrong attribute becomes a chargeback, a delisting, or a return.
- *Named case:* CPG leaders run this through Salsify, 1WorldSync and Syndigo for the digital shelf; inriver and Akeneo now bulk-enrich attributes from source documents with human-in-the-loop.
- *ROI:* 30 to 60% of catalogs have incomplete attributes, which silently caps search, the shelf and AI readiness together. Fixing it lifts all three at once.
- *What i95Dev does:* Enrich, claim-govern and syndicate Salsify data to every retailer and marketplace, and make it the foundation the B2B portal will reuse. No replacement of Salsify. *(Illustrative. Salsify / inriver / Syndigo.)*

**B. Digital-shelf AEO: be the answer for product questions.**
- *Problem:* A pro or a DIY buyer asks an AI "what door sweep fits a 36 inch steel door," and the answer is built from whoever structured their data. If that is not you, your product never enters the shortlist.
- *Named case:* Watts structured its technical content so Perplexity cites it over rivals for product-selection questions, the manufacturer playbook for the AI shelf.
- *ROI:* AI referrals grew 357% year on year, and they convert about 31% higher than organic. Almost no building-products maker is doing this systematically.
- *What i95Dev does:* Schema and answer-layer pipelines, fed from the same Salsify data, that make M-D products machine-citable across ChatGPT, Perplexity and Google AI. *(Illustrative. Watts Water.)*

### B2B commerce

**C. The B2B buying portal: punchout and contract pricing.**
- *Problem:* Pros, OEMs and distributors are your best customers, and they buy through phone, email or a DIY storefront. There is no punchout, no contract pricing, no account ordering.
- *Named case:* MKM Building Supplies grew revenue 82% on a composable B2B build with AI personalization; Kawasaki Engines grew average order value 5x after launching B2B self-service.
- *ROI:* A real B2B experience converts your highest-margin, stickiest channel, and every reorder placed in the portal is a customer who has stopped shopping around.
- *What i95Dev does:* A punchout-enabled, contract-priced B2B portal for pros, OEMs and distributors, built beside Shopify on the Salsify data foundation. *(Verified. MKM Building Supplies; Kawasaki Engines.)*

**D. CPQ for engineered extrusions and custom orders.**
- *Problem:* Custom aluminum and extrusion quotes (Cardinal, Manufactured Solutions) are slow and expert-bound, and a slow quote loses the OEM job.
- *Named case:* Salesforce estimates 15 to 30% of revenue is lost to configuration errors and quote delays; commercetools' B2B intake agent turns emails and PDFs into structured quotes (Mirion, early access June 2026).
- *ROI:* Faster, accurate quotes win more OEM work, and a 24-hour quote beats a 72-hour one on win rate.
- *What i95Dev does:* A guided CPQ for configurable extrusions with valid-build rules and account pricing, integrated to the ERP. *(Directional. commercetools B2B intake agent, Mirion early-access Jun 2026.)*

### DTC and margin

**E. AI search, recommendations and personalization on DTC.**
- *Problem:* Building products are a specification purchase (size, profile, material, compatibility), and generic Shopify search buries the right item, so the DIY shopper bounces to a marketplace.
- *Named case:* Watsco's AI recommendations added 10% AOV and 22% on mobile on its contractor platform.
- *ROI:* AI search converts about 1.67x keyword. On the DTC store you fully own, that lift is margin you keep in full.
- *What i95Dev does:* Spec-aware search, recommendations and Klaviyo-tied personalization on Shopify, grounded in the Salsify data. *(Verified. Watsco, Adobe.)*

**F. MAP enforcement and revenue growth management.**
- *Problem:* The same product sells across four retailers, Amazon and pro channels, and margin leaks through MAP violations and untuned mix. You monitor with PriceSpider but acting on it is manual.
- *Named case:* A McKinsey-cited $15B distributor recovered 200 basis points in 10 weeks; Zilliant and PROS run distributor RGM in production.
- *ROI:* One to two points of recovered margin and mix on a $300–500M base is near-pure profit.
- *What i95Dev does:* Turn PriceSpider and order data into MAP enforcement and cost-to-serve pricing across channels. *(Verified. McKinsey B2B pricing; Zilliant / PROS.)*

### Operations and the foundation

**G. Connected order flow and demand sensing.**
- *Problem:* Orders arrive through Shopify, Rithum, retail EDI and pro channels, the ERP and OMS middle is stitched by hand, and forecasting across eight sites misses the signal until the stockout.
- *Named case:* General Mills saved $20M+ applying AI across 5,000 daily shipments; BRF's SAP IBP demand sensing cut planning time 33%.
- *ROI:* Demand sensing frees about 10 to 12% of inventory, and one connected order flow removes the manual reconciliation between channels.
- *What i95Dev does:* Order orchestration across Shopify, Rithum, ShipEngine and the ERP, plus demand sensing on your order history. *(Verified. General Mills; BRF.)*

**H. AI Master Data and the data foundation.**
- *Problem:* Salsify holds product data, but price, inventory and order data live elsewhere, and ERP and OMS identities are unconfirmed. 87% of leaders say bad data has hampered AI value, and every play above runs on this.
- *Named case:* Stibo and Informatica (Gartner MDM Leaders) govern product and price data continuously; TCS built Alstom's AI-driven MDM backbone for a unified view.
- *ROI:* 60 to 70% less manual stewardship, and it gates the ROI of every other play. The cheapest insurance on the whole portfolio.
- *What i95Dev does:* AI-enriched MDM connecting Salsify, price, inventory and the ERP into one source of truth, with an ERP and OMS assessment to confirm the middle. *(Illustrative: Stibo / Informatica. Vendor-claimed: TCS / Alstom.)*

*Why this set.* It spans product data and the shelf, B2B commerce, DTC and margin, and operations plus the foundation, sequenced so the bolt-on Salsify win carries the weight and the B2B prize and data work ride behind it. Every named case is a real manufacturer, distributor or building-materials analog, never a SaaS vanity metric.

---

## 13. Why i95Dev (the close)

**Opener:**

> You'll be sold a transformation. Your gain is the channel you never built.

**Body:**

> The Big-4 are built for enterprise-wide change, and a sprawling suite is the wrong tool for a lean team and a family-owned balance sheet. Your problem is specific: the pros and OEMs who buy the most still buy the hardest way, and the Salsify data that would fix it is not working hard enough yet. That is exactly i95Dev's lane: surgical where the giants are sprawling, fluent in the commerce-to-ERP seam, and priced for a company that values ROI over slideware. We do not replatform Shopify and we do not replace Salsify. We build the B2B experience you are missing on the data you already own.

**The proof to weave (from the research).** A $200M manufacturer asked a Big-4 firm for supply-chain work and got a $3M, eight-month, seven-platform transformation; a specialist later shipped the same outcome in six weeks. A family-owned maker scaling with operational excellence needs the six-week version. The giants under-serve exactly this middle. That gap is the close.

**CTA title:** Book your B2B Commerce and Product-Data Diagnostic.
**CTA subtitle:** A fixed-scope, fixed-fee assessment that maps how product data flows from Salsify to every channel, sizes the unbuilt B2B opportunity, and validates these numbers against M-D's real data. Weeks, not a multi-million transformation.

**Credibility strip:** 500+ B2B brands · 25+ years · 1,200+ projects.

---

## 14. Sources and credibility

Per-claim labels follow the research convention. Verified = independently corroborated. Illustrative = vendor or directional.

| Claim | Label | Source |
|---|---|---|
| 95% of AI pilots return nothing | Verified | MIT NANDA · nanda.media.mit.edu |
| 30–60% of catalogs have incomplete attributes | Illustrative | Research dump, Part 3.2.7 |
| MKM Building Supplies +82% revenue, +26% web orders | Verified | BigCommerce / Bloomreach (MACH Award) |
| Kawasaki Engines 5x AOV after B2B portal | Verified | Salesforce / DC360 |
| Watts cited by Perplexity for product selection | Illustrative | Watts Water |
| Salesforce: 15–30% revenue lost to config errors / quote delays | Illustrative | Salesforce (CPQ), research dump 3.2.3 |
| commercetools B2B intake agent (Mirion) | Directional | commercetools, early access Jun 2026 |
| Watsco AI recs +10% AOV, +22% mobile | Verified | Watsco, Adobe / DC360 |
| AI search ~1.67x keyword conversion | Illustrative | Algolia / research dump 3.2.2 |
| AI referrals +357% YoY, ~31% higher conversion | Illustrative | AI referral growth, 2025 |
| McKinsey $15B distributor +200bps in 10 weeks | Verified | McKinsey B2B pricing |
| Zilliant / PROS distributor RGM | Verified | Zilliant; PROS / Wilbur-Ellis |
| General Mills $20M+ AI savings, 5,000 daily shipments | Verified | CIO Dive / General Mills |
| BRF SAP IBP demand sensing −33% planning time | Verified | SAP / BRF |
| 87% of leaders say bad data hampered AI value | Verified | Research dump, Part 2.2 |
| Stibo / Informatica MDM Leaders; TCS / Alstom MDM | Illustrative / Vendor | Gartner MDM; TCS |
| Big-4 $3M/8-mo vs 6-week specialist fix | Directional | Research dump, Part 5.4 |

**Flagged to verify live:** revenue (one-pager $300–500M vs dashboard ~$284M, both directional); ERP and OMS identity (Dynamics 365 plausible, unconfirmed); Rithum, ShipEngine, Klaviyo and PriceSpider (one-pager and matchmaking-sourced); employee count (sources conflict, ~282 to 1,000); the registered attendee (Mark Francazio) is a lapsed role, route to Paul Townsend; M-D is family-controlled, not PE-owned.

---

## 15. Handback and reuse

This file is the finished content and the template. Every block maps to a field in `data/accounts/md-building-products.ts` (thesis, wedge, wedgeDetail, reframe, hypeFilter, stackFlags, mapPlays, payoff.moneyPools, payoff.roadmap, payoff.plays, payoff.why), mirroring `chempoint.ts`. To run the next account, copy this file, swap the company, and rebuild the spine in Section 0 first. Everything downstream follows from the spine.

**Note on positioning.** The Account 360 scores M-D a warm, active fit with a clear, stated B2B intent and a small budget, so the content is action-oriented but sized to a lean team and a family-owned balance sheet. The single most important guardrail: the move is additive, not rip-and-replace. Build the B2B experience on Shopify and Salsify, do not replace them. And write to the live owner (Paul Townsend, sponsored by CEO Christian Leard), not to the lapsed attendee.
