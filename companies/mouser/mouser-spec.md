# Mouser Electronics: Enterprise AI + Commerce Advisory Spec

**Account:** Mouser Electronics (a TTI / Berkshire Hathaway company) · **Vertical:** Electronic-component distribution
**Prepared by:** i95Dev · **Source basis:** Account 360 (Jun 2026) + B2B Connect 2026 AI research dump
**Status:** Final content. Every field below is finished copy, not a fill-in. It maps 1:1 to `data/accounts/mouser.ts` and drops into the build with no rewriting.

> **What this document is.** A complete, advisory-grade content spec for the Mouser lead-magnet report, built from scratch off the Account 360. It carries the finished copy for the whole page (above and below the email gate), the rationale behind each line, and the graphics that replace prose with a picture. The benchmark for every word is Sequoia's *Services: The New Software*: one argument, one axis, a handful of load-bearing facts. The spec is also the reusable template. To run the next account, copy this file and rebuild the spine first.

---

## 0. The spine (read this first)

Everything below hangs on one insight about Mouser's business, drawn straight from the Account 360.

**Mouser does not win the order. It wins the design.** Its whole model is rapid New Product Introduction: be first to stock and surface the newest components so a design engineer specifies a Mouser part into a prototype. Once that part is in the bill of materials, it gets bought at volume for the life of the product. The moat is being the engineer's default tool at the moment of design-in, across 44M products and 1,200+ brands. Two-thirds of revenue flows through the website. That is why Hayne Shumate puts it plainly: "If we don't have high-quality product data we don't have a business at all."

That moment of design-in is exactly what AI is now moving.

The engineer increasingly starts a part search at an AI assistant, not at mouser.com. If a generic model recommends a Digi-Key part, or an equivalent Mouser does not stock, because Mouser's parametric and lifecycle data is not structured for it, the design-in is lost at the source, before a cart ever exists. The same shift is an opening. The engineer's real artifact is the BOM, and the BOM is where obsolescence, lead-time and allocation pain live. Whoever solves substitution and quoting inside that workflow owns the design.

Mouser's own team has already drawn the line between signal and hype. Mohammad Mahboob, who runs the search platform: "Our top priority is to bring Gen AI into the fold and ensure that it is enhancing that experience, not for the sake of doing Gen AI." That is the discipline this account demands. The engineer does not want a chatbot. The engineer wants the right part, fast, with stock and a lead-time they can trust.

So the strategic question is not "should we add Gen-AI search." It is "when an engineer or an AI asks for the right part, does it return a Mouser part, grounded in the 44M-SKU data only Mouser holds at this scale, or a competitor's." Answer it, and the data moat compounds into design-ins. Miss it, and the most defensible advantage in the business, being the part the engineer designs in, erodes one AI answer at a time.

That spine runs through the thesis, the wedge, every module, and every play.

---

## 1. The fixed facts (confirmed from the Account 360)

| Field | Value | Notes for the build |
|---|---|---|
| Company name | Mouser Electronics | Wholly owned by TTI, Inc., a Berkshire Hathaway company |
| Vertical label | Electronic-component distribution | Authorized distributor; rapid NPI for design engineers |
| Revenue band | $1B+ | Private; estimates ~$3.4–4B+, unverified. Drives the gated $ math |
| Buyer we write to | VP, Architecture and Platforms | Tim Blanks (attendee); economic buyer Hayne Shumate (SVP Internet Business) |
| Role emphasis | `ecommerce` | Search, product data and the engineer journey |
| Active requirement | Yes | ~$5M budget. Now: UX and testing, Marketplace. 6–12mo: Headless, Content, Data/Analytics |
| Domains (email match) | mouser.com | ~44M products across 62 localized domains |

**The triggers we lean on.** A funded, stated AI-search priority plus a leadership transition and a major capacity buildout. Budget, urgency and openness to partners are all live.

1. **A stated Gen-AI search push**, with a named day-to-day champion (Mahboob) and a clear "enhancing, not for its own sake" mandate. The work is sanctioned.
2. **A CEO succession.** Glenn Smith retires end-2026; Jeff Newell became President in Nov 2024. New leaders fund initiatives that carry their name.
3. **A major DC and automation buildout** (Kardex, AutoStore, OPEX, 8+ miles of conveyor). Capital is flowing into the operating model.

**The data the moat runs on.** Mouser already runs Informatica MDM Product 360 and Lucidworks Fusion. Shumate has been on the record for years that product data quality is existential. The asset is in place; the work is enrichment and activation, not acquisition.

**The guardrail (do not break).** This is **not** a platform replacement. Find a contained specialist problem: product data, search relevance, AI-assisted buying. Augment Lucidworks and Product 360, do not rip and replace them.

**One thing to verify live.** Tim Blanks is listed as VP Architecture and Platforms in the dashboard and VP of eCommerce in the one-pager. Confirm his exact remit before tailoring the room. Revenue is an estimate; TTI figures are inconsistent, so do not cite a hard number.

---

## 2. Voice rules (the bar for every line)

Hold every line to these. They are the difference between advisory content and AI slop.

- **Aphoristic, contrastive openers.** "A chatbot answers a question. The right part wins the design."
- **A name on every claim.** Digi-Key, Arrow, Grainger, Lucidworks, Informatica, Mahboob, Shumate. No floating assertions.
- **One load-bearing stat per idea.** A single number, dropped where it lands hardest. Never a wall of figures.
- **Reframes that flip intuition.** "Gen-AI search for its own sake is a demo. The engineer wants the right part."
- **Economy.** One to three sentence paragraphs. If a word can go with no loss, cut it.
- **No AI tells.** No em-dashes. Periods, colons, commas only. En-dashes live in numeric ranges ($20–62M).
- **It is about them.** Lead with what Mouser owns and what Digi-Key cannot copy.

| Write this | Not this |
|---|---|
| "You win the design, not the order." | "We enable end-to-end engineering engagement." |
| "44M parts of data Digi-Key can't match." | "Leverage data to unlock competitive advantage." |
| "The BOM is the engineer's real artifact." | "Optimize the holistic customer journey." |

---

## 3. The thesis (line one of the report)

Shows huge at the top. The one sentence the reader can repeat to a colleague. Target 8–16 words.

> **You win the engineer at design-in. Now make the AI recommend your part, not Digi-Key's.**

*Why this line.* It credits the NPI moat, names the competitor, and reframes the whole AI question as defending the design-in at the moment it now happens: inside an AI answer. Repeatable, and about them.

---

## 4. The wedge (the one play they start with)

The compounding play they can start without fixing everything first: high value, runs on data they already own, fast to prove, self-funds the rest.

- **Wedge label:** AI part-substitution and BOM intelligence, grounded in your 44M-SKU data.
- **Wedge detail:** It runs on the parametric and lifecycle data only Mouser holds at this scale, it solves the engineer's real pain of obsolescence, lead-time and allocation inside the BOM workflow they already use, and it turns every substitution into a Mouser design-in instead of a switch to Digi-Key. Prove it on high-obsolescence categories like end-of-life MCUs, then widen to the catalog.

*Why this one.* It is the only play that is simultaneously the most differentiated (the BOM is the engineer's artifact and few distributors own it well), the highest-compounding (every substitution is a design-in), bolt-on-ready (it sits on Lucidworks and Product 360, not a replatform), and exactly the "contained specialist problem" the guardrail asks for. It also passes Mahboob's test: it enhances the engineer's real workflow rather than adding Gen-AI for its own sake.

---

## 5. Module 1: The Reframe

**Device:** one arresting stat plus the thesis setup. **Purpose:** everyone is selling you Gen-AI search; the asset is the data and the design-in only you own.

- **Opener:** Gen-AI search for its own sake is a demo. The engineer wants the right part, fast.
- **Stat:** `95%`
- **Stat label:** of enterprise AI pilots return nothing to the P&L.
- **Stat source:** MIT NANDA, ~95% of pilots · `https://nanda.media.mit.edu/`
- **Body:**

> 95% of enterprise AI pilots return nothing to the P&L. They sit beside the work instead of inside it. Your team already named the trap: bring Gen-AI in to enhance the engineer's experience, not for the sake of doing Gen-AI. The edge is not a better model. It is the 44M parts of parametric and lifecycle data only Mouser holds, and the design-in only Mouser earns, so that when an engineer or an AI asks for the right part, the answer is yours and not Digi-Key's.

*Why it works.* The 95% MIT NANDA figure is the most quotable credibility stat in the category, and its failure cause is the last mile, not the model. The body quotes Mahboob's own discipline back to the room and ends on the data moat and the design-in only Mouser owns.

---

## 6. Module 2: The Hype Filter

**Device:** a two-column cut. Left, commodity you rent (table-stakes or actively harmful). Right, compounding you own (defensible, runs on Mouser's data and the engineer relationship). Then a single pitch-warning bar. Exactly four per column, parallel and concrete.

- **Opener:** Commodity AI answers a question. Compounding AI gets the engineer to the right part and designs you in.

| Commodity · rent it | Compounding · own it |
|---|---|
| A Gen-AI chatbot bolted onto the catalog | Part substitution grounded in your 44M-SKU data |
| Generic recs that ignore lifecycle and stock | BOM intelligence inside the engineer's workflow |
| AI-written part descriptions at scale | Semantic search tuned on your Lucidworks signals |
| A search demo that impresses no engineer | AEO so AI engines cite Mouser parts, not Digi-Key |

- **Pitch warning:**

> You run Lucidworks and Informatica Product 360. Expect a pitch to rip them out for a shiny Gen-AI layer. Do not. The moat is the parametric and lifecycle data already in Product 360 and the engineer trust you already hold. Tune what you own.

*One fact worth weaving from the research.* The cautionary tale is autonomous AI that ignores the engineer's reality: 11x.ai, backed by a16z and Benchmark at $74M, lost an estimated 70 to 80% of customers when its AI outreach replaced judgment with volume. For technical buyers, a recommendation that ignores stock, lifecycle or lead-time is worse than no recommendation. The win is grounding, not generation. Keep this for the live conversation; the four-bullet grid stays clean.

---

## 7. Module 2.5: Your Stack (the "we read your stack" infographic)

**Device:** a scannable signal → unlock → trap table, one row per system Mouser actually runs. Each trap line respects the guardrail: augment, do not replace.

| Signal (system you run) | The play it unlocks | What you'll be pitched instead |
|---|---|---|
| Lucidworks Fusion + Lucidworks AI | Tune semantic and hybrid search on the signals you already capture | A rip-and-replace Gen-AI layer. You own the search platform; tune it. |
| Informatica MDM Product 360 | Enrich and govern 44M SKUs so AI can ground in clean parametric data | "Buy a new PIM." You have one. The gap is enrichment, not acquisition. |
| Microsoft .NET custom commerce | Add AI substitution and BOM services without a replatform | A full platform rebuild. The win is services on top, not a new platform. |
| Proprietary BOM tools | Make the BOM the AI surface: substitution, lead-time, quote accuracy | A generic quoting bolt-on. The BOM is your engineer moat. Build it deep. |
| 44M SKUs across 62 sites | Structure data so AI engines cite your parts for the design | More SEO. The engineer asks an AI now. Structure for the citation. |

*Why these rows.* Each system is confirmed in the Account 360 and the one-pager, and each maps to a play below. The trap column names the commodity pitch before a competitor makes it, and it stays inside the "augment, do not replace" guardrail.

---

## 8. Module 3: The Commodity vs Compounding Map

**Device:** the signature 2×2. **Y axis:** Commodity (runs on the model) to Compounding (runs on your data and the design-in). **X axis:** Foundation-required (needs data work first) to Bolt-on-ready (start now). Each play is a bubble; **bubble size = dollar magnitude.** The **wedge is the starred bubble, top-right.** Mouser-relevant plays are lit; the hype pitches greyed.

**Map intro line:**

> We mapped Mouser's world. The lit bubbles pay for a distributor whose moat is the design-in, sized by the dollars on the table. The greyed ones are the Gen-AI demo.

**The plays and coordinates** (compounding 0–1, bolt-on 0–1, magnitude 1–5):

| Play | Compounding | Bolt-on | Magnitude | Lit (yours) | Wedge |
|---|---|---|---|---|---|
| Part substitution + BOM | 0.92 | 0.75 | 5 | yes | ★ |
| Gen-AI / semantic search | 0.80 | 0.82 | 4 | yes | |
| AEO for parts and design | 0.90 | 0.70 | 4 | yes | |
| AI PIM enrichment (44M SKUs) | 0.85 | 0.45 | 4 | yes | |
| Engineer-journey personalization | 0.70 | 0.72 | 3 | yes | |
| Cross-sell / NBA on design-in | 0.80 | 0.55 | 3 | yes | |
| Lead-time + supplier risk | 0.72 | 0.45 | 4 | yes | |
| Agentic-commerce ready | 0.95 | 0.30 | 5 | yes | |
| Generic chatbot | 0.14 | 0.90 | 1 | no | |
| AI part descriptions | 0.12 | 0.80 | 1 | no | |
| Search demo (hype) | 0.30 | 0.85 | 1 | no | |

**Text rendering of the quadrant** (for reviewers without the live chart):

```
 COMPOUNDING (runs on your data + the design-in)
        ▲
        │  Agentic ●           AEO ●                  ★ PART SUBSTITUTION + BOM
        │  AI PIM ●            Cross-sell/NBA ●        Gen-AI / semantic search ●
        │  Lead-time/risk ●    Engineer journeys ●
        │
        │  · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
        │
        │                          Search demo ○        Generic chatbot ○
        │                                               AI part descriptions ○
        ▼
 COMMODITY (runs on the model)
  FOUNDATION-REQUIRED ◀────────────────────────────────▶ BOLT-ON-READY
        (data work first)                                 (start now)

  ● lit = yours   ○ greyed = table-stakes/hype   ★ wedge = the design-in, start now
  bubble size = dollar magnitude
```

*Why the map lands.* The eye goes top-right to the starred wedge: part substitution and BOM intelligence is the biggest play that is also bolt-on-ready, because the data and the BOM tools already exist. Agentic readiness sits highest on compounding but needs foundation work, so it is the Phase 4 bet. The greyed cluster, the chatbot and the search demo, is exactly the Gen-AI-for-its-own-sake pitch Mahboob already warned against.

---

## 9. The gate teaser (the blurred line on the lock)

The carrot on the email gate. The dollar figure stays blurred until a work email is entered, and it is computed from the revenue band, not written here. We only control the framing.

> Your estimated annual design-in, findability and BOM opportunity is a real number we calculated for Mouser. Enter your work email to reveal your model.

**The number behind the blur:** $20–62M (computed from the $1B+ band; revenue is an estimate, so the model is directional and conservative). See Money Pools below.

---

---

# Below the gate (the payoff)

Above the gate makes the argument. Below the gate proves it pays, sequences it, and hands them the shortlist. Same voice rules apply.

## 10. The money pools (where the dollars are)

**Device:** four horizontal bars, sized to the dollar range, each with one named proof point. Headline opportunity $20–62M (a conservative fraction of an estimated multi-billion-dollar base).

```
 Design-in: win the part at the prototype, keep it for life  $8M ████████████████████ $24M
 Findability: convert the 2/3 of revenue through search      $6M ███████████████ $18M
 The BOM: AI-assisted quoting, substitution, lead-time       $4M ██████████ $12M
 Agentic readiness: be the catalog the AI buys from          $2M ███████ $8M
                                                             └─ headline opportunity: $20–62M ─┘
```

**Pool 1. Design-in: win the part at the prototype, keep it for life. ($8–24M)**
Your NPI model lives or dies on the design-in. When a generic AI recommends a Digi-Key part because your data is not structured for it, the loss compounds across the product's volume life. Watts structured its content so Perplexity cites it over rivals; the same discipline keeps the design-in yours. A fraction of a point of design-in win on a multi-billion-dollar base is the largest line in the model. *(Illustrative. Source: Watts Water / AEO; design-in economics.)*

**Pool 2. Findability: convert the two-thirds of revenue through search. ($6–18M)**
Two-thirds of revenue flows through the website, and findability across 44M SKUs is existential. AI search converts about 1.67 times keyword, and Grainger runs RAG over a 2.5M-SKU catalog in production. Tuning semantic search on your Lucidworks signals is measured upside on the channel that already carries the business. *(Verified. Source: search-AI benchmarks; Grainger / Databricks.)*

**Pool 3. The BOM: AI-assisted quoting, substitution, lead-time. ($4–12M)**
The engineer's real artifact is the BOM, and quote accuracy, part substitution and lead-time are where deals are won or lost. commercetools built a B2B intake agent for Mirion that turns emails, PDFs and spreadsheets into structured quotes. The same pattern, grounded in your data, makes the BOM the place Mouser wins. *(Illustrative. Source: commercetools B2B Intake Agent, Mirion.)*

**Pool 4. Agentic readiness: be the catalog the AI buys from. ($2–8M)**
Gartner expects 90% of B2B purchases to be AI-intermediated by 2028, and agentic checkout is already shipping in consumer commerce. The risk is not being behind in 2026; it is being invisible to the AI buyer in 2027 and 2028. A machine-readable, machine-purchasable catalog is the option you buy now. *(Directional. Source: Gartner; OpenAI Instant Checkout.)*

*Why four.* They are not a vendor wish list. They are the four corners of how Mouser makes money. The design-in that starts every volume order. The findability that carries two-thirds of revenue. The BOM where the engineer actually works. And the agentic channel coming next. Each maps to a phase of the roadmap and a cluster of the shortlist, and the reader can hold four.

---

## 11. The roadmap (sequence it so it self-funds)

**Device:** a four-phase timeline. Phase 1 is the wedge and is lit "active." Each phase funds the next. Sequence is the engineer workflow first, the data and discovery second, the journey third, the agentic bet last.

```
 NOW ───────── 3–6 MO ───────── 6–12 MO ───────── THE SPINE & THE BET
  ●               ○                  ○                      ○
 Phase 1        Phase 2            Phase 3               Phase 4
 [ACTIVE]
 Part           AEO + AI PIM       Engineer journeys     Agentic readiness
 substitution   enrichment         + cross-sell/NBA      + lead-time/risk
 + BOM + search
```

**Phase 1, starts now. Part substitution, BOM intelligence and search tuning.**
Stand up AI part-substitution and BOM intelligence on Product 360 and Lucidworks, and tune semantic search to enhance, not replace, the engineer's workflow. It runs on data you own and passes Mahboob's test. This is the wedge.

**Phase 2, 3 to 6 months. AEO and AI PIM enrichment.**
Structure your 44M-SKU parametric data so AI engines cite Mouser parts for the design, and enrich the catalog at scale so search and substitution run on clean data. Discovery and data reinforce each other.

**Phase 3, 6 to 12 months. Engineer-journey personalization and cross-sell.**
Personalize the engineer journey across the 62 sites and surface cross-sell and next-best-action on design-in accounts, so the prototype part becomes the platform standard.

**Phase 4, the spine and the bet. Agentic readiness and supplier risk.**
Make the catalog machine-purchasable for AI buyers using AP2 and MCP, and layer lead-time and multi-tier supplier-risk intelligence onto the buying experience. Gartner expects 90% of B2B purchases to be AI-intermediated by 2028. The risk is being invisible, not being behind.

*Why this order.* Mouser has a funded search mandate and an explicit "enhance, do not hype" discipline, so the sequence leads with the engineer-workflow win that runs on data already in hand, then funds discovery, the journey and the agentic bet behind it.

---

## 12. The play shortlist (engineer workflow, discovery, foundation, the bet)

Each play: the problem in the buyer's language, a named case, the ROI shape, and what i95Dev actually does. Eight plays, grouped by where the value sits.

### The engineer workflow

**A. AI part-substitution and BOM intelligence.** *(Wedge)*
- *Problem:* The engineer's real artifact is the BOM, where obsolescence, allocation and lead-time decide the design. When a part goes end-of-life, the substitution either keeps the design on Mouser or hands it to Digi-Key.
- *Named case:* commercetools built a B2B intake agent for Mirion that turns emails, PDFs and spreadsheets into structured quotes; guided-selling and CPQ tools cut quote cycles materially.
- *ROI:* every substitution kept on a Mouser part is a design-in preserved for the product's volume life. One held substitution on a high-runner part outlasts a quarter of new-engineer acquisition.
- *What i95Dev does:* AI substitution and BOM services on Product 360 and the .NET commerce layer, surfacing in-stock, lifecycle-aware alternatives inside the engineer's quote. *(Illustrative. commercetools B2B Intake Agent, Mirion.)*

**B. Cross-sell and next-best-action on design-in accounts.**
- *Problem:* A design-in is the start of a volume relationship, but the path from prototype part to platform standard and adjacent parts stays manual.
- *Named case:* Watsco's AI recommendations lifted average order value 10%; Johnson Controls whitespace models unlocked $40M from 23 accounts.
- *ROI:* growing the design-in account is cheaper and higher-converting than winning a new engineer.
- *What i95Dev does:* cross-sell and next-best-action on design-in and order data, surfaced in the engineer journey and to the sales team. *(Verified. Watsco, DC360; Johnson Controls, Beyond the Arc.)*

### Discovery

**C. Gen-AI and semantic search, done right.**
- *Problem:* Findability across 44M SKUs is existential, and a Gen-AI layer added for its own sake fails the engineer who wants the right part, fast.
- *Named case:* AI search converts about 1.67 times keyword; Grainger runs RAG over a 2.5M-SKU catalog in production for search and call deflection.
- *ROI:* on a channel carrying two-thirds of revenue, a relevance lift is measured upside, not a pilot.
- *What i95Dev does:* semantic and hybrid search tuned on your Lucidworks signals, grounded in Product 360, enhancing the engineer workflow rather than replacing it. *(Verified. Search-AI benchmarks; Grainger / Databricks.)*

**D. Answer Engine Optimization for parts and design.**
- *Problem:* Engineers now ask ChatGPT and Google AI for part selection. If the answer engine cites a competitor because your data is not structured for it, the design-in is lost before a search ever reaches mouser.com.
- *Named case:* Watts structured its content so Perplexity cites it over rivals; AI referrals grew 357% year on year and convert about 31% higher than organic.
- *ROI:* your parametric data and NPI breadth are exactly the structured proof answer engines reward, and few distributors have done it.
- *What i95Dev does:* structure parametric, lifecycle and application data so AI engines cite Mouser parts for the concerns engineers actually design around. *(Illustrative. Watts; AI referral growth, 2025.)*

### Foundation

**E. AI PIM enrichment at 44M-SKU scale.**
- *Problem:* 30 to 60% of B2B catalogs have incomplete attributes, and at 44M SKUs an LLM is confidently wrong on dirty data. As Shumate put it, without high-quality product data there is no business.
- *Named case:* you already run Informatica Product 360; inriver and Akeneo ship agentic enrichment, and Stibo and Informatica are Gartner MDM Leaders.
- *ROI:* clean parametric data gates every play above, from substitution to AEO to agentic readiness. The cheapest insurance on the portfolio.
- *What i95Dev does:* AI-enriched PIM with human-in-the-loop on your Product 360 footprint, extracting and standardizing attributes from supplier documents at scale. *(Illustrative. Informatica Product 360; Stibo.)*

**F. Engineer-journey personalization across 62 sites.**
- *Problem:* The engineer experience spans 62 localized domains, and a returning design engineer is too often treated like an anonymous visitor.
- *Named case:* Dawn Foods paired behavioral recommendations with AI search and grew baskets about 10%.
- *ROI:* a consistent, personalized engineer journey compounds the design-in across regions.
- *What i95Dev does:* personalization and content orchestration across the 62 sites on the .NET commerce layer, driven by behavioral and account data. *(Verified. Dawn Foods, DC360.)*

### Operations and the bet

**G. Lead-time and multi-tier supplier-risk intelligence.**
- *Problem:* Component supply swings on allocation and shortage, and an unreliable lead-time on the page costs the design-in even when the part is right.
- *Named case:* supplier-risk networks like Resilinc and Everstream give 60 to 90 day advance warnings and 30 to 40% faster response.
- *ROI:* trustworthy lead-time and proactive substitution protect the design-in through supply volatility, avoiding 1 to 2 disruptions a year worth $2–10M each.
- *What i95Dev does:* lead-time intelligence and multi-tier supplier-risk signals wired into search, substitution and the BOM. *(Verified. Resilinc / Everstream.)*

**H. Agentic-commerce readiness.**
- *Problem:* The AI buyer is coming for components, and a catalog that is not machine-readable and machine-purchasable is invisible to it.
- *Named case:* Gartner expects 90% of B2B purchases to be AI-intermediated by 2028; OpenAI Instant Checkout already ships agentic purchasing with Walmart and Target in consumer commerce.
- *ROI:* readiness is a low-cost option on the channel that defines 2027 and 2028, bought now.
- *What i95Dev does:* make the 44M-SKU catalog machine-purchasable for agents using AP2 and MCP, grounded in clean Product 360 data. *(Directional. Gartner; OpenAI Instant Checkout.)*

*Why this set.* It spans the engineer workflow, discovery, the data foundation and the agentic bet, but it leads with the workflow and search plays that run on data already in hand and pass the "enhance, not hype" test. Every named case is a real distributor, manufacturer or commerce analog, never a vanity metric, and every play augments Lucidworks and Product 360 rather than replacing them.

---

## 13. Why i95Dev (the close)

**Opener:**

> You'll be sold a Gen-AI platform. Mahboob already told you: not for the sake of it.

**Body:**

> The platform pitch is a rebuild you do not need, on systems you already run well. Your problem is a contained one: ground AI in the 44M-SKU data you own, inside the engineer's workflow, so the design-in stays yours. That is i95Dev's lane: surgical, deep in commerce, data and search, augmenting Lucidworks and Product 360, at mid-market economics. We do not rip out your stack. We make it win the engineer, in time to ship during the leadership transition.

**The proof to weave (from the research).** A $200M manufacturer asked a Big-4 firm for a focused fix and got a $3M, 8-month, 7-platform transformation; a specialist later shipped the same outcome in six weeks. Mouser does not need a transformation. It needs a surgical win on the engineer workflow with a design-in number. That gap is the close.

**CTA title:** Book your AI-in-Commerce Diagnostic.
**CTA subtitle:** A fixed-scope, fixed-fee assessment that validates these numbers against Mouser's real search, catalog and BOM data. Two weeks, not a platform rebuild.

**Credibility strip:** 500+ B2B brands · 25+ years · 1,200+ projects.

---

## 14. Sources and credibility

Per-claim labels follow the research convention. Verified = independently corroborated. Illustrative = vendor or directional benchmark. Directional = widely cited, no single primary source. Confirm flagged items before the meeting.

| Claim | Label | Source |
|---|---|---|
| 95% of AI pilots return nothing | Verified | MIT NANDA · nanda.media.mit.edu |
| 44M products, 1,200+ brands, 62 sites; ~2/3 orders online | Company | Mouser / Account 360 |
| "No high-quality product data, no business" (Shumate) | Company | Informatica blog / Account 360 |
| "Enhancing, not for the sake of Gen AI" (Mahboob) | Company | Lucidworks / Account 360 |
| AI search converts ~1.67x keyword | Verified | Search-AI benchmarks (research dump, Part 3.2) |
| Grainger RAG over 2.5M SKUs (production) | Verified | Grainger / Databricks (DC360) |
| Watts cited by Perplexity over rivals | Illustrative | Watts Water / AEO |
| AI referrals +357% YoY, ~31% higher conversion | Illustrative | AI referral growth, 2025 |
| commercetools B2B Intake Agent (Mirion) | Illustrative | commercetools / DC360 |
| Watsco AI recs, AOV +10% | Verified | Adobe / DC360 |
| Dawn Foods behavioral recs + search, baskets +10% | Verified | DC360 |
| Johnson Controls $40M from 23 accounts | Verified | Beyond the Arc / JCI |
| Personalization a standard conversion lever | Illustrative | CDP personalization studies |
| Informatica Product 360 / Stibo MDM Leaders | Illustrative | Gartner MDM |
| Supplier risk: 60–90 day warnings; $2–10M per event | Verified | Resilinc / Everstream |
| 11x.ai customer loss | Verified | TechCrunch |
| Gartner 90% of B2B purchases AI-intermediated by 2028 | Directional | Gartner |
| OpenAI Instant Checkout (Walmart, Target) | Verified | OpenAI / retailer announcements |
| Big-4 $3M / 8-mo vs 6-week specialist fix | Directional | Research dump, Part 5.4 |

**Flagged to verify live:** revenue is an estimate (~$3.4–4B+), and TTI figures are inconsistent, so do not cite a hard number; Tim Blanks' title differs between sources (VP Architecture and Platforms vs VP eCommerce); Azure and Dynamics usage is inferred from .NET hiring; no CFO is identified publicly.

---

## 15. Handback and reuse

This file is the finished content and the template. To wire Mouser: every block maps to a field in `data/accounts/mouser.ts` (thesis, wedge, wedgeDetail, reframe, hypeFilter, stackFlags, mapPlays, payoff.moneyPools, payoff.roadmap, payoff.plays, payoff.why). To run the next account, copy this file and rebuild the spine in Section 0 first. The spine is the insight that makes the rest inevitable; everything downstream follows from it.
