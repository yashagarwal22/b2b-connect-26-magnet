import type { AccountConfig } from "@/lib/types";

// Sources reused across the report (Verified vs. Illustrative labelled per-claim, spec section 14).
const SRC = {
  ibm: { label: "IBM, 1,200 Salesforce customers", url: "https://www.ibm.com/" },
  dawn: { label: "Dawn Foods, triple-digit online growth (commercetools / DC360)", url: "https://commercetools.com/" },
  watsco: { label: "Watsco, +10% AOV from AI recs (Adobe / DC360)", url: "https://www.adobe.com/" },
  fisherPaykel: { label: "Fisher & Paykel, self-service 40% to 70%, 3,300 hrs/mo (BusinessWire / Salesforce)", url: "https://www.salesforce.com/" },
  enrichment: { label: "AI PIM enrichment cuts manual data time up to 60% (research dump, Part 3.2)", url: "https://www.i95dev.com/" },
  referrals: { label: "AI referral visits 1.13B June 2025 (research dump, Part 3.2)", url: "https://www.i95dev.com/" },
  gartner: { label: "Gartner, most B2B purchases AI-intermediated by 2028 (research dump, Part 3.2)", url: "https://www.gartner.com/" },
  zonca: { label: "Shannon Zonca, Account 360", url: "https://www.millerknoll.com/" },
} as const;

/**
 * MillerKnoll, a warm and active fit (PIM buy in motion, incumbent SI on the commerce core). Every
 * section is grounded in the Account-360 profile and the AI research dump, and maps 1:1 to
 * companies/millerknoll/millerknoll-spec.md.
 *
 * Spine: MillerKnoll only wins as a collective if its data is unified, and its own VP has named the
 * unification as the thing every AI feature depends on. It is Herman Miller, Knoll, DWR, HAY, Muuto,
 * Geiger and more under one roof since the 2021 merger. Shannon Zonca, VP of B2B E-Commerce and Digital
 * Solutions, is buying PIM now and has said plainly that the PIM, the product-discovery chat tool and
 * the AI space-planning work are all downstream of that data-unification effort. The question is only
 * whether the PIM buy becomes a tool license over messy data, or the multi-brand data model that every
 * downstream feature inherits clean. Write to Zonca (VP, B2B E-Commerce + Digital Solutions, the PIM
 * buyer), with Ben Groom (Chief Digital Officer) as sponsor and Frank DeMaria (VP Digital Engineering)
 * as the technical gatekeeper. Guardrails: Capgemini owns the Salesforce Commerce core, win the PIM and
 * data scope complementary and never the commerce core, and integrate NetSuite rather than rip it out.
 */
export const millerKnoll: AccountConfig = {
  slug: "millerknoll",
  companyName: "MillerKnoll",
  aliases: [
    "Herman Miller",
    "Knoll",
    "Design Within Reach",
    "DWR",
    "HAY",
    "Muuto",
    "Geiger",
    "NaughtOne",
    "Maharam",
  ],
  domains: ["millerknoll.com", "hermanmiller.com", "knoll.com", "dwr.com"],
  vertical: "manufacturing",
  verticalLabel: "Design furnishings collective (B2B contract + B2C retail)",
  revenueBand: "$1B+",
  role: "VP, B2B E-Commerce + Digital Solutions",
  roleEmphasis: "ecommerce",
  activeRequirement: true,
  published: true,

  thesis: "Every AI feature on your roadmap is downstream of the PIM. Build that first.",
  wedge:
    "A multi-brand PIM and the data layer feeding it, vendor-agnostic and complementary to Capgemini",
  wedgeDetail:
    "You are buying PIM now, and the discovery chat, the space planner and Agentforce all sit downstream of it. Get the multi-brand data model right across Herman Miller, Knoll, DWR, HAY and Muuto, plus the integration into Salesforce Commerce and NetSuite, and every one of those features inherits clean data instead of compounding a mess.",

  // ── Module 1, The Reframe (above gate) ──
  reframe: {
    opener: "Everyone is selling you the AI feature. You already named the part that decides whether it works.",
    stat: "33%",
    statSource: SRC.ibm,
    body: "Only 33% of AI initiatives hit ROI, and 53% of the failures blame data, not the model. Shannon Zonca has already said the quiet part out loud: the PIM, the product-discovery chat and the AI space planner are all downstream of data unification. That is exactly right. Get the multi-brand data model right across the collective, and AI runs on the one asset Steelcase and Haworth cannot copy: a unified catalog and dealer relationship that spans every brand under one roof.",
  },

  // ── Module 2, The Hype Filter (above gate) ──
  hypeFilter: {
    opener: "Commodity AI ships a feature. Compounding AI ships the data model the feature needs.",
    commodity: [
      "Agentforce switched on over messy data",
      "A discovery chatbot blind to dealer pricing",
      "AI space planning on un-unified specs",
      "Another replatform when data is the issue",
    ],
    compounding: [
      "One PIM as the single source of truth",
      "A multi-brand data model across the collective",
      "Clean specs feeding discovery, planning, Agentforce",
      "PIM integrated to SFCC, NetSuite and TradeCentric",
    ],
    pitchWarning:
      "Capgemini owns the Salesforce Commerce core, and that is fine, leave it there. The trap is letting the PIM and data-unification scope get folded into another platform program. The features you want are cheap. The data model beneath them is the expensive, defensible part, and today it is built largely in-house with one embedded contractor. That is the gap.",
  },

  // ── Module 2.5, Your Stack (verified dashboard research; reconcile flagged items live) ──
  stackFlags: [
    {
      signal: "Salesforce Commerce Cloud + Agentforce",
      leadPlay: "Feed it clean, unified product data so Agentforce and discovery actually perform",
      commodityFlag: "\"Agentforce for everything.\" It is only as good as the PIM behind it.",
    },
    {
      signal: "PIM (live, single source of truth)",
      leadPlay: "Make the multi-brand data model the asset every AI feature inherits",
      commodityFlag: "A bigger PIM license. The value is the model and integrations, not the tool.",
    },
    {
      signal: "Oracle NetSuite ERP",
      leadPlay: "Bridge ERP product, pricing and inventory into PIM and commerce",
      commodityFlag: "A NetSuite re-implementation. The unlock is the integration seam.",
    },
    {
      signal: "TradeCentric punchout",
      leadPlay: "Keep dealer punchout fed by the same clean catalog",
      commodityFlag: "A separate catalog for punchout. One source, many channels.",
    },
  ],

  // ── Module 3, The Commodity-vs-Compounding Map (above gate) ──
  // Y: 0 commodity to 1 compounding · X: 0 foundation-required to 1 bolt-on-ready (wedge = top-right)
  mapPlays: [
    { id: "pim", label: "Multi-brand PIM + data layer", compounding: 0.88, bolton: 0.8, magnitude: 5, lit: true, wedge: true },
    { id: "enrichment", label: "AI PIM enrichment", compounding: 0.82, bolton: 0.7, magnitude: 3, lit: true },
    { id: "personalization", label: "Account / dealer personalization", compounding: 0.84, bolton: 0.55, magnitude: 4, lit: true },
    { id: "discovery", label: "B2B-aware search / discovery", compounding: 0.8, bolton: 0.62, magnitude: 4, lit: true },
    { id: "aeo", label: "AEO + answer layer", compounding: 0.9, bolton: 0.72, magnitude: 3, lit: true },
    { id: "content-ops", label: "Dealer catalog content ops", compounding: 0.65, bolton: 0.75, magnitude: 3, lit: true },
    { id: "agentic", label: "Agentic-commerce ready", compounding: 0.95, bolton: 0.3, magnitude: 4, lit: true },
    { id: "agentforce-messy", label: "Agentforce over messy data", compounding: 0.2, bolton: 0.85, magnitude: 1, lit: false },
    { id: "generic-chatbot", label: "Generic discovery chatbot", compounding: 0.16, bolton: 0.88, magnitude: 1, lit: false },
    { id: "ml-forecasting", label: "ML forecasting (relabeled)", compounding: 0.4, bolton: 0.42, magnitude: 2, lit: false },
  ],

  // ── Below the gate (payoff), never in the initial payload ──
  payoff: {
    headlineOpportunity: [2, 7],
    moneyPools: [
      {
        id: "conversion",
        label: "Conversion: discovery and search on clean multi-brand data",
        range: [0.5, 2],
        note: "Product discovery and search only convert when the catalog data is unified and complete. AI search converts at roughly 1.67 times keyword, and Dawn Foods drove triple-digit online growth on AI search and recs. On clean multi-brand data, discovery and the space planner finally perform.",
        credibility: "verified",
        source: SRC.dawn,
      },
      {
        id: "dealer-aov",
        label: "Dealer AOV: account-aware recommendations and reorder",
        range: [0.5, 1.5],
        note: "Account-aware recommendations lift order value on the contract and dealer base. Watsco grew average order value 10% from AI recommendations on its contractor platform. The same pattern across the collective's dealers compounds.",
        credibility: "verified",
        source: SRC.watsco,
      },
      {
        id: "cost-out",
        label: "Cost-out: content ops and dealer self-service",
        range: [0.5, 2],
        note: "At a 1.4% operating margin, cost-out matters as much as growth. AI PIM enrichment cuts manual data time up to 60%, relieving the lean in-house team, and dealer self-service deflects rep-assisted orders. Fisher & Paykel moved self-service 40% to 70% and saved 3,300 hours a month.",
        credibility: "verified",
        source: SRC.fisherPaykel,
      },
      {
        id: "foundation",
        label: "Foundation: the PIM data model the AI portfolio inherits",
        range: [0.5, 1.5],
        note: "Discovery, space planning and Agentforce are all downstream of the PIM, by the buyer's own account. The multi-brand data model gates the ROI of every one of them, which makes it the highest-leverage spend on the board.",
        credibility: "illustrative",
        source: SRC.zonca,
      },
    ],
    roadmap: [
      {
        phase: "Phase 1, starts now",
        title: "Multi-brand data model and PIM enrichment",
        body: "Define the multi-brand data model and run AI PIM enrichment on one brand's catalog, integrated into Salesforce Commerce. AI drafts attributes, category managers approve by exception. This is the wedge, and it rides the PIM budget already approved.",
        active: true,
      },
      {
        phase: "Phase 2, 3 to 6 months",
        title: "PIM as the single source of truth",
        body: "Extend the model across the collective and integrate to NetSuite and TradeCentric, so one catalog feeds every channel.",
      },
      {
        phase: "Phase 3, 6 to 12 months",
        title: "Discovery, dealer personalization, AEO",
        body: "Turn on product discovery, dealer personalization and AEO, all on the clean layer, so they actually perform.",
      },
      {
        phase: "Phase 4, the foundation",
        title: "Agentic-commerce readiness",
        body: "Make the catalog machine-readable and contract-aware for agentic buyers. The data work begins in Phase 1 and matures here.",
      },
    ],
    // ── The play shortlist, data foundation first, then commerce, then acquisition, all complementary to the Capgemini SFCC core ──
    plays: [
      // THE DATA FOUNDATION
      {
        id: "pim",
        pillar: "foundation",
        title: "Multi-brand PIM and data layer",
        problem:
          "The PIM is being bought now, and it could ship as a tool license over fragmented brand data instead of the model every AI feature needs.",
        caseName: "Shannon Zonca, Account 360",
        caseDetail:
          "The buyer's own logic, that discovery, planning and Agentforce are downstream of data unification.",
        roi: "A clean multi-brand model gates the ROI of every downstream feature.",
        whatI95Does:
          "Build the vendor-agnostic multi-brand data model and integrate it into SFCC and NetSuite, complementary to Capgemini.",
        credibility: "illustrative",
        source: SRC.zonca,
      },
      {
        id: "enrichment",
        pillar: "foundation",
        title: "AI PIM enrichment",
        problem:
          "Incomplete attributes across brands kill search, discovery and AEO, and the in-house team is lean.",
        caseName: "Research dump, Part 3.2",
        caseDetail:
          "AI PIM enrichment cuts manual data time up to 60%.",
        roi: "A complete catalog faster, with the lean team approving by exception.",
        whatI95Does:
          "AI-drafted, human-approved attribute enrichment across the collective's catalogs.",
        credibility: "verified",
        source: SRC.enrichment,
      },
      // COMMERCE AND THE BUYER EXPERIENCE
      {
        id: "discovery",
        pillar: "storefront",
        title: "B2B-aware search and discovery",
        problem:
          "Discovery and the space planner only work when the catalog data behind them is clean and unified.",
        caseName: "Dawn Foods",
        caseDetail:
          "AI search converts about 1.67 times keyword; Dawn Foods drove triple-digit online growth.",
        roi: "Higher conversion on the search-driven share once the data is unified.",
        whatI95Does:
          "Account-aware search and discovery on the clean multi-brand catalog.",
        credibility: "verified",
        source: SRC.dawn,
      },
      {
        id: "personalization",
        pillar: "storefront",
        title: "Account and dealer personalization",
        problem:
          "Dealers and contract buyers need their own pricing and approved items, which generic recs ignore.",
        caseName: "Adobe / Watsco",
        caseDetail:
          "Watsco grew AOV 10% from AI recs on its contractor platform.",
        roi: "Higher dealer AOV and fewer rep-assisted orders.",
        whatI95Does:
          "Entitlement-aware personalization and reorder for dealers, fed by the PIM.",
        credibility: "verified",
        source: SRC.watsco,
      },
      // ACQUISITION
      {
        id: "aeo",
        pillar: "sales-marketing",
        title: "AEO and agentic-commerce readiness",
        problem:
          "AI engines and agentic buyers need machine-readable, contract-aware catalog data, which fragmented brands cannot provide.",
        caseName: "Research dump, Part 3.2",
        caseDetail:
          "AI referral visits hit 1.13B in June 2025; Gartner projects most B2B purchases AI-intermediated by 2028.",
        roi: "Being cited and being buyable by AI agents, on a catalog competitors cannot match.",
        whatI95Does:
          "Schema feeds and API-first, contract-aware catalog structure on the clean layer.",
        credibility: "verified",
        source: SRC.referrals,
      },
    ],
    why: {
      opener: "You'll be sold another platform program. Your gain is the data model every feature inherits.",
      body: "The platform vendors will pitch templates and the Big-4 a transformation, and Capgemini already owns your commerce core. Your problem is none of those. It is the multi-brand data model and the integration layer feeding Agentforce, NetSuite and TradeCentric, built right and built once. That is exactly i95Dev's lane: the PIM-to-commerce-to-ERP seam, surgical where the Big-4 are sprawling, priced for a thin-margin collective. We do not touch the SFCC core. We build the foundation your own roadmap says everything depends on.",
      ctaTitle: "Book your PIM and Data-Foundation Diagnostic",
      ctaSubtitle:
        "A fixed-scope assessment that defines the multi-brand data model, maps the integration into SFCC and NetSuite, and sizes the conversion and cost-out upside against MillerKnoll's real catalog. Weeks, not a multi-year program.",
      credibility: { brands: "500+ B2B brands", years: "25+ years", projects: "1,200+ projects" },
    },
  },
};
