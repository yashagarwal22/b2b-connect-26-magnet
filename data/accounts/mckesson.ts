import type { AccountConfig } from "@/lib/types";

// Sources reused across the report (Verified vs. Illustrative labelled per-claim, spec section 14).
const SRC = {
  mit: { label: "MIT NANDA, ~95% of pilots", url: "https://nanda.media.mit.edu/" },
  ibm: { label: "IBM, only 33% of Salesforce AI initiatives hit ROI (1,200 customers)", url: "https://www.ibm.com/" },
  frosta: { label: "SAP / FRoSTA, 60% touchless invoices at under a minute each", url: "https://www.sap.com/" },
  brf: { label: "SAP / BRF, IBP demand sensing cut planning time 33%", url: "https://www.sap.com/" },
  resilinc: { label: "Resilinc / Everstream, 60–90 day risk warnings", url: "https://www.resilinc.com/" },
  c3ai: { label: "C3.ai HealthTech manufacturer, delayed orders -35% in 4 weeks", url: "https://c3.ai/" },
  fisherpaykel: { label: "Fisher & Paykel, self-service 40% to 70%, 3,300 hrs/mo (Salesforce Agentforce)", url: "https://www.salesforce.com/" },
  jpw: { label: "JPW Industries, order processing 16–24h to under 1h", url: "https://www.salesforce.com/" },
  stibo: { label: "Stibo / Informatica, Gartner MDM Leaders; Palantir / Eaton", url: "https://www.stibosystems.com/" },
  specialist: { label: "Big-4 $3M/8-mo vs 6-week specialist fix, research dump Part 5.4", url: "https://www.i95dev.com/" },
} as const;

/**
 * McKesson Corporation, an AI-strategy account at the lowest commerce/ERP fit in the batch (largest
 * US pharma distributor, AI already core infrastructure). Every section is grounded in the Account-360
 * profile and the AI research dump, and maps 1:1 to companies/mckesson/mckesson-spec.md.
 *
 * Spine: McKesson does not win on product. It wins by being the most reliable, most intelligent
 * distribution network in healthcare, at a margin so thin that one point of efficiency is enormous.
 * At roughly $359B in revenue, with Accenture-class firms and internal teams running the platform
 * programs, the only place a commerce-and-ERP-data specialist adds a win is one bounded,
 * compliant-by-design workflow, run on McKesson's own data, sized to the $2M Jennifer Lai controls,
 * with an audited number at the end. Not a transformation. Write to Jennifer Lai (Director, AI
 * Strategy, funded $2M envelope), multi-threading to the workflow owner who feels the pain. Guardrails:
 * stay narrow, stay compliant, prove a number, never displace the incumbent SIs or hyperscalers, and
 * never pretend a niche vendor can or should run McKesson's enterprise AI agenda. Every play is
 * compliant-by-design, human-in-the-loop, and auditable. Honesty about fit is the credibility.
 */
export const mckesson: AccountConfig = {
  slug: "mckesson",
  companyName: "McKesson Corporation",
  aliases: ["McKesson", "McKesson Corp", "MCK"],
  domains: ["mckesson.com"],
  vertical: "life-sciences",
  verticalLabel: "Pharmaceutical distribution + healthcare services",
  revenueBand: "~$359B",
  role: "Director, AI Strategy",
  roleEmphasis: "ai-strategy",
  activeRequirement: true,
  published: true,

  thesis: "You do not need another transformation. You need one fix the giants will not scope.",
  wedge:
    "One narrow, compliant-by-design AI workflow on your own data, scoped to the $2M, with an audited number",
  wedgeDetail:
    "Pick a single regulated, high-value workflow, prior-authorization or serialization document intelligence, set a clean baseline, and prove the result. It runs on data McKesson already governs, fits inside the budget Jennifer Lai controls, and earns the right to expand. No platform decision, no SI displacement, no transformation. At $300B-plus scale a broad program is neither winnable for a specialist nor needed, so the wedge is the only entry that is high-value, bolt-on-ready, compliant-by-design, and small enough to fund and audit.",

  // ── Module 1, The Reframe (above gate) ──
  reframe: {
    opener: "Everyone here is selling you a transformation. The model is the cheapest thing in the room.",
    stat: "95%",
    statSource: SRC.mit,
    body: "95% of enterprise AI pilots return nothing to the P&L, because they sit next to the work instead of inside it. McKesson already proved the opposite at scale: prior-auth automation and robotics distribution centers put AI inside the work. The edge now is not a bigger program. It is pointing one more surgical, audited workflow at what Cencora and Cardinal Health cannot copy: your proprietary distribution and oncology data, and the regulated, compliant-by-design processes only McKesson runs.",
  },

  // ── Module 2, The Hype Filter (above gate) ──
  hypeFilter: {
    opener: "Commodity consulting scopes everything. Compounding work fixes one thing and proves it.",
    commodity: [
      "A multi-year enterprise AI transformation",
      "A seven-platform roadmap you do not need",
      "An \"AI strategy\" deck billed by the hour",
      "A copilot on every screen",
    ],
    compounding: [
      "One workflow, one baseline, one audited number",
      "Compliant-by-design AI on regulated data",
      "Cash, margin and resilience framing, not layoffs",
      "A win that earns the next scope",
    ],
    pitchWarning:
      "At your scale every SI and hyperscaler will pitch a platform program, and most will be real and expensive. The thing they are structurally bad at is the surgical fix: one bounded workflow, scoped to your $2M, with a named baseline and an audited number. Insist on that shape. Demand a reference with audited ROI, not a press release. And in a DSCSA and FDA-AI-guidance world, demand compliant-by-design, human-in-the-loop and auditable, or it never reaches production.",
  },

  // ── Module 2.5, Your Stack (verified from the Account 360; reconcile flagged items live) ──
  stackFlags: [
    {
      signal: "SAP + BigQuery + Looker",
      leadPlay: "Run a bounded AI workflow on data already governed in the warehouse",
      commodityFlag: "A new data platform. Use the warehouse you have.",
    },
    {
      signal: "GCP + AWS",
      leadPlay: "Build the workflow on sanctioned cloud, no new commitment",
      commodityFlag: "A net-new environment. Stay inside what is approved.",
    },
    {
      signal: "Salesforce + Marketo",
      leadPlay: "A narrow CX or document-AI workflow with clean attribution",
      commodityFlag: "\"Agentforce everywhere.\" Only 33% of Salesforce AI hits ROI; pick one.",
    },
    {
      signal: "Proprietary distribution + oncology data, DSCSA serialization",
      leadPlay: "One defensible, compliant-by-design use case no competitor can replicate",
      commodityFlag: "A horizontal program. The moat is a specific regulated workflow.",
    },
  ],

  // ── Module 3, The Commodity-vs-Compounding Map (above gate) ──
  // Y: 0 commodity to 1 compounding · X: 0 foundation-required to 1 bolt-on-ready (wedge = top-right)
  mapPlays: [
    { id: "document-ai", label: "Compliant document-AI (prior-auth / serialization)", compounding: 0.74, bolton: 0.8, magnitude: 3, lit: true, wedge: true },
    { id: "serialization", label: "Serialization / DSCSA exception intelligence", compounding: 0.78, bolton: 0.62, magnitude: 3, lit: true },
    { id: "demand-sensing", label: "Demand sensing (specialty / oncology)", compounding: 0.76, bolton: 0.5, magnitude: 4, lit: true },
    { id: "supplier-risk", label: "Multi-tier supplier / network risk", compounding: 0.72, bolton: 0.45, magnitude: 3, lit: true },
    { id: "order-exception", label: "Order-exception / service automation", compounding: 0.7, bolton: 0.7, magnitude: 3, lit: true },
    { id: "foundation", label: "ERP-to-data foundation (the seam)", compounding: 0.8, bolton: 0.32, magnitude: 3, lit: true },
    { id: "transformation", label: "Enterprise AI transformation", compounding: 0.55, bolton: 0.2, magnitude: 5, lit: false },
    { id: "copilot", label: "Generic copilot rollout", compounding: 0.2, bolton: 0.85, magnitude: 1, lit: false },
    { id: "content-gen", label: "AI content generation", compounding: 0.18, bolton: 0.85, magnitude: 1, lit: false },
  ],

  // ── Below the gate (payoff), never in the initial payload ──
  payoff: {
    headlineOpportunity: [3, 12],
    moneyPools: [
      {
        id: "compliance",
        label: "Compliance and document-AI: prior-auth and serialization, touchless",
        range: [1, 4],
        note: "McKesson already automates prior-auth; the next gain is touchless document intelligence across regulated paperwork. FRoSTA reached 60% touchless invoice processing with SAP Document AI at under a minute per document. The same compliant, human-in-the-loop pattern applied to prior-auth and serialization exceptions converts manual review into capacity, auditable end to end.",
        credibility: "verified",
        source: SRC.frosta,
      },
      {
        id: "working-capital",
        label: "Working capital: demand sensing on specialty and oncology",
        range: [1, 5],
        note: "Specialty and oncology products are high-value and time-sensitive, so expiry and stockout both cost. Demand sensing on McKesson's own order history reduces expiry write-offs and frees working capital; the life-sciences analog is a roughly 30% cut in expiry write-offs, and BRF's SAP IBP demand sensing cut planning time 33%. At McKesson scale, single-digit-percent inventory improvement is large.",
        credibility: "verified",
        source: SRC.brf,
      },
      {
        id: "resilience",
        label: "Resilience: supplier-network risk, disruption avoided",
        range: [0.5, 2],
        note: "A single supply disruption can interrupt drug availability to providers and patients. Multi-tier risk monitoring gives 60 to 90 day advance warnings; a C3.ai HealthTech manufacturer cut delayed sales orders 35% in four weeks with supply-network risk. Avoiding one or two events a year is asymmetric insurance on a network this critical.",
        credibility: "verified",
        source: SRC.resilinc,
      },
      {
        id: "service-time",
        label: "Service time: order exceptions resolved without a rep",
        range: [0.5, 1],
        note: "Where McKesson's service desks hand-navigate exceptions, an AI layer deflects the routine. Fisher & Paykel moved self-service from 40% to 70% and saved 3,300 hours a month; JPW Industries cut order processing from 16 to 24 hours to under 1 hour. The same pattern converts service time into capacity without headcount.",
        credibility: "verified",
        source: SRC.fisherpaykel,
      },
    ],
    roadmap: [
      {
        phase: "Phase 1, starts now",
        title: "One compliant document-AI workflow",
        body: "Pick prior-authorization or serialization exception intelligence, set a clean baseline, and ship a human-in-the-loop, auditable workflow inside the $2M with Jennifer Lai. This is the wedge, and it produces the first audited number.",
        active: true,
      },
      {
        phase: "Phase 2, 3 to 6 months",
        title: "Working capital and resilience",
        body: "Demand sensing on a specialty or oncology line to free working capital, and a supplier-network risk pilot for advance warning. Both run on McKesson's own data.",
      },
      {
        phase: "Phase 3, 6 to 12 months",
        title: "Service time and scale",
        body: "Order-exception and service automation on the routine cases, and wider document-AI across adjacent regulated paperwork. Expand only on the numbers proven earlier.",
      },
      {
        phase: "Phase 4, the foundation",
        title: "The seam under it all",
        body: "The data and integration layer that connects the warehouse, ERP and these workflows into one governed source. It begins quietly in Phase 1 and matures here. Never attempt to displace the incumbent SIs; integrate alongside them.",
      },
    ],
    // ── The play shortlist, five plays grounded in McKesson's real workflows ──
    plays: [
      // OPERATIONS (the compliant core)
      {
        id: "document-ai",
        pillar: "back-office",
        title: "Compliant document-AI for prior-auth and serialization exceptions",
        problem:
          "Regulated paperwork still consumes skilled review time, and any AI here must be auditable end to end or it never ships in pharma.",
        caseName: "FRoSTA, McKesson prior-auth",
        caseDetail:
          "FRoSTA reached 60% touchless processing with SAP Document AI at under a minute per document; McKesson already runs prior-auth automation to build on.",
        roi: "Touchless, human-in-the-loop document handling converts manual review into capacity with a full audit trail.",
        whatI95Does:
          "Build one bounded document-AI workflow, compliant-by-design and human-in-the-loop, with a baseline and an audited result, inside the $2M.",
        credibility: "verified",
        source: SRC.frosta,
      },
      {
        id: "demand-sensing",
        pillar: "back-office",
        title: "Demand sensing for specialty and oncology",
        problem:
          "High-value, time-sensitive products mean both expiry and stockout cost real money, and classic forecasting misses the signal until it is too late.",
        caseName: "BRF, SAP IBP",
        caseDetail:
          "BRF's SAP IBP demand sensing cut planning time 33%; the life-sciences pattern cuts expiry write-offs by roughly 30%.",
        roi: "Single-digit-percent inventory improvement frees significant working capital at McKesson scale.",
        whatI95Does:
          "Layer demand sensing on McKesson's own order and contract history for one specialty line, then widen.",
        credibility: "verified",
        source: SRC.brf,
      },
      {
        id: "supplier-risk",
        pillar: "back-office",
        title: "Multi-tier supplier and network risk",
        problem:
          "One disruption can interrupt drug availability to providers; tier-2 and tier-3 visibility is thin across most networks.",
        caseName: "Resilinc, Everstream, C3.ai",
        caseDetail:
          "Resilinc and Everstream give 60 to 90 day advance warnings; a C3.ai HealthTech manufacturer cut delayed sales orders 35% in four weeks.",
        roi: "Avoiding one or two events a year is asymmetric insurance on a critical network.",
        whatI95Does:
          "Add supplier-network risk signals to McKesson's planning and order data so disruption is visible before it reaches a provider.",
        credibility: "illustrative",
        source: SRC.resilinc,
      },
      // SERVICE
      {
        id: "order-exception",
        pillar: "storefront",
        title: "Order-exception and service automation",
        problem:
          "Service desks hand-navigate routine exceptions, which is time that could be capacity.",
        caseName: "Fisher & Paykel, JPW Industries",
        caseDetail:
          "Fisher & Paykel moved self-service 40% to 70% and saved 3,300 hours a month; JPW Industries cut order processing from 16 to 24 hours to under 1 hour.",
        roi: "Deflecting routine exceptions converts service hours into capacity without headcount.",
        whatI95Does:
          "An AI layer over the service workflow that resolves common cases and routes only true exceptions to a person.",
        credibility: "verified",
        source: SRC.fisherpaykel,
      },
      // THE FOUNDATION
      {
        id: "foundation",
        pillar: "foundation",
        title: "The ERP-to-data integration seam",
        problem:
          "The warehouse, ERP, commerce and service systems each hold part of the truth, and 87% of leaders say bad data has hampered AI value. Every play above runs on this.",
        caseName: "Stibo, Informatica, Palantir / Eaton",
        caseDetail:
          "Stibo and Informatica are Gartner MDM Leaders; Palantir's Eaton work shows the payoff of automating the ERP-data seam.",
        roi: "One governed source for the workflow's inputs gates the ROI of every other play and is the cheapest insurance on the portfolio.",
        whatI95Does:
          "A surgical integration and data layer for the specific workflow in scope, alongside the incumbent SIs, never replacing them.",
        credibility: "illustrative",
        source: SRC.stibo,
      },
    ],
    why: {
      opener: "You'll be sold a transformation. Your gain is one workflow that proves out.",
      body: "The SIs and hyperscalers will make this a platform program, and at your scale many of those are real. Your fundable, provable win is narrower: one compliant, high-value workflow carried on the data and clouds you already run, with an audited number at the end. That is exactly i95Dev's lane: surgical where the Big-4 are sprawling, fluent in the commerce-and-ERP-data seam, priced and scoped for a contained result. We do not displace your incumbents or your internal teams. We deliver the bounded win they are built not to scope.",
      ctaTitle: "Book your AI-Workflow Value Diagnostic",
      ctaSubtitle:
        "A fixed-scope, fixed-fee assessment that picks one compliant, high-value workflow, sets a baseline, and sizes the audited upside against McKesson's real data, inside the $2M envelope. Weeks, not a multi-year program.",
      credibility: { brands: "500+ B2B brands", years: "25+ years", projects: "1,200+ projects" },
    },
  },
};
