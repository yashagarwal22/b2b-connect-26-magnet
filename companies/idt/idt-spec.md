# Integrated DNA Technologies (IDT): Enterprise AI + Commerce Advisory Spec

**Account:** Integrated DNA Technologies (a Danaher company) · **Vertical:** Life-sciences / custom genomics manufacturing
**Prepared by:** i95Dev · **Source basis:** Account 360 (Jun 2026) + B2B Connect 2026 AI research dump
**Status:** Final content. Every field below is finished copy, not a fill-in. It maps 1:1 to `data/accounts/idt.ts` and drops into the build with no rewriting.

> **What this document is.** A complete, advisory-grade content spec for the IDT lead-magnet report, built from scratch off the Account 360. It carries the finished copy for the whole page (above and below the email gate), the rationale behind each line, and the graphics that replace prose with a picture. The benchmark for every word is Sequoia's *Services: The New Software*: one argument, one axis, a handful of load-bearing facts. The spec is also the reusable template. To run the next account, copy this file and rebuild the spine first.

---

## 0. The spine (read this first)

Everything below hangs on one insight about IDT's business, drawn straight from the Account 360.

**IDT does not sell a catalog. It sells a specification.** Every order is a custom-synthesized molecule: a sequence, a set of modifications, a purification grade, a scale. The order *is* the product. 82,000 scientists do not browse and add to cart. They configure a thing that does not exist until they ask for it, and IDT's factory builds it to order. The moat is being the default place a researcher designs and orders a custom oligo, gene fragment or NGS kit, at a scale and turnaround no competitor matches.

That configuration step is exactly where IDT's commerce is weakest.

The storefront that takes the world's largest volume of made-to-order biology is a custom ASP.NET monolith on Sitefinity, roughly two decades old, with no PIM, no modern CPQ and no payment gateway. Meanwhile the factory behind it is tripling synthesis capacity at Coralville and entering regulated IVD diagnostics. The order-entry layer is being asked to carry 3x the volume and a new compliance bar on architecture that predates the iPhone. The gap between a world-class factory and a legacy configurator is the whole opportunity.

IDT's own moves already point at the fix. The team runs Microsoft Dynamics 365 for ERP and CRM, and won the Microsoft Dynamics Productivity Award for it. Abhijit Shah, VP of Digital Transformation, came from Revvity and Siemens Healthineers to lead eCommerce and AI together. President Ajay Gannerkote carries a deep ERP-transformation background. The leadership is fluent in exactly the backbone the storefront should ride. At the conference, Grace Lean named the missing piece in one word: CPQ.

So the strategic question is not "should we add AI to the website." It is "when a scientist designs a custom order, does the configuration run on intelligent rails wired to the D365 backbone you already own, or on a monolith that cannot scale with the factory." Answer it, and every one of the 82,000 ordering relationships compounds on a system competitors cannot copy. Miss it, and the most defensible advantage in the business, being the place the molecule gets designed and ordered, throttles the factory you are spending to triple.

That spine runs through the thesis, the wedge, every module, and every play.

---

## 1. The fixed facts (confirmed from the Account 360)

| Field | Value | Notes for the build |
|---|---|---|
| Company name | Integrated DNA Technologies (IDT) | Owned by Danaher; sits in the Life Sciences segment |
| Vertical label | Life-sciences / custom genomics manufacturing | Custom oligos, gene fragments, CRISPR, NGS, qPCR |
| Revenue band | $300–500M | Legacy ~$300M at 2018 acquisition, materially larger now; not separately disclosed. Drives the gated $ math |
| Buyer we write to | VP, Digital Transformation | Abhijit Shah (champion); economic context via President Ajay Gannerkote |
| Role emphasis | `ecommerce` | Storefront re-platform, CPQ, the configuration order |
| Active requirement | Yes | ~$4M budget. Now: PIM, Payments, Order Management. 6–12mo: Headless, Identity, AI/ML |
| Domains (email match) | idtdna.com | 82,000+ customers; custom-synthesis order volume |

**The triggers we lean on.** A funded program, a factory ramp that forces the issue, and a champion who owns eCommerce and AI together.

1. **A stated, budgeted commerce gap.** ~$4M, with PIM, Payments and Order Management named as Now priorities and CPQ named on the floor. The shopping list is the storefront's missing organs.
2. **A 3x capacity expansion at Coralville** plus entry into IVD clinical diagnostics. The factory is outgrowing a 20-year-old order-entry layer, and IVD adds a compliance bar the monolith was never built for.
3. **A D365-fluent leadership.** Shah runs digital and AI; Gannerkote is ERP-transformation by background; the Microsoft Dynamics Productivity Award is already won. The backbone for the fix is in the house.

**The data the moat runs on.** IDT already runs Microsoft Dynamics 365 (ERP and CRM) on Azure, and owns the ordering relationship with 82,000 scientists. The asset is the backbone and the configuration data, not a system still to be bought.

**The guardrail (do not break).** This is a backbone-led modernization, not a backbone replacement. Keep D365 as the system of record and the rail. The work is re-platforming the storefront onto it and filling the missing PIM, CPQ, payments and OMS, not migrating the ERP.

**One thing to verify live.** IDT standalone revenue is not disclosed, so do not cite a hard number. Confirm the absence of a modern PIM, CPQ and third-party payment gateway in the room, and name the circling competitors (Continuous Technology, ValueCoders) without naming them on the page.

---

## 2. Voice rules (the bar for every line)

Hold every line to these. They are the difference between advisory content and AI slop.

- **Aphoristic, contrastive openers.** "A catalog lists products. IDT configures a molecule that did not exist a minute ago."
- **A name on every claim.** Danaher, Coveo, Sitefinity, Dynamics 365, Shah, Gannerkote, Grace Lean. No floating assertions.
- **One load-bearing stat per idea.** A single number, dropped where it lands hardest. Never a wall of figures.
- **Reframes that flip intuition.** "Your storefront is not a website. It is the order-entry for a factory you are tripling."
- **Economy.** One to three sentence paragraphs. If a word can go with no loss, cut it.
- **No AI tells.** No em-dashes. Periods, colons, commas only. En-dashes live in numeric ranges ($9–28M).
- **It is about them.** Lead with what IDT owns and what New England Biolabs cannot copy.

| Write this | Not this |
|---|---|
| "The order is a specification, not a SKU." | "We optimize the end-to-end purchasing journey." |
| "Run the configurator on the D365 rails you already won an award for." | "Leverage synergies across the technology landscape." |
| "Fill the missing organs: PIM, CPQ, payments, OMS." | "Enable a holistic digital transformation." |

---

## 3. The thesis (line one of the report)

Shows huge at the top. The one sentence the reader can repeat to a colleague. Target 8–16 words.

> **Your factory is tripling. Make the order-entry as intelligent as the molecules it builds.**

*Why this line.* It credits the real moat (made-to-order synthesis at scale), names the live event (the Coralville ramp), and reframes the whole AI question as fixing the configuration order rather than bolting a chatbot onto a website. Repeatable, and about them.

---

## 4. The wedge (the one play they start with)

The compounding play they can start without fixing everything first: high value, runs on data they already own, fast to prove, self-funds the rest.

- **Wedge label:** AI-guided configuration and quoting for custom synthesis, on your D365 backbone.
- **Wedge detail:** It runs on the Dynamics 365 data and the ordering relationships IDT already owns, it solves the exact pain a scientist feels designing a complex custom order, and it answers Grace Lean's one-word ask, CPQ, on the highest-volume custom product before any full re-platform. Prove it on the top oligo line, then extend the same intelligent order rails across gene fragments, NGS kits and the new IVD catalog.

*Why this one.* It is the only play that is simultaneously the most differentiated (the order is a specification, and almost no competitor does guided configuration for made-to-order biology well), the highest-compounding (every configured order is a relationship that rides D365 rails competitors cannot copy), bolt-on-ready in its first cut (it proves on one product line without waiting for the whole monolith to be replaced), and exactly what the buyer named on the floor. It also sets up everything else: the configurator needs clean product data (PIM), account rails (entitlement and payments) and an order spine (OMS), which is the rest of the roadmap.

---

## 5. Module 1: The Reframe

**Device:** one arresting stat plus the thesis setup. **Purpose:** everyone is selling you an AI website; the asset is the configuration order and the D365 backbone only you own.

- **Opener:** A chatbot on the homepage is a demo. The scientist wants the configured order to be right, and fast.
- **Stat:** `95%`
- **Stat label:** of enterprise AI pilots return nothing to the P&L.
- **Stat source:** MIT NANDA, ~95% of pilots · `https://nanda.media.mit.edu/`
- **Body:**

> 95% of enterprise AI pilots return nothing to the P&L. They sit beside the work instead of inside it. IDT's work is the configured order: a sequence, a modification, a purification, a scale, built to order for 82,000 scientists. The edge is not a smarter homepage. It is making that configuration intelligent on the Dynamics 365 backbone you already run and already won an award for, so the order-entry can finally scale with the factory you are tripling at Coralville.

*Why it works.* The 95% MIT NANDA figure is the most quotable credibility stat in the category, and its failure cause is the last mile, not the model. The body refuses the chatbot frame, restates the real product (the configured order), and ends on the two assets only IDT holds: the D365 backbone and the factory ramp.

---

## 6. Module 2: The Hype Filter

**Device:** a two-column cut. Left, commodity you rent (table-stakes or actively harmful). Right, compounding you own (defensible, runs on IDT's configuration data and D365 backbone). Then a single pitch-warning bar. Exactly four per column, parallel and concrete.

- **Opener:** Commodity AI dresses up the website. Compounding AI makes the configured order right, on rails competitors cannot copy.

| Commodity · rent it | Compounding · own it |
|---|---|
| A chatbot bolted onto idtdna.com | AI-guided configuration for custom synthesis |
| Generic recs that ignore approved lists | Account-based entitlement on your punchout rails |
| AI-written product copy at scale | A real PIM that grounds every configured order |
| An "AI strategy" deck, not shipped CPQ | Intelligent order intake wired to Dynamics 365 |

- **Pitch warning:**

> You run Dynamics 365 well enough to win an award for it. Expect a pitch to rip up the backbone for a fashionable new platform. Do not. The molecule is configured here and the order belongs here. Re-platform the storefront onto the D365 rails you own, and fill the missing PIM, CPQ, payments and OMS. Modernize the order-entry, not the system of record.

*One fact worth weaving from the research.* The cautionary tale is autonomous AI that ignores the buyer's reality: 11x.ai, backed by a16z and Benchmark at $74M, lost an estimated 70 to 80% of customers when its AI replaced judgment with volume. For a scientist ordering a regulated, made-to-order reagent, a confident wrong configuration is worse than none. The win is grounding in clean product and account data, not generation. Keep this for the live conversation; the four-bullet grid stays clean.

---

## 7. Module 2.5: Your Stack (the "we read your stack" infographic)

**Device:** a scannable signal → unlock → trap table, one row per system IDT actually runs. Each trap line respects the guardrail: modernize the order-entry, keep the backbone.

| Signal (system you run) | The play it unlocks | What you'll be pitched instead |
|---|---|---|
| Microsoft Dynamics 365 (ERP + CRM) | Run intelligent CPQ and order intake on the backbone you already won an award for | A new platform that displaces D365. You own the rail; build on it. |
| Custom ASP.NET + Sitefinity storefront | Re-platform to headless commerce that rides D365, not a 20-year-old monolith | A lift-and-shift that keeps the monolith's limits. Re-platform the order-entry. |
| No PIM detected | Stand up a real PIM so every configured order grounds in clean product data | "Add AI copy." Clean attributes first; the AI is confidently wrong without them. |
| Coveo site search | Tune semantic search for spec and sequence queries scientists actually type | A rip-and-replace search bolt-on. You have Coveo; tune it for the catalog. |
| Punchout to Coupa, Ariba, Jaggaer | Enforce account entitlement and contract terms inside the configured order | A generic checkout. The 82,000 accounts need entitlement-aware ordering. |

*Why these rows.* Each system is confirmed in the Account 360, and each maps to a play below. The trap column names the commodity pitch before a competitor makes it, and every line keeps D365 as the rail while modernizing the storefront on top.

---

## 8. Module 3: The Commodity vs Compounding Map

**Device:** the signature 2×2. **Y axis:** Commodity (runs on the model) to Compounding (runs on your configuration data and D365 backbone). **X axis:** Foundation-required (needs data work first) to Bolt-on-ready (start now). Each play is a bubble; **bubble size = dollar magnitude.** The **wedge is the starred bubble, top-right.** IDT-relevant plays are lit; the hype pitches greyed.

**Map intro line:**

> We mapped IDT's world. The lit bubbles pay for a maker of custom molecules whose moat is the configured order, sized by the dollars on the table. The greyed ones are the AI-website demo.

**The plays and coordinates** (compounding 0–1, bolt-on 0–1, magnitude 1–5):

| Play | Compounding | Bolt-on | Magnitude | Lit (yours) | Wedge |
|---|---|---|---|---|---|
| AI-guided CPQ / configuration | 0.90 | 0.72 | 5 | yes | ★ |
| Account entitlement + payments | 0.82 | 0.65 | 4 | yes | |
| Headless re-platform on D365 | 0.80 | 0.45 | 5 | yes | |
| AI PIM foundation | 0.85 | 0.35 | 4 | yes | |
| B2B semantic search (Coveo) | 0.70 | 0.78 | 3 | yes | |
| Agentic bulk-order intake | 0.92 | 0.40 | 4 | yes | |
| AEO for spec and protocol content | 0.88 | 0.62 | 3 | yes | |
| Reorder + cross-sell NBA | 0.78 | 0.55 | 3 | yes | |
| Generic chatbot | 0.14 | 0.90 | 1 | no | |
| AI product copy | 0.12 | 0.80 | 1 | no | |
| "AI strategy" deck | 0.20 | 0.30 | 1 | no | |

**Text rendering of the quadrant** (for reviewers without the live chart):

```
 COMPOUNDING (runs on your config data + D365 backbone)
        ▲
        │  Agentic intake ●      AEO ●                    ★ AI-GUIDED CPQ / CONFIG
        │  AI PIM ●              Reorder/NBA ●            Account entitlement + pay ●
        │  Headless on D365 ●                            B2B semantic search ●
        │
        │  · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
        │
        │     "AI strategy" deck ○                  Generic chatbot ○
        │                                           AI product copy ○
        ▼
 COMMODITY (runs on the model)
  FOUNDATION-REQUIRED ◀────────────────────────────────▶ BOLT-ON-READY
        (data work first)                                 (start now)

  ● lit = yours   ○ greyed = table-stakes/hype   ★ wedge = the configured order, start now
  bubble size = dollar magnitude
```

*Why the map lands.* The eye goes top-right to the starred wedge: AI-guided configuration is the biggest play that can still start on one product line now, because it rides the D365 data already in hand. The headless re-platform and the PIM sit high on compounding but need foundation work, so they are the spine, not the first move. The greyed cluster, the chatbot and the AI copy, is the AI-website pitch the buyer should refuse.

---

## 9. The gate teaser (the blurred line on the lock)

The carrot on the email gate. The dollar figure stays blurred until a work email is entered, and it is computed from the revenue band, not written here. We only control the framing.

> Your estimated annual configuration, order-rails and findability opportunity is a real number we calculated for IDT. Enter your work email to reveal your model.

**The number behind the blur:** $9–28M (computed from the $300–500M band; standalone revenue is undisclosed, so the model is directional and conservative). See Money Pools below.

---

---

# Below the gate (the payoff)

Above the gate makes the argument. Below the gate proves it pays, sequences it, and hands them the shortlist. Same voice rules apply.

## 10. The money pools (where the dollars are)

**Device:** four horizontal bars, sized to the dollar range, each with one named proof point. Headline opportunity $9–28M (a conservative fraction of an estimated $300–500M base).

```
 The configurator: guided CPQ on custom synthesis      $4M ████████████████████ $12M
 The order rails: entitlement, payments, reorder        $2M ███████████ $7M
 The foundation: PIM + search + AEO findability         $2M █████████ $6M
 Agentic readiness: bulk-order intake + AI buyers        $1M ████ $3M
                                                        └─ headline opportunity: $9–28M ─┘
```

**Pool 1. The configurator: guided CPQ on custom synthesis. ($4–12M)**
Every IDT order is a configuration, and Salesforce estimates 15 to 30% of revenue is lost to configuration errors and quote delays in complex B2B. Faster, valid configuration closes more orders and protects margin, and a 24-hour quote wins where a 72-hour quote loses. On the highest-volume custom line, a few points of recovered conversion and margin is the largest line in the model. *(Illustrative. Source: Salesforce CPQ economics; Forrester TEI on guided selling.)*

**Pool 2. The order rails: entitlement, payments, reorder. ($2–7M)**
82,000 accounts order against approved lists, contract terms and punchout to Coupa, Ariba and Jaggaer, yet the storefront has no modern payment gateway and limited account logic. MilliporeSigma runs approved-list reorder for exactly this base. Entitlement-aware ordering and one-click reorder cut friction on recurring scientific purchasing, where the same labs buy the same reagents again and again. *(Illustrative. Source: MilliporeSigma reorder; B2B entitlement personalization.)*

**Pool 3. The foundation: PIM + search + AEO findability. ($2–6M)**
30 to 60% of B2B catalogs carry incomplete attributes, and IDT has no PIM detected, so the configurator, the search and the answer engines all run on data that is not ready. Clean product data plus tuned Coveo search plus structured spec content is the foundation every other play stands on, and it is also how scientists find IDT when they start in an AI assistant. *(Verified. Source: B2B catalog attribute benchmarks; AEO research, Part 3.5.)*

**Pool 4. Agentic readiness: bulk-order intake and AI buyers. ($1–3M)**
commercetools built a B2B intake agent for Mirion that turns emails, PDFs and spreadsheets into structured quotes. IDT's largest accounts still place bulk and plate orders the same messy way. Turning that intake into structured, validated orders is real value now, and it is the same readiness that keeps IDT visible as Gartner expects 90% of B2B purchases to be AI-intermediated by 2028. *(Directional. Source: commercetools B2B Intake Agent, Mirion; Gartner.)*

*Why four.* They are not a vendor wish list. They are the four layers of how IDT takes an order. The configuration where the value is created, the rails the 82,000 accounts run on, the data foundation underneath, and the agentic intake coming next. Each maps to a phase of the roadmap and a cluster of the shortlist, and the reader can hold four.

---

## 11. The roadmap (sequence it so it self-funds)

**Device:** a four-phase timeline. Phase 1 is the wedge and is lit "active." Each phase funds the next. Sequence is the configurator first, the rails and foundation second, the journey third, the agentic bet last.

```
 NOW ───────── 3–6 MO ───────── 6–12 MO ───────── THE SPINE & THE BET
  ●               ○                  ○                      ○
 Phase 1        Phase 2            Phase 3               Phase 4
 [ACTIVE]
 AI-guided      PIM foundation     Headless re-platform   Agentic bulk-order
 CPQ on top     + entitlement/     on D365 + reorder/     intake + AEO at
 custom line    payments rails     cross-sell             catalog scale
```

**Phase 1, starts now. AI-guided CPQ on the top custom line.**
Stand up guided configuration and quoting for the highest-volume custom product on the D365 backbone, answering Grace Lean's CPQ ask and proving the model on real orders. It runs on data you own and ships without waiting for the full re-platform. This is the wedge.

**Phase 2, 3 to 6 months. PIM foundation and account rails.**
Stand up a real PIM so every configured order grounds in clean data, and wire account entitlement and a modern payment gateway onto the punchout rails the 82,000 accounts already use. The configurator gets trustworthy; the order rails get modern.

**Phase 3, 6 to 12 months. Headless re-platform and reorder.**
Re-platform the Sitefinity monolith to headless commerce on D365, and turn on one-click reorder and cross-sell across the account base, so recurring scientific purchasing gets faster every cycle.

**Phase 4, the spine and the bet. Agentic intake and AEO.**
Turn bulk and plate orders from emails, PDFs and spreadsheets into structured, validated orders, and structure spec and protocol content so AI engines cite IDT for the design. Gartner expects 90% of B2B purchases to be AI-intermediated by 2028. The risk is being invisible, not being behind.

*Why this order.* IDT named PIM, payments and OMS as Now and CPQ on the floor, so the sequence leads with the configurator win that proves on one line, then funds the foundation, the re-platform and the agentic bet behind it. Each phase pays for the next.

---

## 12. The play shortlist (the configurator, the rails, the foundation, the bet)

Each play: the problem in the buyer's language, a named case, the ROI shape, and what i95Dev actually does. Eight plays, grouped by where the value sits.

### The configurator

**A. AI-guided configuration and quoting (CPQ) for custom synthesis.** *(Wedge)*
- *Problem:* Every IDT order is a specification, and a complex custom configuration is where the scientist either completes a valid order fast or abandons it. CPQ is the one word Grace Lean came to the conference for.
- *Named case:* Schneider Electric configures a breaker in roughly 90 seconds against a 72-hour manual quote; Forrester TEI on guided selling shows material quote-cycle and margin gains.
- *ROI:* Salesforce estimates 15 to 30% of complex-B2B revenue is lost to config errors and quote delays; recovering a slice on the top line is the largest pool in the model.
- *What i95Dev does:* AI-guided configuration and quoting on the D365 backbone, valid by construction, starting on one custom product line. *(Illustrative. Schneider CPQ; Salesforce CPQ economics.)*

**B. Reorder and cross-sell next-best-action.**
- *Problem:* The same labs buy the same reagents on a cycle, but reorder and adjacent-product prompts stay manual on a 20-year-old storefront.
- *Named case:* Watsco's AI recommendations lifted average order value 10%; Johnson Controls whitespace models unlocked $40M from 23 accounts.
- *ROI:* growing a known account is cheaper and higher-converting than winning a new lab.
- *What i95Dev does:* one-click reorder and next-best-action on D365 order history, surfaced in the scientist's account and to the sales team. *(Verified. Watsco, DC360; Johnson Controls, Beyond the Arc.)*

### The order rails

**C. Account entitlement and modern payments.**
- *Problem:* 82,000 accounts order against approved lists, contracts and punchout to Coupa, Ariba and Jaggaer, but the storefront lacks a modern payment gateway and deep account logic, so the wrong price or an unapprovable item is one click away.
- *Named case:* MilliporeSigma renders approved-list reorder per logged-in account; entitlement-aware B2B storefronts are production-ready on D365-class backbones.
- *ROI:* cutting rep-assisted and corrected orders protects margin and frees the team the factory ramp will stretch.
- *What i95Dev does:* entitlement, contract pricing and a modern payment gateway wired to the punchout rails and D365. *(Illustrative. MilliporeSigma; B2B entitlement personalization.)*

**D. Headless re-platform on the D365 backbone.**
- *Problem:* The custom ASP.NET and Sitefinity monolith is being asked to carry 3x the synthesis volume and a new IVD compliance bar on architecture two decades old.
- *Named case:* Dawn Foods re-platformed to composable commerce and grew online at triple-digit rates with 30% faster time-to-order; MKM lifted revenue 82% on a headless B2B build.
- *ROI:* a modern, headless order-entry that rides D365 scales with the factory instead of throttling it.
- *What i95Dev does:* a headless commerce re-platform on the Dynamics 365 backbone, keeping the system of record and replacing the monolith. *(Verified. Dawn Foods; MKM, BigCommerce.)*

### The foundation

**E. AI PIM foundation.**
- *Problem:* 30 to 60% of B2B catalogs have incomplete attributes, IDT has no PIM detected, and a configurator or an answer engine on dirty data is confidently wrong, which is unacceptable for regulated reagents and IVD.
- *Named case:* Bio-Rad and Thermo Fisher enrich regulated catalogs from source documents; Stibo and Informatica are Gartner MDM Leaders, and inriver and Akeneo ship agentic enrichment.
- *ROI:* clean product data gates the configurator, the search, the AEO and the agentic intake. The cheapest insurance on the portfolio.
- *What i95Dev does:* a real PIM with human-in-the-loop enrichment, standardizing attributes and modifications across the custom catalog. *(Illustrative. Bio-Rad / Thermo Fisher; Stibo / Informatica.)*

**F. B2B semantic search and AEO.**
- *Problem:* Scientists search by sequence, modification and application, and increasingly start in an AI assistant. If Coveo is not tuned for spec queries, or the answer engine cites a competitor, the order is lost before idtdna.com loads.
- *Named case:* AI search converts about 1.67 times keyword; AI referrals grew 357% year on year and convert about 31% higher than organic, and almost no life-science seller has structured for it.
- *ROI:* on a catalog this technical, relevance and citation are measured upside on the channel that already carries orders.
- *What i95Dev does:* tune Coveo for spec and sequence intent, and structure protocol and spec content so AI engines cite IDT for the design. *(Verified. Search-AI benchmarks; AEO research, Part 3.5.)*

### The bet

**G. Agentic bulk-order intake.**
- *Problem:* IDT's largest accounts place bulk and plate orders as emails, PDFs and spreadsheets, and the team rekeys them by hand.
- *Named case:* commercetools built a B2B intake agent for Mirion that turns exactly those documents into structured quotes; JPW Industries cut order processing from 16 to 24 hours to under one hour with AI order automation.
- *ROI:* structured intake removes manual rekeying and error exactly as the factory volume triples.
- *What i95Dev does:* an AI intake agent that turns bulk-order documents into validated, structured orders on the D365 rails. *(Illustrative. commercetools / Mirion; JPW Industries, Salesforce.)*

**H. Agentic-commerce readiness.**
- *Problem:* The AI buyer is coming for research reagents, and a catalog that is not machine-readable and machine-purchasable is invisible to it.
- *Named case:* Gartner expects 90% of B2B purchases to be AI-intermediated by 2028; Google's AP2 protocol and OpenAI Instant Checkout already ship agentic purchasing in consumer commerce.
- *ROI:* readiness is a low-cost option on the channel that defines 2027 and 2028, bought now on a foundation you are already building.
- *What i95Dev does:* make the catalog machine-purchasable for agents using AP2 and MCP, grounded in the new PIM and D365 data. *(Directional. Gartner; Google AP2; OpenAI Instant Checkout.)*

*Why this set.* It spans the configurator, the order rails, the data foundation and the agentic bet, but it leads with the CPQ and rails plays that run on the D365 data already in hand and answer the buyer's stated shopping list. Every named case is a real distributor, manufacturer or life-science analog, never a vanity metric, and every play keeps D365 as the backbone rather than replacing it.

---

## 13. Why i95Dev (the close)

**Opener:**

> You'll be sold a platform that replaces the backbone you won an award for. You do not need it.

**Body:**

> The platform pitch is a rebuild of the wrong layer. Your backbone is Dynamics 365 and it works. Your problem is the order-entry: a 20-year-old configurator with no PIM, no CPQ and no payment gateway, asked to carry a factory you are tripling. That is i95Dev's lane: deep in Dynamics 365, deep in commerce, surgical, at mid-market economics. We re-platform the storefront onto the D365 rails you already own and fill the missing organs, so the configured order finally scales with the factory. We do not migrate your ERP. We make it sell.

**The proof to weave (from the research).** A $200M manufacturer asked a Big-4 firm for a focused fix and got a $3M, 8-month, 7-platform transformation; a specialist later shipped the same outcome in six weeks. IDT does not need a transformation, and it does not need the offshore body shops circling the account. It needs a Dynamics-deep specialist who ships CPQ on the top line with a real number behind it. That gap is the close.

**CTA title:** Book your AI-in-Commerce Diagnostic.
**CTA subtitle:** A fixed-scope, fixed-fee assessment that validates these numbers against IDT's real catalog, order and D365 data. Two weeks, not a platform rebuild.

**Credibility strip:** 500+ B2B brands · 25+ years · 1,200+ projects · Microsoft Dynamics depth.

---

## 14. Sources and credibility

Per-claim labels follow the research convention. Verified = independently corroborated. Illustrative = vendor or directional benchmark. Directional = widely cited, no single primary source. Confirm flagged items before the meeting.

| Claim | Label | Source |
|---|---|---|
| 95% of AI pilots return nothing | Verified | MIT NANDA · nanda.media.mit.edu |
| 82,000+ customers; custom-synthesis model; D365 ERP/CRM | Company | IDT / Account 360 |
| Microsoft Dynamics Productivity Award | Company | IDT / Account 360 |
| No PIM / CPQ / payment gateway detected on storefront | Inferred | Account 360 live-site signatures (verify live) |
| Coveo search; SFMC personalization; punchout Coupa/Ariba/Jaggaer | Company | Account 360 |
| 3x Coralville capacity; first IVD assays Mar 2026 | Verified | Account 360 / Danaher coverage |
| Schneider breaker config ~90s vs 72h | Illustrative | Research dump, Part 3.4 |
| 15–30% of complex-B2B revenue lost to config errors | Illustrative | Salesforce CPQ; research dump Part 3.2 |
| AI search converts ~1.67x keyword | Verified | Search-AI benchmarks (research dump, Part 3.2) |
| AI referrals +357% YoY, ~31% higher conversion | Illustrative | AEO research, Part 3.5 |
| commercetools B2B Intake Agent (Mirion) | Illustrative | commercetools / DC360 |
| JPW Industries order time 16–24h to <1h | Illustrative | Salesforce / Account 360 research dump |
| Watsco AI recs, AOV +10% | Verified | Adobe / DC360 |
| Dawn Foods re-platform, triple-digit online growth | Verified | commercetools / DC360 |
| MKM revenue +82% on headless B2B | Verified | BigCommerce / BusinessWire |
| Johnson Controls $40M from 23 accounts | Verified | Beyond the Arc / JCI |
| Bio-Rad / Thermo Fisher regulated-catalog enrichment | Illustrative | Research dump, Part 3.4 |
| Stibo / Informatica MDM Leaders | Illustrative | Gartner MDM |
| 11x.ai customer loss | Verified | TechCrunch |
| Gartner 90% of B2B purchases AI-intermediated by 2028 | Directional | Gartner |
| Google AP2 / OpenAI Instant Checkout | Verified | Google Cloud / OpenAI announcements |
| Big-4 $3M / 8-mo vs 6-week specialist fix | Directional | Research dump, Part 5.4 |

**Flagged to verify live:** IDT standalone revenue is undisclosed, so do not cite a hard number; confirm the absence of a modern PIM, CPQ and third-party payment gateway in the room; identify any named storefront or D365 SI of record; note the circling competitors (Continuous Technology, ValueCoders) without naming them on the page; confirm the supremeclients.com portal vendor seen in the CSP.

---

## 15. Handback and reuse

This file is the finished content and the template. To wire IDT: every block maps to a field in `data/accounts/idt.ts` (thesis, wedge, wedgeDetail, reframe, hypeFilter, stackFlags, mapPlays, payoff.moneyPools, payoff.roadmap, payoff.plays, payoff.why). To run the next account, copy this file and rebuild the spine in Section 0 first. The spine is the insight that makes the rest inevitable; everything downstream follows from it.
