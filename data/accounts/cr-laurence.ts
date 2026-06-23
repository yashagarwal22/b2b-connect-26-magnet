import type { AccountConfig } from "@/lib/types";

// Sources reused across the report (Verified vs. Illustrative labelled per-claim, spec section 14).
const SRC = {
  referrals: { label: "AI referrals 1.13B in June 2025, +357% YoY, ~31% higher conversion", url: "https://www.nopio.com/blog/answer-engine-optimization-manufacturing/" },
  watts: { label: "Watts Water, cited by Perplexity over rivals", url: "https://www.watts.com/" },
  grainger: { label: "Grainger, RAG over 2.5M SKUs and sub-3s visual search (Databricks / DC360)", url: "https://www.grainger.com/" },
  pim: { label: "AI PIM enrichment cuts manual data time up to 60%, B2B AI-intermediated by 2028 (Gartner)", url: "https://www.gartner.com/" },
  researchDump: { label: "B2B Connect 2026 AI research dump, Part 3.2", url: "https://www.nopio.com/blog/answer-engine-optimization-manufacturing/" },
  b2bRails: { label: "Contract pricing and entitlements are the B2B rails (research dump, Part 3.3)", url: "https://www.nopio.com/blog/answer-engine-optimization-manufacturing/" },
} as const;

/**
 * C.R. Laurence (CRL), an active-requirement account with a named wishlist (channel-deep catalog,
 * PE-owned under cost discipline). Every section is grounded in the Account-360 profile and the AI
 * research dump, and maps 1:1 to companies/cr-laurence/cr-laurence-spec.md.
 *
 * Spine: CRL wins on the deepest glazing-and-hardware catalog in the world, built since 1920, and it
 * has already bought the tools to search and personalize it. The one thing it has not bought is the
 * layer that makes AI engines cite it. Elisabeth Ducharme, Global eCommerce Lead, asked for "AI, live
 * chat, on-site search, AEO" but already runs SAP S/4, Algolia, Dynamic Yield and Braze, so the real
 * gap in her own wishlist is AEO, the one almost no building-products distributor does. Sell the answer
 * layer on top of what she owns, the spec-grounded RAG, and the commerce-to-SAP bridge, never a second
 * search engine or personalization tool. Multi-thread to Peter Walter (VP Digital Marketing, SAP Hybris
 * background). Guardrails: do not re-sell Algolia or Dynamic Yield, keep it surgical and self-funding to
 * respect PE cost discipline, and treat the eCommerce platform and revenue as flagged-to-verify-live.
 */
export const crLaurence: AccountConfig = {
  slug: "cr-laurence",
  companyName: "C.R. Laurence",
  aliases: ["CRL", "C.R. Laurence"],
  domains: ["crlaurence.com"],
  vertical: "industrial-distribution",
  verticalLabel: "Architectural hardware, railing and glazing distribution",
  revenueBand: "Private (OBE / KPS owned)",
  role: "Global eCommerce Lead",
  roleEmphasis: "ecommerce",
  activeRequirement: true,
  published: true,

  thesis: "You have Algolia. You do not have AEO. That is the whole opportunity.",
  wedge:
    "AEO plus B2B-aware ranking, layered on the Algolia you already run",
  wedgeDetail:
    "You asked for search and AEO, and you already own Algolia, so the spend is not a new engine. It is the answer layer on top: structured, machine-readable spec data so ChatGPT and Perplexity cite CRL, plus ranking that knows the account. Watts Water already gets cited by Perplexity over competitors doing exactly this, and almost no glazing distributor is.",

  // ── Module 1, The Reframe (above gate) ──
  reframe: {
    opener: "Everyone is selling you a search engine. You bought one already. The gap is who finds you.",
    stat: "+357%",
    statSource: SRC.referrals,
    body: "AI engines drove 1.13B referral visits in June 2025, up 357% year over year, and those buyers never see your Algolia results because they never reach your site. CRL already owns the search engine and a personalization engine in Dynamic Yield. What it does not own is the answer layer that makes AI engines cite its products. That layer runs on the asset built since 1920 that competitors cannot fake: the deepest glazing-and-architectural-hardware catalog in the world, with the specs to back every SKU.",
  },

  // ── Module 2, The Hype Filter (above gate) ──
  hypeFilter: {
    opener: "Commodity AI sells you tools you already own. Compounding AI makes the catalog answer for itself.",
    commodity: [
      "Another on-site search engine over Algolia",
      "A live-chat bot that cannot read a spec",
      "Generic recs ignoring fabricator pricing",
      "LLM copy with no spec behind the SKU",
    ],
    compounding: [
      "AEO so AI engines cite CRL parts",
      "Spec-grounded RAG answers on the catalog",
      "Visual and part-number search for the part in hand",
      "Account-aware ranking on the Algolia you run",
    ],
    pitchWarning:
      "You asked for AI, live chat, search and AEO, so vendors will try to sell you a second search engine and a chatbot. You already run Algolia and Dynamic Yield. Buying more of what you have is not the gap. The gap is the answer layer and the spec-grounded RAG that sit on top, where almost no building-products distributor has moved.",
  },

  // ── Module 2.5, Your Stack (the "we read your stack" infographic) ──
  stackFlags: [
    {
      signal: "Algolia (on-site search)",
      leadPlay: "Add account-aware ranking and feed an AEO answer layer, no new engine",
      commodityFlag: "A rip-and-replace search project. You already have the engine.",
    },
    {
      signal: "Dynamic Yield (personalization)",
      leadPlay: "Tie personalization to fabricator and contractor pricing, not just behavior",
      commodityFlag: "A second personalization tool. Connect price, do not re-buy.",
    },
    {
      signal: "SAP S/4HANA (ERP, attendee-reported)",
      leadPlay: "Bridge contract pricing and inventory into search and the storefront",
      commodityFlag: "An ERP project. The unlock is the commerce-to-SAP data bridge.",
    },
    {
      signal: "Braze (messaging)",
      leadPlay: "Trigger reorder and quote follow-up from real catalog and order events",
      commodityFlag: "More campaigns. The unlock is event data from commerce.",
    },
  ],

  // ── Module 3, The Commodity-vs-Compounding Map (above gate) ──
  // Y: 0 commodity to 1 compounding · X: 0 foundation-required to 1 bolt-on-ready (wedge = top-right)
  mapPlays: [
    { id: "aeo", label: "AEO + answer layer", compounding: 0.92, bolton: 0.85, magnitude: 4, lit: true, wedge: true },
    { id: "rag", label: "RAG technical discovery", compounding: 0.84, bolton: 0.7, magnitude: 4, lit: true },
    { id: "account-ranking", label: "Account-aware search ranking", compounding: 0.8, bolton: 0.78, magnitude: 3, lit: true },
    { id: "visual-search", label: "Visual / part-number search", compounding: 0.8, bolton: 0.55, magnitude: 3, lit: true },
    { id: "account-pricing", label: "Account-based pricing personalization", compounding: 0.85, bolton: 0.55, magnitude: 4, lit: true },
    { id: "pim", label: "AI PIM enrichment", compounding: 0.8, bolton: 0.58, magnitude: 3, lit: true },
    { id: "agentic", label: "Agentic-commerce ready", compounding: 0.95, bolton: 0.25, magnitude: 4, lit: true },
    { id: "second-search", label: "A second search engine", compounding: 0.25, bolton: 0.8, magnitude: 1, lit: false },
    { id: "chatbot", label: "Generic live-chat bot", compounding: 0.16, bolton: 0.9, magnitude: 1, lit: false },
    { id: "llm-copy", label: "LLM product copy", compounding: 0.1, bolton: 0.78, magnitude: 1, lit: false },
  ],

  // ── Below the gate (payoff), never in the initial payload ──
  payoff: {
    headlineOpportunity: [1.5, 5],
    moneyPools: [
      {
        id: "aeo",
        label: "AEO: demand the AI engines send you, not the resellers",
        range: [0.5, 2],
        note: "AI engines now route supplier-research demand to whoever they cite, and ChatGPT referrals convert about 31% higher than non-branded organic. Watts Water gets cited by Perplexity over competitors. AEO on CRL's spec library captures demand that today goes elsewhere.",
        credibility: "verified",
        source: SRC.watts,
      },
      {
        id: "discovery",
        label: "Discovery: failed catalog lookups recovered",
        range: [0.3, 1.5],
        note: "On a catalog this deep, a failed lookup becomes a rep call or a lost sale. Spec-grounded RAG and visual or part-number search recover them; Grainger runs sub-three-second visual matching as the proof.",
        credibility: "verified",
        source: SRC.grainger,
      },
      {
        id: "self-service",
        label: "Account self-service: rep-assisted orders go hands-off",
        range: [0.3, 1],
        note: "Tie Dynamic Yield to fabricator and contractor pricing, bridged from SAP S/4, so accounts see their own price and reorder without a rep.",
        credibility: "verified",
        source: SRC.researchDump,
      },
      {
        id: "foundation",
        label: "Foundation: catalog data made AI-ready",
        range: [0.2, 0.5],
        note: "AEO, RAG and ranking all run on complete, machine-readable spec data. AI PIM enrichment cuts manual data time up to 60% and gates the rest.",
        credibility: "verified",
        source: SRC.researchDump,
      },
    ],
    roadmap: [
      {
        phase: "Phase 1, starts now",
        title: "AEO and account-aware ranking",
        body: "AEO on one product family's spec content until a named AI engine cites CRL, plus account-aware ranking on the existing Algolia. This is the Watts Water pattern, and it is the wedge, riding tools already in place.",
        active: true,
      },
      {
        phase: "Phase 2, 3 to 6 months",
        title: "RAG and visual search",
        body: "Spec-grounded RAG discovery and visual or part-number search for the part in hand, in the Grainger pattern.",
      },
      {
        phase: "Phase 3, 6 to 12 months",
        title: "Account pricing from SAP S/4",
        body: "Bridge contract pricing into Dynamic Yield and the storefront so accounts self-serve at their own price.",
      },
      {
        phase: "Phase 4, the foundation",
        title: "PIM enrichment and agentic readiness",
        body: "AI PIM enrichment for a complete, machine-readable catalog, then agentic-commerce readiness. The data work begins in Phase 1 and matures here.",
      },
    ],
    // ── The play shortlist, surgical and self-funding across discovery, commerce and the foundation ──
    plays: [
      // DISCOVERY
      {
        id: "aeo",
        pillar: "storefront",
        title: "Answer Engine Optimization",
        problem:
          "Buyers research in AI engines now, and those engines cite competitors and resellers instead of CRL.",
        caseName: "Watts Water",
        caseDetail:
          "Watts Water gets cited by Perplexity over competitors; AI referral visits hit 1.13B in June 2025, up 357%.",
        roi: "Capturing supplier-research demand that today goes elsewhere, on spec content you own.",
        whatI95Does:
          "Structure CRL's spec and FAQ content into schema and feeds so AI engines cite it, starting with one family.",
        credibility: "verified",
        source: SRC.watts,
      },
      {
        id: "rag",
        pillar: "storefront",
        title: "Spec-grounded RAG discovery",
        problem:
          "Glaziers ask precise technical questions, and a generic answer is worse than none.",
        caseName: "Grainger",
        caseDetail:
          "Grainger runs RAG discovery on 2.5M SKUs in production.",
        roi: "Recovering failed technical lookups that otherwise become a call or a lost sale.",
        whatI95Does:
          "Spec-grounded RAG on the CRL catalog, grounded in real product data.",
        credibility: "verified",
        source: SRC.grainger,
      },
      {
        id: "visual-search",
        pillar: "storefront",
        title: "Visual and part-number search",
        problem:
          "Fabricators have the part, not the number, and a failed lookup is a call.",
        caseName: "Grainger",
        caseDetail:
          "Grainger runs sub-three-second visual part matching.",
        roi: "Every shift from rep to digital recovers margin and time.",
        whatI95Does:
          "Visual and part-number search on the catalog, integrated to inventory.",
        credibility: "verified",
        source: SRC.grainger,
      },
      // COMMERCE AND THE FOUNDATION
      {
        id: "account-aware",
        pillar: "storefront",
        title: "Account-aware ranking and pricing on existing tools",
        problem:
          "Algolia and Dynamic Yield run on behavior, not on the account's contract price and approved items.",
        caseName: "B2B rails",
        caseDetail:
          "The B2B rule is that contract pricing and entitlements are the rails any AI must respect.",
        roi: "More self-service and trust on the accounts that matter, without a new tool.",
        whatI95Does:
          "Account-aware ranking and pricing layered on Algolia and Dynamic Yield, bridged to SAP S/4.",
        credibility: "illustrative",
        source: SRC.b2bRails,
      },
      {
        id: "pim",
        pillar: "foundation",
        title: "AI PIM enrichment and agentic readiness",
        problem:
          "Incomplete attributes block AEO, RAG and agentic discovery on a huge catalog.",
        caseName: "AI PIM, Gartner",
        caseDetail:
          "AI PIM enrichment cuts manual data time up to 60%; Gartner projects most B2B purchases AI-intermediated by 2028.",
        roi: "A complete, machine-readable catalog that AI engines and agents can use.",
        whatI95Does:
          "AI-drafted, human-approved enrichment and API-first, contract-aware catalog structure.",
        credibility: "verified",
        source: SRC.pim,
      },
    ],
    why: {
      opener: "You'll be sold a second search engine. Your gain is the catalog that answers for itself.",
      body: "The search vendors will sell you another engine and the chat vendors a bot, and you already run Algolia and Dynamic Yield. Your gap is the answer layer and the commerce-to-SAP bridge that make what you own work harder. That is exactly i95Dev's lane: the layer on top and the integration seam, surgical and self-funding, priced for a cost-disciplined owner. With no SI of record, the work is open, and AEO is a window almost no glazing distributor has stepped through.",
      ctaTitle: "Book your AEO and Discovery Diagnostic",
      ctaSubtitle:
        "A fixed-scope assessment that scopes AEO on one product family, sizes the AI-discovery and failed-lookup upside against CRL's catalog, and maps the layer onto Algolia and SAP. Weeks, not a platform program.",
      credibility: { brands: "500+ B2B brands", years: "25+ years", projects: "1,200+ projects" },
    },
  },
};
