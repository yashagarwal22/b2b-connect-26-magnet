import type { AccountConfig } from "@/lib/types";

// Sources reused across the report (Verified vs. Illustrative labelled per-claim, spec section 14).
const SRC = {
  mckinsey: { label: "McKinsey, B2B pricing & AI", url: "https://www.mckinsey.com/" },
  mckinseyDist: { label: "McKinsey, $15B distributor +200bps then +50bps in 10 weeks", url: "https://www.mckinsey.com/" },
  pros: { label: "PROS / Wilbur-Ellis, +2% on 6,000 SKUs", url: "https://pros.com/" },
  apDump: { label: "AI research dump, Part 2.2 (autonomous AP, ~$10 to ~$3)", url: "https://www.i95dev.com/" },
  brf: { label: "BRF / SAP IBP demand sensing, planning time -33%", url: "https://www.sap.com/" },
  resilinc: { label: "Resilinc / Everstream, 60-90 day risk warnings", url: "https://www.resilinc.com/" },
  grainger: { label: "Grainger, RAG over 2.5M SKUs (Databricks / DC360)", url: "https://www.grainger.com/" },
  simonKucher: { label: "Simon-Kucher, contract-B2B win is enforcement not spot pricing (research dump Part 2.1)", url: "https://www.simon-kucher.com/" },
} as const;

/**
 * Airgas (Air Liquide), a recurring-revenue industrial-gas and welding-hardgoods distributor and the
 * largest US gas-and-hardgoods network. Every section is grounded in the Account-360 profile and the AI
 * research dump, and maps 1:1 to companies/airgas/airgas-spec.md.
 *
 * Spine: Airgas wins on density and reliability, the largest US gas-and-hardgoods network with a
 * recurring cylinder-rental book, and the AI that pays for a business like that lives in the back office,
 * not the storefront. The attendee is Kurt Smetana, VP Finance, whose stated reason to attend is
 * "Anything AI is ideal," with a budget note of "only local projects," a Finance leader hunting AI that
 * shows up in the P&L with an appetite for a contained pilot. The instinct is right and the usual target
 * is wrong: the defensible case is contract-price enforcement and autonomous AP on the SAP order and
 * pricing data behind 900-plus branches that Linde and Matheson cannot see into. The model is the
 * commodity; the proprietary order and pricing data is the moat. Guardrails: lead with the CFO-fundable
 * back-office case (pricing, AP), do not lead with a commerce build to a Finance buyer, do not pitch an
 * SAP replacement (extend and integrate), and map the unnamed eCommerce owner for the storefront plays.
 */
export const airgas: AccountConfig = {
  slug: "airgas",
  companyName: "Airgas",
  aliases: [
    "Air Liquide",
    "Airgas (Air Liquide)",
    "Air Liquide Americas",
    "Airgas USA",
    "Airgas.com",
    "Total Access",
  ],
  domains: ["airgas.com"],
  vertical: "industrial-distribution",
  verticalLabel: "Industrial, medical and specialty gas + welding-hardgoods distribution",
  revenueBand: "$1B+",
  role: "VP Finance",
  roleEmphasis: "finance",
  activeRequirement: false,
  published: true,

  thesis: "Skip the chatbot. Fund the AI that recovers margin you already negotiated.",
  wedge:
    "Contract-pricing and margin-leak recovery, scoped as one local project on your SAP data",
  wedgeDetail:
    "1 to 2% margin leakage on a distributor's book is normal, and recovering it is near-pure drop-through to the P&L, the only AI case a CFO reliably funds. It runs on the SAP pricing and order data you already hold, and it fits the local-project budget you described.",

  // ── Module 1, The Reframe (above gate) ──
  reframe: {
    opener: "Everyone is selling you AI for the storefront. For a distributor, the money is in the back office.",
    stat: "2–6%",
    statSource: SRC.mckinsey,
    body: "McKinsey puts the gross-margin lift from AI pricing at 2 to 6%, and at distributor scale that is the highest-ROI AI there is, because a point of realized price drops almost entirely to the bottom line. A $15B distributor recovered 200 basis points across 1.5M SKUs, then another 50 with agentic AI in ten weeks. Airgas does not need a science project to do the same. It runs on the SAP pricing and order data behind 900-plus branches and a recurring cylinder-rental book that Linde and Matheson cannot see into.",
  },

  // ── Module 2, The Hype Filter (above gate) ──
  hypeFilter: {
    opener: "Commodity AI chases new customers. Compounding AI protects the margin on the ones you have.",
    commodity: [
      "A storefront chatbot for order status",
      "Generic recs blind to contract pricing",
      "Old ML demand forecasting relabeled \"AI\"",
      "An \"AI strategy\" workshop with no P&L line",
    ],
    compounding: [
      "Contract-price compliance and margin floors",
      "Margin-leak recovery on the SAP order book",
      "Autonomous AP on 900-branch invoice volume",
      "RAG technical lookup for gas and welding specs",
    ],
    pitchWarning:
      "As a Finance leader hunting AI, you will see customer-facing chatbots and dashboards. They are cheap, visible and rarely move EBIT. The case a CFO can defend is margin enforcement and AP automation: cash and margin, not headcount, on data you already own. Keep it local-project sized and make the first one self-fund the next.",
  },

  // ── Module 2.5, Your Stack (verified or strongly inferred in the Account 360; reconcile flagged items live) ──
  stackFlags: [
    {
      signal: "SAP Commerce (Hybris) B2B storefront",
      leadPlay: "Add account-aware pricing and RAG technical lookup on the existing storefront",
      commodityFlag: "A replatform. Extend Hybris, do not replace it.",
    },
    {
      signal: "SAP ERP (global Air Liquide SAP)",
      leadPlay: "Run margin-leak recovery and AP automation on the order and invoice data",
      commodityFlag: "A new finance suite. The data is already in SAP.",
    },
    {
      signal: "Airgas eBusiness (punchout, e-invoicing)",
      leadPlay: "Enforce contract pricing consistently across punchout and national accounts",
      commodityFlag: "More portals. The unlock is one price logic across channels.",
    },
    {
      signal: "900+ branches, recurring cylinder rental",
      leadPlay: "Demand sensing and replenishment on real reorder signals",
      commodityFlag: "Generic forecasting. Your reorder data is the moat.",
    },
  ],

  // ── Module 3, The Commodity-vs-Compounding Map (above gate) ──
  // Y: 0 commodity to 1 compounding · X: 0 foundation-required to 1 bolt-on-ready (wedge = top-right)
  mapPlays: [
    { id: "pricing", label: "Pricing / margin enforcement", compounding: 0.9, bolton: 0.62, magnitude: 5, lit: true, wedge: true },
    { id: "ap", label: "Autonomous AP", compounding: 0.7, bolton: 0.85, magnitude: 3, lit: true },
    { id: "demand", label: "Demand sensing / replenishment", compounding: 0.72, bolton: 0.5, magnitude: 4, lit: true },
    { id: "rag", label: "RAG technical lookup", compounding: 0.82, bolton: 0.66, magnitude: 3, lit: true },
    { id: "account-pricing", label: "Account-based pricing personalization", compounding: 0.85, bolton: 0.55, magnitude: 4, lit: true },
    { id: "supplier-risk", label: "Supplier risk intelligence", compounding: 0.7, bolton: 0.4, magnitude: 3, lit: true },
    { id: "chatbot", label: "Generic storefront chatbot", compounding: 0.15, bolton: 0.9, magnitude: 1, lit: false },
    { id: "llm-copy", label: "LLM product copy", compounding: 0.1, bolton: 0.78, magnitude: 1, lit: false },
    { id: "ml-forecasting", label: "ML forecasting (relabeled)", compounding: 0.4, bolton: 0.42, magnitude: 2, lit: false },
  ],

  // ── Below the gate (payoff), never in the initial payload ──
  payoff: {
    headlineOpportunity: [2, 6],
    moneyPools: [
      {
        id: "margin",
        label: "Margin: contract-price enforcement, leak recovered",
        range: [1, 3],
        note: "1 to 2% of margin leaks on a distributor's book, and recovering it is near-pure profit. PROS and Wilbur-Ellis added 2% on 6,000 SKUs; the McKinsey $15B distributor recovered 200 basis points in ten weeks. On the relevant Airgas book, that is the headline pool.",
        credibility: "verified",
        source: SRC.mckinseyDist,
      },
      {
        id: "ap",
        label: "AP: invoice cost from about $10 to about $3",
        range: [0.3, 1],
        note: "Autonomous AP takes invoice processing cost from roughly $10 to $3 with intelligent matching and exception reasoning. Across 900-branch invoice volume, that is real, fast, low-data-prerequisite savings that self-fund the harder pricing work.",
        credibility: "verified",
        source: SRC.apDump,
      },
      {
        id: "working-capital",
        label: "Working capital: demand sensing and replenishment",
        range: [0.5, 1.5],
        note: "Demand sensing on real reorder and cylinder-rental signals frees inventory working capital. BRF's SAP IBP demand sensing cut planning time 33%, and a 10% inventory cut on a meaningful base is millions freed.",
        credibility: "verified",
        source: SRC.brf,
      },
      {
        id: "service-time",
        label: "Service time: spec lookups answered without a rep",
        range: [0.2, 0.5],
        note: "Gas and welding buyers ask technical questions that today route to a rep. RAG technical lookup on the SAP Commerce catalog deflects the routine ones, in the Grainger pattern.",
        credibility: "verified",
        source: SRC.grainger,
      },
    ],
    roadmap: [
      {
        phase: "Phase 1, starts now",
        title: "Margin-leak diagnostic and price compliance",
        body: "A contained local project: diagnose margin leakage and enforce contract-price compliance on one product category's SAP order data. The PROS and Wilbur-Ellis and McKinsey distributor cases are the pattern. This is the wedge, and it produces the first number.",
        active: true,
      },
      {
        phase: "Phase 2, 3 to 6 months",
        title: "Autonomous AP",
        body: "Roll the recovered margin into autonomous AP across branch invoice volume, the fast, low-data-prerequisite win that self-funds the next step.",
      },
      {
        phase: "Phase 3, 6 to 12 months",
        title: "Demand sensing and replenishment",
        body: "Demand sensing on reorder and cylinder-rental signals to free working capital, with the eCommerce owner now engaged.",
      },
      {
        phase: "Phase 4, the foundation",
        title: "RAG lookup and the commerce-to-SAP seam",
        body: "RAG technical lookup on the Hybris storefront and the integration that keeps pricing and inventory one truth. Requires the eCommerce owner as sponsor.",
      },
    ],
    // ── The play shortlist, CFO-fundable margin and cash first, operations next, commerce last ──
    plays: [
      // MARGIN AND CASH
      {
        id: "pricing",
        pillar: "back-office",
        title: "Contract-price enforcement and margin-leak recovery",
        problem:
          "Across 900-plus branches and a large contract book, negotiated margin leaks where price compliance is invisible.",
        caseName: "PROS / Wilbur-Ellis, McKinsey",
        caseDetail:
          "PROS and Wilbur-Ellis added 2% on 6,000 SKUs; a McKinsey $15B distributor recovered 200 basis points in ten weeks.",
        roi: "1 to 2 points of recovered margin on the relevant book is near-pure profit.",
        whatI95Does:
          "Margin-leak and price-compliance analytics on Airgas SAP order, cost and contract data, surfacing where to hold price.",
        credibility: "verified",
        source: SRC.pros,
      },
      {
        id: "ap",
        pillar: "back-office",
        title: "Autonomous accounts payable",
        problem:
          "AP across 900 branches is labor-heavy, and missed early-pay discounts and fraud cost on top.",
        caseName: "AI research dump, Part 2.2",
        caseDetail:
          "Autonomous AP takes invoice cost from roughly $10 to $3 with intelligent matching and exception reasoning.",
        roi: "Fast, low-data-prerequisite savings that self-fund the pricing work.",
        whatI95Does:
          "An AP automation layer over SAP that resolves the routine and routes true exceptions to a person.",
        credibility: "verified",
        source: SRC.apDump,
      },
      // OPERATIONS
      {
        id: "demand",
        pillar: "back-office",
        title: "Demand sensing and replenishment",
        problem:
          "Forecasting on history alone misses short-horizon signals across branches and cylinder rental.",
        caseName: "BRF, SAP IBP",
        caseDetail:
          "BRF's SAP IBP demand sensing cut planning time 33%.",
        roi: "Freed inventory working capital while protecting branch availability.",
        whatI95Does:
          "Demand sensing and replenishment on Airgas reorder and rental data, on the SAP base.",
        credibility: "verified",
        source: SRC.brf,
      },
      {
        id: "supplier-risk",
        pillar: "back-office",
        title: "Multi-tier supplier risk",
        problem:
          "Global sourcing exposure can interrupt supply to branches.",
        caseName: "Resilinc, Everstream",
        caseDetail:
          "Resilinc and Everstream give 60 to 90 day advance warnings.",
        roi: "Avoiding one or two disruptions a year is asymmetric insurance.",
        whatI95Does:
          "Add supplier-risk signals to Airgas planning data.",
        credibility: "verified",
        source: SRC.resilinc,
      },
      // COMMERCE (with the eCommerce owner)
      {
        id: "rag",
        pillar: "storefront",
        title: "RAG technical lookup and account-aware pricing on Hybris",
        problem:
          "Gas and welding buyers ask technical questions and need account-aware pricing the storefront does not always surface.",
        caseName: "Grainger, Databricks",
        caseDetail:
          "Grainger runs RAG technical discovery on 2.5M SKUs in production.",
        roi: "Deflected technical calls and more self-service on the existing SAP Commerce storefront.",
        whatI95Does:
          "RAG lookup and account-aware pricing on Hybris, bridged to SAP, with the eCommerce owner as sponsor.",
        credibility: "verified",
        source: SRC.grainger,
      },
    ],
    why: {
      opener: "You'll be sold a chatbot. Your gain is the margin you already negotiated, recovered.",
      body: "The AI vendors will sell a Finance leader something visible, and the Big-4 will sell a program. Your fundable win is a local project: margin enforcement and AP automation on the SAP data you already own, with an audited number. That is exactly i95Dev's lane: surgical on the commerce-to-ERP seam, priced for a contained pilot, fluent in SAP. We extend Hybris and SAP, we do not replace them, and we will tell you plainly that the storefront plays need the eCommerce owner, whom we will help you map.",
      ctaTitle: "Book your Margin-Recovery Diagnostic",
      ctaSubtitle:
        "A fixed-scope, local-project assessment that quantifies margin leakage and AP savings against Airgas SAP data, and sizes the self-funding path. Weeks, not a transformation.",
      credibility: { brands: "500+ B2B brands", years: "25+ years", projects: "1,200+ projects" },
    },
  },
};
