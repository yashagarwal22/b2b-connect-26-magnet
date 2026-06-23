import type { AccountConfig } from "@/lib/types";

// Sources reused across the report (Verified vs. Illustrative labelled per-claim, spec section 14).
const SRC = {
  mit: { label: "MIT NANDA, ~95% of pilots", url: "https://nanda.media.mit.edu/" },
  dawn: { label: "Dawn Foods re-platform, triple-digit online growth (commercetools / DC360)", url: "https://commercetools.com/" },
  usfoods: { label: "US Foods MOXe, +1.3M cases/yr, 90% of customers (DC360 + earnings)", url: "https://www.usfoods.com/" },
  watsco: { label: "Watsco AI recs, AOV +10% (Adobe / DC360)", url: "https://www.watsco.com/" },
  jci: { label: "Johnson Controls, $40M from 23 accounts (Beyond the Arc)", url: "https://www.johnsoncontrols.com/" },
  mkm: { label: "MKM Building Supplies, revenue +82% on headless B2B (BigCommerce)", url: "https://www.mkmbs.co.uk/" },
  sonepar: { label: "Sonepar 7 AI agents, digital sales +50% YoY (DC360)", url: "https://www.sonepar.com/" },
  mirakl: { label: "Mirakl 2026 B2B AI and marketplace trends", url: "https://www.mirakl.com/" },
  millipore: { label: "MilliporeSigma approved-list reorder per account", url: "https://www.milliporesigma.com/" },
  stibo: { label: "Stibo / Informatica, Gartner MDM Leaders", url: "https://www.stibosystems.com/" },
  biorad: { label: "Bio-Rad / Thermo Fisher regulated-catalog enrichment", url: "https://www.bio-rad.com/" },
  commercetools: { label: "commercetools B2B Intake Agent (Mirion)", url: "https://commercetools.com/" },
  jpw: { label: "JPW Industries, order processing 16–24h to under 1h (Salesforce)", url: "https://www.salesforce.com/" },
  search: { label: "AI search converts ~1.67x keyword (research dump, Part 3.2)", url: "https://nanda.media.mit.edu/" },
  referrals: { label: "AI referrals +357% YoY, ~31% higher conversion (AEO research, Part 3.5)", url: "https://www.similarweb.com/" },
  gartner: { label: "Gartner, 90% of B2B purchases AI-intermediated by 2028", url: "https://www.gartner.com/" },
} as const;

/**
 * Bunzl Canada, an active-storefront-decision account (open platform choice, operational reset in the
 * background). Every section is grounded in the Account-360 profile and the AI research dump, and maps
 * 1:1 to companies/bunzl-canada/bunzl-canada-spec.md.
 *
 * Spine: the group already proved the model. Canada has not run the play yet. Digital is 76% of Bunzl
 * plc orders and Europe runs BunzlOne (Adobe Commerce on a Mirakl engine), but Canada serves 45,000-plus
 * business customers through a D365 Sales plus WordPress ordering layer, not a commerce platform. The
 * moat is Canadian: 45,000 recurring accounts and roughly 30% private-label penetration through REGARD
 * and EcoSystems. The storefront decision is open. Write to Arjun Vattukkalathil (Director, E-Commerce
 * Canada, the champion who came to the conference shopping platforms), with economic context via
 * President John Howlett. Guardrails: do not assume Shopify and do not copy BunzlOne. Shape the platform
 * decision objectively and lead with integration to the Infor SX.enterprise and Dynamics 365 backbone
 * Canada already runs. Keep Infor as the ERP and D365 as the CRM rail; this is a contained storefront
 * decision, not an ERP rip. Bunzl Canada standalone revenue is undisclosed, so all dollar math is
 * directional and tied to the Canadian digital order base, not the parent's £11.85B.
 */
export const bunzlCanada: AccountConfig = {
  slug: "bunzl-canada",
  companyName: "Bunzl Canada",
  aliases: [
    "Bunzl plc",
    "BunzlOne",
    "REGARD",
    "EcoSystems",
  ],
  domains: ["bunzlcanada.ca"],
  vertical: "industrial-distribution",
  verticalLabel: "Wholesale distribution / packaging, hygiene, safety, industrial",
  revenueBand: "Standalone undisclosed",
  role: "Director, E-Commerce Canada",
  roleEmphasis: "ecommerce",
  activeRequirement: true,
  published: true,

  thesis: "Europe runs a commerce platform. Make Canada's storefront ride the backbone you already run.",
  wedge:
    "Shape the Canadian storefront decision and wire it to the Infor and Dynamics 365 backbone you already run",
  wedgeDetail:
    "It runs on the D365 Sales and Infor SX.enterprise systems Bunzl Canada already operates, it solves an open decision before a wrong platform bet is locked in, it serves the recurring-replenishment reality of 45,000 customers, and it is fast to prove on the highest-volume reorder categories. The AI companion is B2B-aware search and account-based reorder, the proven distributor pattern. Prove it on the top replenishment lines, then extend the same rails across all five segments and the private-label catalog.",

  // ── Module 1, The Reframe (above gate) ──
  reframe: {
    opener: "A chatbot on the homepage is a demo. The customer wants the reorder to be right, and fast.",
    stat: "95%",
    statSource: SRC.mit,
    body: "95% of enterprise AI pilots return nothing to the P&L. They sit beside the work instead of inside it. Bunzl Canada's work is the recurring order: the same 45,000 businesses buying the same packaging, hygiene and safety supplies again and again. The edge is not a smarter homepage. It is making that reorder intelligent on the Infor and Dynamics 365 backbone Canada already runs, while the storefront decision is still open and before a wrong platform bet is locked in.",
  },

  // ── Module 2, The Hype Filter (above gate) ──
  hypeFilter: {
    opener: "Commodity AI dresses up the storefront. Compounding AI makes the reorder right, on rails competitors cannot copy.",
    commodity: [
      "A chatbot bolted onto bunzlcanada.ca",
      "Generic recs that ignore contract pricing",
      "AI-written product copy at scale",
      "An \"AI storefront\" deck, not a shipped platform",
    ],
    compounding: [
      "Account-based reorder for 45,000 customers",
      "Contract-aware pricing on your D365 rails",
      "A real PIM that grounds every reorder",
      "The storefront decision wired to Infor + D365",
    ],
    pitchWarning:
      "The group runs BunzlOne in Europe, and the easy pitch is to copy it or to jump to a name the champion floated. Do not lock either in yet. Canada's customers order against contract pricing and approved lists, and the backbone is Infor SX.enterprise and D365 Sales. Pick the Canadian storefront objectively, wire it to the rails Canada already runs, and prove it on the top reorder categories. Shape the decision, do not inherit one.",
  },

  // ── Module 2.5, Your Stack (Account 360 stack signals; reconcile flagged items live) ──
  stackFlags: [
    {
      signal: "Infor SX.enterprise (ERP)",
      leadPlay: "Wire the new storefront to live inventory, pricing and order status on the ERP you run",
      commodityFlag: "A rip to a new ERP. You own the rail; integrate to it.",
    },
    {
      signal: "Microsoft Dynamics 365 Sales (CRM)",
      leadPlay: "Surface reorder and next-best-action to reps on the CRM Canada already uses",
      commodityFlag: "A standalone bolt-on that ignores D365. Build on it.",
    },
    {
      signal: "D365 Sales + WordPress ordering layer",
      leadPlay: "Replace the marketing-site order flow with a real commerce storefront, objectively chosen",
      commodityFlag: "A copy of BunzlOne, or a name the champion floated. Decide first.",
    },
    {
      signal: "No PIM detected for Canada",
      leadPlay: "Stand up a real PIM so every reorder and private-label cross-sell grounds in clean data",
      commodityFlag: "\"Add AI copy.\" Clean attributes first; the AI is confidently wrong without them.",
    },
    {
      signal: "Punchout / EDI to large accounts",
      leadPlay: "Enforce contract pricing and approved lists inside the reorder",
      commodityFlag: "A generic checkout. The 45,000 accounts need entitlement-aware ordering.",
    },
  ],

  // ── Module 3, The Commodity-vs-Compounding Map (above gate) ──
  // Y: 0 commodity to 1 compounding · X: 0 foundation-required to 1 bolt-on-ready (wedge = top-right)
  mapPlays: [
    { id: "storefront-reorder", label: "Storefront decision + account reorder", compounding: 0.9, bolton: 0.7, magnitude: 5, lit: true, wedge: true },
    { id: "contract-pricing", label: "Contract pricing + entitlement rails", compounding: 0.84, bolton: 0.62, magnitude: 4, lit: true },
    { id: "storefront-backbone", label: "Storefront on Infor + D365 backbone", compounding: 0.82, bolton: 0.45, magnitude: 5, lit: true },
    { id: "ai-pim", label: "AI PIM foundation", compounding: 0.85, bolton: 0.35, magnitude: 4, lit: true },
    { id: "b2b-search", label: "B2B-aware search (findability)", compounding: 0.72, bolton: 0.78, magnitude: 3, lit: true },
    { id: "private-label-nba", label: "Private-label cross-sell NBA", compounding: 0.8, bolton: 0.58, magnitude: 4, lit: true },
    { id: "aeo", label: "AEO for spec and product content", compounding: 0.86, bolton: 0.62, magnitude: 3, lit: true },
    { id: "agentic-marketplace", label: "Agentic / marketplace readiness", compounding: 0.88, bolton: 0.4, magnitude: 3, lit: true },
    { id: "chatbot", label: "Generic chatbot", compounding: 0.14, bolton: 0.9, magnitude: 1, lit: false },
    { id: "ai-copy", label: "AI product copy", compounding: 0.12, bolton: 0.8, magnitude: 1, lit: false },
    { id: "ai-storefront-deck", label: "\"AI storefront\" deck", compounding: 0.2, bolton: 0.3, magnitude: 1, lit: false },
  ],

  // ── Below the gate (payoff), never in the initial payload ──
  payoff: {
    headlineOpportunity: [6, 18],
    moneyPools: [
      {
        id: "storefront",
        label: "The storefront: account reorder for 45,000 customers",
        range: [3, 8],
        note: "The same 45,000 businesses buy the same supplies on a cycle, yet the Canadian order flow runs through a marketing-site layer, not a commerce storefront. Dawn Foods re-platformed bakery-ingredient wholesale to composable commerce and grew online at triple-digit rates with 30% faster time-to-order and 10% bigger baskets. One-click account reorder on the highest-volume categories is the largest line in the model.",
        credibility: "verified",
        source: SRC.dawn,
      },
      {
        id: "findability",
        label: "Findability: B2B-aware search across the catalog",
        range: [1, 4],
        note: "Buyers search for a known item by spec or name, and a failed lookup is a rep call or a lost order. US Foods built MOXe with AI search and image-and-doc-to-order across 90% of its customers and added 1.3 million cases a year. Tuned, B2B-aware search across packaging, hygiene and safety SKUs converts where keyword search fails.",
        credibility: "verified",
        source: SRC.usfoods,
      },
      {
        id: "rails",
        label: "The rails: account pricing + private-label cross-sell",
        range: [1, 4],
        note: "45,000 accounts order against contract pricing and approved lists, and roughly 30% of volume is already private label through REGARD and EcoSystems, so the cross-sell base is in hand. Watsco's AI recommendations lifted average order value 10% on its contractor platform. Account-aware pricing plus private-label next-best-action grows the order without growing the cost to serve.",
        credibility: "verified",
        source: SRC.watsco,
      },
      {
        id: "agentic-marketplace",
        label: "Agentic + marketplace readiness",
        range: [1, 2],
        note: "The group already runs a Mirakl marketplace in Europe, and Mirakl's own 2026 read is that B2B marketplaces and AI buyers are reshaping commerce. Sonepar put 7 AI agents into production and grew digital sales 50% year on year. Readiness here is a low-cost option on the channel that defines 2027 and 2028, bought now on the foundation Canada is already building. Directional, since Bunzl Canada standalone revenue is undisclosed.",
        credibility: "illustrative",
        source: SRC.sonepar,
      },
    ],
    roadmap: [
      {
        phase: "Phase 1, starts now",
        title: "Shape the storefront decision and prove account reorder",
        body: "Run the platform decision objectively, and stand up one-click account reorder on the highest-volume categories, wired to Infor and D365 so pricing and inventory are real. It runs on systems Canada owns and ships without waiting for a full re-platform. This is the wedge, and it answers the champion's conference question before a wrong bet is locked in.",
        active: true,
      },
      {
        phase: "Phase 2, 3 to 6 months",
        title: "PIM foundation and contract-pricing rails",
        body: "Stand up a real PIM so every reorder and private-label cross-sell grounds in clean data, and wire contract pricing and approved lists onto the punchout and EDI rails the largest accounts already use. The reorder gets trustworthy; the order rails get account-aware.",
      },
      {
        phase: "Phase 3, 6 to 12 months",
        title: "Storefront on Infor and D365, with cross-sell",
        body: "Complete the storefront on the Infor and D365 backbone, and turn on private-label next-best-action across the account base, so recurring replenishment gets faster and baskets get bigger every cycle.",
      },
      {
        phase: "Phase 4, the spine and the bet",
        title: "Agentic and marketplace readiness, plus AEO",
        body: "Make the catalog machine-readable for AI buyers and ready for a Mirakl-class marketplace, and structure product and spec content so AI engines cite Bunzl Canada. Gartner expects 90% of B2B purchases to be AI-intermediated by 2028. The risk is being invisible, not being behind.",
      },
    ],
    // ── The play shortlist: the storefront, the order rails, the foundation, the bet ──
    plays: [
      // THE STOREFRONT
      {
        id: "storefront-reorder",
        pillar: "storefront",
        title: "Shape the storefront decision and ship account reorder",
        problem:
          "45,000 businesses reorder the same supplies on a cycle, but Canada's order flow runs through a D365-plus-WordPress layer, not a commerce platform, and the storefront decision is still open. CPQ-style guided ordering and one-click reorder are missing.",
        caseName: "Dawn Foods, US Foods MOXe",
        caseDetail:
          "Dawn Foods re-platformed bakery-ingredient wholesale to composable commerce and grew online at triple-digit rates with 30% faster time-to-order; US Foods MOXe runs reorder and doc-to-order across 90% of customers.",
        roi: "One-click reorder on the top categories is the largest pool in the model and grows the known account, which converts far higher than a new one.",
        whatI95Does:
          "Run the platform decision objectively, then ship account-based reorder on the Infor and D365 backbone, starting on the highest-volume categories.",
        credibility: "verified",
        source: SRC.dawn,
      },
      {
        id: "private-label-nba",
        pillar: "sales-marketing",
        title: "Private-label cross-sell next-best-action",
        problem:
          "Roughly 30% of volume is already private label through REGARD and EcoSystems, but cross-sell to the national-brand buyer stays manual on a marketing-site order flow.",
        caseName: "Watsco, Johnson Controls",
        caseDetail:
          "Watsco's AI recommendations lifted average order value 10%; Johnson Controls whitespace models unlocked $40M from 23 accounts.",
        roi: "Growing private-label share on a known account is cheaper and higher-margin than winning a new one.",
        whatI95Does:
          "Next-best-action that surfaces REGARD and EcoSystems equivalents on D365 order history, in the customer's account and to the rep.",
        credibility: "verified",
        source: SRC.watsco,
      },
      // THE ORDER RAILS
      {
        id: "account-pricing",
        pillar: "storefront",
        title: "Account-based pricing and entitlement",
        problem:
          "45,000 accounts order against contract pricing, approved lists and punchout to large customers, but a marketing-site order flow cannot enforce account-specific price, so the wrong price or an unapprovable item is one click away.",
        caseName: "MilliporeSigma",
        caseDetail:
          "MilliporeSigma renders approved-list reorder per logged-in account; entitlement-aware B2B storefronts are production-ready on D365-class backbones.",
        roi: "Cutting rep-assisted and corrected orders protects margin and frees the team while Canada consolidates 15 warehouses to 6.",
        whatI95Does:
          "Contract pricing, approved lists and entitlement wired to the punchout and EDI rails and to D365.",
        credibility: "illustrative",
        source: SRC.millipore,
      },
      {
        id: "storefront-backbone",
        pillar: "storefront",
        title: "Storefront on the Infor and D365 backbone",
        problem:
          "The Canadian order flow lives on a D365-plus-WordPress layer that was never built to carry 45,000 recurring accounts through an operational reset.",
        caseName: "Dawn Foods, MKM Building Supplies",
        caseDetail:
          "Dawn Foods grew online at triple-digit rates on composable commerce; MKM Building Supplies lifted revenue 82% on a headless B2B build.",
        roi: "A real storefront on Infor and D365 scales with the business instead of throttling it, and it is chosen objectively rather than inherited.",
        whatI95Does:
          "A contained storefront on the Infor and Dynamics 365 backbone, integrated for live inventory, pricing and order status, keeping the systems of record.",
        credibility: "verified",
        source: SRC.mkm,
      },
      // THE FOUNDATION
      {
        id: "ai-pim",
        pillar: "foundation",
        title: "AI PIM foundation",
        problem:
          "30 to 60% of B2B catalogs have incomplete attributes, no PIM is detected for Canada, and a reorder, a cross-sell or an answer engine on dirty data is confidently wrong across packaging, hygiene, safety and industrial SKUs.",
        caseName: "Bio-Rad / Thermo Fisher, Stibo / Informatica",
        caseDetail:
          "Bio-Rad and Thermo Fisher enrich regulated catalogs from source documents; Stibo and Informatica are Gartner MDM Leaders, and inriver and Akeneo ship agentic enrichment.",
        roi: "Clean product data gates the storefront, the search, the cross-sell and the AEO. The cheapest insurance on the portfolio.",
        whatI95Does:
          "A real PIM with human-in-the-loop enrichment, standardizing attributes and private-label mappings across the catalog.",
        credibility: "illustrative",
        source: SRC.biorad,
      },
      {
        id: "b2b-search-aeo",
        pillar: "sales-marketing",
        title: "B2B-aware search and AEO",
        problem:
          "Buyers search by product, spec and brand, and increasingly start in an AI assistant. If search is not tuned for the catalog, or the answer engine cites Sysco, the order is lost before bunzlcanada.ca loads.",
        caseName: "Search-AI benchmarks, AEO research",
        caseDetail:
          "AI search converts about 1.67 times keyword; AI referrals grew 357% year on year and convert about 31% higher than organic, and almost no distributor has structured for it.",
        roi: "On a catalog this broad, relevance and citation are measured upside on the channel that already carries orders.",
        whatI95Does:
          "Tune B2B-aware search for spec and product intent, and structure product content so AI engines cite Bunzl Canada.",
        credibility: "verified",
        source: SRC.search,
      },
      // THE BET
      {
        id: "agentic-marketplace",
        pillar: "sales-marketing",
        title: "Agentic and marketplace readiness",
        problem:
          "The group already runs a Mirakl marketplace in Europe, and the AI buyer is coming for packaging and hygiene supplies, but a catalog that is not machine-readable is invisible to both.",
        caseName: "Sonepar, Mirakl",
        caseDetail:
          "Sonepar put 7 AI agents into production and grew digital sales 50% year on year; Mirakl's 2026 read is that B2B marketplaces and AI buyers reshape commerce.",
        roi: "Readiness is a low-cost option on the channel that defines 2027 and 2028, bought now on the foundation Canada is already building.",
        whatI95Does:
          "Make the catalog machine-purchasable for agents and ready for a Mirakl-class marketplace, grounded in the new PIM and D365 data.",
        credibility: "illustrative",
        source: SRC.sonepar,
      },
      {
        id: "agentic-intake",
        pillar: "back-office",
        title: "Agentic bulk-order intake",
        problem:
          "Large accounts still place bulk and recurring orders as emails, PDFs and spreadsheets, and the team rekeys them by hand.",
        caseName: "commercetools / Mirion, JPW Industries",
        caseDetail:
          "commercetools built a B2B intake agent for Mirion that turns those documents into structured quotes; JPW Industries cut order processing from 16 to 24 hours to under one hour with AI order automation.",
        roi: "Structured intake removes manual rekeying and error exactly as Canada consolidates warehouses and tightens operations.",
        whatI95Does:
          "An AI intake agent that turns bulk-order documents into validated, structured orders on the Infor and D365 rails.",
        credibility: "illustrative",
        source: SRC.commercetools,
      },
    ],
    why: {
      opener: "You'll be pitched a copy of BunzlOne, or the platform name someone floated in a hallway. You do not need either yet.",
      body: "The platform pitch picks the answer before the question. Your backbone is Infor SX.enterprise and Dynamics 365 Sales, and it works. Your problem is the Canadian storefront: a marketing-site order flow asked to carry 45,000 recurring accounts through an operational reset, with the platform decision still open. That is i95Dev's lane: deep in Dynamics 365, deep in distribution commerce, surgical, at mid-market economics. We shape the storefront decision objectively, wire it to the Infor and D365 rails you already run, and prove it on account reorder for the top categories. We do not copy Europe, and we do not rip your ERP. We make Canada's storefront sell.",
      ctaTitle: "Book your AI-in-Commerce Diagnostic",
      ctaSubtitle:
        "A fixed-scope, fixed-fee assessment that validates these numbers against Bunzl Canada's real catalog, order and Infor/D365 data, and pressure-tests the storefront decision. Two weeks, not a platform rebuild.",
      credibility: { brands: "500+ B2B brands", years: "25+ years", projects: "1,200+ projects" },
    },
  },
};
