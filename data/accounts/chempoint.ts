import type { AccountConfig } from "@/lib/types";

// Sources reused across the report (Verified vs. Illustrative labelled per-claim, spec section 8).
const SRC = {
  mit: { label: "MIT NANDA, ~95% of pilots", url: "https://nanda.media.mit.edu/" },
  askcp: {
    label: "Ask ChemPoint launch, D. Perez",
    url: "https://www.chempoint.com/news/2026/chempoint-introduces-ask-chempoint-ai-powered-prod",
  },
  aeo: { label: "AI referrals +357% YoY (2025)", url: "https://www.perplexity.ai/" },
  grainger: { label: "Grainger / Databricks RAG (2.5M SKUs)", url: "https://www.databricks.com/customers/grainger" },
  dawn: { label: "Dawn Foods, DC360", url: "https://www.digitalcommerce360.com/" },
  sonepar: { label: "Sonepar, 7 AI agents, digital +50%", url: "https://www.digitalcommerce360.com/" },
  jci: { label: "Johnson Controls, whitespace/churn", url: "https://www.mckinsey.com/" },
  sandvik: { label: "Sandvik Coromant, AI enablement", url: "https://www.sandvik.coromant.com/" },
  zilliant: { label: "Zilliant / PROS, distributor RGM", url: "https://www.zilliant.com/" },
  mck: { label: "McKinsey B2B pricing, $15B distributor", url: "https://www.mckinsey.com/" },
  brf: { label: "BRF, SAP IBP demand sensing", url: "https://www.sap.com/" },
  resilinc: { label: "Resilinc / Everstream, supplier risk", url: "https://www.resilinc.com/" },
  stibo: { label: "Stibo / Informatica, MDM Leaders", url: "https://www.stibosystems.com/" },
  millipore: { label: "MilliporeSigma, entitlement reorder", url: "https://www.sigmaaldrich.com/" },
} as const;

/**
 * ChemPoint, the fully-worked reference account. Every section is grounded in the
 * Account-360 profile and the AI research dump, and spans all three pillars
 * (storefront, sales and marketing, back office) plus the data foundation.
 *
 * Profile: a "marketing and sales firm with a distribution backbone", demand creation
 * for chemical producers; ~$222-236M est.; 90+ suppliers, 200+ exclusive lines,
 * 30+ warehouses (asset-light 3PL); 100+ countries. Stack: Kentico Xperience on Azure,
 * Salesforce/Dynamics XRM, TradeCentric punchout, 6sense, ClickDimensions, BrightEdge;
 * custom storefront (Dynamic and Guest Pricing, Quote-Based Commerce); supplier portal
 * ChemPointConnect; IngredientPoint.com vertical. Triple trigger (June-July 2026):
 * CEO Kelley (cloud-ERP/digital-commerce mandate), Ask ChemPoint live, standalone Univar
 * segment. Stated priorities: Marketplace, Personalization, UX/testing, conversational
 * search. Guardrail: do not pitch a Kentico replatform; lead with the data and AI on top.
 */
export const chempoint: AccountConfig = {
  slug: "chempoint",
  companyName: "ChemPoint",
  aliases: ["Chem Point", "ChemPoint.com", "IngredientPoint", "Univar"],
  domains: ["chempoint.com", "ingredientpoint.com"],
  vertical: "chemical-distribution",
  verticalLabel: "Specialty-chemical distribution",
  revenueBand: "$150–300M",
  role: "Digital Product Owner / Head of Marketing",
  roleEmphasis: "ecommerce",
  activeRequirement: true,
  published: true,

  thesis: "Ask ChemPoint is live. Now make AI cite you, not your suppliers.",
  wedge: "Answer Engine Optimization and the structured answer layer behind Ask ChemPoint",
  wedgeDetail:
    "High value, runs on the technical content you already own, and fast to prove. Almost no chemical seller is doing it systematically, which makes the citation window wide open right now.",

  // ── Module 1, The Reframe (above gate) ──
  reframe: {
    opener: "Everyone here is selling you AI. The model is the cheapest thing in the room.",
    stat: "95%",
    statSource: SRC.mit,
    body: "95% of enterprise AI pilots return nothing to the P&L. They sit next to the work instead of inside it. You are already past the demo: Ask ChemPoint went live June 1. The edge now is not a better model. It is pointing ordinary AI at what Brenntag and direct-selling producers cannot copy: 25 years of technical answers, your exclusive-line data, and the buyer relationships only ChemPoint owns.",
  },

  // ── Module 2, The Hype Filter (above gate) ──
  hypeFilter: {
    opener: "Commodity AI runs on the model. Compounding AI runs on what only you own.",
    commodity: [
      "A chatbot bolted onto the site",
      "LLM product copy that cannot vouch for your specs",
      "Generic recs that ignore contract and guest pricing",
      "Basic ML forecasting relabeled as \"AI\"",
    ],
    compounding: [
      "Ask ChemPoint, grounded in spec data it cannot fake",
      "AEO, so ChatGPT and Perplexity cite you",
      "Account-based pricing on the rails you already built",
      "Demand sensing that keeps your exclusive lines in stock",
    ],
    pitchWarning:
      "You run Kentico on Azure, so expect a pitch for a Copilot on everything and a quiet replatform. Skip both. Ask ChemPoint is only as trustworthy as the product data behind it, and that asset is already yours.",
  },

  // Stack to play match + commodity flag (Account-360 confirmed stack)
  stackFlags: [
    {
      signal: "Kentico Xperience on Azure",
      leadPlay: "Make the CMS the answer layer: AI PIM enrichment plus a schema feed",
      commodityFlag: "A rip-and-replace. The unlock is structured data, not a new CMS.",
    },
    {
      signal: "6sense + ClickDimensions",
      leadPlay: "Signal-based GTM: route intent to the right inside rep automatically",
      commodityFlag: "More intent data. 91% of firms buy it; only 24% get real ROI. The gap is activation.",
    },
    {
      signal: "Salesforce / Dynamics XRM",
      leadPlay: "Connect CRM, commerce and PIM for account-based pricing and next-best-action",
      commodityFlag: "\"Agentforce for everything.\" It only works on clean data; ~33% of Salesforce AI hits ROI.",
    },
    {
      signal: "TradeCentric (B2B punchout)",
      leadPlay: "Procurement enablement and OMS into customer eProcurement. Core i95Dev territory.",
    },
    {
      signal: "Custom storefront (Dynamic and Guest Pricing)",
      leadPlay: "Account-based entitlement and behavioral personalization. You own the rails.",
      commodityFlag: "A replatform. The custom build is an asset, not a liability.",
    },
  ],

  // ── Module 3, The Commodity-vs-Compounding Map (above gate) ──
  // Y: 0 commodity to 1 compounding · X: 0 foundation-required to 1 bolt-on-ready
  mapPlays: [
    { id: "aeo", label: "AEO + answer layer", compounding: 0.95, bolton: 0.85, magnitude: 4, lit: true, wedge: true },
    { id: "search", label: "B2B / RAG search", compounding: 0.8, bolton: 0.72, magnitude: 4, lit: true },
    { id: "intent", label: "Signal-based GTM", compounding: 0.78, bolton: 0.68, magnitude: 4, lit: true },
    { id: "crosssell", label: "Cross-sell / NBA", compounding: 0.82, bolton: 0.55, magnitude: 4, lit: true },
    { id: "pricing", label: "Pricing / RGM", compounding: 0.9, bolton: 0.5, magnitude: 5, lit: true },
    { id: "demand", label: "Demand + supplier risk", compounding: 0.7, bolton: 0.36, magnitude: 3, lit: true },
    { id: "pim", label: "AI PIM / MDM", compounding: 0.85, bolton: 0.3, magnitude: 3, lit: true },
    { id: "agentic", label: "Agentic-commerce ready", compounding: 0.95, bolton: 0.2, magnitude: 5, lit: true },
    { id: "chatbot", label: "Generic chatbot", compounding: 0.14, bolton: 0.9, magnitude: 1, lit: false },
    { id: "copy", label: "LLM product copy", compounding: 0.1, bolton: 0.78, magnitude: 1, lit: false },
    { id: "forecast", label: "ML forecasting (relabeled)", compounding: 0.4, bolton: 0.42, magnitude: 2, lit: false },
  ],

  // ── Below the gate (payoff), never in the initial payload ──
  payoff: {
    headlineOpportunity: [5, 18],
    moneyPools: [
      {
        id: "margin",
        label: "Margin: pricing you already negotiated, leaking",
        range: [1.5, 6],
        note: "Distributors lose 1.5–2.5% of margin to quote drift and discount creep across thousands of SKUs. A McKinsey-cited $15B distributor recovered 200 basis points in 10 weeks, then 50 more with agentic AI. Your storefront already runs Dynamic and Guest Pricing. The AI layer just enforces, per account, the margin you already negotiated.",
        credibility: "verified",
        source: SRC.mck,
      },
      {
        id: "discovery",
        label: "Discovery: found by AI buyers, not just Google",
        range: [1, 5],
        note: "AI engines drove 1.13B referral visits in June 2025, up 357% year on year, and convert about 31% higher than organic. 66% of senior B2B buyers now use AI for supplier research. The citation goes to whoever structured their data. Almost no chemical seller has, and your David Perez already flagged it.",
        credibility: "illustrative",
        source: SRC.aeo,
      },
      {
        id: "installed-base",
        label: "Installed base: defend it against producer-direct",
        range: [1.5, 3],
        note: "Selling to buyers who already trust you is 5–7x cheaper than new logos, and cross-sell converts 3–4x more often. As BASF and Evonik push direct, propensity and next-best-action on your own order history is the strongest defense at your scale. Johnson Controls tracked $100M+ of protectable revenue this way, $35M per point of attrition.",
        credibility: "verified",
        source: SRC.jci,
      },
      {
        id: "operations",
        label: "Operations: protect the lines that are your franchise",
        range: [1, 4],
        note: "Your franchise is 200+ exclusive lines across 30+ warehouses in 100+ countries. A stockout or a supply shock on an exclusive line is not a lost order, it is a producer mandate at risk. Demand sensing on your own order history frees about 10–12% of inventory working capital, and multi-tier supplier-risk gives 60–90 day warnings that head off 1–2 disruptions a year worth $2–10M each. BRF's SAP IBP demand sensing cut planning time 33%.",
        credibility: "verified",
        source: SRC.brf,
      },
    ],
    roadmap: [
      {
        phase: "Phase 1, starts now",
        title: "Storefront: ground Ask ChemPoint, turn on AEO",
        body: "Make every Ask ChemPoint answer spec-accurate from an enriched PIM, then feed that same data to ChatGPT, Perplexity and Google AI so they cite ChemPoint. It runs on content you own and lands inside Kelley's first 90 days. This is the wedge.",
        active: true,
      },
      {
        phase: "Phase 2, 3 to 6 months",
        title: "Sales and marketing: convert the demand you create",
        body: "Wire 6sense and ClickDimensions intent, on-site behavior and AEO traffic into next-best-action for inside sales. Add B2B-aware search and cross-sell propensity to defend the base. This is your core engine; make it AI-native.",
      },
      {
        phase: "Phase 3, 6 to 12 months",
        title: "Pricing, personalization and marketplace",
        body: "Account-based pricing, entitlement and behavioral personalization across the storefront and IngredientPoint. These are your stated Marketplace and Personalization priorities, wired through Salesforce and TradeCentric.",
      },
      {
        phase: "Phase 4, back office and the agentic bet",
        title: "Demand sensing, supplier risk, agentic readiness",
        body: "Layer demand sensing and multi-tier supplier-risk onto your forecasting and ChemPointConnect, and make the catalog machine-purchasable for AI buyers (Google AP2, Anthropic MCP). Gartner expects 90% of B2B purchases to be AI-intermediated by 2028. The risk is being invisible, not being behind.",
      },
    ],
    // ── The play shortlist, spanning all three pillars plus the foundation ──
    plays: [
      // STOREFRONT & DISCOVERY
      {
        id: "aeo",
        pillar: "storefront",
        title: "AEO and Ask ChemPoint as the cited answer layer",
        problem:
          "The buyer's first question now goes to ChatGPT or Perplexity, not Google. If the AI answers from BASF's data, the spec and the relationship route around you.",
        caseName: "Grainger, Watts Water",
        caseDetail:
          "Grainger runs RAG over 2.5M SKUs in production (about $6M a year in deflected technical calls). Watts structured its spec guides so Perplexity cites it over rivals for \"backflow preventer selection.\"",
        roi: "AI referrals convert about 31% higher than organic and grew 357% year on year. The most underpriced B2B acquisition window of 2026.",
        whatI95Does:
          "Build the PIM-to-schema-to-answer pipeline that grounds Ask ChemPoint and makes your 200+ lines machine-citable across every AI engine. On Kentico, no replatform.",
        credibility: "illustrative",
        source: SRC.grainger,
      },
      {
        id: "search",
        pillar: "storefront",
        title: "B2B-aware semantic and spec search",
        problem:
          "Chemical buyers search by CAS number, grade, function and equivalence, not your SKU names. A failed lookup is a $40-60 rep call or an order lost to Brenntag.",
        caseName: "Dawn Foods",
        caseDetail:
          "An ingredient wholesaler (your IngredientPoint analog) on commercetools and Algolia ran AI search plus behavioral recs: 75%+ digital adoption, 30% faster time-to-order, +10% baskets, triple-digit online growth.",
        roi: "AI search converts about 1.67x keyword (4.6% vs 2.8%). On a ~$222M base with ~40% via search, a 1.5x lift is a multi-million swing.",
        whatI95Does:
          "Semantic and spec-equivalence search with hard eligibility filters and B2B ranking (line, inventory, contract) across chempoint.com and IngredientPoint.",
        credibility: "verified",
        source: SRC.dawn,
      },
      {
        id: "pricing",
        pillar: "storefront",
        title: "Account-based pricing, entitlement and personalization",
        problem:
          "A wrong price or an unentitled SKU is instant trust loss. Your Dynamic and Guest Pricing logic spans Salesforce/XRM, ERP and the storefront, and the storefront can't see all of it.",
        caseName: "MilliporeSigma",
        caseDetail:
          "MilliporeSigma runs account-based entitlement and AI reorder on approved lists for regulated buyers. This is the rail every other storefront play runs on.",
        roi: "Cutting rep-assisted orders from ~40% to ~25% saves several million a year at ChemPoint's scale, and it is the rail every other storefront play runs on.",
        whatI95Does:
          "Integrate Salesforce/XRM, commerce and TradeCentric so contract and guest pricing, approved lines and personalization render correctly per logged-in account. Your Personalization priority, shipped.",
        credibility: "illustrative",
        source: SRC.millipore,
      },
      // SALES & MARKETING (the demand-creation engine)
      {
        id: "intent",
        pillar: "sales-marketing",
        title: "Signal-based GTM: intent into inside-sales plays",
        problem:
          "You're a demand-creation firm with 6sense and ClickDimensions already in the stack, but intent rarely reaches the right rep with the right next step at the right moment. About 60% of SDR capacity targets out-of-market accounts.",
        caseName: "Ivanti + 6sense, Sonepar",
        caseDetail:
          "Ivanti fused intent into GTM for a 154% higher win rate and $263M of influenced pipeline. Sonepar's 7 production AI agents helped drive digital sales up 50% year on year.",
        roi: "Signal-based GTM is reallocation, not new spend: existing headcount onto 2-3x more in-market pipeline.",
        whatI95Does:
          "Connect 6sense and ClickDimensions intent, on-site behavior and AEO traffic into a next-best-action layer in Salesforce, closing the loop from anonymous research to named opportunity.",
        credibility: "verified",
        source: SRC.sonepar,
      },
      {
        id: "crosssell",
        pillar: "sales-marketing",
        title: "Cross-sell propensity and next-best-action",
        problem:
          "BASF and Evonik are going direct. Your defensible margin is the buyers who already trust you, but reorder timing and white-space cross-sell stay manual and invisible until an account churns.",
        caseName: "Johnson Controls",
        caseDetail:
          "Propensity and whitespace models tracked $100M+ of protectable revenue ($35M per attrition point) and unlocked $40M from 23 accounts. Whitespace-managed accounts grow 9% versus 5-6%.",
        roi: "8-12 points of NRR, 15-30% churn reduction, $4-7 returned per $1. The highest-leverage defense against disintermediation.",
        whatI95Does:
          "Churn and cross-sell propensity on your order history and ChemPointConnect data, surfaced as rep alerts in Salesforce and reorder nudges on-site.",
        credibility: "verified",
        source: SRC.jci,
      },
      {
        id: "copilot",
        pillar: "sales-marketing",
        title: "Technical-seller copilot and conversation intelligence",
        problem:
          "Your edge is technical expertise delivered by inside sellers, but ramp is slow (4 to 9 months) and the best answers live in people's heads, not a system.",
        caseName: "Sandvik Coromant",
        caseDetail:
          "An AI enablement pilot saved 120+ hours and about $19K in three weeks. Gartner finds next-best-action teams are 2.6x more likely to hit commercial growth.",
        roi: "A copilot grounded in the same PIM and answer layer turns every rep into your best technical rep, and faster onboarding compounds as the new segment scales.",
        whatI95Does:
          "A seller copilot plus call and email intelligence grounded in your product data and won-deal patterns, inside the CRM the team already uses.",
        credibility: "illustrative",
        source: SRC.sandvik,
      },
      // BACK-OFFICE & OPERATIONS
      {
        id: "demand",
        pillar: "back-office",
        title: "Demand sensing and multi-tier supplier-risk",
        problem:
          "200+ exclusive lines, 30+ warehouses, and chemical supply that swings on a single plant outage. Classic forecasting misses the signal until the stockout, which puts your supplier mandates at risk.",
        caseName: "BRF, Resilinc/Everstream",
        caseDetail:
          "BRF's SAP IBP demand sensing cut planning time 33%. Supplier-risk networks give 60-90 day advance warnings and 30-40% faster response, avoiding 1-2 events a year worth $2-10M each.",
        roi: "Demand sensing frees about 10-12% of inventory; risk intelligence is asymmetric insurance at roughly $200-500K a year.",
        whatI95Does:
          "Layer demand-sensing and supplier-risk signals onto your existing forecasting and ChemPointConnect, so planners and suppliers see disruption before it hits the line.",
        credibility: "verified",
        source: SRC.resilinc,
      },
      // FOUNDATION
      {
        id: "pim",
        pillar: "foundation",
        title: "AI Master Data and PIM, the foundation under all of it",
        problem:
          "30-60% of B2B catalogs have incomplete attributes, and 87% of leaders say bad data has hampered AI value. Every play above (Ask ChemPoint, AEO, search, agentic) fails on dirty product data.",
        caseName: "Stibo, Informatica",
        caseDetail:
          "Agentic PIM and MDM bulk-enrich attributes from supplier SDS and PDFs with human-in-the-loop, standardize units and classification, and score quality continuously (Gartner MDM Leaders).",
        roi: "60-70% less manual stewardship, and it gates the ROI of every other initiative. The cheapest insurance on the whole portfolio.",
        whatI95Does:
          "AI-enriched PIM and MDM that extracts attributes from supplier docs and feeds Kentico, search, AEO and the answer layer from one source of truth.",
        credibility: "illustrative",
        source: SRC.stibo,
      },
    ],
    why: {
      opener: "You'll be sold a $3M transformation. Your problem might be a six-week fix.",
      body: "The Big-4 are built for enterprise-wide change. Your wedge is not enterprise-wide. It is the structured data behind an answer engine you already shipped. That is exactly i95Dev's lane: surgical, deep in commerce and ERP, data-foundation first, on mid-market economics. We do not replatform your Kentico build. We make it compound, in time for the new segment's first quarter.",
      ctaTitle: "Book your AI-in-Commerce Diagnostic",
      ctaSubtitle:
        "A fixed-scope, fixed-fee readiness assessment that validates these directional numbers against ChemPoint's real data. Two weeks, not a $3M transformation.",
      credibility: { brands: "500+ B2B brands", years: "25+ years", projects: "1,200+ projects" },
    },
  },
};
