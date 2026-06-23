# MillerKnoll: Enterprise AI + Commerce Advisory Spec

**Account:** MillerKnoll · **Vertical:** Design furnishings collective (B2B contract + B2C retail)
**Prepared by:** i95Dev · **Source basis:** Account 360 (Claude research, Jun 2026) + B2B Connect 2026 AI research dump
**Status:** Final content. Every field below is finished copy, not a fill-in. It maps 1:1 to a `data/accounts/millerknoll.ts` config and drops into the build with no rewriting.

> **What this document is.** A complete, advisory-grade content spec for the MillerKnoll lead-magnet report, above and below the email gate, with the rationale behind each line and the graphics that replace prose. Benchmark: Sequoia's *Services: The New Software*. Same reusable template as ChemPoint and Bob Barker.

---

## 0. The spine (read this first)

Everything below hangs on one insight about MillerKnoll's situation, drawn straight from the Account 360, and the buyer has already said it out loud.

**MillerKnoll only wins as a collective if its data is unified, and its own VP has named the unification as the thing every AI feature depends on.** It is Herman Miller, Knoll, Design Within Reach, HAY, Muuto, Geiger and more under one roof since the 2021 merger. Shannon Zonca, VP of B2B E-Commerce and Digital Solutions, is buying PIM now and has said plainly that the PIM investment, the product-discovery chat tool and the AI space-planning work are all downstream of that data-unification effort.

That is the rare account where the buyer has already drawn the map. The question is only whether the PIM buy becomes a tool license over messy data, or the multi-brand data model that every downstream feature inherits clean.

The pressure is real. FY25 operating margin was about 1.4%, which makes cost-out and conversion both urgent, and the CEO transition in June 2026 raises the need to show digital ROI fast. Capgemini owns the Salesforce Commerce core, and that should stay where it is. The data-unification and PIM layer is being built largely in-house with one embedded contractor, which is the gap.

So the strategic question for MillerKnoll is whether the AI features on the roadmap, discovery, space planning, Agentforce, inherit a clean multi-brand data model or compound a fragmented one. For a thin-margin collective, getting the foundation right is what makes every feature pay.

That is where AI actually pays here. Not Agentforce switched on over messy data. Not a discovery chatbot blind to dealer pricing. It is the multi-brand PIM and the data layer feeding it. The model is the commodity. A unified catalog and dealer relationship spanning the whole collective, which Steelcase and Haworth cannot copy, is the moat.

That spine runs through the thesis, the wedge, every module, and every play. Guardrail: Capgemini owns the SFCC core; win the PIM and data scope, complementary, never the commerce core.

---

## 1. The fixed facts (confirmed from the Account 360)

| Field | Value | Notes for the build |
|---|---|---|
| Company name | MillerKnoll | HQ Zeeland, MI; ~10,382 employees; formed 2021 |
| Vertical label | Design furnishings collective (B2B contract + B2C retail) | Herman Miller, Knoll, DWR, HAY, Muuto, Geiger, NaughtOne, Maharam |
| Revenue band | $1B+ (~$3.7B FY25; operating margin ~1.4%) | Thin margins force cost-out. Drives the gated $ math |
| Buyer we write to | VP, B2B E-Commerce + Digital Solutions | Shannon Zonca; owns budget + strategy; buying PIM "Now" |
| Role emphasis | `ecommerce` | PIM and data unification lead |
| Active requirement | Yes, active | PIM "Now"; Digital Solutions 6–12 months |
| Domains (email match) | millerknoll.com, hermanmiller.com, knoll.com, dwr.com | Stakeholder emails inferred |

**The triggers we lean on.**

1. **PIM buy active "Now."** Shannon Zonca owns budget and strategy and is purchasing PIM in the immediate term.
2. **The buyer's own logic.** Zonca on record: the PIM, the discovery chat tool and the AI space planner are all downstream of data unification.
3. **Margin pressure plus leadership flux.** A 1.4% operating margin forces cost-out, and the June 2026 CEO transition raises the pressure to show digital ROI fast.

**The champions.** Shannon Zonca is the primary champion and PIM buyer. Ben Groom (Chief Digital Officer, ~200-person org) is the exec sponsor. Frank DeMaria (VP Digital Engineering) owns the Salesforce platform and the Capgemini relationship and is the technical gatekeeper.

**The guardrail (do not break).** Capgemini owns the Salesforce Commerce core. Do **not** pitch replatforming it. Win the PIM and data-unification scope, the dealer catalog content ops, and the integration layer feeding Agentforce, complementary to Capgemini. Do **not** pitch a NetSuite rip-out; integrate it.

**The audience rule.** This is a design-led brand. Keep every line crisp and confident; sloppy copy undercuts the pitch to a design company.

**One thing to verify live.** The PIM vendor name (central, not public). Whether Capgemini is also in the PIM workstream, which changes displace-versus-complement. Search, CDP and CMS vendors. The CEO-transition effect on digital budget.

---

## 2. Voice rules (the bar for every line)

- **Aphoristic, contrastive openers.** "Everyone is selling you the AI feature. You already named the part that decides whether it works."
- **A name on every claim.** Salesforce, Capgemini, NetSuite, TradeCentric, Steelcase, Haworth. No floating assertions.
- **One load-bearing stat per idea.** A single number, dropped where it lands hardest.
- **Reframes that flip intuition.** "The features are cheap. The data model beneath them is the expensive, defensible part."
- **Economy.** One to three sentence paragraphs. Cut any word that can go.
- **No AI tells.** No em-dashes. Periods, colons, commas only. En-dashes live in numeric ranges ($2–7M).
- **It is about them.** Lead with what MillerKnoll owns and what Steelcase and Haworth cannot copy.

| Write this | Not this |
|---|---|
| "Every AI feature is downstream of the PIM." | "Establish a robust data governance framework." |
| "Clean specs feeding discovery, planning, Agentforce." | "Enable AI-powered experiences." |
| "Win the data scope, leave the SFCC core." | "Deliver end-to-end digital transformation." |

---

## 3. The thesis (line one of the report)

Target 8–16 words.

> **Every AI feature on your roadmap is downstream of the PIM. Build that first.**

*Why this line.* It reflects Shannon Zonca's own stated logic back to her in one repeatable sentence, which makes the argument hers, not ours. Entirely about them.

---

## 4. The wedge (the one play they start with)

- **Wedge label:** A multi-brand PIM and the data layer feeding it, vendor-agnostic and complementary to Capgemini.
- **Wedge detail:** You are buying PIM now, and the discovery chat, the space planner and Agentforce all sit downstream of it. Get the multi-brand data model right across Herman Miller, Knoll, DWR, HAY and Muuto, plus the integration into Salesforce Commerce and NetSuite, and every one of those features inherits clean data instead of compounding a mess.

*Why this one.* It is the active buy, the highest-compounding asset (the unified catalog and dealer data), and the most bolt-on-ready (it rides a purchase already in motion). It shapes the decision already being made rather than proposing a new one, and it stays clear of the Capgemini-owned SFCC core.

---

## 5. Module 1: The Reframe

**Device:** one arresting stat plus the thesis setup.

- **Opener:** Everyone is selling you the AI feature. You already named the part that decides whether it works.
- **Stat:** `33%`
- **Stat label:** of AI initiatives hit their ROI target; 53% of the failures blame data quality.
- **Stat source:** IBM, 1,200 Salesforce customers · `https://www.ibm.com/`
- **Body:**

> Only 33% of AI initiatives hit ROI, and 53% of the failures blame data, not the model. Shannon Zonca has already said the quiet part out loud: the PIM, the product-discovery chat and the AI space planner are all downstream of data unification. That is exactly right. Get the multi-brand data model right across the collective, and AI runs on the one asset Steelcase and Haworth cannot copy: a unified catalog and dealer relationship that spans every brand under one roof.

*Why it works.* The IBM figure names the exact failure mode Zonca is trying to avoid, and the body validates her own roadmap rather than replacing it. It ends on what only MillerKnoll owns.

---

## 6. Module 2: The Hype Filter

**Device:** a two-column cut, four per column, then a single pitch-warning bar.

- **Opener:** Commodity AI ships a feature. Compounding AI ships the data model the feature needs.

| Commodity · rent it | Compounding · own it |
|---|---|
| Agentforce switched on over messy data | One PIM as the single source of truth |
| A discovery chatbot blind to dealer pricing | A multi-brand data model across the collective |
| AI space planning on un-unified specs | Clean specs feeding discovery, planning, Agentforce |
| Another replatform when data is the issue | PIM integrated to SFCC, NetSuite and TradeCentric |

- **Pitch warning:**

> Capgemini owns the Salesforce Commerce core, and that is fine, leave it there. The trap is letting the PIM and data-unification scope get folded into another platform program. The features you want are cheap. The data model beneath them is the expensive, defensible part, and today it is built largely in-house with one embedded contractor. That is the gap.

*One fact worth weaving from the research.* "Agentforce for everything" only works on clean data; only about 33% of Salesforce AI initiatives hit ROI. Keep it for the live conversation.

---

## 7. Module 2.5: Your Stack (the "we read your stack" infographic)

| Signal (system you run) | The play it unlocks | What you'll be pitched instead |
|---|---|---|
| Salesforce Commerce Cloud + Agentforce | Feed it clean, unified product data so Agentforce and discovery actually perform | "Agentforce for everything." It is only as good as the PIM behind it. |
| PIM (live, single source of truth) | Make the multi-brand data model the asset every AI feature inherits | A bigger PIM license. The value is the model and integrations, not the tool. |
| Oracle NetSuite ERP | Bridge ERP product, pricing and inventory into PIM and commerce | A NetSuite re-implementation. The unlock is the integration seam. |
| TradeCentric punchout | Keep dealer punchout fed by the same clean catalog | A separate catalog for punchout. One source, many channels. |

*Why these rows.* Each is confirmed in the Account 360, and the PIM row is the credibility move: it shows we understand the buy in flight and steer it to the data model rather than the tool.

---

## 8. Module 3: The Commodity vs Compounding Map

**Device:** the signature 2×2. Bubble size = dollar magnitude. Wedge starred, top-right.

**Map intro line:**

> We mapped MillerKnoll's roadmap against your own stated logic. The lit bubbles compound on a unified multi-brand catalog, sized by the dollars on the table. The star is the one you are already buying: get it right and everything downstream inherits clean data.

**The plays and coordinates** (compounding 0–1, bolt-on 0–1, magnitude 1–5):

| Play | Compounding | Bolt-on | Magnitude | Lit (yours) | Wedge |
|---|---|---|---|---|---|
| Multi-brand PIM + data layer | 0.88 | 0.80 | 5 | yes | ★ |
| AI PIM enrichment | 0.82 | 0.70 | 3 | yes | |
| Account / dealer personalization | 0.84 | 0.55 | 4 | yes | |
| B2B-aware search / discovery | 0.80 | 0.62 | 4 | yes | |
| AEO + answer layer | 0.90 | 0.72 | 3 | yes | |
| Dealer catalog content ops | 0.65 | 0.75 | 3 | yes | |
| Agentic-commerce ready | 0.95 | 0.30 | 4 | yes | |
| Agentforce over messy data | 0.20 | 0.85 | 1 | no | |
| Generic discovery chatbot | 0.16 | 0.88 | 1 | no | |
| ML forecasting (relabeled) | 0.40 | 0.42 | 2 | no | |

**Text rendering of the quadrant** (for reviewers without the live chart):

```
 COMPOUNDING (runs on your data)
        ▲
        │  Agentic-commerce ready ●          AEO ●          ★ MULTI-BRAND PIM + DATA LAYER
        │     Account/dealer personalization ●        AI PIM enrichment ●
        │        B2B-aware discovery ●               Dealer catalog content ops ●
        │
        │  · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
        │
        │                          Generic discovery chatbot ○     Agentforce over messy data ○
        ▼
 COMMODITY (runs on the model)
  FOUNDATION-REQUIRED ◀──────────────────────────────────────────▶ BOLT-ON-READY
        (data work first)                                          (start now)

  ● lit = yours   ○ greyed = table-stakes   ★ wedge = found money, start now
  bubble size = dollar magnitude
```

*Why the map lands.* The star is the active PIM buy, top-right: high-compounding and start-now. "Agentforce over messy data" is greyed deliberately, the bolt-on trap that fails without the foundation.

---

## 9. The gate teaser (the blurred line on the lock)

> Your estimated annual margin and conversion opportunity from a unified data foundation is a real number we calculated for MillerKnoll. Enter your work email to reveal your model.

**The number behind the blur:** $2–7M (modeled from the ~$3.7B base; pools below). Conservative against thin margins, and it clears a PIM budget several times over.

---

---

# Below the gate (the payoff)

## 10. The money pools (where the dollars are)

**Device:** four bars, each with one named proof point. Headline $2–7M.

```
 Conversion: discovery and search on clean multi-brand data      $0.5M ████████████ $2M
 Dealer AOV: account-aware recommendations and reorder           $0.5M ██████████ $1.5M
 Cost-out: content ops and dealer self-service                   $0.5M ████████████ $2M
 Foundation: the PIM data model the AI portfolio inherits        $0.5M ████████ $1.5M
                                                                  └─ headline: $2–7M ─┘
```

**Pool 1. Conversion: discovery and search on clean multi-brand data. ($0.5–2M)**
Product discovery and search only convert when the catalog data is unified and complete. AI search converts at roughly 1.67 times keyword, and Dawn Foods drove triple-digit online growth on AI search and recs. On clean multi-brand data, discovery and the space planner finally perform. *(Verified. Source: Dawn Foods; research dump Part 3.2.)*

**Pool 2. Dealer AOV: account-aware recommendations and reorder. ($0.5–1.5M)**
Account-aware recommendations lift order value on the contract and dealer base. Watsco grew average order value 10% from AI recommendations on its contractor platform. The same pattern across the collective's dealers compounds. *(Verified. Source: Adobe / Watsco.)*

**Pool 3. Cost-out: content ops and dealer self-service. ($0.5–2M)**
At a 1.4% operating margin, cost-out matters as much as growth. AI PIM enrichment cuts manual data time up to 60%, relieving the lean in-house team, and dealer self-service deflects rep-assisted orders. Fisher & Paykel moved self-service 40% to 70% and saved 3,300 hours a month. *(Verified. Source: research dump Part 3.2; Fisher & Paykel.)*

**Pool 4. Foundation: the PIM data model the AI portfolio inherits. ($0.5–1.5M)**
Discovery, space planning and Agentforce are all downstream of the PIM, by the buyer's own account. The multi-brand data model gates the ROI of every one of them, which makes it the highest-leverage spend on the board. *(Illustrative. Source: Shannon Zonca, Account 360.)*

*Why four.* They are the four levers of a thin-margin collective: convert better, lift dealer orders, cut cost, and build the data model the rest inherits. Each maps to a phase and a play.

---

## 11. The roadmap (sequence it so it self-funds)

```
 NOW ───────── 3–6 MO ───────── 6–12 MO ───────── FOUNDATION
  ●               ○                  ○                  ○
 Phase 1        Phase 2            Phase 3           Phase 4
 [ACTIVE]
 Multi-brand    PIM as single      Discovery, dealer Agentic-commerce
 data model +   source across the  personalization,  readiness on the
 PIM enrichment collective         AEO               clean layer
```

**Phase 1, starts now. Multi-brand data model and PIM enrichment.**
Define the multi-brand data model and run AI PIM enrichment on one brand's catalog, integrated into Salesforce Commerce. AI drafts attributes, category managers approve by exception. This is the wedge, and it rides the PIM budget already approved.

**Phase 2, 3 to 6 months. PIM as the single source of truth.**
Extend the model across the collective and integrate to NetSuite and TradeCentric, so one catalog feeds every channel.

**Phase 3, 6 to 12 months. Discovery, dealer personalization, AEO.**
Turn on product discovery, dealer personalization and AEO, all on the clean layer, so they actually perform.

**Phase 4, the foundation. Agentic-commerce readiness.**
Make the catalog machine-readable and contract-aware for agentic buyers. The data work begins in Phase 1 and matures here.

*Why this order.* The active PIM buy goes first and the features that depend on it follow, so each phase inherits clean data instead of compounding a mess. The SFCC core stays with Capgemini throughout.

---

## 12. The play shortlist (data foundation, commerce, and acquisition)

### The data foundation

**A. Multi-brand PIM and data layer.** *(Wedge)*
- *Problem:* The PIM is being bought now, and it could ship as a tool license over fragmented brand data instead of the model every AI feature needs.
- *Named case:* The buyer's own logic, that discovery, planning and Agentforce are downstream of data unification.
- *ROI:* A clean multi-brand model gates the ROI of every downstream feature.
- *What i95Dev does:* Build the vendor-agnostic multi-brand data model and integrate it into SFCC and NetSuite, complementary to Capgemini. *(Illustrative. Account 360; Zonca.)*

**B. AI PIM enrichment.**
- *Problem:* Incomplete attributes across brands kill search, discovery and AEO, and the in-house team is lean.
- *Named case:* AI PIM enrichment cuts manual data time up to 60%.
- *ROI:* A complete catalog faster, with the lean team approving by exception.
- *What i95Dev does:* AI-drafted, human-approved attribute enrichment across the collective's catalogs. *(Verified. Research dump, Part 3.2.)*

### Commerce and the buyer experience

**C. B2B-aware search and discovery.**
- *Problem:* Discovery and the space planner only work when the catalog data behind them is clean and unified.
- *Named case:* AI search converts about 1.67 times keyword; Dawn Foods drove triple-digit online growth.
- *ROI:* Higher conversion on the search-driven share once the data is unified.
- *What i95Dev does:* Account-aware search and discovery on the clean multi-brand catalog. *(Verified. Dawn Foods.)*

**D. Account and dealer personalization.**
- *Problem:* Dealers and contract buyers need their own pricing and approved items, which generic recs ignore.
- *Named case:* Watsco grew AOV 10% from AI recs on its contractor platform.
- *ROI:* Higher dealer AOV and fewer rep-assisted orders.
- *What i95Dev does:* Entitlement-aware personalization and reorder for dealers, fed by the PIM. *(Verified. Adobe / Watsco.)*

### Acquisition

**E. AEO and agentic-commerce readiness.**
- *Problem:* AI engines and agentic buyers need machine-readable, contract-aware catalog data, which fragmented brands cannot provide.
- *Named case:* AI referral visits hit 1.13B in June 2025; Gartner projects most B2B purchases AI-intermediated by 2028.
- *ROI:* Being cited and being buyable by AI agents, on a catalog competitors cannot match.
- *What i95Dev does:* Schema feeds and API-first, contract-aware catalog structure on the clean layer. *(Verified / directional. Research dump, Part 3.2.)*

*Why this set.* It puts the data foundation first, then the commerce features that inherit it, then acquisition, all complementary to the Capgemini SFCC core. Every named case is a real distributor or manufacturer analog.

---

## 13. Why i95Dev (the close)

**Opener:**

> You'll be sold another platform program. Your gain is the data model every feature inherits.

**Body:**

> The platform vendors will pitch templates and the Big-4 a transformation, and Capgemini already owns your commerce core. Your problem is none of those. It is the multi-brand data model and the integration layer feeding Agentforce, NetSuite and TradeCentric, built right and built once. That is exactly i95Dev's lane: the PIM-to-commerce-to-ERP seam, surgical where the Big-4 are sprawling, priced for a thin-margin collective. We do not touch the SFCC core. We build the foundation your own roadmap says everything depends on.

**The proof to weave (from the research).** A $200M company was quoted a $3M, eight-month, seven-platform transformation; a specialist shipped the same outcome in six weeks. The giants over-scope; the PIM and data layer is precisely the surgical work they fold into a program.

**CTA title:** Book your PIM and Data-Foundation Diagnostic.
**CTA subtitle:** A fixed-scope assessment that defines the multi-brand data model, maps the integration into SFCC and NetSuite, and sizes the conversion and cost-out upside against MillerKnoll's real catalog. Weeks, not a multi-year program.

**Credibility strip:** 500+ B2B brands · 25+ years · 1,200+ projects.

---

## 14. Sources and credibility

| Claim | Label | Source |
|---|---|---|
| Only 33% of AI initiatives hit ROI; 53% blame data | Verified | IBM, 1,200 Salesforce customers |
| AI search ~1.67x keyword conversion | Verified | Research dump, Part 3.2 |
| Dawn Foods triple-digit growth | Verified | commercetools / DC360 |
| Watsco +10% AOV from AI recs | Verified | Adobe / Watsco (DC360) |
| AI PIM enrichment cuts manual data time up to 60% | Verified | Research dump, Part 3.2 |
| Fisher & Paykel self-service 40% to 70%, 3,300 hrs/mo | Verified | BusinessWire / Salesforce |
| AI referral visits 1.13B in June 2025 | Verified | Research dump, Part 3.2 |
| Most B2B purchases AI-intermediated by 2028 | Directional | Gartner (research dump Part 3.2) |
| Big-4 $3M/8-mo vs 6-week specialist fix | Directional | Research dump, Part 5.4 |

**Flagged to verify live:** the PIM vendor name (central, not public). Whether Capgemini is in the PIM workstream (changes displace-vs-complement). Search, CDP and CMS vendors. The CEO-transition effect on digital budget.

---

## 15. Handback and reuse

This file is the finished content and the template; every block maps to a field in `data/accounts/millerknoll.ts`, mirroring `bob-barker.ts`.

**Note on positioning.** The Account 360 scores MillerKnoll a warm, active fit with an incumbent SI on the commerce core, so the content is complementary by design. It is a PIM and data-foundation story, not a replatform story. The wedge is the active PIM buy, and every play stays clear of the Capgemini-owned SFCC core.
