import type { AccountConfig } from "@/lib/types";

// Sources reused across the report (Verified vs. Illustrative labelled per-claim, spec section 14).
const SRC = {
  mit: { label: "MIT NANDA, ~95% of pilots", url: "https://nanda.media.mit.edu/" },
  ibm: { label: "IBM, 33% of Salesforce AI hits ROI; 53% blame data quality", url: "https://www.ibm.com/" },
  referrals: { label: "AI referral visits 1.13B in June 2025, +357% YoY", url: "https://www.similarweb.com/" },
  watts: { label: "Watts Water, cited by Perplexity over rivals", url: "https://www.watts.com/" },
  watsco: { label: "Watsco, AOV +10% from AI recs (Adobe DC360)", url: "https://www.watsco.com/" },
  kawasaki: { label: "Kawasaki Engines USA, self-serve B2B AOV +5x (Salesforce DC360)", url: "https://www.salesforce.com/" },
  grainger: { label: "Grainger, RAG over 2.5M SKUs in production (Databricks)", url: "https://www.grainger.com/" },
  eaton: { label: "Eaton, ERP-data automation surfacing material shortages (Palantir)", url: "https://www.eaton.com/" },
  stibo: { label: "Stibo / Informatica, Gartner MDM Leaders", url: "https://www.stibosystems.com/" },
  salesforceCdp: { label: "Salesforce Data Cloud, IDC-leading B2B CDP", url: "https://www.salesforce.com/" },
} as const;

/**
 * Honeywell, a separation-driven opportunity account (warm fit on a breakup trigger, not a live RFP).
 * Every section is grounded in the Account-360 profile and the AI research dump, and maps 1:1 to
 * companies/honeywell/honeywell-spec.md.
 *
 * Spine: Honeywell is being taken apart, and that is the cleanest data-foundation moment it will ever
 * get. Solstice spun off in October 2025, Aerospace follows in Q3 2026, and the company runs as four
 * segments from Q1 FY2026. Each separated business must stand up its own commerce, CRM and marketing
 * data on a deadline: either four new messes or one clean foundation. The model is the commodity. A
 * century of installed-base, aftermarket and specification data, and the buyer relationships Siemens
 * and Emerson cannot copy, are the moat. Write to Alesia Miller (Global Sr. Marketing Director:
 * acquisition, CRM, data analytics, CX, digital strategy), with the segment CIOs and CDOs standing up
 * each spin-co as the economic and technical buyers. Guardrails: do not pitch an ERP replacement, the
 * core is SAP S/4HANA and a prime SI is running the separation. i95Dev enters complementary, on the
 * customer-data-to-commerce seam for one segment's aftermarket, never the SAP core. Scope and size to
 * one segment, not the enterprise.
 */
export const honeywell: AccountConfig = {
  slug: "honeywell",
  companyName: "Honeywell",
  aliases: [
    "Honeywell International",
    "Honeywell Aerospace Technologies",
    "Honeywell Building Automation",
    "Honeywell Industrial Automation",
    "Honeywell Forge",
    "Solstice Advanced Materials",
  ],
  domains: ["honeywell.com"],
  vertical: "manufacturing",
  verticalLabel: "Diversified industrial and technology (mid-separation)",
  revenueBand: "$1B+ (enterprise)",
  role: "Global Sr. Marketing Director",
  roleEmphasis: "ai-strategy",
  activeRequirement: false,
  published: true,

  thesis: "A breakup splits four companies. Do not let it split your customer data four ways.",
  wedge:
    "Answer Engine Optimization, so AI engines cite Honeywell parts, not the distributors reselling them",
  wedgeDetail:
    "It runs on the specification content Honeywell already owns, proves out in weeks, and almost no industrial manufacturer is doing it. Two-thirds of senior B2B decision-makers now use AI for supplier research, and few of those answers cite a manufacturer directly. It is the fastest visible proof that a clean data foundation pays, and it lands squarely inside Alesia Miller's acquisition remit.",

  // ── Module 1, The Reframe (above gate) ──
  reframe: {
    opener: "Everyone here is selling you AI. The separation is handing you something rarer: a clean slate.",
    stat: "95%",
    statSource: SRC.mit,
    body: "95% of enterprise AI pilots return nothing to the P&L. They sit next to the work instead of inside it, on data nobody cleaned first. Honeywell is about to do the cleaning anyway: Solstice left in October 2025, Aerospace follows in Q3 2026, and every separated business must stand up its own commerce, CRM and marketing data. The edge is not a better model. It is pointing ordinary AI at the asset Siemens and Emerson cannot copy: decades of installed-base, aftermarket and specification data, governed once as the businesses divide rather than rebuilt four times in a hurry.",
  },

  // ── Module 2, The Hype Filter (above gate) ──
  hypeFilter: {
    opener: "Commodity AI runs on the model. Compounding AI runs on the data only Honeywell owns.",
    commodity: [
      "A Forge copilot bolted onto every screen",
      "Generic recs blind to contract and entitlement",
      "An \"AI strategy\" deck per spin-co",
      "LLM copy that cannot vouch for a spec",
    ],
    compounding: [
      "One governed customer and product data layer",
      "AEO, so ChatGPT and Perplexity cite your parts",
      "Aftermarket answers grounded in real specs",
      "Account-based pricing on rails each business keeps",
    ],
    pitchWarning:
      "You run SAP S/4HANA with Adobe and Salesforce, so expect a pitch for Copilot on everything and a seven-platform separation program. The separation is real work, and a prime SI will run the SAP core. The customer-data layer underneath it is where AI pays or fails, and that asset is yours to define once, not four times. Do not let it get rebuilt four ways by accident.",
  },

  // ── Module 2.5, Your Stack (verified or strongly inferred in the Account 360; reconcile flagged items live) ──
  stackFlags: [
    {
      signal: "SAP S/4HANA (splitting into multiple instances)",
      leadPlay: "Govern customer and product master data once as the instances separate",
      commodityFlag: "A rip-and-rebuild per spin-co. The unlock is governed data, not four ERPs.",
    },
    {
      signal: "Adobe Experience + Salesforce",
      leadPlay: "Unify CX and CRM into one profile per business that AI can act on",
      commodityFlag: "\"Agentforce and Copilot everywhere.\" Only 33% of Salesforce AI hits ROI.",
    },
    {
      signal: "Honeywell Forge (IIoT / AI)",
      leadPlay: "Feed installed-base signals into aftermarket reorder and recommendations",
      commodityFlag: "A net-new analytics platform. You already own the signal.",
    },
    {
      signal: "Per-segment aftermarket parts portals",
      leadPlay: "Account-based self-service: approved SKUs, contract price, AI spec lookup",
      commodityFlag: "A generic chatbot. The value is entitlement-aware answers, not chat.",
    },
  ],

  // ── Module 3, The Commodity-vs-Compounding Map (above gate) ──
  // Y: 0 commodity to 1 compounding · X: 0 foundation-required to 1 bolt-on-ready (wedge = top-right)
  mapPlays: [
    { id: "aeo", label: "AEO + answer layer", compounding: 0.92, bolton: 0.85, magnitude: 4, lit: true, wedge: true },
    { id: "aftermarket", label: "Account-based aftermarket self-service", compounding: 0.86, bolton: 0.6, magnitude: 4, lit: true },
    { id: "rag", label: "Aftermarket RAG spec lookup", compounding: 0.8, bolton: 0.62, magnitude: 3, lit: true },
    { id: "cdp", label: "Customer data unification / CDP", compounding: 0.82, bolton: 0.5, magnitude: 4, lit: true },
    { id: "mdm", label: "AI master data foundation", compounding: 0.9, bolton: 0.38, magnitude: 5, lit: true },
    { id: "carveout", label: "Carve-out data separation", compounding: 0.7, bolton: 0.45, magnitude: 4, lit: true },
    { id: "forge-copilot", label: "Generic Forge copilot", compounding: 0.15, bolton: 0.88, magnitude: 1, lit: false },
    { id: "llm-copy", label: "LLM product copy", compounding: 0.1, bolton: 0.78, magnitude: 1, lit: false },
    { id: "ml-forecasting", label: "ML forecasting (relabeled)", compounding: 0.4, bolton: 0.42, magnitude: 2, lit: false },
  ],

  // ── Below the gate (payoff), never in the initial payload ──
  payoff: {
    headlineOpportunity: [3, 9],
    moneyPools: [
      {
        id: "acquisition",
        label: "Acquisition: demand the AI engines send you, not the distributors",
        range: [0.5, 2],
        note: "AI engines drove 1.13B referral visits in June 2025, up 357% year over year, and those buyers reach whoever the engine cites. Watts Water already gets cited by Perplexity over competitors on selection content. AEO on Honeywell's spec library captures supplier-research demand that today flows to resellers.",
        credibility: "verified",
        source: SRC.referrals,
      },
      {
        id: "aftermarket",
        label: "Aftermarket commerce: account-aware self-service that lifts AOV",
        range: [1, 4],
        note: "The aftermarket is the profit engine, and self-service that knows the account lifts it. Watsco grew average order value 10% from AI recommendations on its contractor platform; Kawasaki Engines grew AOV 5x after launching B2B self-service. Account-based parts self-service on one segment extends that lever.",
        credibility: "verified",
        source: SRC.watsco,
      },
      {
        id: "efficiency",
        label: "Efficiency: spec questions answered before a rep picks up",
        range: [0.5, 1.5],
        note: "Engineers and installers lose time hunting specs, and each technical call costs $40 to $80. Grainger runs RAG technical discovery in production on 2.5M SKUs to deflect exactly this. The same pattern on one segment's catalog converts calls into self-service.",
        credibility: "verified",
        source: SRC.grainger,
      },
      {
        id: "foundation",
        label: "Foundation: the governed data every play above runs on",
        range: [0.5, 1.5],
        note: "87% of leaders say bad data has hampered AI value, and the separation is the moment to fix it. Eaton automated its ERP-data work with Palantir and surfaced material shortages no one could see. Governing customer and product data once, as the SAP instances separate, gates the ROI of every other play.",
        credibility: "illustrative",
        source: SRC.eaton,
      },
    ],
    roadmap: [
      {
        phase: "Phase 1, starts now",
        title: "AEO and account-aware aftermarket on one segment",
        body: "Make a named AI engine cite Honeywell over a distributor on one product family, and stand up account-based parts self-service for that segment. It runs on owned spec and contract data and proves the thesis fast. This is the wedge.",
        active: true,
      },
      {
        phase: "Phase 2, 3 to 6 months",
        title: "RAG spec lookup and PIM enrichment",
        body: "Spec-grounded answers on the segment catalog, plus AI PIM enrichment so every SKU is searchable and AEO-ready. The Grainger pattern, scoped to one business.",
      },
      {
        phase: "Phase 3, 6 to 12 months",
        title: "Customer data unification per business",
        body: "Unify Adobe and Salesforce data into one profile per separated company, so campaigns and CX run on real behavior, not list sends.",
      },
      {
        phase: "Phase 4, the foundation",
        title: "Governed master data as the instances separate",
        body: "Govern customer and product master data once, the moment each SAP instance stands up, alongside the prime SI. The work begins quietly in Phase 1 and matures here.",
      },
    ],
    // ── The play shortlist across acquisition, aftermarket commerce and the data foundation ──
    plays: [
      // ACQUISITION AND DISCOVERY
      {
        id: "aeo",
        pillar: "storefront",
        title: "Answer Engine Optimization",
        problem:
          "Buyers research suppliers in AI engines now, and those engines cite distributors and competitors instead of Honeywell.",
        caseName: "Watts Water",
        caseDetail:
          "Watts Water gets cited by Perplexity over competitors on backflow-selection content; AI referral visits hit 1.13B in June 2025, up 357%.",
        roi: "Capturing supplier-research demand that today leaks to resellers, on spec content you already own.",
        whatI95Does:
          "Structure Honeywell's spec and FAQ content into machine-readable schema and feeds so AI engines cite it, starting with one product family.",
        credibility: "verified",
        source: SRC.watts,
      },
      // AFTERMARKET COMMERCE
      {
        id: "aftermarket",
        pillar: "storefront",
        title: "Account-based aftermarket self-service",
        problem:
          "Aftermarket buyers still need a rep for too many orders, and a generic portal cannot show contract price or approved SKUs.",
        caseName: "Watsco, Kawasaki Engines",
        caseDetail:
          "Watsco grew AOV 10% from AI recs; Kawasaki grew AOV 5x after launching B2B self-service.",
        roi: "Account-aware self-service lifts aftermarket AOV and converts rep-assisted orders into hands-off ones.",
        whatI95Does:
          "Build entitlement-aware pricing and approved-item catalogs into one segment's parts portal, bridged to the segment's ERP.",
        credibility: "verified",
        source: SRC.watsco,
      },
      {
        id: "rag",
        pillar: "storefront",
        title: "RAG aftermarket spec lookup",
        problem:
          "Engineers and installers lose time finding the right part and spec, so they call.",
        caseName: "Grainger",
        caseDetail:
          "Grainger runs RAG discovery on 2.5M SKUs in production to deflect technical calls.",
        roi: "Each deflected technical call saves $40 to $80 and shifts the buyer to self-service.",
        whatI95Does:
          "Spec-grounded discovery on one segment's catalog, ranked on approved items and inventory.",
        credibility: "verified",
        source: SRC.grainger,
      },
      // SALES, MARKETING, AND THE FOUNDATION
      {
        id: "cdp",
        pillar: "sales-marketing",
        title: "Customer data unification across Adobe and Salesforce",
        problem:
          "Customer data is split across Adobe, Salesforce and commerce, and the separation is about to split it further.",
        caseName: "Salesforce Data Cloud, IBM",
        caseDetail:
          "Salesforce Data Cloud is the IDC-leading B2B CDP; the IBM finding is that 53% of AI failures blame data quality.",
        roi: "One profile per business lifts ABM efficiency and retention and makes every downstream AI more accurate.",
        whatI95Does:
          "Unify first-party data into one profile per separated company, feeding campaigns and CX.",
        credibility: "illustrative",
        source: SRC.salesforceCdp,
      },
      {
        id: "mdm",
        pillar: "foundation",
        title: "AI master data foundation",
        problem:
          "87% of leaders say bad data has hampered AI value, and four new companies are about to inherit it.",
        caseName: "Eaton, Stibo / Informatica",
        caseDetail:
          "Eaton automated ERP-data work with Palantir and surfaced hidden material shortages; Stibo and Informatica are Gartner MDM Leaders.",
        roi: "Governed customer and product data gates the ROI of every other play and is the cheapest insurance on the portfolio.",
        whatI95Does:
          "Govern customer and product master data once as the SAP instances separate, alongside the prime SI, never replacing it.",
        credibility: "illustrative",
        source: SRC.eaton,
      },
    ],
    why: {
      opener: "You'll be sold a seven-platform separation. Your gain is the customer data built right, once.",
      body: "The prime SI will carve the SAP core, and that is its job. The seam between that core, the commerce storefront and the customer data is where AI value is won or lost, and it is exactly what i95Dev does. We are the data bridge between commerce platforms and SAP, Dynamics and NetSuite, 180+ integrations deep, surgical where the Big-4 are sprawling, priced for one segment rather than the enterprise. We do not touch the SAP core. We make one segment's aftermarket the proof that a clean data foundation pays, then scale it as the businesses separate.",
      ctaTitle: "Book your Separation-Ready Commerce and Data Diagnostic",
      ctaSubtitle:
        "A fixed-scope assessment that picks one segment's aftermarket, sizes the AEO and self-service upside, and maps the customer-data foundation to build once as the instances separate. Weeks, not a multi-year program.",
      credibility: { brands: "500+ B2B brands", years: "25+ years", projects: "1,200+ projects" },
    },
  },
};
