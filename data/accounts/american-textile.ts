import type { AccountConfig } from "@/lib/types";

// Sources reused across the report (Verified vs. Illustrative labelled per-claim, spec section 14).
const SRC = {
  mit: { label: "MIT NANDA, ~95% of pilots", url: "https://nanda.media.mit.edu/" },
  aeo: { label: "AI referrals +357% YoY (2025)", url: "https://www.perplexity.ai/" },
  salsify: { label: "Salsify / inriver / Syndigo, digital shelf", url: "https://www.salsify.com/" },
  watts: { label: "Watts Water, cited by Perplexity", url: "https://www.watts.com/" },
  watsco: { label: "Watsco / Adobe, AI recs +10% AOV", url: "https://www.watsco.com/" },
  rgm: { label: "CPG RGM; Asahi / EY trade promotion", url: "https://www.ey.com/" },
  mondelez: { label: "Mondelez / Accenture, GenAI content core", url: "https://www.accenture.com/" },
  genmills: { label: "General Mills, $20M+ AI savings", url: "https://www.generalmills.com/" },
  brf: { label: "BRF, SAP IBP demand sensing", url: "https://www.sap.com/" },
  usfoods: { label: "US Foods, doc-to-order at scale", url: "https://www.usfoods.com/" },
  stibo: { label: "Stibo / Informatica, Gartner MDM Leaders", url: "https://www.stibosystems.com/" },
} as const;

/**
 * American Textile Company (ATC), a discovery-stage worked account. Every section is grounded in
 * the Account-360 profile and the AI research dump, and maps 1:1 to companies/american-textile/
 * american-textile-spec.md.
 *
 * Spine: ATC does not just make bedding, it owns product knowledge no importer can copy (patents
 * behind AllerEase and Tranquility, 100 years of category authority, Centric PLM since 2022, an
 * in-house content studio). The decision is made on the digital shelf and increasingly inside an
 * AI answer. The work is structuring that product knowledge into claim-safe, machine-readable
 * content that wins every shelf and every AI answer. Write to both Brian Lehr (SVP eCommerce,
 * champion) and Karl Herleman (SVP IT, ex-Gartner economic buyer). Guardrail: no Shopify replatform,
 * no Centric PLM replace, no generic "Copilot on everything"; every content play is claim-governed.
 */
export const americanTextile: AccountConfig = {
  slug: "american-textile",
  companyName: "American Textile",
  aliases: ["American Textile Company", "ATC", "AllerEase", "Tranquility"],
  domains: ["americantextile.com"],
  vertical: "cpg",
  verticalLabel: "Performance-sleep / home-textile manufacturing",
  revenueBand: "$300–500M",
  role: "SVP eCommerce / SVP IT",
  roleEmphasis: "ecommerce",
  activeRequirement: true,
  published: true,

  thesis: "AllerEase wins 40,000 store shelves. The next shelf is the AI answer.",
  wedge:
    "Product Knowledge Intelligence, the layer that turns Centric PLM into structured content for every shelf and every AI answer",
  wedgeDetail:
    "It runs on the product data already in Centric PLM and your content studio, bolts on without touching Shopify or your retail feeds, and almost no home-textile maker has structured its claims for the AI shelf yet. The proof is fast and the window is open.",

  // ── Module 1, The Reframe (above gate) ──
  reframe: {
    opener: "Everyone here is selling you AI. The model is the cheapest thing in the room.",
    stat: "95%",
    statSource: SRC.mit,
    body: "95% of enterprise AI pilots return nothing to the P&L. They fail on data that was never made ready, not on the model. You already hold the asset most makers lack: a century of provable product knowledge, the patents behind AllerEase and Tranquility, and a Centric PLM system of record since 2022. The edge is not a smarter model. It is structuring what you already know so every shelf, every marketplace, and every AI answer carries the proof an importer cannot fake.",
  },

  // ── Module 2, The Hype Filter (above gate) ──
  hypeFilter: {
    opener: "Commodity AI runs on the model. Compounding AI runs on the product knowledge only you own.",
    commodity: [
      "A chatbot bolted onto americantextile.com",
      "AI copy that cannot vouch for an allergen claim",
      "Generic recs that ignore the brand or the retailer",
      "Basic ML demand forecasting relabeled as \"AI\"",
    ],
    compounding: [
      "Centric PLM data, enriched and syndicated to every shelf",
      "Your patents and claims, structured so the AI cites them",
      "Search and recs that know Sealy from AllerEase from private label",
      "Demand sensing that keeps Walmart in stock and penalty-free",
    ],
    pitchWarning:
      "You run Shopify Plus and Centric PLM, so expect a pitch to replatform the storefront or bolt a generic copilot onto everything. Skip both. Your edge is the product knowledge already in Centric PLM and your studio. The work is structuring and syndicating it, not rebuilding what works. And any AI that invents an allergen claim is a liability, not a feature.",
  },

  // ── Module 2.5, Your Stack (Account-360 confirmed stack) ──
  stackFlags: [
    {
      signal: "Centric PLM (Dassault), live since 2022",
      leadPlay: "Extend it downstream: AI-enrich and syndicate product knowledge to every channel",
      commodityFlag: "A PLM or PIM rip-and-replace. The unlock is the syndication layer, not a new system of record.",
    },
    {
      signal: "Shopify Plus + Shogun",
      leadPlay: "DTC search, recommendations and personalization on the channel you fully own",
      commodityFlag: "A storefront replatform. Shopify Plus is an asset; add intelligence on top.",
    },
    {
      signal: "Bazaarvoice (ratings and reviews)",
      leadPlay: "Mine reviews for claim language and content gaps, then feed the answer layer",
      commodityFlag: "\"Collect more reviews.\" The value is turning review data into structured product knowledge.",
    },
    {
      signal: "Omnisend (email and SMS)",
      leadPlay: "Lifecycle personalization tied to product data and replacement timing",
      commodityFlag: "Generic blast automation. Personalize on what the product data actually knows.",
    },
    {
      signal: "ERP / PIM / OMS (not disclosed)",
      leadPlay: "Connect the fragmented middle between Centric PLM and the channels. The foundation.",
      commodityFlag: "\"Agentforce or Copilot for everything.\" It only works once that middle is connected and clean.",
    },
  ],

  // ── Module 3, The Commodity-vs-Compounding Map (above gate) ──
  // Y: 0 commodity to 1 compounding · X: 0 foundation-required to 1 bolt-on-ready (wedge = top-right)
  mapPlays: [
    { id: "pim", label: "Product knowledge / PIM", compounding: 0.92, bolton: 0.8, magnitude: 5, lit: true, wedge: true },
    { id: "aeo", label: "Digital-shelf AEO", compounding: 0.9, bolton: 0.78, magnitude: 4, lit: true },
    { id: "search", label: "AI search + recs", compounding: 0.7, bolton: 0.75, magnitude: 3, lit: true },
    { id: "personalization", label: "DTC personalization", compounding: 0.68, bolton: 0.6, magnitude: 3, lit: true },
    { id: "rgm", label: "Retail RGM", compounding: 0.85, bolton: 0.45, magnitude: 4, lit: true },
    { id: "content", label: "Content governance", compounding: 0.75, bolton: 0.62, magnitude: 3, lit: true },
    { id: "demand", label: "Demand sensing", compounding: 0.72, bolton: 0.4, magnitude: 4, lit: true },
    { id: "mdm", label: "AI MDM / foundation", compounding: 0.88, bolton: 0.3, magnitude: 4, lit: true },
    { id: "chatbot", label: "Generic chatbot", compounding: 0.14, bolton: 0.9, magnitude: 1, lit: false },
    { id: "copy", label: "Ungoverned AI copy", compounding: 0.12, bolton: 0.8, magnitude: 1, lit: false },
    { id: "forecast", label: "ML forecasting (relabeled)", compounding: 0.4, bolton: 0.42, magnitude: 2, lit: false },
  ],

  // ── Below the gate (payoff), never in the initial payload ──
  payoff: {
    headlineOpportunity: [8, 26],
    moneyPools: [
      {
        id: "digital-shelf",
        label: "Digital shelf: win discovery across retail, marketplace and AI",
        range: [2, 9],
        note: "The decision is made on the shelf before a human is involved, and a fast-growing share of buyers now start in an AI chatbot. AI referrals grew 357% year on year and convert about 31% higher than organic. Whoever has the structured product data wins the listing, the search rank and the AI citation. Structure your patents and allergen claims once, syndicate everywhere, and the best product stops losing to the cheapest.",
        credibility: "illustrative",
        source: SRC.aeo,
      },
      {
        id: "retail-margin",
        label: "Retail margin: trade spend and mix, not list price you control",
        range: [3, 8],
        note: "You sell through Walmart and Target, so the lever is not list price, it is trade-promotion efficiency, assortment and mix. 66% of CPGs that grew both top and bottom line invested in revenue growth management. Asahi's AI trade-promotion tool lifted usage 60% and cut promo analysis to 24 hours. On a $300–500M base, one to two points of recovered trade and mix is $3–8M of near-pure margin.",
        credibility: "verified",
        source: SRC.rgm,
      },
      {
        id: "operations",
        label: "Operations: keep Walmart in stock, penalty-free",
        range: [2, 5],
        note: "Six factories, drop-ship for major e-tailers, and a Walmart Supplier-of-the-Year relationship that runs on on-time, in-full. A stockout is a lost sale and a chargeback; excess is dead working capital. Demand sensing on your own order and POS history frees about 10 to 12% of inventory and protects the service levels the relationship depends on. General Mills saved $20M+ applying AI across 5,000 daily shipments.",
        credibility: "verified",
        source: SRC.genmills,
      },
      {
        id: "dtc",
        label: "DTC: lift conversion and AOV on the channel you own",
        range: [1, 4],
        note: "Your Shopify Plus store is the one channel where you keep the full margin and the full data. AI search and recommendations grounded in product knowledge, plus lifecycle personalization through Omnisend, lift both conversion and basket. Watsco's AI recommendations added 10% AOV and 22% on mobile; Hunter Douglas drove $1M from AI-handled shopping conversations.",
        credibility: "verified",
        source: SRC.watsco,
      },
    ],
    roadmap: [
      {
        phase: "Phase 1, starts now",
        title: "Structure and syndicate product knowledge",
        body: "Enrich the product data in Centric PLM, structure the allergen, bed-bug and HeiQ claims as machine-readable, claim-safe content, and syndicate it across Walmart, marketplaces, drop-ship and DTC. Turn on the AEO extension so AI engines cite AllerEase and Tranquility. It runs on data you own and proves out fast. This is the wedge.",
        active: true,
      },
      {
        phase: "Phase 2, 3 to 6 months",
        title: "DTC intelligence on the channel you own",
        body: "AI search, recommendations and personalization on Shopify Plus, plus lifecycle through Omnisend, all grounded in the same product knowledge and mined from Bazaarvoice reviews. This is where the syndication layer first shows up as conversion and basket lift you keep in full.",
      },
      {
        phase: "Phase 3, 6 to 12 months",
        title: "Retail growth and content at scale",
        body: "Revenue growth management and trade-promotion optimization for the Walmart and Target relationship, plus content intelligence and governance that lets the studio produce spec-accurate, claim-safe content across thousands of SKUs and channels without growing headcount.",
      },
      {
        phase: "Phase 4, operations and the foundation",
        title: "Service levels and connected data",
        body: "Demand sensing and service-level optimization across the six factories and drop-ship, order orchestration across channels, and the MDM and ERP data foundation that connects the middle Herleman wants centralized. The foundation work begins quietly in Phase 1 and matures here; the data takes 18 to 24 months regardless of when you start, so the fast wins fund it while it builds.",
      },
    ],
    // ── The play shortlist, spanning the digital shelf, retail GTM, operations, and the foundation ──
    plays: [
      // DIGITAL SHELF & DISCOVERY
      {
        id: "pim",
        pillar: "storefront",
        title: "Product Knowledge Intelligence: structured data for every shelf",
        problem:
          "Your proof of superiority lives in Centric PLM and your studio, but it does not reach every Walmart listing, marketplace feed, drop-ship partner and AI engine in a consistent, structured form. So the best product gets ranked next to an import on price.",
        caseName: "Salsify, inriver, Syndigo",
        caseDetail:
          "CPG leaders run this through Salsify, 1WorldSync and Syndigo for the digital shelf; inriver and Akeneo now bulk-enrich attributes from source documents with human-in-the-loop.",
        roi: "30 to 60% of catalogs have incomplete attributes, which silently caps search, the digital shelf and AI readiness at once. Fixing it lifts all three together.",
        whatI95Does:
          "Build the Centric-PLM-to-PIM-to-channel syndication layer that enriches, claim-governs and pushes structured product knowledge to every shelf and every AI engine. No replatform.",
        credibility: "illustrative",
        source: SRC.salsify,
      },
      {
        id: "aeo",
        pillar: "storefront",
        title: "Digital-shelf AEO: be the answer, not a listing",
        problem:
          "When a shopper asks an AI for the best allergen protector or weighted blanket, the answer is built from whoever structured their data. If that is not you, your patents never enter the conversation.",
        caseName: "Watts Water",
        caseDetail:
          "Watts structured its technical content so Perplexity cites it over rivals for product-selection questions, the manufacturer playbook for the AI shelf.",
        roi: "AI referrals convert about 31% higher than organic and grew 357% year on year. Almost no home-textile maker is doing this systematically, so the window is open now.",
        whatI95Does:
          "Schema and answer-layer pipelines that make AllerEase and Tranquility machine-citable across ChatGPT, Perplexity and Google AI, fed from the same structured product knowledge.",
        credibility: "illustrative",
        source: SRC.watts,
      },
      {
        id: "search",
        pillar: "storefront",
        title: "AI search and recommendations on DTC",
        problem:
          "Bedding is a considered, spec-driven purchase (size, allergen rating, certification, firmness). Generic on-site search buries the right product and the shopper bounces to a marketplace.",
        caseName: "Watsco",
        caseDetail:
          "Watsco's AI recommendations added 10% AOV and 22% on mobile; its ML demand prediction cut lead time 15% on the same contractor platform.",
        roi: "AI search converts about 1.67x keyword. On the DTC channel you fully own, that lift is margin you keep in full.",
        whatI95Does:
          "Semantic, spec-aware search and recommendations on Shopify Plus, ranked on attributes and inventory, grounded in the product-knowledge layer.",
        credibility: "verified",
        source: SRC.watsco,
      },
      // RETAIL SALES & MARKETING
      {
        id: "rgm",
        pillar: "sales-marketing",
        title: "Revenue growth management and trade-promotion optimization",
        problem:
          "Most of your revenue runs through retailers who set the shelf price. The lever is trade spend, allowances, assortment and mix, and that money leaks across thousands of SKUs and promotions.",
        caseName: "CPG RGM, Asahi",
        caseDetail:
          "66% of CPGs that grew top and bottom line together invested in RGM. Asahi's AI trade-promotion tool lifted usage 60% and compressed promo analysis to 24 hours.",
        roi: "One to two points of recovered trade and mix on a $300–500M base is $3–8M of near-pure margin.",
        whatI95Does:
          "RGM and trade-promotion analytics on your sell-through and promotion data, surfacing mix and assortment moves and promo waste for the retail team.",
        credibility: "verified",
        source: SRC.rgm,
      },
      {
        id: "content",
        pillar: "sales-marketing",
        title: "Content intelligence and governance at studio scale",
        problem:
          "Your studio produces real content, but scaling spec-accurate, claim-safe copy across every SKU, brand and channel is a headcount problem, and in an allergen category, a compliance one. The fix is not less AI. It is AI that drafts and a compliance expert that approves.",
        caseName: "Mondelez",
        caseDetail:
          "Mondelez built a GenAI content \"digital core\" with Accenture to produce personalized content faster across its portfolio.",
        roi: "Up to 60% less manual content time, with AI drafting and category and compliance experts approving by exception. The governance is the point, not an afterthought.",
        whatI95Does:
          "An AI-assisted, human-in-the-loop content pipeline tied to the product-knowledge layer, with claim governance built in.",
        credibility: "illustrative",
        source: SRC.mondelez,
      },
      // OPERATIONS
      {
        id: "demand",
        pillar: "back-office",
        title: "Demand sensing and service-level optimization",
        problem:
          "Six factories, drop-ship for major e-tailers, and retailers who penalize anything less than on-time, in-full. Classic forecasting misses the signal until the stockout or the chargeback.",
        caseName: "General Mills, BRF",
        caseDetail:
          "General Mills saved $20M+ applying AI across 5,000 daily shipments; BRF's SAP IBP demand sensing cut planning time 33%.",
        roi: "Demand sensing frees about 10 to 12% of inventory working capital and protects the Walmart and Target service levels the relationship depends on.",
        whatI95Does:
          "Layer demand sensing and service-level analytics onto your forecasting and order data so planners see the gap before it becomes a penalty.",
        credibility: "verified",
        source: SRC.genmills,
      },
      {
        id: "orders",
        pillar: "back-office",
        title: "Order orchestration across channels and drop-ship",
        problem:
          "You sell retail, DTC, marketplace and drop-ship for major e-tailers. As SKUs and channels grow, order exceptions get handled by hand and service levels slip.",
        caseName: "US Foods, JPW Industries",
        caseDetail:
          "JPW Industries cut order processing from 16 to 24 hours down to under 1 hour with order automation; US Foods automates image-and-doc-to-order at scale.",
        roi: "Fewer manual touches, faster fulfillment, and the headroom to add channels without adding back-office cost.",
        whatI95Does:
          "An order-orchestration and OMS layer that routes and reconciles orders across retail, DTC, marketplace and drop-ship from one source of truth.",
        credibility: "verified",
        source: SRC.usfoods,
      },
      // FOUNDATION
      {
        id: "mdm",
        pillar: "foundation",
        title: "AI Master Data and the connected-data foundation",
        problem:
          "Centric PLM is the upstream source of truth, but the middle between it and the channels is fragmented, and ERP, PIM and OMS identities are unconfirmed. 87% of leaders say bad data has hampered AI value, and every play above runs on this.",
        caseName: "Stibo, Informatica",
        caseDetail:
          "Stibo and Informatica (Gartner MDM Leaders) govern product and customer data continuously; TCS built Alstom's AI-driven MDM backbone for a unified view.",
        roi: "60 to 70% less manual stewardship, and it gates the ROI of every other initiative. The cheapest insurance on the whole portfolio, and exactly the centralization Herleman has asked for.",
        whatI95Does:
          "AI-enriched MDM and PIM that connects Centric PLM to the channels and feeds search, the shelf, content and operations from one source of truth, with an ERP and analytics assessment to confirm the middle.",
        credibility: "illustrative",
        source: SRC.stibo,
      },
    ],
    why: {
      opener: "You'll be sold a transformation. Your problem is the gap between Centric PLM and the shelf.",
      body: "The Big-4 are built for enterprise-wide change. Your problem is not enterprise-wide. It is the unbuilt layer between the product knowledge you already own and the shelves where buyers decide. For a company whose moat is provable product superiority, losing the digital shelf means losing on the one axis where you should always win. That is exactly i95Dev's lane: surgical, deep in commerce, PIM and ERP, data-foundation first, on mid-market economics. We do not replatform Shopify and we do not replace Centric PLM. We make the product knowledge you have already invested in win every shelf and every AI answer.",
      ctaTitle: "Book your Product Knowledge and AI-Shelf Diagnostic",
      ctaSubtitle:
        "A fixed-scope, fixed-fee assessment that maps how product data flows from Centric PLM to every shelf today, where it breaks, and what it is worth to fix. Built to be validated against ATC's real data. Weeks, not a multi-million transformation.",
      credibility: { brands: "500+ B2B brands", years: "25+ years", projects: "1,200+ projects" },
    },
  },
};
