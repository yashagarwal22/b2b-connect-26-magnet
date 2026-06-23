import type { AccountConfig } from "@/lib/types";

// Sources reused across the report (Verified vs. Illustrative labelled per-claim, spec section 14).
const SRC = {
  mit: { label: "MIT NANDA, ~95% of pilots", url: "https://nanda.media.mit.edu/" },
  account360: { label: "IDT / Account 360", url: "https://www.idtdna.com/" },
  salesforce: { label: "Salesforce CPQ economics; Forrester TEI on guided selling", url: "https://www.salesforce.com/" },
  schneider: { label: "Schneider Electric, guided config 72h to ~90s", url: "https://www.se.com/" },
  millipore: { label: "MilliporeSigma, account-based reorder for technical buyers", url: "https://www.milliporesigma.com/" },
  catalog: { label: "B2B catalog attribute benchmarks; AEO research, Part 3.5", url: "https://www.idtdna.com/" },
  commercetools: { label: "commercetools B2B Intake Agent (Mirion)", url: "https://commercetools.com/" },
  gartner: { label: "Gartner, 90% of B2B purchases AI-intermediated by 2028", url: "https://www.gartner.com/" },
  watsco: { label: "Watsco AI recommendations, AOV +10% (DC360)", url: "https://www.watsco.com/" },
  jci: { label: "Johnson Controls, $40M from 23 accounts (Beyond the Arc)", url: "https://www.johnsoncontrols.com/" },
  dawn: { label: "Dawn Foods, composable re-platform, triple-digit online growth (commercetools)", url: "https://commercetools.com/" },
  mkm: { label: "MKM, revenue +82% on headless B2B (BigCommerce)", url: "https://www.bigcommerce.com/" },
  stibo: { label: "Stibo / Informatica, Gartner MDM Leaders", url: "https://www.stibosystems.com/" },
  searchAi: { label: "Search-AI benchmarks; AEO research, Part 3.5", url: "https://www.idtdna.com/" },
  jpw: { label: "JPW Industries, order processing 16–24h to under 1h (Salesforce)", url: "https://www.salesforce.com/" },
  ap2: { label: "Google AP2 / OpenAI Instant Checkout", url: "https://cloud.google.com/" },
} as const;

/**
 * Integrated DNA Technologies (IDT), a Danaher company, written to an active, budgeted buyer (VP,
 * Digital Transformation, Abhijit Shah). Every section is grounded in the Account 360 (Jun 2026) and
 * the B2B Connect 2026 AI research dump, and maps 1:1 to companies/idt/idt-spec.md.
 *
 * Spine: IDT does not sell a catalog, it sells a specification. Every order is a custom-synthesized
 * molecule configured by one of 82,000 scientists, and that configuration step is exactly where IDT's
 * commerce is weakest, a 20-year-old ASP.NET / Sitefinity monolith with no PIM, no CPQ and no payment
 * gateway, while the Coralville factory triples synthesis capacity and enters regulated IVD. The fix is
 * already in the house: Microsoft Dynamics 365 (ERP + CRM) on Azure, an award-winning backbone. Run
 * AI-guided configuration and quoting on the D365 rails IDT already owns, prove it on the top oligo
 * line, then extend across gene fragments, NGS kits and IVD. Guardrails: this is a backbone-led
 * modernization, not a backbone replacement. Keep D365 as the system of record and the rail. Do not
 * cite a hard standalone revenue number (undisclosed). Do not name the circling competitors on the page.
 */
export const idt: AccountConfig = {
  slug: "idt",
  companyName: "Integrated DNA Technologies",
  aliases: ["IDT", "Integrated DNA Technologies", "IDT DNA", "Danaher"],
  domains: ["idtdna.com"],
  vertical: "life-sciences",
  verticalLabel: "Life-sciences / custom genomics manufacturing",
  revenueBand: "$300–500M",
  role: "VP, Digital Transformation",
  roleEmphasis: "ecommerce",
  activeRequirement: true,
  published: true,

  thesis: "Your factory is tripling. Make the order-entry as intelligent as the molecules it builds.",
  wedge:
    "AI-guided configuration and quoting for custom synthesis, on your D365 backbone",
  wedgeDetail:
    "It runs on the Dynamics 365 data and the ordering relationships IDT already owns, it solves the exact pain a scientist feels designing a complex custom order, and it answers Grace Lean's one-word ask, CPQ, on the highest-volume custom product before any full re-platform. Prove it on the top oligo line, then extend the same intelligent order rails across gene fragments, NGS kits and the new IVD catalog.",

  // ── Module 1, The Reframe (above gate) ──
  reframe: {
    opener: "A chatbot on the homepage is a demo. The scientist wants the configured order to be right, and fast.",
    stat: "95%",
    statSource: SRC.mit,
    body: "95% of enterprise AI pilots return nothing to the P&L. They sit beside the work instead of inside it. IDT's work is the configured order: a sequence, a modification, a purification, a scale, built to order for 82,000 scientists. The edge is not a smarter homepage. It is making that configuration intelligent on the Dynamics 365 backbone you already run and already won an award for, so the order-entry can finally scale with the factory you are tripling at Coralville.",
  },

  // ── Module 2, The Hype Filter (above gate) ──
  hypeFilter: {
    opener: "Commodity AI dresses up the website. Compounding AI makes the configured order right, on rails competitors cannot copy.",
    commodity: [
      "A chatbot bolted onto idtdna.com",
      "Generic recs that ignore approved lists",
      "AI-written product copy at scale",
      "An \"AI strategy\" deck, not shipped CPQ",
    ],
    compounding: [
      "AI-guided configuration for custom synthesis",
      "Account-based entitlement on your punchout rails",
      "A real PIM that grounds every configured order",
      "Intelligent order intake wired to Dynamics 365",
    ],
    pitchWarning:
      "You run Dynamics 365 well enough to win an award for it. Expect a pitch to rip up the backbone for a fashionable new platform. Do not. The molecule is configured here and the order belongs here. Re-platform the storefront onto the D365 rails you own, and fill the missing PIM, CPQ, payments and OMS. Modernize the order-entry, not the system of record.",
  },

  // ── Module 2.5, Your Stack (confirmed in the Account 360; reconcile flagged items live) ──
  stackFlags: [
    {
      signal: "Microsoft Dynamics 365 (ERP + CRM)",
      leadPlay: "Run intelligent CPQ and order intake on the backbone you already won an award for",
      commodityFlag: "A new platform that displaces D365. You own the rail; build on it.",
    },
    {
      signal: "Custom ASP.NET + Sitefinity storefront",
      leadPlay: "Re-platform to headless commerce that rides D365, not a 20-year-old monolith",
      commodityFlag: "A lift-and-shift that keeps the monolith's limits. Re-platform the order-entry.",
    },
    {
      signal: "No PIM detected",
      leadPlay: "Stand up a real PIM so every configured order grounds in clean product data",
      commodityFlag: "\"Add AI copy.\" Clean attributes first; the AI is confidently wrong without them.",
    },
    {
      signal: "Coveo site search",
      leadPlay: "Tune semantic search for spec and sequence queries scientists actually type",
      commodityFlag: "A rip-and-replace search bolt-on. You have Coveo; tune it for the catalog.",
    },
    {
      signal: "Punchout to Coupa, Ariba, Jaggaer",
      leadPlay: "Enforce account entitlement and contract terms inside the configured order",
      commodityFlag: "A generic checkout. The 82,000 accounts need entitlement-aware ordering.",
    },
  ],

  // ── Module 3, The Commodity-vs-Compounding Map (above gate) ──
  // Y: 0 commodity to 1 compounding · X: 0 foundation-required to 1 bolt-on-ready (wedge = top-right)
  mapPlays: [
    { id: "cpq", label: "AI-guided CPQ / configuration", compounding: 0.9, bolton: 0.72, magnitude: 5, lit: true, wedge: true },
    { id: "entitlement-pay", label: "Account entitlement + payments", compounding: 0.82, bolton: 0.65, magnitude: 4, lit: true },
    { id: "headless", label: "Headless re-platform on D365", compounding: 0.8, bolton: 0.45, magnitude: 5, lit: true },
    { id: "pim", label: "AI PIM foundation", compounding: 0.85, bolton: 0.35, magnitude: 4, lit: true },
    { id: "search", label: "B2B semantic search (Coveo)", compounding: 0.7, bolton: 0.78, magnitude: 3, lit: true },
    { id: "agentic-intake", label: "Agentic bulk-order intake", compounding: 0.92, bolton: 0.4, magnitude: 4, lit: true },
    { id: "aeo", label: "AEO for spec and protocol content", compounding: 0.88, bolton: 0.62, magnitude: 3, lit: true },
    { id: "reorder-nba", label: "Reorder + cross-sell NBA", compounding: 0.78, bolton: 0.55, magnitude: 3, lit: true },
    { id: "chatbot", label: "Generic chatbot", compounding: 0.14, bolton: 0.9, magnitude: 1, lit: false },
    { id: "ai-copy", label: "AI product copy", compounding: 0.12, bolton: 0.8, magnitude: 1, lit: false },
    { id: "ai-deck", label: "\"AI strategy\" deck", compounding: 0.2, bolton: 0.3, magnitude: 1, lit: false },
  ],

  // ── Below the gate (payoff), never in the initial payload ──
  payoff: {
    headlineOpportunity: [9, 28],
    moneyPools: [
      {
        id: "configurator",
        label: "The configurator: guided CPQ on custom synthesis",
        range: [4, 12],
        note: "Every IDT order is a configuration, and Salesforce estimates 15 to 30% of revenue is lost to configuration errors and quote delays in complex B2B. Faster, valid configuration closes more orders and protects margin, and a 24-hour quote wins where a 72-hour quote loses. On the highest-volume custom line, a few points of recovered conversion and margin is the largest line in the model.",
        credibility: "illustrative",
        source: SRC.salesforce,
      },
      {
        id: "order-rails",
        label: "The order rails: entitlement, payments, reorder",
        range: [2, 7],
        note: "82,000 accounts order against approved lists, contract terms and punchout to Coupa, Ariba and Jaggaer, yet the storefront has no modern payment gateway and limited account logic. MilliporeSigma runs approved-list reorder for exactly this base. Entitlement-aware ordering and one-click reorder cut friction on recurring scientific purchasing, where the same labs buy the same reagents again and again.",
        credibility: "illustrative",
        source: SRC.millipore,
      },
      {
        id: "foundation",
        label: "The foundation: PIM + search + AEO findability",
        range: [2, 6],
        note: "30 to 60% of B2B catalogs carry incomplete attributes, and IDT has no PIM detected, so the configurator, the search and the answer engines all run on data that is not ready. Clean product data plus tuned Coveo search plus structured spec content is the foundation every other play stands on, and it is also how scientists find IDT when they start in an AI assistant.",
        credibility: "verified",
        source: SRC.catalog,
      },
      {
        id: "agentic",
        label: "Agentic readiness: bulk-order intake + AI buyers",
        range: [1, 3],
        note: "commercetools built a B2B intake agent for Mirion that turns emails, PDFs and spreadsheets into structured quotes. IDT's largest accounts still place bulk and plate orders the same messy way. Turning that intake into structured, validated orders is real value now, and it is the same readiness that keeps IDT visible as Gartner expects 90% of B2B purchases to be AI-intermediated by 2028.",
        credibility: "illustrative",
        source: SRC.commercetools,
      },
    ],
    roadmap: [
      {
        phase: "Phase 1, starts now",
        title: "AI-guided CPQ on the top custom line",
        body: "Stand up guided configuration and quoting for the highest-volume custom product on the D365 backbone, answering Grace Lean's CPQ ask and proving the model on real orders. It runs on data you own and ships without waiting for the full re-platform. This is the wedge.",
        active: true,
      },
      {
        phase: "Phase 2, 3 to 6 months",
        title: "PIM foundation and account rails",
        body: "Stand up a real PIM so every configured order grounds in clean data, and wire account entitlement and a modern payment gateway onto the punchout rails the 82,000 accounts already use. The configurator gets trustworthy; the order rails get modern.",
      },
      {
        phase: "Phase 3, 6 to 12 months",
        title: "Headless re-platform and reorder",
        body: "Re-platform the Sitefinity monolith to headless commerce on D365, and turn on one-click reorder and cross-sell across the account base, so recurring scientific purchasing gets faster every cycle.",
      },
      {
        phase: "Phase 4, the spine and the bet",
        title: "Agentic intake and AEO",
        body: "Turn bulk and plate orders from emails, PDFs and spreadsheets into structured, validated orders, and structure spec and protocol content so AI engines cite IDT for the design. Gartner expects 90% of B2B purchases to be AI-intermediated by 2028. The risk is being invisible, not being behind.",
      },
    ],
    // ── The play shortlist, grouped by where the value sits: configurator, rails, foundation, bet ──
    plays: [
      // THE CONFIGURATOR
      {
        id: "cpq",
        pillar: "storefront",
        title: "AI-guided configuration and quoting (CPQ) for custom synthesis",
        problem:
          "Every IDT order is a specification, and a complex custom configuration is where the scientist either completes a valid order fast or abandons it. CPQ is the one word Grace Lean came to the conference for.",
        caseName: "Schneider Electric, Forrester",
        caseDetail:
          "Schneider Electric configures a breaker in roughly 90 seconds against a 72-hour manual quote; Forrester TEI on guided selling shows material quote-cycle and margin gains.",
        roi: "Salesforce estimates 15 to 30% of complex-B2B revenue is lost to config errors and quote delays; recovering a slice on the top line is the largest pool in the model.",
        whatI95Does:
          "AI-guided configuration and quoting on the D365 backbone, valid by construction, starting on one custom product line.",
        credibility: "illustrative",
        source: SRC.schneider,
      },
      {
        id: "reorder-nba",
        pillar: "storefront",
        title: "Reorder and cross-sell next-best-action",
        problem:
          "The same labs buy the same reagents on a cycle, but reorder and adjacent-product prompts stay manual on a 20-year-old storefront.",
        caseName: "Watsco, Johnson Controls",
        caseDetail:
          "Watsco's AI recommendations lifted average order value 10%; Johnson Controls whitespace models unlocked $40M from 23 accounts.",
        roi: "Growing a known account is cheaper and higher-converting than winning a new lab.",
        whatI95Does:
          "One-click reorder and next-best-action on D365 order history, surfaced in the scientist's account and to the sales team.",
        credibility: "verified",
        source: SRC.watsco,
      },
      // THE ORDER RAILS
      {
        id: "entitlement-pay",
        pillar: "storefront",
        title: "Account entitlement and modern payments",
        problem:
          "82,000 accounts order against approved lists, contracts and punchout to Coupa, Ariba and Jaggaer, but the storefront lacks a modern payment gateway and deep account logic, so the wrong price or an unapprovable item is one click away.",
        caseName: "MilliporeSigma",
        caseDetail:
          "MilliporeSigma renders approved-list reorder per logged-in account; entitlement-aware B2B storefronts are production-ready on D365-class backbones.",
        roi: "Cutting rep-assisted and corrected orders protects margin and frees the team the factory ramp will stretch.",
        whatI95Does:
          "Entitlement, contract pricing and a modern payment gateway wired to the punchout rails and D365.",
        credibility: "illustrative",
        source: SRC.millipore,
      },
      {
        id: "headless",
        pillar: "storefront",
        title: "Headless re-platform on the D365 backbone",
        problem:
          "The custom ASP.NET and Sitefinity monolith is being asked to carry 3x the synthesis volume and a new IVD compliance bar on architecture two decades old.",
        caseName: "Dawn Foods, MKM",
        caseDetail:
          "Dawn Foods re-platformed to composable commerce and grew online at triple-digit rates with 30% faster time-to-order; MKM lifted revenue 82% on a headless B2B build.",
        roi: "A modern, headless order-entry that rides D365 scales with the factory instead of throttling it.",
        whatI95Does:
          "A headless commerce re-platform on the Dynamics 365 backbone, keeping the system of record and replacing the monolith.",
        credibility: "verified",
        source: SRC.dawn,
      },
      // THE FOUNDATION
      {
        id: "pim",
        pillar: "foundation",
        title: "AI PIM foundation",
        problem:
          "30 to 60% of B2B catalogs have incomplete attributes, IDT has no PIM detected, and a configurator or an answer engine on dirty data is confidently wrong, which is unacceptable for regulated reagents and IVD.",
        caseName: "Bio-Rad / Thermo Fisher, Stibo / Informatica",
        caseDetail:
          "Bio-Rad and Thermo Fisher enrich regulated catalogs from source documents; Stibo and Informatica are Gartner MDM Leaders, and inriver and Akeneo ship agentic enrichment.",
        roi: "Clean product data gates the configurator, the search, the AEO and the agentic intake. The cheapest insurance on the portfolio.",
        whatI95Does:
          "A real PIM with human-in-the-loop enrichment, standardizing attributes and modifications across the custom catalog.",
        credibility: "illustrative",
        source: SRC.stibo,
      },
      {
        id: "search-aeo",
        pillar: "sales-marketing",
        title: "B2B semantic search and AEO",
        problem:
          "Scientists search by sequence, modification and application, and increasingly start in an AI assistant. If Coveo is not tuned for spec queries, or the answer engine cites a competitor, the order is lost before idtdna.com loads.",
        caseName: "Search-AI benchmarks, AEO research",
        caseDetail:
          "AI search converts about 1.67 times keyword; AI referrals grew 357% year on year and convert about 31% higher than organic, and almost no life-science seller has structured for it.",
        roi: "On a catalog this technical, relevance and citation are measured upside on the channel that already carries orders.",
        whatI95Does:
          "Tune Coveo for spec and sequence intent, and structure protocol and spec content so AI engines cite IDT for the design.",
        credibility: "verified",
        source: SRC.searchAi,
      },
      // THE BET
      {
        id: "agentic-intake",
        pillar: "storefront",
        title: "Agentic bulk-order intake",
        problem:
          "IDT's largest accounts place bulk and plate orders as emails, PDFs and spreadsheets, and the team rekeys them by hand.",
        caseName: "commercetools / Mirion, JPW Industries",
        caseDetail:
          "commercetools built a B2B intake agent for Mirion that turns exactly those documents into structured quotes; JPW Industries cut order processing from 16 to 24 hours to under one hour with AI order automation.",
        roi: "Structured intake removes manual rekeying and error exactly as the factory volume triples.",
        whatI95Does:
          "An AI intake agent that turns bulk-order documents into validated, structured orders on the D365 rails.",
        credibility: "illustrative",
        source: SRC.commercetools,
      },
      {
        id: "agentic-readiness",
        pillar: "storefront",
        title: "Agentic-commerce readiness",
        problem:
          "The AI buyer is coming for research reagents, and a catalog that is not machine-readable and machine-purchasable is invisible to it.",
        caseName: "Gartner, Google AP2, OpenAI Instant Checkout",
        caseDetail:
          "Gartner expects 90% of B2B purchases to be AI-intermediated by 2028; Google's AP2 protocol and OpenAI Instant Checkout already ship agentic purchasing in consumer commerce.",
        roi: "Readiness is a low-cost option on the channel that defines 2027 and 2028, bought now on a foundation you are already building.",
        whatI95Does:
          "Make the catalog machine-purchasable for agents using AP2 and MCP, grounded in the new PIM and D365 data.",
        credibility: "illustrative",
        source: SRC.ap2,
      },
    ],
    why: {
      opener: "You'll be sold a platform that replaces the backbone you won an award for. You do not need it.",
      body: "The platform pitch is a rebuild of the wrong layer. Your backbone is Dynamics 365 and it works. Your problem is the order-entry: a 20-year-old configurator with no PIM, no CPQ and no payment gateway, asked to carry a factory you are tripling. That is i95Dev's lane: deep in Dynamics 365, deep in commerce, surgical, at mid-market economics. We re-platform the storefront onto the D365 rails you already own and fill the missing organs, so the configured order finally scales with the factory. We do not migrate your ERP. We make it sell.",
      ctaTitle: "Book your AI-in-Commerce Diagnostic",
      ctaSubtitle:
        "A fixed-scope, fixed-fee assessment that validates these numbers against IDT's real catalog, order and D365 data. Two weeks, not a platform rebuild.",
      credibility: { brands: "500+ B2B brands", years: "25+ years", projects: "1,200+ projects" },
    },
  },
};
