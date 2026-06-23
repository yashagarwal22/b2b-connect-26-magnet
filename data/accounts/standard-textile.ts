import type { AccountConfig } from "@/lib/types";

// Sources reused across the report (Verified vs. Illustrative labelled per-claim, spec section 14).
const SRC = {
  gartner: { label: "Gartner, 85% of AI projects fail on unready data (Feb 2025)", url: "https://www.gartner.com/" },
  dawn: { label: "Dawn Foods, triple-digit growth, -30% time-to-order (commercetools / DC360)", url: "https://commercetools.com/" },
  watsco: { label: "Watsco, +10% AOV from AI recs (Adobe / DC360)", url: "https://www.watsco.com/" },
  usfoods: { label: "US Foods, doc-to-order at scale (DC360)", url: "https://www.usfoods.com/" },
  pim: { label: "AI PIM enrichment cuts manual data time up to 60% (Research dump, Part 3.2)", url: "https://www.i95dev.com/" },
  referrals: { label: "AI referral visits 1.13B in June 2025 (Research dump, Part 3.2)", url: "https://www.i95dev.com/" },
  rails: { label: "Contract pricing and entitlements are the B2B rails (Research dump, Part 3.3)", url: "https://www.i95dev.com/" },
} as const;

/**
 * Standard Textile, a warm, active-fit account with open whitespace (no incumbent SI of record).
 * Every section is grounded in the Account-360 profile and the AI research dump, and maps 1:1 to
 * companies/standard-textile/standard-textile-spec.md.
 *
 * Spine: Standard Textile does not win on any single textile, it wins on vertical integration, the
 * only company that runs yarn to finished goods as one system across 24 facilities in 12 countries.
 * That integration is the moat, and it has never given the customer side the same treatment. The B2B
 * order, the contract price, the DTC purchase on Standard Textile Home and the reorder history all
 * sit in separate places on an Oracle ERP and Salesforce Marketing Cloud base. The factory is unified,
 * the customer is not. AI pays here as account-aware search, one profile across B2B and DTC, and the
 * account data underneath both, the moat Welspun and Sferra cannot replicate. Write to John Arquette
 * (Director, Commerce & Digital Experience, budget influence, active CX-optimization requirement), with
 * the CIO or VP IT who owns the Oracle and commerce integration as technical co-sponsor. Guardrail: do
 * not pitch an Oracle replacement, lead with the buyer outcome and position the commerce-to-ERP bridge
 * as the how, not the headline.
 */
export const standardTextile: AccountConfig = {
  slug: "standard-textile",
  companyName: "Standard Textile",
  aliases: [
    "Standard Textile Co., Inc.",
    "Standard Textile Home",
    "Heiman",
  ],
  domains: ["standardtextile.com"],
  vertical: "manufacturing",
  verticalLabel: "Vertically-integrated textile manufacturer (healthcare, hospitality, DTC)",
  revenueBand: "~$805M",
  role: "Director, Commerce & Digital Experience",
  roleEmphasis: "ecommerce",
  activeRequirement: true,
  published: true,

  thesis: "You integrated yarn to finished goods. Your customer data is still in pieces.",
  wedge:
    "B2B-aware search that knows the account, its price, its approved SKUs, its reorder",
  wedgeDetail:
    "Search is where CX optimization actually happens, and it runs on the catalog and contract data you already own. AI search converts at roughly 4.63% against 2.77% for keyword, about 1.67 times. Dawn Foods, a manufacturer like you, drove triple-digit online growth and cut time-to-order 30% doing exactly this.",

  // ── Module 1, The Reframe (above gate) ──
  reframe: {
    opener: "You spent decades integrating the factory. The buyer's experience never got the same treatment.",
    stat: "85%",
    statSource: SRC.gartner,
    body: "85% of AI projects fail on data, not on the model. Standard Textile already solved the hard version of that problem in the physical world: yarn, weaving, finishing and distribution run as one system across 24 facilities in 12 countries. The customer side never got the same treatment. The B2B order, the contract price, the DTC purchase and the reorder history all sit in separate places. Unify them and AI finally has something true to act on: the buyer relationships and vertical-integration data Welspun and Sferra cannot replicate.",
  },

  // ── Module 2, The Hype Filter (above gate) ──
  hypeFilter: {
    opener: "Commodity AI bolts a chatbot on the storefront. Compounding AI runs on the account data only you hold.",
    commodity: [
      "A chatbot that cannot see contract price",
      "Recs that ignore approved-SKU lists",
      "LLM product copy with no spec behind it",
      "A DTC personalization tool blind to B2B",
    ],
    compounding: [
      "Search that knows the account and its price",
      "One profile across B2B and Standard Textile Home",
      "Account-based entitlement and one-click reorder",
      "AI PIM enrichment across the full catalog",
    ],
    pitchWarning:
      "On an Oracle and Salesforce Marketing Cloud base, expect a pitch to bolt a consumer personalization engine onto a B2B catalog. A hospital system and a home shopper are not the same buyer. Personalization that ignores contract pricing and approved SKUs does not optimize CX. It erodes trust on your most valuable accounts.",
  },

  // ── Module 2.5, Your Stack (verified dashboard research; reconcile flagged items live) ──
  stackFlags: [
    {
      signal: "Oracle ERP",
      leadPlay: "Bridge contract pricing and live inventory into the storefront so each account sees its own price",
      commodityFlag: "A new ERP. The unlock is the commerce-to-ERP data bridge.",
    },
    {
      signal: "Salesforce Marketing Cloud",
      leadPlay: "Tie campaigns to real purchase and reorder data instead of list sends",
      commodityFlag: "More email volume. The unlock is first-party purchase data.",
    },
    {
      signal: "eCommerce platform (B2B + Standard Textile Home)",
      leadPlay: "Unify both storefronts behind one account profile and one catalog",
      commodityFlag: "Two separate replatforms. The unlock is one data layer, not two sites.",
    },
    {
      signal: "Large institutional + DTC catalog",
      leadPlay: "AI PIM enrichment so every SKU is searchable and AEO-ready",
      commodityFlag: "Manual cataloging at $0.50 a SKU. AI drafts, your team approves by exception.",
    },
  ],

  // ── Module 3, The Commodity-vs-Compounding Map (above gate) ──
  // Y: 0 commodity to 1 compounding · X: 0 foundation-required to 1 bolt-on-ready (wedge = top-right)
  mapPlays: [
    { id: "b2b-search", label: "B2B-aware search", compounding: 0.82, bolton: 0.8, magnitude: 4, lit: true, wedge: true },
    { id: "account-personalization", label: "Account-based personalization", compounding: 0.86, bolton: 0.62, magnitude: 4, lit: true },
    { id: "unified-data-layer", label: "Unified B2B + DTC data layer", compounding: 0.84, bolton: 0.45, magnitude: 5, lit: true },
    { id: "pim", label: "AI PIM enrichment", compounding: 0.8, bolton: 0.55, magnitude: 3, lit: true },
    { id: "aeo", label: "AEO + answer layer", compounding: 0.9, bolton: 0.78, magnitude: 3, lit: true },
    { id: "oracle-integration", label: "Commerce-to-Oracle integration", compounding: 0.7, bolton: 0.58, magnitude: 4, lit: true },
    { id: "chatbot", label: "Generic chatbot", compounding: 0.14, bolton: 0.9, magnitude: 1, lit: false },
    { id: "llm-copy", label: "LLM product copy", compounding: 0.1, bolton: 0.78, magnitude: 1, lit: false },
    { id: "ml-forecasting", label: "ML forecasting (relabeled)", compounding: 0.4, bolton: 0.42, magnitude: 2, lit: false },
  ],

  // ── Below the gate (payoff), never in the initial payload ──
  payoff: {
    headlineOpportunity: [2, 8],
    moneyPools: [
      {
        id: "conversion",
        label: "Conversion: AI search lift on the search-driven share",
        range: [0.5, 3],
        note: "A large share of revenue runs through search, and AI search converts at roughly 1.67 times keyword. Dawn Foods, a manufacturer-wholesaler, drove triple-digit online growth and cut time-to-order 30% with AI search and recs. On the search-driven slice of an ~$805M base, the recoverable conversion is material.",
        credibility: "verified",
        source: SRC.dawn,
      },
      {
        id: "reorder-aov",
        label: "Reorder and AOV: account-aware self-service",
        range: [0.5, 2],
        note: "Account-aware recommendations and reorder lift order value on the institutional base. Watsco grew average order value 10% from AI recommendations on its contractor platform. The same pattern on Standard Textile's B2B accounts compounds across every reorder cycle.",
        credibility: "verified",
        source: SRC.watsco,
      },
      {
        id: "service-time",
        label: "Service time: reorders and exceptions without a rep",
        range: [0.3, 1.5],
        note: "Institutional buyers reorder known items on a schedule but still call when the contract SKU is hard to find. Guided, contract-aware reorder converts those calls to self-service. US Foods automates image-and-doc-to-order at scale as the distribution analog.",
        credibility: "verified",
        source: SRC.usfoods,
      },
      {
        id: "foundation",
        label: "Foundation: one unified account data layer",
        range: [0.3, 1.5],
        note: "The B2B order, contract price, DTC purchase and reorder history sit in separate systems, and every play above runs on unifying them. One profile across B2B and Standard Textile Home, bridged to Oracle, gates the ROI of the rest.",
        credibility: "illustrative",
        source: SRC.rails,
      },
    ],
    roadmap: [
      {
        phase: "Phase 1, starts now",
        title: "B2B-aware search on the top catalog segment",
        body: "Account-aware search and ranking on the highest-value segment, inside the CX-optimization mandate. It runs on owned catalog and contract data. This is the wedge.",
        active: true,
      },
      {
        phase: "Phase 2, 3 to 6 months",
        title: "Account personalization and the Oracle price bridge",
        body: "Entitlement-aware pricing and reorder, with a commerce-to-Oracle bridge so contract price and inventory are live. Watsco is the proof on AOV.",
      },
      {
        phase: "Phase 3, 6 to 12 months",
        title: "Unify B2B and Standard Textile Home",
        body: "One account profile and catalog across both storefronts, so a buyer is recognized everywhere.",
      },
      {
        phase: "Phase 4, the foundation",
        title: "PIM enrichment and AEO",
        body: "AI PIM enrichment so every SKU is searchable and machine-readable, then AEO so AI engines cite the catalog. The data work begins in Phase 1 and matures here.",
      },
    ],
    // ── The play shortlist across commerce, CX and the foundation ──
    plays: [
      // COMMERCE AND THE BUYER EXPERIENCE
      {
        id: "b2b-search",
        pillar: "storefront",
        title: "B2B-aware search with account-aware ranking",
        problem:
          "A failed catalog lookup becomes a rep call or a lost sale, and generic search cannot rank on the account's price or approved items.",
        caseName: "Dawn Foods",
        caseDetail:
          "Dawn Foods drove triple-digit online growth and cut time-to-order 30%; AI search converts about 1.67 times keyword.",
        roi: "Recovering the search-driven conversion gap on a large share of revenue.",
        whatI95Does:
          "Account-aware semantic search and ranking on the catalog, filtered to contract eligibility and inventory.",
        credibility: "verified",
        source: SRC.dawn,
      },
      {
        id: "account-personalization",
        pillar: "storefront",
        title: "Account-based personalization and reorder",
        problem:
          "B2B buyers need contract price and approved SKUs, and DTC personalization tools ignore both.",
        caseName: "Watsco",
        caseDetail:
          "Watsco grew AOV 10% from AI recs on its contractor platform.",
        roi: "Higher AOV and fewer rep-assisted orders on the institutional base.",
        whatI95Does:
          "Entitlement-aware pricing, approved-item catalogs and one-click reorder, bridged to Oracle.",
        credibility: "verified",
        source: SRC.watsco,
      },
      {
        id: "guided-reorder",
        pillar: "storefront",
        title: "Guided reorder for institutional catalogs",
        problem:
          "Facility buyers reorder on a schedule but still call to find the right SKU, size or grade.",
        caseName: "US Foods",
        caseDetail:
          "US Foods automates image-and-doc-to-order at scale.",
        roi: "Routine purchasing becomes self-service, freeing the desk for real exceptions.",
        whatI95Does:
          "Contract-filtered guided search and reorder ranked on approved items.",
        credibility: "verified",
        source: SRC.usfoods,
      },
      // ACQUISITION AND THE FOUNDATION
      {
        id: "aeo-pim",
        pillar: "foundation",
        title: "AEO and AI PIM enrichment",
        problem:
          "30 to 60% of B2B catalogs have incomplete attributes, which kills search, AEO and agentic readiness.",
        caseName: "Research dump, Part 3.2",
        caseDetail:
          "AI PIM enrichment cuts manual data time up to 60%; AI referral visits hit 1.13B in June 2025.",
        roi: "A complete, machine-readable catalog lifts search and gets cited by AI engines.",
        whatI95Does:
          "AI-drafted, human-approved attribute enrichment and a schema feed for AEO.",
        credibility: "verified",
        source: SRC.pim,
      },
      {
        id: "unified-data-layer",
        pillar: "foundation",
        title: "The unified B2B and DTC data layer",
        problem:
          "The account lives in pieces across B2B, DTC, Oracle and Marketing Cloud, and every play above runs on unifying it.",
        caseName: "Research dump, Part 3.3",
        caseDetail:
          "The B2B rule is that contract pricing and entitlements are the rails any AI must respect.",
        roi: "One profile gates the ROI of search, personalization and reorder, and is the cheapest insurance on the portfolio.",
        whatI95Does:
          "Unify B2B and Standard Textile Home into one account profile and catalog, bridged to Oracle.",
        credibility: "illustrative",
        source: SRC.rails,
      },
    ],
    why: {
      opener: "You'll be sold a new storefront. Your gain is the customer unified the way your factory already is.",
      body: "The platform vendors will make CX optimization a theme project, and a consumer personalization vendor will ignore your contracts. Your problem is neither. It is account-aware search and a unified B2B and DTC profile, on the Oracle and Salesforce base you already run. That is exactly i95Dev's lane: manufacturer commerce plus the commerce-to-ERP data bridge, surgical where the Big-4 are sprawling, priced for a company your size. With no incumbent SI locked in, the implementation is open to win.",
      ctaTitle: "Book your CX and Connected-Commerce Diagnostic",
      ctaSubtitle:
        "A fixed-scope assessment that sizes the AI-search and account-personalization upside, and maps the unified B2B and DTC data layer against Standard Textile's real catalog and contracts. Weeks, not a multi-year program.",
      credibility: { brands: "500+ B2B brands", years: "25+ years", projects: "1,200+ projects" },
    },
  },
};
