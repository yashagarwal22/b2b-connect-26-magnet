import type { AccountConfig } from "@/lib/types";

// Sources reused across the report (Verified vs. Illustrative labelled per-claim, spec section 14).
const SRC = {
  gartner: { label: "Gartner, 85% of AI/analytics projects fail on unready data (Feb 2025)", url: "https://www.gartner.com/" },
  bcg: { label: "BCG, data-first companies captured 50%+ gains from AI", url: "https://www.bcg.com/" },
  masterData: { label: "Research dump Part 2.2, master data is the rate-limiter for analytics value", url: "https://www.i95dev.com/" },
  governed: { label: "Research dump Part 1.7, governed data outlasts any single tool or reorg", url: "https://www.i95dev.com/" },
  specialist: { label: "Research dump Part 5.4, Big-4 $3M/8-mo vs 6-week specialist fix", url: "https://www.i95dev.com/" },
} as const;

/**
 * Terumo, a low-priority nurture account (the most honest fit gap in the batch: the buyer's stated
 * need is OKR/PPM software i95Dev does not sell). Every section is grounded in the Account-360 profile
 * and the AI research dump, and maps 1:1 to companies/terumo/terumo-spec.md.
 *
 * Spine: Terumo is scaling its GS26 strategy and shopping for software to track it, and the tools on
 * its shortlist (Planview, Quantive, WorkBoard, Sopheon) are only as good as the data flowing into
 * them, which is the one place i95Dev actually helps. The honest counsel is to separate the two
 * decisions: buy the OKR or PPM platform if it is needed, but do not expect it to fix inputs that are
 * siloed across a global multi-entity footprint. AI and i95Dev pay off in the BI and data foundation
 * under the tool, on the SAP base Terumo already runs, not in the planning tool itself. Write to Mohit
 * Sheera (Strategic Planning Leader evaluating OKR/PPM tooling), treating him as the door to the data
 * and analytics conversation, not as a fit for i95Dev's core. Guardrails: be candid that the stated
 * need is outside i95Dev's lane and say so, lead only with the data foundation, do not pretend to sell
 * the planning tool, do not pitch an SAP swap. This is a low-priority nurture, sized honestly.
 */
export const terumo: AccountConfig = {
  slug: "terumo",
  companyName: "Terumo",
  aliases: [
    "Terumo Corporation",
    "Terumo Corp",
    "Terumo Americas",
    "Terumo Medical Corporation",
    "Terumo BCT",
    "Terumo Cardiovascular",
  ],
  domains: ["terumo.com"],
  vertical: "life-sciences",
  verticalLabel: "Global medical-device manufacturer",
  revenueBand: "~¥925B+ FY25 (~$6B)",
  role: "Strategic Planning Leader",
  roleEmphasis: "ai-strategy",
  activeRequirement: true,
  published: true,

  thesis: "Strategy-execution software shows you the plan. It does not make your data true.",
  wedge:
    "The data foundation under strategy execution, so the OKR and PPM tools actually report reality",
  wedgeDetail:
    "The platforms you are evaluating, Planview, Quantive, WorkBoard, all assume the data flowing into them is clean and connected. For a global medtech mid-GS26, it usually is not. Build the BI and data layer first, and whichever platform you choose finally tracks reality instead of stale, manual inputs.",

  // ── Module 1, The Reframe (above gate) ──
  reframe: {
    opener: "Everyone is selling you a place to track the strategy. Almost no one is fixing the data the strategy runs on.",
    stat: "85%",
    statSource: SRC.gartner,
    body: "85% of AI and analytics projects fail on data, not on the model, and strategy-execution software is no exception: it reports whatever you feed it. Terumo is mid-GS26, pushing integrated healthcare solutions and double-digit growth in the US and China, which means more data, across more entities, faster. The honest read is that the OKR and PPM platform on your shortlist is not the constraint. The connected, governed data underneath it is, and that data, spanning your devices, consumables and global operations, is the asset no competitor and no off-the-shelf tool can hand you.",
  },

  // ── Module 2, The Hype Filter (above gate) ──
  hypeFilter: {
    opener: "Commodity work buys a dashboard. Compounding work makes the numbers in it true.",
    commodity: [
      "An OKR tool over disconnected data",
      "A PPM platform fed by manual exports",
      "A strategy deck with no data spine",
      "Yet another reporting layer",
    ],
    compounding: [
      "A governed BI and data foundation",
      "Strategy-execution tools fed by live SAP data",
      "One source of truth across entities",
      "Analytics that survive the next reorg",
    ],
    pitchWarning:
      "You are evaluating a dozen strategy-execution platforms, and most demos look identical because the differentiation is not the tool, it is the data feeding it. Buy the platform if you need it. Just do not expect it to fix inputs that are stale, manual or siloed. That is a data problem, and it is the cheaper, more durable thing to solve first.",
  },

  // ── Module 2.5, Your Stack (named or inferred in the Account 360; reconcile flagged items live) ──
  stackFlags: [
    {
      signal: "SAP (ERP)",
      leadPlay: "Pipe live operational and financial data into whichever strategy tool you choose",
      commodityFlag: "A bespoke ERP report. The unlock is a governed, automated feed.",
    },
    {
      signal: "SFDC, IQVIA, AcuityMD",
      leadPlay: "Unify commercial and market data into one analytics layer",
      commodityFlag: "More dashboards per source. The unlock is one connected layer.",
    },
    {
      signal: "OKR/PPM tool under evaluation",
      leadPlay: "Feed it clean, automated data so it tracks reality",
      commodityFlag: "A heavier rollout over manual inputs. Data first, tool second.",
    },
    {
      signal: "Global multi-entity operations",
      leadPlay: "One source of truth across regions and legal entities",
      commodityFlag: "Per-region reporting. The unlock is cross-entity governance.",
    },
  ],

  // ── Module 3, The Commodity-vs-Compounding Map (above gate) ──
  // Y: 0 commodity to 1 compounding · X: 0 foundation-required to 1 bolt-on-ready (wedge = top-left of lit cluster, foundation-heavy)
  mapPlays: [
    { id: "bi-foundation", label: "BI / data foundation", compounding: 0.84, bolton: 0.5, magnitude: 4, lit: true, wedge: true },
    { id: "data-integration", label: "Data integration into strategy tools", compounding: 0.75, bolton: 0.65, magnitude: 3, lit: true },
    { id: "master-data", label: "Cross-entity master data", compounding: 0.8, bolton: 0.4, magnitude: 3, lit: true },
    { id: "analytics-enablement", label: "Demand / analytics enablement", compounding: 0.7, bolton: 0.55, magnitude: 3, lit: true },
    { id: "okr-ppm", label: "OKR/PPM tool itself", compounding: 0.4, bolton: 0.7, magnitude: 2, lit: false },
    { id: "dashboard", label: "Generic dashboard layer", compounding: 0.25, bolton: 0.8, magnitude: 1, lit: false },
    { id: "content-gen", label: "AI content gen", compounding: 0.18, bolton: 0.85, magnitude: 1, lit: false },
    { id: "ml-forecasting", label: "ML forecasting (relabeled)", compounding: 0.4, bolton: 0.42, magnitude: 2, lit: false },
  ],

  // ── Below the gate (payoff), never in the initial payload ──
  payoff: {
    headlineOpportunity: [1, 3],
    moneyPools: [
      {
        id: "decision-quality",
        label: "Decision quality: strategy tracked on real numbers",
        range: [0.4, 1.2],
        note: "A strategy-execution tool fed by stale inputs misallocates attention and capital. BCG found data-first companies captured 50%-plus gains from AI. A clean feed into the chosen platform is the difference between tracking reality and tracking a fiction.",
        credibility: "verified",
        source: SRC.bcg,
      },
      {
        id: "efficiency",
        label: "Efficiency: one source of truth across entities",
        range: [0.3, 1],
        note: "GS26 spreads data across regions and legal entities. Cross-entity master data removes the manual reconciliation that consumes planning teams and frees them for analysis.",
        credibility: "illustrative",
        source: SRC.masterData,
      },
      {
        id: "enablement",
        label: "Enablement: analytics that survive the next reorg",
        range: [0.3, 0.8],
        note: "A governed data layer outlasts any single tool or org change, so the investment is not stranded when the platform or structure shifts.",
        credibility: "illustrative",
        source: SRC.governed,
      },
    ],
    roadmap: [
      {
        phase: "Phase 1, starts now",
        title: "Connect one GS26 priority to a clean BI layer",
        body: "Take one GS26 priority, connect its data into a clean BI layer, and show the chosen strategy tool reporting live numbers instead of stale ones. This is the wedge, and it proves the point cheaply.",
        active: true,
      },
      {
        phase: "Phase 2, 3 to 6 months",
        title: "Cross-entity master data",
        body: "Govern master data across regions and legal entities on the SAP base, so the planning numbers reconcile once, not per region.",
      },
      {
        phase: "Phase 3, ongoing",
        title: "Nurture",
        body: "Revisit if a commerce or ERP need emerges. This is a low-priority account for i95Dev, and the content says so plainly.",
      },
    ],
    // ── The play shortlist, honestly scoped to the data and integration layer i95Dev helps with ──
    plays: [
      {
        id: "bi-foundation",
        pillar: "foundation",
        title: "BI and data foundation under strategy execution",
        problem:
          "The OKR or PPM tool will report whatever it is fed, and the inputs are stale, manual or siloed.",
        caseName: "BCG",
        caseDetail:
          "BCG found data-first companies captured 50%-plus gains from AI.",
        roi: "Decision quality on real numbers, which gates the value of the strategy-execution spend.",
        whatI95Does:
          "Build a governed BI and data feed into the chosen platform, on the SAP base.",
        credibility: "verified",
        source: SRC.bcg,
      },
      {
        id: "data-integration",
        pillar: "foundation",
        title: "Data integration into strategy tools",
        problem:
          "Whichever platform Terumo picks needs live, automated data, not manual exports.",
        caseName: "Category truth",
        caseDetail:
          "The category truth that the differentiation is the data feed, not the tool.",
        roi: "The tool tracks reality and the planning team stops reconciling by hand.",
        whatI95Does:
          "Integrate operational and financial data from SAP into the strategy tool.",
        credibility: "illustrative",
        source: SRC.governed,
      },
      {
        id: "master-data",
        pillar: "foundation",
        title: "Cross-entity master data",
        problem:
          "GS26 spreads data across regions and entities, so the numbers do not reconcile.",
        caseName: "Master data governance",
        caseDetail:
          "Master data governance is the rate-limiter for analytics value.",
        roi: "One source of truth across the global footprint.",
        whatI95Does:
          "Govern cross-entity master data on the SAP base.",
        credibility: "illustrative",
        source: SRC.masterData,
      },
      {
        id: "analytics-enablement",
        pillar: "sales-marketing",
        title: "Demand and analytics enablement",
        problem:
          "The stated near-term interest in Data/Analytics has no clean foundation to run on.",
        caseName: "Analytics enablement",
        caseDetail:
          "Analytics enablement is only as good as the underlying data.",
        roi: "Faster, more trustworthy analytics for the strategy and commercial teams.",
        whatI95Does:
          "Stand up analytics on the governed data layer.",
        credibility: "illustrative",
        source: SRC.governed,
      },
    ],
    why: {
      opener: "You'll be sold a dashboard. Your gain is the data that makes it true.",
      body: "We will be candid: the OKR and PPM platforms you are evaluating are not what i95Dev sells, and we will tell you that to your face. Where we help is the data and integration layer that makes whichever tool you choose report reality, on the SAP base you already run. That is i95Dev's lane: governed data and the integration seam, surgical and honest about scope. This is a nurture relationship, not a near-term services deal, and we would rather earn it straight than oversell a fit that is not there.",
      ctaTitle: "Book your Data-Foundation Diagnostic",
      ctaSubtitle:
        "A fixed-scope assessment that connects one GS26 priority's data into a clean BI layer and shows your chosen strategy tool reporting reality. Weeks, and honest about where we do and do not fit.",
      credibility: { brands: "500+ B2B brands", years: "25+ years", projects: "1,200+ projects" },
    },
  },
};
