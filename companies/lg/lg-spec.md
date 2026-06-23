# LG Electronics: Enterprise AI + Commerce Advisory Spec

**Account:** LG Electronics (HQ Seoul) · **Vertical:** Consumer electronics & home-appliance manufacturing, platform/service transformation
**Prepared by:** i95Dev · **Source basis:** Account 360 (Jun 2026) + B2B Connect 2026 AI research dump
**Status:** Final content. Every field below is finished copy, not a fill-in. It maps 1:1 to `data/accounts/lg.ts` and drops into the build with no rewriting.

> **What this document is.** A complete, advisory-grade content spec for the LG lead-magnet report, built from scratch off the Account 360. It carries the finished copy for the whole page (above and below the email gate), the rationale behind each line, and the graphics that replace prose with a picture. The benchmark for every word is Sequoia's *Services: The New Software*: one argument, one axis, a handful of load-bearing facts. The spec is also the reusable template. To run the next account, copy this file and rebuild the spine first.

---

## 0. The spine (read this first)

Everything below hangs on one insight about LG's business, drawn straight from the Account 360.

**LG has bet its brand on AI. "Affectionate Intelligence." "Zero Labor Home." Agent appliances unveiled at CES 2026.** The whole company narrative now runs on intelligence the customer can feel. Yet there is no live agentic checkout on lg.com. The brand promises an appliance that thinks for you, and the storefront still asks you to think for it.

That gap between the AI brand and AI commerce is the opportunity. And it is the exact thing the conference champion came asking for. Hemang Upadhyay, Sr. Manager of Product Management for AI at LG North America, named it in two words: "Agentic Commerce."

The moat is not the brand. It is the installed base. LG sells connected appliances by the millions and runs a fast-growing subscription "Home-as-a-Service" business: KRW 2.5T in FY2025, up 29% year on year. A recurring relationship plus a device that can reorder its own consumables is a natural agentic-commerce surface no pure retailer owns. Amazon can ship a filter. Only LG owns the washer that knows it needs one.

The reframe: agentic commerce for LG is not a science project. It is making the AI brand true at the point of purchase, and it can be proven as a low-cost pilot on a single product line. The "Affectionate Intelligence" that greets a buyer in the ad should be the same intelligence that completes the order.

The guardrail. This is a POC, not a platform deal. Budget is project-level, there is no active requirement, and LG already runs a custom Next.js headless storefront it is proud of. i95Dev's role is the specialist who ships a contained agentic-commerce and personalization pilot fast, on the rails LG already owns, and earns the bigger work by proving it.

That spine runs through the thesis, the wedge, every module, and every play.

---

## 1. The fixed facts (confirmed from the Account 360)

| Field | Value | Notes for the build |
|---|---|---|
| Company name | LG Electronics | HQ Seoul; competitors Samsung, Sony; four segments + webOS platform |
| Vertical label | Consumer electronics & home appliances, platform/service transformation | Home Appliance & Air Solution; Home Entertainment; Vehicle Solutions; Business Solutions |
| Revenue band | KRW 23.73T Q1 2026 (record), op profit KRW 1.67T | B2B = 36% of revenue; subscription +29% FY25 to ~KRW 2.5T |
| Buyer we write to | Sr. Manager, Product Management (AI) | Hemang Upadhyay (champion, wants "Agentic Commerce"); Nixalkumar Patel (Sr PM) |
| Role emphasis | `ecommerce` + AI | Agentic-commerce pilot, AI personalization on the D2C Online Brand Shop |
| Active requirement | No | Budget ~$50K–$200K (project-level). Now: Personalization. Frame as innovation POC |
| Domains (email match) | lg.com / lge.com | D2C Online Brand Shop; lg.com/us custom Next.js headless storefront |

**The triggers we lean on.** An AI brand without AI commerce, a champion who came asking for the exact wedge, and a subscription base that makes agentic reorder natural.

1. **An AI brand with no agentic checkout.** "Affectionate Intelligence," "Zero Labor Home" and Agent appliances at CES 2026, yet no live agentic checkout on lg.com. The brand has outrun the storefront.
2. **A champion who named the wedge.** Hemang Upadhyay explicitly wants "Agentic Commerce." The buyer wrote the proposal title for us.
3. **A subscription engine that fits agentic reorder.** Home-as-a-Service grew to ~KRW 2.5T, up 29%, and a connected appliance that reorders its own consumables is the most natural agentic surface there is.

**The data the moat runs on.** LG owns the installed base of connected appliances, the webOS platform, the subscription relationship, and a custom Next.js headless storefront with a proprietary cart API. The asset is the recurring relationship and the device, not a system still to be bought.

**The guardrail (do not break).** This is a POC, not a platform replacement. Keep the custom Next.js storefront, Constructor search and Segment CDP as the rails. The work is a contained agentic-commerce and personalization pilot on top, sized to a project budget, not a re-platform.

**One thing to verify live.** Confirm the subscription-commerce engine behind Home-as-a-Service (Ordergroove, Recharge, or custom), the Oracle Cloud ERP to Next.js middleware, any external D2C eCommerce SI (LG CNS is the captive group SI), and the agentic-checkout roadmap. All four are unconfirmed, which is exactly the consulting entry.

---

## 2. Voice rules (the bar for every line)

Hold every line to these. They are the difference between advisory content and AI slop.

- **Aphoristic, contrastive openers.** "The ad promises an appliance that thinks for you. The storefront still asks you to think for it."
- **A name on every claim.** webOS, Constructor, Segment, Next.js, Oracle Cloud ERP, Upadhyay, EXAONE, Home-as-a-Service. No floating assertions.
- **One load-bearing stat per idea.** A single number, dropped where it lands hardest. Never a wall of figures.
- **Reframes that flip intuition.** "Agentic commerce is not a moonshot for LG. It is the cheapest way to make the AI brand true at checkout."
- **Economy.** One to three sentence paragraphs. If a word can go with no loss, cut it.
- **No AI tells.** No em-dashes. Periods, colons, commas only. En-dashes live in numeric ranges ($3–12M).
- **It is about them.** Lead with what LG owns and what Samsung cannot copy: the subscription relationship and the device that reorders itself.

| Write this | Not this |
|---|---|
| "The appliance can reorder its own filter. Make that an agentic order." | "We unlock holistic omnichannel transformation." |
| "Run the pilot on the Next.js storefront you already built." | "We leverage synergies across the digital ecosystem." |
| "Make 'Affectionate Intelligence' true at checkout, on one product line." | "We enable an end-to-end AI-powered customer journey." |

---

## 3. The thesis (line one of the report)

Shows huge at the top. The one sentence the reader can repeat to a colleague. Target 8–16 words.

> **You sell Affectionate Intelligence. Your checkout still doesn't have any.**

*Why this line.* It uses LG's own brand language against the gap, names the live event (the AI brand at CES 2026), and reframes the whole AI question as making the brand true at the point of purchase rather than adding one more model to the marketing. Repeatable, and about them.

---

## 4. The wedge (the one play they start with)

The compounding play they can start without fixing everything first: high value, runs on rails they already own, fast to prove, earns the rest.

- **Wedge label:** An agentic-commerce pilot that makes the AI brand true at checkout, on the headless storefront you already run.
- **Wedge detail:** It runs on LG's custom Next.js headless storefront, with Constructor search and Segment CDP already in place. It closes the gap between the "Affectionate Intelligence" brand and a storefront with no agentic checkout. It is the champion's literal ask. It is a low-cost, contained pilot suited to the project-level budget, ideally on the subscription and replenishment surface where agentic reorder is most natural: the connected appliance that orders its own consumables.

*Why this one.* It is the only play that is simultaneously the most differentiated (LG owns the subscription relationship and the device, and no pure retailer can sell a washer that reorders its own filter), the most on-brand (it makes "Affectionate Intelligence" literally true at checkout), bolt-on-ready (it ships on the Next.js storefront without a re-platform), and exactly what the buyer named on the floor. It also sets up everything else: the pilot needs clean account data (personalization), a subscription spine (replenishment intelligence) and machine-readable catalog (agentic readiness), which is the rest of the roadmap.

---

## 5. Module 1: The Reframe

**Device:** one arresting stat plus the thesis setup. **Purpose:** everyone is selling you another AI model; the asset is the installed base and the subscription relationship, and the cheapest win is making the AI brand true at checkout.

- **Opener:** A smarter appliance is a product launch. A checkout that completes itself is a brand kept.
- **Stat:** `95%`
- **Stat label:** of enterprise AI pilots return nothing to the P&L.
- **Stat source:** MIT NANDA, ~95% of pilots · `https://nanda.media.mit.edu/`
- **Body:**

> 95% of enterprise AI pilots return nothing to the P&L. They sit beside the work instead of inside it. LG's work, at the point of sale, is the order: a buyer on lg.com, a connected appliance, a subscription that should reorder its own consumables. The edge is not another model behind the "Affectionate Intelligence" brand. It is making that brand true at checkout, on the Next.js storefront you already run, so the AI that greets the buyer in the ad is the same AI that completes the order. Prove it as a pilot on one product line, where the reorder is most natural.

*Why it works.* The 95% MIT NANDA figure is the most quotable credibility stat in the category, and its failure cause is the last mile, not the model. The body refuses the "more AI" frame, restates the real asset (the order, the device, the subscription), and ends on the cheapest place to make the brand pay: agentic checkout on rails LG already owns.

---

## 6. Module 2: The Hype Filter

**Device:** a two-column cut. Left, commodity you rent (table-stakes or actively harmful). Right, compounding you own (defensible, runs on LG's installed base and subscription relationship). Then a single pitch-warning bar. Exactly four per column, parallel and concrete.

- **Opener:** Commodity AI brands the website. Compounding AI makes the order complete itself, on the device and the subscription only you own.

| Commodity · rent it | Compounding · own it |
|---|---|
| Another chatbot on lg.com | Agentic checkout that makes the AI brand true |
| Generic recs that ignore the buyer's appliances | Personalization on Segment CDP and order history |
| AI ad copy for "Affectionate Intelligence" | A subscription that reorders its own consumables |
| An "AI strategy" deck, not shipped agentic commerce | Machine-readable catalog ready for AI buyers |

- **Pitch warning:**

> You already built a custom Next.js headless storefront with your own cart API. Expect a pitch to re-platform it onto SAP Hybris or Adobe, or to bolt on a generic AI suite. Do not. The storefront works and the relationship lives in it. Run a contained agentic-commerce and personalization pilot on the rails you own, prove it on one product line, then scale. Make the brand true at checkout, not rebuild the checkout.

*One fact worth weaving from the research.* The cautionary tale is autonomous AI that replaces judgment with volume: 11x.ai, backed by a16z and Benchmark at $74M, lost an estimated 70 to 80% of customers when the AI ran ahead of the buyer's reality. For a brand built on "Affectionate Intelligence," an agent that buys the wrong thing is worse than no agent. The win is an agent grounded in the buyer's appliances and subscription, not one generating orders on its own. Keep this for the live conversation; the four-bullet grid stays clean.

---

## 7. Module 2.5: Your Stack (the "we read your stack" infographic)

**Device:** a scannable signal → unlock → trap table, one row per system LG actually runs. Each trap line respects the guardrail: build the pilot on the rails, keep the storefront.

| Signal (system you run) | The play it unlocks | What you'll be pitched instead |
|---|---|---|
| Custom Next.js headless storefront + proprietary cart API | Ship agentic checkout on the storefront you already own | A re-platform to SAP Hybris or Adobe. You built the rail; build on it. |
| Segment CDP | Drive account-based personalization on profiles you already unify | "Buy a new CDP." You have Segment; activate it. |
| Constructor.io site search | Tune semantic search for appliance and consumable intent | A rip-and-replace search bolt-on. You have Constructor; tune it. |
| Home-as-a-Service subscription (~KRW 2.5T, +29%) | Turn the connected appliance into an agentic reorder surface | "Add a loyalty program." The device can reorder itself; make it. |
| Oracle Cloud ERP (global single instance) | Wire the pilot's order to the system of record cleanly | A new ERP-to-storefront platform. Keep Oracle as the record; integrate. |

*Why these rows.* Each system is confirmed in the Account 360, and each maps to a play below. The trap column names the commodity pitch before a competitor makes it, and every line keeps the storefront and the subscription as the rails while shipping the pilot on top. The Oracle-ERP-to-Next.js middleware is unconfirmed, which is itself the discovery hook.

---

## 8. Module 3: The Commodity vs Compounding Map

**Device:** the signature 2×2. **Y axis:** Commodity (runs on the model) to Compounding (runs on your installed base and subscription relationship). **X axis:** Foundation-required (needs data or integration work first) to Bolt-on-ready (start now). Each play is a bubble; **bubble size = dollar magnitude.** The **wedge is the starred bubble, top-right.** LG-relevant plays are lit; the hype pitches greyed.

**Map intro line:**

> We mapped LG's world. The lit bubbles pay for a brand built on AI whose moat is the connected device and the subscription, sized by the option value on the table. The greyed ones are the AI-website demo.

**The plays and coordinates** (compounding 0–1, bolt-on 0–1, magnitude 1–5):

| Play | Compounding | Bolt-on | Magnitude | Lit (yours) | Wedge |
|---|---|---|---|---|---|
| Agentic-commerce pilot (checkout) | 0.90 | 0.74 | 5 | yes | ★ |
| AI personalization on D2C Online Brand Shop | 0.82 | 0.78 | 4 | yes | |
| Subscription / replenishment intelligence | 0.88 | 0.58 | 4 | yes | |
| Agentic readiness at scale / AEO | 0.86 | 0.55 | 3 | yes | |
| B2B semantic search (Constructor) | 0.68 | 0.80 | 3 | yes | |
| Connected-appliance reorder NBA | 0.84 | 0.50 | 3 | yes | |
| Oracle-to-Next.js order middleware | 0.74 | 0.40 | 3 | yes | |
| Generic chatbot | 0.14 | 0.90 | 1 | no | |
| AI ad copy | 0.12 | 0.82 | 1 | no | |
| "AI strategy" deck | 0.20 | 0.30 | 1 | no | |

**Text rendering of the quadrant** (for reviewers without the live chart):

```
 COMPOUNDING (runs on your installed base + subscription)
        ▲
        │  Subscription/replenishment ●      Connected-appliance NBA ●   ★ AGENTIC CHECKOUT
        │  AEO / agentic readiness ●                                     AI personalization ●
        │  Oracle→Next.js middleware ●                                   B2B semantic search ●
        │
        │  · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
        │
        │     "AI strategy" deck ○                  Generic chatbot ○
        │                                           AI ad copy ○
        ▼
 COMMODITY (runs on the model)
  FOUNDATION-REQUIRED ◀────────────────────────────────▶ BOLT-ON-READY
        (data/integration first)                          (start now)

  ● lit = yours   ○ greyed = table-stakes/hype   ★ wedge = make the brand true at checkout, start now
  bubble size = dollar magnitude
```

*Why the map lands.* The eye goes top-right to the starred wedge: agentic checkout is the biggest play that can still start on one product line now, because it rides the Next.js storefront, Constructor and Segment already in hand. The subscription intelligence and the AEO bet sit high on compounding but need a little foundation work, so they are the follow-on, not the first move. The greyed cluster, the chatbot and the ad copy, is the AI-website pitch the buyer should refuse.

---

## 9. The gate teaser (the blurred line on the lock)

The carrot on the email gate. The dollar figure stays blurred until a work email is entered, and it is computed from the opportunity framing, not written here. We only control the framing.

> Your estimated value of being first to working agentic commerce on the D2C and subscription base is a real number we calculated for LG. Enter your work email to reveal your model.

**The number behind the blur:** $3–12M (directional, framed as the option value of being first to working agentic commerce on the D2C and subscription base, not a platform ROI). See Money Pools below.

---

---

# Below the gate (the payoff)

Above the gate makes the argument. Below the gate proves it pays, sequences it, and hands them the shortlist. Same voice rules apply.

## 10. The money pools (where the dollars are)

**Device:** four horizontal bars, sized to the dollar range, each with one named proof point. Headline opportunity $3–12M, framed as the option value of being first to working agentic commerce, not a transformation ROI.

```
 Agentic-commerce pilot: make the brand true at checkout    $1M ████████████ $4M
 AI personalization on the D2C Online Brand Shop            $0.5M ███████ $3M
 Subscription / replenishment intelligence                 $1M ████████ $3M
 Agentic readiness at scale + AEO                           $0.5M ████ $2M
                                                           └─ headline opportunity: $3–12M ─┘
```

**Pool 1. Agentic-commerce pilot: make the brand true at checkout. ($1–4M)**
The infrastructure is shipping now: Google's Agent Payments Protocol AP2 launched with 60+ partners including Mastercard, PayPal and Salesforce, OpenAI's Instant Checkout went live, and Shopify stood up Agentic Storefronts. LG brands itself on "Affectionate Intelligence" but has no live agentic checkout. The value here is not a conversion number on a slide. It is being first to working agentic commerce on a brand that already promised it, proven on one product line at pilot cost. *(Directional. Source: Google AP2; OpenAI Instant Checkout; Shopify Agentic Storefronts.)*

**Pool 2. AI personalization on the D2C Online Brand Shop. ($0.5–3M)**
LG already runs Segment CDP and Constructor search, so the rails for account-based, behavioral personalization are in place. Dawn Foods turned behavioral recommendations into triple-digit online growth and 10% bigger baskets; Watsco's AI recs lifted average order value 10%. On the D2C Online Brand Shop, surfacing the right next product to a logged-in buyer who already owns LG appliances is measured upside on a channel LG controls. *(Verified. Source: Dawn Foods, commercetools; Watsco, Adobe.)*

**Pool 3. Subscription / replenishment intelligence. ($1–3M)**
Home-as-a-Service grew to ~KRW 2.5T in FY2025, up 29%, and the same households reorder the same consumables on a cycle. MilliporeSigma runs approved-list reorder for exactly this kind of recurring base. A connected appliance that knows it needs a filter, and an agent that can reorder it, turns a subscription into an agentic-commerce surface no pure retailer owns. *(Illustrative. Source: MilliporeSigma reorder; subscription reorder patterns.)*

**Pool 4. Agentic readiness at scale and AEO. ($0.5–2M)**
Gartner expects 90% of B2B purchases to be AI-intermediated by 2028, and AI engines already drove 1.13B referral visits in a single month, up 357% year on year. A catalog that is not machine-readable and machine-purchasable is invisible to the AI buyer, and to the AI assistant a shopper now starts in. Structuring LG's catalog and spec content for agents and answer engines is a low-cost option on the channel that defines 2027 and 2028. *(Directional. Source: Gartner; AEO research, Part 3.5.)*

*Why four.* They are not a vendor wish list. They are the four layers of making the AI brand true at the point of sale. The agentic checkout where the brand is proven, the personalization that runs on rails LG owns, the subscription that becomes a reorder surface, and the agentic readiness coming next. Each maps to a phase of the roadmap and a cluster of the shortlist, and the reader can hold four. Be honest: B2C agentic commerce is earlier than B2B, but the window is now, and LG's brand has already made the promise.

---

## 11. The roadmap (sequence it so it self-funds)

**Device:** a four-phase timeline. Phase 1 is the wedge and is lit "active." Each phase earns the next. Sequence is the agentic pilot first, personalization and subscription intelligence second, the device reorder third, the agentic-readiness bet last.

```
 NOW ───────── 3–6 MO ───────── 6–12 MO ───────── THE SPINE & THE BET
  ●               ○                  ○                      ○
 Phase 1        Phase 2            Phase 3               Phase 4
 [ACTIVE]
 Agentic        AI personali-      Subscription /        Agentic readiness
 checkout       zation on the      replenishment +       at scale + AEO for
 pilot on one   D2C Online         connected-appliance   the AI buyer and
 product line   Brand Shop         reorder               answer engines
```

**Phase 1, starts now. Agentic-checkout pilot on one product line.**
Ship an agentic-commerce pilot on the Next.js storefront, on the product line where reorder is most natural, answering Hemang Upadhyay's "Agentic Commerce" ask and making "Affectionate Intelligence" true at checkout. It runs on rails LG owns and ships without a re-platform. This is the wedge.

**Phase 2, 3 to 6 months. AI personalization on the D2C Online Brand Shop.**
Activate Segment CDP and order history to render the right next product to a logged-in buyer who already owns LG appliances. The personalization that LG named as its current priority, on the channel it controls.

**Phase 3, 6 to 12 months. Subscription intelligence and connected-appliance reorder.**
Turn Home-as-a-Service into an agentic reorder surface: the connected appliance signals it needs a consumable, the agent reorders it, the subscription gets stickier every cycle. This is the moat no pure retailer can copy.

**Phase 4, the spine and the bet. Agentic readiness and AEO.**
Make the catalog machine-readable and machine-purchasable for agents, and structure spec content so AI engines cite LG. Gartner expects 90% of B2B purchases to be AI-intermediated by 2028. The risk is being invisible, not being behind.

*Why this order.* LG named personalization as its current priority and the champion named agentic commerce on the floor, so the sequence leads with the agentic pilot that proves the brand on one line, then earns the personalization, the subscription intelligence and the agentic bet behind it. Each phase pays for the next. The whole thing stays at pilot economics until the wins justify scale.

---

## 12. The play shortlist (the pilot, the personalization, the subscription, the bet)

Each play: the problem in the buyer's language, a named case, the ROI shape, and what i95Dev actually does. Eight plays, grouped by where the value sits.

### The pilot

**A. Agentic-commerce checkout on the headless storefront.** *(Wedge)*
- *Problem:* LG brands itself on "Affectionate Intelligence" and "Zero Labor Home," yet lg.com has no live agentic checkout. The brand promised an AI that acts; the storefront still makes the buyer do the work. Agentic Commerce is the exact thing Hemang Upadhyay came to the conference for.
- *Named case:* Google's AP2 protocol launched with 60+ partners including Mastercard, PayPal and Salesforce; OpenAI Instant Checkout and Shopify Agentic Storefronts already ship agentic purchasing in consumer commerce.
- *ROI:* the value is being first to working agentic commerce on a brand that already made the promise, proven on one product line at pilot cost, not a platform ROI.
- *What i95Dev does:* an agentic-commerce pilot on the Next.js storefront with the proprietary cart API, grounded in Segment and the subscription relationship, on one product line. *(Directional. Google AP2; OpenAI Instant Checkout; Shopify.)*

**B. Connected-appliance reorder next-best-action.**
- *Problem:* the same households reorder the same filters and consumables on a cycle, but the reorder is still manual, and the connected appliance that knows it needs a part cannot act on it.
- *Named case:* Watsco's AI recommendations lifted average order value 10%; US Foods' image-and-doc-to-order added 1.5 cases per order.
- *ROI:* growing a known, subscribed household is cheaper and higher-converting than winning a new buyer.
- *What i95Dev does:* a reorder and next-best-action layer on the connected appliance and order history, surfaced in the buyer's account on the D2C Online Brand Shop. *(Verified. Watsco, Adobe; US Foods, DC360.)*

### The personalization

**C. AI account-based personalization on the Online Brand Shop.**
- *Problem:* a logged-in buyer who already owns LG appliances still sees generic recommendations, and personalization is LG's stated current priority.
- *Named case:* Dawn Foods turned behavioral recs into triple-digit online growth and 10% bigger baskets; account-based personalization can lift revenue materially on a controlled D2C channel.
- *ROI:* surfacing the right next product to a known household is measured upside on a channel LG owns.
- *What i95Dev does:* activate Segment CDP and order history into account-based personalization on the Next.js storefront, no new CDP required. *(Verified. Dawn Foods, commercetools; B2B personalization benchmarks.)*

**D. B2B semantic search tuned for appliances and consumables.**
- *Problem:* buyers search by model, part and application, and a failed lookup on a consumable is a lost reorder.
- *Named case:* AI search converts about 1.67 times keyword; Dawn Foods saw 20x search-query growth after tuning AI search.
- *ROI:* on a catalog this broad, relevance is measured upside on the channel that already carries D2C orders.
- *What i95Dev does:* tune Constructor for appliance, part and consumable intent, no rip-and-replace. *(Verified. Search-AI benchmarks; Dawn Foods, commercetools.)*

### The subscription

**E. Subscription / replenishment intelligence for Home-as-a-Service.**
- *Problem:* Home-as-a-Service grew to ~KRW 2.5T, up 29%, but the subscription does not yet reorder its own consumables, so the most natural agentic surface LG owns sits idle.
- *Named case:* MilliporeSigma renders approved-list reorder per logged-in account; subscription reorder is production-ready on D2C platforms.
- *ROI:* a subscription that reorders itself is stickier every cycle, and it is a moat no pure retailer can copy.
- *What i95Dev does:* turn the subscription into an agentic reorder surface, with the connected appliance as the trigger and a human-in-the-loop default. *(Illustrative. MilliporeSigma; subscription reorder patterns.)*

**F. Oracle-to-Next.js order middleware.**
- *Problem:* the agentic pilot's order has to land cleanly in Oracle Cloud ERP, and the middleware between the global single-instance ERP and the Next.js storefront is unconfirmed.
- *Named case:* clean order write-back into the system of record is the difference between a pilot that demos and a pilot that ships; MIT NANDA found 95% of pilots fail at exactly this last mile.
- *ROI:* a pilot that writes back into Oracle is real value; one that does not is another demo.
- *What i95Dev does:* map and harden the order path from the Next.js cart to Oracle Cloud ERP, keeping Oracle as the system of record. *(Directional. MIT NANDA; Account 360 stack.)*

### The bet

**G. Agentic-commerce readiness at scale.**
- *Problem:* the AI buyer is coming for appliances and consumables, and a catalog that is not machine-readable and machine-purchasable is invisible to it.
- *Named case:* Gartner expects 90% of B2B purchases to be AI-intermediated by 2028; Google's AP2 and OpenAI Instant Checkout already ship agentic purchasing in consumer commerce.
- *ROI:* readiness is a low-cost option on the channel that defines 2027 and 2028, bought now on the storefront LG already runs.
- *What i95Dev does:* make the catalog machine-purchasable for agents using AP2 and MCP, grounded in LG's product and subscription data. *(Directional. Gartner; Google AP2; OpenAI.)*

**H. Answer Engine Optimization for the AI buyer.**
- *Problem:* shoppers increasingly start in an AI assistant, and if the answer engine cites Samsung for "best connected appliance," the order is lost before lg.com loads.
- *Named case:* AI engines drove 1.13B referral visits in a single month, up 357% year on year, and ChatGPT referrals convert about 31% higher than non-branded organic.
- *ROI:* citation is measured upside on a fast-growing acquisition channel almost no consumer-electronics seller has structured for.
- *What i95Dev does:* structure LG's spec and product content so AI engines cite LG for the appliance and the consumable. *(Illustrative / Directional. AEO research, Part 3.5.)*

*Why this set.* It spans the agentic pilot, the personalization, the subscription and the agentic bet, but it leads with the agentic-checkout and personalization plays that run on the Next.js storefront, Segment and Constructor already in hand and answer the buyer's stated and named priorities. Every named case is a real distributor, manufacturer or consumer-commerce analog, never a vanity metric, and every play keeps the storefront and the subscription as the rails rather than replacing them.

---

## 13. Why i95Dev (the close)

**Opener:**

> You'll be sold a re-platform of the storefront you already built. You do not need it.

**Body:**

> The platform pitch rebuilds the wrong layer. Your storefront is a custom Next.js headless build with your own cart API, and it works. Your gap is the one your own brand created: "Affectionate Intelligence" and "Zero Labor Home," with no agentic checkout to make it true. That is i95Dev's lane: deep in commerce, surgical, at mid-market economics, shipping a contained agentic-commerce and personalization pilot on the rails you own. We do not re-platform your storefront. We make the AI brand true at checkout, on one product line, with a real number behind it.

**The proof to weave (from the research).** A $200M manufacturer asked a Big-4 firm for a focused fix and got a $3M, 8-month, 7-platform transformation; a specialist later shipped the same outcome in six weeks. LG does not need a transformation, and it does not need an "AI strategy" deck. It needs a commerce-deep specialist who ships agentic checkout on one product line, fast, and earns the rest. That gap is the close.

**CTA title:** Book your Agentic-Commerce Diagnostic.
**CTA subtitle:** A fixed-scope, fixed-fee assessment that validates these numbers against LG's real storefront, subscription and catalog data, and scopes a pilot on one product line. Two weeks, not a re-platform.

**Credibility strip:** 500+ B2B brands · 25+ years · 1,200+ projects · Commerce and AI integration depth.

---

## 14. Sources and credibility

Per-claim labels follow the research convention. Verified = independently corroborated. Illustrative = vendor or directional benchmark. Directional = widely cited, no single primary source. Company = from the Account 360. Confirm flagged items before the meeting.

| Claim | Label | Source |
|---|---|---|
| 95% of AI pilots return nothing | Verified | MIT NANDA · nanda.media.mit.edu |
| "Affectionate Intelligence," "Zero Labor Home," Agent appliances at CES 2026 | Company | LG / Account 360 |
| No live agentic checkout on lg.com despite the AI brand | Verified | Account 360 live-site signatures (verify live) |
| Custom Next.js headless storefront + proprietary cart API (not Hybris/Adobe) | Verified | Account 360 live-site signatures |
| Constructor search; Segment CDP; Optimizely; PayPal/Affirm/Chase | Company | Account 360 |
| Oracle Cloud ERP global single instance; Salesforce CRM/CPQ | Company | Account 360 |
| Q1 2026 record KRW 23.73T revenue; op profit KRW 1.67T; B2B 36% | Company | LG / Account 360 |
| FY2025 subscription revenue ~KRW 2.5T, +29% | Company | LG / Account 360 |
| Hemang Upadhyay wants "Agentic Commerce" (champion) | Company | Account 360 / attendee data |
| Google AP2, 60+ partners (Mastercard/PayPal/Salesforce) | Verified | Google Cloud announcement |
| OpenAI Instant Checkout; Shopify Agentic Storefronts | Verified | OpenAI / Shopify announcements |
| Dawn Foods triple-digit online growth, +10% baskets, 20x search | Verified | commercetools / DC360 |
| Watsco AI recs, AOV +10% | Verified | Adobe / DC360 |
| US Foods image-to-order, +1.5 cases/order | Verified | DC360 / earnings |
| MilliporeSigma approved-list reorder | Illustrative | Research dump, Part 3.4 |
| AI search converts ~1.67x keyword | Verified | Search-AI benchmarks (research dump, Part 3.2) |
| AI referrals 1.13B visits, +357% YoY; ~31% higher conversion | Illustrative | AEO research, Part 3.5 |
| 11x.ai customer loss 70–80% | Verified | TechCrunch |
| Gartner 90% of B2B purchases AI-intermediated by 2028 | Directional | Gartner |
| Big-4 $3M / 8-mo vs 6-week specialist fix | Directional | Research dump, Part 5.4 |

**Flagged to verify live:** the subscription-commerce engine behind Home-as-a-Service (Ordergroove, Recharge, or custom); the Oracle Cloud ERP to Next.js storefront middleware; any external D2C eCommerce SI (LG CNS is the captive group SI); the agentic-checkout roadmap; whether personalization is already in flight on the D2C Online Brand Shop. Treat the engagement as an innovation POC at project-level budget ($50K–$200K), not a platform deal.

---

## 15. Handback and reuse

This file is the finished content and the template. To wire LG: every block maps to a field in `data/accounts/lg.ts` (thesis, wedge, wedgeDetail, reframe, hypeFilter, stackFlags, mapPlays, payoff.moneyPools, payoff.roadmap, payoff.plays, payoff.why). To run the next account, copy this file and rebuild the spine in Section 0 first. The spine is the insight that makes the rest inevitable; everything downstream follows from it.
