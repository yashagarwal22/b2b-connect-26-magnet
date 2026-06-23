import type { AccountConfig } from "@/lib/types";

// Sources reused across the report (Verified vs. Illustrative labelled per-claim, spec section 14).
const SRC = {
  mit: { label: "MIT NANDA, ~95% of pilots", url: "https://nanda.media.mit.edu/" },
  genmills: { label: "General Mills, $20M+ AI savings", url: "https://www.generalmills.com/" },
  mck: { label: "McKinsey B2B pricing, $15B distributor +200bps", url: "https://www.mckinsey.com/" },
  msc: { label: "MSC personalization: +38% conversion, +12% AOV", url: "https://www.mscdirect.com/" },
  jci: { label: "Johnson Controls, $35M per attrition point", url: "https://www.johnsoncontrols.com/" },
  grainger: { label: "Grainger / Databricks, RAG over 2.5M SKUs", url: "https://www.grainger.com/" },
  sonepar: { label: "Sonepar, 7 AI agents, digital +50%", url: "https://www.sonepar.com/" },
  stibo: { label: "Stibo / Informatica, Gartner MDM Leaders", url: "https://www.stibosystems.com/" },
  brf: { label: "BRF, SAP IBP demand sensing", url: "https://www.sap.com/" },
} as const;

/**
 * MSC Industrial Supply (MSC Direct), a strategic next-cycle worked account (no live RFP). Every
 * section is grounded in the Account-360 profile and the AI research dump, and maps 1:1 to
 * companies/msc/msc-spec.md.
 *
 * Spine: MSC will not out-catalog Grainger (7.8% vs 22.5% share), but ~40% of sales run through
 * embedded solutions (30,400 vending machines, 423 in-plant programs, VMI) that throw off a
 * consumption signal no rival or marketplace can copy. Price is carrying the quarter (+660bps) while
 * volume falls (-400bps); price is not durable. MSC already deploys AI to absorb attrition, not cut
 * heads. The work is turning embedded consumption data into working capital, cost-to-serve and a
 * digital experience that knows what the plant needs first. Write to Prabhu Shanmugam (Sr. Director,
 * Digital Product Engineering). Guardrail: no replatform (S/4HANA private cloud just went live);
 * lead with customer insights, AI readiness and analytics on the core they already built.
 */
export const msc: AccountConfig = {
  slug: "msc",
  companyName: "MSC",
  aliases: ["MSC Industrial Supply", "MSC Direct", "MSC Industrial", "MSM"],
  domains: ["mscdirect.com"],
  vertical: "industrial-distribution",
  verticalLabel: "Metalworking and MRO distribution",
  revenueBand: "$1B+",
  role: "Sr. Director, Digital Product Engineering",
  roleEmphasis: "ecommerce",
  activeRequirement: false,
  published: true,

  thesis: "Grainger out-catalogs you. It can't see what your 30,000 machines track inside the plant.",
  wedge:
    "Predictive replenishment and reorder, built on the consumption data your machines already capture",
  wedgeDetail:
    "It runs on the vending, in-plant and VMI signal you uniquely own, it extends the $10-15M AI-inventory target you already set into the storefront and the rep workflow, and Grainger cannot copy it because Grainger is not inside the plant. Prove it on one customer segment, then scale.",

  // ── Module 1, The Reframe (above gate) ──
  reframe: {
    opener: "Everyone sells distributors AI to cut heads. The money was never in the headcount.",
    stat: "95%",
    statSource: SRC.mit,
    body: "95% of enterprise AI pilots return nothing to the P&L. They sit beside the work instead of inside it. You already made the right call: you deploy AI to absorb attrition, not to cut heads, because a layoff business case dies in the first budget cycle. The edge is not a copilot on your SAP screen. It is the consumption data flowing from 30,000 vending machines and 423 in-plant programs that Grainger cannot see, turned into working capital and cost-to-serve only MSC can capture.",
  },

  // ── Module 2, The Hype Filter (above gate) ──
  hypeFilter: {
    opener: "Commodity AI cuts cost on the surface. Compounding AI runs on what only you see inside the plant.",
    commodity: [
      "A Joule copilot bolted onto the SAP screen",
      "A generic chatbot for order status",
      "Basic ML forecasting relabeled as \"AI\"",
      "AI pitched as a headcount cut",
    ],
    compounding: [
      "Predictive replenishment on your vending and VMI data",
      "Search and personalization that lifted conversion 38%",
      "Cost-to-serve intelligence, account by account",
      "Next-best-action for the core customer in Salesforce",
    ],
    pitchWarning:
      "With S/4HANA live, expect a pitch for Joule and a Copilot on everything. Those are table-stakes your team can switch on. Your edge is the consumption data flowing from 30,000 machines that no copilot and no competitor can see. Spend there.",
  },

  // ── Module 2.5, Your Stack (Account-360 confirmed stack) ──
  stackFlags: [
    {
      signal: "SAP S/4HANA + Ariba + BTP",
      leadPlay: "Orchestrate commerce, PIM and punchout on the core you just built",
      commodityFlag: "A Joule copilot on everything. Table-stakes. The edge is your data, not the copilot.",
    },
    {
      signal: "Vending + In-Plant + VMI (40% of sales)",
      leadPlay: "Turn consumption signal into predictive replenishment and cost-to-serve",
      commodityFlag: "A dashboard refresh. The signal is an AI moat, not a report.",
    },
    {
      signal: "Coupa, Ariba, Workday, Taulia punchout",
      leadPlay: "Harden Level II punchout and order orchestration for embedded accounts",
      commodityFlag: "More connectors. The win is one order spine, not more endpoints.",
    },
    {
      signal: "Salesforce Service Cloud + Verint",
      leadPlay: "Next-best-action for the core customer on the CX data you hold",
      commodityFlag: "\"Agentforce for everything.\" It only works on clean data.",
    },
    {
      signal: "~2.5M-SKU catalog, 63.8% digital",
      leadPlay: "Search relevance and personalization, where your pilot saw +38% conversion",
      commodityFlag: "A replatform. You do not need one. You need the data and search to work.",
    },
  ],

  // ── Module 3, The Commodity-vs-Compounding Map (above gate) ──
  // Y: 0 commodity to 1 compounding · X: 0 foundation-required to 1 bolt-on-ready (wedge = top-right)
  mapPlays: [
    { id: "replenishment", label: "Predictive replenishment", compounding: 0.9, bolton: 0.72, magnitude: 5, lit: true, wedge: true },
    { id: "cost-to-serve", label: "Cost-to-serve intelligence", compounding: 0.88, bolton: 0.5, magnitude: 5, lit: true },
    { id: "search", label: "Search + personalization", compounding: 0.7, bolton: 0.85, magnitude: 4, lit: true },
    { id: "nba", label: "Core-customer NBA / churn", compounding: 0.82, bolton: 0.6, magnitude: 4, lit: true },
    { id: "punchout", label: "Punchout + OMS orchestration", compounding: 0.65, bolton: 0.7, magnitude: 4, lit: true },
    { id: "pim", label: "AI PIM / MDM (2.5M SKUs)", compounding: 0.85, bolton: 0.35, magnitude: 3, lit: true },
    { id: "demand", label: "Demand sensing + supplier risk", compounding: 0.72, bolton: 0.4, magnitude: 3, lit: true },
    { id: "agentic", label: "Agentic-commerce ready", compounding: 0.95, bolton: 0.25, magnitude: 4, lit: true },
    { id: "chatbot", label: "Generic chatbot", compounding: 0.14, bolton: 0.9, magnitude: 1, lit: false },
    { id: "copilot", label: "ERP copilot (table-stakes)", compounding: 0.3, bolton: 0.85, magnitude: 2, lit: false },
    { id: "forecast", label: "ML forecasting (relabeled)", compounding: 0.4, bolton: 0.42, magnitude: 2, lit: false },
  ],

  // ── Below the gate (payoff), never in the initial payload ──
  payoff: {
    headlineOpportunity: [20, 52],
    moneyPools: [
      {
        id: "working-capital",
        label: "Working capital: the inventory your data can free",
        range: [8, 20],
        note: "A 12% reduction on an $80M inventory position is $9.6M freed, with zero headcount impact. General Mills ran AI across 5,000+ daily shipments for $20M+ in verified savings. You already set a $10-15M AI-inventory target; the vending and VMI signal you own makes the case real, not aspirational.",
        credibility: "verified",
        source: SRC.genmills,
      },
      {
        id: "cost-to-serve",
        label: "Cost-to-serve: the margin in the embedded base",
        range: [5, 12],
        note: "Embedded solutions are 40% of sales and the stickiest part of the book, but cost-to-serve and price realization vary account by account. A McKinsey-cited $15B distributor recovered 200 basis points in 10 weeks, then 50 more with agentic AI. Your pricing already moved +660 basis points; AI makes that durable instead of cyclical.",
        credibility: "verified",
        source: SRC.mck,
      },
      {
        id: "digital",
        label: "The digital channel: convert the 63.8%",
        range: [4, 12],
        note: "63.8% of orders are already digital, on a platform still recovering from the 2024 downturn. Your own personalization work showed +38% conversion, +12% average order value and +46% units per transaction. Scaling that across the channel is measured upside, not a pilot.",
        credibility: "verified",
        source: SRC.msc,
      },
      {
        id: "core-customer",
        label: "The core customer: defend and grow the base",
        range: [3, 8],
        note: "Volumes fell about 400 basis points and the core customer is the stated priority. Selling to the accounts you already serve costs five to seven times less than winning new ones. Johnson Controls tracked $35M of protectable revenue per point of attrition with propensity and next-best-action.",
        credibility: "verified",
        source: SRC.jci,
      },
    ],
    roadmap: [
      {
        phase: "Phase 1, starts now",
        title: "Predictive replenishment and digital conversion",
        body: "Activate the vending, in-plant and VMI consumption data into predictive reorder, and surface it in the storefront that already carries 63.8% of orders. It extends your $10-15M AI-inventory target and scales the +38% conversion result you already proved. This is the wedge.",
        active: true,
      },
      {
        phase: "Phase 2, 3 to 6 months",
        title: "Cost-to-serve and the core customer",
        body: "Build cost-to-serve intelligence account by account so price realization holds when volumes soften, and add next-best-action and churn alerts for the core customer in Salesforce. This defends the base that matters most.",
      },
      {
        phase: "Phase 3, 6 to 12 months",
        title: "Punchout, OMS and PIM",
        body: "Harden Level II punchout and order orchestration across Coupa, Ariba, Workday and Taulia for the embedded 40%, and stand up AI PIM across the 2.5M-SKU catalog so search and personalization run on clean data.",
      },
      {
        phase: "Phase 4, the spine and the bet",
        title: "Demand sensing, supplier risk, agentic readiness",
        body: "Layer demand sensing and multi-tier supplier-risk onto the SAP core, and make the catalog machine-purchasable for AI buyers. Gartner expects 90% of B2B purchases to be AI-intermediated by 2028. The risk is being invisible, not being behind.",
      },
    ],
    // ── The play shortlist, spanning operations, sales, the storefront, and the foundation ──
    plays: [
      // OPERATIONS & WORKING CAPITAL
      {
        id: "replenishment",
        pillar: "back-office",
        title: "Predictive replenishment on embedded consumption data",
        problem:
          "30,400 vending machines and 423 in-plant programs generate a real-time consumption signal, but it mostly refills bins instead of optimizing inventory and cost-to-serve across the network.",
        caseName: "General Mills",
        caseDetail:
          "General Mills ran AI on 5,000+ daily shipments for $20M+ in verified savings; Kinaxis and Blue Yonder run agentic replenishment in production.",
        roi: "A 12% inventory reduction on an $80M position frees $9.6M with zero headcount impact, and it extends the $10-15M target you already set.",
        whatI95Does:
          "Turn the vending, in-plant and VMI signal into predictive reorder and replenishment, surfaced in the storefront and the rep workflow, on the SAP and BTP core.",
        credibility: "verified",
        source: SRC.genmills,
      },
      {
        id: "cost-to-serve",
        pillar: "back-office",
        title: "Cost-to-serve and price-realization intelligence",
        problem:
          "Embedded solutions are 40% of sales but margin and price realization vary account by account, and a 400 basis point volume decline puts pressure on every point of price.",
        caseName: "McKinsey $15B distributor",
        caseDetail:
          "A McKinsey-cited $15B distributor recovered 200 basis points in 10 weeks, then 50 more with agentic AI.",
        roi: "Making the +660 basis point pricing move durable instead of cyclical is near-pure margin on a $3.77B base.",
        whatI95Does:
          "Cost-to-serve modeling and price-corridor enforcement per account, wired into the SAP core and the quoting workflow.",
        credibility: "verified",
        source: SRC.mck,
      },
      // STOREFRONT & DISCOVERY
      {
        id: "search",
        pillar: "storefront",
        title: "Search relevance and personalization recovery",
        problem:
          "63.8% of orders are digital on a platform still recovering from the 2024 downturn, and generic search treats a returning metalworking buyer like a stranger.",
        caseName: "MSC personalization",
        caseDetail:
          "Your own personalization work showed +38% conversion, +12% average order value and +46% units per transaction; AI search converts about 1.67 times keyword.",
        roi: "The +38% is your own number, not a vendor's. Scaling it across the channel is arithmetic.",
        whatI95Does:
          "Semantic search and personalization tuned on your behavioral data and the SAP and BTP commerce layer, no replatform.",
        credibility: "verified",
        source: SRC.msc,
      },
      {
        id: "rag-search",
        pillar: "storefront",
        title: "RAG technical and spec search for metalworking",
        problem:
          "Metalworking buyers search by tolerance, material, coating and equivalence, not your SKU names. A failed lookup is a rep call or an order lost to Grainger.",
        caseName: "Grainger / Databricks",
        caseDetail:
          "Grainger runs RAG over 2.5M SKUs in production, roughly $6M a year in deflected technical calls, on a catalog the same size as yours.",
        roi: "Deflecting technical calls and recovering failed lookups is direct margin and a better engineer experience.",
        whatI95Does:
          "Spec-grounded technical search and answers across the 2.5M-SKU catalog, grounded in your product data.",
        credibility: "illustrative",
        source: SRC.grainger,
      },
      // SALES & THE INSTALLED BASE
      {
        id: "nba",
        pillar: "sales-marketing",
        title: "Core-customer churn and next-best-action",
        problem:
          "Volumes fell about 400 basis points and the core customer is the priority, but reorder timing and at-risk accounts stay invisible until the account is already shrinking.",
        caseName: "Johnson Controls",
        caseDetail:
          "Johnson Controls tracked $35M of protectable revenue per point of attrition and unlocked $40M from 23 accounts with propensity and whitespace models.",
        roi: "Selling to accounts you already serve costs five to seven times less than winning new ones.",
        whatI95Does:
          "Churn and cross-sell propensity on your order and consumption data, surfaced as rep alerts in Salesforce and reorder nudges on-site.",
        credibility: "verified",
        source: SRC.jci,
      },
      {
        id: "punchout",
        pillar: "back-office",
        title: "B2B punchout and OMS orchestration",
        problem:
          "The embedded 40% runs through Coupa, Ariba, Workday and Taulia, but order orchestration across them is a patchwork that strains as embedded accounts grow 9% a year.",
        caseName: "Sonepar",
        caseDetail:
          "Sonepar put 7 AI agents into production and drove digital sales up 50% year on year on a connected order spine.",
        roi: "One order spine across punchout endpoints lowers cost-to-serve on the stickiest, fastest-growing part of the book.",
        whatI95Does:
          "Harden Level II punchout and Coupa Pay, and orchestrate order and inventory flows into one spine on the SAP core.",
        credibility: "verified",
        source: SRC.sonepar,
      },
      // FOUNDATION & THE BET
      {
        id: "pim",
        pillar: "foundation",
        title: "AI Master Data and PIM across 2.5M SKUs",
        problem:
          "30 to 60% of B2B catalogs have incomplete attributes, and every play above, from search to replenishment, fails on dirty product data at 2.5M-SKU scale.",
        caseName: "Stibo, Informatica",
        caseDetail:
          "Stibo and Informatica are Gartner MDM Leaders, and Salesforce acquired Informatica in 2025; agentic PIM enriches attributes from supplier documents with human-in-the-loop.",
        roi: "60 to 70% less manual stewardship, and it gates the ROI of every other initiative. The cheapest insurance on the portfolio.",
        whatI95Does:
          "AI-enriched PIM and MDM that standardizes attributes and feeds search, personalization and the SAP core from one source.",
        credibility: "illustrative",
        source: SRC.stibo,
      },
      {
        id: "demand",
        pillar: "foundation",
        title: "Demand sensing, supplier risk and agentic readiness",
        problem:
          "A 2.5M-SKU metalworking catalog swings on supplier disruption and demand shifts, and the AI buyers coming next cannot transact with a catalog that is not machine-ready.",
        caseName: "BRF, Gartner",
        caseDetail:
          "BRF's SAP IBP demand sensing cut planning time 33%; Gartner expects 90% of B2B purchases to be AI-intermediated by 2028.",
        roi: "Demand sensing frees inventory and supplier-risk intelligence avoids 1 to 2 disruptions a year worth $2-10M each, while agentic readiness future-proofs the channel.",
        whatI95Does:
          "Demand sensing and supplier-risk on the SAP core, and a machine-purchasable catalog for AI buyers using AP2 and MCP.",
        credibility: "verified",
        source: SRC.brf,
      },
    ],
    why: {
      opener: "You'll be sold a $3M transformation. Your edge is already inside your customers' plants.",
      body: "The Big-4 are built for enterprise-wide change, and you just finished one with the S/4HANA migration. You do not need another. You need the embedded data activated into working capital, margin and a digital experience that converts. That is i95Dev's lane: surgical, deep in commerce, ERP and data, on the SAP core you already run, at mid-market economics. We do not replatform what you just built. We make it pay, in time for the next budget cycle.",
      ctaTitle: "Book your AI-in-Commerce Diagnostic",
      ctaSubtitle:
        "A fixed-scope, fixed-fee assessment that validates these numbers against MSC's real consumption and order data. Two weeks, not a $3M transformation.",
      credibility: { brands: "500+ B2B brands", years: "25+ years", projects: "1,200+ projects" },
    },
  },
};
