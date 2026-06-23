import type { AccountConfig } from "@/lib/types";

// Sources reused across the report (Verified vs. Illustrative labelled per-claim, spec section 14).
const SRC = {
  mit: { label: "MIT NANDA, ~95% of pilots", url: "https://nanda.media.mit.edu/" },
  kawasaki: { label: "Kawasaki Engines, 5x AOV B2B portal; TradeCentric / Bob Barker", url: "https://www.tradecentric.com/" },
  mck: { label: "McKinsey B2B pricing, $15B distributor +200bps", url: "https://www.mckinsey.com/" },
  brf: { label: "BRF, SAP IBP demand sensing", url: "https://www.sap.com/" },
  fp: { label: "Fisher & Paykel, self-service 40% to 70%", url: "https://www.salesforce.com/" },
  usfoods: { label: "US Foods, doc-to-order at scale", url: "https://www.usfoods.com/" },
  stibo: { label: "Stibo / Informatica, Gartner MDM Leaders", url: "https://www.stibosystems.com/" },
} as const;

/**
 * Bob Barker Company (BBC), a warm, active worked account. Every section is grounded in the
 * Account-360 profile and the AI research dump, and maps 1:1 to companies/bob-barker/
 * bob-barker-spec.md.
 *
 * Spine: BBC does not win on product, it wins by being the easiest institution to buy from on
 * contract. Its 38% revenue lift came from TradeCentric PunchOut integrated into how government
 * buyers order, not from a model. It is mid-replatform (Shopify vs Oro vs BigCommerce, ~$1M
 * budget) and the CRO is running a "Time Based Analysis 2026" to strip non-value-adding time.
 * The work is making the replatform a connected-commerce engine, contract-accurate self-service
 * ordering and exception resolution on the NetSuite and TradeCentric that already drove the 38%.
 * Write to Dave Sheets (Director eCommerce, the 38% champion), Garrett Riley (replatform sponsor)
 * and Mark Bacon (CRO, waste and pricing). Guardrail: no ERP rip-out (NetSuite, TradeCentric stay),
 * the replatform is not a theme project, ERP integration is the how not the headline, and no AI
 * marketing to agencies already locked into the contracts. Life-safety category: keep it dignified.
 */
export const bobBarker: AccountConfig = {
  slug: "bob-barker",
  companyName: "Bob Barker",
  aliases: ["Bob Barker Company", "BBC", "Officers Only"],
  domains: ["bobbarker.com"],
  vertical: "industrial-distribution",
  verticalLabel: "Institutional / correctional supplies distribution",
  revenueBand: "~$43M",
  role: "Director eCommerce / Digital Strategy / CRO",
  roleEmphasis: "ecommerce",
  activeRequirement: true,
  published: true,

  thesis: "PunchOut grew you 38%. The next gain is the order no rep has to touch.",
  wedge:
    "Contract-accurate self-service, the connected-commerce layer that lets every institutional buyer order, reorder and resolve exceptions without a rep",
  wedgeDetail:
    "It runs on the contracts and order history you own, on the TradeCentric engine that drove the 38%. It lands inside the replatform you are already funding, and it attacks the rep time your Time Based Analysis is hunting. The proof is fast and the budget is approved.",

  // ── Module 1, The Reframe (above gate) ──
  reframe: {
    opener: "Everyone here is selling you AI. The model is the cheapest thing in the room.",
    stat: "95%",
    statSource: SRC.mit,
    body: "95% of enterprise AI pilots return nothing to the P&L. They sit next to the work instead of inside it. You already proved the opposite: your 38% lift came from PunchOut integrated into how buyers actually order, not from a model. The edge now is not a smarter algorithm. It is pointing ordinary automation at what Charm-Tex and Victory Supply cannot copy: your cooperative and state contracts, your order history, and the procurement integration that already grew you.",
  },

  // ── Module 2, The Hype Filter (above gate) ──
  hypeFilter: {
    opener: "Commodity AI runs on the model. Compounding AI runs on the contracts and the integration only you own.",
    commodity: [
      "A chatbot bolted onto the storefront",
      "A flashy replatform that is just a new theme",
      "AI marketing blasts to agencies already on your contracts",
      "Generic recs that ignore contract pricing and approved items",
    ],
    compounding: [
      "Self-service ordering that is contract-accurate by default",
      "Exceptions (returns, credits, backorders) resolved without a rep",
      "Cost-to-serve pricing that holds margin through inflation",
      "PunchOut and OMS extended on the engine that grew you 38%",
    ],
    pitchWarning:
      "You are choosing between Shopify, Oro and BigCommerce, so expect pitches that make this a storefront project. The platform is the easy part. The value is contract pricing, entitlements, PunchOut and self-service exception handling carried into whichever you pick. Do not rip out NetSuite or TradeCentric; they are the engine behind your 38%. And do not buy AI to market to agencies already locked into your contracts. Spend it making them effortless to serve.",
  },

  // ── Module 2.5, Your Stack (Account-360 confirmed stack) ──
  stackFlags: [
    {
      signal: "NetSuite (ERP + CRM), Blu Banyan SI",
      leadPlay: "Flow contract pricing and inventory truth into self-service ordering",
      commodityFlag: "An ERP rip-out. NetSuite is the system of record; integrate, do not replace.",
    },
    {
      signal: "TradeCentric PunchOut (the 38% engine)",
      leadPlay: "Extend PunchOut and PO automation to more cooperative and state buyers",
      commodityFlag: "\"PunchOut is done.\" It is the proven growth lever; widen it.",
    },
    {
      signal: "SuiteCommerce, evaluating Shopify / Oro / BigCommerce",
      leadPlay: "De-risk the choice; make contract logic and self-service the spine, not the theme",
      commodityFlag: "A replatform sold on templates. Pick for B2B contract logic, not looks.",
    },
    {
      signal: "Searchspring + HubSpot",
      leadPlay: "Guided reorder and search for institutional catalogs, nurtured on contract data",
      commodityFlag: "More martech. The win is guided ordering on the contracts you already hold.",
    },
    {
      signal: "ComputerTalk + Five9 contact center",
      leadPlay: "Deflect the order exceptions reps handle by hand across systems",
      commodityFlag: "\"Add more agents.\" The exceptions should resolve themselves.",
    },
  ],

  // ── Module 3, The Commodity-vs-Compounding Map (above gate) ──
  // Y: 0 commodity to 1 compounding · X: 0 foundation-required to 1 bolt-on-ready (wedge = top-right)
  mapPlays: [
    { id: "self-service", label: "Contract self-service commerce", compounding: 0.9, bolton: 0.82, magnitude: 5, lit: true, wedge: true },
    { id: "exceptions", label: "Order-exception self-service", compounding: 0.82, bolton: 0.78, magnitude: 4, lit: true },
    { id: "pricing", label: "Cost-to-serve pricing / RGM", compounding: 0.85, bolton: 0.5, magnitude: 4, lit: true },
    { id: "bid", label: "Bid and contract intelligence", compounding: 0.7, bolton: 0.55, magnitude: 3, lit: true },
    { id: "search", label: "Guided search / reorder", compounding: 0.62, bolton: 0.72, magnitude: 2, lit: true },
    { id: "demand", label: "Demand + supplier risk", compounding: 0.7, bolton: 0.4, magnitude: 3, lit: true },
    { id: "oms", label: "Connected OMS / orchestration", compounding: 0.65, bolton: 0.45, magnitude: 3, lit: true },
    { id: "foundation", label: "ERP-to-commerce foundation", compounding: 0.85, bolton: 0.32, magnitude: 4, lit: true },
    { id: "chatbot", label: "Generic chatbot", compounding: 0.14, bolton: 0.9, magnitude: 1, lit: false },
    { id: "theme", label: "Replatform as a new theme", compounding: 0.2, bolton: 0.85, magnitude: 1, lit: false },
    { id: "marketing", label: "AI marketing to locked-in buyers", compounding: 0.15, bolton: 0.7, magnitude: 1, lit: false },
  ],

  // ── Below the gate (payoff), never in the initial payload ──
  payoff: {
    headlineOpportunity: [1.5, 6],
    moneyPools: [
      {
        id: "connected-commerce",
        label: "Connected commerce: extend the 38%, more self-service on contract",
        range: [0.5, 2],
        note: "The 38% lift came from PunchOut into customer ERPs. Most cooperative and state buyers still are not on it. Kawasaki Engines grew average order value 5x after launching a B2B self-service portal. Widening contract-accurate self-service to more NASPO and OMNIA buyers extends the exact lever that already worked.",
        credibility: "verified",
        source: SRC.kawasaki,
      },
      {
        id: "margin",
        label: "Margin: cost-to-serve pricing that holds through inflation",
        range: [0.5, 1.5],
        note: "Your CRO is balancing competitive bid pricing against supply-chain cost across sourcing in 11+ countries. Cost-to-serve-aware pricing and bid-margin discipline protect the points you would otherwise give away. A McKinsey-cited $15B distributor recovered 200 basis points in 10 weeks. One to two points on a $43M base is real money at near-pure margin.",
        credibility: "verified",
        source: SRC.mck,
      },
      {
        id: "operations",
        label: "Operations: never stock out a mandated item",
        range: [0.3, 1],
        note: "You supply life-safety items to facilities that cannot run out. A stockout on a mandated safety item is a facility risk, not a fill-rate metric. Demand sensing on your own order and contract history frees working capital while protecting those service levels, and supplier-risk monitoring across 11+ country sourcing heads off disruption before it reaches a facility. BRF's SAP IBP demand sensing cut planning time 33%.",
        credibility: "verified",
        source: SRC.brf,
      },
      {
        id: "time-saved",
        label: "Time saved: the exceptions that resolve without a rep",
        range: [0.3, 1.5],
        note: "This is the Time Based Analysis mandate in dollars. Reps hand-navigate multiple systems for returns, credits, backorders and tracking. Fisher & Paykel moved self-service from 40% to 70% with AI and saved 3,300 hours a month; JPW Industries cut order processing from 16 to 24 hours down to under 1 hour. Automating exceptions converts rep time into capacity without adding headcount.",
        credibility: "verified",
        source: SRC.fp,
      },
    ],
    roadmap: [
      {
        phase: "Phase 1, starts now",
        title: "Make the replatform a connected-commerce engine",
        body: "Choose the platform on contract logic, not templates, and carry contract pricing, entitlements, PunchOut and approved-item catalogs into it as the spine. Make contract-accurate self-service ordering the first thing that ships. It runs on the budget already approved. This is the wedge.",
        active: true,
      },
      {
        phase: "Phase 2, 3 to 6 months",
        title: "Exception automation and self-service support",
        body: "Returns, credits, backorders and tracking resolve without a rep navigating five systems, on the ComputerTalk and Five9 footprint you already run. Add guided search and reorder through Searchspring. This is the Time Based Analysis mandate, shipped.",
      },
      {
        phase: "Phase 3, 6 to 12 months",
        title: "Margin and bid intelligence",
        body: "Cost-to-serve-aware pricing for the CRO, and faster compliant bid and contract assembly for NASPO, OMNIA and state-term expansion. Protect the points inflation is taking and win more of the contracts you already know how to win.",
      },
      {
        phase: "Phase 4, operations and the foundation",
        title: "Service levels and connected data",
        body: "Demand sensing and supplier-risk monitoring across the 11+ country sourcing base, order orchestration across NetSuite, commerce and PunchOut, and the data foundation that makes contract pricing and inventory one source of truth. The integration work begins quietly in Phase 1 and matures here.",
      },
    ],
    // ── The play shortlist, spanning connected commerce, margin and growth, operations, and the foundation ──
    plays: [
      // CONNECTED COMMERCE & THE BUYER EXPERIENCE
      {
        id: "self-service",
        pillar: "storefront",
        title: "Contract-accurate self-service ordering",
        problem:
          "A government buyer on a multi-year contract still needs a rep for too many orders, and the new platform could easily ship as a prettier storefront that does not fix that.",
        caseName: "Kawasaki Engines",
        caseDetail:
          "Kawasaki Engines grew average order value 5x after launching B2B self-service; your own 38% lift came from the same friction-removal through TradeCentric.",
        roi: "Self-service that is contract-accurate by default converts rep-assisted orders into hands-off orders and extends the lever that already grew you 38%.",
        whatI95Does:
          "Build contract pricing, entitlements, approved-item catalogs and PunchOut as the spine of the new platform, on NetSuite and TradeCentric. No rip-out.",
        credibility: "verified",
        source: SRC.kawasaki,
      },
      {
        id: "exceptions",
        pillar: "storefront",
        title: "AI order-exception resolution and self-service support",
        problem:
          "Reps hand-navigate multiple systems for returns, credits, backorders, tracking and carrier issues. Every exception is manual, which is exactly the time the CRO wants back.",
        caseName: "Fisher & Paykel, JPW Industries",
        caseDetail:
          "Fisher & Paykel moved self-service from 40% to 70% with an AI agent and saved 3,300 hours a month; JPW Industries cut order processing from 16 to 24 hours to under 1 hour.",
        roi: "Deflecting exceptions converts rep hours into capacity without adding headcount, directly against the Time Based Analysis target.",
        whatI95Does:
          "An AI support and exception layer over NetSuite, commerce and the contact center that resolves the common cases and routes only true exceptions to a person.",
        credibility: "verified",
        source: SRC.fp,
      },
      {
        id: "search",
        pillar: "storefront",
        title: "Guided search and reorder for institutional catalogs",
        problem:
          "Facility buyers reorder known items on a schedule, but finding the contract-approved SKU and the right size or grade is still clumsy, so they call.",
        caseName: "US Foods",
        caseDetail:
          "US Foods automates image-and-doc-to-order at scale; Searchspring is already in your stack.",
        roi: "Guided, contract-aware reorder turns routine purchasing into self-service and frees the desk for real exceptions.",
        whatI95Does:
          "Spec-aware, contract-filtered search and one-click reorder on the new platform, ranked on approved items and inventory.",
        credibility: "verified",
        source: SRC.usfoods,
      },
      // MARGIN & GROWTH
      {
        id: "pricing",
        pillar: "sales-marketing",
        title: "Cost-to-serve pricing and bid-margin intelligence",
        problem:
          "Your CRO balances competitive bid pricing against rising supply-chain cost from 11+ country sourcing, across thousands of contract line items. Margin leaks where cost-to-serve is invisible.",
        caseName: "McKinsey, Zilliant",
        caseDetail:
          "A McKinsey-cited $15B distributor recovered 200 basis points in 10 weeks; Zilliant and PROS run distributor RGM in production.",
        roi: "One to two points of recovered margin on a $43M base is near-pure profit, and it compounds across every renewal and rebid.",
        whatI95Does:
          "Cost-to-serve and bid-margin analytics on your order, cost and contract data, surfacing where to hold price and where you are giving margin away.",
        credibility: "verified",
        source: SRC.mck,
      },
      {
        id: "bid",
        pillar: "sales-marketing",
        title: "Bid and contract assembly intelligence",
        problem:
          "Growth runs through cooperative and state RFPs (NASPO, OMNIA, state-term). Assembling compliant, competitive bids is slow and expert-bound.",
        caseName: "Governed GenAI bid assembly",
        caseDetail:
          "GenAI proposal assembly is an emerging discipline; the right model is AI-drafted and expert-approved, never autonomous, given the compliance stakes.",
        roi: "Faster, more consistent bids let you pursue more contracts with the same team, on the contracts you already know how to win.",
        whatI95Does:
          "An AI-assisted, human-governed bid-assembly workflow grounded in your won-contract history and approved pricing.",
        credibility: "illustrative",
      },
      // OPERATIONS & THE FOUNDATION
      {
        id: "demand",
        pillar: "back-office",
        title: "Demand sensing and supplier-risk across global sourcing",
        problem:
          "You supply life-safety items to facilities that cannot run out, while sourcing from 11+ countries under inflation. Classic forecasting misses the signal until the stockout.",
        caseName: "BRF, Resilinc",
        caseDetail:
          "BRF's SAP IBP demand sensing cut planning time 33%; supplier-risk networks like Resilinc and Everstream give 60 to 90 day advance warnings.",
        roi: "Demand sensing frees about 10 to 12% of inventory working capital while protecting the service levels the contracts require.",
        whatI95Does:
          "Layer demand sensing and supplier-risk signals onto your forecasting and order data so planners see disruption before a facility does.",
        credibility: "verified",
        source: SRC.brf,
      },
      {
        id: "foundation",
        pillar: "foundation",
        title: "Connected operations and the ERP-to-commerce data foundation",
        problem:
          "NetSuite, TradeCentric, the new platform and the contact center each hold part of the truth, and the rep in the middle is the integration. 87% of leaders say bad data has hampered AI value, and every play above runs on this.",
        caseName: "Stibo, Informatica",
        caseDetail:
          "Stibo and Informatica (Gartner MDM Leaders) govern product, customer and contract data continuously; Blu Banyan already anchors your NetSuite.",
        roi: "One source of truth for contract pricing, entitlements and inventory gates the ROI of every other play, and it is the cheapest insurance on the whole portfolio.",
        whatI95Does:
          "An order-orchestration and data layer connecting NetSuite, commerce and PunchOut so contract pricing and inventory are one truth, with an assessment to confirm the middle.",
        credibility: "illustrative",
        source: SRC.stibo,
      },
    ],
    why: {
      opener: "You'll be sold a new storefront. Your gain is the order no rep has to touch.",
      body: "The platform vendors will make this about templates, and the Big-4 will make it a transformation. Your problem is neither. It is carrying contract pricing, PunchOut and self-service exception handling into the platform you are already choosing, on the NetSuite and TradeCentric that grew you 38%. That is exactly i95Dev's lane: surgical where the Big-4 are sprawling, fluent in the commerce-to-ERP seam, priced for a company your size. We do not replace your systems of record. We make the replatform the connected-commerce engine your Time Based Analysis is asking for.",
      ctaTitle: "Book your Connected-Commerce and Replatform Diagnostic",
      ctaSubtitle:
        "A fixed-scope, fixed-fee assessment that de-risks the Shopify vs Oro vs BigCommerce decision, maps where rep time leaks today, and sizes the self-service and margin upside against Bob Barker's real data. Weeks, not a multi-million transformation.",
      credibility: { brands: "500+ B2B brands", years: "25+ years", projects: "1,200+ projects" },
    },
  },
};
