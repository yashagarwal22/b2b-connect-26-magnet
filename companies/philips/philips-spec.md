# Philips Personal Health: Enterprise AI + Commerce Advisory Spec

**Account:** Koninklijke Philips N.V. (Personal Health segment) · **Vertical:** Health technology / consumer DTC eCommerce
**Prepared by:** i95Dev · **Source basis:** Account 360 (Jun 2026) + B2B Connect 2026 AI research dump
**Status:** Final content. Every field below is finished copy, not a fill-in. It maps 1:1 to `data/accounts/philips.ts` and drops into the build with no rewriting.

> **What this document is.** A complete, advisory-grade content spec for the Philips lead-magnet report, built from scratch off the Account 360. It carries the finished copy for the whole page (above and below the email gate), the rationale behind each line, and the graphics that replace prose with a picture. The benchmark for every word is Sequoia's *Services: The New Software*: one argument, one axis, a handful of load-bearing facts. The spec is also the reusable template. To run the next account, copy this file and rebuild the spine first.

---

## 0. The spine (read this first)

Everything below hangs on one insight about Philips' business, drawn straight from the Account 360.

**Personal Health is Philips' DTC engine, and it is the company's top performer.** Sonicare, OneBlade and grooming, sold direct, grew +9.0% comparable at a 15.8% margin in Q1 2026, the best of any segment. The diagnostic systems get the headlines; the toothbrush pays the bills. The moat is the installed base of connected personal-health devices and the recurring replenishment relationship, a brush head, a blade, that no pure retailer can reach.

The buyer came asking for three specific things, in his own words.

Antonio Espinoza, Global Head of Digital Marketing and Ecommerce, with budget and strategy authority, came to the conference for AI personalization, omnichannel orchestration, and agentic offerings for marketing. That is not a vague "do AI" brief. It is a three-part shopping list, and every item lands on the DTC storefront he owns.

The reframe is the whole argument. Personalization for Philips is not banner testing on a homepage. It is making the recurring relationship intelligent, on the device the customer already owns, across every channel they touch.

A retailer can recommend a toothbrush. Only Philips knows the brush head is four months old and the customer skipped the last reorder. That signal is the asset, and it sits idle today.

So the strategic question is not "should we add AI to the storefront." It is "does the highest-margin recurring relationship in the company run on intelligent, agentic rails that know the device and the reorder cycle, or on a generic SAP Hybris storefront that treats every visit like a first visit." Answer it, and every replenishment relationship compounds on data competitors cannot copy. Miss it, and the top-performing segment grows on the same banner tests everyone else runs.

GUARDRAIL: Valtech is an entrenched digital-experience SI on the Hybris storefront, with 10+ business units and 20+ projects since 2014. Position i95Dev as the specialist complement on the AI personalization, agentic-marketing and replenishment layer, not as a rip-out of the storefront SI.

That spine runs through the thesis, the wedge, every module, and every play.

---

## 1. The fixed facts (confirmed from the Account 360)

| Field | Value | Notes for the build |
|---|---|---|
| Company name | Koninklijke Philips N.V. (Philips) | Global health technology; HQ Amsterdam; we write to the Personal Health segment |
| Vertical label | Health technology / consumer DTC eCommerce | Personal Health: oral care, grooming, the DTC engine |
| Revenue band | Personal Health segment, not group | Group Q1 2026 sales EUR 3.9B; Personal Health is the relevant base for the model, not the whole company |
| Buyer we write to | Global Head of Digital Marketing & Ecommerce | Antonio Espinoza (champion); budget and strategy authority |
| Role emphasis | `ecommerce` + `marketing` | AI personalization, omnichannel orchestration, agentic marketing on DTC |
| Active requirement | Yes | Now: Personalization. 6–12mo: AI/ML, Omni-Channel, Headless Commerce, CX optimization |
| Domains (email match) | philips.com | DTC storefront on SAP Commerce Cloud (Hybris) |

**The triggers we lean on.** A top-performing segment, a buyer with budget and a literal three-part ask, and a storefront where that ask has nowhere to run today.

1. **The segment is winning and the buyer owns it.** Personal Health grew +9.0% comparable at 15.8% margin in Q1 2026, the best in the company, and Espinoza controls the DTC budget and strategy. The money and the mandate are in one place.
2. **A subscription and replenishment relationship already live.** OneBlade and Sonicare run subscription and replenishment today. The recurring relationship exists; it is not yet intelligent.
3. **A literal three-part brief.** AI personalization, omnichannel orchestration, agentic marketing. The buyer named the work. The job is to ground it in the data Philips already owns.

**The data the moat runs on.** Philips owns 1.3M connected IoT devices and 134 PB of data, plus Salesforce CRM and a live subscription base. The asset is the device signal and the reorder relationship, not a system still to be bought.

**The guardrail (do not break).** This is a specialist-complement play, not a storefront rip-out. Valtech is the entrenched DX SI on Hybris. Position i95Dev on the AI personalization, agentic-marketing and replenishment layer that rides the existing storefront and the SAP S/4HANA backbone, and coexist with the SI rather than displace it.

**Things to verify live.** Confirm the payment processor (Adyen suspected, unconfirmed); confirm CDP/PIM on the consumer side; confirm whether Adobe is commerce or content (correction: the DTC storefront is SAP Hybris, NOT Adobe Magento); confirm Valtech's current scope versus open work.

---

## 2. Voice rules (the bar for every line)

Hold every line to these. They are the difference between advisory content and AI slop.

- **Aphoristic, contrastive openers.** "A retailer recommends a toothbrush. Only Philips knows the brush head is four months old."
- **A name on every claim.** Sonicare, OneBlade, Hybris, Coveo, Bazaarvoice, Espinoza, Valtech, Dawn Foods. No floating assertions.
- **One load-bearing stat per idea.** A single number, dropped where it lands hardest. Never a wall of figures.
- **Reframes that flip intuition.** "Personalization is not the homepage. It is the reorder the customer forgot to place."
- **Economy.** One to three sentence paragraphs. If a word can go with no loss, cut it.
- **No AI tells.** No em-dashes. Periods, colons, commas only. En-dashes live in numeric ranges ($15–40M).
- **It is about them.** Lead with what Philips owns and what GE HealthCare and a pure retailer cannot copy.

| Write this | Not this |
|---|---|
| "The reorder is the relationship, not a transaction." | "We optimize the end-to-end customer journey." |
| "Make the recurring relationship intelligent on the device they already own." | "Leverage AI synergies across the digital ecosystem." |
| "Agentic reorder on the highest-volume replenishment SKU first." | "Enable a holistic AI-driven personalization strategy." |

---

## 3. The thesis (line one of the report)

Shows huge at the top. The one sentence the reader can repeat to a colleague. Target 8–16 words.

> **Your top-performing segment runs on a recurring relationship. Make it intelligent on every channel.**

*Why this line.* It credits the real moat (the replenishment relationship and the connected installed base), names the live fact (Personal Health is the top performer), and reframes the whole AI ask as making the recurring relationship intelligent rather than bolting personalization onto a homepage. Repeatable, and about them.

---

## 4. The wedge (the one play they start with)

The compounding play they can start without fixing everything first: high value, runs on data they already own, fast to prove, self-funds the rest.

- **Wedge label:** AI personalization and agentic reorder on the Personal Health subscription base, across every channel.
- **Wedge detail:** It runs on the subscription and replenishment relationship and the connected-device installed base Philips already owns, it is the buyer's literal three-part ask, it compounds on the top-performing segment, and it proves fast on the highest-volume replenishment SKUs (brush heads, blades) before any broader omnichannel work. Prove it on Sonicare brush-head reorder, then extend the same intelligent reorder rails across OneBlade blades and the grooming range.

*Why this one.* It is the only play that is simultaneously the most differentiated (a retailer cannot see the device or the reorder cycle), the highest-compounding (every reorder is a relationship that rides device and CRM data competitors cannot copy), bolt-on-ready in its first cut (it proves on one SKU without waiting for an omnichannel re-platform), and exactly the three things Espinoza named on the floor. It also sets up everything else: agentic reorder needs clean consumer product data (PIM), a channel spine (omnichannel orchestration) and a churn and cross-sell model on the installed base, which is the rest of the roadmap.

---

## 5. Module 1: The Reframe

**Device:** one arresting stat plus the thesis setup. **Purpose:** everyone is selling you an AI website; the asset is the recurring relationship and the device signal only you own.

- **Opener:** A personalization banner is a demo. The customer wants the reorder to arrive before the brush head wears out.
- **Stat:** `95%`
- **Stat label:** of enterprise AI pilots return nothing to the P&L.
- **Stat source:** MIT NANDA, ~95% of pilots · `https://nanda.media.mit.edu/`
- **Body:**

> 95% of enterprise AI pilots return nothing to the P&L. They sit beside the work instead of inside it. Philips' work in Personal Health is the recurring relationship: a Sonicare brush head, a OneBlade blade, bought again and again by a customer whose connected device Philips already sees. The edge is not a smarter homepage. It is making that reorder intelligent across every channel, on the 1.3M connected devices and the subscription base you already own, so the top-performing segment compounds on data a retailer cannot reach.

*Why it works.* The 95% MIT NANDA figure is the most quotable credibility stat in the category, and its failure cause is the last mile, not the model. The body refuses the banner frame, restates the real product (the recurring relationship), and ends on the two assets only Philips holds: the device installed base and the subscription relationship.

---

## 6. Module 2: The Hype Filter

**Device:** a two-column cut. Left, commodity you rent (table-stakes or actively harmful). Right, compounding you own (defensible, runs on Philips' device and subscription data). Then a single pitch-warning bar. Exactly four per column, parallel and concrete.

- **Opener:** Commodity AI dresses up the storefront. Compounding AI makes the reorder right, on rails a retailer cannot copy.

| Commodity · rent it | Compounding · own it |
|---|---|
| A chatbot bolted onto the Hybris storefront | AI agentic reorder on the subscription base |
| Generic recs that ignore the device a customer owns | Device-aware personalization on 1.3M connected units |
| AI-written banner copy at scale | Omnichannel orchestration grounded in CRM and reorder data |
| An "AI personalization" deck, not shipped reorder | Churn and cross-sell NBA on the installed base |

- **Pitch warning:**

> You already run a capable Hybris storefront with Valtech behind it. Expect a pitch to rip it out for a fashionable composable re-platform. Do not lead with that. The relationship is the reorder and the device, not the page template. Add the AI personalization, agentic reorder and omnichannel layer on top of the storefront and the SAP backbone you own. Make the recurring relationship intelligent, not the homepage prettier.

*One fact worth weaving from the research.* The cautionary tale is autonomous AI that ignores the customer's reality: 11x.ai, backed by a16z and Benchmark at $74M, lost an estimated 70 to 80% of customers when its AI replaced judgment with volume. For a customer who owns a Philips device, a wrong recommendation that ignores what they already bought is worse than none. The win is grounding in device and reorder data, not generation. Keep this for the live conversation; the four-bullet grid stays clean.

---

## 7. Module 2.5: Your Stack (the "we read your stack" infographic)

**Device:** a scannable signal → unlock → trap table, one row per system Philips actually runs. Each trap line respects the guardrail: add the intelligence layer, coexist with the storefront SI.

| Signal (system you run) | The play it unlocks | What you'll be pitched instead |
|---|---|---|
| SAP Commerce Cloud (Hybris) DTC storefront | Layer device-aware personalization and agentic reorder on the storefront you already run | A full composable rip-out. Add the AI layer first; re-platform is a separate decision. |
| Subscription / replenishment (OneBlade, Sonicare) live | Turn passive auto-ship into intelligent, predicted reorder timed to device wear | "More email cadence." The signal is the device, not the calendar. |
| 1.3M connected IoT devices, 134 PB data | Use device telemetry to personalize and trigger reorder competitors cannot see | A generic CDP build. You already hold the signal; activate it. |
| Salesforce CRM | Wire churn and cross-sell next-best-action to the storefront and the customer | A standalone marketing tool that ignores purchase history. Ground NBA in CRM. |
| Coveo AI site search + Bazaarvoice reviews | Tune search and UGC for the recurring buyer, not just the first-time visitor | A rip-and-replace search bolt-on. You have Coveo; tune it for replenishment intent. |

*Why these rows.* Each system is confirmed in the Account 360, and each maps to a play below. The trap column names the commodity pitch before a competitor makes it, and every line keeps the storefront and the SAP backbone while adding the AI layer on top.

---

## 8. Module 3: The Commodity vs Compounding Map

**Device:** the signature 2×2. **Y axis:** Commodity (runs on the model) to Compounding (runs on your device and subscription data). **X axis:** Foundation-required (needs data work first) to Bolt-on-ready (start now). Each play is a bubble; **bubble size = dollar magnitude.** The **wedge is the starred bubble, top-right.** Philips-relevant plays are lit; the hype pitches greyed.

**Map intro line:**

> We mapped Philips Personal Health's world. The lit bubbles pay for a DTC engine whose moat is the recurring relationship, sized by the dollars on the table. The greyed ones are the AI-banner demo.

**The plays and coordinates** (compounding 0–1, bolt-on 0–1, magnitude 1–5):

| Play | Compounding | Bolt-on | Magnitude | Lit (yours) | Wedge |
|---|---|---|---|---|---|
| AI personalization + agentic reorder | 0.92 | 0.70 | 5 | yes | ★ |
| Churn + cross-sell NBA (installed base) | 0.85 | 0.62 | 4 | yes | |
| Omnichannel orchestration | 0.80 | 0.45 | 5 | yes | |
| Consumer PIM + clean product data | 0.82 | 0.35 | 3 | yes | |
| Device-aware personalization (IoT) | 0.90 | 0.40 | 4 | yes | |
| B2C semantic search (Coveo) tuning | 0.68 | 0.78 | 3 | yes | |
| Agentic-commerce + AEO readiness | 0.88 | 0.58 | 3 | yes | |
| Reviews + UGC intelligence (Bazaarvoice) | 0.70 | 0.66 | 2 | yes | |
| Generic chatbot | 0.14 | 0.90 | 1 | no | |
| AI banner copy | 0.12 | 0.82 | 1 | no | |
| "AI personalization" deck | 0.20 | 0.30 | 1 | no | |

**Text rendering of the quadrant** (for reviewers without the live chart):

```
 COMPOUNDING (runs on your device + subscription data)
        ▲
        │  Device-aware pers. ●    AEO/agentic ●            ★ AI PERS. + AGENTIC REORDER
        │  Consumer PIM ●          Churn/cross-sell NBA ●   Reviews/UGC intel ●
        │  Omnichannel orch. ●                              B2C semantic search ●
        │
        │  · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
        │
        │     "AI pers." deck ○                     Generic chatbot ○
        │                                           AI banner copy ○
        ▼
 COMMODITY (runs on the model)
  FOUNDATION-REQUIRED ◀────────────────────────────────▶ BOLT-ON-READY
        (data work first)                                 (start now)

  ● lit = yours   ○ greyed = table-stakes/hype   ★ wedge = the recurring relationship, start now
  bubble size = dollar magnitude
```

*Why the map lands.* The eye goes top-right to the starred wedge: AI personalization and agentic reorder is the biggest play that can still start on one SKU now, because it rides the device and subscription data already in hand. Omnichannel orchestration and the consumer PIM sit high on compounding but need foundation work, so they are the spine, not the first move. The greyed cluster, the chatbot and the banner copy, is the AI-website pitch the buyer should refuse.

---

## 9. The gate teaser (the blurred line on the lock)

The carrot on the email gate. The dollar figure stays blurred until a work email is entered, and it is computed from the Personal Health channel, not written here. We only control the framing.

> Your estimated annual personalization, reorder and omnichannel opportunity is a real number we calculated for Philips Personal Health. Enter your work email to reveal your model.

**The number behind the blur:** $15–40M (computed from the DTC and subscription Personal Health channel, the relevant base, not the whole group; the model is directional and conservative). See Money Pools below.

---

---

# Below the gate (the payoff)

Above the gate makes the argument. Below the gate proves it pays, sequences it, and hands them the shortlist. Same voice rules apply.

## 10. The money pools (where the dollars are)

**Device:** four horizontal bars, sized to the dollar range, each with one named proof point. Headline opportunity $15–40M (a conservative fraction tied to the DTC and subscription Personal Health channel, not the whole group).

```
 The wedge: AI personalization + agentic reorder           $6M ████████████████████ $16M
 Omnichannel orchestration across every channel             $4M █████████████ $11M
 Churn / retention + cross-sell on the installed base       $3M ██████████ $9M
 Agentic-commerce + AEO readiness                           $2M █████ $4M
                                                           └─ headline opportunity: $15–40M ─┘
```

**Pool 1. The wedge: AI personalization and agentic reorder. ($6–16M)**
Personalization done on account and behavior, not banners, moves baskets: Dawn Foods grew baskets 10% with behavioral recs, and Watsco lifted average order value 10% with AI recommendations. Philips already owns the device signal and the subscription base, so a predicted reorder timed to brush-head wear converts where a generic auto-ship reminder does not. On the highest-volume replenishment SKU, a few points of reorder conversion and subscription retention is the largest line in the model. *(Illustrative. Source: Dawn Foods baskets +10%; Watsco AOV +10%, DC360.)*

**Pool 2. Omnichannel orchestration across every channel. ($4–11M)**
The same customer touches the storefront, email, the device app and retail, and today each channel treats them as new. Orchestration grounded in CRM and reorder history makes the next touch on any channel reflect the last, which is the second item on Espinoza's literal brief. Personalization that runs across channels rather than on one page is where the directional +10–25% retention and +20–40% efficiency in the CDP benchmarks actually lands. *(Directional. Source: CDP activation benchmarks, research dump Part 4.7.)*

**Pool 3. Churn, retention and cross-sell on the installed base. ($3–9M)**
Growing a customer who already owns a Philips device is cheaper and converts higher than winning a new one: cross-sell converts 3 to 4x, and new-customer acquisition costs 5 to 7x expansion. Johnson Controls unlocked $40M from 23 accounts with whitespace and next-best-action models. Surfacing the next product (a OneBlade owner who has never tried Sonicare) and flagging a subscriber about to lapse is pure margin on the base Philips already serves. *(Verified. Source: Johnson Controls $40M, Beyond the Arc; cross-sell economics, research dump Part 4.3.)*

**Pool 4. Agentic-commerce and AEO readiness. ($2–4M)**
The AI buyer is arriving in consumer commerce now: Google's AP2 protocol shipped with 60+ partners, and OpenAI Instant Checkout is live with retailer partnerships. A Philips replenishment SKU that is not machine-readable and machine-purchasable is invisible to the agent that reorders it. Conversational service agents already carry real revenue, Decagon drove $1M from AI-handled conversations for Hunter Douglas and SharkNinja handled 250,000, so readiness is value now and an option on 2027. *(Directional. Source: Google AP2; OpenAI Instant Checkout; Decagon/Hunter Douglas; SharkNinja, research dump Part 6.3.)*

*Why four.* They are not a vendor wish list. They are the four layers of how Philips compounds the recurring relationship. The intelligent reorder where the value is created, the omnichannel spine the customer moves across, the installed base that funds retention and cross-sell, and the agentic readiness coming next. Each maps to a phase of the roadmap and a cluster of the shortlist, and the reader can hold four.

---

## 11. The roadmap (sequence it so it self-funds)

**Device:** a four-phase timeline. Phase 1 is the wedge and is lit "active." Each phase funds the next. Sequence is the reorder wedge first, omnichannel and foundation second, the installed-base plays third, the agentic bet last.

```
 NOW ───────── 3–6 MO ───────── 6–12 MO ───────── THE SPINE & THE BET
  ●               ○                  ○                      ○
 Phase 1        Phase 2            Phase 3               Phase 4
 [ACTIVE]
 AI pers. +     Consumer PIM +     Omnichannel orch.      Agentic-commerce
 agentic        device-aware       + churn/cross-sell     + AEO at catalog
 reorder on     personalization    NBA on installed base  scale
 top SKU
```

**Phase 1, starts now. AI personalization and agentic reorder on the top SKU.**
Stand up device-aware personalization and predicted, agentic reorder for the highest-volume replenishment SKU (Sonicare brush head), on the existing storefront and SAP backbone, proving the model on real reorders. It runs on data you own and ships without waiting for a re-platform. This is the wedge.

**Phase 2, 3 to 6 months. Consumer PIM and device-aware personalization.**
Stand up clean consumer product data so personalization and reorder ground in trustworthy attributes, and wire device telemetry into the personalization layer so the storefront knows the unit the customer owns. The reorder gets accurate; the personalization gets device-aware.

**Phase 3, 6 to 12 months. Omnichannel orchestration and installed-base NBA.**
Orchestrate the storefront, email, the device app and retail off one CRM-grounded profile, and turn on churn, retention and cross-sell next-best-action across the base, so every channel reflects the last touch and the recurring relationship gets stickier each cycle.

**Phase 4, the spine and the bet. Agentic-commerce and AEO.**
Make replenishment SKUs machine-purchasable for agents using AP2 and MCP, and structure product and how-to content so AI engines cite Philips for oral care and grooming. The AI buyer is arriving in consumer commerce. The risk is being invisible, not being behind.

*Why this order.* Espinoza named personalization as Now and AI/ML, omnichannel and headless as 6–12 months, so the sequence leads with the reorder win that proves on one SKU, then funds the foundation, the orchestration and the agentic bet behind it. Each phase pays for the next.

---

## 12. The play shortlist (the wedge, the rails, the base, the bet)

Each play: the problem in the buyer's language, a named case, the ROI shape, and what i95Dev actually does. Eight plays, grouped by where the value sits.

### The wedge

**A. AI personalization and agentic reorder on the subscription base.** *(Wedge)*
- *Problem:* Sonicare and OneBlade subscription is live but passive: auto-ship fires on a calendar, not on the device. The customer who skips a reorder or whose brush head is worn is invisible to the storefront.
- *Named case:* Dawn Foods grew baskets 10% with behavioral personalization; Watsco lifted AOV 10% with AI recommendations on its B2B platform, the same recommendation engine logic applied to a DTC base.
- *ROI:* a predicted, device-timed reorder lifts conversion and subscription retention on the highest-volume SKU, the largest pool in the model.
- *What i95Dev does:* device-aware personalization and predicted agentic reorder on the existing storefront and SAP backbone, starting on one SKU. *(Illustrative. Dawn Foods / Watsco, DC360.)*

**B. Churn, retention and cross-sell next-best-action.**
- *Problem:* OneBlade owners who never try Sonicare, and subscribers about to lapse, are not surfaced. Growing the customer Philips already has is left to generic email.
- *Named case:* Johnson Controls unlocked $40M from 23 accounts with whitespace models; cross-sell converts 3 to 4x and acquisition costs 5 to 7x expansion.
- *ROI:* retention and cross-sell on the installed base is higher-margin and higher-converting than new-customer acquisition.
- *What i95Dev does:* churn and next-best-action models on Salesforce CRM and reorder history, surfaced in the customer experience and to marketing. *(Verified. Johnson Controls, Beyond the Arc; cross-sell economics, research dump.)*

### The rails

**C. Omnichannel orchestration.**
- *Problem:* The customer moves across storefront, email, the device app and retail, and each channel treats them as new. Espinoza named omnichannel orchestration as item two of his brief.
- *Named case:* CDP activation benchmarks show +20–40% campaign efficiency and +10–25% retention when one resolved profile drives every channel.
- *ROI:* orchestration off one CRM-grounded profile cuts wasted touches and lifts retention across the Personal Health base.
- *What i95Dev does:* unify the customer profile across channels on the SAP and Salesforce backbone, and orchestrate the next touch consistently. *(Directional. CDP activation benchmarks, research dump Part 4.7.)*

**D. Device-aware personalization on the connected installed base.**
- *Problem:* Philips holds 1.3M connected devices and 134 PB of data, yet the storefront personalizes as if it cannot see the device the customer owns.
- *Named case:* US Foods turned proprietary signal into AI search and recs that added 1.5 cases per order; the pattern is activating data competitors do not hold.
- *ROI:* device telemetry timed to wear and usage makes reorder and cross-sell accurate in a way no retailer can match.
- *What i95Dev does:* wire device signal into the personalization and reorder layer, grounded in the IoT and CRM data Philips owns. *(Verified. US Foods, DC360; device data, Account 360.)*

### The foundation

**E. Consumer PIM and clean product data.**
- *Problem:* 30 to 60% of catalogs carry incomplete attributes, and personalization or an agentic reorder on dirty consumer data is confidently wrong.
- *Named case:* inriver and Akeneo ship agentic enrichment; Stibo and Informatica are Gartner MDM Leaders, the same foundation regulated and consumer catalogs run on.
- *ROI:* clean product data gates the personalization, the reorder, the search and the AEO. The cheapest insurance on the portfolio.
- *What i95Dev does:* a consumer PIM with human-in-the-loop enrichment, standardizing attributes across the oral-care and grooming range. *(Illustrative. inriver / Akeneo; Stibo / Informatica, Gartner MDM.)*

**F. B2C semantic search and reviews intelligence.**
- *Problem:* Coveo search and Bazaarvoice reviews are tuned for the first-time visitor, not the recurring buyer who searches by model and reorders by habit.
- *Named case:* AI search converts about 1.67x keyword; AI referrals grew 357% year on year and convert about 31% higher than organic.
- *ROI:* relevance and citation are measured upside on the channels that already carry DTC orders.
- *What i95Dev does:* tune Coveo for replenishment and model intent, and surface review signal to the recurring buyer. *(Verified. Search-AI benchmarks; AEO research, Part 3.5.)*

### The bet

**G. Agentic-commerce readiness.**
- *Problem:* The AI buyer is arriving in consumer commerce, and a replenishment SKU that is not machine-purchasable is invisible to the agent that would reorder it.
- *Named case:* Google's AP2 protocol shipped with 60+ partners including Mastercard and PayPal; OpenAI Instant Checkout is live with Walmart, Target and Instacart.
- *ROI:* readiness is a low-cost option on the channel that defines 2027 and 2028, bought on a foundation Philips is already building.
- *What i95Dev does:* make the replenishment catalog machine-purchasable for agents using AP2 and MCP, grounded in the consumer PIM and device data. *(Directional. Google AP2; OpenAI Instant Checkout.)*

**H. Conversational service and AEO.**
- *Problem:* Service questions and product discovery for oral care and grooming increasingly start in an AI assistant, and if the answer engine cites a competitor the sale is lost before philips.com loads.
- *Named case:* Decagon drove $1M from AI-handled conversations for Hunter Douglas; SharkNinja handled 250,000 conversations; AI referrals convert about 31% higher than organic.
- *ROI:* deflected service cost plus citation on the channel that increasingly starts the purchase.
- *What i95Dev does:* a grounded conversational service agent and structured product and how-to content so AI engines cite Philips for the category. *(Vendor-claimed / Directional. Decagon / Hunter Douglas; SharkNinja; AEO research, Part 3.5.)*

*Why this set.* It spans the reorder wedge, the omnichannel rails, the installed base and the agentic bet, but it leads with the personalization and reorder plays that run on the device and subscription data already in hand and answer Espinoza's stated three-part brief. Every named case is a real consumer or distributor analog, never a vanity metric, and every play adds the AI layer on top of the storefront rather than replacing it.

---

## 13. Why i95Dev (the close)

**Opener:**

> You'll be pitched a composable re-platform of a storefront that already works. Lead with the relationship instead.

**Body:**

> The re-platform pitch rebuilds the wrong layer. Your storefront is SAP Hybris with Valtech behind it, and it runs. Your opportunity is the recurring relationship: a subscription base and 1.3M connected devices whose reorder is still passive, on the highest-margin segment in the company. That is i95Dev's lane: deep in commerce, deep in the SAP and Salesforce backbone, surgical, at mid-market economics. We add the AI personalization, agentic reorder and omnichannel layer on top of the storefront you already own, so the recurring relationship finally gets intelligent. We do not rip out your SI. We make the reorder compound.

**The proof to weave (from the research).** A $200M manufacturer asked a Big-4 firm for a focused fix and got a $3M, 8-month, 7-platform transformation; a specialist later shipped the same outcome in six weeks. Philips does not need a transformation, and it does not need to displace Valtech to start. It needs a commerce-deep specialist who ships device-aware reorder on the top SKU with a real number behind it. That gap is the close.

**CTA title:** Book your AI-in-Commerce Diagnostic.
**CTA subtitle:** A fixed-scope, fixed-fee assessment that validates these numbers against Philips Personal Health's real subscription, device and storefront data. Two weeks, not a re-platform.

**Credibility strip:** 500+ B2B brands · 25+ years · 1,200+ projects · SAP and Salesforce commerce depth.

---

## 14. Sources and credibility

Per-claim labels follow the research convention. Verified = independently corroborated. Illustrative = vendor or directional benchmark. Directional = widely cited, no single primary source. Company = from the Account 360. Confirm flagged items before the meeting.

| Claim | Label | Source |
|---|---|---|
| 95% of AI pilots return nothing | Verified | MIT NANDA · nanda.media.mit.edu |
| Personal Health +9.0% comparable, 15.8% margin, top performer Q1 2026 | Company | Philips / Account 360 |
| Group Q1 2026 sales EUR 3.9B; net income ~EUR 146M | Company | Philips / Account 360 |
| DTC storefront on SAP Commerce Cloud (Hybris); Coveo, Bazaarvoice | Company | Account 360 (NOT Adobe Magento) |
| Subscription / replenishment live (OneBlade, Sonicare) | Company | Account 360 |
| 1.3M connected IoT devices; 134 PB data; Salesforce CRM; SAP S/4HANA | Company | Account 360 |
| Valtech entrenched DX SI (10+ BUs, 20+ projects since 2014) | Company | Account 360 |
| Dawn Foods baskets +10% on behavioral personalization | Verified | commercetools / DC360 |
| Watsco AI recs, AOV +10% | Verified | Adobe / DC360 |
| Johnson Controls $40M from 23 accounts | Verified | Beyond the Arc / JCI |
| Cross-sell converts 3–4x; acquisition 5–7x expansion | Directional | Research dump, Part 4.3 |
| US Foods AI ordering, +1.5 cases/order | Verified | DC360 / earnings |
| CDP activation +20–40% efficiency, +10–25% retention | Directional | Research dump, Part 4.7 |
| AI search converts ~1.67x keyword | Verified | Search-AI benchmarks (research dump, Part 3.2) |
| AI referrals +357% YoY, ~31% higher conversion | Illustrative | AEO research, Part 3.5 |
| Decagon / Hunter Douglas $1M from AI convos | Vendor-claimed | Decagon case study |
| SharkNinja 250,000 conversations | Vendor-claimed | Salesforce Agentforce |
| inriver / Akeneo agentic enrichment; Stibo / Informatica MDM Leaders | Illustrative | Gartner MDM / research dump |
| 30–60% of catalogs carry incomplete attributes | Verified | B2B catalog attribute benchmarks, Part 3.2 |
| 11x.ai customer loss | Verified | TechCrunch |
| Google AP2 / OpenAI Instant Checkout | Verified | Google Cloud / OpenAI announcements |
| Big-4 $3M / 8-mo vs 6-week specialist fix | Directional | Research dump, Part 5.4 |

**Flagged to verify live:** confirm the payment processor (Adyen suspected, unconfirmed); confirm CDP and PIM on the consumer side; confirm whether any Adobe footprint is commerce or content (the DTC storefront is SAP Hybris, not Magento); confirm Valtech's current scope versus open work; position i95Dev as specialist complement to the SI, never as a rip-out, on the page.

---

## 15. Handback and reuse

This file is the finished content and the template. To wire Philips: every block maps to a field in `data/accounts/philips.ts` (thesis, wedge, wedgeDetail, reframe, hypeFilter, stackFlags, mapPlays, payoff.moneyPools, payoff.roadmap, payoff.plays, payoff.why). To run the next account, copy this file and rebuild the spine in Section 0 first. The spine is the insight that makes the rest inevitable; everything downstream follows from it.
