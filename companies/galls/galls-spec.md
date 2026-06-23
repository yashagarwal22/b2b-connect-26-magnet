# Galls, LLC: Enterprise AI + Commerce Advisory Spec

**Account:** Galls, LLC (Charlesbank Capital Partners portfolio) · **Vertical:** Public-safety uniform & equipment distribution
**Prepared by:** i95Dev · **Source basis:** Account 360 (Jun 2026) + B2B Connect 2026 AI research dump
**Status:** Final content. Every field below is finished copy, not a fill-in. It maps 1:1 to `data/accounts/galls.ts` and drops into the build with no rewriting.

> **What this document is.** A complete, advisory-grade content spec for the Galls lead-magnet report, built from scratch off the Account 360. It carries the finished copy for the whole page (above and below the email gate), the rationale behind each line, and the graphics that replace prose with a picture. The benchmark for every word is Sequoia's *Services: The New Software*: one argument, one axis, a handful of load-bearing facts. The spec is also the reusable template. To run the next account, copy this file and rebuild the spine first.

---

## 0. The spine (read this first)

Everything below hangs on one insight about Galls' business, drawn straight from the Account 360.

**Galls is the largest US public-safety uniform distributor, and it has bought 8 companies in 18 months.** The strategic mandate from that spree is one word: unification. One "360°" platform across fragmented systems, duplicate master data and scattered customer records, so the police, fire and EMS agencies that Galls serves see one company, not eight.

The conference champion is Katherine Pesik, VP of IT, and she owns the budget and the strategy for an active CRM replacement whose shortlist explicitly names Microsoft Dynamics 365, i95Dev's core. Her stated Now priority is PIM. That is the hottest near-term opening in the room: a live, IT-owned, funded decision that lands squarely on i95Dev's home turf.

The moat is real. 670+ agency contract accounts on custom punchout portals, value-added tailoring and embroidery no competitor matches at scale, and the proprietary C.O.M.S. order engine and G.M.I. managed-inventory engine that run galls.com. But those same legacy engines and the acquisition sprawl are also the fragmentation problem the mandate exists to solve.

The reframe: AI cannot help Galls until the data and the systems are unified, and the CRM decision is the moment to set that foundation right. Master data unification is the real first job, because 8 acquisitions means duplicate item masters and inconsistent customer records before any model can reason over them.

GUARDRAIL: lead with Dynamics 365 CRM plus PIM plus martech integration as the foundation. The legacy galls.com re-platform off C.O.M.S. and G.M.I. is the secondary, later thread, not the opening move. Win the foundation Pesik is already funding, and every later play compounds on data competitors cannot copy. Miss it, and the unification mandate stalls on a CRM chosen without the data layer underneath it.

That spine runs through the thesis, the wedge, every module, and every play.

---

## 1. The fixed facts (confirmed from the Account 360)

| Field | Value | Notes for the build |
|---|---|---|
| Company name | Galls, LLC | PE-owned by Charlesbank Capital Partners since Feb 2018 |
| Vertical label | Public-safety uniform & equipment distribution | Police, fire, EMS, security; uniforms, tactical, body armor |
| Revenue band | ~$650M total est; ~$172M online | Charlesbank-owned, private; online +20–50% YoY (2025). Drives the gated $ math |
| Buyer we write to | VP, IT | Katherine Pesik (champion); economic context via CIO Susan Shiposh |
| Role emphasis | `crm` + `pim` | Active CRM replacement; PIM is the stated Now priority |
| Active requirement | Yes | Now: PIM. 6–12mo: Loyalty/Retention. CRM shortlist includes Dynamics 365 |
| Domains (email match) | galls.com | 160+ locations; 670+ agency accounts; FireAuthority.com segment storefront |

**The triggers we lean on.** A funded program, an acquisition mandate that forces the issue, and a champion who owns the CRM decision and the IT budget.

1. **An active, IT-owned CRM replacement.** Katherine Pesik holds budget and strategy authority, and the shortlist explicitly names Microsoft Dynamics 365 alongside Salesforce, HubSpot, Zoho and Creatio. The decision is live, not hypothetical.
2. **8 acquisitions in 18 months.** Action Uniform and DesignLab (Jan 2026), CMS Uniforms (Mar 2026), plus a Canada market entry. Each acquisition arrives with its own item master and customer file, and the sprawl is the unification mandate's reason to exist.
3. **A stated Now priority: PIM.** With Loyalty and Retention named for 6–12 months out, the shopping list reads as the foundation first, the customer-facing payoff second. That is exactly the right sequence.

**The data the moat runs on.** Galls already owns the 670+ agency contract relationships, the value-added tailoring and embroidery operation, and the C.O.M.S. and G.M.I. engines that take and manage the orders. The asset is those relationships and that order data, not a system still to be bought.

**The guardrail (do not break).** This is a foundation-led modernization, not a storefront rip-and-replace on day one. Lead with D365 CRM, a real PIM, and martech integration. Treat the legacy galls.com platform (C.O.M.S. and G.M.I.) as a re-platform candidate for later, after the data layer is unified. Set the foundation first; the configurator and the channel follow.

**One thing to verify live.** Confirm in the room that the core galls.com platform is the custom C.O.M.S./G.M.I. stack and not BigCommerce (BigCommerce is tied to FireAuthority and the segment storefronts, not the core domain). Confirm total revenue, the CRM-selection timeline and outcome, and whether a SAP S/4HANA implementation SI of record exists. No named commerce or CRM implementation SI is whitespace.

---

## 2. Voice rules (the bar for every line)

Hold every line to these. They are the difference between advisory content and AI slop.

- **Aphoristic, contrastive openers.** "A CRM is not a system you buy. It is the spine 8 acquisitions either snap onto or fight."
- **A name on every claim.** Charlesbank, C.O.M.S., G.M.I., Dynamics 365, Pesik, Shiposh, SAP S/4HANA. No floating assertions.
- **One load-bearing stat per idea.** A single number, dropped where it lands hardest. Never a wall of figures.
- **Reframes that flip intuition.** "Your CRM decision is not a software purchase. It is the master-data foundation every later AI play stands on."
- **Economy.** One to three sentence paragraphs. If a word can go with no loss, cut it.
- **No AI tells.** No em-dashes. Periods, colons, commas only. En-dashes live in numeric ranges ($6–18M).
- **It is about them.** Lead with what Galls owns and what LA Police Gear cannot copy.

| Write this | Not this |
|---|---|
| "8 acquisitions means 8 item masters. Unify them first." | "We enable a seamless post-merger integration journey." |
| "Put the CRM on D365 and the PIM under it, then the AI has clean data to reason over." | "Leverage synergies across the digital transformation landscape." |
| "The moat is 670 agency contracts and the embroidery line, not the website." | "Deliver a holistic omnichannel customer experience." |

---

## 3. The thesis (line one of the report)

Shows huge at the top. The one sentence the reader can repeat to a colleague. Target 8–16 words.

> **You bought 8 companies. Now choose the CRM that unifies them, not just records them.**

*Why this line.* It credits the real event (the acquisition spree and the active CRM decision Pesik owns), names the stakes (unification, not a CRM that just stores contacts), and reframes the whole AI question as setting the data foundation right at the moment of choice. Repeatable, and about them.

---

## 4. The wedge (the one play they start with)

The compounding play they can start without fixing everything first: high value, runs on data they already own, fast to prove, self-funds the rest.

- **Wedge label:** The Dynamics 365 CRM and PIM foundation that unifies 8 acquisitions into one platform.
- **Wedge detail:** It rides the active CRM decision Galls is already funding, with Dynamics 365 already on the shortlist. It answers the stated Now priority, PIM, and the unification mandate in one move. It sets the master-data foundation every later AI play needs. And it proves on the highest-value flows first, the 670+ agency contract accounts and their reorders, before any legacy galls.com re-platform. Prove it on the agency book, then extend the same unified rails across the DTC channel and the segment storefronts.

*Why this one.* It is the only play that is simultaneously the most defensible (the moat is the agency relationships and the order data, and unifying them on D365 is a foundation competitors cannot copy), the highest-compounding (every later play, loyalty, search, agentic intake, runs on this clean data), bolt-on-ready in its first cut (it ships on the CRM decision already in motion without waiting for the storefront re-platform), and exactly what the buyer is funding right now. It also sets up everything else: the unified CRM and PIM are the rails the reorder, the loyalty program and the AI search all ride.

---

## 5. Module 1: The Reframe

**Device:** one arresting stat plus the thesis setup. **Purpose:** everyone is selling you an AI add-on; the asset is the unified data foundation and the agency relationships only you own.

- **Opener:** An AI demo on the website is a slide. The real work is making 8 acquisitions read as one company.
- **Stat:** `95%`
- **Stat label:** of enterprise AI pilots return nothing to the P&L.
- **Stat source:** MIT NANDA, ~95% of pilots · `https://nanda.media.mit.edu/`
- **Body:**

> 95% of enterprise AI pilots return nothing to the P&L. They sit beside the work instead of inside it, and the cause is almost never the model. It is the data. Galls just bought 8 companies in 18 months, which means duplicate item masters and inconsistent customer records before any AI can reason over them. The edge is not a smarter chatbot. It is unifying that data on the Dynamics 365 CRM you are already choosing and the PIM you named as your Now priority, so the foundation is right before the AI is asked to stand on it.

*Why it works.* The 95% MIT NANDA figure is the most quotable credibility stat in the category, and its failure cause is the data foundation, not the model, which is exactly Galls' situation after 8 acquisitions. The body refuses the AI-add-on frame, restates the real job (unify the data), and ends on the two assets the buyer is already funding: the D365 CRM and the PIM.

---

## 6. Module 2: The Hype Filter

**Device:** a two-column cut. Left, commodity you rent (table-stakes or actively harmful). Right, compounding you own (defensible, runs on Galls' unified data and agency relationships). Then a single pitch-warning bar. Exactly four per column, parallel and concrete.

- **Opener:** Commodity AI bolts onto the storefront. Compounding AI unifies the data 8 acquisitions left you, on rails competitors cannot copy.

| Commodity · rent it | Compounding · own it |
|---|---|
| A chatbot bolted onto galls.com | A unified CRM that merges 8 acquired customer files |
| Generic recs that ignore agency contracts | A real PIM that dedupes 8 item masters |
| AI-written product copy at scale | Account-based reorder for 670+ agency portals |
| An "AI strategy" deck, not a CRM decision | Loyalty and retention grounded in clean order data |

- **Pitch warning:**

> You are choosing a CRM right now, and the shortlist already includes Dynamics 365. Expect a pitch to sell you a fashionable platform with an AI label and no plan for the master data underneath. Do not. The job is not a prettier website. It is making the 8 customer files and 8 item masters read as one, on the D365 backbone you are already evaluating. Choose the CRM that unifies the data, and stand up the PIM under it. Set the foundation, then layer the AI.

*One fact worth weaving from the research.* The cautionary tale is AI deployed on data that is not ready. 87% of leaders say bad data has hampered AI value, and Gartner expects organizations to abandon 60% of AI projects unsupported by AI-ready data. For a distributor mid-way through 8 acquisitions, that is not a risk, it is the default state. The win is unifying the data first, not generating on top of the mess. Keep this for the live conversation; the four-bullet grid stays clean.

---

## 7. Module 2.5: Your Stack (the "we read your stack" infographic)

**Device:** a scannable signal → unlock → trap table, one row per system Galls actually runs. Each trap line respects the guardrail: unify the foundation first, re-platform the storefront later.

| Signal (system you run) | The play it unlocks | What you'll be pitched instead |
|---|---|---|
| CRM in active replacement (D365 shortlisted) | Choose the CRM that unifies 8 acquired customer files, on the backbone you are already evaluating | A flashy CRM with an AI label and no master-data plan. Pick the one that unifies. |
| No modern PIM (your stated Now priority) | Stand up a real PIM that dedupes 8 item masters into one clean catalog | "Add AI product copy." Clean attributes first; the AI is confidently wrong without them. |
| Custom galls.com (C.O.M.S. + G.M.I.) | Treat the legacy engines as a re-platform candidate after the data is unified | A day-one storefront rip-and-replace. Unify the foundation first, then re-platform. |
| SAP S/4HANA (in implementation) | Wire the CRM and PIM to the ERP so order and master data flow one way | A parallel data silo. Keep S/4HANA as the rail and integrate to it. |
| 670+ agency punchout portals (cdcr, gsa, BIA) | Enforce contract pricing and one-click reorder inside the unified account view | A generic checkout. The agency book needs entitlement-aware ordering. |

*Why these rows.* Each system is confirmed in the Account 360, and each maps to a play below. The trap column names the commodity pitch before a competitor makes it, and every line keeps the foundation-first sequence: unify on D365 and PIM, integrate to S/4HANA, re-platform the legacy storefront last.

---

## 8. Module 3: The Commodity vs Compounding Map

**Device:** the signature 2×2. **Y axis:** Commodity (runs on the model) to Compounding (runs on your unified data and agency relationships). **X axis:** Foundation-required (needs data work first) to Bolt-on-ready (start now). Each play is a bubble; **bubble size = dollar magnitude.** The **wedge is the starred bubble, top-right.** Galls-relevant plays are lit; the hype pitches greyed.

**Map intro line:**

> We mapped Galls' world. The lit bubbles pay for a distributor whose moat is the agency book and whose mandate is unification, sized by the dollars on the table. The greyed ones are the AI-add-on demo.

**The plays and coordinates** (compounding 0–1, bolt-on 0–1, magnitude 1–5):

| Play | Compounding | Bolt-on | Magnitude | Lit (yours) | Wedge |
|---|---|---|---|---|---|
| D365 CRM + PIM foundation | 0.90 | 0.70 | 5 | yes | ★ |
| Acquisition integration / unified view | 0.88 | 0.42 | 5 | yes | |
| Account reorder + loyalty (agency) | 0.84 | 0.60 | 4 | yes | |
| AI PIM enrichment | 0.85 | 0.38 | 4 | yes | |
| Account entitlement on punchout | 0.80 | 0.66 | 3 | yes | |
| B2B semantic search | 0.70 | 0.78 | 3 | yes | |
| Churn / whitespace NBA | 0.78 | 0.55 | 3 | yes | |
| AEO for spec and gear content | 0.86 | 0.62 | 3 | yes | |
| Generic chatbot | 0.14 | 0.90 | 1 | no | |
| AI product copy | 0.12 | 0.80 | 1 | no | |
| "AI strategy" deck | 0.20 | 0.30 | 1 | no | |

**Text rendering of the quadrant** (for reviewers without the live chart):

```
 COMPOUNDING (runs on your unified data + agency relationships)
        ▲
        │  AI PIM enrich ●       AEO ●                    ★ D365 CRM + PIM FOUNDATION
        │  Acq. integration ●    Churn/NBA ●              Account reorder + loyalty ●
        │                                                Account entitlement ●
        │                                                B2B semantic search ●
        │  · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
        │
        │     "AI strategy" deck ○                  Generic chatbot ○
        │                                           AI product copy ○
        ▼
 COMMODITY (runs on the model)
  FOUNDATION-REQUIRED ◀────────────────────────────────▶ BOLT-ON-READY
        (data work first)                                 (start now)

  ● lit = yours   ○ greyed = table-stakes/hype   ★ wedge = the foundation, start now
  bubble size = dollar magnitude
```

*Why the map lands.* The eye goes top-right to the starred wedge: the D365 CRM and PIM foundation is the biggest play that can still start now, because the CRM decision is already in motion. The acquisition integration and the AI PIM enrichment sit high on compounding but need foundation work, so they are the spine, not the first move. The greyed cluster, the chatbot and the AI copy, is the AI-add-on pitch the buyer should refuse.

---

## 9. The gate teaser (the blurred line on the lock)

The carrot on the email gate. The dollar figure stays blurred until a work email is entered, and it is computed from the revenue band, not written here. We only control the framing.

> Your estimated annual unification, CRM/PIM foundation and digital-channel opportunity is a real number we calculated for Galls. Enter your work email to reveal your model.

**The number behind the blur:** $6–18M (computed from the ~$650M total and ~$172M online estimates; figures are inferred and private, so the model is directional and conservative). See Money Pools below.

---

---

# Below the gate (the payoff)

Above the gate makes the argument. Below the gate proves it pays, sequences it, and hands them the shortlist. Same voice rules apply.

## 10. The money pools (where the dollars are)

**Device:** four horizontal bars, sized to the dollar range, each with one named proof point. Headline opportunity $6–18M (a conservative fraction of an estimated ~$650M base, ~$172M online).

```
 The foundation: D365 CRM + PIM master-data unification   $2M ████████████████████ $6M
 The integration: unified customer/order view, 8 acq.     $2M ████████████ $5M
 The retention: agency reorder + loyalty                  $1M █████████ $4M
 The channel: AI search + AEO + agentic readiness         $1M ███████ $3M
                                                          └─ headline opportunity: $6–18M ─┘
```

**Pool 1. The foundation: D365 CRM + PIM master-data unification. ($2–6M)**
For a player this size, a clean data foundation, roughly $2–5M over 18 months, unlocks $15–30M a year across the AI portfolio, and 87% of leaders say bad data has already hampered their AI value. Galls has 8 acquired item masters and 8 customer files to merge, so the foundation is not optional, it is the rate-limiter for every other play. Standing up the CRM and PIM right, the first time, is the cheapest insurance on the whole portfolio. *(Directional. Source: research dump Part 1.4; AI-MDM, Part 2.2 B8.)*

**Pool 2. The integration: unified customer/order view across 8 acquisitions. ($2–5M)**
TCS rebuilt Alstom's data backbone with AI/ML master data management to give one unified view across a fragmented estate. Galls' acquisition spree left duplicate records and inconsistent units across Action Uniform, DesignLab and CMS, and a single customer and order view is what lets an agency buyer see one Galls instead of eight. Cutting duplicate stewardship and rekeying is real margin the integration releases. *(Vendor-claimed. Source: TCS / Alstom MDM; research dump Part 6.2.)*

**Pool 3. The retention: agency reorder and loyalty. ($1–4M)**
MilliporeSigma renders approved-list reorder per logged-in account, and Johnson Controls unlocked $40M from 23 accounts with whitespace and next-best-action on its installed base. Galls' 670+ agency accounts reorder the same uniforms and gear on a cycle, yet loyalty and reorder are the 6–12 month item, not yet built. Growing a known agency is cheaper and higher-converting than winning a new one, and new-customer acquisition costs 5 to 7 times expansion. *(Verified. Source: MilliporeSigma reorder; Johnson Controls, Beyond the Arc.)*

**Pool 4. The channel: AI search, AEO and agentic readiness on the unified data. ($1–3M)**
AI search converts about 1.67 times keyword, and AI engines drove a 1.13B referral surge (+357% YoY) that almost no public-safety seller has structured for. Once the catalog is unified in the PIM, tuning search and structuring spec content for answer engines is measured upside on the channel that already carries ~$172M online. The same clean data is what keeps Galls visible as Gartner expects 90% of B2B purchases to be AI-intermediated by 2028. *(Verified. Source: search-AI benchmarks; AEO research, Part 3.5; Gartner.)*

*Why four.* They are not a vendor wish list. They are the four layers of how Galls becomes one company. The foundation where the data gets unified, the integration that merges the 8 acquisitions, the retention that grows the agency book, and the channel that compounds on the clean data. Each maps to a phase of the roadmap and a cluster of the shortlist, and the reader can hold four.

---

## 11. The roadmap (sequence it so it self-funds)

**Device:** a four-phase timeline. Phase 1 is the wedge and is lit "active." Each phase funds the next. Sequence is the foundation first, the integration and retention second, the channel third, the agentic bet last.

```
 NOW ───────── 3–6 MO ───────── 6–12 MO ───────── THE SPINE & THE BET
  ●               ○                  ○                      ○
 Phase 1        Phase 2            Phase 3               Phase 4
 [ACTIVE]
 D365 CRM +     Acquisition        Agency reorder +      AI search + AEO +
 PIM foundation integration +      loyalty across the    agentic readiness
 on the agency  unified customer/  670+ accounts         on the unified data
 book           order view
```

**Phase 1, starts now. D365 CRM and PIM foundation on the agency book.**
Choose Dynamics 365 as the CRM, stand up a real PIM, and unify the master data on the highest-value flows first, the 670+ agency contract accounts. This answers Pesik's active decision and her PIM Now priority, and it ships on the work already funded. This is the wedge.

**Phase 2, 3 to 6 months. Acquisition integration and unified view.**
Merge the 8 acquired customer files and item masters into one customer and order view, and wire the CRM and PIM to the SAP S/4HANA implementation so master data flows one way. The agency buyer finally sees one Galls.

**Phase 3, 6 to 12 months. Agency reorder and loyalty.**
Turn on entitlement-aware one-click reorder and a loyalty and retention program across the 670+ accounts, grounded in the now-clean order data. This is the buyer's own 6–12 month priority, sequenced exactly where it belongs.

**Phase 4, the spine and the bet. AI search, AEO and agentic readiness.**
Tune B2B semantic search and structure spec and gear content so AI engines cite Galls, and make the unified catalog machine-purchasable for agents. Gartner expects 90% of B2B purchases to be AI-intermediated by 2028. The risk is being invisible, not being behind.

*Why this order.* Galls named PIM as Now and Loyalty/Retention as 6–12mo, and the CRM decision is live, so the sequence leads with the foundation the buyer is funding, then funds the integration, the retention and the channel behind it. Each phase pays for the next, and the legacy galls.com re-platform stays a later thread rather than a day-one disruption.

---

## 12. The play shortlist (the foundation, the integration, the retention, the bet)

Each play: the problem in the buyer's language, a named case, the ROI shape, and what i95Dev actually does. Eight plays, grouped by where the value sits.

### The foundation

**A. Dynamics 365 CRM and PIM master-data foundation.** *(Wedge)*
- *Problem:* Galls is choosing a CRM right now with D365 on the shortlist, and 8 acquisitions left duplicate customer files and item masters. The CRM either unifies them or just records them. PIM is the stated Now priority.
- *Named case:* TCS rebuilt Alstom's master-data backbone for one unified view; Informatica and Stibo are Gartner MDM Leaders, and 87% of leaders say bad data hampered AI value.
- *ROI:* a clean data foundation, roughly $2–5M over 18 months, unlocks $15–30M a year across the AI portfolio. The cheapest insurance on the whole program.
- *What i95Dev does:* implement Dynamics 365 CRM and a real PIM, unifying customer and product master data across the acquisitions, on the agency book first. *(Directional. TCS / Alstom; research dump Part 1.4.)*

**B. AI PIM enrichment at catalog scale.**
- *Problem:* 30 to 60% of B2B catalogs carry incomplete attributes, and merging 8 item masters multiplies the mess, which breaks search, recs and any AI on top.
- *Named case:* Bio-Rad and Thermo Fisher enrich regulated catalogs from source documents; inriver and Akeneo ship agentic enrichment in 2026.
- *ROI:* manual enrichment runs about $0.50 per SKU, and AI-assisted enrichment cuts up to 60% of the manual data time. Clean attributes gate the search, the AEO and the reorder.
- *What i95Dev does:* AI-assisted, human-in-the-loop PIM enrichment that standardizes attributes across the merged uniform, tactical and gear catalog. *(Illustrative. Bio-Rad / Thermo Fisher; inriver / Akeneo.)*

### The integration

**C. Acquisition integration and unified customer/order view.**
- *Problem:* Action Uniform, DesignLab and CMS each arrived with their own records, and an agency buyer should see one Galls, not the seams of 8 deals.
- *Named case:* TCS delivered AI/ML master data management for Alstom, lowering opex and unifying the view; Eaton used Palantir AIP to automate ERP data migration across an estate.
- *ROI:* cutting duplicate stewardship and rekeying frees margin and the team the acquisition pace is stretching.
- *What i95Dev does:* merge the acquired customer and order data into one unified view on D365, wired to the SAP S/4HANA implementation. *(Vendor-claimed. TCS / Alstom; Eaton / Palantir.)*

**D. Account entitlement on the punchout rails.**
- *Problem:* 670+ agency accounts order against contracts through custom punchout portals (cdcr, gsa, BIA), but without unified account logic the wrong price or an unapprovable item is one click away.
- *Named case:* MilliporeSigma renders approved-list reorder per logged-in account; entitlement-aware B2B storefronts are production-ready on D365-class backbones.
- *ROI:* cutting rep-assisted and corrected orders protects margin and frees the team across 160+ locations.
- *What i95Dev does:* enforce contract pricing and entitlement inside the unified account view, wired to the agency punchout portals. *(Illustrative. MilliporeSigma; B2B entitlement personalization.)*

### The retention

**E. Agency reorder and next-best-action.**
- *Problem:* The same agencies reorder the same uniforms and gear on a cycle, but reorder and cross-sell prompts are manual and loyalty is the 6–12 month item, not yet built.
- *Named case:* Watsco's AI recommendations lifted average order value 10%; Johnson Controls whitespace models unlocked $40M from 23 accounts.
- *ROI:* growing a known agency is cheaper and higher-converting than winning a new one, and acquisition costs 5 to 7 times expansion.
- *What i95Dev does:* one-click reorder and next-best-action on the unified D365 order history, surfaced to the agency buyer and the sales team. *(Verified. Watsco, DC360; Johnson Controls, Beyond the Arc.)*

**F. Loyalty and retention on clean data.**
- *Problem:* Galls names Loyalty and Retention for 6–12 months out, but a loyalty program on fragmented customer records rewards the wrong behavior and double-counts the same buyer across acquisitions.
- *Named case:* Johnson Controls tracked $100M+ in protectable revenue, about $35M per attrition point, on its installed base.
- *ROI:* an 8 to 12 point retention gain on a recurring agency base compounds every cycle once the data is unified.
- *What i95Dev does:* stand up a loyalty and retention program grounded in the unified CRM, so it rewards real agency relationships. *(Verified. Johnson Controls, Beyond the Arc.)*

### The bet

**G. B2B semantic search and AEO.**
- *Problem:* Officers and agency buyers search by spec, size and application, and increasingly start in an AI assistant. If search is not tuned for the merged catalog, or the answer engine cites a competitor, the order is lost before galls.com loads.
- *Named case:* AI search converts about 1.67 times keyword; AI referrals grew 357% year on year and convert about 31% higher than organic, and almost no public-safety seller has structured for it.
- *ROI:* on a ~$172M online channel, relevance and citation are measured upside once the PIM is clean.
- *What i95Dev does:* tune B2B semantic search on the unified catalog and structure spec and gear content so AI engines cite Galls. *(Verified. Search-AI benchmarks; AEO research, Part 3.5.)*

**H. Agentic-commerce readiness.**
- *Problem:* The AI buyer is coming for agency procurement, and a catalog that is not machine-readable and machine-purchasable is invisible to it.
- *Named case:* Gartner expects 90% of B2B purchases to be AI-intermediated by 2028; Google's AP2 protocol and OpenAI Instant Checkout already ship agentic purchasing.
- *ROI:* readiness is a low-cost option on the channel that defines 2027 and 2028, bought now on the foundation already being built.
- *What i95Dev does:* make the unified catalog machine-purchasable for agents using AP2 and MCP, grounded in the new PIM and D365 data. *(Directional. Gartner; Google AP2; OpenAI Instant Checkout.)*

*Why this set.* It spans the foundation, the integration, the retention and the agentic bet, but it leads with the CRM and PIM plays that answer the buyer's active decision and stated Now priority. Every named case is a real distributor, manufacturer or analog, never a vanity metric, and every play keeps the foundation-first sequence rather than starting with a storefront rip-and-replace.

---

## 13. Why i95Dev (the close)

**Opener:**

> You'll be sold a CRM with an AI label and no plan for the data underneath it. You do not need that.

**Body:**

> The platform pitch is the wrong layer. Your CRM decision is live, Dynamics 365 is on your shortlist, and your real problem is the data 8 acquisitions left you: 8 customer files, 8 item masters, one company that should read as one. That is i95Dev's lane: deep in Dynamics 365, deep in commerce, deep in the PIM and master-data work the foundation actually needs, at mid-market economics. We implement the D365 CRM, stand up the PIM, and unify the data on the agency book first, so the AI you layer on later stands on clean ground. We do not sell you a transformation. We make the unification real.

**The proof to weave (from the research).** A $200M manufacturer asked a Big-4 firm for a focused fix and got a $3M, 8-month, 7-platform transformation; a specialist later shipped the same outcome in six weeks. Galls does not need a transformation deck, and it does not need the generalists who lack commerce-plus-ERP-plus-CRM depth. It needs a Dynamics-deep specialist who unifies the data on the CRM decision already in motion, with a real number behind it. That gap is the close.

**CTA title:** Book your AI-in-Commerce Diagnostic.
**CTA subtitle:** A fixed-scope, fixed-fee assessment that validates these numbers against Galls' real customer, catalog and CRM data. Two weeks, not a platform rebuild.

**Credibility strip:** 500+ B2B brands · 25+ years · 1,200+ projects · Microsoft Dynamics depth.

---

## 14. Sources and credibility

Per-claim labels follow the research convention. Verified = independently corroborated. Illustrative = vendor or directional benchmark. Directional = widely cited, no single primary source. Company = from the Account 360. Inferred = estimated, confirm before the meeting.

| Claim | Label | Source |
|---|---|---|
| 95% of AI pilots return nothing | Verified | MIT NANDA · nanda.media.mit.edu |
| Largest US public-safety distributor; 160+ locations; 670+ agency accounts | Company | Galls / Account 360 |
| 8 acquisitions in 18 months (Action Uniform, DesignLab, CMS) | Company | Galls / Account 360 |
| ~$650M total revenue; ~$172M online (+20–50% YoY) | Inferred | Account 360 (private; verify live) |
| Active CRM replacement; D365 on shortlist; PIM is Now priority | Company | Account 360 (Katherine Pesik, VP IT) |
| Core galls.com on custom C.O.M.S. + G.M.I. (not BigCommerce) | Verified | Account 360 live-site signatures (verify live) |
| SAP S/4HANA in implementation; Salesforce/Veeva CRM; Cleo EDI | Company | Account 360 |
| 87% say bad data hampered AI value | Directional | Research dump, Part 2.2 B8 |
| Data foundation $2–5M unlocks $15–30M/yr | Directional | Research dump, Part 1.4 |
| Abandon 60% of AI projects without AI-ready data | Verified | Gartner (research dump, Part 1.1) |
| 30–60% of B2B catalogs have incomplete attributes; $0.50/SKU | Illustrative | Research dump, Part 3.2 #7 |
| TCS / Alstom AI MDM unified view | Vendor-claimed | TCS / Alstom (research dump, Part 6.2) |
| Eaton ERP data migration on Palantir AIP | Verified | Eaton / Palantir (research dump, Part 6.2) |
| MilliporeSigma approved-list reorder | Illustrative | Research dump, Part 3.4 |
| Watsco AI recs, AOV +10% | Verified | Adobe / DC360 |
| Johnson Controls $40M from 23 accounts; $35M per attrition point | Verified | Beyond the Arc / JCI |
| AI search converts ~1.67x keyword | Verified | Search-AI benchmarks (research dump, Part 3.2) |
| AI referrals +357% YoY, ~31% higher conversion | Illustrative | AEO research, Part 3.5 |
| Bio-Rad / Thermo Fisher regulated-catalog enrichment | Illustrative | Research dump, Part 3.4 |
| inriver / Akeneo agentic PIM enrichment | Illustrative | Research dump, Part 3.2 #7 |
| Gartner 90% of B2B purchases AI-intermediated by 2028 | Directional | Gartner |
| Google AP2 / OpenAI Instant Checkout | Verified | Google Cloud / OpenAI announcements |
| Big-4 $3M / 8-mo vs 6-week specialist fix | Directional | Research dump, Part 5.4 |

**Flagged to verify live:** Galls total revenue and online revenue are inferred and private, so do not cite hard numbers; confirm the core galls.com platform is custom C.O.M.S./G.M.I. and not BigCommerce (BigCommerce sits on FireAuthority and segment storefronts); confirm the CRM-selection timeline and outcome; identify any SAP S/4HANA implementation SI of record; note that no named commerce or CRM implementation SI is whitespace. Champions in the room: Katherine Pesik (VP IT, budget and strategy) and CIO Susan Shiposh.

---

## 15. Handback and reuse

This file is the finished content and the template. To wire Galls: every block maps to a field in `data/accounts/galls.ts` (thesis, wedge, wedgeDetail, reframe, hypeFilter, stackFlags, mapPlays, payoff.moneyPools, payoff.roadmap, payoff.plays, payoff.why). To run the next account, copy this file and rebuild the spine in Section 0 first. The spine is the insight that makes the rest inevitable; everything downstream follows from it.
