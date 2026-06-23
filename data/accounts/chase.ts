import type { AccountConfig } from "@/lib/types";

// Sources reused across the report (Verified vs. Illustrative labelled per-claim, spec section 14).
const SRC = {
  mit: { label: "MIT NANDA, ~95% of pilots", url: "https://nanda.media.mit.edu/" },
  kawasaki: { label: "Kawasaki Engines USA, self-serve B2B AOV +5x (DC360)", url: "https://www.salesforce.com/" },
  jpw: { label: "JPW Industries, order processing 16–24h to under 1h", url: "https://www.salesforce.com/" },
  mkm: { label: "MKM Building Supplies, +82% revenue on BigCommerce", url: "https://www.bigcommerce.com/" },
  mckinsey: { label: "McKinsey B2B pricing, $15B distributor +200bps then +50bps in 10 weeks", url: "https://www.mckinsey.com/" },
  watts: { label: "Watts Water, 5 acquisitions in 11 months, customer-facing platforms priority", url: "https://www.watts.com/" },
  jci: { label: "Johnson Controls, $100M+ protectable, $35M per attrition point", url: "https://www.johnsoncontrols.com/" },
  sonepar: { label: "Sonepar, 7 production AI agents, digital +50% YoY (DC360)", url: "https://www.sonepar.com/" },
  brf: { label: "BRF SAP IBP demand sensing, -33% planning time", url: "https://www.sap.com/" },
  generalmills: { label: "General Mills, $20M+ verified AI shipment savings (DC360)", url: "https://www.generalmills.com/" },
  stibo: { label: "Stibo / Informatica, Gartner MDM Leaders", url: "https://www.stibosystems.com/" },
  millipore: { label: "MilliporeSigma, account-based entitlement and reorder", url: "https://www.milliporesigma.com/" },
  ivanti: { label: "Ivanti, intent into GTM, 154% higher win rate, $263M influenced pipeline", url: "https://www.ivanti.com/" },
  grainger: { label: "Grainger, RAG over 2.5M SKUs (Databricks)", url: "https://www.grainger.com/" },
  google: { label: "Google AP2 with 60+ partners; Anthropic MCP", url: "https://cloud.google.com/" },
} as const;

/**
 * Chase Corporation, a KKR-owned specialty-chemicals roll-up. Every section is grounded in the
 * Account-360 profile, the B2B Connect attendee record, and live web research, and maps 1:1 to
 * companies/chase/chase-spec.md.
 *
 * Spine: the value and the risk both live in the seam between the commerce storefront and the ERP.
 * KKR bought Chase in Nov 2023 (~$1.3B, ~13x EBITDA) on a roll-up thesis and bolted on Sheldahl in
 * June 2026, so every acquisition multiplies the SKUs, price books, and terms that must land on a
 * storefront and post into the ERP. The attendee record names Brock Tyler (Sr Manager, Web & Data
 * Integration) on a stack of BigCommerce B2B, HubSpot, Salesforce, and Oracle Fusion. The play is to
 * connect the BigCommerce B2B storefront to Oracle Fusion and absorb acquired catalogs fast, framed
 * for a sponsor that prices everything in months-to-payback. Write to Brock Tyler, with Gregory Kay
 * (Manager of Channel Enablement) as second champion, CEO Eric Conley as the roadmap sponsor, and CFO
 * Everett Chadwick as the ROI conversation. Guardrails: BigCommerce B2B is i95Dev-native and stated
 * confidently; Oracle Fusion is NOT native, so frame all ERP work as integration-to-existing, never a
 * native connector and never an ERP replatform. The stack is partly inferred from the attendee record
 * and is flagged for live verification.
 */
export const chase: AccountConfig = {
  slug: "chase",
  companyName: "Chase Corporation",
  aliases: [
    "Chase Corp",
    "Chase Corporation (KKR)",
    "Sheldahl",
    "Chase specialty chemicals",
  ],
  domains: ["chasecorp.com"],
  vertical: "chemical-distribution",
  verticalLabel: "Global specialty chemicals",
  revenueBand: "$400–500M",
  role: "Sr Manager, Web & Data Integration",
  roleEmphasis: "ecommerce",
  activeRequirement: true,
  published: true,

  thesis: "Your storefront takes the order. The ERP seam decides if it survives.",
  wedge:
    "The BigCommerce B2B to Oracle Fusion integration, with acquired-catalog onboarding built in",
  wedgeDetail:
    "High value, runs on the storefront and ERP you already run, and fast to prove. KKR just added Sheldahl, so the integration is not a someday project. It is the thing standing between you and absorbing the next acquisition in weeks. BigCommerce is i95Dev-native, so this is squarely in the build lane.",

  // ── Module 1, The Reframe (above gate) ──
  reframe: {
    opener: "Everyone here is selling you AI. The model is the cheapest thing in the room. The seam is the expensive one.",
    stat: "95%",
    statSource: SRC.mit,
    body: "95% of enterprise AI pilots return nothing to the P&L. They sit next to the work instead of inside it. The cause is almost never the model. It is the last mile: the integration into the system of record. You are standing up a BigCommerce B2B storefront with Oracle Fusion behind it. The edge is connecting them so every order, price, and acquired catalog lands true, and so the next bolt-on takes weeks, not a quarter.",
  },

  // ── Module 2, The Hype Filter (above gate) ──
  hypeFilter: {
    opener: "Commodity AI runs on the model. Compounding AI runs on the seam only you own.",
    commodity: [
      "A chatbot bolted onto the storefront",
      "Generic recs that ignore contract pricing",
      "A new ERP \"to fix integration\"",
      "AI product copy that cannot vouch for a spec",
    ],
    compounding: [
      "A BigCommerce-to-Oracle-Fusion integration orders flow through",
      "Account-based pricing rendered from the ERP, per buyer",
      "Onboarding acquired catalogs onto the storefront you already run",
      "Clean product data feeding storefront, search, and the ERP from one source",
    ],
    pitchWarning:
      "You run Oracle Fusion, so expect a pitch to replatform the ERP or to drop in a Copilot on everything. Skip both. The ERP is your system of record. The unlock is the integration to the storefront and the speed of onboarding the next acquisition, not a rip-and-replace.",
  },

  // ── Module 2.5, Your Stack (attendee-record stack; reconcile flagged items live) ──
  stackFlags: [
    {
      signal: "BigCommerce B2B (i95Dev native)",
      leadPlay: "Stand up self-service ordering, quotes, and account-based catalogs. Core i95Dev territory.",
    },
    {
      signal: "Oracle Fusion ERP",
      leadPlay: "Integrate the storefront to the system of record so price, inventory, and orders stay true",
      commodityFlag: "An ERP replatform. The unlock is the seam, not a new ERP.",
    },
    {
      signal: "HubSpot (CMS + Marketing)",
      leadPlay: "Wire content and lead capture into the commerce journey, not a separate silo",
      commodityFlag: "\"Replace HubSpot with our suite.\" It is fine where it sits; connect it.",
    },
    {
      signal: "Salesforce (CRM)",
      leadPlay: "Connect CRM, commerce, and ERP for next-best-action and account-aware selling",
      commodityFlag: "\"Agentforce for everything.\" It only works on clean, connected data; ~33% of Salesforce AI hits ROI.",
    },
    {
      signal: "Acquired-catalog onboarding (Sheldahl, and the next deal)",
      leadPlay: "A repeatable pipeline to absorb new SKUs and pricing into the storefront and ERP fast",
      commodityFlag: "A bespoke project per acquisition. The unlock is a reusable connector and a playbook.",
    },
  ],

  // ── Module 3, The Commodity-vs-Compounding Map (above gate) ──
  // Y: 0 commodity to 1 compounding · X: 0 foundation-required to 1 bolt-on-ready (wedge = top-right)
  mapPlays: [
    { id: "integration", label: "Commerce-to-ERP integration + catalog onboarding", compounding: 0.92, bolton: 0.85, magnitude: 5, lit: true, wedge: true },
    { id: "self-service", label: "B2B self-service portal (quotes, reorder)", compounding: 0.8, bolton: 0.78, magnitude: 4, lit: true },
    { id: "acct-pricing", label: "Account-based pricing + entitlement", compounding: 0.88, bolton: 0.55, magnitude: 4, lit: true },
    { id: "spec-search", label: "B2B / spec search", compounding: 0.78, bolton: 0.66, magnitude: 3, lit: true },
    { id: "cross-sell", label: "Cross-sell / next-best-action", compounding: 0.82, bolton: 0.5, magnitude: 4, lit: true },
    { id: "pricing-rgm", label: "Pricing / margin enforcement", compounding: 0.9, bolton: 0.45, magnitude: 5, lit: true },
    { id: "pim", label: "AI PIM / MDM (catalog cleanup)", compounding: 0.85, bolton: 0.34, magnitude: 3, lit: true },
    { id: "agentic", label: "Agentic-commerce ready", compounding: 0.95, bolton: 0.2, magnitude: 4, lit: true },
    { id: "chatbot", label: "Generic chatbot", compounding: 0.14, bolton: 0.9, magnitude: 1, lit: false },
    { id: "llm-copy", label: "LLM product copy", compounding: 0.1, bolton: 0.78, magnitude: 1, lit: false },
    { id: "erp-replatform", label: "ERP replatform \"to fix integration\"", compounding: 0.3, bolton: 0.15, magnitude: 2, lit: false },
  ],

  // ── Below the gate (payoff), never in the initial payload ──
  payoff: {
    headlineOpportunity: [5, 14],
    moneyPools: [
      {
        id: "integration",
        label: "Integration: stop losing orders and time at the ERP seam",
        range: [1.5, 5],
        note: "A storefront that cannot see live ERP price, inventory, and credit pushes the order back to a human, or sends it out wrong. Cutting rep-assisted orders from roughly 40% to 25% on a channel this size saves several million a year. Kawasaki Engines USA put dealer service and order automation on a B2B storefront and lifted average order value 5x since launch. The integration is the rail every other number rides on.",
        credibility: "illustrative",
        source: SRC.kawasaki,
      },
      {
        id: "self-service",
        label: "Self-service: shift orders off phone, fax, and rep desks",
        range: [1, 4],
        note: "Your distributors and OEMs largely order through reps today. A failed or manual order is a $40–60 rep touch or a lost sale. MKM Building Supplies put a composable B2B storefront live on BigCommerce and grew revenue 82%, traffic 42%, and web orders 26%. Self-service is not a cost center. It is a growth and margin lever at your scale.",
        credibility: "verified",
        source: SRC.mkm,
      },
      {
        id: "margin",
        label: "Margin: pricing you already negotiated, leaking",
        range: [2, 5],
        note: "Manufacturers lose 1–2% of margin to quote drift and discount creep across thousands of SKUs and contract terms. 1.5% on a ~$400M base is about $6M of mostly pure margin. A McKinsey-cited $15B distributor recovered 200 basis points in 10 weeks, then 50 more with agentic AI. Once the storefront reads true ERP pricing per account, the leak closes by enforcement, not negotiation.",
        credibility: "verified",
        source: SRC.mckinsey,
      },
      {
        id: "ma-onboarding",
        label: "M&A onboarding: absorb each acquisition in weeks, not quarters",
        range: [0.5, 3],
        note: "A KKR roll-up lives or dies on integration speed. Sheldahl just added a catalog of coated films and flexible circuits. Each bolt-on that takes a quarter to wire into the storefront and ERP is a quarter of stalled cross-sell and double-keyed orders. Watts Water absorbed 5 acquisitions in 11 months and named \"customer-facing platforms\" as a 10-K priority for exactly this reason. A reusable onboarding pipeline turns acquisition complexity into a repeatable playbook.",
        credibility: "verified",
        source: SRC.watts,
      },
    ],
    roadmap: [
      {
        phase: "Phase 1, starts now",
        title: "Connect BigCommerce B2B to Oracle Fusion and onboard Sheldahl",
        body: "Wire the storefront to the ERP so price, inventory, credit, and orders stay true both directions, then run Sheldahl's catalog and pricing through the same pipeline. It runs on systems you already have and it lands inside Conley's Year-1 roadmap. This is the wedge.",
        active: true,
      },
      {
        phase: "Phase 2, 3 to 6 months",
        title: "Stand up the self-service portal",
        body: "Quotes, reorder, account-specific catalogs, and B2B-aware search on the BigCommerce B2B storefront, so distributors and OEMs serve themselves instead of calling a rep. This is the channel growth engine. Every rep call it removes is margin back in the channel.",
      },
      {
        phase: "Phase 3, 6 to 12 months",
        title: "Account-based pricing, personalization, and entitlement",
        body: "Render contract pricing, approved SKUs, and role-based catalogs per logged-in account, pulled live from Oracle Fusion through the seam you built in Phase 1. This is where the margin pool closes and the storefront stops sending a rep the easy orders.",
      },
      {
        phase: "Phase 4, back office and the agentic bet",
        title: "Cross-sell, demand signal, agentic readiness",
        body: "Layer cross-sell and next-best-action onto order history, add demand signal for the exclusive and specification-driven lines, and make the catalog machine-purchasable for AI buyers (Google AP2, Anthropic MCP). Gartner expects 90% of B2B purchases to be AI-intermediated by 2028. The risk is being invisible, not being behind.",
      },
    ],
    // ── The play shortlist, across storefront-and-integration, sales-and-marketing, back office, and the bet ──
    plays: [
      // STOREFRONT AND INTEGRATION
      {
        id: "integration",
        pillar: "storefront",
        title: "BigCommerce B2B to Oracle Fusion integration plus catalog onboarding",
        problem:
          "The storefront cannot see live ERP price, inventory, and credit, so orders get pushed to a rep or go out wrong, and every acquisition adds a catalog that has to be re-keyed by hand.",
        caseName: "Kawasaki Engines USA, JPW Industries",
        caseDetail:
          "Kawasaki Engines USA put dealer order and service automation on a B2B storefront and lifted AOV 5x since launch. JPW Industries automated email and fax order intake, cutting order processing from 16 to 24 hours down to under 1 hour.",
        roi: "Cutting rep-assisted orders from ~40% to ~25% saves several million a year at Chase's scale, and a reusable onboarding pipeline compounds across every future bolt-on.",
        whatI95Does:
          "Build and own the BigCommerce-B2B-to-Oracle-Fusion integration so price, inventory, and orders stay true both directions, with a repeatable connector and playbook to absorb acquired catalogs like Sheldahl. BigCommerce is i95Dev-native; the Oracle Fusion side is integration-to-existing.",
        credibility: "illustrative",
        source: SRC.kawasaki,
      },
      {
        id: "self-service",
        pillar: "storefront",
        title: "B2B self-service portal: quotes, reorder, account catalogs",
        problem:
          "Distributors and OEMs order through reps, phone, and fax today. A failed lookup or a manual order is a $40–60 rep touch or an order lost to a competitor.",
        caseName: "MKM Building Supplies",
        caseDetail:
          "MKM Building Supplies launched a composable B2B storefront on BigCommerce and grew revenue 82%, traffic 42%, and web orders 26%, winning a MACH Award.",
        roi: "Every 1% of orders shifted from rep-assisted to digital saves $1–3M a year, and self-service buyers tend to order more often and reorder reliably.",
        whatI95Does:
          "Stand up quotes, reorder, account-specific catalogs, and B2B-aware search on the BigCommerce B2B storefront, wired to the Oracle Fusion data through the Phase 1 seam.",
        credibility: "verified",
        source: SRC.mkm,
      },
      {
        id: "acct-pricing",
        pillar: "storefront",
        title: "Account-based pricing, entitlement, and personalization",
        problem:
          "A wrong price or an unentitled SKU is instant trust loss and a rep call. Contract pricing and approved lines live in Oracle Fusion, and the storefront cannot see all of it.",
        caseName: "MilliporeSigma",
        caseDetail:
          "MilliporeSigma runs account-based entitlement and AI reorder on approved lists for regulated buyers. This is the rail every other storefront play runs on.",
        roi: "Cutting rep-assisted orders from ~40% to ~25% saves several million a year, and it gates the margin pool.",
        whatI95Does:
          "Render contract pricing, approved SKUs, and role-based catalogs per logged-in account, pulled live from Oracle Fusion through the integration seam.",
        credibility: "illustrative",
        source: SRC.millipore,
      },
      // SALES AND MARKETING
      {
        id: "cross-sell",
        pillar: "sales-marketing",
        title: "Cross-sell propensity and next-best-action",
        problem:
          "A roll-up creates cross-sell between brands and acquired lines, but reorder timing and white-space cross-sell stay manual and invisible until an account churns.",
        caseName: "Johnson Controls",
        caseDetail:
          "Johnson Controls propensity and whitespace models tracked $100M+ of protectable revenue ($35M per attrition point) and unlocked $40M from 23 accounts. Whitespace-managed accounts grow 9% versus 5–6%.",
        roi: "8–12 points of NRR, 15–30% churn reduction, $4–7 returned per $1. The highest-leverage way to monetize the roll-up's combined book.",
        whatI95Does:
          "Cross-sell and churn propensity on order history across the combined catalog, surfaced as rep alerts in Salesforce and reorder nudges on the storefront.",
        credibility: "verified",
        source: SRC.jci,
      },
      {
        id: "signal-gtm",
        pillar: "sales-marketing",
        title: "Signal-based GTM: connect HubSpot and Salesforce into plays",
        problem:
          "You run HubSpot and Salesforce, but content engagement and CRM signal rarely reach the right rep with the right next step, and anonymous research never becomes a named opportunity.",
        caseName: "Ivanti, Sonepar",
        caseDetail:
          "Ivanti fused intent into GTM for a 154% higher win rate and $263M of influenced pipeline. Sonepar's 7 production AI agents helped drive digital sales up 50% year on year.",
        roi: "Signal-based GTM is reallocation, not new spend: existing headcount onto 2–3x more in-market pipeline.",
        whatI95Does:
          "Connect HubSpot engagement, on-site behavior, and Salesforce into a next-best-action layer, closing the loop from research to named opportunity.",
        credibility: "verified",
        source: SRC.sonepar,
      },
      // BACK OFFICE AND OPERATIONS
      {
        id: "demand-signal",
        pillar: "back-office",
        title: "Demand signal for specification-driven lines",
        problem:
          "Specialty-chemical and coated-film supply swings on a single plant or a single program. Classic forecasting misses the signal until the stockout, which puts mission-critical, specification-driven orders at risk.",
        caseName: "BRF, General Mills",
        caseDetail:
          "BRF's SAP IBP demand sensing cut planning time 33%. General Mills logged $20M+ in verified savings running AI on 5,000+ daily shipments.",
        roi: "Demand sensing frees about 10–12% of inventory working capital, with no headcount impact.",
        whatI95Does:
          "Layer demand-signal onto existing forecasting and the order data flowing through the integration, so planners see disruption before it hits a specification-driven line.",
        credibility: "verified",
        source: SRC.brf,
      },
      {
        id: "pim",
        pillar: "foundation",
        title: "AI PIM and MDM, the catalog foundation under the roll-up",
        problem:
          "30–60% of B2B catalogs have incomplete attributes, and every acquisition adds duplicate item masters and inconsistent units. Dirty product data breaks search, the storefront, and the ERP at once.",
        caseName: "Stibo, Informatica, Alstom",
        caseDetail:
          "Stibo and Informatica (Gartner MDM Leaders) run agentic PIM that bulk-enriches attributes from supplier PDFs with human-in-the-loop, standardizes units and classification, and scores quality continuously. Alstom ran AI/ML master data management as the integration backbone across its business.",
        roi: "60–70% less manual stewardship, and it gates the ROI of every other initiative. The cheapest insurance on the roll-up's catalog sprawl.",
        whatI95Does:
          "AI-enriched PIM and MDM that extracts attributes from supplier docs and feeds the storefront, search, and Oracle Fusion from one source of truth, so acquired catalogs come in clean.",
        credibility: "illustrative",
        source: SRC.stibo,
      },
      // THE BET
      {
        id: "agentic",
        pillar: "storefront",
        title: "Agentic-commerce readiness",
        problem:
          "B2B buyers and procurement agents are starting to source and buy through AI. A catalog that is not clean, structured, and machine-readable is invisible to them.",
        caseName: "Google AP2, Anthropic MCP, Grainger",
        caseDetail:
          "Google's Agent Payments Protocol (AP2) launched with 60+ partners including Mastercard, PayPal, and Salesforce; Anthropic's MCP is the vendor-neutral standard. Grainger already runs RAG over 2.5M SKUs in production.",
        roi: "Gartner forecasts 90% of B2B purchases AI-agent-intermediated by 2028. The risk is not being behind in 2026. It is being invisible in 2027–28.",
        whatI95Does:
          "Make the combined catalog clean, structured, and API-first on the BigCommerce B2B storefront so it is machine-purchasable across AP2 and MCP.",
        credibility: "illustrative",
        source: SRC.google,
      },
    ],
    why: {
      opener: "You'll be sold a $3M transformation. Your problem is a six-week integration.",
      body: "The Big-4 are built for enterprise-wide change. Your wedge is not enterprise-wide. It is the seam between a BigCommerce B2B storefront and Oracle Fusion, and the speed of onboarding the next acquisition. That is exactly i95Dev's lane: surgical, deep in commerce and ERP integration, on mid-market economics. BigCommerce is native to us. We do not replatform your Oracle Fusion. We connect it, and we make every bolt-on you buy land in weeks.",
      ctaTitle: "Book your Commerce-to-ERP Integration Diagnostic",
      ctaSubtitle:
        "A fixed-scope, fixed-fee readiness assessment that validates these directional numbers against Chase's real BigCommerce and Oracle Fusion environment, and scopes the Sheldahl onboarding. Two weeks, not a $3M transformation.",
      credibility: { brands: "500+ B2B brands", years: "25+ years", projects: "1,200+ projects" },
    },
  },
};
