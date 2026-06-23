import type { AccountConfig } from "@/lib/types";

// Sources reused across the report (Verified vs. Illustrative labelled per-claim, spec section 14).
const SRC = {
  mit: { label: "MIT NANDA, ~95% of pilots", url: "https://nanda.media.mit.edu/" },
  grainger: { label: "Grainger, RAG over 2.5M SKUs (Databricks / DC360)", url: "https://www.grainger.com/" },
  graingerGrowth: { label: "Grainger 10.1% Q1 sales growth (DC360)", url: "https://www.grainger.com/" },
  aiSearch: { label: "AI search ~1.67x keyword conversion (research dump, Part 3.2)", url: "https://www.i95dev.com/" },
  visual: { label: "Grainger sub-3s visual part matching (research dump, Part 3.2)", url: "https://www.grainger.com/" },
  pim: { label: "AI PIM enrichment cuts manual data time up to 60% (research dump, Part 3.2)", url: "https://www.i95dev.com/" },
  referrals: { label: "AI referral visits 1.13B in June 2025 (research dump, Part 3.2)", url: "https://www.similarweb.com/" },
  copilot: { label: "Only 16% of M365 Copilot deployments reach production, Gartner (research dump, Part 4.1)", url: "https://www.gartner.com/" },
  agentic: { label: "Most B2B purchases AI-intermediated by 2028, Gartner (research dump, Part 3.2)", url: "https://www.gartner.com/" },
  hana: { label: "HD Supply SAP HANA, sub-10ms pricing (Account 360)", url: "https://www.hdsupply.com/" },
} as const;

/**
 * HD Supply (The Home Depot), an active-requirement account (IT-owned $27M budget, named agenda,
 * proven execution). Every section is grounded in the Account-360 profile and the AI research dump,
 * and maps 1:1 to companies/hd-supply/hd-supply-spec.md.
 *
 * Spine: HD Supply already won the hard infrastructure fight, so the next gain is not faster code, it
 * is the buyer finding and reordering without a rep. The SAP HANA migration planned for 18 months
 * landed in 9, with a 66% IT-productivity gain and sub-10ms pricing. It arrived at B2B Connect with a
 * named agenda, AI-enabled SDLC, eCommerce software delivery and Optimizely B2B CMS, backed by a $27M
 * budget under VP Technology Emil DiMotta. AI that writes code faster is the easiest thing to demo and
 * the hardest to bank, table-stakes within 18 months. The compounding gain is one layer down, where a
 * contractor still phones a rep to find the right part. Grainger is the proof, running RAG technical
 * discovery in production on 2.5M SKUs. Write to Emil DiMotta (VP Technology, champion and economic
 * buyer) and Long Lam (Director, technical influencer), to the delivery and AI-SDLC agenda, then steer
 * it toward the buyer-facing payoff. Guardrail: SAP is the core, lead with AI-enabled commerce delivery
 * and integration, never an ERP play, and treat AI-SDLC as real but table-stakes, the means not the moat.
 */
export const hdSupply: AccountConfig = {
  slug: "hd-supply",
  companyName: "HD Supply",
  aliases: [
    "HD Supply (The Home Depot)",
    "The Home Depot",
    "Home Depot Pro",
    "HD Supply Solutions",
  ],
  domains: ["hdsupply.com", "hdsupplysolutions.com"],
  vertical: "industrial-distribution",
  verticalLabel: "MRO / facilities-maintenance distribution",
  revenueBand: "$1B+",
  role: "VP Technology",
  roleEmphasis: "ai-strategy",
  activeRequirement: true,
  published: true,

  thesis: "AI that writes your code is table stakes. AI that answers your buyer is the moat.",
  wedge:
    "RAG technical discovery: answer a spec question on your catalog before a rep picks up",
  wedgeDetail:
    "Grainger runs exactly this in production on 2.5M SKUs with Databricks, deflecting technical calls that cost $40 to $80 each. It runs on the product data you already hold in SAP HANA, and it is the eCommerce software delivery you came for, aimed at the highest-value workflow you have.",

  // ── Module 1, The Reframe (above gate) ──
  reframe: {
    opener: "Everyone here is selling you AI that writes code faster. Your buyers are stuck one layer down, unable to find a part.",
    stat: "95%",
    statSource: SRC.mit,
    body: "95% of enterprise AI pilots return nothing to the P&L, and AI-enabled SDLC is the easiest of all to demo and the hardest to bank. HD Supply already did the hard infrastructure work: the SAP HANA migration planned for 18 months landed in 9, with sub-10ms pricing. That speed is wasted if a contractor still phones a rep to find the right part. Point AI at the catalog instead of the codebase and it runs on the asset Grainger and Ferguson cannot copy: your SAP HANA pricing engine, your MRO catalog, and the Home Depot Pro relationship behind it.",
  },

  // ── Module 2, The Hype Filter (above gate) ──
  hypeFilter: {
    opener: "Commodity AI accelerates how you build. Compounding AI accelerates how your buyer finds and reorders.",
    commodity: [
      "AI-SDLC copilots that speed the build, not the sale",
      "A storefront chatbot that cannot read a spec",
      "Optimizely content with no product data behind it",
      "Generic recs blind to contract pricing",
    ],
    compounding: [
      "RAG discovery on the full MRO catalog",
      "Visual and spec search for the part in hand",
      "Account-based pricing live from SAP HANA",
      "AEO so AI engines cite your SKUs",
    ],
    pitchWarning:
      "You arrived with an AI-SDLC and commerce-delivery agenda, so expect a pitch for copilots that make engineers faster. Real, and table-stakes within 18 months. The delivery that compounds is the AI you ship to the buyer: search and discovery on the catalog, fed by the SAP HANA data you already migrated. Build velocity is the means. Buyer velocity is the moat.",
  },

  // ── Module 2.5, Your Stack (verified from the Account 360; reconcile flagged items live) ──
  stackFlags: [
    {
      signal: "SAP HANA (sub-10ms pricing)",
      leadPlay: "Serve account-specific price and inventory into search and discovery in real time",
      commodityFlag: "Another data platform. You already own the real-time engine.",
    },
    {
      signal: "Adobe Commerce / Experience",
      leadPlay: "Layer RAG discovery and account personalization onto the existing storefront",
      commodityFlag: "A replatform. The unlock is AI on top, not a new platform.",
    },
    {
      signal: "Optimizely B2B CMS",
      leadPlay: "Make content the answer layer: spec-grounded discovery and AEO feeds",
      commodityFlag: "More page templates. The value is structured, machine-readable product data.",
    },
    {
      signal: "Google Cloud + Splunk",
      leadPlay: "Run RAG and observability on infrastructure you already trust",
      commodityFlag: "A new cloud. Build on what is already instrumented.",
    },
  ],

  // ── Module 3, The Commodity-vs-Compounding Map (above gate) ──
  // Y: 0 commodity to 1 compounding · X: 0 foundation-required to 1 bolt-on-ready (wedge = top-right)
  mapPlays: [
    { id: "rag", label: "RAG technical discovery", compounding: 0.85, bolton: 0.78, magnitude: 4, lit: true, wedge: true },
    { id: "pricing", label: "Account-based pricing / personalization", compounding: 0.86, bolton: 0.65, magnitude: 5, lit: true },
    { id: "b2b-search", label: "B2B-aware search", compounding: 0.82, bolton: 0.8, magnitude: 4, lit: true },
    { id: "visual", label: "Visual / spec search", compounding: 0.8, bolton: 0.55, magnitude: 3, lit: true },
    { id: "aeo", label: "AEO + answer layer", compounding: 0.9, bolton: 0.74, magnitude: 3, lit: true },
    { id: "pim", label: "AI PIM enrichment", compounding: 0.8, bolton: 0.58, magnitude: 3, lit: true },
    { id: "agentic", label: "Agentic-commerce ready", compounding: 0.95, bolton: 0.28, magnitude: 4, lit: true },
    { id: "sdlc", label: "AI-enabled SDLC", compounding: 0.45, bolton: 0.85, magnitude: 2, lit: false },
    { id: "chatbot", label: "Generic storefront chatbot", compounding: 0.15, bolton: 0.9, magnitude: 1, lit: false },
    { id: "copy", label: "LLM product copy", compounding: 0.1, bolton: 0.78, magnitude: 1, lit: false },
  ],

  // ── Below the gate (payoff), never in the initial payload ──
  payoff: {
    headlineOpportunity: [3, 11],
    moneyPools: [
      {
        id: "call-deflection",
        label: "Call deflection: spec questions answered without a rep",
        range: [1, 4],
        note: "Technical calls cost $40 to $80 each, and an MRO catalog generates a lot of them. Grainger runs RAG discovery on 2.5M SKUs to deflect exactly this. Deflecting 20% of a high call volume at $50 each is real money on the desk.",
        credibility: "verified",
        source: SRC.grainger,
      },
      {
        id: "conversion",
        label: "Conversion: AI search lift on the digital mix",
        range: [1, 3],
        note: "AI search converts at roughly 1.67 times keyword, and HD Supply runs a strong eCommerce mix. On the search-driven share of the channel, that lift recovers demand that today fails on a zero-result lookup.",
        credibility: "verified",
        source: SRC.aiSearch,
      },
      {
        id: "account-pricing",
        label: "Account pricing: rep-assisted orders go self-service",
        range: [0.5, 3],
        note: "With sub-10ms pricing already live in HANA, account-aware self-service pricing converts rep-assisted orders into hands-off ones. Cutting rep-assisted orders from 40% to 25% on a large channel saves several million a year.",
        credibility: "verified",
        source: SRC.hana,
      },
      {
        id: "foundation",
        label: "Foundation: catalog and pricing data, AI-ready",
        range: [0.3, 1],
        note: "RAG, search and AEO all run on complete, machine-readable product data. AI PIM enrichment cuts manual data time up to 60% and gates the ROI of the rest.",
        credibility: "verified",
        source: SRC.pim,
      },
    ],
    roadmap: [
      {
        phase: "Phase 1, starts now",
        title: "RAG discovery POC on one category",
        body: "Spec-grounded discovery on one product category, grounded in SAP HANA data, with call deflection measured against a baseline. This is the Grainger pattern, scoped surgically, and it is the wedge.",
        active: true,
      },
      {
        phase: "Phase 2, 3 to 6 months",
        title: "Account pricing and visual search",
        body: "Account-aware pricing and personalization served live from HANA, plus visual and spec search for the part in hand.",
      },
      {
        phase: "Phase 3, 6 to 12 months",
        title: "AEO and PIM enrichment",
        body: "AEO so AI engines cite HD Supply SKUs, on top of AI-enriched, machine-readable catalog data.",
      },
      {
        phase: "Phase 4, the foundation",
        title: "Agentic-commerce readiness",
        body: "Make the catalog contract-aware and API-first for agentic buyers. The data work begins in Phase 1 and matures here.",
      },
    ],
    // ── The play shortlist across discovery, commerce and the foundation, all pointed at the buyer ──
    plays: [
      // DISCOVERY AND THE BUYER EXPERIENCE
      {
        id: "rag",
        pillar: "storefront",
        title: "RAG technical discovery",
        problem:
          "A contractor with a maintenance problem still calls a rep to find the right part and spec, and AI-SDLC does nothing about that.",
        caseName: "Grainger / Databricks",
        caseDetail:
          "Grainger runs RAG discovery on 2.5M SKUs in production to deflect technical calls.",
        roi: "Each deflected technical call saves $40 to $80 and moves the buyer to self-service.",
        whatI95Does:
          "Spec-grounded discovery on one category, grounded in SAP HANA data, ranked on inventory and approved items.",
        credibility: "verified",
        source: SRC.grainger,
      },
      {
        id: "pricing",
        pillar: "storefront",
        title: "Account-based pricing and personalization",
        problem:
          "Sub-10ms pricing lives in HANA but does not always reach the buyer as account-aware self-service.",
        caseName: "HD Supply SAP HANA",
        caseDetail:
          "Cutting rep-assisted orders 40% to 25% on a large channel saves several million a year (research benchmark).",
        roi: "Rep-assisted orders become hands-off, on pricing you already compute in real time.",
        whatI95Does:
          "Serve account-specific price and entitlements live from HANA into the Adobe storefront.",
        credibility: "verified",
        source: SRC.aiSearch,
      },
      {
        id: "visual",
        pillar: "storefront",
        title: "Visual and spec search",
        problem:
          "MRO buyers often have the part, not the number, and a failed lookup is a call or a lost sale.",
        caseName: "Grainger",
        caseDetail:
          "Grainger runs sub-three-second mobile visual part matching.",
        roi: "Every 1% shift from rep to digital saves $1 to $3M a year.",
        whatI95Does:
          "Visual and spec search on the catalog, integrated to HANA inventory.",
        credibility: "verified",
        source: SRC.visual,
      },
      // ACQUISITION AND THE FOUNDATION
      {
        id: "aeo-pim",
        pillar: "foundation",
        title: "AEO and AI PIM enrichment",
        problem:
          "AI engines cite whoever has machine-readable spec content, and incomplete attributes block search and AEO alike.",
        caseName: "Research dump, Part 3.2",
        caseDetail:
          "AI referral visits hit 1.13B in June 2025; AI PIM enrichment cuts manual data time up to 60%.",
        roi: "Being cited by AI engines and a complete, searchable catalog.",
        whatI95Does:
          "AI-drafted, human-approved enrichment plus a schema feed for AEO.",
        credibility: "verified",
        source: SRC.referrals,
      },
      {
        id: "agentic",
        pillar: "foundation",
        title: "Agentic-commerce readiness",
        problem:
          "B2B agentic purchasing is forming, and an unstructured catalog is invisible to it.",
        caseName: "Gartner",
        caseDetail:
          "Gartner projects most B2B purchases AI-intermediated by 2028.",
        roi: "The risk is not being behind in 2026, it is being invisible in 2027 to 2028.",
        whatI95Does:
          "Contract-aware, API-first catalog structure on the clean layer.",
        credibility: "illustrative",
        source: SRC.agentic,
      },
    ],
    why: {
      opener: "You'll be sold faster engineering. Your gain is the buyer who never needs a rep.",
      body: "The AI-SDLC vendors will make this about build velocity, and the Big-4 will make it a program. Your highest-return move is neither. It is shipping AI onto the storefront, RAG discovery, account pricing, visual search, fed by the SAP HANA data you already migrated. That is exactly i95Dev's lane: AI-enabled eCommerce software delivery on the commerce-to-ERP seam, surgical where the Big-4 are sprawling, delivery pods that ship in weeks. Grainger proved the MRO model. We bring it to your catalog.",
      ctaTitle: "Book your AI Commerce-Delivery Diagnostic",
      ctaSubtitle:
        "A fixed-scope assessment that scopes a RAG-discovery POC on one category, sizes the call-deflection and conversion upside against HD Supply's HANA data, and maps the delivery without a platform program. Weeks, not months.",
      credibility: { brands: "500+ B2B brands", years: "25+ years", projects: "1,200+ projects" },
    },
  },
};
