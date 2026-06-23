import type { AccountConfig } from "@/lib/types";

// Sources reused across the report (Verified vs. Illustrative labelled per-claim, spec section 14).
const SRC = {
  mit: { label: "MIT NANDA, ~95% of pilots", url: "https://nanda.media.mit.edu/" },
  mckinsey: { label: "McKinsey B2B pricing, $15B distributor +200bps then +50bps", url: "https://www.mckinsey.com/" },
  kawasaki: { label: "Kawasaki Engines USA, self-serve B2B AOV +5x (DC360)", url: "https://www.salesforce.com/" },
  usfoods: { label: "US Foods, +1.3M cases/yr on AI ordering (DC360)", url: "https://www.usfoods.com/" },
  dawn: { label: "Dawn Foods, AI search +75% adoption, +10% baskets (DC360 / commercetools)", url: "https://www.dawnfoods.com/" },
  sonepar: { label: "Sonepar, 7 AI agents, digital sales +50% (DC360)", url: "https://www.sonepar.com/" },
  jci: { label: "Johnson Controls, $100M+ protectable, $35M per attrition point", url: "https://www.johnsoncontrols.com/" },
  generalmills: { label: "General Mills, $20M+ AI savings (CIO Dive)", url: "https://www.generalmills.com/" },
  millipore: { label: "MilliporeSigma, account-based reorder for technical buyers", url: "https://www.milliporesigma.com/" },
  stibo: { label: "Stibo / Informatica, Gartner MDM Leaders", url: "https://www.stibosystems.com/" },
  tcs: { label: "TCS / Alstom, AI-driven MDM backbone", url: "https://www.tcs.com/" },
  gartner: { label: "Gartner, 90% of B2B purchases AI-intermediated by 2028", url: "https://www.gartner.com/" },
  account360: { label: "Account 360 acquisition history; research dump, integration-seam cost", url: "https://www.zekelman.com/" },
} as const;

/**
 * Zekelman Industries, a $4B steel pipe and tube maker running its storefront on a seam. Every section
 * is grounded in the Account-360 profile and the AI research dump, and maps 1:1 to
 * companies/zekelman/zekelman-spec.md.
 *
 * Spine: Zekelman runs the order book, pricing, inventory and production in Microsoft Dynamics 365 F&O,
 * while the customer-facing storefront, Z-Commerce, runs on SAP Hybris bolted on top through a custom
 * integration someone maintains by hand. That seam is the whole business when a contractor reorders at
 * 6am, and it drifts quietly: a stale price, a wrong inventory count, a new SKU that takes weeks to
 * appear. Run that seam through an acquisition spree (Western Tube 2025, Exltube 2026) and the
 * integration debt multiplies. The work is not a new storefront. Make the seam visible, then make it
 * hold, and every acquisition gets cheaper while ordinary AI finally has clean rails. D365 F&O plus B2B
 * commerce integration is i95Dev's core IP. Write to Tom Muth (President, Pipe & Tube, the champion who
 * owns Z-Commerce), with Mickey McNamara (President, exec sponsor) and new CFO Meredith Peck as the
 * economic buyers. Guardrails: do not open by pitching a rip-out of the Hybris build Tom Muth
 * championed; lead with the integration, data and AI layer on top; only raise a platform move if a
 * Hybris renewal genuinely looms.
 */
export const zekelman: AccountConfig = {
  slug: "zekelman",
  companyName: "Zekelman Industries",
  aliases: [
    "Atlas Tube",
    "Wheatland Tube",
    "Western Tube",
    "Sharon Tube",
    "Picoma",
    "Z Modular",
    "Exltube",
  ],
  domains: ["zekelman.com", "atlastube.com", "wheatland.com"],
  vertical: "manufacturing",
  verticalLabel: "Steel pipe & tube manufacturing / distribution",
  revenueBand: "~$4.2B",
  role: "President, Pipe & Tube",
  roleEmphasis: "ecommerce",
  activeRequirement: true,
  published: true,

  thesis: "Your storefront runs on a seam. Make the seam hold before the next acquisition.",
  wedge:
    "An integration-health audit of the Hybris-to-D365 seam, plus an acquisition-onboarding accelerator",
  wedgeDetail:
    "It runs on the two systems you already operate, it needs no new platform, and it pays for itself the first time a mispriced order or a stalled new-brand catalog gets caught. It is also exactly i95Dev's core IP, so no generalist can match the depth.",

  // ── Module 1, The Reframe (above gate) ──
  reframe: {
    opener: "Everyone here is selling you AI for your storefront. The model is the cheapest thing in the room.",
    stat: "95%",
    statSource: SRC.mit,
    body: "95% of enterprise AI pilots return nothing to the P&L. They sit next to the work instead of inside it, and they run on data the integration never cleaned. You already have the hard parts: Dynamics 365 F&O holding the order book, 23 plants of real inventory, and a storefront Tom Muth built. The edge now is not a smarter chatbot. It is making the seam between Hybris and D365 hold. The price a contractor sees becomes the price you set, the inventory on the portal matches the warehouse, and a mill you bought last quarter is sellable online this one.",
  },

  // ── Module 2, The Hype Filter (above gate) ──
  hypeFilter: {
    opener: "Commodity AI runs on the model. Compounding AI runs on the seam only you operate.",
    commodity: [
      "A chatbot bolted onto Z-Commerce",
      "Generic \"AI recs\" blind to contract pricing",
      "LLM product copy that cannot read your specs",
      "Basic ML forecasting relabeled \"AI\"",
    ],
    compounding: [
      "A clean Hybris-to-D365 sync that quotes the right price every time",
      "Account-based pricing that renders the deal you negotiated in D365",
      "A new-brand onboarding pipeline that makes an acquired mill sellable in weeks",
      "Demand sensing on your own order history across 23 plants",
    ],
    pitchWarning:
      "You run a custom Hybris storefront, so expect a pitch to replatform the whole thing or bolt a Copilot on top. Skip both for now. The storefront is an asset Tom Muth built. The leak is the seam behind it, and that asset is already yours to fix.",
  },

  // ── Module 2.5, Your Stack (verified from Account 360 and live research; reconcile flagged items live) ──
  stackFlags: [
    {
      signal: "Microsoft Dynamics 365 F&O",
      leadPlay: "Native D365-to-commerce connector: the one seam i95Dev builds best. This is core IP, not a project.",
      commodityFlag: "\"Agentforce / Copilot for everything.\" It only works on synced, clean data.",
    },
    {
      signal: "SAP Hybris (Z-Commerce)",
      leadPlay: "Integration-health audit: surface every price, inventory and catalog drift between Hybris and D365",
      commodityFlag: "A rip-and-replace. The custom storefront is an asset. Fix the seam, not the platform.",
    },
    {
      signal: "Acquired-brand onboarding (Western Tube, Exltube)",
      leadPlay: "A repeatable connector framework so a new mill is sellable online in weeks, not quarters",
      commodityFlag: "More headcount. The unlock is a pipeline, not more hands force-fitting item masters.",
    },
    {
      signal: "Power BI",
      leadPlay: "Wire commerce and D365 data into the dashboards leadership already reads",
      commodityFlag: "A new BI stack. You already report on it. Feed it clean data from a fixed seam.",
    },
  ],

  // ── Module 3, The Commodity-vs-Compounding Map (above gate) ──
  // Y: 0 commodity to 1 compounding · X: 0 foundation-required to 1 bolt-on-ready (wedge = top-right)
  mapPlays: [
    { id: "seam-audit", label: "Integration-health audit (seam)", compounding: 0.92, bolton: 0.88, magnitude: 5, lit: true, wedge: true },
    { id: "onboarding", label: "Acquisition onboarding accelerator", compounding: 0.88, bolton: 0.8, magnitude: 4, lit: true },
    { id: "pricing", label: "Account-based pricing / entitlement", compounding: 0.9, bolton: 0.55, magnitude: 5, lit: true },
    { id: "spec-search", label: "B2B / spec search on storefront", compounding: 0.78, bolton: 0.7, magnitude: 3, lit: true },
    { id: "cross-sell", label: "Cross-sell / reorder NBA", compounding: 0.8, bolton: 0.52, magnitude: 4, lit: true },
    { id: "demand-sensing", label: "Demand sensing on order history", compounding: 0.72, bolton: 0.34, magnitude: 4, lit: true },
    { id: "pim", label: "AI PIM / MDM foundation", compounding: 0.85, bolton: 0.3, magnitude: 3, lit: true },
    { id: "agentic", label: "Agentic-commerce ready", compounding: 0.95, bolton: 0.18, magnitude: 4, lit: true },
    { id: "chatbot", label: "Generic chatbot", compounding: 0.14, bolton: 0.9, magnitude: 1, lit: false },
    { id: "llm-copy", label: "LLM product copy", compounding: 0.1, bolton: 0.78, magnitude: 1, lit: false },
    { id: "ml-forecasting", label: "ML forecasting (relabeled)", compounding: 0.4, bolton: 0.42, magnitude: 2, lit: false },
  ],

  // ── Below the gate (payoff), never in the initial payload ──
  payoff: {
    headlineOpportunity: [14, 42],
    moneyPools: [
      {
        id: "margin",
        label: "Margin: pricing you set in D365, leaking through the seam",
        range: [5, 18],
        note: "Distributors and manufacturers lose 1.5 to 2.5% of margin to quote drift, stale prices and discount creep across thousands of SKUs. When the price lives in D365 and the storefront reads it through a hand-built sync, drift is the default, not the exception. A McKinsey-cited $15B distributor recovered 200 basis points in 10 weeks, then 50 more with agentic AI. A clean seam plus account-based enforcement renders, per account, the margin you already negotiated.",
        credibility: "verified",
        source: SRC.mckinsey,
      },
      {
        id: "self-service",
        label: "Self-service: orders captured online, not on a rep call",
        range: [3, 12],
        note: "Every failed price lookup, wrong inventory count or missing SKU on Z-Commerce is a rep call worth $40 to 60, or an order that goes to Nucor. Kawasaki Engines USA grew average order value 5x after a working B2B portal launched. US Foods drove 1.3M extra cases a year through AI ordering tools on a platform 90% of customers use. The lift is not a new storefront. It is the existing one finally telling the truth.",
        credibility: "verified",
        source: SRC.kawasaki,
      },
      {
        id: "onboarding",
        label: "Onboarding: acquired brands sellable in weeks, not quarters",
        range: [3, 7],
        note: "Western Tube in 2025, Exltube in 2026, and more to come under McNamara's M&A mandate. Today each acquisition's catalog, item masters and pricing get force-fit across the seam by hand before anything is sellable online, which is weeks to quarters of lost capture per brand. A repeatable connector framework turns each new mill into a fast, templated onboarding instead of a custom project. The dollars are the orders you capture in the quarter you would otherwise still be integrating.",
        credibility: "illustrative",
        source: SRC.account360,
      },
      {
        id: "operations",
        label: "Operations: demand sensing across 23 plants",
        range: [3, 5],
        note: "You run 23 plants and sell volume steel where a mill outage or a demand swing is a real cost. Classic forecasting misses the signal until the stockout or the overstock. Demand sensing on your own order history frees about 10 to 12% of inventory working capital, and General Mills booked $20M+ in verified savings running AI on 5,000+ daily shipments. On steel inventory at your scale, even a modest release is several million dollars off the balance sheet with zero headcount impact.",
        credibility: "verified",
        source: SRC.generalmills,
      },
    ],
    roadmap: [
      {
        phase: "Phase 1, starts now",
        title: "Foundation: audit the seam, build the onboarding accelerator",
        body: "Map every price, inventory and catalog drift between Hybris and D365, fix the sync, and stand up a repeatable connector framework so Western Tube, Exltube and the next acquisition onboard in weeks. It runs on the two systems you already own and lands inside the new CFO's first evaluation window. This is the wedge.",
        active: true,
      },
      {
        phase: "Phase 2, 3 to 6 months",
        title: "Storefront: enforce pricing, convert self-service",
        body: "With the seam clean, render account-based contract pricing and entitlements correctly per logged-in buyer, and cut the rep-assisted orders that drop when the storefront is finally trustworthy. This is where the largest dollar pool, margin, gets enforced.",
      },
      {
        phase: "Phase 3, 6 to 12 months",
        title: "Discovery and the installed base",
        body: "B2B-aware spec search so buyers find tube by grade, gauge and dimension, not your SKU names, plus cross-sell and reorder next-best-action on your D365 order history to defend the base against Nucor and Atkore going after the same contractors.",
      },
      {
        phase: "Phase 4, back office and the agentic bet",
        title: "Demand sensing, agentic readiness",
        body: "Layer demand sensing across 23 plants onto your forecasting, and make the catalog machine-purchasable for AI buyers (Google AP2, Anthropic MCP) once the data foundation is clean. Gartner expects 90% of B2B purchases to be AI-intermediated by 2028. The risk is being invisible, not being behind.",
      },
    ],
    // ── The play shortlist, all three pillars plus the foundation, sequenced so the seam carries the weight ──
    plays: [
      // STOREFRONT AND DISCOVERY
      {
        id: "pricing",
        pillar: "storefront",
        title: "Account-based pricing and entitlement that renders the deal in D365",
        problem:
          "Your contract and tier pricing lives in Dynamics 365 F&O, and the storefront reads it across a custom seam. A wrong price or a stale inventory count is instant trust loss and a rep call, or an order lost to Nucor.",
        caseName: "MilliporeSigma",
        caseDetail:
          "MilliporeSigma runs account-based entitlement and AI reorder on approved lists for regulated buyers. This is the rail every other storefront play runs on.",
        roi: "Cutting rep-assisted orders from ~40% to ~25% saves several million a year at Zekelman's scale, and it enforces the 1.5 to 2.5% of margin that drifts away on stale prices.",
        whatI95Does:
          "Connect D365 F&O, Hybris and pricing so contract and tier pricing, entitlements and inventory render correctly per logged-in account. This is i95Dev's core D365-plus-commerce IP.",
        credibility: "illustrative",
        source: SRC.millipore,
      },
      {
        id: "spec-search",
        pillar: "storefront",
        title: "B2B-aware spec search on Z-Commerce",
        problem:
          "Steel buyers search by grade, gauge, dimension and spec equivalence, not your SKU names. A failed lookup is a $40 to 60 rep call or an order lost to Atkore or Bull Moose.",
        caseName: "Dawn Foods",
        caseDetail:
          "Dawn Foods, an ingredient wholesaler, ran AI search plus behavioral recs on commercetools and Algolia: 75%+ digital adoption, 30% faster time-to-order, +10% baskets, triple-digit online growth.",
        roi: "AI search converts about 1.67x keyword (4.6% vs 2.8%). On the share of orders that start with a search, a 1.5x lift is a multi-million swing.",
        whatI95Does:
          "Semantic and spec-equivalence search with hard eligibility filters and B2B ranking (brand, inventory, nearest plant) across the Z-Commerce storefronts.",
        credibility: "verified",
        source: SRC.dawn,
      },
      // SALES AND MARKETING (defend the installed base)
      {
        id: "cross-sell",
        pillar: "sales-marketing",
        title: "Cross-sell propensity and reorder next-best-action",
        problem:
          "Nucor, Atkore and Bull Moose are chasing the same contractors and distributors you sell to. Your defensible margin is the buyers who already reorder from you, but reorder timing and white-space cross-sell stay manual and invisible until an account drifts to a competitor.",
        caseName: "Johnson Controls",
        caseDetail:
          "Johnson Controls propensity and whitespace models tracked $100M+ of protectable revenue ($35M per attrition point) and unlocked $40M from 23 accounts. Whitespace-managed accounts grow 9% versus 5 to 6%.",
        roi: "8 to 12 points of net revenue retention, 15 to 30% churn reduction, $4 to 7 returned per $1. The highest-leverage defense against losing share.",
        whatI95Does:
          "Churn and cross-sell propensity on your D365 order history, surfaced as rep alerts and reorder nudges on Z-Commerce.",
        credibility: "verified",
        source: SRC.jci,
      },
      {
        id: "signal-conversion",
        pillar: "sales-marketing",
        title: "Signal and conversion intelligence for the sales desk",
        problem:
          "Your inside sellers field the calls the storefront cannot answer, but the best answers and the at-risk accounts live in people's heads, not a system.",
        caseName: "Sonepar",
        caseDetail:
          "Sonepar, the largest electrical distributor, ran 7 production AI agents and drove digital sales up 50% year on year. Gartner finds next-best-action teams are 2.6x more likely to hit commercial growth.",
        roi: "Reallocation, not new spend: route the right account and the right reorder to the right seller at the right moment.",
        whatI95Does:
          "Wire storefront behavior and D365 signals into next-best-action for the sales desk, closing the loop from a stalled online order to a rep follow-up.",
        credibility: "verified",
        source: SRC.sonepar,
      },
      // BACK OFFICE AND OPERATIONS
      {
        id: "demand-sensing",
        pillar: "back-office",
        title: "Demand sensing across 23 plants",
        problem:
          "23 plants, volume steel, and demand that swings on data centers, housing starts and a single mill outage. Classic forecasting misses the signal until the stockout or the overstock ties up cash.",
        caseName: "General Mills, BRF",
        caseDetail:
          "General Mills booked $20M+ in verified savings running AI on 5,000+ daily shipments. BRF's SAP IBP demand sensing cut planning time 33%.",
        roi: "Demand sensing frees about 10 to 12% of inventory working capital, several million dollars off the balance sheet with zero headcount impact.",
        whatI95Does:
          "Layer demand sensing onto your existing forecasting and D365 data so planners see the swing before it becomes a stockout or dead inventory.",
        credibility: "verified",
        source: SRC.generalmills,
      },
      // FOUNDATION
      {
        id: "seam-audit",
        pillar: "foundation",
        title: "The integration-health audit and onboarding accelerator (the wedge)",
        problem:
          "Z-Commerce on Hybris sits on top of D365 F&O, joined by a custom seam that drifts a little more with every release and a lot more with every acquisition. Western Tube and Exltube are mid-onboarding, and each new mill's catalog, item masters and pricing get force-fit across the gap by hand.",
        caseName: "TCS / Alstom",
        caseDetail:
          "The research is blunt that B2B AI value is won or lost at \"the integration seam between commerce, ERP, contracts and data,\" and that 85% of AI projects fail on unready data. TCS rebuilt Alstom on an AI-driven MDM backbone to get one unified view and faster deployments.",
        roi: "Catches mispriced orders and stalled catalogs immediately, and turns each acquisition from a multi-quarter integration project into a templated, weeks-long onboarding.",
        whatI95Does:
          "Audit every price, inventory and catalog sync between Hybris and D365, fix the gaps, and build a repeatable connector framework for new brands. This is the exact seam i95Dev's core D365-plus-commerce IP was built for.",
        credibility: "illustrative",
        source: SRC.tcs,
      },
      {
        id: "pim",
        pillar: "foundation",
        title: "AI Master Data and PIM, the data under all of it",
        problem:
          "30 to 60% of B2B catalogs have incomplete attributes, and 87% of leaders say bad data has hampered AI value. Every play above fails on dirty product data, and each acquired mill arrives with its own messy item master.",
        caseName: "Stibo, Informatica",
        caseDetail:
          "Stibo and Informatica (Gartner MDM Leaders) run agentic PIM that bulk-enriches attributes from supplier docs with human-in-the-loop, standardizes units and classification, and scores quality continuously.",
        roi: "60 to 70% less manual stewardship, and it gates the ROI of every other initiative. The cheapest insurance on the whole portfolio.",
        whatI95Does:
          "AI-enriched PIM and MDM that standardizes attributes across acquired brands and feeds Z-Commerce, search and the storefront from one source of truth synced to D365.",
        credibility: "illustrative",
        source: SRC.stibo,
      },
      {
        id: "agentic",
        pillar: "foundation",
        title: "Agentic-commerce readiness (the longer-horizon bet)",
        problem:
          "AI agents are starting to source and buy on behalf of B2B buyers. If your catalog is not clean, structured and machine-readable, you are invisible to them.",
        caseName: "Google AP2, Anthropic MCP",
        caseDetail:
          "Infrastructure is forming now: Google AP2 (60+ partners including Mastercard and PayPal), Anthropic MCP, Shopify Agentic Storefronts. Gartner forecasts 90% of B2B purchases AI-agent-intermediated by 2028.",
        roi: "Directional and longer-dated, but the moat is the clean, contract-aware data layer, which is exactly what the wedge and the PIM work produce.",
        whatI95Does:
          "Once the seam and PIM are clean, make the catalog machine-purchasable and API-first so AI buyers can transact against accurate Zekelman data.",
        credibility: "illustrative",
        source: SRC.gartner,
      },
    ],
    why: {
      opener: "You will be sold a $3M new storefront. Your problem might be a six-week fix to the one you have.",
      body: "The Big-4 and the global SIs are built for enterprise-wide change. Your wedge is not enterprise-wide. It is the custom seam between a storefront you already shipped and a Dynamics 365 core we know better than anyone in the room. That is exactly i95Dev's lane: surgical, deep in D365 and B2B commerce, integration-first, on mid-market economics. We do not rip out the Hybris build Tom Muth championed. We make the seam behind it hold, in time for the new CFO's first close.",
      ctaTitle: "Book your Integration-Health Diagnostic",
      ctaSubtitle:
        "A fixed-scope, fixed-fee audit of the Hybris-to-D365 seam that validates these directional numbers against Zekelman's real data. Two weeks, not a $3M transformation.",
      credibility: { brands: "500+ B2B brands", years: "25+ years", projects: "1,200+ projects" },
    },
  },
};
