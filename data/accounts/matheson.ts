import type { AccountConfig } from "@/lib/types";

// Sources reused across the report (Verified vs. Illustrative labelled per-claim, spec section 14).
const SRC = {
  mit: { label: "MIT NANDA, ~95% of pilots", url: "https://nanda.media.mit.edu/" },
  usfoods: { label: "US Foods MOXe, +1.3M cases/yr, 90% on platform (DC360)", url: "https://www.usfoods.com/" },
  kawasaki: { label: "Kawasaki Engines USA, self-serve B2B AOV +5x (DC360)", url: "https://www.salesforce.com/" },
  mckinsey: { label: "McKinsey B2B pricing, $15B distributor +200bps then +50bps in 10 weeks", url: "https://www.mckinsey.com/" },
  johnsoncontrols: { label: "Johnson Controls, $100M+ protectable, $35M per attrition point", url: "https://www.johnsoncontrols.com/" },
  grainger: { label: "Grainger, RAG over 2.5M SKUs (Databricks)", url: "https://www.grainger.com/" },
  dawn: { label: "Dawn Foods, AI search on commercetools and Algolia (DC360)", url: "https://www.dawnfoods.com/" },
  sonepar: { label: "Sonepar, 7 production AI agents, digital sales +50% (DC360)", url: "https://www.sonepar.com/" },
  brf: { label: "BRF, SAP IBP demand sensing, planning time -33%", url: "https://www.sap.com/" },
  stibo: { label: "Stibo / Informatica, Gartner MDM Leaders", url: "https://www.stibosystems.com/" },
  millipore: { label: "MilliporeSigma, account-based entitlement and reorder", url: "https://www.milliporesigma.com/" },
  gartner: { label: "Gartner, 90% of B2B purchases AI-intermediated by 2028", url: "https://www.gartner.com/" },
} as const;

/**
 * Nippon Sanso MATHESON (formerly MATHESON Tri-Gas), an active-transformation account (live commerce
 * platform, new US leadership). Every section is grounded in the Account-360 profile and the AI research
 * dump, and maps 1:1 to companies/matheson/matheson-spec.md.
 *
 * Spine: Matheson runs two storefronts and one ERP, and the seam between them is the whole game. A live
 * BigCommerce equipment store sells thousands of regulators, detectors and gas-handling systems today,
 * behind it sits Epicor Avante, and Brian Smith (CDO) is standing up Salesforce Commerce Cloud through
 * MuleSoft and Data Cloud. The hard part is the manual ERP. i95Dev has native pre-built connectors for
 * both BigCommerce and Epicor, the exact systems running in production right now, so the wedge is an
 * 8-to-12-week fix on the store that is already taking orders. Write to Brian Smith (CDO, who owns the
 * seam and presented the transformation publicly), inside new US CEO Alan Draper's first review window.
 * Guardrails: do not pitch a Salesforce replacement. The Commerce Cloud + MuleSoft + Data Cloud decision
 * is made; position i95Dev as the complementary Epicor-integration specialist that de-risks the back-end
 * seam and keeps the live store earning. Complement the SI, do not compete with it.
 */
export const matheson: AccountConfig = {
  slug: "matheson",
  companyName: "Nippon Sanso MATHESON",
  aliases: [
    "Matheson",
    "MATHESON Tri-Gas",
    "Matheson Tri-Gas",
    "Nippon Sanso",
    "Nippon Sanso Holdings",
    "Taiyo Nippon Sanso",
  ],
  domains: ["mathesongas.com", "us.nipponsanso.com"],
  vertical: "industrial-distribution",
  verticalLabel: "Industrial, specialty and medical gas + welding distribution",
  revenueBand: "$1.85B US (est.)",
  role: "Chief Digital Officer",
  roleEmphasis: "ecommerce",
  activeRequirement: true,
  published: true,

  thesis: "Your Salesforce platform is the future. Your live store needs Epicor today.",
  wedge:
    "Native BigCommerce to Epicor integration on the live equipment store that is already taking orders",
  wedgeDetail:
    "Real-time inventory, customer-specific pricing and order sync between the store that is already taking orders and the ERP of record, in 8 to 12 weeks, without waiting for the Salesforce rollout. It runs on systems you already own, both with native i95Dev connectors, so there is no replatform and no new data foundation to finish first. It complements the Salesforce build rather than competing with it, and it keeps revenue flowing on the storefront that exists today.",

  // ── Module 1, The Reframe (above gate) ──
  reframe: {
    opener: "Everyone here is selling you a platform. The platform is the easy decision in the room.",
    stat: "95%",
    statSource: SRC.mit,
    body: "95% of enterprise AI pilots return nothing to the P&L. They fail at the last mile: the integration into systems of record, not the model. You are mid-transformation onto Salesforce Commerce Cloud and that is the right call. But your live BigCommerce store still runs orders through a manual Epicor seam today. The edge now is not a better platform. It is connecting the two systems you already run, BigCommerce and Epicor, on rails only i95Dev has natively built.",
  },

  // ── Module 2, The Hype Filter (above gate) ──
  hypeFilter: {
    opener: "Commodity AI runs on the model. Compounding AI runs on the systems you already own.",
    commodity: [
      "A chatbot bolted onto the store",
      "Generic recs that ignore contract pricing and entitlement",
      "LLM product copy that cannot vouch for a regulator spec",
      "Basic ML forecasting relabeled as \"AI\"",
    ],
    compounding: [
      "Live inventory and pricing the buyer can trust on every SKU",
      "Account-based pricing rendered straight from Epicor",
      "RAG technical search grounded in your equipment data",
      "Demand sensing that keeps medical and specialty gas in stock",
    ],
    pitchWarning:
      "You are mid-Salesforce build, so expect a pitch to put Agentforce and a custom MuleSoft connector on everything at once. Sequence it. The Salesforce platform is the destination, but the live store and the Epicor seam are earning revenue today and that is where the fast, low-risk win is.",
  },

  // ── Module 2.5, Your Stack (verified dashboard research; reconcile flagged items live) ──
  stackFlags: [
    {
      signal: "BigCommerce equipment store (live)",
      leadPlay: "Native ERP integration: live inventory, customer pricing, order sync, in weeks",
      commodityFlag: "\"Wait for the Salesforce cutover.\" The store is earning now; connect it now.",
    },
    {
      signal: "Epicor Avante (ERP of record)",
      leadPlay: "The Epicor side of every commerce seam, on a pre-built connector",
      commodityFlag: "A custom MuleSoft-to-Epicor build at SKU level. Costly, brittle, slow. i95Dev's connector is the shortcut.",
    },
    {
      signal: "Salesforce Commerce Cloud + MuleSoft",
      leadPlay: "Complement the SI: own the Epicor middleware so MuleSoft handles orchestration, not raw ERP plumbing",
      commodityFlag: "\"One vendor for everything.\" The ERP seam is specialist work; that is the lane i95Dev fills.",
    },
    {
      signal: "Salesforce Data Cloud + AI agents",
      leadPlay: "Agents only work on clean order and pricing data; the seam is what makes it clean",
      commodityFlag: "\"Agentforce for everything.\" It only works on trusted data. ~33% of Salesforce AI hits ROI.",
    },
  ],

  // ── Module 3, The Commodity-vs-Compounding Map (above gate) ──
  // Y: 0 commodity to 1 compounding · X: 0 foundation-required to 1 bolt-on-ready (wedge = top-right)
  mapPlays: [
    { id: "bigcommerce-epicor", label: "BigCommerce to Epicor integration", compounding: 0.88, bolton: 0.9, magnitude: 4, lit: true, wedge: true },
    { id: "account-pricing", label: "Account-based pricing & entitlement", compounding: 0.85, bolton: 0.7, magnitude: 4, lit: true },
    { id: "rag-search", label: "B2B / RAG technical search", compounding: 0.8, bolton: 0.66, magnitude: 4, lit: true },
    { id: "cross-sell", label: "Cross-sell / NBA on installed base", compounding: 0.82, bolton: 0.55, magnitude: 4, lit: true },
    { id: "rgm", label: "Pricing / RGM enforcement", compounding: 0.9, bolton: 0.48, magnitude: 5, lit: true },
    { id: "demand-sensing", label: "Demand sensing + supplier risk", compounding: 0.72, bolton: 0.34, magnitude: 4, lit: true },
    { id: "pim", label: "AI PIM / MDM foundation", compounding: 0.85, bolton: 0.3, magnitude: 3, lit: true },
    { id: "agentic", label: "Agentic-commerce ready", compounding: 0.95, bolton: 0.2, magnitude: 4, lit: true },
    { id: "chatbot", label: "Generic chatbot", compounding: 0.14, bolton: 0.9, magnitude: 1, lit: false },
    { id: "llm-copy", label: "LLM product copy", compounding: 0.1, bolton: 0.78, magnitude: 1, lit: false },
    { id: "ml-forecasting", label: "ML forecasting (relabeled)", compounding: 0.4, bolton: 0.42, magnitude: 2, lit: false },
  ],

  // ── Below the gate (payoff), never in the initial payload ──
  payoff: {
    headlineOpportunity: [12, 34],
    moneyPools: [
      {
        id: "margin",
        label: "Margin: pricing you negotiated, leaking across SKUs",
        range: [4, 14],
        note: "Distributors lose 1.5 to 2.5% of margin to quote drift and discount creep across large catalogs. On a ~$1.85B base, even 100 to 200 basis points recovered is enormous. A McKinsey-cited $15B distributor recovered 200 basis points in 10 weeks, then 50 more with agentic AI. The AI layer enforces, per account, the price you already negotiated, rendered straight from Epicor.",
        credibility: "verified",
        source: SRC.mckinsey,
      },
      {
        id: "conversion",
        label: "Conversion: orders the live store can't sync today",
        range: [3, 9],
        note: "A storefront on a manual ERP seam shows wrong stock, list price instead of contract price, and forces a rep call to place the order. US Foods put 90% of customers on its MOXe platform and added 1.3M cases a year with AI ordering tools. For Matheson, simply syncing live inventory, customer pricing and orders between BigCommerce and Epicor converts rep-assisted orders to self-service on a store that is already drawing traffic.",
        credibility: "verified",
        source: SRC.usfoods,
      },
      {
        id: "installed-base",
        label: "Installed base: defend supply contracts, cross-sell",
        range: [3, 7],
        note: "Gas distribution runs on recurring supply contracts. Selling to buyers who already trust you is 5 to 7x cheaper than new logos, and cross-sell converts 3 to 4x more often. Johnson Controls tracked $100M+ of protectable revenue this way, $35M per point of attrition. Propensity and next-best-action on Matheson's own order history defends the contracts that are the business.",
        credibility: "verified",
        source: SRC.johnsoncontrols,
      },
      {
        id: "operations",
        label: "Operations: keep medical and specialty gas in stock",
        range: [2, 4],
        note: "Matheson serves semiconductor fabs, hospitals and labs across 300+ locations. A stockout on a medical or high-purity specialty gas is not a lost order, it is a customer-safety and contract event. Demand sensing on order history frees about 10 to 12% of inventory working capital, and multi-tier supplier-risk gives 60 to 90 day warnings. BRF's SAP IBP demand sensing cut planning time 33%.",
        credibility: "verified",
        source: SRC.brf,
      },
    ],
    roadmap: [
      {
        phase: "Phase 1, starts now",
        title: "The seam: BigCommerce to Epicor live sync",
        body: "Connect real-time inventory, customer-specific pricing and order sync between the live equipment store and Epicor Avante, on i95Dev's native connectors for both. It runs on systems you already own and lands inside Draper's first review window. This is the wedge, and it complements the Salesforce build rather than waiting on it.",
        active: true,
      },
      {
        phase: "Phase 2, 3 to 6 months",
        title: "Storefront: account pricing, technical search, personalization",
        body: "Render account-based pricing and entitlement per logged-in customer, add B2B-aware RAG search across the equipment catalog so buyers find a regulator by spec, and personalize the store by customer tier. These run on the clean, integrated data the Phase 1 seam now provides.",
      },
      {
        phase: "Phase 3, 6 to 12 months",
        title: "Pricing/RGM and installed-base defense",
        body: "Margin enforcement across the catalog, plus churn and cross-sell next-best-action on order history, fueled by Salesforce Data Cloud. This is the biggest dollar pool and it needs the integrated rails from Phases 1 and 2 first.",
      },
      {
        phase: "Phase 4, back office and the agentic bet",
        title: "Demand sensing, supplier risk, agentic readiness",
        body: "Layer demand sensing and multi-tier supplier-risk onto planning, and make the catalog machine-purchasable for AI buyers (Google AP2, Anthropic MCP). Gartner expects 90% of B2B purchases to be AI-intermediated by 2028. The risk is being invisible, not being behind.",
      },
    ],
    // ── The play shortlist, all three pillars plus the foundation, seam-closing plays carry the weight ──
    plays: [
      // STOREFRONT AND DISCOVERY
      {
        id: "bigcommerce-epicor",
        pillar: "storefront",
        title: "BigCommerce to Epicor live integration (the wedge)",
        problem:
          "The live equipment store shows stock and price that the manual Epicor seam cannot keep current, so orders need a rep and self-service stalls.",
        caseName: "US Foods, Kawasaki Engines USA",
        caseDetail:
          "US Foods put 90% of customers on its MOXe digital platform and added 1.3M cases a year once ordering ran on synced data; Kawasaki Engines USA saw AOV rise 5x after wiring order automation into a B2B storefront.",
        roi: "Cutting rep-assisted orders and capturing self-service conversion on an already-trafficked store is a multi-million swing at Matheson's scale.",
        whatI95Does:
          "Connect BigCommerce and Epicor Avante on pre-built native connectors for real-time inventory, customer pricing and order sync. 8 to 12 weeks, no replatform, no waiting on the Salesforce cutover.",
        credibility: "verified",
        source: SRC.usfoods,
      },
      {
        id: "account-pricing",
        pillar: "storefront",
        title: "Account-based pricing, entitlement and personalization",
        problem:
          "A wrong price or an unentitled SKU is instant trust loss. Contract pricing for gas-supply accounts lives in Epicor and the storefront cannot always see it.",
        caseName: "MilliporeSigma",
        caseDetail:
          "MilliporeSigma runs account-based entitlement and AI reorder on approved lists for regulated buyers. This is the rail every other storefront play runs on.",
        roi: "Cutting rep-assisted orders from ~40% to ~25% saves several million a year at Matheson's scale.",
        whatI95Does:
          "Integrate Epicor pricing and entitlement into the storefront so contract pricing and approved lines render correctly per logged-in account, then carry the same logic into the Salesforce platform.",
        credibility: "illustrative",
        source: SRC.millipore,
      },
      {
        id: "rag-search",
        pillar: "storefront",
        title: "B2B-aware semantic and RAG technical search",
        problem:
          "Equipment buyers search by spec, function and equivalence (a regulator for a given gas, pressure and purity), not by your SKU names. A failed lookup is a rep call or an order lost to Airgas.",
        caseName: "Grainger, Dawn Foods",
        caseDetail:
          "Grainger runs RAG over 2.5M SKUs in production (Databricks), deflecting an estimated $6M a year in technical calls; Dawn Foods ran AI search on commercetools and Algolia for 75%+ digital adoption and 30% faster time-to-order.",
        roi: "AI search converts about 1.67x keyword (4.6% vs 2.8%). On the equipment catalog, that is a direct conversion lift.",
        whatI95Does:
          "Spec-grounded semantic and RAG search with hard eligibility filters and B2B ranking across the equipment store, grounded in your product data.",
        credibility: "verified",
        source: SRC.grainger,
      },
      // SALES AND MARKETING (the demand engine)
      {
        id: "cross-sell",
        pillar: "sales-marketing",
        title: "Cross-sell propensity and next-best-action on the installed base",
        problem:
          "The business runs on recurring supply contracts, but reorder timing and white-space cross-sell stay manual and invisible until an account lapses.",
        caseName: "Johnson Controls",
        caseDetail:
          "Johnson Controls propensity and whitespace models tracked $100M+ of protectable revenue ($35M per attrition point) and unlocked $40M from 23 accounts. Whitespace-managed accounts grow 9% versus 5 to 6%.",
        roi: "8 to 12 points of NRR, 15 to 30% churn reduction, $4 to 7 returned per $1. The highest-leverage defense for a contract-based distributor.",
        whatI95Does:
          "Churn and cross-sell propensity on your Epicor order history, surfaced as rep alerts in Salesforce and reorder nudges on the store.",
        credibility: "verified",
        source: SRC.johnsoncontrols,
      },
      {
        id: "signal-gtm",
        pillar: "sales-marketing",
        title: "Signal-based GTM and conversion intelligence",
        problem:
          "Demand signals from the store and the new Data Cloud rarely reach the right rep with the right next step at the right moment.",
        caseName: "Sonepar, Ivanti",
        caseDetail:
          "Sonepar's 7 production AI agents helped drive digital sales up 50% year on year; Ivanti fused intent into GTM for a 154% higher win rate and $263M of influenced pipeline.",
        roi: "Signal-based GTM is reallocation, not new spend: existing headcount onto 2 to 3x more in-market pipeline.",
        whatI95Does:
          "Connect store behavior and Data Cloud signals into a next-best-action layer in Salesforce, closing the loop from browse to named opportunity.",
        credibility: "verified",
        source: SRC.sonepar,
      },
      // BACK OFFICE AND OPERATIONS
      {
        id: "demand-sensing",
        pillar: "back-office",
        title: "Demand sensing and multi-tier supplier-risk",
        problem:
          "Medical, specialty and high-purity gases across 300+ locations, with supply that swings on a single plant or logistics event. Classic forecasting misses the signal until the stockout, and a stockout here is a safety and contract event.",
        caseName: "BRF, Resilinc / Everstream",
        caseDetail:
          "BRF's SAP IBP demand sensing cut planning time 33%; supplier-risk networks like Resilinc and Everstream give 60 to 90 day advance warnings and 30 to 40% faster response, avoiding 1 to 2 events a year worth $2 to 10M each.",
        roi: "Demand sensing frees about 10 to 12% of inventory; risk intelligence is asymmetric insurance at roughly $200 to 500K a year.",
        whatI95Does:
          "Layer demand-sensing and supplier-risk signals onto existing planning and Epicor data, so planners see disruption before it hits a fab or a hospital.",
        credibility: "verified",
        source: SRC.brf,
      },
      // FOUNDATION
      {
        id: "pim",
        pillar: "foundation",
        title: "AI Master Data and PIM, the foundation under all of it",
        problem:
          "Smith described \"modular, siloed data\" as the starting condition. 30 to 60% of B2B catalogs have incomplete attributes, and every play above (search, agentic, personalization) fails on dirty product data.",
        caseName: "Stibo, Informatica",
        caseDetail:
          "Stibo and Informatica (Gartner MDM Leaders) run agentic PIM that bulk-enriches attributes from supplier docs with human-in-the-loop, standardizes units and classification, and scores quality continuously.",
        roi: "60 to 70% less manual stewardship, and it gates the ROI of every other initiative. The cheapest insurance on the whole portfolio.",
        whatI95Does:
          "AI-enriched PIM and MDM that feeds the store, search and the Salesforce platform from one source of truth, with Epicor as the system of record.",
        credibility: "illustrative",
        source: SRC.stibo,
      },
      {
        id: "agentic",
        pillar: "foundation",
        title: "Agentic-commerce readiness",
        problem:
          "AI buyers will soon source and reorder equipment and supplies on behalf of procurement teams. A catalog that is not machine-readable and contract-aware is invisible to them.",
        caseName: "Google AP2, Anthropic MCP, Gartner",
        caseDetail:
          "Infrastructure is live or forming: Google AP2 (60+ partners incl. Salesforce), Anthropic MCP, Shopify Agentic Storefronts. Gartner forecasts 90% of B2B purchases AI-intermediated by 2028.",
        roi: "Directional, but the risk is asymmetric: invisibility in 2027 to 28 is the downside, and the data work takes 18 to 24 months regardless of when you start.",
        whatI95Does:
          "Make the integrated catalog machine-purchasable and contract-aware once the seam and PIM are in place, on top of the Salesforce platform.",
        credibility: "illustrative",
        source: SRC.gartner,
      },
    ],
    why: {
      opener: "You'll be sold a two-year platform. Your live store needs an eight-week fix.",
      body: "The Big-4 and the global SIs are built for enterprise-wide change, and your Salesforce platform is exactly that kind of program. But your wedge is not enterprise-wide. It is the seam between a BigCommerce store that is taking orders today and an Epicor ERP that does not speak Salesforce yet. That is precisely i95Dev's lane: surgical, deep in commerce and ERP, with native connectors for both systems you already run. We do not replace your Salesforce build. We de-risk the back-end seam under it and keep the live store earning while it is built, on mid-market economics.",
      ctaTitle: "Book your BigCommerce to Epicor Integration Diagnostic",
      ctaSubtitle:
        "A fixed-scope, fixed-fee readiness assessment that validates these directional numbers against Matheson's real systems and maps the 8-to-12-week seam build. Two weeks, not a two-year wait.",
      credibility: { brands: "500+ B2B brands", years: "25+ years", projects: "1,200+ projects" },
    },
  },
};
