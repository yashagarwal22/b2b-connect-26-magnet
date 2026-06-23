import type { AccountConfig } from "@/lib/types";

// Sources reused across the report (Verified vs. Illustrative labelled per-claim, spec section 14).
const SRC = {
  mit: { label: "MIT NANDA, ~95% of pilots", url: "https://nanda.media.mit.edu/" },
  watsco: { label: "Watsco / Adobe Commerce, AI recs +10% AOV, +22% mobile (DC360)", url: "https://www.watsco.com/" },
  mckinsey: { label: "McKinsey B2B pricing, $15B distributor +200bps then +50bps", url: "https://www.mckinsey.com/" },
  sonepar: { label: "Sonepar, digital sales +50% YoY (DC360)", url: "https://www.sonepar.com/" },
  jpw: { label: "JPW Industries, order processing 16–24h to under 1h (Salesforce)", url: "https://www.salesforce.com/" },
  kawasaki: { label: "Kawasaki Engines USA, self-serve B2B AOV +5x (DC360)", url: "https://www.salesforce.com/" },
  grainger: { label: "Grainger, RAG over 2.5M SKUs (Databricks)", url: "https://www.grainger.com/" },
  schneider: { label: "Schneider Electric, guided config 72h to ~90s", url: "https://www.se.com/" },
  commercetools: { label: "commercetools B2B Intake Agent (Mirion)", url: "https://commercetools.com/" },
  jci: { label: "Johnson Controls, $100M+ protectable revenue, $35M per attrition point", url: "https://www.johnsoncontrols.com/" },
  pros: { label: "PROS / Wilbur-Ellis, +2% on 6,000 SKUs", url: "https://www.pros.com/" },
  brf: { label: "BRF, SAP IBP demand sensing −33% planning time", url: "https://www.sap.com/" },
  resilinc: { label: "Resilinc / Everstream, multi-tier supplier risk", url: "https://www.resilinc.com/" },
  stibo: { label: "Stibo / Informatica, Gartner MDM Leaders", url: "https://www.stibosystems.com/" },
} as const;

/**
 * Watts Water Technologies, a window-dependent platform-decision account (distributor channel it cannot
 * see, mid-unification). Every section is grounded in the Account-360 profile and the AI research dump,
 * and maps 1:1 to companies/watts/watts-spec.md.
 *
 * Spine: Watts is a $2.44B, 150-year-old flow-control manufacturer that sells two-thirds of its product
 * through distributors it cannot see, with no confirmed self-service portal. Two clocks run at once. One
 * Watts is consolidating a patchwork of systems onto a single global QAD Enterprise ERP, and five 2025
 * acquisitions (I-CON, EasyWater, Haws, Superior Boiler, Saudi Cast) each arrive with their own order
 * desk. A new Global CIO, Kim Trevisan (ex-Oldcastle APG), landed June 2025 to hold both. The question is
 * not "should we add a portal," it is "do we lay ERP-integrated commerce in once on the new QAD core, or
 * bolt a storefront onto five acquired systems five times." Write to Trevisan (CIO, champion) on the
 * commerce wedge and to Ravi Chaudhary (VP Intelligent Process Automation, active attendee) on the
 * back-office order-intake angle; they are the same data foundation from two chairs. Guardrails: QAD is
 * not in i95Dev's native ERP set and QAD's own Digital Commerce module competes, so do not claim a native
 * connector. Lead with the genuine Adobe-ecosystem alignment (DTM and Marketo to Adobe Commerce) beside
 * the Sitecore content stack.
 */
export const watts: AccountConfig = {
  slug: "watts",
  companyName: "Watts Water Technologies",
  aliases: [
    "Watts Water",
    "Watts",
    "WTS",
    "I-CON",
    "EasyWater",
    "Haws",
    "Superior Boiler",
    "Saudi Cast",
  ],
  domains: ["watts.com"],
  vertical: "manufacturing",
  verticalLabel: "Flow-control / water-technology manufacturing",
  revenueBand: "$2.44B",
  role: "Global CIO / VP Intelligent Process Automation",
  roleEmphasis: "ecommerce",
  activeRequirement: true,
  published: true,

  thesis: "One Watts, one core, one chance: lay commerce in once, not five times.",
  wedge:
    "A distributor and contractor self-service portal, ERP-integrated, built once on the QAD core during the One Watts unification",
  wedgeDetail:
    "Two-thirds of revenue moves through distributors with no confirmed self-service. The portal is high value, it runs on the catalog and pricing Watts already owns, and it is fastest to prove now, while the ERP is being touched anyway. Build it inside the unification and every acquired business inherits it. Build it after, and you build it five times.",

  // ── Module 1, The Reframe (above gate) ──
  reframe: {
    opener: "Everyone here is selling you AI. The model is the cheapest thing in the room.",
    stat: "95%",
    statSource: SRC.mit,
    body: "95% of enterprise AI pilots return nothing to the P&L. They sit beside the work instead of inside it. Your edge is not a smarter model. It is a decision only Watts can make right now: while One Watts consolidates the ERP, lay the distributor commerce layer in once, on the new core, so all five acquired businesses inherit it. Defer it, and you bolt a storefront onto five systems five separate times.",
  },

  // ── Module 2, The Hype Filter (above gate) ──
  hypeFilter: {
    opener: "Commodity AI runs on the model. Compounding commerce runs on the channel only you own.",
    commodity: [
      "A chatbot bolted onto the marketing site",
      "Generic recs that ignore distributor pricing tiers",
      "Five separate storefronts on five acquired systems",
      "LLM banner copy that cannot quote your specs",
    ],
    compounding: [
      "A distributor portal wired to QAD, built once on the new core",
      "Account-based pricing on the contracts you already negotiated",
      "One commerce layer every acquisition inherits",
      "AEO, so ChatGPT and Perplexity cite Watts on spec questions",
    ],
    pitchWarning:
      "You run QAD, so expect two pitches: QAD's own Digital Commerce as the path of least resistance, and a \"Copilot on everything\" that lives beside your ERP, not inside the order. Be candid about both. The unlock is a commerce layer integrated to QAD and aligned to the Adobe stack you already run, not a model and not a second silo.",
  },

  // ── Module 2.5, Your Stack (confirmed in the Account 360; reconcile flagged items live) ──
  stackFlags: [
    {
      signal: "QAD Enterprise + One Watts unification",
      leadPlay: "Lay an ERP-integrated commerce layer in once, on the new core",
      commodityFlag: "QAD Digital Commerce as the default. Candid take: it competes, and a connector to a best-fit storefront is buildable.",
    },
    {
      signal: "Sitecore CMS / DXP (no cart found)",
      leadPlay: "Add the transaction layer beside the content layer, not a replatform",
      commodityFlag: "A rip-and-replace of Sitecore. The gap is checkout, not content.",
    },
    {
      signal: "TrueCommerce EDI",
      leadPlay: "Extend EDI ordering with self-service for distributors who lack it",
      commodityFlag: "More EDI maps. Self-service captures the buyers EDI never reaches.",
    },
    {
      signal: "Adobe DTM + Marketo",
      leadPlay: "Adobe Commerce as the transactional layer your martech already feeds",
      commodityFlag: "\"Agentforce for everything.\" The natural path is the Adobe stack you own.",
    },
    {
      signal: "5 acquisitions (I-CON, EasyWater, Haws, Superior Boiler, Saudi Cast)",
      leadPlay: "One order-intake and commerce layer all five inherit",
      commodityFlag: "Five integrations, one per deal. The unification is the moment to standardize once.",
    },
  ],

  // ── Module 3, The Commodity-vs-Compounding Map (above gate) ──
  // Y: 0 commodity to 1 compounding · X: 0 foundation-required to 1 bolt-on-ready (wedge = top-right)
  mapPlays: [
    { id: "portal", label: "Distributor self-service portal + QAD", compounding: 0.92, bolton: 0.8, magnitude: 5, lit: true, wedge: true },
    { id: "intake", label: "Touchless order intake (5 acquisitions)", compounding: 0.85, bolton: 0.74, magnitude: 4, lit: true },
    { id: "pricing-acct", label: "Account-based pricing / entitlement", compounding: 0.88, bolton: 0.62, magnitude: 4, lit: true },
    { id: "aeo", label: "AEO + spec answer layer", compounding: 0.9, bolton: 0.78, magnitude: 3, lit: true },
    { id: "cpq", label: "Conversational CPQ (configurable products)", compounding: 0.82, bolton: 0.48, magnitude: 4, lit: true },
    { id: "cross-sell", label: "Cross-sell / NBA on distributor data", compounding: 0.8, bolton: 0.52, magnitude: 3, lit: true },
    { id: "margin", label: "Pricing / margin enforcement", compounding: 0.9, bolton: 0.45, magnitude: 5, lit: true },
    { id: "pim", label: "AI PIM / MDM (acquisition catalogs)", compounding: 0.85, bolton: 0.3, magnitude: 3, lit: true },
    { id: "chatbot", label: "Generic chatbot", compounding: 0.14, bolton: 0.9, magnitude: 1, lit: false },
    { id: "llm-copy", label: "LLM product copy", compounding: 0.1, bolton: 0.78, magnitude: 1, lit: false },
    { id: "ml-forecast", label: "ML forecasting (relabeled)", compounding: 0.4, bolton: 0.42, magnitude: 2, lit: false },
  ],

  // ── Below the gate (payoff), never in the initial payload ──
  payoff: {
    headlineOpportunity: [18, 55],
    moneyPools: [
      {
        id: "channel",
        label: "Channel: capture the orders that route around you",
        range: [6, 22],
        note: "Two-thirds of a $2.44B base moves through distributors with no confirmed self-service. Every rep-assisted and EDI-only order is a relationship Watts cannot see or grow. Watsco, a $2.5B HVAC distributor, runs AI recs and ML demand prediction on its contractor platform and books +10% AOV from recs and +22% mobile. A self-service layer turns blind channel volume into measurable, growable digital revenue.",
        credibility: "verified",
        source: SRC.watsco,
      },
      {
        id: "margin",
        label: "Margin: pricing you already negotiated, leaking",
        range: [5, 15],
        note: "Distributors and manufacturers lose 1.5–2.5% of margin to quote drift and discount creep across thousands of SKUs. A McKinsey-cited $15B distributor recovered 200 basis points in 10 weeks, then 50 more with agentic AI. On a $2.44B base with a 66% channel, even 100 basis points of recovered price is near-pure margin. The AI layer enforces, per account, the price already on the contract.",
        credibility: "verified",
        source: SRC.mckinsey,
      },
      {
        id: "integration",
        label: "Integration: absorb five acquisitions once, not five",
        range: [4, 12],
        note: "I-CON, EasyWater, Haws, Superior Boiler and Saudi Cast each arrived with its own catalog and order desk. Integrating commerce per deal is five projects; integrating it once on the unified core is one. Sonepar standardized its digital layer and drove digital sales up 50% year on year across a fragmented distribution footprint. The saving is the four integrations you do not have to build, plus the speed each acquisition reaches digital revenue.",
        credibility: "verified",
        source: SRC.sonepar,
      },
      {
        id: "operations",
        label: "Operations: touchless intake across five order desks",
        range: [3, 6],
        note: "Orders arriving by EDI, email, fax and PDF across five acquired businesses are manual, slow and error-prone. This is Ravi Chaudhary's mandate. JPW Industries cut order processing from 16–24 hours to under 1 hour with email and fax order automation on Salesforce. Touchless intake frees the people Watts would otherwise hire to staff five order desks, and it is the back-office mirror of the front-office portal.",
        credibility: "verified",
        source: SRC.jpw,
      },
    ],
    roadmap: [
      {
        phase: "Phase 1, starts now",
        title: "Distributor self-service portal, integrated to QAD",
        body: "Stand up a distributor and contractor portal on the unified core, with self-service ordering, reorder and account visibility, wired to QAD. Build it inside the One Watts window so every acquired business inherits it. Watts is already in the Adobe ecosystem, so Adobe Commerce sits naturally beside Sitecore and Marketo. This is the wedge.",
        active: true,
      },
      {
        phase: "Phase 2, 3 to 6 months",
        title: "Touchless order intake across the five businesses",
        body: "Automate order capture from EDI, email, fax and PDF across I-CON, EasyWater, Haws, Superior Boiler and Saudi Cast into the unified order flow. This is Ravi Chaudhary's process-automation mandate, shipped. It frees the desks the portal does not yet reach and standardizes intake before the acquired catalogs diverge further.",
      },
      {
        phase: "Phase 3, 6 to 12 months",
        title: "Account pricing, conversational CPQ, AEO",
        body: "Enforce contract and tier pricing per logged-in distributor account. Add conversational CPQ for configurable flow-control products, and structure spec content so ChatGPT and Perplexity cite Watts. These run on the rails Phases 1 and 2 lay down.",
      },
      {
        phase: "Phase 4, back office and the agentic bet",
        title: "Demand sensing, supplier risk, agentic readiness",
        body: "Layer demand sensing and multi-tier supplier-risk onto the QAD core, and make the catalog machine-purchasable for AI buyers (Google AP2, Anthropic MCP). Gartner expects 90% of B2B purchases to be AI-intermediated by 2028. The risk is being invisible, not being behind.",
      },
    ],
    // ── The play shortlist, all three pillars plus the foundation ──
    plays: [
      // STOREFRONT AND CHANNEL
      {
        id: "portal",
        pillar: "storefront",
        title: "Distributor self-service portal, integrated to QAD",
        problem:
          "Two-thirds of revenue moves through distributors with no self-service. Every order is rep-assisted or EDI, so demand is invisible until it lands and impossible to grow on-site.",
        caseName: "Watsco, Kawasaki Engines USA",
        caseDetail:
          "Watsco runs a $2.5B contractor commerce platform on Adobe Commerce with AI recs and ML demand prediction. Kawasaki Engines USA grew AOV 5x after launching a B2B portal.",
        roi: "Watsco books +10% AOV from recs and +22% mobile. Shifting even a fraction of a 66% blind channel to measurable digital revenue is a multi-million swing on a $2.44B base.",
        whatI95Does:
          "Build the distributor and contractor portal on the unified core, integrated to QAD (connector buildable, candidly not native) and aligned to the Adobe stack Watts already runs.",
        credibility: "verified",
        source: SRC.watsco,
      },
      {
        id: "aeo",
        pillar: "storefront",
        title: "AEO and a spec answer layer",
        problem:
          "The contractor's first question about backflow preventer selection or boiler sizing now goes to ChatGPT or Perplexity, not Google. If the AI answers from a competitor's data, the spec and the relationship route around you.",
        caseName: "Watts Water, Grainger",
        caseDetail:
          "Watts spec guides structured for AI citation can win the answer; the research already names \"backflow preventer selection\" cited by Perplexity over competitors. Grainger runs RAG over 2.5M SKUs in production.",
        roi: "AI referrals convert about 31% higher than organic and grew 357% year on year. The most underpriced B2B acquisition window of 2026, and almost no flow-control seller is doing it systematically.",
        whatI95Does:
          "Build the PIM-to-schema-to-answer pipeline that makes Watts's spec content machine-citable across every AI engine, feeding the same data the portal uses.",
        credibility: "illustrative",
        source: SRC.grainger,
      },
      {
        id: "cpq",
        pillar: "storefront",
        title: "Account-based pricing, entitlement and conversational CPQ",
        problem:
          "Distributor and contractor pricing is tiered and contractual. A wrong price or an unconfigurable product is instant trust loss, and Watts's flow-control lines are configurable, which makes manual quoting slow and error-prone.",
        caseName: "Schneider Electric, Salesforce CPQ",
        caseDetail:
          "Schneider Electric configures a breaker in roughly 90 seconds versus a 72-hour rep quote. Salesforce estimates 15–30% of revenue is lost to config errors and quote delays.",
        roi: "A 90-second configured quote versus a 72-hour rep turnaround closes more orders and frees the rep. On configurable flow-control lines, that speed is the difference between an order and a callback.",
        whatI95Does:
          "Render contract and tier pricing per logged-in account, with conversational CPQ for configurable flow-control products, wired to QAD and the storefront.",
        credibility: "illustrative",
        source: SRC.schneider,
      },
      // SALES AND OPERATIONS (Ravi Chaudhary's mandate)
      {
        id: "intake",
        pillar: "sales-marketing",
        title: "Touchless order intake across the five acquisitions",
        problem:
          "I-CON, EasyWater, Haws, Superior Boiler and Saudi Cast each take orders by EDI, email, fax and PDF on their own desks. Manual intake is slow, error-prone, and scales by hiring.",
        caseName: "JPW Industries, commercetools / Mirion",
        caseDetail:
          "JPW Industries cut order processing from 16–24 hours to under 1 hour with email and fax order automation. commercetools and Mirion Technologies turn emails and PDFs into structured quotes.",
        roi: "Sub-hour intake frees the headcount Watts would otherwise add to staff five order desks, and standardizes capture before the acquired catalogs diverge further. This is Chaudhary's process-automation mandate, made concrete.",
        whatI95Does:
          "Document-to-order and multi-channel intake automation into the unified order flow, so the five businesses post to one pipeline.",
        credibility: "verified",
        source: SRC.jpw,
      },
      {
        id: "cross-sell",
        pillar: "sales-marketing",
        title: "Cross-sell propensity and next-best-action on distributor data",
        problem:
          "Watts cannot grow what it cannot see. With orders routed through distributors, reorder timing and white-space cross-sell stay invisible until a distributor shifts share to a competitor.",
        caseName: "Johnson Controls",
        caseDetail:
          "Johnson Controls propensity and whitespace models tracked $100M+ of protectable revenue, $35M per attrition point, and unlocked $40M from 23 accounts.",
        roi: "8–12 points of net revenue retention, 15–30% churn reduction, $4–7 returned per $1. Once the portal makes channel behavior visible, this is the compounding layer on top.",
        whatI95Does:
          "Churn and cross-sell propensity on the order and portal data the wedge creates, surfaced as rep alerts and on-site reorder nudges.",
        credibility: "verified",
        source: SRC.jci,
      },
      {
        id: "margin",
        pillar: "sales-marketing",
        title: "AI pricing and margin enforcement",
        problem:
          "Across thousands of SKUs and a 66% contractual channel, 1.5–2.5% of margin leaks to quote drift and discount creep, invisible at scale.",
        caseName: "McKinsey $15B distributor, PROS / Wilbur-Ellis",
        caseDetail:
          "A McKinsey-cited $15B distributor recovered 200 basis points in 10 weeks, then 50 more with agentic AI. PROS and Wilbur-Ellis added 2% on 6,000 SKUs.",
        roi: "100–200 basis points on a $2.44B base is $5–15M of near-pure margin. The single largest dollar pool, which is why it sequences after the pricing rails are clean, not as the wedge.",
        whatI95Does:
          "Account-SKU-level price recommendations and discount-corridor enforcement on the portal and quoting layer, wired to QAD.",
        credibility: "verified",
        source: SRC.pros,
      },
      // BACK OFFICE
      {
        id: "demand-risk",
        pillar: "back-office",
        title: "Demand sensing and multi-tier supplier-risk",
        problem:
          "A flow-control manufacturer across 20+ countries with five new businesses and data-center demand spiking sees forecast misses and supply shocks late. A stockout on a code-specified line is a lost spec, not just a lost order.",
        caseName: "BRF, Resilinc / Everstream",
        caseDetail:
          "BRF's SAP IBP demand sensing cut planning time 33%. Supplier-risk networks like Resilinc and Everstream give 60–90 day advance warnings and 30–40% faster response.",
        roi: "Demand sensing frees about 10–12% of inventory working capital; risk intelligence is asymmetric insurance at roughly $200–500K a year, avoiding 1–2 events a year worth $2–10M each.",
        whatI95Does:
          "Layer demand-sensing and supplier-risk signals onto the QAD core, so planners see disruption before it hits the line.",
        credibility: "verified",
        source: SRC.brf,
      },
      // FOUNDATION
      {
        id: "pim",
        pillar: "foundation",
        title: "AI Master Data and PIM, the foundation under all of it",
        problem:
          "Five acquired catalogs with inconsistent attributes and units cannot feed one portal. 30–60% of B2B catalogs have incomplete attributes, and 87% of leaders say bad data has hampered AI value.",
        caseName: "Stibo, Informatica",
        caseDetail:
          "Stibo and Informatica (Gartner MDM Leaders) run agentic PIM that bulk-enriches attributes from supplier PDFs with human-in-the-loop, standardizes units and classification, and scores quality continuously.",
        roi: "60–70% less manual stewardship, and it gates the ROI of every other play above. The cheapest insurance on the whole portfolio, and the precondition for absorbing five catalogs into one.",
        whatI95Does:
          "AI-enriched PIM and MDM that consolidates the five acquired catalogs into one source of truth feeding QAD, the portal, search and the answer layer.",
        credibility: "illustrative",
        source: SRC.stibo,
      },
    ],
    why: {
      opener: "You'll be sold a $3M transformation. Your problem might be a six-week fix.",
      body: "The Big-4 are built for enterprise-wide change. Your wedge is not enterprise-wide. It is a distributor portal laid onto the new core during a unification you are running anyway. That is exactly i95Dev's lane: surgical, deep in commerce and ERP integration, data-foundation first, on mid-market economics. We do not replatform Sitecore. We add the transaction layer beside it, aligned to the Adobe stack you already run, and we are candid that QAD is not native and the connector is buildable.",
      ctaTitle: "Book your AI-in-Commerce Diagnostic",
      ctaSubtitle:
        "A fixed-scope, fixed-fee readiness assessment that validates these directional numbers against Watts's real data, including the QAD connector path. Two weeks, not a $3M transformation.",
      credibility: { brands: "500+ B2B brands", years: "25+ years", projects: "1,200+ projects" },
    },
  },
};
