# Standard Textile: Enterprise AI + Commerce Advisory Spec

**Account:** Standard Textile · **Vertical:** Vertically-integrated textile manufacturer (healthcare, hospitality, DTC)
**Prepared by:** i95Dev · **Source basis:** Account 360 (Claude research, Jun 2026) + B2B Connect 2026 AI research dump
**Status:** Final content. Every field below is finished copy, not a fill-in. It maps 1:1 to a `data/accounts/standard-textile.ts` config and drops into the build with no rewriting.

> **What this document is.** A complete, advisory-grade content spec for the Standard Textile lead-magnet report, above and below the email gate, with the rationale behind each line and the graphics that replace prose. Benchmark: Sequoia's *Services: The New Software*. Same reusable template as ChemPoint and Bob Barker.

---

## 0. The spine (read this first)

Everything below hangs on one insight about Standard Textile's business, drawn straight from the Account 360.

**Standard Textile does not win on any single textile. It wins on vertical integration, the only company that runs yarn to finished goods as one system, and it has never given the customer side the same treatment.** Weaving, finishing and distribution run as one operation across 24 facilities in 12 countries. That integration is the moat. The product is replicable; the system that makes it is not.

The customer experience is the unfinished half. The B2B order to a hospital system, the contract price, the DTC purchase on Standard Textile Home, and the reorder history all sit in separate places, on an Oracle ERP and Salesforce Marketing Cloud base. The factory is unified. The customer is not.

The buyer is John Arquette, Director of Commerce and Digital Experience, with budget influence and an active near-term focus on Customer Experience Optimization. And there is no incumbent SI of record, which is rare. The room to win the implementation is open.

So the strategic question for Standard Textile is whether the CX-optimization budget buys a prettier storefront or finally unifies the customer the way the factory is unified. For a company whose whole advantage is integration, leaving the customer data in pieces is the one inconsistency worth fixing.

That is where AI actually pays here. Not a chatbot on the homepage. Not consumer personalization bolted onto a B2B catalog. It is search that knows the account, one profile across B2B and DTC, and the account data underneath both. The model is the commodity. The vertical-integration data and the institutional buyer relationships Welspun and Sferra cannot replicate are the moat.

That spine runs through the thesis, the wedge, every module, and every play. Guardrail: Oracle is the ERP, so lead with commerce, CX and the commerce-to-ERP data bridge, never an ERP swap.

---

## 1. The fixed facts (confirmed from the Account 360)

| Field | Value | Notes for the build |
|---|---|---|
| Company name | Standard Textile | Founded 1940; HQ Cincinnati, OH; private, family-owned (Heiman) |
| Vertical label | Vertically-integrated textile manufacturer (healthcare, hospitality, DTC) | Terry, sheets, blankets, uniforms, napery + Standard Textile Home |
| Revenue band | ~$805M (third-party estimate) | Private company; directional. Drives the gated $ math |
| Buyer we write to | Director, Commerce & Digital Experience | John Arquette; budget + strategy influence; active requirement |
| Role emphasis | `ecommerce` | Connected-commerce CX lead |
| Active requirement | Yes, active | CX Optimization, 6–12 months |
| Domains (email match) | standardtextile.com | Email pattern first.last@standardtextile.com (inferred) |

**The triggers we lean on.**

1. **An active CX-optimization requirement.** John Arquette has a named near-term focus and budget influence, in the next 3 to 18 months.
2. **A vertically-integrated operation modernizing the customer side.** Yarn to finished goods across 24 facilities and 12 countries, with B2B and DTC running on separate rails.
3. **Open whitespace.** No incumbent SI of record surfaced, on an Oracle ERP and Salesforce Marketing Cloud base.

**The champion.** John Arquette owns commerce and digital experience with budget influence. Map the CIO or VP IT who owns the Oracle and commerce integration as the technical co-sponsor.

**The guardrail (do not break).** Do **not** pitch an Oracle replacement. Lead with the buyer outcome, CX optimization through account-aware search and a unified B2B and DTC experience, and position the commerce-to-ERP bridge as the how, not the headline.

**The audience rule.** Healthcare textiles serve clinical environments; service levels matter. Keep every line concrete and outcome-led.

**One thing to verify live.** Revenue is a third-party estimate (~$805M). The eCommerce platform is unconfirmed. Oracle as the ERP is firmographic and inferred. The SI or agency of record is unknown, which is the opening.

---

## 2. Voice rules (the bar for every line)

- **Aphoristic, contrastive openers.** "You integrated yarn to finished goods. Your customer data is still in pieces."
- **A name on every claim.** Dawn Foods, Watsco, Welspun, Sferra. No floating assertions.
- **One load-bearing stat per idea.** A single number, dropped where it lands hardest.
- **Reframes that flip intuition.** "You optimized the factory. Now optimize the moment a buyer looks for a product."
- **Economy.** One to three sentence paragraphs. Cut any word that can go.
- **No AI tells.** No em-dashes. Periods, colons, commas only. En-dashes live in numeric ranges ($2–8M).
- **It is about them.** Lead with what Standard Textile owns and what Welspun and Sferra cannot copy.

| Write this | Not this |
|---|---|
| "Search that knows the account and its price." | "Enhance the on-site search experience." |
| "One profile across B2B and Home." | "Unify the omnichannel customer journey." |
| "The reorder no rep has to touch." | "Streamline the purchasing workflow." |

---

## 3. The thesis (line one of the report)

Target 8–16 words.

> **You integrated yarn to finished goods. Your customer data is still in pieces.**

*Why this line.* It uses Standard Textile's own proudest achievement, vertical integration, to expose the one place it has not happened: the customer. Repeatable, and entirely about them.

---

## 4. The wedge (the one play they start with)

- **Wedge label:** B2B-aware search that knows the account, its price, its approved SKUs, its reorder.
- **Wedge detail:** Search is where CX optimization actually happens, and it runs on the catalog and contract data you already own. AI search converts at roughly 4.63% against 2.77% for keyword, about 1.67 times. Dawn Foods, a manufacturer like you, drove triple-digit online growth and cut time-to-order 30% doing exactly this.

*Why this one.* It is the highest-compounding, most bolt-on-ready play that sits squarely inside the active CX-optimization mandate. It proves the unification thesis fast, on data already owned, with no platform decision required.

---

## 5. Module 1: The Reframe

**Device:** one arresting stat plus the thesis setup.

- **Opener:** You spent decades integrating the factory. The buyer's experience never got the same treatment.
- **Stat:** `85%`
- **Stat label:** of AI projects fail on data that was not ready, not on the model.
- **Stat source:** Gartner, Feb 2025 · `https://www.gartner.com/`
- **Body:**

> 85% of AI projects fail on data, not on the model. Standard Textile already solved the hard version of that problem in the physical world: yarn, weaving, finishing and distribution run as one system across 24 facilities in 12 countries. The customer side never got the same treatment. The B2B order, the contract price, the DTC purchase and the reorder history all sit in separate places. Unify them and AI finally has something true to act on: the buyer relationships and vertical-integration data Welspun and Sferra cannot replicate.

*Why it works.* The Gartner data-readiness figure ties straight to the thesis, that the constraint is fragmented data, not the model. The body ends on what only Standard Textile owns.

---

## 6. Module 2: The Hype Filter

**Device:** a two-column cut, four per column, then a single pitch-warning bar.

- **Opener:** Commodity AI bolts a chatbot on the storefront. Compounding AI runs on the account data only you hold.

| Commodity · rent it | Compounding · own it |
|---|---|
| A chatbot that cannot see contract price | Search that knows the account and its price |
| Recs that ignore approved-SKU lists | One profile across B2B and Standard Textile Home |
| LLM product copy with no spec behind it | Account-based entitlement and one-click reorder |
| A DTC personalization tool blind to B2B | AI PIM enrichment across the full catalog |

- **Pitch warning:**

> On an Oracle and Salesforce Marketing Cloud base, expect a pitch to bolt a consumer personalization engine onto a B2B catalog. A hospital system and a home shopper are not the same buyer. Personalization that ignores contract pricing and approved SKUs does not optimize CX. It erodes trust on your most valuable accounts.

*One fact worth weaving from the research.* The B2B unlock that consumer-first vendors miss is that contract pricing and entitlements are the rails; any AI that ignores buyer-specific pricing is a liability. Keep it for the live conversation.

---

## 7. Module 2.5: Your Stack (the "we read your stack" infographic)

| Signal (system you run) | The play it unlocks | What you'll be pitched instead |
|---|---|---|
| Oracle ERP | Bridge contract pricing and live inventory into the storefront so each account sees its own price | A new ERP. The unlock is the commerce-to-ERP data bridge. |
| Salesforce Marketing Cloud | Tie campaigns to real purchase and reorder data instead of list sends | More email volume. The unlock is first-party purchase data. |
| eCommerce platform (B2B + Standard Textile Home) | Unify both storefronts behind one account profile and one catalog | Two separate replatforms. The unlock is one data layer, not two sites. |
| Large institutional + DTC catalog | AI PIM enrichment so every SKU is searchable and AEO-ready | Manual cataloging at $0.50 a SKU. AI drafts, your team approves by exception. |

*Why these rows.* Each is confirmed or inferred in the Account 360, and each steers CX optimization toward unified account data rather than a second storefront.

---

## 8. Module 3: The Commodity vs Compounding Map

**Device:** the signature 2×2. Bubble size = dollar magnitude. Wedge starred, top-right.

**Map intro line:**

> We mapped Standard Textile's world. The lit bubbles pay for a vertically-integrated manufacturer selling both B2B and DTC, sized by the dollars on the table. The star runs on the catalog and contract data you already own, inside the CX-optimization window you have named.

**The plays and coordinates** (compounding 0–1, bolt-on 0–1, magnitude 1–5):

| Play | Compounding | Bolt-on | Magnitude | Lit (yours) | Wedge |
|---|---|---|---|---|---|
| B2B-aware search | 0.82 | 0.80 | 4 | yes | ★ |
| Account-based personalization | 0.86 | 0.62 | 4 | yes | |
| Unified B2B + DTC data layer | 0.84 | 0.45 | 5 | yes | |
| AI PIM enrichment | 0.80 | 0.55 | 3 | yes | |
| AEO + answer layer | 0.90 | 0.78 | 3 | yes | |
| Commerce-to-Oracle integration | 0.70 | 0.58 | 4 | yes | |
| Generic chatbot | 0.14 | 0.90 | 1 | no | |
| LLM product copy | 0.10 | 0.78 | 1 | no | |
| ML forecasting (relabeled) | 0.40 | 0.42 | 2 | no | |

**Text rendering of the quadrant** (for reviewers without the live chart):

```
 COMPOUNDING (runs on your data)
        ▲
        │  Unified B2B+DTC data layer ●          AEO ●          ★ B2B-AWARE SEARCH
        │     Account-based personalization ●          Account-aware reorder ●
        │        Commerce-to-Oracle integration ●     AI PIM enrichment ●
        │
        │  · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
        │
        │                                LLM product copy ○      Generic chatbot ○
        ▼
 COMMODITY (runs on the model)
  FOUNDATION-REQUIRED ◀──────────────────────────────────────────▶ BOLT-ON-READY
        (data work first)                                          (start now)

  ● lit = yours   ○ greyed = table-stakes   ★ wedge = found money, start now
  bubble size = dollar magnitude
```

*Why the map lands.* The eye lands on B2B-aware search, top-right: the start-now CX win that proves the unification thesis. The unified data layer sits high and to the left, the bigger bet underneath.

---

## 9. The gate teaser (the blurred line on the lock)

> Your estimated annual commerce-conversion and CX opportunity is a real number we calculated for Standard Textile. Enter your work email to reveal your model.

**The number behind the blur:** $2–8M (modeled from the ~$805M base; pools below). Conservative, and comfortably above a typical CX-optimization budget.

---

---

# Below the gate (the payoff)

## 10. The money pools (where the dollars are)

**Device:** four bars, each with one named proof point. Headline $2–8M.

```
 Conversion: AI search lift on the search-driven share          $0.5M ██████████████ $3M
 Reorder & AOV: account-aware self-service                      $0.5M ████████████ $2M
 Service time: reorders and exceptions without a rep            $0.3M ████████ $1.5M
 Foundation: one unified account data layer                     $0.3M ████████ $1.5M
                                                                 └─ headline: $2–8M ─┘
```

**Pool 1. Conversion: AI search lift on the search-driven share. ($0.5–3M)**
A large share of revenue runs through search, and AI search converts at roughly 1.67 times keyword. Dawn Foods, a manufacturer-wholesaler, drove triple-digit online growth and cut time-to-order 30% with AI search and recs. On the search-driven slice of an ~$805M base, the recoverable conversion is material. *(Verified. Source: Dawn Foods / commercetools.)*

**Pool 2. Reorder and AOV: account-aware self-service. ($0.5–2M)**
Account-aware recommendations and reorder lift order value on the institutional base. Watsco grew average order value 10% from AI recommendations on its contractor platform. The same pattern on Standard Textile's B2B accounts compounds across every reorder cycle. *(Verified. Source: Adobe / Watsco.)*

**Pool 3. Service time: reorders and exceptions without a rep. ($0.3–1.5M)**
Institutional buyers reorder known items on a schedule but still call when the contract SKU is hard to find. Guided, contract-aware reorder converts those calls to self-service. US Foods automates image-and-doc-to-order at scale as the distribution analog. *(Verified. Source: US Foods.)*

**Pool 4. Foundation: one unified account data layer. ($0.3–1.5M)**
The B2B order, contract price, DTC purchase and reorder history sit in separate systems, and every play above runs on unifying them. One profile across B2B and Standard Textile Home, bridged to Oracle, gates the ROI of the rest. *(Illustrative. Source: research dump, Part 3.3.)*

*Why four.* They are the four levers of a vertically-integrated seller going omnichannel: convert the search, lift the reorder, give back the rep time, and unify the account data. Each maps to a phase and a play.

---

## 11. The roadmap (sequence it so it self-funds)

```
 NOW ───────── 3–6 MO ───────── 6–12 MO ───────── FOUNDATION
  ●               ○                  ○                  ○
 Phase 1        Phase 2            Phase 3           Phase 4
 [ACTIVE]
 B2B-aware      Account personal-  Unify B2B + DTC   PIM enrichment +
 search on top  ization + Oracle   into one profile  AEO across the
 catalog        price bridge                         full catalog
```

**Phase 1, starts now. B2B-aware search on the top catalog segment.**
Account-aware search and ranking on the highest-value segment, inside the CX-optimization mandate. It runs on owned catalog and contract data. This is the wedge.

**Phase 2, 3 to 6 months. Account personalization and the Oracle price bridge.**
Entitlement-aware pricing and reorder, with a commerce-to-Oracle bridge so contract price and inventory are live. Watsco is the proof on AOV.

**Phase 3, 6 to 12 months. Unify B2B and Standard Textile Home.**
One account profile and catalog across both storefronts, so a buyer is recognized everywhere.

**Phase 4, the foundation. PIM enrichment and AEO.**
AI PIM enrichment so every SKU is searchable and machine-readable, then AEO so AI engines cite the catalog. The data work begins in Phase 1 and matures here.

*Why this order.* The fast, owned-data CX win goes first and self-funds the deeper unification, and the Oracle bridge enables everything downstream without an ERP project.

---

## 12. The play shortlist (commerce, CX, and the foundation)

### Commerce and the buyer experience

**A. B2B-aware search with account-aware ranking.** *(Wedge)*
- *Problem:* A failed catalog lookup becomes a rep call or a lost sale, and generic search cannot rank on the account's price or approved items.
- *Named case:* Dawn Foods drove triple-digit online growth and cut time-to-order 30%; AI search converts about 1.67 times keyword.
- *ROI:* Recovering the search-driven conversion gap on a large share of revenue.
- *What i95Dev does:* Account-aware semantic search and ranking on the catalog, filtered to contract eligibility and inventory. *(Verified. Dawn Foods / commercetools.)*

**B. Account-based personalization and reorder.**
- *Problem:* B2B buyers need contract price and approved SKUs, and DTC personalization tools ignore both.
- *Named case:* Watsco grew AOV 10% from AI recs on its contractor platform.
- *ROI:* Higher AOV and fewer rep-assisted orders on the institutional base.
- *What i95Dev does:* Entitlement-aware pricing, approved-item catalogs and one-click reorder, bridged to Oracle. *(Verified. Adobe / Watsco.)*

**C. Guided reorder for institutional catalogs.**
- *Problem:* Facility buyers reorder on a schedule but still call to find the right SKU, size or grade.
- *Named case:* US Foods automates image-and-doc-to-order at scale.
- *ROI:* Routine purchasing becomes self-service, freeing the desk for real exceptions.
- *What i95Dev does:* Contract-filtered guided search and reorder ranked on approved items. *(Verified. US Foods.)*

### Acquisition and the foundation

**D. AEO and AI PIM enrichment.**
- *Problem:* 30 to 60% of B2B catalogs have incomplete attributes, which kills search, AEO and agentic readiness.
- *Named case:* AI PIM enrichment cuts manual data time up to 60%; AI referral visits hit 1.13B in June 2025.
- *ROI:* A complete, machine-readable catalog lifts search and gets cited by AI engines.
- *What i95Dev does:* AI-drafted, human-approved attribute enrichment and a schema feed for AEO. *(Verified / illustrative. Research dump, Part 3.2.)*

**E. The unified B2B and DTC data layer.**
- *Problem:* The account lives in pieces across B2B, DTC, Oracle and Marketing Cloud, and every play above runs on unifying it.
- *Named case:* The B2B rule is that contract pricing and entitlements are the rails any AI must respect.
- *ROI:* One profile gates the ROI of search, personalization and reorder, and is the cheapest insurance on the portfolio.
- *What i95Dev does:* Unify B2B and Standard Textile Home into one account profile and catalog, bridged to Oracle. *(Illustrative. Research dump, Part 3.3.)*

*Why this set.* It spans commerce, CX and the data foundation, sequenced so the bolt-on CX wins carry the weight and the unification follows. Every named case is a real manufacturer or distributor analog.

---

## 13. Why i95Dev (the close)

**Opener:**

> You'll be sold a new storefront. Your gain is the customer unified the way your factory already is.

**Body:**

> The platform vendors will make CX optimization a theme project, and a consumer personalization vendor will ignore your contracts. Your problem is neither. It is account-aware search and a unified B2B and DTC profile, on the Oracle and Salesforce base you already run. That is exactly i95Dev's lane: manufacturer commerce plus the commerce-to-ERP data bridge, surgical where the Big-4 are sprawling, priced for a company your size. With no incumbent SI locked in, the implementation is open to win.

**The proof to weave (from the research).** A $200M company was quoted a $3M, eight-month, seven-platform transformation; a specialist shipped the same outcome in six weeks. The giants under-serve exactly this manufacturer middle.

**CTA title:** Book your CX and Connected-Commerce Diagnostic.
**CTA subtitle:** A fixed-scope assessment that sizes the AI-search and account-personalization upside, and maps the unified B2B and DTC data layer against Standard Textile's real catalog and contracts. Weeks, not a multi-year program.

**Credibility strip:** 500+ B2B brands · 25+ years · 1,200+ projects.

---

## 14. Sources and credibility

| Claim | Label | Source |
|---|---|---|
| 85% of AI projects fail on unready data | Verified | Gartner, Feb 2025 |
| AI search ~4.63% vs ~2.77% keyword conversion | Verified | Research dump, Part 3.2 |
| Dawn Foods triple-digit growth, −30% time-to-order | Verified | commercetools / DC360 |
| Watsco +10% AOV from AI recs | Verified | Adobe / Watsco (DC360) |
| US Foods doc-to-order at scale | Verified | DC360 / US Foods |
| AI PIM enrichment cuts manual data time up to 60% | Verified | Research dump, Part 3.2 |
| AI referral visits 1.13B in June 2025 | Verified | Research dump, Part 3.2 |
| Contract pricing/entitlements are the B2B rails | Directional | Research dump, Part 3.3 |

**Flagged to verify live:** revenue (~$805M is an estimate). eCommerce platform unconfirmed. Oracle as the ERP is firmographic, inferred. SI or agency of record unknown (the opening).

---

## 15. Handback and reuse

This file is the finished content and the template; every block maps to a field in `data/accounts/standard-textile.ts`, mirroring `bob-barker.ts`.

**Note on positioning.** The Account 360 scores Standard Textile a warm, active fit with open whitespace, so the content is action-oriented. It is a connected-commerce and CX story on an Oracle base, not an ERP story. The wedge rides the named CX-optimization requirement (account-aware search) and the deeper bet is the unified B2B and DTC data layer.
