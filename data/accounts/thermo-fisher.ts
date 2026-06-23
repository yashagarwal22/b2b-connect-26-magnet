import type { AccountConfig } from "@/lib/types";

// Sources reused across the report (Verified vs. Illustrative labelled per-claim, spec section 14).
const SRC = {
  mit: { label: "MIT NANDA, ~95% of pilots", url: "https://nanda.media.mit.edu/" },
  sonepar: { label: "Sonepar, 7 agents and digital sales $13.9B +50% YoY (DC360)", url: "https://www.sonepar.com/" },
  usfoods: { label: "US Foods, 90% of customers on one platform with AI ordering (DC360)", url: "https://www.usfoods.com/" },
  watts: { label: "Watts Water, cited by Perplexity over rivals", url: "https://www.watts.com/" },
  referrals: { label: "AI referrals +357% YoY, ~31% higher conversion (AEO research, Part 3.5)", url: "https://www.similarweb.com/" },
  grainger: { label: "Grainger, RAG over 2.5M SKUs (Databricks / DC360)", url: "https://www.grainger.com/" },
  searchAi: { label: "AI search converts ~1.67x keyword (search-AI benchmarks)", url: "https://www.databricks.com/" },
  watsco: { label: "Watsco, AI recommendations AOV +10% (Adobe / DC360)", url: "https://www.watsco.com/" },
  jci: { label: "Johnson Controls, $40M from 23 accounts (Beyond the Arc)", url: "https://www.johnsoncontrols.com/" },
  millipore: { label: "MilliporeSigma, approved-list reorder per account", url: "https://www.milliporesigma.com/" },
  dawn: { label: "Dawn Foods, composable re-platform, triple-digit online growth (commercetools / DC360)", url: "https://www.dawnfoods.com/" },
  mkm: { label: "MKM, revenue +82% on headless B2B (BigCommerce / BusinessWire)", url: "https://www.mkmbs.co.uk/" },
  stibo: { label: "Stibo / Informatica, Gartner MDM Leaders", url: "https://www.stibosystems.com/" },
  commercetools: { label: "commercetools B2B Intake Agent (Mirion)", url: "https://commercetools.com/" },
  gartner: { label: "Gartner, 90% of B2B purchases AI-intermediated by 2028", url: "https://www.gartner.com/" },
  ap2: { label: "Google AP2 / OpenAI Instant Checkout announcements", url: "https://cloud.google.com/" },
} as const;

/**
 * Thermo Fisher Scientific (NYSE: TMO), an active, budgeted eCommerce account. Every section is
 * grounded in the Account-360 profile and the AI research dump, and maps 1:1 to
 * companies/thermo-fisher/thermo-fisher-spec.md.
 *
 * Spine: Thermo Fisher does not have a storefront problem. It has a buying experience splintered
 * across five-plus procurement networks. A scientist reaches the 1M+ SKU catalog through the Adobe
 * AEM storefront or through Coupa, Ariba, Jaggaer, Oracle, cc-Hubwoo or Science Warehouse, six front
 * doors that do not talk to each other, at the moment Gartner expects 90% of B2B purchases to be
 * AI-intermediated by 2028. The moat is 25 years of life-science technical content, 1M SKUs, and the
 * punchout relationships only Thermo Fisher owns. AI's role is consolidating the buying experience and
 * making Thermo Fisher the cited answer, not a chatbot. Write to a senior digital / eCommerce leader,
 * champion Lara Silver (Director, Global Marketing), with technical validation via the CIO org (Ryan
 * Snyder). Guardrails: keep Adobe AEM as the storefront and Oracle Cloud EPM plus MS Dynamics CRM as
 * the back office, integrate and consolidate, do not re-platform or replace the ERP. eCommerce share
 * is undisclosed, so the dollar model is directional and conservative.
 */
export const thermoFisher: AccountConfig = {
  slug: "thermo-fisher",
  companyName: "Thermo Fisher Scientific",
  aliases: [
    "Thermo Fisher",
    "Thermo Fisher Scientific Inc.",
    "TMO",
    "Fisher Scientific",
    "PPD",
    "Clario",
  ],
  domains: ["thermofisher.com"],
  vertical: "life-sciences",
  verticalLabel: "Life-sciences tools & services / biotech & medical devices",
  revenueBand: "$1B+",
  role: "Senior digital / eCommerce leader",
  roleEmphasis: "ecommerce",
  activeRequirement: true,
  published: true,

  thesis: "Your catalog is the best in life science. Your customer reaches it through six different doors.",
  wedge:
    "Marketplace and punchout consolidation, plus AEO, on the AEM storefront you already run",
  wedgeDetail:
    "It runs on the 1M-SKU catalog and the punchout relationships Thermo Fisher already owns, it answers the Now priority (Marketplace Management) and the verbatim Ariba, Jaggaer and Salesforce ask, and it offsets tariff and FX margin pressure by removing procurement friction. Prove it on one or two networks before the full consolidation. AEO is the compounding companion: structure the 25-year technical content so AI engines cite Thermo Fisher when a scientist researches suppliers inside an AI assistant.",

  // ── Module 1, The Reframe (above gate) ──
  reframe: {
    opener: "A chatbot on thermofisher.com is a demo. The scientist wants to find the right reagent and order it without bouncing between six procurement systems.",
    stat: "95%",
    statSource: SRC.mit,
    body: "95% of enterprise AI pilots return nothing to the P&L. They sit beside the work instead of inside it. Thermo Fisher's work is the order: 1M+ SKUs reached through Coupa, Ariba, Jaggaer, Oracle, cc-Hubwoo and Science Warehouse, or the AEM storefront, six doors that do not share a buying experience. The edge is not a smarter homepage. It is consolidating that experience on the AEM storefront you already run, and structuring 25 years of technical content so AI engines cite Thermo Fisher when a scientist researches a supplier, so the catalog and the customer finally meet at the right door.",
  },

  // ── Module 2, The Hype Filter (above gate) ──
  hypeFilter: {
    opener: "Commodity AI dresses up the website. Compounding AI consolidates the buying experience, on rails competitors cannot copy.",
    commodity: [
      "A chatbot bolted onto thermofisher.com",
      "Generic recs that ignore contract terms",
      "AI-written product copy at scale",
      "An \"AI strategy\" deck, not a unified checkout",
    ],
    compounding: [
      "Marketplace and punchout consolidation across 5+ networks",
      "Account-based personalization on your punchout rails",
      "AEO that makes you the cited answer in AI search",
      "A PIM that grounds 1M SKUs across every door",
    ],
    pitchWarning:
      "Your storefront is Adobe AEM and your back office is Oracle EPM and Dynamics CRM. Expect a pitch to rip up the storefront for a fashionable new commerce platform. Do not. The catalog lives here and the punchout relationships belong here. Consolidate the marketplace experience on the AEM storefront you own, and structure the content for AI search. Integrate and consolidate, do not re-platform.",
  },

  // ── Module 2.5, Your Stack (confirmed from the Account 360; verify flagged items live) ──
  stackFlags: [
    {
      signal: "Adobe AEM storefront (Akamai, AWS, APISIX)",
      leadPlay: "Consolidate the marketplace experience on the AEM storefront you already run",
      commodityFlag: "A re-platform to a new commerce stack. You own AEM; build on it.",
    },
    {
      signal: "Punchout to Coupa, Ariba, Jaggaer, Oracle, cc-Hubwoo, Science Warehouse",
      leadPlay: "Unify five-plus procurement networks into one coherent buying experience",
      commodityFlag: "A generic checkout. The buyer named these exact networks; consolidate them.",
    },
    {
      signal: "25 years of technical content, no AEO detected",
      leadPlay: "Structure spec and protocol content so AI engines cite Thermo Fisher",
      commodityFlag: "\"Add AI copy.\" Structure the content you own; the citation is the asset.",
    },
    {
      signal: "Demandbase ABM + site personalization",
      leadPlay: "Render contract pricing and approved SKUs per logged-in account",
      commodityFlag: "A rip-and-replace personalization bolt-on. You have Demandbase; wire it to the catalog.",
    },
    {
      signal: "Oracle Cloud EPM + MS Dynamics CRM (back office)",
      leadPlay: "Integrate the buying experience to the back office you already run",
      commodityFlag: "A new ERP or CRM that displaces the system of record. Integrate, do not replace.",
    },
  ],

  // ── Module 3, The Commodity-vs-Compounding Map (above gate) ──
  // Y: 0 commodity to 1 compounding · X: 0 foundation-required to 1 bolt-on-ready (wedge = top-right)
  mapPlays: [
    { id: "marketplace-consolidation", label: "Marketplace + punchout consolidation", compounding: 0.9, bolton: 0.7, magnitude: 5, lit: true, wedge: true },
    { id: "aeo", label: "AEO for spec and protocol content", compounding: 0.88, bolton: 0.66, magnitude: 4, lit: true },
    { id: "account-personalization", label: "Account personalization + entitlement", compounding: 0.82, bolton: 0.62, magnitude: 4, lit: true },
    { id: "headless", label: "Headless re-platform on AEM", compounding: 0.78, bolton: 0.42, magnitude: 4, lit: true },
    { id: "pim", label: "AI PIM foundation", compounding: 0.85, bolton: 0.34, magnitude: 4, lit: true },
    { id: "semantic-search", label: "B2B semantic search", compounding: 0.7, bolton: 0.74, magnitude: 3, lit: true },
    { id: "agentic-intake", label: "Agentic bulk-order intake", compounding: 0.92, bolton: 0.4, magnitude: 3, lit: true },
    { id: "reorder-nba", label: "Reorder + cross-sell NBA", compounding: 0.76, bolton: 0.55, magnitude: 3, lit: true },
    { id: "chatbot", label: "Generic chatbot", compounding: 0.14, bolton: 0.9, magnitude: 1, lit: false },
    { id: "ai-copy", label: "AI product copy", compounding: 0.12, bolton: 0.8, magnitude: 1, lit: false },
    { id: "strategy-deck", label: "\"AI strategy\" deck", compounding: 0.2, bolton: 0.3, magnitude: 1, lit: false },
  ],

  // ── Below the gate (payoff), never in the initial payload ──
  payoff: {
    headlineOpportunity: [24, 70],
    moneyPools: [
      {
        id: "marketplace-consolidation",
        label: "Marketplace and punchout consolidation",
        range: [10, 28],
        note: "Thermo Fisher routes 1M+ SKUs through Coupa, Ariba, Jaggaer, Oracle, cc-Hubwoo and Science Warehouse, and the buying experience differs at every door. Sonepar put seven AI agents into production and grew digital sales to $13.9B, up 50% year on year, by making one coherent experience across channels. Consolidating the procurement networks into one buying experience removes the friction that costs orders and quietly drags margin under tariff and FX pressure.",
        credibility: "verified",
        source: SRC.sonepar,
      },
      {
        id: "aeo-findability",
        label: "AEO and findability for AI-era supplier research",
        range: [6, 18],
        note: "AI engines drove 1.13B referral visits in June 2025, up 357% year on year, and ChatGPT referrals convert about 31% higher than non-branded organic, yet almost no life-science seller has structured for it. Watts Water structured spec content so Perplexity cites it over competitors on \"backflow preventer selection.\" On a 25-year technical content moat, being the cited answer when a scientist asks an AI for a reagent is measured upside on the channel that defines 2027 and 2028.",
        credibility: "verified",
        source: SRC.watts,
      },
      {
        id: "personalization-cx",
        label: "Personalization and headless CX",
        range: [5, 16],
        note: "Thermo Fisher names Personalization and UX as Now priorities and headless commerce on the 6–12 month list, yet the storefront renders the same experience regardless of contract or account. Cutting rep-assisted and corrected orders 40% to 25% on a large B2B channel saves real money, and account-based personalization can lift revenue materially. Demandbase already runs ABM on the site; the rails are partly in place.",
        credibility: "illustrative",
        source: SRC.millipore,
      },
      {
        id: "agentic-readiness",
        label: "Agentic-commerce readiness",
        range: [3, 8],
        note: "commercetools built a B2B intake agent for Mirion that turns emails, PDFs and spreadsheets into structured quotes. Thermo Fisher's largest accounts still place bulk lab and supply orders the same messy way. Turning that intake into structured, validated orders is value now, and it is the same readiness that keeps Thermo Fisher visible as Gartner expects 90% of B2B purchases to be AI-intermediated by 2028.",
        credibility: "illustrative",
        source: SRC.commercetools,
      },
    ],
    roadmap: [
      {
        phase: "Phase 1, starts now",
        title: "Marketplace and punchout consolidation on one or two networks",
        body: "Consolidate the buying experience on the highest-volume procurement networks first, on the AEM storefront, answering the Marketplace Management priority and the Ariba, Jaggaer, Salesforce ask and proving the model on real orders. It runs on relationships you own and ships without a re-platform. This is the wedge.",
        active: true,
      },
      {
        phase: "Phase 2, 3 to 6 months",
        title: "PIM foundation and AEO content structuring",
        body: "Stand up a real PIM so every consolidated network grounds in clean product data across the 1M-SKU catalog, and structure the 25-year technical content so AI engines cite Thermo Fisher when a scientist researches a supplier. The consolidation gets trustworthy; the catalog gets found in AI search.",
      },
      {
        phase: "Phase 3, 6 to 12 months",
        title: "Personalization and headless CX",
        body: "Render contract pricing, approved SKUs and account-based content per logged-in customer using the Demandbase rails already in place, and move toward headless commerce on AEM so the experience gets faster every cycle. This is the 6–12 month list, made real.",
      },
      {
        phase: "Phase 4, the spine and the bet",
        title: "Agentic intake and machine-purchasable catalog",
        body: "Turn bulk and supply orders from emails, PDFs and spreadsheets into structured, validated orders, and make the catalog machine-purchasable for agents. Gartner expects 90% of B2B purchases to be AI-intermediated by 2028. The risk is being invisible, not being behind.",
      },
    ],
    // ── The play shortlist: the consolidation, the findability, the personalization, the bet ──
    plays: [
      // THE CONSOLIDATION
      {
        id: "marketplace-consolidation",
        pillar: "storefront",
        title: "Marketplace and punchout consolidation across the five-plus networks",
        problem:
          "1M+ SKUs reach the customer through Coupa, Ariba, Jaggaer, Oracle, cc-Hubwoo and Science Warehouse, plus the AEM storefront, and the buying experience differs at every door. Marketplace Management is the priority Lara Silver came to the conference for, and the verbatim ask named Ariba, Jaggaer and Salesforce.",
        caseName: "Sonepar, US Foods",
        caseDetail:
          "Sonepar put seven AI agents into production and grew digital sales to $13.9B, up 50% year on year, by unifying the channel experience; US Foods got 90% of customers onto one platform with AI search and image-to-order.",
        roi: "Removing procurement friction recovers orders and offsets the tariff and FX margin drag; consolidation is the largest pool in the model.",
        whatI95Does:
          "Consolidate the punchout and marketplace experience on the AEM storefront, starting on one or two networks.",
        credibility: "verified",
        source: SRC.sonepar,
      },
      {
        id: "reorder-nba",
        pillar: "storefront",
        title: "Reorder and cross-sell next-best-action",
        problem:
          "The same labs buy the same reagents and consumables on a cycle, but reorder and adjacent-product prompts stay manual across six doors.",
        caseName: "Watsco, Johnson Controls",
        caseDetail:
          "Watsco's AI recommendations lifted average order value 10%; Johnson Controls whitespace models unlocked $40M from 23 accounts.",
        roi: "Growing a known account is cheaper and higher-converting than winning a new lab.",
        whatI95Does:
          "One-click reorder and next-best-action on the consolidated order history, surfaced in the scientist's account.",
        credibility: "verified",
        source: SRC.watsco,
      },
      // THE FINDABILITY
      {
        id: "aeo",
        pillar: "sales-marketing",
        title: "AEO for spec and protocol content",
        problem:
          "Scientists increasingly start supplier research in an AI assistant, and if the answer engine cites a competitor, the order is lost before thermofisher.com loads. Thermo Fisher owns 25 years of technical content and has not structured it for AI citation.",
        caseName: "Watts Water",
        caseDetail:
          "Watts structured spec content so Perplexity cites it over competitors; AI referrals grew 357% year on year and convert about 31% higher than organic, and almost no life-science seller has structured for it.",
        roi: "On a content moat this deep, citation is measured upside on the channel that defines 2027 and 2028.",
        whatI95Does:
          "Structure spec, protocol and application content with Product and FAQ schema so AI engines cite Thermo Fisher for the reagent or instrument.",
        credibility: "verified",
        source: SRC.watts,
      },
      {
        id: "semantic-search",
        pillar: "sales-marketing",
        title: "B2B semantic search across the unified catalog",
        problem:
          "Scientists search by application, spec and catalog number, and a failed lookup across a fragmented 1M-SKU catalog is a lost order or a rep call.",
        caseName: "Grainger",
        caseDetail:
          "AI search converts about 1.67 times keyword; Grainger runs RAG on 2.5M SKUs in production for search and call-center assist.",
        roi: "Relevance on a catalog this technical is measured upside on the channel that already carries orders.",
        whatI95Does:
          "Semantic search tuned for spec and application intent across the consolidated catalog, with hard filters for contract eligibility.",
        credibility: "verified",
        source: SRC.grainger,
      },
      // THE PERSONALIZATION
      {
        id: "account-personalization",
        pillar: "storefront",
        title: "Account personalization and entitlement",
        problem:
          "The storefront renders the same experience regardless of contract, approved list or account, so the wrong price or an unapprovable item is one click away across six doors.",
        caseName: "MilliporeSigma, Demandbase",
        caseDetail:
          "MilliporeSigma renders approved-list reorder per logged-in account; Demandbase already runs ABM personalization on the Thermo Fisher site.",
        roi: "Cutting rep-assisted and corrected orders protects margin and frees the team under margin pressure.",
        whatI95Does:
          "Render contract pricing, approved SKUs and account content per logged-in customer, wired to the punchout rails and the Demandbase ABM already in place.",
        credibility: "illustrative",
        source: SRC.millipore,
      },
      {
        id: "headless",
        pillar: "storefront",
        title: "Headless re-platform on AEM",
        problem:
          "The AEM storefront carries 1M+ SKUs and six procurement doors, and headless commerce is on the 6–12 month list to make the experience faster and composable without leaving AEM.",
        caseName: "Dawn Foods, MKM",
        caseDetail:
          "Dawn Foods re-platformed to composable commerce and grew online at triple-digit rates with 30% faster time-to-order; MKM lifted revenue 82% on a headless B2B build.",
        roi: "A composable, headless experience on AEM scales the buying experience instead of throttling it.",
        whatI95Does:
          "A headless commerce architecture on the AEM storefront, keeping AEM as the platform and the back office intact.",
        credibility: "verified",
        source: SRC.dawn,
      },
      // THE FOUNDATION AND THE BET
      {
        id: "pim",
        pillar: "foundation",
        title: "AI PIM foundation",
        problem:
          "30 to 60% of B2B catalogs have incomplete attributes, and a consolidated experience, a search and an answer engine on dirty data are confidently wrong, which is unacceptable for regulated reagents. PIM and OMS are likely homegrown at 1M+ SKUs.",
        caseName: "Bio-Rad, Stibo / Informatica",
        caseDetail:
          "Bio-Rad and Thermo Fisher enrich regulated catalogs from source documents; Stibo and Informatica are Gartner MDM Leaders, and inriver and Akeneo ship agentic enrichment.",
        roi: "Clean product data gates the consolidation, the search, the AEO and the agentic intake. The cheapest insurance on the portfolio.",
        whatI95Does:
          "A real PIM with human-in-the-loop enrichment, standardizing attributes across the 1M-SKU catalog.",
        credibility: "illustrative",
        source: SRC.stibo,
      },
      {
        id: "agentic-readiness",
        pillar: "storefront",
        title: "Agentic-commerce readiness",
        problem:
          "The AI buyer is coming for research reagents and instruments, and a catalog that is not machine-readable and machine-purchasable is invisible to it. Thermo Fisher's OpenAI alliance proves it is already past the demo.",
        caseName: "commercetools / Mirion, Google AP2",
        caseDetail:
          "Gartner expects 90% of B2B purchases to be AI-intermediated by 2028; Google's AP2 protocol and OpenAI Instant Checkout already ship agentic purchasing in consumer commerce; commercetools built a B2B intake agent for Mirion.",
        roi: "Readiness is a low-cost option on the channel that defines 2027 and 2028, bought now on a foundation you are already building.",
        whatI95Does:
          "Make the catalog machine-purchasable for agents using AP2 and MCP, and turn bulk-order documents into validated orders, grounded in the new PIM.",
        credibility: "illustrative",
        source: SRC.commercetools,
      },
    ],
    why: {
      opener: "You'll be sold a platform that replaces the storefront you already run well. You do not need it.",
      body: "The platform pitch is a rebuild of the wrong layer. Your storefront is Adobe AEM and it works. Your problem is the buying experience: 1M+ SKUs reached through five-plus procurement networks that do not share one coherent door, at a moment when scientists start their search inside an AI assistant. That is i95Dev's lane: deep in commerce integration, surgical, at mid-market economics. We consolidate the marketplace and punchout experience on the AEM storefront you own, structure the content so AI engines cite you, and wire account personalization to the rails you already run. We do not rip out your storefront. We make it the only door your customer needs.",
      ctaTitle: "Book your AI-in-Commerce Diagnostic",
      ctaSubtitle:
        "A fixed-scope, fixed-fee assessment that validates these numbers against Thermo Fisher's real catalog, punchout and AEM data. Two weeks, not a platform rebuild.",
      credibility: { brands: "500+ B2B brands", years: "25+ years", projects: "1,200+ projects" },
    },
  },
};
