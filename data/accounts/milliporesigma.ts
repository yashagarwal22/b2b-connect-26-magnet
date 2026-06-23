import type { AccountConfig } from "@/lib/types";

// Sources reused across the report (Verified vs. Illustrative labelled per-claim, spec section 14).
const SRC = {
  mit: { label: "MIT NANDA, ~95% of pilots", url: "https://nanda.media.mit.edu/" },
  referrals: { label: "AI referrals +357% YoY, ~31% higher conversion (2025)", url: "https://www.similarweb.com/" },
  watts: { label: "Watts Water, cited by Perplexity over rivals", url: "https://www.watts.com/" },
  grainger: { label: "Grainger, production RAG over 2.5M SKUs (Databricks)", url: "https://www.grainger.com/" },
  catalog: { label: "B2B catalog attribute benchmarks, 30-60% incomplete (Part 3.2)", url: "https://www.databricks.com/" },
  biorad: { label: "Bio-Rad / Thermo Fisher regulated-catalog enrichment (CAS/REACH/RoHS)", url: "https://www.bio-rad.com/" },
  millipore: { label: "MilliporeSigma, approved-list reorder for technical buyers", url: "https://www.milliporesigma.com/" },
  watsco: { label: "Watsco AI recommendations, AOV +10% (Adobe / DC360)", url: "https://www.watsco.com/" },
  gartner: { label: "Gartner, 90% of B2B purchases AI-intermediated by 2028", url: "https://www.gartner.com/" },
  ap2: { label: "Google AP2, 60+ partners incl. Mastercard / PayPal", url: "https://cloud.google.com/" },
  dawn: { label: "Dawn Foods, triple-digit online growth, -30% time-to-order (commercetools / DC360)", url: "https://commercetools.com/" },
} as const;

/**
 * MilliporeSigma, the US Life Science arm of Merck KGaA and the Sigma-Aldrich catalog, an
 * AEO-and-findability account. Every section is grounded in the Account-360 profile and the AI
 * research dump, and maps 1:1 to companies/milliporesigma/milliporesigma-spec.md.
 *
 * Spine: sigmaaldrich.com is one of the largest life-science catalog storefronts on earth, and the
 * buyer came with one precise ask, AI search optimization. SEO is no longer the front door; the
 * scientist now asks ChatGPT, Perplexity or Google AI for a reagent, and the only question is whether
 * the answer cites a Sigma-Aldrich product or a competitor's. The moat is the 25-year structured
 * catalog of CAS numbers, purity grades and application data, exactly the fact base answer engines
 * cite, but only once it is machine-parseable. Write to Berfun Goodwin (Head of Digital Marketing
 * Strategy & Analytics, champion), with Rajeev Nair (CCO, Discovery Solutions BU) and the new ERP
 * program (Robert Machinek) as adjacency to probe. Guardrails: this is SAP-heavy with Accenture on the
 * S/4HANA migration and Capgemini on the global implementation, so do not pitch a Dynamics 365 ERP
 * play; lead entirely with AEO, AI search, content and eCommerce analytics for the catalog channel,
 * and do not assert the unconfirmed storefront platform or AI-search vendor on the page.
 */
export const milliporeSigma: AccountConfig = {
  slug: "milliporesigma",
  companyName: "MilliporeSigma",
  aliases: [
    "Merck KGaA, Darmstadt",
    "Sigma-Aldrich",
    "Merck Life Science",
    "Discovery Solutions",
  ],
  domains: ["sigmaaldrich.com", "milliporesigma.com"],
  vertical: "life-sciences",
  verticalLabel: "Life-sciences research chemicals, bioprocessing, CDMO",
  revenueBand: "Merck KGaA Life Science FY2025 net sales €8,980M",
  role: "Head of Digital Marketing Strategy & Analytics",
  roleEmphasis: "ecommerce",
  activeRequirement: true,
  published: true,

  thesis: "The scientist now asks an AI. Make sure it cites your catalog, not a competitor's.",
  wedge:
    "Answer Engine Optimization for sigmaaldrich.com, so the AI cites your product, not a competitor's",
  wedgeDetail:
    "It runs on the 25-year structured chemical and spec catalog MilliporeSigma already owns, it is the buyer's literal ask (AI search optimization), it is the most underpriced acquisition channel of 2026 with almost no life-science seller doing it systematically, and it is fast to prove on the highest-traffic catalog categories. It needs only a PIM-to-schema content pipeline, not a platform change. Prove it on the top-traffic reagent categories, then extend the same structured-data pipeline across the full catalog and into the new Discovery Solutions BU.",

  // ── Module 1, The Reframe (above gate) ──
  reframe: {
    opener: "A chatbot on the homepage is a demo. The scientist asking Perplexity for a reagent is the new front door.",
    stat: "95%",
    statSource: SRC.mit,
    body: "95% of enterprise AI pilots return nothing to the P&L. They sit beside the work instead of inside it. MilliporeSigma's work is the catalog: 25 years of CAS numbers, purity grades and application data across one of the largest life-science storefronts on earth. The edge is not a smarter homepage. It is structuring that catalog so when a scientist asks an AI for a reagent, the answer cites a Sigma-Aldrich product. AI engines drove 1.13B referral visits in June 2025, up 357% year on year, and almost no life-science seller has structured for it.",
  },

  // ── Module 2, The Hype Filter (above gate) ──
  hypeFilter: {
    opener: "Commodity AI decorates the website. Compounding AI makes the answer engine cite your catalog, on a fact base competitors cannot copy.",
    commodity: [
      "A chatbot bolted onto sigmaaldrich.com",
      "AI-written banner copy at scale",
      "Generic recs that ignore approved lists",
      "An \"AI search\" deck, not shipped citations",
    ],
    compounding: [
      "AEO so Perplexity cites your reagent first",
      "Schema-structured spec content the AI can quote",
      "Semantic search on CAS, purity and application",
      "Reorder and content tuned to retention metrics",
    ],
    pitchWarning:
      "You run a SAP-heavy stack with Accenture and Capgemini on the ERP. Expect a pitch to rip up the backbone for a fashionable new platform. Do not. The catalog and the channel are the opportunity, not the system of record. Structure the data you already own so the answer engines cite it, and tune the search and content on top. Win the findability war, not a re-platform.",
  },

  // ── Module 2.5, Your Stack (Account 360 systems; reconcile flagged items live) ──
  stackFlags: [
    {
      signal: "25-year Sigma-Aldrich catalog",
      leadPlay: "Structure CAS, purity and spec data into schema the answer engines cite",
      commodityFlag: "\"Add an AI chatbot.\" The asset is the citable data, not a bot.",
    },
    {
      signal: "SAP S/4HANA + EWM + GTS + BTP",
      leadPlay: "Leave the backbone alone; win the catalog channel on top of it",
      commodityFlag: "A D365 ERP rip-out. Accenture and Capgemini own this; do not touch it.",
    },
    {
      signal: "Punchout to Jaggaer, Ariba, Oracle, Coupa + PIPELINE",
      leadPlay: "Tune semantic search and reorder for the procurement and recurring base",
      commodityFlag: "A generic checkout. The largest accounts need entitlement-aware ordering.",
    },
    {
      signal: "Tellius AI eCommerce analytics",
      leadPlay: "Wire AEO and content lift to the analytics you already trust",
      commodityFlag: "\"Buy a new analytics suite.\" You have Tellius; instrument the wedge on it.",
    },
    {
      signal: "Discovery Solutions, digital-first BU (Jan 2026)",
      leadPlay: "Make the new digital-first catalog answer-engine-native from day one",
      commodityFlag: "A bolt-on for the old site. Build the structured pipeline into the new BU.",
    },
  ],

  // ── Module 3, The Commodity-vs-Compounding Map (above gate) ──
  // Y: 0 commodity to 1 compounding · X: 0 foundation-required to 1 bolt-on-ready (wedge = top-right)
  mapPlays: [
    { id: "aeo", label: "AEO / answer-engine findability", compounding: 0.9, bolton: 0.74, magnitude: 5, lit: true, wedge: true },
    { id: "semantic-search", label: "B2B semantic / RAG search", compounding: 0.84, bolton: 0.62, magnitude: 4, lit: true },
    { id: "ai-pim", label: "AI PIM enrichment for the catalog", compounding: 0.86, bolton: 0.38, magnitude: 4, lit: true },
    { id: "content-retention", label: "Content + retention / reorder", compounding: 0.78, bolton: 0.66, magnitude: 4, lit: true },
    { id: "entitlement", label: "Account entitlement on punchout", compounding: 0.8, bolton: 0.55, magnitude: 3, lit: true },
    { id: "analytics", label: "eCommerce analytics on Tellius", compounding: 0.72, bolton: 0.7, magnitude: 3, lit: true },
    { id: "agentic", label: "Agentic-commerce readiness", compounding: 0.92, bolton: 0.4, magnitude: 3, lit: true },
    { id: "discovery-launch", label: "Discovery Solutions structured launch", compounding: 0.82, bolton: 0.5, magnitude: 3, lit: true },
    { id: "chatbot", label: "Generic chatbot", compounding: 0.14, bolton: 0.9, magnitude: 1, lit: false },
    { id: "banner-copy", label: "AI banner copy", compounding: 0.12, bolton: 0.8, magnitude: 1, lit: false },
    { id: "ai-search-deck", label: "\"AI search\" strategy deck", compounding: 0.2, bolton: 0.3, magnitude: 1, lit: false },
  ],

  // ── Below the gate (payoff), never in the initial payload ──
  payoff: {
    headlineOpportunity: [12, 35],
    moneyPools: [
      {
        id: "findability",
        label: "Findability: AEO + answer-engine acquisition",
        range: [4, 14],
        note: "AI engines drove 1.13B referral visits in June 2025, up 357% year on year, and ChatGPT referrals convert about 31% higher than non-branded organic. Watts Water's \"backflow preventer selection\" content is cited by Perplexity over its competitors, and 51% of software buyers now start in an AI chatbot. On a catalog this technical, being the cited answer is the most underpriced acquisition channel of 2026, and almost no life-science seller is doing it.",
        credibility: "illustrative",
        source: SRC.referrals,
      },
      {
        id: "discovery",
        label: "Discovery: B2B semantic + RAG search on the catalog",
        range: [3, 10],
        note: "Scientists search by CAS number, application and spec equivalence, where keyword search hits the \"zero-results catastrophe.\" AI search converts about 1.67 times keyword, and Grainger runs production RAG across 2.5M SKUs for exactly this kind of technical lookup. On the largest life-science catalog, relevance on spec queries is measured upside on the channel that already carries orders.",
        credibility: "verified",
        source: SRC.grainger,
      },
      {
        id: "content",
        label: "Content: retention, reorder, acquisition (6-12mo ask)",
        range: [3, 8],
        note: "Berfun Goodwin's 6-12 month requirement is Content management, Customer retention and Customer acquisition, and the same labs reorder the same reagents on a cycle. MilliporeSigma already renders approved-list reorder for this base, and structured spec content compounds across retention and acquisition at once. Tuning content and reorder to the metrics Tellius already tracks is real value now.",
        credibility: "illustrative",
        source: SRC.millipore,
      },
      {
        id: "agentic",
        label: "Agentic readiness: AI buyers + machine-readable catalog",
        range: [2, 3],
        note: "Gartner expects 90% of B2B purchases to be AI-intermediated by 2028, and Google's AP2 protocol already ships agentic purchasing with 60+ partners. A reagent catalog that is not machine-readable is invisible to the AI buyer. The same structured-data work that wins AEO is the readiness that keeps Sigma-Aldrich visible as agents start to source.",
        credibility: "illustrative",
        source: SRC.gartner,
      },
    ],
    roadmap: [
      {
        phase: "Phase 1, starts now",
        title: "AEO on the top catalog categories",
        body: "Structure CAS, purity and spec data into Product, FAQ and Spec schema for the highest-traffic reagent categories, so ChatGPT, Perplexity and Google AI cite a Sigma-Aldrich product. It answers Berfun Goodwin's \"AI search optimization\" ask, runs on data you own, and ships without a re-platform. This is the wedge.",
        active: true,
      },
      {
        phase: "Phase 2, 3 to 6 months",
        title: "AI PIM enrichment and semantic search",
        body: "Stand up the PIM-to-schema pipeline so every category grounds in clean, structured attributes, and tune B2B semantic search for CAS, application and spec-equivalence queries. The AEO gets durable; the on-site search gets technical.",
      },
      {
        phase: "Phase 3, 6 to 12 months",
        title: "Content, retention and reorder",
        body: "Build the spec and protocol content engine and tune one-click reorder to the retention and acquisition metrics Tellius already tracks, directly against Berfun Goodwin's 6-12 month requirement. Recurring scientific purchasing gets stickier every cycle.",
      },
      {
        phase: "Phase 4, the spine and the bet",
        title: "Agentic-commerce readiness",
        body: "Make the catalog machine-readable and machine-purchasable for AI agents using AP2 and MCP, grounded in the new structured data, and wire it into the Discovery Solutions BU. Gartner expects 90% of B2B purchases to be AI-intermediated by 2028. The risk is being invisible, not being behind.",
      },
    ],
    // ── The play shortlist, across the findability, the discovery, the content and the bet ──
    plays: [
      // THE FINDABILITY
      {
        id: "aeo",
        pillar: "sales-marketing",
        title: "Answer Engine Optimization for the catalog",
        problem:
          "The scientist now asks an AI for a reagent, and AEO is the one phrase Berfun Goodwin came to the conference for. If the answer cites Thermo Fisher, the order is lost before sigmaaldrich.com loads.",
        caseName: "Watts Water, Perplexity",
        caseDetail:
          "Watts Water's \"backflow preventer selection\" content is cited by Perplexity over its competitors; AI engines drove 1.13B referral visits in June 2025, up 357% year on year.",
        roi: "ChatGPT referrals convert about 31% higher than non-branded organic, and almost no life-science seller has structured for it. This is the largest pool in the model.",
        whatI95Does:
          "A PIM-to-schema pipeline that structures CAS, purity and spec data into Product, FAQ and Spec schema so answer engines cite Sigma-Aldrich, starting on the top categories.",
        credibility: "illustrative",
        source: SRC.watts,
      },
      {
        id: "spec-content",
        pillar: "sales-marketing",
        title: "Structured spec and protocol content",
        problem:
          "The catalog's 25 years of technical data sits in pages an AI cannot easily quote, and content is Berfun Goodwin's named 6-12 month priority.",
        caseName: "AEO research, Part 3.5",
        caseDetail:
          "AEO is an emerging discipline that almost no industrial seller is doing systematically, leaving an underpriced window; structured Product and FAQ schema is how the engines cite you.",
        roi: "Structured content compounds across every answer engine and traditional search at once, on the channel already shifting to AI.",
        whatI95Does:
          "Turn spec and protocol content into machine-parseable, schema-marked pages tuned for citation.",
        credibility: "illustrative",
        source: SRC.watts,
      },
      // THE DISCOVERY
      {
        id: "semantic-search",
        pillar: "storefront",
        title: "B2B semantic and RAG search on the technical catalog",
        problem:
          "Scientists search by CAS, application and spec equivalence, and keyword search hits the zero-results catastrophe on a catalog this technical.",
        caseName: "Grainger, Databricks",
        caseDetail:
          "Grainger runs production RAG across 2.5M SKUs on Databricks for technical search and call-center assist; AI search converts about 1.67 times keyword.",
        roi: "On the largest life-science catalog, relevance on spec queries is measured upside on a channel that already carries orders.",
        whatI95Does:
          "Semantic and RAG search tuned for CAS, application and spec-equivalence intent, grounded in the structured catalog.",
        credibility: "verified",
        source: SRC.grainger,
      },
      {
        id: "ai-pim",
        pillar: "foundation",
        title: "AI PIM enrichment for the regulated catalog",
        problem:
          "30 to 60% of B2B catalogs carry incomplete attributes, and an answer engine or a search on dirty data is confidently wrong, which is unacceptable for regulated reagents.",
        caseName: "Bio-Rad, Thermo Fisher",
        caseDetail:
          "Bio-Rad and Thermo Fisher enrich regulated catalogs from source documents, extracting CAS, REACH and RoHS from SDS; inriver and Akeneo ship agentic enrichment.",
        roi: "Clean, structured attributes gate the AEO, the search and the agentic readiness. The cheapest insurance on the portfolio.",
        whatI95Does:
          "Human-in-the-loop PIM enrichment that standardizes attributes and specs across the catalog, AI draft, category-manager approve by exception.",
        credibility: "illustrative",
        source: SRC.biorad,
      },
      // THE CONTENT
      {
        id: "retention-reorder",
        pillar: "storefront",
        title: "Retention and reorder tuned to the metrics",
        problem:
          "The same labs reorder the same reagents on a cycle, and retention is Berfun Goodwin's named 6-12 month priority, but reorder and adjacent prompts stay generic.",
        caseName: "MilliporeSigma, Watsco",
        caseDetail:
          "MilliporeSigma already renders approved-list reorder per logged-in account; Watsco's AI recommendations lifted average order value 10%.",
        roi: "Growing a known lab is 5 to 7 times cheaper than winning a new one, and reorder converts 3 to 4 times new-logo traffic.",
        whatI95Does:
          "One-click reorder and next-best-action surfaced in the scientist's account, instrumented on the Tellius analytics already in the stack.",
        credibility: "illustrative",
        source: SRC.watsco,
      },
      {
        id: "entitlement",
        pillar: "storefront",
        title: "Account entitlement on the punchout rails",
        problem:
          "The largest accounts order through Jaggaer, Ariba, Oracle, Coupa and the proprietary PIPELINE connection, where the wrong price or an unapprovable item is one click from a trust loss.",
        caseName: "MilliporeSigma",
        caseDetail:
          "MilliporeSigma renders approved-list reorder per logged-in account; entitlement-aware B2B storefronts are production-ready on enterprise backbones.",
        roi: "Entitlement-aware ordering cuts rep-corrected orders and protects margin on the recurring base.",
        whatI95Does:
          "Entitlement and contract-aware ordering wired to the punchout and PIPELINE rails, without touching the SAP backbone.",
        credibility: "illustrative",
        source: SRC.millipore,
      },
      // THE BET
      {
        id: "agentic",
        pillar: "storefront",
        title: "Agentic-commerce readiness",
        problem:
          "The AI buyer is coming for research reagents, and a catalog that is not machine-readable and machine-purchasable is invisible to it.",
        caseName: "Gartner, Google AP2",
        caseDetail:
          "Gartner expects 90% of B2B purchases to be AI-intermediated by 2028; Google's AP2 protocol ships agentic purchasing with 60+ partners including Mastercard and PayPal.",
        roi: "Readiness is a low-cost option on the channel that defines 2027 and 2028, bought on the same structured data that wins AEO.",
        whatI95Does:
          "Make the catalog machine-purchasable for agents using AP2 and MCP, grounded in the new structured catalog data.",
        credibility: "illustrative",
        source: SRC.ap2,
      },
      {
        id: "discovery-launch",
        pillar: "storefront",
        title: "Discovery Solutions, structured from day one",
        problem:
          "The new digital-first Discovery Solutions BU launched January 2026, and it can be built answer-engine-native or it can repeat the old site's findability gap.",
        caseName: "Dawn Foods",
        caseDetail:
          "Dawn Foods re-platformed to composable commerce with AI search and grew online at triple-digit rates with 30% faster time-to-order; structured catalogs win the AI channel.",
        roi: "Building the structured pipeline into the new BU is cheaper than retrofitting it, and it carries the wedge into the growth surface.",
        whatI95Does:
          "Make Discovery Solutions answer-engine-native and machine-readable from launch, on the same schema pipeline as the wedge.",
        credibility: "illustrative",
        source: SRC.dawn,
      },
    ],
    why: {
      opener: "You'll be sold a platform that replaces the backbone Accenture and Capgemini already run. You do not need it.",
      body: "The platform pitch is a rebuild of the wrong layer. Your backbone is SAP and it works. Your opportunity is the channel: a 25-year catalog that wins on search but is not yet structured for the answer engines scientists are starting to ask. That is i95Dev's lane: deep in commerce, deep in catalog data and AI search, surgical, at mid-market economics. We structure the data you already own so ChatGPT, Perplexity and Google AI cite your products, and tune the search and content on top. We do not touch your ERP. We make your catalog the cited answer.",
      ctaTitle: "Book your AI-in-Commerce Diagnostic",
      ctaSubtitle:
        "A fixed-scope, fixed-fee assessment that validates these numbers against the Sigma-Aldrich catalog and its real answer-engine visibility. Two weeks, not a platform rebuild.",
      credibility: { brands: "500+ B2B brands", years: "25+ years", projects: "1,200+ projects" },
    },
  },
};
