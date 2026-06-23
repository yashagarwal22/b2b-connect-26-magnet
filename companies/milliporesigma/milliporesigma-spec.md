# MilliporeSigma: Enterprise AI + Commerce Advisory Spec

**Account:** MilliporeSigma (US Life Science arm of Merck KGaA, Darmstadt) · **Vertical:** Life-sciences research chemicals, bioprocessing, CDMO
**Prepared by:** i95Dev · **Source basis:** Account 360 (Jun 2026) + B2B Connect 2026 AI research dump
**Status:** Final content. Every field below is finished copy, not a fill-in. It maps 1:1 to `data/accounts/milliporesigma.ts` and drops into the build with no rewriting.

> **What this document is.** A complete, advisory-grade content spec for the MilliporeSigma lead-magnet report, built from scratch off the Account 360. It carries the finished copy for the whole page (above and below the email gate), the rationale behind each line, and the graphics that replace prose with a picture. The benchmark for every word is Sequoia's *Services: The New Software*: one argument, one axis, a handful of load-bearing facts. The spec is also the reusable template. To run the next account, copy this file and rebuild the spine first.

---

## 0. The spine (read this first)

Everything below hangs on one insight about MilliporeSigma's business, drawn straight from the Account 360.

**sigmaaldrich.com is one of the largest life-science catalog storefronts on earth, and the buyer in the room came with one precise ask: AI search optimization.** Berfun Goodwin, Head of Digital Marketing Strategy & Analytics, did not ask for a re-platform. She asked to be found when a scientist searches with an AI. That single ask points at the most underpriced B2B acquisition opportunity of 2026.

The reframe is the whole report. SEO is no longer the front door. The scientist now asks ChatGPT, Perplexity or Google AI for a reagent, and the only question that matters is whether the answer cites a Sigma-Aldrich product or a competitor's. AI engines drove 1.13B referral visits in June 2025, up 357% year on year, and 66% of senior B2B decision-makers now use AI for supplier research. Almost no life-science seller has structured its catalog so the answer engines cite it.

MilliporeSigma's moat is exactly the asset answer engines reward. The Sigma-Aldrich catalog carries 25+ years of structured chemical and spec data: CAS numbers, purity grades, application notes, the densest technical proof in the category. That is the structured fact base an AI cites from, but only if it is made machine-parseable.

So the strategic question is not "should we add AI to the website." It is "when a scientist asks an AI for a reagent, does it cite your product or Thermo Fisher's." Answer it, and the catalog that already wins on search wins on the channel that replaces search. Miss it, and the deepest technical catalog in life sciences goes invisible to the way scientists are starting to buy.

**The guardrail, do not break it.** This account is SAP-heavy, with Accenture on the S/4HANA migration and Capgemini on the global implementation. Do not pitch a Dynamics 365 ERP play here. Lead entirely with the buyer's lane: Answer Engine Optimization, AI search, content and eCommerce analytics services for sigmaaldrich.com. The ERP program and the new Discovery Solutions BU are adjacency to probe, not the wedge.

That spine runs through the thesis, the wedge, every module, and every play.

---

## 1. The fixed facts (confirmed from the Account 360)

| Field | Value | Notes for the build |
|---|---|---|
| Company name | MilliporeSigma | US Life Science arm of Merck KGaA, Darmstadt; the Sigma-Aldrich catalog |
| Vertical label | Life-sciences research chemicals, bioprocessing, CDMO | Three segments: Science & Lab Solutions, Process Solutions, Life Science Services |
| Revenue band | Merck KGaA Life Science FY2025 net sales €8,980M | 42% of the €21.1B group; eCommerce-%-of-sales not disclosed. Drives the gated $ math |
| Buyer we write to | Head of Digital Marketing Strategy & Analytics | Berfun Goodwin (champion); reason to attend: "AI search optimization" |
| Role emphasis | `ecommerce` / digital marketing | AEO, AI search, content, eCommerce analytics on sigmaaldrich.com |
| Active requirement | Yes | 6–12mo: Content management, Customer retention, Customer acquisition |
| Domains (email match) | sigmaaldrich.com, milliporesigma.com | One of the largest life-science storefronts |

**The triggers we lean on.** A precise buyer ask, a catalog moat built for the new channel, and a stated 6–12 month roadmap that the wedge sits directly on top of.

1. **A precise, AI-flavored buyer ask.** Berfun Goodwin's reason to attend is one phrase: "AI search optimization." The 6–12 month requirement is Content management, Customer retention and Customer acquisition. The wedge is her literal lane.
2. **A catalog moat built for the new channel.** sigmaaldrich.com carries 25+ years of structured chemical and spec data across one of the largest life-science storefronts. That structured proof is precisely what answer engines cite. The asset is in hand; it just needs a schema pipeline.
3. **A digital-first BU going live now.** "Discovery Solutions" (Rajeev Nair, CCO) launched January 2026 as a digital-first catalog platform. The organization is already moving toward catalog-as-product, which is the surface the wedge improves.

**The data the moat runs on.** The Sigma-Aldrich catalog and its 25-year structured chemical data, the punchout and PIPELINE ordering rails the largest accounts already use, and Tellius AI eCommerce analytics already in the stack. The asset is the structured catalog, not a system still to be bought.

**The guardrail (do not break).** SAP-heavy account, Accenture and Capgemini incumbents on ERP. This is not a Dynamics 365 ERP play. Lead with AEO, AI search, content and eCommerce analytics services for the catalog channel. Probe the new ERP program (Robert Machinek) and Discovery Solutions (Rajeev Nair) only as adjacency.

**One thing to verify live.** The storefront platform and AI-search vendor are not publicly confirmable (bot-protected SPA; SAP Commerce Cloud plausible). Do not assert the platform on the page. Confirm eCommerce % of Life Science sales, the scope and owner of the new ERP program, and any named commerce or digital SI.

---

## 2. Voice rules (the bar for every line)

Hold every line to these. They are the difference between advisory content and AI slop.

- **Aphoristic, contrastive openers.** "SEO is how the scientist used to find you. The AI is how she finds you now."
- **A name on every claim.** Sigma-Aldrich, Thermo Fisher, Perplexity, Tellius, Berfun Goodwin, Belén Garijo, Rajeev Nair. No floating assertions.
- **One load-bearing stat per idea.** A single number, dropped where it lands hardest. Never a wall of figures.
- **Reframes that flip intuition.** "Your catalog is not a website. It is the fact base an answer engine cites from."
- **Economy.** One to three sentence paragraphs. If a word can go with no loss, cut it.
- **No AI tells.** No em-dashes. Periods, colons, commas only. En-dashes live in numeric ranges ($12–35M).
- **It is about them.** Lead with what MilliporeSigma owns and what Thermo Fisher cannot copy.

| Write this | Not this |
|---|---|
| "The question is whether the AI cites your product or a competitor's." | "We optimize the omnichannel discovery journey." |
| "Structure the 25-year catalog so Perplexity can quote it." | "Leverage AI-driven content synergies." |
| "Make the catalog machine-parseable, not the website prettier." | "Enable a holistic digital transformation." |

---

## 3. The thesis (line one of the report)

Shows huge at the top. The one sentence the reader can repeat to a colleague. Target 8–16 words.

> **The scientist now asks an AI. Make sure it cites your catalog, not a competitor's.**

*Why this line.* It credits the real moat (the deepest technical catalog in life sciences), names the live shift (AI-mediated discovery), and reframes "AI search optimization" as a findability war rather than a website refresh. Repeatable, and about them.

---

## 4. The wedge (the one play they start with)

The compounding play they can start without fixing everything first: high value, runs on data they already own, fast to prove, self-funds the rest.

- **Wedge label:** Answer Engine Optimization for sigmaaldrich.com, so the AI cites your product, not a competitor's.
- **Wedge detail:** It runs on the 25-year structured chemical and spec catalog MilliporeSigma already owns, it is the buyer's literal ask (AI search optimization), it is the most underpriced acquisition channel of 2026 with almost no life-science seller doing it systematically, and it is fast to prove on the highest-traffic catalog categories. It needs only a PIM-to-schema content pipeline, not a platform change. Prove it on the top-traffic reagent categories, then extend the same structured-data pipeline across the full catalog and into the new Discovery Solutions BU.

*Why this one.* It is the only play that is simultaneously the most differentiated (the catalog's 25 years of CAS and spec data is the densest citable fact base in life sciences, and almost no competitor has structured for it), the highest-compounding (every structured category compounds across ChatGPT, Perplexity, Google AI and traditional search at once), bolt-on-ready in its first cut (it proves on a handful of categories without a re-platform), and exactly what the buyer named on the floor. It also sets up everything else: the schema pipeline needs clean catalog data, which feeds the semantic search, the content engine and the agentic-readiness plays behind it.

---

## 5. Module 1: The Reframe

**Device:** one arresting stat plus the thesis setup. **Purpose:** everyone is selling you an AI website; the asset is the 25-year structured catalog and the channel is the answer engine only your data can win.

- **Opener:** A chatbot on the homepage is a demo. The scientist asking Perplexity for a reagent is the new front door.
- **Stat:** `95%`
- **Stat label:** of enterprise AI pilots return nothing to the P&L.
- **Stat source:** MIT NANDA, ~95% of pilots · `https://nanda.media.mit.edu/`
- **Body:**

> 95% of enterprise AI pilots return nothing to the P&L. They sit beside the work instead of inside it. MilliporeSigma's work is the catalog: 25 years of CAS numbers, purity grades and application data across one of the largest life-science storefronts on earth. The edge is not a smarter homepage. It is structuring that catalog so when a scientist asks an AI for a reagent, the answer cites a Sigma-Aldrich product. AI engines drove 1.13B referral visits in June 2025, up 357% year on year, and almost no life-science seller has structured for it.

*Why it works.* The 95% MIT NANDA figure is the most quotable credibility stat in the category, and its failure cause is the last mile, not the model. The body refuses the chatbot frame, restates the real product (the structured catalog), and ends on the asset only MilliporeSigma holds: 25 years of citable technical data on the highest-traffic channel of 2027.

---

## 6. Module 2: The Hype Filter

**Device:** a two-column cut. Left, commodity you rent (table-stakes or actively harmful). Right, compounding you own (defensible, runs on the 25-year structured catalog). Then a single pitch-warning bar. Exactly four per column, parallel and concrete.

- **Opener:** Commodity AI decorates the website. Compounding AI makes the answer engine cite your catalog, on a fact base competitors cannot copy.

| Commodity · rent it | Compounding · own it |
|---|---|
| A chatbot bolted onto sigmaaldrich.com | AEO so Perplexity cites your reagent first |
| AI-written banner copy at scale | Schema-structured spec content the AI can quote |
| Generic recs that ignore approved lists | Semantic search on CAS, purity and application |
| An "AI search" deck, not shipped citations | Reorder and content tuned to retention metrics |

- **Pitch warning:**

> You run a SAP-heavy stack with Accenture and Capgemini on the ERP. Expect a pitch to rip up the backbone for a fashionable new platform. Do not. The catalog and the channel are the opportunity, not the system of record. Structure the data you already own so the answer engines cite it, and tune the search and content on top. Win the findability war, not a re-platform.

*One fact worth weaving from the research.* The cautionary tale is autonomous AI that ignores the buyer's reality: 11x.ai, backed by a16z and Benchmark at $74M, lost an estimated 70 to 80% of customers when its AI replaced judgment with volume. For a regulated reagent catalog, an AI that confidently cites the wrong spec is worse than silence. The win is grounding the answer engine in clean, structured catalog data, not generating more copy. Keep this for the live conversation; the four-bullet grid stays clean.

---

## 7. Module 2.5: Your Stack (the "we read your stack" infographic)

**Device:** a scannable signal → unlock → trap table, one row per system MilliporeSigma actually runs. Each trap line respects the guardrail: win the catalog channel, do not touch the SAP backbone.

| Signal (system you run) | The play it unlocks | What you'll be pitched instead |
|---|---|---|
| 25-year Sigma-Aldrich catalog | Structure CAS, purity and spec data into schema the answer engines cite | "Add an AI chatbot." The asset is the citable data, not a bot. |
| SAP S/4HANA + EWM + GTS + BTP | Leave the backbone alone; win the catalog channel on top of it | A D365 ERP rip-out. Accenture and Capgemini own this; do not touch it. |
| Punchout to Jaggaer, Ariba, Oracle, Coupa + PIPELINE | Tune semantic search and reorder for the procurement and recurring base | A generic checkout. The largest accounts need entitlement-aware ordering. |
| Tellius AI eCommerce analytics | Wire AEO and content lift to the analytics you already trust | "Buy a new analytics suite." You have Tellius; instrument the wedge on it. |
| Discovery Solutions, digital-first BU (Jan 2026) | Make the new digital-first catalog answer-engine-native from day one | A bolt-on for the old site. Build the structured pipeline into the new BU. |

*Why these rows.* Each system is confirmed in the Account 360, and each maps to a play below. The trap column names the commodity or off-lane pitch before a competitor makes it, and every line keeps SAP untouched while winning the catalog and findability channel on top.

---

## 8. Module 3: The Commodity vs Compounding Map

**Device:** the signature 2×2. **Y axis:** Commodity (runs on the model) to Compounding (runs on your 25-year structured catalog). **X axis:** Foundation-required (needs data work first) to Bolt-on-ready (start now). Each play is a bubble; **bubble size = dollar magnitude.** The **wedge is the starred bubble, top-right.** MilliporeSigma-relevant plays are lit; the hype pitches greyed.

**Map intro line:**

> We mapped MilliporeSigma's world. The lit bubbles pay for a catalog whose moat is 25 years of structured chemical data, sized by the dollars on the table. The greyed ones are the AI-website demo.

**The plays and coordinates** (compounding 0–1, bolt-on 0–1, magnitude 1–5):

| Play | Compounding | Bolt-on | Magnitude | Lit (yours) | Wedge |
|---|---|---|---|---|---|
| AEO / answer-engine findability | 0.90 | 0.74 | 5 | yes | ★ |
| B2B semantic / RAG search | 0.84 | 0.62 | 4 | yes | |
| AI PIM enrichment for the catalog | 0.86 | 0.38 | 4 | yes | |
| Content + retention / reorder | 0.78 | 0.66 | 4 | yes | |
| Account entitlement on punchout | 0.80 | 0.55 | 3 | yes | |
| eCommerce analytics on Tellius | 0.72 | 0.70 | 3 | yes | |
| Agentic-commerce readiness | 0.92 | 0.40 | 3 | yes | |
| Discovery Solutions structured launch | 0.82 | 0.50 | 3 | yes | |
| Generic chatbot | 0.14 | 0.90 | 1 | no | |
| AI banner copy | 0.12 | 0.80 | 1 | no | |
| "AI search" strategy deck | 0.20 | 0.30 | 1 | no | |

**Text rendering of the quadrant** (for reviewers without the live chart):

```
 COMPOUNDING (runs on your 25-year structured catalog)
        ▲
        │  Agentic readiness ●    AI PIM ●               ★ AEO / ANSWER-ENGINE
        │  Discovery launch ●     Entitlement ●          B2B semantic search ●
        │                                                Content + retention ●
        │                                                eCommerce analytics ●
        │  · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
        │
        │     "AI search" deck ○                  Generic chatbot ○
        │                                         AI banner copy ○
        ▼
 COMMODITY (runs on the model)
  FOUNDATION-REQUIRED ◀────────────────────────────────▶ BOLT-ON-READY
        (data work first)                                 (start now)

  ● lit = yours   ○ greyed = table-stakes/hype   ★ wedge = the findability war, start now
  bubble size = dollar magnitude
```

*Why the map lands.* The eye goes top-right to the starred wedge: AEO is the biggest play that can still start on a handful of categories now, because it rides the structured catalog already in hand. The AI PIM and agentic-readiness plays sit high on compounding but need foundation work, so they are the spine, not the first move. The greyed cluster, the chatbot and the banner copy, is the AI-website pitch the buyer should refuse.

---

## 9. The gate teaser (the blurred line on the lock)

The carrot on the email gate. The dollar figure stays blurred until a work email is entered, and it is computed from the revenue band, not written here. We only control the framing.

> Your estimated annual findability, search and content-acquisition opportunity is a real number we calculated for MilliporeSigma. Enter your work email to reveal your model.

**The number behind the blur:** $12–35M (directional and conservative; eCommerce % of the €8,980M Life Science base is undisclosed, so the model is a small fraction of the catalog channel). See Money Pools below.

---

---

# Below the gate (the payoff)

Above the gate makes the argument. Below the gate proves it pays, sequences it, and hands them the shortlist. Same voice rules apply.

## 10. The money pools (where the dollars are)

**Device:** four horizontal bars, sized to the dollar range, each with one named proof point. Headline opportunity $12–35M (a conservative, directional fraction of the catalog channel; eCommerce share of the €8,980M Life Science base is undisclosed).

```
 Findability: AEO + answer-engine acquisition          $4M ████████████████████ $14M
 Discovery: B2B semantic + RAG search on the catalog    $3M ███████████████ $10M
 Content: retention, reorder, acquisition (6–12mo ask)   $3M ████████████ $8M
 Agentic readiness: AI buyers + machine-readable catalog $2M █████ $3M
                                                        └─ headline opportunity: $12–35M ─┘
```

**Pool 1. Findability: AEO and answer-engine acquisition. ($4–14M)**
AI engines drove 1.13B referral visits in June 2025, up 357% year on year, and ChatGPT referrals convert about 31% higher than non-branded organic. Watts Water's "backflow preventer selection" content is cited by Perplexity over its competitors, and 51% of software buyers now start in an AI chatbot. On a catalog this technical, being the cited answer is the most underpriced acquisition channel of 2026, and almost no life-science seller is doing it. *(Illustrative. Source: AEO research, Part 3.5; Watts / Perplexity.)*

**Pool 2. Discovery: B2B semantic and RAG search on the catalog. ($3–10M)**
Scientists search by CAS number, application and spec equivalence, where keyword search hits the "zero-results catastrophe." AI search converts about 1.67 times keyword, and Grainger runs production RAG across 2.5M SKUs for exactly this kind of technical lookup. On the largest life-science catalog, relevance on spec queries is measured upside on the channel that already carries orders. *(Verified. Source: Search-AI benchmarks, Part 3.2; Grainger / Databricks.)*

**Pool 3. Content: retention, reorder and acquisition. ($3–8M)**
Berfun Goodwin's 6–12 month requirement is Content management, Customer retention and Customer acquisition, and the same labs reorder the same reagents on a cycle. MilliporeSigma already renders approved-list reorder for this base, and structured spec content compounds across retention and acquisition at once. Tuning content and reorder to the metrics Tellius already tracks is real value now. *(Illustrative. Source: MilliporeSigma reorder; B2B content personalization.)*

**Pool 4. Agentic readiness: AI buyers and a machine-readable catalog. ($2–3M)**
Gartner expects 90% of B2B purchases to be AI-intermediated by 2028, and Google's AP2 protocol already ships agentic purchasing with 60+ partners. A reagent catalog that is not machine-readable is invisible to the AI buyer. The same structured-data work that wins AEO is the readiness that keeps Sigma-Aldrich visible as agents start to source. *(Directional. Source: Gartner; Google AP2.)*

*Why four.* They are not a vendor wish list. They are the four layers of how a scientist finds and buys on this catalog. The findability where the channel is shifting, the discovery the technical catalog runs on, the content the buyer named for retention and acquisition, and the agentic readiness coming next. Each maps to a phase of the roadmap and a cluster of the shortlist, and the reader can hold four.

---

## 11. The roadmap (sequence it so it self-funds)

**Device:** a four-phase timeline. Phase 1 is the wedge and is lit "active." Each phase funds the next. Sequence is AEO first, the search and PIM foundation second, the content and retention engine third, the agentic bet last.

```
 NOW ───────── 3–6 MO ───────── 6–12 MO ───────── THE SPINE & THE BET
  ●               ○                  ○                      ○
 Phase 1        Phase 2            Phase 3               Phase 4
 [ACTIVE]
 AEO on top     AI PIM + schema    Content + retention   Agentic-commerce
 catalog        pipeline + B2B     + reorder tuned to    readiness across
 categories     semantic search    Tellius metrics       the full catalog
```

**Phase 1, starts now. AEO on the top catalog categories.**
Structure CAS, purity and spec data into Product, FAQ and Spec schema for the highest-traffic reagent categories, so ChatGPT, Perplexity and Google AI cite a Sigma-Aldrich product. It answers Berfun Goodwin's "AI search optimization" ask, runs on data you own, and ships without a re-platform. This is the wedge.

**Phase 2, 3 to 6 months. AI PIM enrichment and semantic search.**
Stand up the PIM-to-schema pipeline so every category grounds in clean, structured attributes, and tune B2B semantic search for CAS, application and spec-equivalence queries. The AEO gets durable; the on-site search gets technical.

**Phase 3, 6 to 12 months. Content, retention and reorder.**
Build the spec and protocol content engine and tune one-click reorder to the retention and acquisition metrics Tellius already tracks, directly against Berfun Goodwin's 6–12 month requirement. Recurring scientific purchasing gets stickier every cycle.

**Phase 4, the spine and the bet. Agentic-commerce readiness.**
Make the catalog machine-readable and machine-purchasable for AI agents using AP2 and MCP, grounded in the new structured data, and wire it into the Discovery Solutions BU. Gartner expects 90% of B2B purchases to be AI-intermediated by 2028. The risk is being invisible, not being behind.

*Why this order.* Berfun Goodwin named AI search as the reason to attend and Content, retention and acquisition as the 6–12 month ask, so the sequence leads with the AEO win that proves on a few categories, then funds the PIM foundation, the content engine and the agentic bet behind it. Each phase pays for the next.

---

## 12. The play shortlist (the findability, the discovery, the content, the bet)

Each play: the problem in the buyer's language, a named case, the ROI shape, and what i95Dev actually does. Eight plays, grouped by where the value sits.

### The findability

**A. Answer Engine Optimization for the catalog.** *(Wedge)*
- *Problem:* The scientist now asks an AI for a reagent, and AEO is the one phrase Berfun Goodwin came to the conference for. If the answer cites Thermo Fisher, the order is lost before sigmaaldrich.com loads.
- *Named case:* Watts Water's "backflow preventer selection" content is cited by Perplexity over its competitors; AI engines drove 1.13B referral visits in June 2025, up 357% year on year.
- *ROI:* ChatGPT referrals convert about 31% higher than non-branded organic, and almost no life-science seller has structured for it. This is the largest pool in the model.
- *What i95Dev does:* a PIM-to-schema pipeline that structures CAS, purity and spec data into Product, FAQ and Spec schema so answer engines cite Sigma-Aldrich, starting on the top categories. *(Illustrative. Watts / Perplexity; AEO research, Part 3.5.)*

**B. Structured spec and protocol content.**
- *Problem:* The catalog's 25 years of technical data sits in pages an AI cannot easily quote, and content is Berfun Goodwin's named 6–12 month priority.
- *Named case:* AEO is an emerging discipline that almost no industrial seller is doing systematically, leaving an underpriced window; structured Product and FAQ schema is how the engines cite you.
- *ROI:* structured content compounds across every answer engine and traditional search at once, on the channel already shifting to AI.
- *What i95Dev does:* turn spec and protocol content into machine-parseable, schema-marked pages tuned for citation. *(Illustrative. AEO research, Part 3.5.)*

### The discovery

**C. B2B semantic and RAG search on the technical catalog.**
- *Problem:* Scientists search by CAS, application and spec equivalence, and keyword search hits the zero-results catastrophe on a catalog this technical.
- *Named case:* Grainger runs production RAG across 2.5M SKUs on Databricks for technical search and call-center assist; AI search converts about 1.67 times keyword.
- *ROI:* on the largest life-science catalog, relevance on spec queries is measured upside on a channel that already carries orders.
- *What i95Dev does:* semantic and RAG search tuned for CAS, application and spec-equivalence intent, grounded in the structured catalog. *(Verified. Grainger / Databricks; search-AI benchmarks, Part 3.2.)*

**D. AI PIM enrichment for the regulated catalog.**
- *Problem:* 30 to 60% of B2B catalogs carry incomplete attributes, and an answer engine or a search on dirty data is confidently wrong, which is unacceptable for regulated reagents.
- *Named case:* Bio-Rad and Thermo Fisher enrich regulated catalogs from source documents, extracting CAS, REACH and RoHS from SDS; inriver and Akeneo ship agentic enrichment.
- *ROI:* clean, structured attributes gate the AEO, the search and the agentic readiness. The cheapest insurance on the portfolio.
- *What i95Dev does:* human-in-the-loop PIM enrichment that standardizes attributes and specs across the catalog, AI draft, category-manager approve by exception. *(Illustrative. Bio-Rad / Thermo Fisher; inriver / Akeneo.)*

### The content

**E. Retention and reorder tuned to the metrics.**
- *Problem:* The same labs reorder the same reagents on a cycle, and retention is Berfun Goodwin's named 6–12 month priority, but reorder and adjacent prompts stay generic.
- *Named case:* MilliporeSigma already renders approved-list reorder per logged-in account; Watsco's AI recommendations lifted average order value 10%.
- *ROI:* growing a known lab is 5 to 7 times cheaper than winning a new one, and reorder converts 3 to 4 times new-logo traffic.
- *What i95Dev does:* one-click reorder and next-best-action surfaced in the scientist's account, instrumented on the Tellius analytics already in the stack. *(Illustrative. MilliporeSigma reorder; Watsco, DC360.)*

**F. Account entitlement on the punchout rails.**
- *Problem:* The largest accounts order through Jaggaer, Ariba, Oracle, Coupa and the proprietary PIPELINE connection, where the wrong price or an unapprovable item is one click from a trust loss.
- *Named case:* MilliporeSigma renders approved-list reorder per logged-in account; entitlement-aware B2B storefronts are production-ready on enterprise backbones.
- *ROI:* entitlement-aware ordering cuts rep-corrected orders and protects margin on the recurring base.
- *What i95Dev does:* entitlement and contract-aware ordering wired to the punchout and PIPELINE rails, without touching the SAP backbone. *(Illustrative. MilliporeSigma; B2B entitlement personalization.)*

### The bet

**G. Agentic-commerce readiness.**
- *Problem:* The AI buyer is coming for research reagents, and a catalog that is not machine-readable and machine-purchasable is invisible to it.
- *Named case:* Gartner expects 90% of B2B purchases to be AI-intermediated by 2028; Google's AP2 protocol ships agentic purchasing with 60+ partners including Mastercard and PayPal.
- *ROI:* readiness is a low-cost option on the channel that defines 2027 and 2028, bought on the same structured data that wins AEO.
- *What i95Dev does:* make the catalog machine-purchasable for agents using AP2 and MCP, grounded in the new structured catalog data. *(Directional. Gartner; Google AP2.)*

**H. Discovery Solutions, structured from day one.**
- *Problem:* The new digital-first Discovery Solutions BU launched January 2026, and it can be built answer-engine-native or it can repeat the old site's findability gap.
- *Named case:* Dawn Foods re-platformed to composable commerce with AI search and grew online at triple-digit rates with 30% faster time-to-order; structured catalogs win the AI channel.
- *ROI:* building the structured pipeline into the new BU is cheaper than retrofitting it, and it carries the wedge into the growth surface.
- *What i95Dev does:* make Discovery Solutions answer-engine-native and machine-readable from launch, on the same schema pipeline as the wedge. *(Directional. Dawn Foods, DC360; Account 360.)*

*Why this set.* It spans the findability, the discovery, the content and the agentic bet, but it leads with the AEO and search plays that run on the 25-year structured catalog already in hand and answer the buyer's stated ask. Every named case is a real distributor, manufacturer or life-science analog, never a vanity metric, and every play keeps the SAP backbone untouched rather than replacing it.

---

## 13. Why i95Dev (the close)

**Opener:**

> You'll be sold a platform that replaces the backbone Accenture and Capgemini already run. You do not need it.

**Body:**

> The platform pitch is a rebuild of the wrong layer. Your backbone is SAP and it works. Your opportunity is the channel: a 25-year catalog that wins on search but is not yet structured for the answer engines scientists are starting to ask. That is i95Dev's lane: deep in commerce, deep in catalog data and AI search, surgical, at mid-market economics. We structure the data you already own so ChatGPT, Perplexity and Google AI cite your products, and tune the search and content on top. We do not touch your ERP. We make your catalog the cited answer.

**The proof to weave (from the research).** A $200M manufacturer asked a Big-4 firm for a focused fix and got a $3M, 8-month, 7-platform transformation; a specialist later shipped the same outcome in six weeks. MilliporeSigma does not need a transformation. It needs a commerce-and-catalog-deep specialist who ships AEO on the top categories with a real number behind it, on the buyer's exact ask. That gap is the close.

**CTA title:** Book your AI-in-Commerce Diagnostic.
**CTA subtitle:** A fixed-scope, fixed-fee assessment that validates these numbers against the Sigma-Aldrich catalog and its real answer-engine visibility. Two weeks, not a platform rebuild.

**Credibility strip:** 500+ B2B brands · 25+ years · 1,200+ projects · commerce and catalog depth.

---

## 14. Sources and credibility

Per-claim labels follow the research convention. Verified = independently corroborated. Illustrative = vendor or directional benchmark. Directional = widely cited, no single primary source. Company = stated by MilliporeSigma or the Account 360. Confirm flagged items before the meeting.

| Claim | Label | Source |
|---|---|---|
| 95% of AI pilots return nothing | Verified | MIT NANDA · nanda.media.mit.edu |
| sigmaaldrich.com among largest life-science storefronts; 25-yr catalog | Company | MilliporeSigma / Account 360 |
| Merck KGaA Life Science FY2025 net sales €8,980M (42% of group) | Verified | Merck KGaA FY2025 results |
| Science & Lab Solutions €4,536M, Process Solutions €3,785M | Verified | Merck KGaA FY2025 segment reporting |
| Siemens Xcelerator driving digital transformation (Belén Garijo) | Company | Merck KGaA / Account 360 |
| Discovery Solutions digital-first BU live Jan 2026 (Rajeev Nair) | Company | MilliporeSigma / Account 360 |
| SAP S/4HANA + EWM + GTS + BTP; Tellius AI analytics; punchout Jaggaer/Ariba/Oracle/Coupa + PIPELINE | Company | Account 360 |
| Accenture S/4HANA migration; Capgemini global implementation | Company | Account 360 |
| Storefront platform / AI-search vendor not publicly confirmable | Inferred | Account 360 live-site signatures (verify live) |
| AI engines drove 1.13B referral visits June 2025, +357% YoY | Illustrative | AEO research, Part 3.5 |
| 66% of senior B2B decision-makers use AI for supplier research | Illustrative | AEO research, Part 3.5 |
| ChatGPT referrals convert ~31% higher; 51% start in AI chatbot | Illustrative | AEO research, Part 3.5 |
| Watts "backflow preventer selection" cited by Perplexity over rivals | Illustrative | Research dump, Part 3.4 |
| AI search converts ~1.67x keyword | Verified | Search-AI benchmarks, Part 3.2 |
| Grainger production RAG on 2.5M SKUs | Verified | Databricks / DC360 |
| 30–60% of B2B catalogs have incomplete attributes | Verified | B2B catalog attribute benchmarks, Part 3.2 |
| Bio-Rad / Thermo Fisher regulated-catalog enrichment (CAS/REACH/RoHS) | Illustrative | Research dump, Part 3.4 |
| inriver / Akeneo agentic PIM enrichment | Illustrative | inriver / Akeneo |
| MilliporeSigma approved-list reorder | Illustrative | Research dump, Part 3.4 |
| Watsco AI recs, AOV +10% | Verified | Adobe / DC360 |
| Dawn Foods re-platform, triple-digit online growth, −30% time-to-order | Verified | commercetools / DC360 |
| Gartner 90% of B2B purchases AI-intermediated by 2028 | Directional | Gartner |
| Google AP2, 60+ partners incl. Mastercard / PayPal | Verified | Google Cloud announcement |
| 11x.ai customer loss | Verified | TechCrunch |
| Big-4 $3M / 8-mo vs 6-week specialist fix | Directional | Research dump, Part 5.4 |

**Flagged to verify live:** the storefront platform and AI-search vendor are not publicly confirmable (bot-protected SPA; SAP Commerce Cloud plausible), so do not assert them on the page; confirm eCommerce % of Life Science sales; confirm the scope and owner of the new ERP program (Robert Machinek, SVP Strategy & BD); identify any named commerce or digital SI; note the SAP / Accenture / Capgemini incumbency without pitching against it on the page.

---

## 15. Handback and reuse

This file is the finished content and the template. To wire MilliporeSigma: every block maps to a field in `data/accounts/milliporesigma.ts` (thesis, wedge, wedgeDetail, reframe, hypeFilter, stackFlags, mapPlays, payoff.moneyPools, payoff.roadmap, payoff.plays, payoff.why). To run the next account, copy this file and rebuild the spine in Section 0 first. The spine is the insight that makes the rest inevitable; everything downstream follows from it.
