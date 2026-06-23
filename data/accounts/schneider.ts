import type { AccountConfig } from "@/lib/types";

// Sources reused across the report (Verified vs. Illustrative labelled per-claim, spec section 14).
const SRC = {
  mit: { label: "MIT NANDA, ~95% of pilots", url: "https://nanda.media.mit.edu/" },
  schneider: { label: "Schneider Electric, breaker config ~90s vs 72h", url: "https://www.se.com/" },
  azure: { label: "Schneider Azure copilot, -50% engineering time (research dump Part 2.2)", url: "https://www.se.com/" },
  dawn: { label: "Dawn Foods AI search, triple-digit online growth, -30% time-to-order (DC360)", url: "https://commercetools.com/" },
  millipore: { label: "MilliporeSigma, approved-list reorder for technical buyers", url: "https://www.milliporesigma.com/" },
  salesforce: { label: "Salesforce CPQ economics, 15-30% of complex-B2B revenue lost", url: "https://www.salesforce.com/" },
  commercetools: { label: "commercetools B2B Intake Agent (Mirion)", url: "https://commercetools.com/" },
  jpw: { label: "JPW Industries, order processing 16-24h to under 1h", url: "https://www.salesforce.com/" },
  mckinsey: { label: "McKinsey, 2-6% gross-margin lift from AI-native B2B pricing", url: "https://www.mckinsey.com/" },
  stibo: { label: "Stibo, Gartner MDM Leader; Bio-Rad / Thermo Fisher enrichment", url: "https://www.stibosystems.com/" },
  search: { label: "Search-AI benchmarks, AI search converts ~1.67x keyword (research dump Part 3.2)", url: "https://nanda.media.mit.edu/" },
  referrals: { label: "AI referrals +357% YoY, ~31% higher conversion (AEO research, Part 3.5)", url: "https://www.similarweb.com/" },
  gartner: { label: "Gartner, 90% of B2B purchases AI-intermediated by 2028", url: "https://www.gartner.com/" },
} as const;

/**
 * Schneider Electric, an active-requirement account (buyer-named project, channel-scale portal,
 * Dynamics rail already in the building). Every section is grounded in the Account-360 profile and
 * the AI research dump, and maps 1:1 to companies/schneider/schneider-spec.md.
 *
 * Spine: Schneider does not need another transformation. It needs one contained project shipped. It
 * is a 40.2B EUR industrial leader whose buyer, Myca van Dijk (mySchneider Digital Product Leader,
 * NAM, 3/3 authority), came to the conference naming one thing: site search and personalization, to
 * the vendor level (Coveo and HawkSearch). mySchneider serves 40,000+ partners, a surface no Big-4
 * deck is scoped to fix in a quarter. The technical wedge is real: CPQ runs on Pierce Washington's
 * Combinum, which natively integrates Microsoft Dynamics 365 Sales (i95Dev's core), and Schneider
 * also runs D365 SCM. Ship the buyer's named project on the Combinum-to-Dynamics rails she already
 * runs, prove a number on 40,000 partners, then extend into guided selling and pricing. Guardrails:
 * do not pitch the broad transformation the SIs own (Deloitte, Accenture, Capgemini, Kyndryl), keep
 * the first project small and fundable, and do not displace the Dynamics backbone. Confirm live: the
 * se.com search vendor (Coveo vs HawkSearch), the DXP (Builder.io seen in markup), and the
 * Combinum-to-D365 integration in the NAM partner flow.
 */
export const schneider: AccountConfig = {
  slug: "schneider",
  companyName: "Schneider Electric",
  aliases: [
    "Schneider",
    "mySchneider",
    "EcoStruxure",
    "AVEVA",
    "Square D",
  ],
  domains: ["se.com"],
  vertical: "manufacturing",
  verticalLabel: "Energy management / industrial automation",
  revenueBand: "EUR 40.2B FY2025 (+9% organic)",
  role: "mySchneider Digital Product Leader, NAM",
  roleEmphasis: "ecommerce",
  activeRequirement: true,
  published: true,

  thesis: "You don't need a transformation. You need search and personalization shipped on mySchneider.",
  wedge:
    "Search and personalization for mySchneider, on the Combinum-to-Dynamics 365 rails you already run",
  wedgeDetail:
    "It runs on the partner data and the CPQ-to-Dynamics integration Schneider already owns, it is the buyer's literal ask (Coveo or HawkSearch plus personalization), it is a contained, fundable first project the big SIs are not built to scope, and it proves value on the 40,000-partner portal before any broader engagement. Prove it on mySchneider search and account-based personalization, then extend the same intelligent rails into guided selling and pricing.",

  // ── Module 1, The Reframe (above gate) ──
  reframe: {
    opener: "A transformation is a deck. The buyer asked for a search bar that works and a portal that knows the partner.",
    stat: "95%",
    statSource: SRC.mit,
    body: "95% of enterprise AI pilots return nothing to the P&L. They sit beside the work instead of inside it. Schneider's work, on the channel surface, is mySchneider: 40,000+ partners who need to find the right product and see the right price. The edge is not a broader transformation. It is shipping the search and personalization the buyer named, on the Combinum-to-Dynamics 365 rails you already run, so the win lands on the portal in a quarter, not a deck in a year.",
  },

  // ── Module 2, The Hype Filter (above gate) ──
  hypeFilter: {
    opener: "A transformation deck dresses up the org chart. A shipped project makes mySchneider search and price right, on rails the SIs cannot copy.",
    commodity: [
      "A chatbot bolted onto se.com",
      "Generic recs that ignore partner tier",
      "A EUR 100M transformation program deck",
      "Yet another platform displacing Dynamics",
    ],
    compounding: [
      "B2B semantic search tuned for partner intent",
      "Account-based personalization on mySchneider",
      "A contained, fundable mySchneider project, shipped",
      "Guided selling on the Combinum-to-D365 rail you own",
    ],
    pitchWarning:
      "You run Microsoft Dynamics 365, and Combinum already integrates it natively. Expect a pitch to wrap this in a multi-year transformation with a seven-figure discovery phase. Do not. The buyer named one project: search and personalization for mySchneider. Ship that first, on the rails you already own, and let the 40,000-partner portal prove a number before anyone scopes anything broader.",
  },

  // ── Module 2.5, Your Stack (confirmed in the Account 360; reconcile flagged items live) ──
  stackFlags: [
    {
      signal: "Combinum CPQ (native D365 Sales integration)",
      leadPlay: "Run guided selling and quoting on the Dynamics rail Combinum already integrates",
      commodityFlag: "A new CPQ platform. You own the rail; build on it.",
    },
    {
      signal: "Microsoft Dynamics 365 (Sales + SCM)",
      leadPlay: "Wire personalization and pricing to the backbone, not a parallel stack",
      commodityFlag: "A platform that displaces D365. Extend it, don't replace it.",
    },
    {
      signal: "mySchneider portal (40,000+ partners)",
      leadPlay: "Tune search and account-based personalization on the channel surface",
      commodityFlag: "A full portal re-platform. Ship search and personalization first.",
    },
    {
      signal: "Coveo / HawkSearch (the buyer's named ask)",
      leadPlay: "Tune semantic search for the spec and SKU queries partners type",
      commodityFlag: "A rip-and-replace search bolt-on. Tune the vendor she named.",
    },
    {
      signal: "Stibo PIM (integrator CGI)",
      leadPlay: "Ground search and recs in clean product data already governed in Stibo",
      commodityFlag: "\"Add AI copy.\" The PIM is the foundation; tune to it, don't bypass it.",
    },
  ],

  // ── Module 3, The Commodity-vs-Compounding Map (above gate) ──
  // Y: 0 commodity to 1 compounding · X: 0 foundation-required to 1 bolt-on-ready (wedge = top-right)
  mapPlays: [
    { id: "search-personalization", label: "Search + personalization (mySchneider)", compounding: 0.86, bolton: 0.78, magnitude: 5, lit: true, wedge: true },
    { id: "guided-selling", label: "Guided selling on Combinum-D365", compounding: 0.88, bolton: 0.6, magnitude: 5, lit: true },
    { id: "pricing-rgm", label: "Pricing / RGM enforcement", compounding: 0.9, bolton: 0.45, magnitude: 4, lit: true },
    { id: "account-entitlement", label: "Account entitlement + contract pricing", compounding: 0.82, bolton: 0.62, magnitude: 4, lit: true },
    { id: "semantic-search", label: "B2B semantic search (Coveo/HawkSearch)", compounding: 0.72, bolton: 0.8, magnitude: 4, lit: true },
    { id: "ai-pim", label: "AI PIM grounding (Stibo)", compounding: 0.8, bolton: 0.4, magnitude: 3, lit: true },
    { id: "agentic-intake", label: "Agentic bulk-order intake", compounding: 0.92, bolton: 0.42, magnitude: 3, lit: true },
    { id: "aeo", label: "AEO for spec content", compounding: 0.84, bolton: 0.62, magnitude: 3, lit: true },
    { id: "chatbot", label: "Generic chatbot", compounding: 0.14, bolton: 0.9, magnitude: 1, lit: false },
    { id: "ai-copy", label: "AI product copy", compounding: 0.12, bolton: 0.8, magnitude: 1, lit: false },
    { id: "transformation-deck", label: "\"Transformation\" program deck", compounding: 0.22, bolton: 0.18, magnitude: 1, lit: false },
  ],

  // ── Below the gate (payoff), never in the initial payload ──
  payoff: {
    headlineOpportunity: [15, 45],
    moneyPools: [
      {
        id: "search-personalization",
        label: "Search + personalization on mySchneider",
        range: [6, 18],
        note: "AI search converts about 1.67 times keyword, and account-based personalization can lift revenue meaningfully on a logged-in portal. mySchneider serves 40,000+ partners, so a relevance and personalization lift on the channel surface is the buyer's named project and the largest line in the model. On a partner portal this size, a few points of recovered conversion is real money on the channel that already carries orders.",
        credibility: "verified",
        source: SRC.search,
      },
      {
        id: "guided-selling",
        label: "Guided selling / CPQ acceleration (Combinum-D365)",
        range: [4, 13],
        note: "Schneider's own breaker configuration runs in roughly 90 seconds against a 72-hour manual quote, and Salesforce estimates 15 to 30% of complex-B2B revenue is lost to config errors and quote delays. Combinum already integrates Dynamics 365 Sales, so guided selling extends the rail Schneider runs rather than adding a platform. Faster, valid configuration closes more orders and protects margin where a 24-hour quote wins and a 72-hour quote loses.",
        credibility: "illustrative",
        source: SRC.schneider,
      },
      {
        id: "pricing-rgm",
        label: "Pricing / RGM enforcement",
        range: [3, 9],
        note: "Pricing is on Schneider's 6-12 month list, and McKinsey reports a 2 to 6% gross-margin lift from AI-native B2B pricing. The B2B win is enforcing what is already negotiated across the partner book, not consumer-style dynamic pricing. On a base this size, even a sliver of margin recovery on the channel is a near-pure drop-through to EBITA.",
        credibility: "illustrative",
        source: SRC.mckinsey,
      },
      {
        id: "agentic-readiness",
        label: "AI / agentic readiness on the portal",
        range: [2, 5],
        note: "Schneider's own Azure copilot with Microsoft cut engineering time roughly 50%, weeks to hours, so the appetite for real AI is proven. Turning partner bulk and quote requests into structured, validated orders is value now, and the same readiness keeps Schneider visible as Gartner expects 90% of B2B purchases to be AI-intermediated by 2028. The risk on the portal is not being behind, it is being invisible.",
        credibility: "illustrative",
        source: SRC.azure,
      },
    ],
    roadmap: [
      {
        phase: "Phase 1, starts now",
        title: "Search and personalization on mySchneider",
        body: "Tune semantic search (Coveo or HawkSearch, the buyer's named vendors) and stand up account-based personalization on the 40,000-partner portal, grounded in the Stibo product data. It runs on data you own and ships without waiting for anything broader. This is the wedge and the buyer's literal ask.",
        active: true,
      },
      {
        phase: "Phase 2, 3 to 6 months",
        title: "Guided selling on the Combinum-Dynamics rail",
        body: "Extend guided selling and quoting on the Combinum-to-Dynamics 365 Sales integration Schneider already runs, taking the breaker-config speed advantage across more of the catalog. The portal gets faster to quote; the rail you own does the work.",
      },
      {
        phase: "Phase 3, 6 to 12 months",
        title: "Pricing and RGM enforcement",
        body: "Stand up AI-native pricing enforcement across the partner book, on Schneider's stated 6 to 12 month Pricing interest, protecting margin on the channel rather than chasing consumer-style dynamic pricing.",
      },
      {
        phase: "Phase 4, the expansion and the bet",
        title: "Agentic intake and AEO",
        body: "Turn partner bulk and quote requests into structured, validated orders, and structure spec content so AI engines cite Schneider for the selection. Gartner expects 90% of B2B purchases to be AI-intermediated by 2028. The risk is being invisible, not being behind.",
      },
    ],
    // ── The play shortlist, the project, the rail, the margin, the bet ──
    plays: [
      // THE PROJECT
      {
        id: "search-personalization",
        pillar: "storefront",
        title: "Search and personalization for mySchneider",
        problem:
          "Partners on mySchneider need to find the right product fast and see the right price, and the buyer came to the conference naming Coveo and HawkSearch plus personalization as the priority.",
        caseName: "Dawn Foods",
        caseDetail:
          "Dawn Foods added AI search and behavioral recs on commercetools and grew online at triple-digit rates with 30% faster time-to-order; AI search converts about 1.67 times keyword.",
        roi: "On a 40,000-partner portal, a relevance and personalization lift is measured upside on the channel that already carries orders, and it is the largest pool in the model.",
        whatI95Does:
          "Tune the named search vendor for partner intent and stand up account-based personalization on mySchneider, grounded in Stibo product data.",
        credibility: "verified",
        source: SRC.dawn,
      },
      {
        id: "account-entitlement",
        pillar: "storefront",
        title: "Account-based personalization and entitlement",
        problem:
          "40,000+ partners order against tiers, contract pricing and roles, and a generic portal shows the wrong product or the wrong price, which costs trust and a rep call.",
        caseName: "MilliporeSigma",
        caseDetail:
          "MilliporeSigma renders approved-list reorder per logged-in account; entitlement-aware B2B storefronts are production-ready on Dynamics-class backbones.",
        roi: "Cutting rep-assisted and corrected orders protects margin and frees the channel team.",
        whatI95Does:
          "Entitlement, contract pricing and role-based personalization wired to the partner data and Dynamics 365.",
        credibility: "illustrative",
        source: SRC.millipore,
      },
      // THE RAIL
      {
        id: "guided-selling",
        pillar: "storefront",
        title: "Guided selling and conversational CPQ on Combinum-Dynamics",
        problem:
          "Configuring Schneider's products is complex, and a slow or invalid quote loses the order; the configurator already runs on Combinum, which natively integrates Dynamics 365 Sales.",
        caseName: "Schneider Electric",
        caseDetail:
          "Schneider's own breaker configures in roughly 90 seconds against a 72-hour manual quote; Salesforce estimates 15 to 30% of complex-B2B revenue is lost to config errors and quote delays.",
        roi: "Faster valid configuration closes more orders and protects margin, and a 24-hour quote wins where a 72-hour quote loses.",
        whatI95Does:
          "AI-guided configuration and quoting on the Combinum-to-Dynamics 365 rail Schneider already runs, valid by construction.",
        credibility: "illustrative",
        source: SRC.schneider,
      },
      {
        id: "agentic-intake",
        pillar: "storefront",
        title: "Agentic bulk-order intake on the portal",
        problem:
          "Schneider's largest partners place bulk and quote requests as emails, PDFs and spreadsheets, and the team rekeys them by hand.",
        caseName: "commercetools / Mirion, JPW Industries",
        caseDetail:
          "commercetools built a B2B intake agent for Mirion that turns exactly those documents into structured quotes; JPW Industries cut order processing from 16 to 24 hours to under one hour with AI order automation.",
        roi: "Structured intake removes manual rekeying and error on the channel's highest-volume partners.",
        whatI95Does:
          "An AI intake agent that turns bulk-order documents into validated, structured orders on the Dynamics rail.",
        credibility: "illustrative",
        source: SRC.commercetools,
      },
      // THE MARGIN
      {
        id: "pricing-rgm",
        pillar: "storefront",
        title: "AI pricing and RGM enforcement",
        problem:
          "Schneider sells across a huge partner book with tiers and contracts, and managing optimal price across the catalog manually leaks margin; Pricing is on the buyer's 6 to 12 month list.",
        caseName: "McKinsey distributor",
        caseDetail:
          "McKinsey reports a $15B distributor lifted margin 200bps across 1.5M SKUs, then another 50bps with agentic AI in 10 weeks; McKinsey cites a 2 to 6% gross-margin lift from AI-native B2B pricing.",
        roi: "Even a sliver of margin recovery on a base this size is near-pure drop-through to the 18.7% EBITA line.",
        whatI95Does:
          "AI pricing enforcement on the partner book, contract-compliance and margin floors wired to Dynamics, not consumer-style dynamic pricing.",
        credibility: "illustrative",
        source: SRC.mckinsey,
      },
      {
        id: "ai-pim",
        pillar: "foundation",
        title: "AI PIM grounding on Stibo",
        problem:
          "Search, recs and the answer engines all run on product data, and dirty attributes make the AI confidently wrong; Schneider's PIM is Stibo, integrated by CGI.",
        caseName: "Stibo, Bio-Rad / Thermo Fisher",
        caseDetail:
          "Stibo is a Gartner MDM Leader; Bio-Rad and Thermo Fisher enrich regulated catalogs from source documents with human-in-the-loop.",
        roi: "Clean product data gates the search, the personalization and the agentic intake. The cheapest insurance on the portfolio.",
        whatI95Does:
          "AI enrichment and attribute standardization grounded in the Stibo PIM, human-in-the-loop, so every downstream play stands on clean data.",
        credibility: "illustrative",
        source: SRC.stibo,
      },
      // THE BET
      {
        id: "aeo",
        pillar: "sales-marketing",
        title: "B2B semantic search and AEO",
        problem:
          "Partners search by spec, SKU and application, and increasingly start in an AI assistant, so if search is not tuned or the answer engine cites a competitor, the order is lost before se.com loads.",
        caseName: "Search-AI benchmarks",
        caseDetail:
          "AI search converts about 1.67 times keyword; AI referrals grew 357% year on year and convert about 31% higher than organic, and almost no industrial seller has structured for it.",
        roi: "On a catalog this technical, relevance and citation are measured upside on the channel that already carries orders.",
        whatI95Does:
          "Tune Coveo or HawkSearch for spec and SKU intent, and structure spec content so AI engines cite Schneider for the selection.",
        credibility: "verified",
        source: SRC.referrals,
      },
      {
        id: "agentic-commerce",
        pillar: "sales-marketing",
        title: "Agentic-commerce readiness",
        problem:
          "The AI buyer is coming for industrial components, and a catalog that is not machine-readable and machine-purchasable is invisible to it.",
        caseName: "Gartner, Google AP2 / OpenAI Instant Checkout",
        caseDetail:
          "Gartner expects 90% of B2B purchases to be AI-intermediated by 2028; Google's AP2 protocol and OpenAI Instant Checkout already ship agentic purchasing in consumer commerce.",
        roi: "Readiness is a low-cost option on the channel that defines 2027 and 2028, bought now on a foundation you are already building.",
        whatI95Does:
          "Make the mySchneider catalog machine-purchasable for agents using AP2 and MCP, grounded in the Stibo data and Dynamics rail.",
        credibility: "illustrative",
        source: SRC.gartner,
      },
    ],
    why: {
      opener: "You'll be sold a multi-year transformation by a firm built to scope multi-year transformations. The buyer asked for one project.",
      body: "The Big-4 and the global SIs own Schneider's broad program, and they are very good at it. They are not built to ship one contained, fundable project on the rails you already run. That is i95Dev's lane: deep in Dynamics 365, deep in commerce, surgical, at mid-market economics. Your buyer named search and personalization for mySchneider, your CPQ already integrates Dynamics 365 Sales through Combinum, and your partner data is already in the house. We ship the project the buyer asked for, on the rails you own, and prove a number on 40,000 partners before anyone scopes anything broader. We do not pitch the transformation. We ship the win that funds it.",
      ctaTitle: "Book your AI-in-Commerce Diagnostic",
      ctaSubtitle:
        "A fixed-scope, fixed-fee assessment that validates these numbers against mySchneider's real partner, catalog and Dynamics data. Two weeks, not a transformation program.",
      credibility: { brands: "500+ B2B brands", years: "25+ years", projects: "1,200+ projects" },
    },
  },
};
