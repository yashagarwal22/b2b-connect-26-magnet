# Schneider Electric: Enterprise AI + Commerce Advisory Spec

**Account:** Schneider Electric · **Vertical:** Energy management / industrial automation
**Prepared by:** i95Dev · **Source basis:** Account 360 (Jun 2026) + B2B Connect 2026 AI research dump
**Status:** Final content. Every field below is finished copy, not a fill-in. It maps 1:1 to `data/accounts/schneider.ts` and drops into the build with no rewriting.

> **What this document is.** A complete, advisory-grade content spec for the Schneider Electric lead-magnet report, built from scratch off the Account 360. It carries the finished copy for the whole page (above and below the email gate), the rationale behind each line, and the graphics that replace prose with a picture. The benchmark for every word is Sequoia's *Services: The New Software*: one argument, one axis, a handful of load-bearing facts. The spec is also the reusable template. To run the next account, copy this file and rebuild the spine first.

---

## 0. The spine (read this first)

Everything below hangs on one insight about Schneider's situation, drawn straight from the Account 360.

**Schneider does not need another transformation. It needs one contained project shipped.** It is a €40.2B industrial leader, and its own CEO, Olivier Blum, says legacy systems and fragmented data "hold back progress." The Big-4 and global SIs already own the broad transformation. The durable move for i95Dev is not to compete for the €100M program. It is to win the one thing the buyer actually came asking for.

The buyer is Myca van Dijk, mySchneider Digital Product Leader for North America, with 3/3 authority on the committee. She came to the conference asking for one specific thing: site search and personalization, named to the vendor level as Coveo and HawkSearch.

mySchneider is the portal that serves 40,000+ partners. That is the surface where a search-and-personalization win is felt by the whole channel, and it is a surface no Deloitte deck is scoped to fix in a quarter.

The technical wedge is real, not invented. Schneider's CPQ runs on Pierce Washington's Combinum configurator, and Combinum natively integrates Microsoft Dynamics 365 Sales, which is i95Dev's core. The entry has a rail already in the building.

So the strategic question is not "should Schneider run a bigger transformation." It is "who ships Myca's search-and-personalization project fast, on the Combinum-to-Dynamics rails Schneider already runs." Answer it, and the 40,000-partner portal proves a number before any broader engagement. Miss it, and the project goes to a generalist who scopes it as a multi-year deck. The win here is surgical, not transformational.

That spine runs through the thesis, the wedge, every module, and every play.

---

## 1. The fixed facts (confirmed from the Account 360)

| Field | Value | Notes for the build |
|---|---|---|
| Company name | Schneider Electric | HQ Rueil-Malmaison, France; competitors Siemens, ABB |
| Vertical label | Energy management / industrial automation | Two segments + AVEVA software + EcoStruxure IoT |
| Revenue band | €40.2B FY2025 (+9% organic) | EBITA margin 18.7%; Q1 2026 record €9.8B (+11.2%), data-center-led. Drives the gated $ math |
| Buyer we write to | mySchneider Digital Product Leader, NAM | Myca van Dijk (champion), 3/3 authority; economic context via CDO Peter Weckesser |
| Role emphasis | `ecommerce` | mySchneider portal, site search, personalization |
| Active requirement | Yes | Budget "several million; depends on the year." Now: Personalization. 6–12mo: Customer Insights, AI/ML, Loyalty/Retention, Pricing |
| Domains (email match) | se.com | 40,000+ partners on mySchneider; punchout |

**The triggers we lean on.** A named buyer ask, a portal at channel scale, and a Dynamics rail already in the building.

1. **A stated, vendor-named ask.** Myca van Dijk came to the conference for "Hawk Search, Coveo," with Personalization listed as a Now priority. The shopping list is the project, scoped by the buyer herself.
2. **A 40,000-partner portal under pressure.** mySchneider is the channel surface, and Software & Services is 19% of revenue against a ~25% target by 2030. The portal is where digital growth is supposed to come from.
3. **A Dynamics 365 rail already running.** Combinum CPQ natively integrates Microsoft Dynamics 365 Sales, and Schneider also runs Dynamics 365 SCM. The backbone for i95Dev's entry is in the house.

**The data the win runs on.** Schneider already owns the partner data on mySchneider and the Combinum-to-Dynamics 365 Sales integration. The asset is the partner relationships and the CPQ rail, not a system still to be bought.

**The guardrail (do not break).** This is a contained, buyer-named project, not a transformation pitch. Avoid the broad-transformation frame the SIs own. Lead with search and personalization for mySchneider, use the D365/Combinum integration as the credible technical wedge, and keep the first project small and fundable.

**One thing to verify live.** Confirm the se.com site-search vendor in the room (Coveo vs HawkSearch). The live front end renders on Builder.io (cdn.builder.io pixels in the markup), so confirm the DXP and the lead build agency before the meeting. Name the big SIs that own the broad program (Deloitte, Accenture, Capgemini, Kyndryl) without competing for it on the page.

---

## 2. Voice rules (the bar for every line)

Hold every line to these. They are the difference between advisory content and AI slop.

- **Aphoristic, contrastive openers.** "A transformation is a deck. The buyer asked for a search bar that works."
- **A name on every claim.** Combinum, Dynamics 365, Coveo, HawkSearch, Builder.io, Blum, Weckesser, van Dijk. No floating assertions.
- **One load-bearing stat per idea.** A single number, dropped where it lands hardest. Never a wall of figures.
- **Reframes that flip intuition.** "In a company this size, the win is surgical. The biggest move is the smallest project, shipped."
- **Economy.** One to three sentence paragraphs. If a word can go with no loss, cut it.
- **No AI tells.** No em-dashes. Periods, colons, commas only. En-dashes live in numeric ranges ($15–45M).
- **It is about them.** Lead with what Schneider owns and what a generalist SI cannot scope.

| Write this | Not this |
|---|---|
| "The buyer named the project: search and personalization for mySchneider." | "We enable end-to-end digital experience transformation." |
| "Ship it on the Combinum-to-Dynamics rails you already run." | "Leverage synergies across the integrated technology landscape." |
| "Start on 40,000 partners. Prove a number before anything broader." | "Embark on a holistic enterprise modernization journey." |

---

## 3. The thesis (line one of the report)

Shows huge at the top. The one sentence the reader can repeat to a colleague. Target 8–16 words.

> **You don't need a transformation. You need search and personalization shipped on mySchneider.**

*Why this line.* It refuses the frame the SIs own, names the exact surface the buyer cares about (mySchneider), and reframes a €40B company's AI question as one contained, fundable project rather than a multi-year program. Repeatable, and about them.

---

## 4. The wedge (the one play they start with)

The compounding play they can start without fixing everything first: high value, runs on data they already own, fast to prove, self-funds the rest.

- **Wedge label:** Search and personalization for mySchneider, on the Combinum-to-Dynamics 365 rails you already run.
- **Wedge detail:** It runs on the partner data and the CPQ-to-Dynamics integration Schneider already owns, it is the buyer's literal ask (Coveo or HawkSearch plus personalization), it is a contained, fundable first project the big SIs are not built to scope, and it proves value on the 40,000-partner portal before any broader engagement. Prove it on mySchneider search and account-based personalization, then extend the same intelligent rails into guided selling and pricing.

*Why this one.* It is the only play that is simultaneously the most wanted (the buyer named it to the vendor level), the highest-trust (it runs on partner data Schneider already owns and a Dynamics rail Combinum already integrates), bolt-on-ready in its first cut (mySchneider search and personalization ship without waiting for a re-platform), and exactly the contained scope the Big-4 cannot price profitably. It also sets up everything else: search needs clean product data, personalization needs account entitlement, and both ride the Combinum-Dynamics integration that the guided-selling and pricing plays extend.

---

## 5. Module 1: The Reframe

**Device:** one arresting stat plus the thesis setup. **Purpose:** everyone is selling Schneider a transformation; the win is one contained project on rails it already owns.

- **Opener:** A transformation is a deck. The buyer asked for a search bar that works and a portal that knows the partner.
- **Stat:** `95%`
- **Stat label:** of enterprise AI pilots return nothing to the P&L.
- **Stat source:** MIT NANDA, ~95% of pilots · `https://nanda.media.mit.edu/`
- **Body:**

> 95% of enterprise AI pilots return nothing to the P&L. They sit beside the work instead of inside it. Schneider's work, on the channel surface, is mySchneider: 40,000+ partners who need to find the right product and see the right price. The edge is not a broader transformation. It is shipping the search and personalization the buyer named, on the Combinum-to-Dynamics 365 rails you already run, so the win lands on the portal in a quarter, not a deck in a year.

*Why it works.* The 95% MIT NANDA figure is the most quotable credibility stat in the category, and its failure cause is the last mile, not the model. The body refuses the transformation frame, restates the real surface (mySchneider and its 40,000 partners), and ends on the two assets only Schneider holds here: the partner data and the Combinum-Dynamics rail.

---

## 6. Module 2: The Hype Filter

**Device:** a two-column cut. Left, commodity you rent (table-stakes or actively harmful). Right, compounding you own (defensible, runs on Schneider's partner data and the Combinum-Dynamics rail). Then a single pitch-warning bar. Exactly four per column, parallel and concrete.

- **Opener:** A transformation deck dresses up the org chart. A shipped project makes mySchneider search and price right, on rails the SIs cannot copy.

| Commodity · rent it | Compounding · own it |
|---|---|
| A chatbot bolted onto se.com | B2B semantic search tuned for partner intent |
| Generic recs that ignore partner tier | Account-based personalization on mySchneider |
| A €100M transformation program deck | A contained, fundable mySchneider project, shipped |
| Yet another platform displacing Dynamics | Guided selling on the Combinum-to-D365 rail you own |

- **Pitch warning:**

> You run Microsoft Dynamics 365, and Combinum already integrates it natively. Expect a pitch to wrap this in a multi-year transformation with a seven-figure discovery phase. Do not. The buyer named one project: search and personalization for mySchneider. Ship that first, on the rails you already own, and let the 40,000-partner portal prove a number before anyone scopes anything broader.

*One fact worth weaving from the research.* The cautionary tale is the over-scope: a $200M manufacturer asked a Big-4 firm for a focused fix and got a $3M, 8-month, 7-platform transformation, while a specialist later shipped the same outcome in six weeks. Schneider can absorb a big program, but the buyer's ask is small and specific, and the fastest path to trust is shipping it. Keep this for the live conversation; the four-bullet grid stays clean.

---

## 7. Module 2.5: Your Stack (the "we read your stack" infographic)

**Device:** a scannable signal → unlock → trap table, one row per system Schneider actually runs. Each trap line respects the guardrail: ship the contained project, do not displace the backbone.

| Signal (system you run) | The play it unlocks | What you'll be pitched instead |
|---|---|---|
| Combinum CPQ (native D365 Sales integration) | Run guided selling and quoting on the Dynamics rail Combinum already integrates | A new CPQ platform. You own the rail; build on it. |
| Microsoft Dynamics 365 (Sales + SCM) | Wire personalization and pricing to the backbone, not a parallel stack | A platform that displaces D365. Extend it, don't replace it. |
| mySchneider portal (40,000+ partners) | Tune search and account-based personalization on the channel surface | A full portal re-platform. Ship search and personalization first. |
| Coveo / HawkSearch (the buyer's named ask) | Tune semantic search for the spec and SKU queries partners type | A rip-and-replace search bolt-on. Tune the vendor she named. |
| Stibo PIM (integrator CGI) | Ground search and recs in clean product data already governed in Stibo | "Add AI copy." The PIM is the foundation; tune to it, don't bypass it. |

*Why these rows.* Each system is confirmed in the Account 360, and each maps to a play below. The trap column names the transformation pitch before a competitor makes it, and every line keeps the contained project in front while riding the Combinum-Dynamics rail Schneider already runs.

---

## 8. Module 3: The Commodity vs Compounding Map

**Device:** the signature 2×2. **Y axis:** Commodity (runs on the model) to Compounding (runs on your partner data and the Combinum-Dynamics rail). **X axis:** Foundation-required (needs data work first) to Bolt-on-ready (start now). Each play is a bubble; **bubble size = dollar magnitude.** The **wedge is the starred bubble, top-right.** Schneider-relevant plays are lit; the hype pitches greyed.

**Map intro line:**

> We mapped Schneider's world. The lit bubbles pay for an industrial leader whose buyer named one project, sized by the dollars on the table. The greyed ones are the transformation deck.

**The plays and coordinates** (compounding 0–1, bolt-on 0–1, magnitude 1–5):

| Play | Compounding | Bolt-on | Magnitude | Lit (yours) | Wedge |
|---|---|---|---|---|---|
| Search + personalization (mySchneider) | 0.86 | 0.78 | 5 | yes | ★ |
| Guided selling on Combinum-D365 | 0.88 | 0.60 | 5 | yes | |
| Pricing / RGM enforcement | 0.90 | 0.45 | 4 | yes | |
| Account entitlement + contract pricing | 0.82 | 0.62 | 4 | yes | |
| B2B semantic search (Coveo/HawkSearch) | 0.72 | 0.80 | 4 | yes | |
| AI PIM grounding (Stibo) | 0.80 | 0.40 | 3 | yes | |
| Agentic bulk-order intake | 0.92 | 0.42 | 3 | yes | |
| AEO for spec content | 0.84 | 0.62 | 3 | yes | |
| Generic chatbot | 0.14 | 0.90 | 1 | no | |
| AI product copy | 0.12 | 0.80 | 1 | no | |
| "Transformation" program deck | 0.22 | 0.18 | 1 | no | |

**Text rendering of the quadrant** (for reviewers without the live chart):

```
 COMPOUNDING (runs on your partner data + Combinum-D365 rail)
        ▲
        │  Agentic intake ●     Guided selling ●          ★ SEARCH + PERSONALIZATION
        │  Pricing / RGM ●      AEO ●                     (mySchneider, start now)
        │  AI PIM (Stibo) ●     Account entitlement ●     B2B semantic search ●
        │
        │  · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
        │
        │  "Transformation" deck ○              Generic chatbot ○
        │                                       AI product copy ○
        ▼
 COMMODITY (runs on the model)
  FOUNDATION-REQUIRED ◀────────────────────────────────▶ BOLT-ON-READY
        (data work first)                                 (start now)

  ● lit = yours   ○ greyed = table-stakes/hype   ★ wedge = the buyer's named project, start now
  bubble size = dollar magnitude
```

*Why the map lands.* The eye goes top-right to the starred wedge: search and personalization is the biggest play that can still start on mySchneider now, because it rides the partner data and the Combinum-Dynamics rail already in hand. Guided selling and pricing sit high on compounding but lean on the same rail and a foundation, so they are the expansion, not the first move. The greyed cluster, the chatbot and the transformation deck, is what the buyer should refuse.

---

## 9. The gate teaser (the blurred line on the lock)

The carrot on the email gate. The dollar figure stays blurred until a work email is entered, and it is computed from the revenue band, not written here. We only control the framing.

> Your estimated annual search, personalization and guided-selling opportunity on the partner portal is a real number we calculated for Schneider. Enter your work email to reveal your model.

**The number behind the blur:** $15–45M (a conservative fraction of the partner-portal commerce base, sized as a contained opportunity, not the €100M program). See Money Pools below.

---

---

# Below the gate (the payoff)

Above the gate makes the argument. Below the gate proves it pays, sequences it, and hands them the shortlist. Same voice rules apply.

## 10. The money pools (where the dollars are)

**Device:** four horizontal bars, sized to the dollar range, each with one named proof point. Headline opportunity $15–45M, a conservative fraction of the partner-portal commerce base, scoped as contained rather than the broad program.

```
 Search + personalization on mySchneider             $6M ████████████████████ $18M
 Guided selling / CPQ acceleration (Combinum-D365)    $4M ██████████████ $13M
 Pricing / RGM enforcement                            $3M ██████████ $9M
 AI / agentic readiness on the portal                 $2M █████ $5M
                                                      └─ headline opportunity: $15–45M ─┘
```

**Pool 1. Search and personalization on mySchneider. ($6–18M)**
AI search converts about 1.67 times keyword, and account-based personalization can lift revenue meaningfully on a logged-in portal. mySchneider serves 40,000+ partners, so a relevance and personalization lift on the channel surface is the buyer's named project and the largest line in the model. On a partner portal this size, a few points of recovered conversion is real money on the channel that already carries orders. *(Verified. Source: Search-AI benchmarks; B2B account-based personalization, research dump Part 3.2 and 3.6.)*

**Pool 2. Guided selling and CPQ acceleration. ($4–13M)**
Schneider's own breaker configuration runs in roughly 90 seconds against a 72-hour manual quote, and Salesforce estimates 15 to 30% of complex-B2B revenue is lost to config errors and quote delays. Combinum already integrates Dynamics 365 Sales, so guided selling extends the rail Schneider runs rather than adding a platform. Faster, valid configuration closes more orders and protects margin where a 24-hour quote wins and a 72-hour quote loses. *(Illustrative. Source: Schneider breaker config, research dump Part 3.4; Salesforce CPQ economics.)*

**Pool 3. Pricing and RGM enforcement. ($3–9M)**
Pricing is on Schneider's 6–12 month list, and McKinsey reports a 2 to 6% gross-margin lift from AI-native B2B pricing. The B2B win is enforcing what is already negotiated across the partner book, not consumer-style dynamic pricing. On a base this size, even a sliver of margin recovery on the channel is a near-pure drop-through to EBITA. *(Illustrative. Source: McKinsey B2B pricing; research dump Part 4.1.)*

**Pool 4. AI and agentic readiness on the portal. ($2–5M)**
Schneider's own Azure copilot with Microsoft cut engineering time roughly 50%, weeks to hours, so the appetite for real AI is proven. Turning partner bulk and quote requests into structured, validated orders is value now, and the same readiness keeps Schneider visible as Gartner expects 90% of B2B purchases to be AI-intermediated by 2028. The risk on the portal is not being behind, it is being invisible. *(Directional. Source: Schneider Azure copilot, research dump Part 2.2; Gartner.)*

*Why four.* They are not a vendor wish list. They are the four layers of how a partner transacts on mySchneider. The discovery and personalization the buyer named, the guided selling that rides the Combinum-Dynamics rail, the pricing enforcement on the partner book, and the agentic readiness coming next. Each maps to a phase of the roadmap and a cluster of the shortlist, and the reader can hold four.

---

## 11. The roadmap (sequence it so it self-funds)

**Device:** a four-phase timeline. Phase 1 is the wedge and is lit "active." Each phase funds the next. Sequence is the buyer's named project first, guided selling second, pricing third, the agentic bet last.

```
 NOW ───────── 3–6 MO ───────── 6–12 MO ───────── THE EXPANSION & THE BET
  ●               ○                  ○                      ○
 Phase 1        Phase 2            Phase 3               Phase 4
 [ACTIVE]
 Search +       Guided selling     Pricing / RGM          Agentic intake +
 personali-     on Combinum-       enforcement on         AEO on the partner
 zation on      D365 rail          the partner book       portal at scale
 mySchneider
```

**Phase 1, starts now. Search and personalization on mySchneider.**
Tune semantic search (Coveo or HawkSearch, the buyer's named vendors) and stand up account-based personalization on the 40,000-partner portal, grounded in the Stibo product data. It runs on data you own and ships without waiting for anything broader. This is the wedge and the buyer's literal ask.

**Phase 2, 3 to 6 months. Guided selling on the Combinum-Dynamics rail.**
Extend guided selling and quoting on the Combinum-to-Dynamics 365 Sales integration Schneider already runs, taking the breaker-config speed advantage across more of the catalog. The portal gets faster to quote; the rail you own does the work.

**Phase 3, 6 to 12 months. Pricing and RGM enforcement.**
Stand up AI-native pricing enforcement across the partner book, on Schneider's stated 6 to 12 month Pricing interest, protecting margin on the channel rather than chasing consumer-style dynamic pricing.

**Phase 4, the expansion and the bet. Agentic intake and AEO.**
Turn partner bulk and quote requests into structured, validated orders, and structure spec content so AI engines cite Schneider for the selection. Gartner expects 90% of B2B purchases to be AI-intermediated by 2028. The risk is being invisible, not being behind.

*Why this order.* Schneider's buyer named search and personalization, and listed Pricing and AI/ML on the 6 to 12 month horizon, so the sequence leads with the wedge that ships fast, then funds guided selling, pricing and the agentic bet behind it. Each phase pays for the next, and none of it asks for the transformation the SIs own.

---

## 12. The play shortlist (the project, the rail, the margin, the bet)

Each play: the problem in the buyer's language, a named case, the ROI shape, and what i95Dev actually does. Eight plays, grouped by where the value sits.

### The project

**A. Search and personalization for mySchneider.** *(Wedge)*
- *Problem:* Partners on mySchneider need to find the right product fast and see the right price, and the buyer came to the conference naming Coveo and HawkSearch plus personalization as the priority.
- *Named case:* Dawn Foods added AI search and behavioral recs on commercetools and grew online at triple-digit rates with 30% faster time-to-order; AI search converts about 1.67 times keyword.
- *ROI:* on a 40,000-partner portal, a relevance and personalization lift is measured upside on the channel that already carries orders, and it is the largest pool in the model.
- *What i95Dev does:* tune the named search vendor for partner intent and stand up account-based personalization on mySchneider, grounded in Stibo product data. *(Verified. Dawn Foods, DC360; Search-AI benchmarks.)*

**B. Account-based personalization and entitlement.**
- *Problem:* 40,000+ partners order against tiers, contract pricing and roles, and a generic portal shows the wrong product or the wrong price, which costs trust and a rep call.
- *Named case:* MilliporeSigma renders approved-list reorder per logged-in account; entitlement-aware B2B storefronts are production-ready on Dynamics-class backbones.
- *ROI:* cutting rep-assisted and corrected orders protects margin and frees the channel team.
- *What i95Dev does:* entitlement, contract pricing and role-based personalization wired to the partner data and Dynamics 365. *(Illustrative. MilliporeSigma; B2B entitlement personalization.)*

### The rail

**C. Guided selling and conversational CPQ on Combinum-Dynamics.**
- *Problem:* Configuring Schneider's products is complex, and a slow or invalid quote loses the order; the configurator already runs on Combinum, which natively integrates Dynamics 365 Sales.
- *Named case:* Schneider's own breaker configures in roughly 90 seconds against a 72-hour manual quote; Salesforce estimates 15 to 30% of complex-B2B revenue is lost to config errors and quote delays.
- *ROI:* faster valid configuration closes more orders and protects margin, and a 24-hour quote wins where a 72-hour quote loses.
- *What i95Dev does:* AI-guided configuration and quoting on the Combinum-to-Dynamics 365 rail Schneider already runs, valid by construction. *(Illustrative. Schneider breaker config; Salesforce CPQ economics.)*

**D. Agentic bulk-order intake on the portal.**
- *Problem:* Schneider's largest partners place bulk and quote requests as emails, PDFs and spreadsheets, and the team rekeys them by hand.
- *Named case:* commercetools built a B2B intake agent for Mirion that turns exactly those documents into structured quotes; JPW Industries cut order processing from 16 to 24 hours to under one hour with AI order automation.
- *ROI:* structured intake removes manual rekeying and error on the channel's highest-volume partners.
- *What i95Dev does:* an AI intake agent that turns bulk-order documents into validated, structured orders on the Dynamics rail. *(Illustrative. commercetools / Mirion; JPW Industries, Salesforce.)*

### The margin

**E. AI pricing and RGM enforcement.**
- *Problem:* Schneider sells across a huge partner book with tiers and contracts, and managing optimal price across the catalog manually leaks margin; Pricing is on the buyer's 6 to 12 month list.
- *Named case:* McKinsey reports a $15B distributor lifted margin 200bps across 1.5M SKUs, then another 50bps with agentic AI in 10 weeks; McKinsey cites a 2 to 6% gross-margin lift from AI-native B2B pricing.
- *ROI:* even a sliver of margin recovery on a base this size is near-pure drop-through to the 18.7% EBITA line.
- *What i95Dev does:* AI pricing enforcement on the partner book, contract-compliance and margin floors wired to Dynamics, not consumer-style dynamic pricing. *(Illustrative. McKinsey B2B pricing; research dump Part 4.1.)*

**F. AI PIM grounding on Stibo.**
- *Problem:* Search, recs and the answer engines all run on product data, and dirty attributes make the AI confidently wrong; Schneider's PIM is Stibo, integrated by CGI.
- *Named case:* Stibo is a Gartner MDM Leader; Bio-Rad and Thermo Fisher enrich regulated catalogs from source documents with human-in-the-loop.
- *ROI:* clean product data gates the search, the personalization and the agentic intake. The cheapest insurance on the portfolio.
- *What i95Dev does:* AI enrichment and attribute standardization grounded in the Stibo PIM, human-in-the-loop, so every downstream play stands on clean data. *(Illustrative. Stibo, Gartner MDM; Bio-Rad / Thermo Fisher.)*

### The bet

**G. B2B semantic search and AEO.**
- *Problem:* Partners search by spec, SKU and application, and increasingly start in an AI assistant, so if search is not tuned or the answer engine cites a competitor, the order is lost before se.com loads.
- *Named case:* AI search converts about 1.67 times keyword; AI referrals grew 357% year on year and convert about 31% higher than organic, and almost no industrial seller has structured for it.
- *ROI:* on a catalog this technical, relevance and citation are measured upside on the channel that already carries orders.
- *What i95Dev does:* tune Coveo or HawkSearch for spec and SKU intent, and structure spec content so AI engines cite Schneider for the selection. *(Verified. Search-AI benchmarks; AEO research, Part 3.5.)*

**H. Agentic-commerce readiness.**
- *Problem:* The AI buyer is coming for industrial components, and a catalog that is not machine-readable and machine-purchasable is invisible to it.
- *Named case:* Gartner expects 90% of B2B purchases to be AI-intermediated by 2028; Google's AP2 protocol and OpenAI Instant Checkout already ship agentic purchasing in consumer commerce.
- *ROI:* readiness is a low-cost option on the channel that defines 2027 and 2028, bought now on a foundation you are already building.
- *What i95Dev does:* make the mySchneider catalog machine-purchasable for agents using AP2 and MCP, grounded in the Stibo data and Dynamics rail. *(Directional. Gartner; Google AP2; OpenAI Instant Checkout.)*

*Why this set.* It spans the buyer's named project, the Combinum-Dynamics rail, the margin play and the agentic bet, but it leads with the search-and-personalization plays the buyer asked for and that run on data Schneider already owns. Every named case is a real distributor, manufacturer or industrial analog, never a vanity metric, and every play extends the Dynamics rail rather than replacing the backbone.

---

## 13. Why i95Dev (the close)

**Opener:**

> You'll be sold a multi-year transformation by a firm built to scope multi-year transformations. The buyer asked for one project.

**Body:**

> The Big-4 and the global SIs own Schneider's broad program, and they are very good at it. They are not built to ship one contained, fundable project on the rails you already run. That is i95Dev's lane: deep in Dynamics 365, deep in commerce, surgical, at mid-market economics. Your buyer named search and personalization for mySchneider, your CPQ already integrates Dynamics 365 Sales through Combinum, and your partner data is already in the house. We ship the project the buyer asked for, on the rails you own, and prove a number on 40,000 partners before anyone scopes anything broader. We do not pitch the transformation. We ship the win that funds it.

**The proof to weave (from the research).** A $200M manufacturer asked a Big-4 firm for a focused fix and got a $3M, 8-month, 7-platform transformation; a specialist later shipped the same outcome in six weeks. Schneider can fund either, but the buyer's ask is small and specific, and the fastest path to trust is shipping it on the Combinum-Dynamics rail. That gap is the close.

**CTA title:** Book your AI-in-Commerce Diagnostic.
**CTA subtitle:** A fixed-scope, fixed-fee assessment that validates these numbers against mySchneider's real partner, catalog and Dynamics data. Two weeks, not a transformation program.

**Credibility strip:** 500+ B2B brands · 25+ years · 1,200+ projects · Microsoft Dynamics depth.

---

## 14. Sources and credibility

Per-claim labels follow the research convention. Verified = independently corroborated. Illustrative = vendor or directional benchmark. Directional = widely cited, no single primary source. Company = stated by Schneider or in the Account 360. Confirm flagged items before the meeting.

| Claim | Label | Source |
|---|---|---|
| 95% of AI pilots return nothing | Verified | MIT NANDA · nanda.media.mit.edu |
| €40.2B FY2025, +9% organic, 18.7% EBITA; Q1 2026 €9.8B | Company | Schneider / Account 360 |
| Software & Services 19% of revenue, ~25% target by 2030; AVEVA ARR +12% | Company | Schneider / Account 360 |
| Legacy systems / fragmented data "hold back progress" | Company | CEO Olivier Blum / Account 360 |
| mySchneider 40,000+ partners; punchout | Company | Schneider / Account 360 |
| Combinum CPQ natively integrates D365 Sales; D365 SCM | Company | Account 360 (Pierce Washington / Combinum) |
| Stibo PIM (integrator CGI); ChannelSight; Magento marketplace | Company | Account 360 |
| se.com front end on Builder.io | Inferred | Live se.com markup (cdn.builder.io); verify DXP live |
| Buyer Myca van Dijk, 3/3 authority, asked for Coveo / HawkSearch | Company | Account 360 / attendee database |
| Schneider breaker config ~90s vs 72h | Illustrative | Research dump, Part 3.4 |
| Schneider Azure copilot −50% engineering time, weeks to hours | Verified | Research dump, Part 2.2 |
| 15–30% of complex-B2B revenue lost to config errors | Illustrative | Salesforce CPQ; research dump Part 3.2 |
| AI search converts ~1.67x keyword | Verified | Search-AI benchmarks (research dump, Part 3.2) |
| AI referrals +357% YoY, ~31% higher conversion | Illustrative | AEO research, Part 3.5 |
| McKinsey 2–6% gross-margin lift from AI B2B pricing | Illustrative | McKinsey B2B pricing; research dump Part 4.1 |
| McKinsey $15B distributor +200bps then +50bps in 10 weeks | Illustrative | McKinsey distribution; research dump Part 4.1 |
| Dawn Foods AI search, triple-digit online growth, −30% time-to-order | Verified | commercetools / DC360 |
| MilliporeSigma approved-list reorder | Illustrative | Research dump, Part 3.4 |
| commercetools B2B Intake Agent (Mirion) | Illustrative | commercetools / DC360 |
| JPW Industries order time 16–24h to <1h | Illustrative | Salesforce / research dump |
| Stibo MDM Leader; Bio-Rad / Thermo regulated enrichment | Illustrative | Gartner MDM; research dump Part 3.4 |
| Gartner 90% of B2B purchases AI-intermediated by 2028 | Directional | Gartner |
| Google AP2 / OpenAI Instant Checkout | Verified | Google Cloud / OpenAI announcements |
| Big-4 $3M / 8-mo vs 6-week specialist fix | Directional | Research dump, Part 5.4 |

**Flagged to verify live:** confirm the se.com site-search vendor in the room (Coveo vs HawkSearch); confirm the se.com DXP (Builder.io seen in markup) and the lead build agency; confirm the Combinum-to-Dynamics 365 Sales integration is live in the NAM partner flow; name the big SIs that own the broad program (Deloitte, Accenture, Capgemini, Kyndryl) without competing for it on the page; confirm budget sizing for the year with CDO Peter Weckesser or CIO Elizabeth Hackenson.

---

## 15. Handback and reuse

This file is the finished content and the template. To wire Schneider: every block maps to a field in `data/accounts/schneider.ts` (thesis, wedge, wedgeDetail, reframe, hypeFilter, stackFlags, mapPlays, payoff.moneyPools, payoff.roadmap, payoff.plays, payoff.why). To run the next account, copy this file and rebuild the spine in Section 0 first. The spine is the insight that makes the rest inevitable; everything downstream follows from it.
