# American Textile Company: Enterprise AI + Commerce Advisory Spec

**Account:** American Textile Company (ATC) · **Vertical:** Performance-sleep / home-textile manufacturing
**Prepared by:** i95Dev · **Source basis:** Account 360 (Jun 2026) + B2B Connect 2026 AI research dump
**Status:** Final content. Every field below is finished copy, not a fill-in. It maps 1:1 to a `data/accounts/american-textile.ts` config and drops into the build with no rewriting.

> **What this document is.** A complete, advisory-grade content spec for the American Textile lead-magnet report. It carries the finished copy for the whole page (above and below the email gate), the rationale behind each line, and the graphics that replace prose with a picture. The benchmark for every word is Sequoia's *Services: The New Software*: one argument, one axis, a handful of load-bearing facts. Same reusable template as the ChemPoint spec; copy it and swap the company.

---

## 0. The spine (read this first)

Everything below hangs on one insight about American Textile's business, drawn straight from the Account 360.

**American Textile does not just make bedding. It owns product knowledge no importer can copy.** It holds the patents (bed-bug barrier, zip-off-top, HeiQ allergen tech), the #1 allergen brand (AllerEase), the #1 weighted blanket (Tranquility), and 100 years of category authority. Its product is sold in 40,000+ stores, on its own Shopify Plus DTC, across marketplaces, drop-shipped for major e-tailers, and made under license for Sealy and Tempur-Pedic. The differentiator is not the textile. It is knowing exactly why this protector blocks dust-mite allergens at this micron, and being able to prove it.

That knowledge is the asset. Today it does not travel well.

The modern buying decision is made on the digital shelf before a human is ever involved: a Walmart search, an Amazon listing, a reviews block, a Google panel, and increasingly an answer from ChatGPT or Perplexity. AI referral traffic grew 357% year on year and converts about 31% higher than organic, and a fast-growing share of buyers now start a product search inside an AI chatbot. Whoever owns the structured product data wins that shelf. Whoever does not gets ranked beside a no-name import on price alone.

So the strategic question for ATC is not "should we add AI." It is "when a shopper asks Walmart's search, or asks an AI, for the best mattress protector for allergies, does the answer carry American Textile's proof, or a generic listing that competes only on price." For a company whose entire moat is provable product superiority, losing the digital shelf is losing on the one axis where it should always win.

ATC already has the raw material. **Centric PLM has been its product system of record since 2022,** and it runs an in-house studio of data scientists, designers and copywriters. The work now is not a new platform. It is turning the product knowledge already sitting in Centric PLM and that studio into structured, claim-safe, machine-readable content that wins every shelf and every AI answer. Do that, and a 100-year-old manufacturer out-competes importers exactly where the decision is made. Skip it, and the best product in the category keeps losing the click to the cheapest one.

That spine runs through the thesis, the wedge, every module, and every play.

---

## 1. The fixed facts (confirmed from the Account 360)

| Field | Value | Notes for the build |
|---|---|---|
| Company name | American Textile Company (ATC) | Founded 1925, Pittsburgh; HQ Duquesne PA; 100-year centennial 2025; 3rd-gen Ruttenberg family-owned |
| Vertical label | Performance-sleep / home-textile manufacturing | "Performance sleep solutions": protectors, pillows, pads, weighted blankets, allergen bedding |
| Revenue band | $300–500M | ~$305.7M ZoomInfo estimate (directional). Drives the gated $ math |
| Buyer we write to | SVP eCommerce / SVP IT | Brian Lehr (SVP eCommerce, attendee, champion); Karl Herleman (SVP IT, economic buyer, ex-Gartner) |
| Role emphasis | `ecommerce` | Omnichannel manufacturer; digital shelf and product data lead |
| Active requirement | Yes, but discovery-stage | Stated intent is thin: AI/ML (6–12mo), Analytics/Data, Content Management, Marketplace. This earns a conversation, it does not assume an RFP |
| Domains (email match) | americantextile.com | Emails follow b***@ / k***@americantextile.com |

**The triggers we lean on.** No single hard trigger like a new CEO. The opening is a maturity moment, not an event.

1. **Post-centennial, record capital investment.** CEO Lance Ruttenberg: "record capital investments this year and next" driving efficiency, quality and service levels. Budget is moving.
2. **Centric PLM live since 2022.** The upstream system of record exists. The unbuilt layer is everything downstream of it.
3. **A data-driven new-ish IT owner.** Karl Herleman (ex-Gartner GVP, ex-CIO Miami-Dade) wants "data centralized, workflows automated, visibility across departments." He will reward rigor and reject hype.

**The champions.** Brian Lehr (SVP eCommerce) owns the commerce and DTC outcome and is the attendee. Karl Herleman (SVP IT) owns the data foundation and the budget. Write to both: the shelf win for Lehr, the connected-data foundation under it for Herleman.

**The guardrail (do not break).** Do **not** pitch a Shopify Plus replatform or a generic "Copilot on everything." Lead with Product Knowledge Intelligence, AI readiness, content governance, retail syndication and connected operations. Centric PLM upstream plus Shopify Plus, Shogun, Bazaarvoice and Omnisend on the front end is the environment; build intelligence on top of it, do not rebuild it.

**The claim-risk rule.** ATC sells allergen and medical-adjacent benefits. Any AI that fabricates or overstates an allergen, bed-bug or efficacy claim is a legal liability, not a content win. Every play that touches content is human-in-the-loop and claim-governed. This is a feature for an ex-Gartner buyer, not a footnote.

**One thing to verify live.** ERP, PIM and OMS identities are not disclosed (Dynamics 365 is plausible but unconfirmed). The middle between Centric PLM and the sales channels is the discovery opening. Confirm what runs there before scoping the foundation.

---

## 2. Voice rules (the bar for every line)

Hold every line to these. They are the difference between advisory content and AI slop. Write for an ex-Gartner analyst who has read a thousand vendor decks.

- **Aphoristic, contrastive openers.** "You win the lab. You have to win the shelf too."
- **A name on every claim.** Watts, Watsco, General Mills, Salsify, Walmart, AllerEase. No floating assertions.
- **One load-bearing stat per idea.** A single number, dropped where it lands hardest. Never a wall of figures.
- **Reframes that flip intuition.** "You'll be sold a transformation. Your problem is the gap between PLM and the shelf."
- **Economy.** One to three sentence paragraphs. If a word can go with no loss, cut it.
- **No AI tells.** No em-dashes. Periods, colons, commas only. En-dashes live in numeric ranges ($8–26M).
- **It is about them.** Lead with what ATC owns and what an importer cannot copy.

| Write this | Not this |
|---|---|
| "The best product, losing on the cheapest shelf." | "Optimize your omnichannel presence." |
| "Your allergen patents, provable in the answer." | "Leverage AI to enhance content." |
| "Walmart chargebacks are margin you already earned." | "Improve supply-chain efficiency." |

---

## 3. The thesis (line one of the report)

Shows huge at the top. The one sentence the reader can repeat to a colleague. Target 8–16 words.

> **AllerEase wins 40,000 store shelves. The next shelf is the AI answer.**

*Why this line.* It names the asset (category leadership at retail scale), then reframes the work as winning the shelf that is forming now. It is repeatable, forward-looking, and entirely about them. For a 100-year-old maker, "the next shelf" lands as opportunity, not threat.

---

## 4. The wedge (the one play they start with)

The compounding play they can start without fixing everything first: high value, runs on data they already own, fast to prove, self-funds the rest.

- **Wedge label:** Product Knowledge Intelligence: the layer that turns Centric PLM into structured content for every shelf and every AI answer.
- **Wedge detail:** It runs on the product data already in Centric PLM and your content studio, bolts on without touching Shopify or your retail feeds, and almost no home-textile maker has structured its claims for the AI shelf yet. The proof is fast and the window is open.

*Why this one.* It is the only play that is simultaneously the highest-compounding asset (a century of provable product knowledge), the most bolt-on-ready (Centric PLM already holds the source data; no replatform), the explicit ask of the economic buyer (Herleman wants data centralized and syndicated), the champion's growth lever (Lehr owns the digital shelf), and strategically existential (it is the one axis where ATC out-competes imports). The research is blunt that 30 to 60% of catalogs have incomplete attributes and that this gap silently caps search, the digital shelf and AI readiness all at once.

---

## 5. Module 1: The Reframe

**Device:** one arresting stat plus the thesis setup. **Purpose:** everyone is selling you AI; the expensive part is the product knowledge you already own.

- **Opener:** Everyone here is selling you AI. The model is the cheapest thing in the room.
- **Stat:** `95%`
- **Stat label:** of enterprise AI pilots return nothing to the P&L.
- **Stat source:** MIT NANDA, ~95% of pilots · `https://nanda.media.mit.edu/`
- **Body:**

> 95% of enterprise AI pilots return nothing to the P&L. They fail on data that was never made ready, not on the model. You already hold the asset most makers lack: a century of provable product knowledge, the patents behind AllerEase and Tranquility, and a Centric PLM system of record since 2022. The edge is not a smarter model. It is structuring what you already know so every shelf, every marketplace, and every AI answer carries the proof an importer cannot fake.

*Why it works.* The 95% MIT NANDA figure is the most quotable credibility stat in the category, and naming data-readiness as the cause speaks straight to Herleman's stated priority. The body ends on what only ATC owns, per the voice rule.

---

## 6. Module 2: The Hype Filter

**Device:** a two-column cut. Left, commodity you rent (table-stakes or actively harmful). Right, compounding you own (defensible, runs on ATC's data). Then a single pitch-warning bar. Exactly four per column, parallel and concrete.

- **Opener:** Commodity AI runs on the model. Compounding AI runs on the product knowledge only you own.

| Commodity · rent it | Compounding · own it |
|---|---|
| A chatbot bolted onto americantextile.com | Centric PLM data, enriched and syndicated to every shelf |
| AI copy that cannot vouch for an allergen claim | Your patents and claims, structured so the AI cites them |
| Generic recs that ignore the brand or the retailer | Search and recs that know Sealy from AllerEase from private label |
| Basic ML demand forecasting relabeled as "AI" | Demand sensing that keeps Walmart in stock and penalty-free |

- **Pitch warning:**

> You run Shopify Plus and Centric PLM, so expect a pitch to replatform the storefront or bolt a generic copilot onto everything. Skip both. Your edge is the product knowledge already in Centric PLM and your studio. The work is structuring and syndicating it, not rebuilding what works. And any AI that invents an allergen claim is a liability, not a feature.

*One fact worth weaving from the research.* Generic AI content at scale backfires: 69% of US B2B decision-makers dislike knowing AI wrote the copy, and ungoverned claims are a compliance risk in an allergen-and-efficacy category. The right model is AI-drafted, human-approved, claim-governed. Keep this for the live conversation; the four-bullet grid stays clean.

---

## 7. Module 2.5: Your Stack (the "we read your stack" infographic)

**Device:** a scannable signal → unlock → trap table, one row per system ATC actually runs. This replaces "we understand your environment" with proof that we do. The last row honestly names the discovery opening.

| Signal (system you run) | The play it unlocks | What you'll be pitched instead |
|---|---|---|
| Centric PLM (Dassault), live since 2022 | Extend it downstream: AI-enrich and syndicate product knowledge to every channel | A PLM or PIM rip-and-replace. The unlock is the syndication layer, not a new system of record. |
| Shopify Plus + Shogun | DTC search, recommendations and personalization on the channel you fully own | A storefront replatform. Shopify Plus is an asset; add intelligence on top. |
| Bazaarvoice (ratings and reviews) | Mine reviews for claim language and content gaps, then feed the answer layer | "Collect more reviews." The value is turning review data into structured product knowledge. |
| Omnisend (email and SMS) | Lifecycle personalization tied to product data and replacement timing | Generic blast automation. Personalize on what the product data actually knows. |
| ERP / PIM / OMS (not disclosed) | Connect the fragmented middle between Centric PLM and the channels. The foundation. | "Agentforce or Copilot for everything." It only works once that middle is connected and clean. |

*Why these rows.* Each is confirmed in the Account 360 or the one-pager, and each maps to a play below. The last row turns the biggest unknown into a discovery question instead of a guess, which is exactly the credibility move for an ex-Gartner buyer.

---

## 8. Module 3: The Commodity vs Compounding Map

**Device:** the signature 2×2. **Y axis:** Commodity (runs on the model) to Compounding (runs on your data). **X axis:** Foundation-required (needs data work first) to Bolt-on-ready (start now). Each play is a bubble; **bubble size = dollar magnitude.** The **wedge is the starred bubble, top-right.** ATC-relevant plays are lit; generic ones greyed.

**Map intro line:**

> We mapped American Textile's world. The lit bubbles are the plays that pay for a maker built like yours, sized by the dollars on the table.

**The plays and coordinates** (compounding 0–1, bolt-on 0–1, magnitude 1–5):

| Play | Compounding | Bolt-on | Magnitude | Lit (yours) | Wedge |
|---|---|---|---|---|---|
| Product Knowledge / PIM syndication | 0.92 | 0.80 | 5 | yes | ★ |
| Digital-shelf AEO | 0.90 | 0.78 | 4 | yes | |
| AI search + recs (DTC) | 0.70 | 0.75 | 3 | yes | |
| DTC personalization / lifecycle | 0.68 | 0.60 | 3 | yes | |
| Retail RGM / trade promotion | 0.85 | 0.45 | 4 | yes | |
| Content intelligence / governance | 0.75 | 0.62 | 3 | yes | |
| Demand sensing + service levels | 0.72 | 0.40 | 4 | yes | |
| AI MDM / data foundation | 0.88 | 0.30 | 4 | yes | |
| Generic chatbot | 0.14 | 0.90 | 1 | no | |
| Ungoverned AI product copy | 0.12 | 0.80 | 1 | no | |
| ML forecasting (relabeled) | 0.40 | 0.42 | 2 | no | |

**Text rendering of the quadrant** (for reviewers without the live chart):

```
 COMPOUNDING (runs on your data)
        ▲
        │  AI MDM/foundation ●     Retail RGM ●        ★ PRODUCT KNOWLEDGE / PIM
        │  Demand sensing ●        Content intel ●       Digital-shelf AEO ●
        │                                                AI search + recs ●
        │                          DTC personalization ●
        │  · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
        │
        │  ML forecasting ○                             Generic chatbot ○
        │                                               Ungoverned AI copy ○
        ▼
 COMMODITY (runs on the model)
  FOUNDATION-REQUIRED ◀──────────────────────────────▶ BOLT-ON-READY
        (data work first)                              (start now)

  ● lit = yours   ○ greyed = table-stakes/harmful   ★ wedge = found money, start now
  bubble size = dollar magnitude
```

*Why the map lands.* The eye goes top-right and lands on the starred wedge: the biggest, most defensible, start-now play is Product Knowledge syndication. Retail RGM sits high-compounding but mid-bolt-on (magnitude 4, real money, but it needs the data connected first), which is why it is Phase 3. The greyed bubbles are the pitches to refuse, and "ungoverned AI copy" is greyed for a reason a compliance-minded buyer will respect.

---

## 9. The gate teaser (the blurred line on the lock)

The carrot on the email gate. The dollar figure stays blurred until a work email is entered, and it is computed from the revenue band, not written here.

> Your estimated annual digital-shelf, margin and operations opportunity is a real number we calculated for American Textile. Enter your work email to reveal your model.

**The number behind the blur:** $8–26M (computed from the $300–500M band; see Money Pools below). Reads as concrete and conservative, not a fantasy figure.

---

---

# Below the gate (the payoff)

Above the gate makes the argument. Below the gate proves it pays, sequences it, and hands them the shortlist. Same voice rules apply.

## 10. The money pools (where the dollars are)

**Device:** four horizontal bars, sized to the dollar range, each with one named proof point. Headline opportunity $8–26M. The four pools are the four channels ATC's product knowledge has to win.

```
 Digital shelf: win discovery across retail, marketplace and AI  $2M  ████████████████████ $9M
 Retail margin: trade spend and mix, not list price you control  $3M  ██████████████████ $8M
 Operations: keep Walmart in stock, penalty-free                 $2M  ███████████ $5M
 DTC: lift conversion and AOV on the channel you own             $1M  ████████ $4M
                                                                 └─ headline opportunity: $8–26M ─┘
```

**Pool 1. Digital shelf: win discovery across retail, marketplace and AI. ($2–9M)**
The decision is made on the shelf before a human is involved, and a fast-growing share of buyers now start in an AI chatbot. AI referrals grew 357% year on year and convert about 31% higher than organic. Whoever has the structured product data wins the listing, the search rank and the AI citation. Structure your patents and allergen claims once, syndicate everywhere, and the best product stops losing to the cheapest. *(Illustrative. Source: AI referral growth, 2025; digital-shelf, CPG.)*

**Pool 2. Retail margin: trade spend and mix, not list price you control. ($3–8M)**
You sell through Walmart and Target, so the lever is not list price, it is trade-promotion efficiency, assortment and mix. 66% of CPGs that grew both top and bottom line invested in revenue growth management. Asahi's AI trade-promotion tool lifted usage 60% and cut promo analysis to 24 hours. On a $300–500M base, one to two points of recovered trade and mix is $3–8M of near-pure margin. *(Verified. Source: CPG RGM; Asahi / EY.)*

**Pool 3. Operations: keep Walmart in stock, penalty-free. ($2–5M)**
Six factories, drop-ship for major e-tailers, and a Walmart Supplier-of-the-Year relationship that runs on on-time, in-full. A stockout is a lost sale and a chargeback; excess is dead working capital. Demand sensing on your own order and POS history frees about 10 to 12% of inventory and protects the service levels the relationship depends on. General Mills saved $20M+ applying AI across 5,000 daily shipments. *(Verified. Source: General Mills; BRF SAP IBP.)*

**Pool 4. DTC: lift conversion and AOV on the channel you own. ($1–4M)**
Your Shopify Plus store is the one channel where you keep the full margin and the full data. AI search and recommendations grounded in product knowledge, plus lifecycle personalization through Omnisend, lift both conversion and basket. Watsco's AI recommendations added 10% AOV and 22% on mobile; Hunter Douglas drove $1M from AI-handled shopping conversations. *(Verified. Source: Watsco, Adobe; Hunter Douglas.)*

*Why four.* They are not a vendor wish list. They are the four channels ATC's product knowledge must win: the digital shelf where the decision is made, the retail relationship where most of the revenue sits, the operations that protect that relationship, and the DTC store where ATC keeps everything. Each maps to a phase of the roadmap and a cluster of the shortlist, and the reader can hold four.

---

## 11. The roadmap (sequence it so it self-funds)

**Device:** a four-phase timeline. Phase 1 is the wedge and is lit "active." Each phase funds the next. The fast, bolt-on win goes first; the deeper data foundation matures underneath it.

```
 NOW ───────── 3–6 MO ───────── 6–12 MO ───────── OPERATIONS & THE FOUNDATION
  ●               ○                  ○                      ○
 Phase 1        Phase 2            Phase 3               Phase 4
 [ACTIVE]
 Structure &    DTC intelligence   Retail RGM +         Demand sensing,
 syndicate      on Shopify Plus    content governance   service levels,
 product        + Omnisend         at studio scale      connected-data foundation
 knowledge
```

**Phase 1, starts now. Structure and syndicate product knowledge.**
Enrich the product data in Centric PLM, structure the allergen, bed-bug and HeiQ claims as machine-readable, claim-safe content, and syndicate it across Walmart, marketplaces, drop-ship and DTC. Turn on the AEO extension so AI engines cite AllerEase and Tranquility. It runs on data you own and proves out fast. This is the wedge.

**Phase 2, 3 to 6 months. DTC intelligence on the channel you own.**
AI search, recommendations and personalization on Shopify Plus, plus lifecycle through Omnisend, all grounded in the same product knowledge and mined from Bazaarvoice reviews. This is where the syndication layer first shows up as conversion and basket lift you keep in full.

**Phase 3, 6 to 12 months. Retail growth and content at scale.**
Revenue growth management and trade-promotion optimization for the Walmart and Target relationship, plus content intelligence and governance that lets the studio produce spec-accurate, claim-safe content across thousands of SKUs and channels without growing headcount.

**Phase 4, operations and the foundation. Service levels and connected data.**
Demand sensing and service-level optimization across the six factories and drop-ship, order orchestration across channels, and the MDM and ERP data foundation that connects the middle Herleman wants centralized. The foundation work begins quietly in Phase 1 and matures here; the data takes 18 to 24 months regardless of when you start, so the fast wins fund it while it builds.

*Why this order.* Centric PLM already gives ATC an upstream source of truth, so the fastest defensible win is syndication, not a foundation rebuild. Front-of-house plays that run on data ATC already owns go first and self-fund the deeper operations and data work behind them.

---

## 12. The play shortlist (all pillars plus the foundation)

Each play: the problem in the buyer's language, a named case, the ROI shape, and what i95Dev actually does. Eight plays, grouped by pillar.

### Digital shelf and discovery

**A. Product Knowledge Intelligence: structured data for every shelf.** *(Wedge)*
- *Problem:* Your proof of superiority lives in Centric PLM and your studio, but it does not reach every Walmart listing, marketplace feed, drop-ship partner and AI engine in a consistent, structured form. So the best product gets ranked next to an import on price.
- *Named case:* CPG leaders run this through Salsify, 1WorldSync and Syndigo for the digital shelf; inriver and Akeneo now bulk-enrich attributes from source documents with human-in-the-loop.
- *ROI:* 30 to 60% of catalogs have incomplete attributes, which silently caps search, the digital shelf and AI readiness at once. Fixing it lifts all three together.
- *What i95Dev does:* Build the Centric-PLM-to-PIM-to-channel syndication layer that enriches, claim-governs and pushes structured product knowledge to every shelf and every AI engine. No replatform. *(Illustrative. Salsify / inriver / Syndigo.)*

**B. Digital-shelf AEO: be the answer, not a listing.**
- *Problem:* When a shopper asks an AI for the best allergen protector or weighted blanket, the answer is built from whoever structured their data. If that is not you, your patents never enter the conversation.
- *Named case:* Watts structured its technical content so Perplexity cites it over rivals for product-selection questions, the manufacturer playbook for the AI shelf.
- *ROI:* AI referrals convert about 31% higher than organic and grew 357% year on year. Almost no home-textile maker is doing this systematically, so the window is open now.
- *What i95Dev does:* Schema and answer-layer pipelines that make AllerEase and Tranquility machine-citable across ChatGPT, Perplexity and Google AI, fed from the same structured product knowledge. *(Illustrative. Watts Water.)*

**C. AI search and recommendations on DTC.**
- *Problem:* Bedding is a considered, spec-driven purchase (size, allergen rating, certification, firmness). Generic on-site search buries the right product and the shopper bounces to a marketplace.
- *Named case:* Watsco's AI recommendations added 10% AOV and 22% on mobile; its ML demand prediction cut lead time 15% on the same contractor platform.
- *ROI:* AI search converts about 1.67x keyword. On the DTC channel you fully own, that lift is margin you keep in full.
- *What i95Dev does:* Semantic, spec-aware search and recommendations on Shopify Plus, ranked on attributes and inventory, grounded in the product-knowledge layer. *(Verified. Watsco, Adobe.)*

### Retail sales and marketing

**D. Revenue growth management and trade-promotion optimization.**
- *Problem:* Most of your revenue runs through retailers who set the shelf price. The lever is trade spend, allowances, assortment and mix, and that money leaks across thousands of SKUs and promotions.
- *Named case:* 66% of CPGs that grew top and bottom line together invested in RGM. Asahi's AI trade-promotion tool lifted usage 60% and compressed promo analysis to 24 hours.
- *ROI:* One to two points of recovered trade and mix on a $300–500M base is $3–8M of near-pure margin.
- *What i95Dev does:* RGM and trade-promotion analytics on your sell-through and promotion data, surfacing mix and assortment moves and promo waste for the retail team. *(Verified. CPG RGM; Asahi / EY.)*

**E. Content intelligence and governance at studio scale.**
- *Problem:* Your studio produces real content, but scaling spec-accurate, claim-safe copy across every SKU, brand and channel is a headcount problem, and in an allergen category, a compliance one. The fix is not less AI. It is AI that drafts and a compliance expert that approves.
- *Named case:* Mondelez built a GenAI content "digital core" with Accenture to produce personalized content faster across its portfolio.
- *ROI:* Up to 60% less manual content time, with AI drafting and category and compliance experts approving by exception. The governance is the point, not an afterthought.
- *What i95Dev does:* An AI-assisted, human-in-the-loop content pipeline tied to the product-knowledge layer, with claim governance built in. *(Illustrative. Mondelez / Accenture.)*

### Operations

**F. Demand sensing and service-level optimization.**
- *Problem:* Six factories, drop-ship for major e-tailers, and retailers who penalize anything less than on-time, in-full. Classic forecasting misses the signal until the stockout or the chargeback.
- *Named case:* General Mills saved $20M+ applying AI across 5,000 daily shipments; BRF's SAP IBP demand sensing cut planning time 33%.
- *ROI:* Demand sensing frees about 10 to 12% of inventory working capital and protects the Walmart and Target service levels the relationship depends on.
- *What i95Dev does:* Layer demand sensing and service-level analytics onto your forecasting and order data so planners see the gap before it becomes a penalty. *(Verified. General Mills; BRF.)*

**G. Order orchestration across channels and drop-ship.**
- *Problem:* You sell retail, DTC, marketplace and drop-ship for major e-tailers. As SKUs and channels grow, order exceptions get handled by hand and service levels slip.
- *Named case:* JPW Industries cut order processing from 16 to 24 hours down to under 1 hour with order automation; US Foods automates image-and-doc-to-order at scale.
- *ROI:* Fewer manual touches, faster fulfillment, and the headroom to add channels without adding back-office cost.
- *What i95Dev does:* An order-orchestration and OMS layer that routes and reconciles orders across retail, DTC, marketplace and drop-ship from one source of truth. *(US Foods verified; JPW vendor-corroborated.)*

### Foundation

**H. AI Master Data and the connected-data foundation.**
- *Problem:* Centric PLM is the upstream source of truth, but the middle between it and the channels is fragmented, and ERP, PIM and OMS identities are unconfirmed. 87% of leaders say bad data has hampered AI value, and every play above runs on this.
- *Named case:* Stibo and Informatica (Gartner MDM Leaders) govern product and customer data continuously; TCS built Alstom's AI-driven MDM backbone for a unified view.
- *ROI:* 60 to 70% less manual stewardship, and it gates the ROI of every other initiative. The cheapest insurance on the whole portfolio, and exactly the centralization Herleman has asked for.
- *What i95Dev does:* AI-enriched MDM and PIM that connects Centric PLM to the channels and feeds search, the shelf, content and operations from one source of truth, with an ERP and analytics assessment to confirm the middle. *(Illustrative. Stibo / Informatica; TCS / Alstom.)*

*Why this set.* It spans all three research pillars (storefront and digital shelf, sales and marketing, operations) plus the foundation, sequenced so the bolt-on, start-now plays carry the weight and the deeper data work rides behind them. Every named case is a real manufacturer, distributor or CPG analog, never a SaaS vanity metric, which is the only kind of proof an ex-Gartner buyer will accept.

---

## 13. Why i95Dev (the close)

**Opener:**

> You'll be sold a transformation. Your problem is the gap between Centric PLM and the shelf.

**Body:**

> The Big-4 are built for enterprise-wide change. Your problem is not enterprise-wide. It is the unbuilt layer between the product knowledge you already own and the shelves where buyers decide. For a company whose moat is provable product superiority, losing the digital shelf means losing on the one axis where you should always win. That is exactly i95Dev's lane: surgical, deep in commerce, PIM and ERP, data-foundation first, on mid-market economics. We do not replatform Shopify and we do not replace Centric PLM. We make the product knowledge you have already invested in win every shelf and every AI answer.

**The proof to weave (from the research).** A $200M manufacturer asked a Big-4 firm for supply-chain ML and got a $3M, 8-month, 7-platform transformation; a specialist later shipped the same outcome in six weeks. The giants under-serve the $300–500M manufacturer: over-scoped, over-priced, and short on the commerce, PIM and ERP integration depth where the value is actually won. That gap is the close.

**CTA title:** Book your Product Knowledge and AI-Shelf Diagnostic.
**CTA subtitle:** A fixed-scope, fixed-fee assessment that maps how product data flows from Centric PLM to every shelf today, where it breaks, and what it is worth to fix. Built to be validated against ATC's real data. Weeks, not a multi-million transformation.

**Credibility strip:** 500+ B2B brands · 25+ years · 1,200+ projects.

---

## 14. Sources and credibility

Per-claim labels follow the research convention. Verified = independently corroborated. Illustrative = vendor or directional. Confirm flagged items before the meeting.

| Claim | Label | Source |
|---|---|---|
| 95% of AI pilots return nothing | Verified | MIT NANDA · nanda.media.mit.edu |
| 30–60% of catalogs have incomplete attributes | Verified | Research dump, Part 3.2.7 |
| AI referrals +357% YoY, ~31% higher conversion; 51% of software buyers start in AI | Illustrative | AI referral growth, 2025 |
| Watts cited by Perplexity for product selection | Illustrative | Watts Water |
| Salsify / 1WorldSync / Syndigo digital shelf; inriver / Akeneo enrichment | Illustrative | CPG digital shelf, PIM AI |
| Watsco AI recs +10% AOV, +22% mobile, −15% lead time | Verified | Watsco, Adobe / DC360 |
| Hunter Douglas $1M from AI conversations | Illustrative | Decagon / Hunter Douglas |
| 66% of dual-growth CPGs invested in RGM | Verified | CPG RGM, Part 4.4 |
| Asahi AI trade-promotion +60% usage, 24h analysis | Illustrative | EY / Asahi |
| General Mills $20M+ AI savings, 5,000 daily shipments | Verified | CIO Dive / General Mills |
| BRF SAP IBP demand sensing −33% planning time | Verified | SAP / BRF |
| US Foods doc-to-order at scale | Verified | DC360 / US Foods |
| JPW order processing 16–24h to <1h | Illustrative | Salesforce / JPW |
| 87% of leaders say bad data hampered AI value | Verified | Research dump, Part 2.2 |
| Stibo / Informatica MDM Leaders; TCS / Alstom MDM | Illustrative / Vendor | Gartner MDM; TCS |
| 69% dislike knowing AI wrote the copy | Verified | Research dump, Part 4.1 |
| Big-4 $3M/8-mo vs 6-week specialist fix | Directional | Research dump, Part 5.4 |

**Flagged to verify live:** revenue (one-pager $300–500M; dashboard ~$305.7M estimate); ERP, PIM and OMS identities (Dynamics 365 plausible, unconfirmed); the AI-enabled manufacturing and robotics claim (could not be verified in primary sources); employee count (ATC says 1,000+, not the ~680 anchor); any SI beyond Centric and Dassault.

---

## 15. Handback and reuse

This file is the finished content and the template. Every block maps to a field in `data/accounts/american-textile.ts` (thesis, wedge, wedgeDetail, reframe, hypeFilter, stackFlags, mapPlays, payoff.moneyPools, payoff.roadmap, payoff.plays, payoff.why), mirroring `chempoint.ts`. To run the next account, copy this file, swap the company, and rebuild the spine in Section 0 first. Everything downstream follows from the spine.

**Note on fit.** The Account 360 scores ATC a discovery-stage fit, not a hot, active RFP like ChemPoint. The content reflects that: the wedge is built to earn the first conversation by proving we read their stack and their digital-shelf reality, and the close offers a fixed-scope diagnostic rather than assuming a transformation mandate. Written for Karl Herleman's ex-Gartner skepticism: rigorous, named, and honest about what is unverified.
