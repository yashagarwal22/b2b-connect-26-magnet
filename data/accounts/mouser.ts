import type { AccountConfig } from "@/lib/types";

// Sources reused across the report (Verified vs. Illustrative labelled per-claim, spec section 14).
const SRC = {
  mit: { label: "MIT NANDA, ~95% of pilots", url: "https://nanda.media.mit.edu/" },
  watts: { label: "Watts Water, cited by Perplexity", url: "https://www.watts.com/" },
  grainger: { label: "Grainger / Databricks, RAG over 2.5M SKUs", url: "https://www.grainger.com/" },
  commercetools: { label: "commercetools B2B Intake Agent (Mirion)", url: "https://commercetools.com/" },
  gartner: { label: "Gartner, 90% of B2B AI-intermediated by 2028", url: "https://www.gartner.com/" },
  watsco: { label: "Watsco / Adobe, AI recs +10% AOV", url: "https://www.watsco.com/" },
  stibo: { label: "Informatica Product 360 / Stibo, Gartner MDM Leaders", url: "https://www.stibosystems.com/" },
  dawn: { label: "Dawn Foods, behavioral recs + search, baskets +10%", url: "https://www.dawnfoods.com/" },
  resilinc: { label: "Resilinc / Everstream, 60-90 day supplier-risk warnings", url: "https://www.resilinc.com/" },
} as const;

/**
 * Mouser Electronics (a TTI / Berkshire Hathaway company), a funded, active worked account. Every
 * section is grounded in the Account-360 profile and the AI research dump, and maps 1:1 to
 * companies/mouser/mouser-spec.md.
 *
 * Spine: Mouser does not win the order, it wins the design. Its rapid-NPI model gets a design
 * engineer to specify a Mouser part into a prototype; once it is in the BOM it is bought at volume
 * for the product's life. The moat is being the engineer's default tool at design-in across 44M
 * products. That moment is moving to AI: if a model recommends a Digi-Key part because Mouser's
 * parametric/lifecycle data is not structured for it, the design-in is lost at the source. The work
 * is grounding AI in the 44M-SKU data only Mouser holds, inside the engineer's BOM workflow. Write to
 * Tim Blanks (VP Architecture and Platforms), economic buyer Hayne Shumate. Guardrail: augment
 * Lucidworks Fusion and Informatica Product 360, do not rip and replace; "enhance, not Gen-AI for its
 * own sake" (Mahboob).
 */
export const mouser: AccountConfig = {
  slug: "mouser",
  companyName: "Mouser",
  aliases: ["Mouser Electronics", "Mouser", "TTI"],
  domains: ["mouser.com"],
  vertical: "industrial-distribution",
  verticalLabel: "Electronic-component distribution",
  revenueBand: "$1B+",
  role: "VP, Architecture and Platforms",
  roleEmphasis: "ecommerce",
  activeRequirement: true,
  published: true,

  thesis: "You win the engineer at design-in. Now make the AI recommend your part, not Digi-Key's.",
  wedge:
    "AI part-substitution and BOM intelligence, grounded in your 44M-SKU data",
  wedgeDetail:
    "It runs on the parametric and lifecycle data only Mouser holds at this scale, it solves the engineer's real pain of obsolescence, lead-time and allocation inside the BOM workflow they already use, and it turns every substitution into a Mouser design-in instead of a switch to Digi-Key. Prove it on high-obsolescence categories like end-of-life MCUs, then widen to the catalog.",

  // ── Module 1, The Reframe (above gate) ──
  reframe: {
    opener: "Gen-AI search for its own sake is a demo. The engineer wants the right part, fast.",
    stat: "95%",
    statSource: SRC.mit,
    body: "95% of enterprise AI pilots return nothing to the P&L. They sit beside the work instead of inside it. Your team already named the trap: bring Gen-AI in to enhance the engineer's experience, not for the sake of doing Gen-AI. The edge is not a better model. It is the 44M parts of parametric and lifecycle data only Mouser holds, and the design-in only Mouser earns, so that when an engineer or an AI asks for the right part, the answer is yours and not Digi-Key's.",
  },

  // ── Module 2, The Hype Filter (above gate) ──
  hypeFilter: {
    opener: "Commodity AI answers a question. Compounding AI gets the engineer to the right part and designs you in.",
    commodity: [
      "A Gen-AI chatbot bolted onto the catalog",
      "Generic recs that ignore lifecycle and stock",
      "AI-written part descriptions at scale",
      "A search demo that impresses no engineer",
    ],
    compounding: [
      "Part substitution grounded in your 44M-SKU data",
      "BOM intelligence inside the engineer's workflow",
      "Semantic search tuned on your Lucidworks signals",
      "AEO so AI engines cite Mouser parts, not Digi-Key",
    ],
    pitchWarning:
      "You run Lucidworks and Informatica Product 360. Expect a pitch to rip them out for a shiny Gen-AI layer. Do not. The moat is the parametric and lifecycle data already in Product 360 and the engineer trust you already hold. Tune what you own.",
  },

  // ── Module 2.5, Your Stack (Account-360 confirmed stack) ──
  stackFlags: [
    {
      signal: "Lucidworks Fusion + Lucidworks AI",
      leadPlay: "Tune semantic and hybrid search on the signals you already capture",
      commodityFlag: "A rip-and-replace Gen-AI layer. You own the search platform; tune it.",
    },
    {
      signal: "Informatica MDM Product 360",
      leadPlay: "Enrich and govern 44M SKUs so AI can ground in clean parametric data",
      commodityFlag: "\"Buy a new PIM.\" You have one. The gap is enrichment, not acquisition.",
    },
    {
      signal: "Microsoft .NET custom commerce",
      leadPlay: "Add AI substitution and BOM services without a replatform",
      commodityFlag: "A full platform rebuild. The win is services on top, not a new platform.",
    },
    {
      signal: "Proprietary BOM tools",
      leadPlay: "Make the BOM the AI surface: substitution, lead-time, quote accuracy",
      commodityFlag: "A generic quoting bolt-on. The BOM is your engineer moat. Build it deep.",
    },
    {
      signal: "44M SKUs across 62 sites",
      leadPlay: "Structure data so AI engines cite your parts for the design",
      commodityFlag: "More SEO. The engineer asks an AI now. Structure for the citation.",
    },
  ],

  // ── Module 3, The Commodity-vs-Compounding Map (above gate) ──
  // Y: 0 commodity to 1 compounding · X: 0 foundation-required to 1 bolt-on-ready (wedge = top-right)
  mapPlays: [
    { id: "substitution", label: "Part substitution + BOM", compounding: 0.92, bolton: 0.75, magnitude: 5, lit: true, wedge: true },
    { id: "search", label: "Gen-AI / semantic search", compounding: 0.8, bolton: 0.82, magnitude: 4, lit: true },
    { id: "aeo", label: "AEO for parts and design", compounding: 0.9, bolton: 0.7, magnitude: 4, lit: true },
    { id: "pim", label: "AI PIM enrichment (44M SKUs)", compounding: 0.85, bolton: 0.45, magnitude: 4, lit: true },
    { id: "personalization", label: "Engineer-journey personalization", compounding: 0.7, bolton: 0.72, magnitude: 3, lit: true },
    { id: "nba", label: "Cross-sell / NBA on design-in", compounding: 0.8, bolton: 0.55, magnitude: 3, lit: true },
    { id: "leadtime", label: "Lead-time + supplier risk", compounding: 0.72, bolton: 0.45, magnitude: 4, lit: true },
    { id: "agentic", label: "Agentic-commerce ready", compounding: 0.95, bolton: 0.3, magnitude: 5, lit: true },
    { id: "chatbot", label: "Generic chatbot", compounding: 0.14, bolton: 0.9, magnitude: 1, lit: false },
    { id: "descriptions", label: "AI part descriptions", compounding: 0.12, bolton: 0.8, magnitude: 1, lit: false },
    { id: "demo", label: "Search demo (hype)", compounding: 0.3, bolton: 0.85, magnitude: 1, lit: false },
  ],

  // ── Below the gate (payoff), never in the initial payload ──
  payoff: {
    headlineOpportunity: [20, 62],
    moneyPools: [
      {
        id: "design-in",
        label: "Design-in: win the part at the prototype, keep it for life",
        range: [8, 24],
        note: "Your NPI model lives or dies on the design-in. When a generic AI recommends a Digi-Key part because your data is not structured for it, the loss compounds across the product's volume life. Watts structured its content so Perplexity cites it over rivals; the same discipline keeps the design-in yours. A fraction of a point of design-in win on a multi-billion-dollar base is the largest line in the model.",
        credibility: "illustrative",
        source: SRC.watts,
      },
      {
        id: "findability",
        label: "Findability: convert the two-thirds of revenue through search",
        range: [6, 18],
        note: "Two-thirds of revenue flows through the website, and findability across 44M SKUs is existential. AI search converts about 1.67 times keyword, and Grainger runs RAG over a 2.5M-SKU catalog in production. Tuning semantic search on your Lucidworks signals is measured upside on the channel that already carries the business.",
        credibility: "verified",
        source: SRC.grainger,
      },
      {
        id: "bom",
        label: "The BOM: AI-assisted quoting, substitution, lead-time",
        range: [4, 12],
        note: "The engineer's real artifact is the BOM, and quote accuracy, part substitution and lead-time are where deals are won or lost. commercetools built a B2B intake agent for Mirion that turns emails, PDFs and spreadsheets into structured quotes. The same pattern, grounded in your data, makes the BOM the place Mouser wins.",
        credibility: "illustrative",
        source: SRC.commercetools,
      },
      {
        id: "agentic",
        label: "Agentic readiness: be the catalog the AI buys from",
        range: [2, 8],
        note: "Gartner expects 90% of B2B purchases to be AI-intermediated by 2028, and agentic checkout is already shipping in consumer commerce. The risk is not being behind in 2026; it is being invisible to the AI buyer in 2027 and 2028. A machine-readable, machine-purchasable catalog is the option you buy now.",
        credibility: "illustrative",
        source: SRC.gartner,
      },
    ],
    roadmap: [
      {
        phase: "Phase 1, starts now",
        title: "Part substitution, BOM intelligence and search tuning",
        body: "Stand up AI part-substitution and BOM intelligence on Product 360 and Lucidworks, and tune semantic search to enhance, not replace, the engineer's workflow. It runs on data you own and passes Mahboob's test. This is the wedge.",
        active: true,
      },
      {
        phase: "Phase 2, 3 to 6 months",
        title: "AEO and AI PIM enrichment",
        body: "Structure your 44M-SKU parametric data so AI engines cite Mouser parts for the design, and enrich the catalog at scale so search and substitution run on clean data. Discovery and data reinforce each other.",
      },
      {
        phase: "Phase 3, 6 to 12 months",
        title: "Engineer-journey personalization and cross-sell",
        body: "Personalize the engineer journey across the 62 sites and surface cross-sell and next-best-action on design-in accounts, so the prototype part becomes the platform standard.",
      },
      {
        phase: "Phase 4, the spine and the bet",
        title: "Agentic readiness and supplier risk",
        body: "Make the catalog machine-purchasable for AI buyers using AP2 and MCP, and layer lead-time and multi-tier supplier-risk intelligence onto the buying experience. Gartner expects 90% of B2B purchases to be AI-intermediated by 2028. The risk is being invisible, not being behind.",
      },
    ],
    // ── The play shortlist, spanning the engineer workflow, discovery, the foundation, and the bet ──
    plays: [
      // THE ENGINEER WORKFLOW
      {
        id: "substitution",
        pillar: "storefront",
        title: "AI part-substitution and BOM intelligence",
        problem:
          "The engineer's real artifact is the BOM, where obsolescence, allocation and lead-time decide the design. When a part goes end-of-life, the substitution either keeps the design on Mouser or hands it to Digi-Key.",
        caseName: "commercetools, Mirion",
        caseDetail:
          "commercetools built a B2B intake agent for Mirion that turns emails, PDFs and spreadsheets into structured quotes; guided-selling and CPQ tools cut quote cycles materially.",
        roi: "Every substitution kept on a Mouser part is a design-in preserved for the product's volume life. One held substitution on a high-runner part outlasts a quarter of new-engineer acquisition.",
        whatI95Does:
          "AI substitution and BOM services on Product 360 and the .NET commerce layer, surfacing in-stock, lifecycle-aware alternatives inside the engineer's quote.",
        credibility: "illustrative",
        source: SRC.commercetools,
      },
      {
        id: "nba",
        pillar: "sales-marketing",
        title: "Cross-sell and next-best-action on design-in accounts",
        problem:
          "A design-in is the start of a volume relationship, but the path from prototype part to platform standard and adjacent parts stays manual.",
        caseName: "Watsco, Johnson Controls",
        caseDetail:
          "Watsco's AI recommendations lifted average order value 10%; Johnson Controls whitespace models unlocked $40M from 23 accounts.",
        roi: "Growing the design-in account is cheaper and higher-converting than winning a new engineer.",
        whatI95Does:
          "Cross-sell and next-best-action on design-in and order data, surfaced in the engineer journey and to the sales team.",
        credibility: "verified",
        source: SRC.watsco,
      },
      // DISCOVERY
      {
        id: "search",
        pillar: "storefront",
        title: "Gen-AI and semantic search, done right",
        problem:
          "Findability across 44M SKUs is existential, and a Gen-AI layer added for its own sake fails the engineer who wants the right part, fast.",
        caseName: "Grainger / Databricks",
        caseDetail:
          "AI search converts about 1.67 times keyword; Grainger runs RAG over a 2.5M-SKU catalog in production for search and call deflection.",
        roi: "On a channel carrying two-thirds of revenue, a relevance lift is measured upside, not a pilot.",
        whatI95Does:
          "Semantic and hybrid search tuned on your Lucidworks signals, grounded in Product 360, enhancing the engineer workflow rather than replacing it.",
        credibility: "verified",
        source: SRC.grainger,
      },
      {
        id: "aeo",
        pillar: "storefront",
        title: "Answer Engine Optimization for parts and design",
        problem:
          "Engineers now ask ChatGPT and Google AI for part selection. If the answer engine cites a competitor because your data is not structured for it, the design-in is lost before a search ever reaches mouser.com.",
        caseName: "Watts Water",
        caseDetail:
          "Watts structured its content so Perplexity cites it over rivals; AI referrals grew 357% year on year and convert about 31% higher than organic.",
        roi: "Your parametric data and NPI breadth are exactly the structured proof answer engines reward, and few distributors have done it.",
        whatI95Does:
          "Structure parametric, lifecycle and application data so AI engines cite Mouser parts for the concerns engineers actually design around.",
        credibility: "illustrative",
        source: SRC.watts,
      },
      // FOUNDATION
      {
        id: "pim",
        pillar: "foundation",
        title: "AI PIM enrichment at 44M-SKU scale",
        problem:
          "30 to 60% of B2B catalogs have incomplete attributes, and at 44M SKUs an LLM is confidently wrong on dirty data. As Shumate put it, without high-quality product data there is no business.",
        caseName: "Informatica Product 360, Stibo",
        caseDetail:
          "You already run Informatica Product 360; inriver and Akeneo ship agentic enrichment, and Stibo and Informatica are Gartner MDM Leaders.",
        roi: "Clean parametric data gates every play above, from substitution to AEO to agentic readiness. The cheapest insurance on the portfolio.",
        whatI95Does:
          "AI-enriched PIM with human-in-the-loop on your Product 360 footprint, extracting and standardizing attributes from supplier documents at scale.",
        credibility: "illustrative",
        source: SRC.stibo,
      },
      {
        id: "personalization",
        pillar: "storefront",
        title: "Engineer-journey personalization across 62 sites",
        problem:
          "The engineer experience spans 62 localized domains, and a returning design engineer is too often treated like an anonymous visitor.",
        caseName: "Dawn Foods",
        caseDetail:
          "Dawn Foods paired behavioral recommendations with AI search and grew baskets about 10%.",
        roi: "A consistent, personalized engineer journey compounds the design-in across regions.",
        whatI95Does:
          "Personalization and content orchestration across the 62 sites on the .NET commerce layer, driven by behavioral and account data.",
        credibility: "verified",
        source: SRC.dawn,
      },
      // OPERATIONS & THE BET
      {
        id: "leadtime",
        pillar: "back-office",
        title: "Lead-time and multi-tier supplier-risk intelligence",
        problem:
          "Component supply swings on allocation and shortage, and an unreliable lead-time on the page costs the design-in even when the part is right.",
        caseName: "Resilinc / Everstream",
        caseDetail:
          "Supplier-risk networks like Resilinc and Everstream give 60 to 90 day advance warnings and 30 to 40% faster response.",
        roi: "Trustworthy lead-time and proactive substitution protect the design-in through supply volatility, avoiding 1 to 2 disruptions a year worth $2-10M each.",
        whatI95Does:
          "Lead-time intelligence and multi-tier supplier-risk signals wired into search, substitution and the BOM.",
        credibility: "verified",
        source: SRC.resilinc,
      },
      {
        id: "agentic",
        pillar: "foundation",
        title: "Agentic-commerce readiness",
        problem:
          "The AI buyer is coming for components, and a catalog that is not machine-readable and machine-purchasable is invisible to it.",
        caseName: "Gartner, OpenAI Instant Checkout",
        caseDetail:
          "Gartner expects 90% of B2B purchases to be AI-intermediated by 2028; OpenAI Instant Checkout already ships agentic purchasing with Walmart and Target in consumer commerce.",
        roi: "Readiness is a low-cost option on the channel that defines 2027 and 2028, bought now.",
        whatI95Does:
          "Make the 44M-SKU catalog machine-purchasable for agents using AP2 and MCP, grounded in clean Product 360 data.",
        credibility: "illustrative",
        source: SRC.gartner,
      },
    ],
    why: {
      opener: "You'll be sold a Gen-AI platform. Mahboob already told you: not for the sake of it.",
      body: "The platform pitch is a rebuild you do not need, on systems you already run well. Your problem is a contained one: ground AI in the 44M-SKU data you own, inside the engineer's workflow, so the design-in stays yours. That is i95Dev's lane: surgical, deep in commerce, data and search, augmenting Lucidworks and Product 360, at mid-market economics. We do not rip out your stack. We make it win the engineer, in time to ship during the leadership transition.",
      ctaTitle: "Book your AI-in-Commerce Diagnostic",
      ctaSubtitle:
        "A fixed-scope, fixed-fee assessment that validates these numbers against Mouser's real search, catalog and BOM data. Two weeks, not a platform rebuild.",
      credibility: { brands: "500+ B2B brands", years: "25+ years", projects: "1,200+ projects" },
    },
  },
};
