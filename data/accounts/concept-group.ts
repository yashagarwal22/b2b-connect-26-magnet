import type { AccountConfig } from "@/lib/types";

// Sources reused across the report (Verified vs. Illustrative labelled per-claim, spec section 14).
const SRC = {
  mit: { label: "MIT NANDA, ~95% of pilots", url: "https://nanda.media.mit.edu/" },
  watts: { label: "Watts Water, cited by Perplexity over rivals", url: "https://www.watts.com/" },
  grainger: { label: "Grainger, RAG over 2.5M SKUs (Databricks)", url: "https://www.grainger.com/" },
  jpw: { label: "JPW Industries, order processing 16–24h to under 1h", url: "https://www.salesforce.com/" },
  commercetools: { label: "commercetools B2B Intake Agent (Mirion)", url: "https://commercetools.com/" },
  ivanti: { label: "Ivanti + 6sense, +154% win rate, $263M influenced pipeline", url: "https://6sense.com/" },
  stibo: { label: "Stibo / Informatica, Gartner MDM Leaders", url: "https://www.stibosystems.com/" },
  millipore: { label: "MilliporeSigma, account-based reorder for technical buyers", url: "https://www.milliporesigma.com/" },
  cohere: { label: "Cohere + Oracle, 100+ content/catalog use cases", url: "https://cohere.com/" },
  referrals: { label: "AI referrals +357% YoY, ~31% higher conversion (2025)", url: "https://www.similarweb.com/" },
  doe: { label: "DOE hydrogen voucher with Lawrence Livermore", url: "https://www.energy.gov/" },
} as const;

/**
 * Concept Group LLC (maker of Insulon), a warm, active SMB account (~$8.5M, founder-led). Every section
 * is grounded in the Account-360 profile and the AI research dump, and maps 1:1 to
 * companies/concept-group/concept-group-spec.md.
 *
 * Spine: Concept Group makes the best vacuum insulation on earth (patented Insulon "shaped vacuum",
 * ~60x less heat than nylon) and is the only company that can ship it. A once-in-a-decade demand
 * inflection (DOE hydrogen voucher with Lawrence Livermore, quantum qubit cooling, semiconductor
 * sub-fab) is arriving at a go-to-market that still quotes by hand. The buyer now starts at an AI
 * answer engine, and a sole-developer can become the uncontested cited answer for a whole emerging
 * category. Own the answer, automate the quote, and a 20-person company owns a frontier category.
 * Write to Margaret Fulham (Director, Marketing and BD), with founder/CEO Aarne Reid as economic buyer.
 * Guardrails: do not pitch a replatform or enterprise overhead (the WooCommerce/HubSpot/Salesforce
 * stack works), right-size every number to ~$8.5M, and verify headcount live. Numbers are growth
 * capture and capacity, not enterprise leakage; one pool is denominated in FTE on purpose.
 */
export const conceptGroup: AccountConfig = {
  slug: "concept-group",
  companyName: "Concept Group",
  aliases: ["Concept Group LLC", "Insulon", "Aarne Reid"],
  domains: ["conceptgroupllc.com"],
  vertical: "manufacturing",
  verticalLabel: "Specialty thermal-engineering manufacturer",
  revenueBand: "$5–10M",
  role: "Director, Marketing and Business Development",
  roleEmphasis: "ecommerce",
  activeRequirement: true,
  published: true,

  thesis: "You make the only Insulon. Now be the answer AI gives.",
  wedge:
    "Answer Engine Optimization that makes Insulon the cited answer for hydrogen, cryogenic and semiconductor thermal problems",
  wedgeDetail:
    "It runs on the technical content you already publish and on IP no competitor can claim, so the citation is yours to lose. Owning the category vocabulary (cryo-compressed hydrogen storage, qubit cooling thermal isolation) proves fast and cannot be contested, because you are the sole developer. Almost no maker is doing this, which makes the window wide open right now.",

  // ── Module 1, The Reframe (above gate) ──
  reframe: {
    opener: "Everyone here is selling you AI. The hard part is not the model. It is being the answer.",
    stat: "95%",
    statSource: SRC.mit,
    body: "95% of enterprise AI pilots return nothing to the P&L. They sit beside the work instead of inside it. Your advantage does not come from a bigger model. It comes from pointing ordinary AI at the one thing no competitor can claim: you are the sole developer of Insulon, you hold the patents, and you have already published the technical answers a hydrogen or quantum engineer is searching for. The work is making the machines cite you.",
  },

  // ── Module 2, The Hype Filter (above gate) ──
  hypeFilter: {
    opener: "Commodity AI runs on the model. Compounding AI runs on the authority only you hold.",
    commodity: [
      "A chatbot bolted onto the site",
      "Autonomous AI SDRs blasting cold email",
      "Broad programmatic display to strangers",
      "LLM copy that cannot vouch for your specs",
    ],
    compounding: [
      "AEO, so AI names Insulon for frontier thermal problems",
      "A guided quote-to-order a lean team can run",
      "Intent capture from the engineers already on your site",
      "RAG answers grounded in your patents and test data",
    ],
    pitchWarning:
      "You are a lean team with a rare product, so you will be pitched an autonomous AI sales rep that \"scales outreach.\" Skip it. 11x.ai, backed at $74M, lost an estimated 70 to 80% of its customers, and ZoomInfo said its AI rep performed significantly worse than human SDRs. At volume it burns the deliverability and the brand of exactly the technical buyers you need. Your demand is inbound and education-led. Win it where it starts: the answer engine.",
  },

  // ── Module 2.5, Your Stack (verified dashboard research; reconcile flagged items live) ──
  stackFlags: [
    {
      signal: "WooCommerce + WordPress",
      leadPlay: "Make the catalog the answer layer: structured spec data plus a schema feed",
      commodityFlag: "A replatform. The unlock is structured data, not a new storefront.",
    },
    {
      signal: "Manual \"Request a Quote\"",
      leadPlay: "Guided quote-to-order with PIM-backed dimensional SKUs, so the lean team scales",
      commodityFlag: "A bigger sales team. The bottleneck is the workflow, not the headcount.",
    },
    {
      signal: "HubSpot + Salesforce",
      leadPlay: "Nurture and lead-score the inbound you already attract, end to end",
      commodityFlag: "More email volume. The gap is activation and routing, not send rate.",
    },
    {
      signal: "Dealfront / Leadfeeder",
      leadPlay: "Turn anonymous engineer visits into named, scored frontier leads",
      commodityFlag: "A new data tool. You already have the signal; activate it.",
    },
    {
      signal: "Published technical content + glossary",
      leadPlay: "Feed it to AI as machine-readable answers so engines cite Insulon",
      commodityFlag: "\"AI content generation.\" You do not need more content; you need it cited.",
    },
  ],

  // ── Module 3, The Commodity-vs-Compounding Map (above gate) ──
  // Y: 0 commodity to 1 compounding · X: 0 foundation-required to 1 bolt-on-ready (wedge = top-right)
  mapPlays: [
    { id: "aeo", label: "AEO + answer layer", compounding: 0.95, bolton: 0.85, magnitude: 5, lit: true, wedge: true },
    { id: "cpq", label: "Quote-to-order / CPQ", compounding: 0.85, bolton: 0.55, magnitude: 5, lit: true },
    { id: "rag", label: "RAG technical discovery", compounding: 0.82, bolton: 0.7, magnitude: 3, lit: true },
    { id: "intent", label: "Intent capture + nurture", compounding: 0.7, bolton: 0.78, magnitude: 3, lit: true },
    { id: "pim", label: "AI PIM for dimensional SKUs", compounding: 0.85, bolton: 0.35, magnitude: 3, lit: true },
    { id: "content", label: "AI-assisted technical content", compounding: 0.55, bolton: 0.8, magnitude: 2, lit: true },
    { id: "portal", label: "Customer / account portal", compounding: 0.78, bolton: 0.45, magnitude: 3, lit: true },
    { id: "sdr", label: "Autonomous AI SDR", compounding: 0.15, bolton: 0.85, magnitude: 1, lit: false },
    { id: "chatbot", label: "Generic chatbot", compounding: 0.14, bolton: 0.9, magnitude: 1, lit: false },
    { id: "programmatic", label: "Broad programmatic display", compounding: 0.2, bolton: 0.75, magnitude: 1, lit: false },
  ],

  // ── Below the gate (payoff), never in the initial payload ──
  payoff: {
    headlineOpportunity: [1, 3],
    moneyPools: [
      {
        id: "inflection",
        label: "Capture the inflection: frontier programs you already attract",
        range: [0.8, 2],
        note: "A single hydrogen, quantum or semiconductor program is a multi-year custom contract, not a transactional order. The DOE voucher and Lawrence Livermore work are already pulling that inbound toward you. The opportunity is not new demand. It is converting, over 12 to 24 months, the frontier programs that drift away when a quote sits in an inbox. Sized to an $8.5M base.",
        credibility: "illustrative",
        source: SRC.doe,
      },
      {
        id: "discovery",
        label: "Discovery: be the answer AI gives, not a rival material",
        range: [0.3, 0.8],
        note: "AI engines drove 1.13B referral visits in June 2025, up 357% year on year, and ChatGPT referrals convert about 31% higher than non-branded organic. For a sole-developer product, the citation is uncontested if you claim it. Watts did exactly this in a different category and made Perplexity cite it over rivals. Almost no thermal maker has structured its data for this yet.",
        credibility: "illustrative",
        source: SRC.referrals,
      },
      {
        id: "capacity",
        label: "Capacity: hours your lean team gets back from manual quoting",
        range: [0.2, 0.5],
        note: "Read this pool in FTE, not dollars: 0.2 to 0.5 FTE freed, plus faster quotes. On a team this size, the founder and engineers are the quoting engine. JPW Industries cut order processing from 16 to 24 hours down to under 1 hour with order automation. A guided quote-to-order flow frees a measurable share of a lean team's week and shortens technical quote cycles, and faster quotes win more of a long-cycle sale.",
        credibility: "illustrative",
        source: SRC.jpw,
      },
    ],
    roadmap: [
      {
        phase: "Phase 1, starts now",
        title: "Capacity and the category answer",
        body: "Stand up guided quote-to-order on WooCommerce with PIM-backed dimensional SKUs so the lean team stops quoting by hand, and in parallel structure the existing technical content so AI engines cite Insulon. Capacity first, so the demand the answer layer creates has somewhere to land. This is the wedge plus its companion.",
        active: true,
      },
      {
        phase: "Phase 2, 3 to 6 months",
        title: "Convert the demand you create",
        body: "Activate HubSpot and Salesforce nurture and lead scoring on the inbound you already attract, route Dealfront-identified engineer visits to named follow-up, and add RAG technical discovery so a buyer gets a spec-accurate answer on site. This turns anonymous frontier traffic into qualified pipeline.",
      },
      {
        phase: "Phase 3, 6 to 12 months",
        title: "Portal, personalization and content scale",
        body: "Add an account portal for repeat and program customers, on-site personalization for the markets you are entering, and AI-assisted technical content so a small team publishes at the cadence the category requires. These compound the wedge without adding headcount.",
      },
    ],
    // ── The play shortlist, right-sized across discovery, demand and capacity ──
    plays: [
      // DISCOVERY & DEMAND
      {
        id: "aeo",
        pillar: "storefront",
        title: "AEO and the answer layer that names Insulon",
        problem:
          "The engineer sourcing a thermal solution for liquid hydrogen or a cryostat asks an AI first. If it answers with a generic material or a rival, your singular product never enters the room.",
        caseName: "Watts Water, Grainger",
        caseDetail:
          "Watts structured its spec guides so Perplexity cites it over competitors for \"backflow preventer selection\"; Grainger runs RAG over 2.5M SKUs in production, proving spec-grounded answers scale.",
        roi: "ChatGPT referrals convert about 31% higher than non-branded organic, and AI referrals grew 357% year on year. For a sole-developer product, the citation is uncontested once claimed.",
        whatI95Does:
          "Build the content-to-schema-to-answer pipeline that makes Insulon machine-citable for the frontier categories you define, on WordPress, no replatform.",
        credibility: "illustrative",
        source: SRC.watts,
      },
      {
        id: "intent",
        pillar: "sales-marketing",
        title: "Intent capture and nurture on the demand you already attract",
        problem:
          "You run HubSpot, Salesforce and Dealfront, but anonymous engineer visits and inbound rarely become scored, routed pipeline with the right follow-up at the right moment.",
        caseName: "Ivanti + 6sense",
        caseDetail:
          "Ivanti fused intent into its go-to-market for a 154% higher win rate and $263M of influenced pipeline, on the same activation pattern a smaller team can run.",
        roi: "Signal-based activation is reallocation, not new spend. It turns traffic you already pay for into named opportunities.",
        whatI95Does:
          "Wire Dealfront intent and on-site behavior into HubSpot and Salesforce nurture and lead scoring, so a lean team works the warmest engineers first.",
        credibility: "illustrative",
        source: SRC.ivanti,
      },
      {
        id: "rag",
        pillar: "storefront",
        title: "RAG technical discovery on your own data",
        problem:
          "Buyers ask precise technical questions (\"vacuum-jacketed line rating for liquid hydrogen at cryo temperatures\") and a generic search or a human email is slow or wrong.",
        caseName: "Grainger",
        caseDetail:
          "Grainger runs RAG over 2.5M SKUs in production for spec-grounded answers and call deflection, the same engine at frontier-catalog scale.",
        roi: "A spec-accurate on-site answer shortens the technical sale and deflects founder and engineer time from repetitive questions.",
        whatI95Does:
          "A retrieval layer grounded in your patents, test data and published content, so the site answers like your best engineer.",
        credibility: "illustrative",
        source: SRC.grainger,
      },
      // CAPACITY (the lean-team unlock)
      {
        id: "cpq",
        pillar: "storefront",
        title: "Quote-to-order and CPQ for custom, dimensional products",
        problem:
          "The \"Request a Quote\" path is a manual email thread, and on a 20-person team the founder and engineers are the bottleneck for every custom job.",
        caseName: "Mirion Technologies, JPW Industries",
        caseDetail:
          "Mirion Technologies, a nuclear-equipment maker, is deploying a B2B intake agent that turns emails, PDFs and spreadsheets into structured quotes; JPW Industries cut order processing from 16 to 24 hours to under 1 hour.",
        roi: "Frees a measurable share of a lean team's week and shortens quote cycles, and faster quotes win more of a long-cycle technical sale.",
        whatI95Does:
          "A guided configurator and CPQ on WooCommerce with PIM-backed dimensional SKUs and rules, turning the manual quote into a self-service path with human sign-off.",
        credibility: "illustrative",
        source: SRC.commercetools,
      },
      {
        id: "pim",
        pillar: "foundation",
        title: "AI PIM for dimensional and custom SKUs (the foundation)",
        problem:
          "Custom geometry and dimensional variants are hard to structure, and every play above (AEO, search, CPQ) fails on incomplete product data. 30 to 60% of B2B catalogs have incomplete attributes.",
        caseName: "Stibo, Informatica",
        caseDetail:
          "Stibo and Informatica, Gartner MDM Leaders, run agentic PIM that enriches attributes from engineering documents with human-in-the-loop review.",
        roi: "Cuts manual stewardship and gates the ROI of the answer layer, the search and the configurator at once. The cheapest insurance on the portfolio.",
        whatI95Does:
          "A right-sized PIM that models Insulon's dimensional logic once and feeds the storefront, the answer layer and the configurator from one source.",
        credibility: "illustrative",
        source: SRC.stibo,
      },
      // COMPOUNDING
      {
        id: "portal",
        pillar: "storefront",
        title: "Customer and account portal for repeat and program buyers",
        problem:
          "Multi-year frontier programs and repeat OEM buyers deserve a logged-in experience with their drawings, history and reorders, not another email.",
        caseName: "MilliporeSigma",
        caseDetail:
          "MilliporeSigma runs account-based reorder on approved lists for regulated technical buyers, the pattern a program customer expects.",
        roi: "Repeat and program revenue is cheaper to serve and stickier than new-logo work, and a portal raises switching costs for your most valuable accounts.",
        whatI95Does:
          "An account portal for drawings, quote history and reorders, integrated with Salesforce, sized for a small but high-value account base.",
        credibility: "illustrative",
        source: SRC.millipore,
      },
      {
        id: "content",
        pillar: "sales-marketing",
        title: "AI-assisted technical content at a lean-team cadence",
        problem:
          "AEO rewards depth and freshness, but a small team cannot hand-write the volume the frontier categories demand.",
        caseName: "Cohere + Oracle",
        caseDetail:
          "Cohere runs over 100 generative content and catalog use cases in production with Oracle, the enrichment pattern applied to technical publishing.",
        roi: "Lets a small team publish at category-defining cadence with human review, feeding the answer layer that wins the citation.",
        whatI95Does:
          "An AI-assisted drafting workflow with expert sign-off, so Concept Group authors the category vocabulary AI will cite, without hiring a content team.",
        credibility: "verified",
        source: SRC.cohere,
      },
    ],
    why: {
      opener: "The Big-4 will not take this meeting. That is the point.",
      body: "A $3M transformation is the wrong tool for a company that needs the category's answer engine pointed at the one product no one else can make. Your problem is surgical: structure the content, automate the quote, activate the inbound. That is exactly i95Dev's lane, deep in commerce and the data layer, right-sized to an SMB instead of enterprise overhead. We do not replatform your WooCommerce build. We make your singular IP impossible to overlook, on the tools you already run.",
      ctaTitle: "Book your AI-in-Commerce Diagnostic",
      ctaSubtitle:
        "A fixed-scope, fixed-fee readiness assessment that validates these directional numbers against Concept Group's real data and pipeline. Two weeks, sized for an SMB, not a $3M transformation.",
      credibility: { brands: "500+ B2B brands", years: "25+ years", projects: "1,200+ projects" },
    },
  },
};
