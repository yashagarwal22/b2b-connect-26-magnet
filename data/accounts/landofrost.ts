import type { AccountConfig } from "@/lib/types";

// Sources reused across the report (Verified vs. Illustrative labelled per-claim, spec section 14).
const SRC = {
  mit: { label: "MIT NANDA, ~95% of pilots", url: "https://nanda.media.mit.edu/" },
  novacura: { label: "IFS + Novacura Flow, 15,000+ transactions/day (Novacura case study)", url: "https://www.novacura.com/" },
  kawasaki: { label: "Kawasaki Engines USA, B2B dealer portal AOV +5x (DC360)", url: "https://www.salesforce.com/" },
  jpw: { label: "JPW Industries, order processing 16–24h to under 1h (Salesforce)", url: "https://www.salesforce.com/" },
  usfoods: { label: "US Foods MOXe, +1.3M cases/yr (DC360)", url: "https://www.usfoods.com/" },
  commercetools: { label: "commercetools B2B Intake Agent (DC360)", url: "https://commercetools.com/" },
  pricefx: { label: "Pricefx, $15M first-year value (lubricants maker)", url: "https://www.pricefx.com/" },
  zilliant: { label: "Zilliant, +134bps margin in foodservice", url: "https://zilliant.com/" },
  jci: { label: "Johnson Controls, $100M+ protectable revenue (Beyond the Arc / JCI)", url: "https://www.johnsoncontrols.com/" },
  generalmills: { label: "General Mills, $20M+ verified AI savings (CIO Dive)", url: "https://www.generalmills.com/" },
  brf: { label: "BRF SAP IBP demand sensing, -33% planning time (SAP)", url: "https://www.sap.com/" },
  dawnfoods: { label: "Dawn Foods, AI search 75%+ digital adoption (DC360)", url: "https://www.dawnfoods.com/" },
  akeneo: { label: "Akeneo / inriver agentic PIM", url: "https://www.akeneo.com/" },
} as const;

/**
 * Land O'Frost, an order-to-cash automation account (greenfield commerce, gated on an ERP seam). Every
 * section is grounded in the Account-360 profile and the AI research dump, and maps 1:1 to
 * companies/landofrost/landofrost-spec.md.
 *
 * Spine: Land O'Frost is an ~$800M multi-brand meat manufacturer that takes orders the way it did in
 * 1995. Retailers like Walmart and Kroger and foodservice distributors buy at national scale, but the
 * orders arrive by EDI, phone and email. The website is a WordPress brochure with no B2B ordering
 * channel. Yet the plant floor runs IFS with a Novacura Flow low-code layer processing 15,000+
 * transactions a day. So the unlock is order-to-cash automation: a B2B portal that lets distributors
 * and foodservice buyers place, track and reorder without a human keying it in. The one hard gate is
 * that IFS is NOT in i95Dev's native ERP set, so the integration path must be validated with Chris
 * Wheeler before any platform talk. Lead with the portal for Saverio Spontella (CCO, owns the budget),
 * carry a parallel RGM/pricing thread for Marc Kennedy (Director RGM, the attendee). Guardrails: never
 * claim a native IFS connector, never rip out the floor, pilot on a sub-brand (Wellshire or DaBecca).
 */
export const landOFrost: AccountConfig = {
  slug: "landofrost",
  companyName: "Land O'Frost",
  aliases: [
    "Land O Frost",
    "LandOFrost",
    "Wellshire",
    "Wellshire Farms",
    "Wimmer's",
    "DaBecca",
  ],
  domains: ["landofrost.com"],
  vertical: "cpg",
  verticalLabel: "Branded deli/lunch meat manufacturing",
  revenueBand: "$750–868M",
  role: "Director of Revenue Growth Management",
  roleEmphasis: "rgm",
  activeRequirement: true,
  published: true,

  thesis: "Your plant floor runs on real-time data. Your order desk runs on a phone.",
  wedge:
    "A B2B foodservice and distributor ordering portal, gated on a validated IFS integration path, piloted on a single sub-brand",
  wedgeDetail:
    "High value and a true greenfield. No commerce incumbent to displace. The only risk is the ERP seam, so the first work is validating the IFS path with Chris Wheeler, possibly bridged through the Novacura Flow layer Land O'Frost already runs. Pilot on Wellshire or DaBecca to keep the core IFS production environment untouched.",

  // ── Module 1, The Reframe (above gate) ──
  reframe: {
    opener: "Everyone here is selling you AI. You do not have a working order button yet.",
    stat: "95%",
    statSource: SRC.mit,
    body: "95% of enterprise AI pilots return nothing to the P&L. They sit next to the work instead of inside it. Your problem is upstream of all of that. Walmart, Kroger and your foodservice distributors order at national scale, and the orders still come in by EDI, phone and email. Your plant floor already runs IFS with 15,000 Novacura transactions a day. The order desk never got the same treatment. The unlock is not a smarter model. It is a front door that writes straight into the system your floor already trusts.",
  },

  // ── Module 2, The Hype Filter (above gate) ──
  hypeFilter: {
    opener: "Commodity AI runs on the model. Compounding AI runs on the orders and brands only you own.",
    commodity: [
      "A chatbot bolted onto the WordPress site",
      "A generic DTC storefront nobody asked for",
      "\"AI pricing\" with no clean transaction history to learn from",
      "A glossy replatform of a brochure that has no cart",
    ],
    compounding: [
      "A B2B portal that writes orders straight into IFS",
      "Distributor reordering on your real price and pack data",
      "RGM grounded in portal order data you finally capture",
      "A sub-brand pilot that proves the IFS path before you scale",
    ],
    pitchWarning:
      "You run IFS, and most commerce vendors will either claim a native connector they do not have or quietly steer you to rip out and replatform. Refuse both. The honest first step is validating the IFS integration path with your own team, and you already own the Novacura Flow layer that bridges IFS today.",
  },

  // ── Module 2.5, Your Stack (verified from the Account 360 and Novacura case study) ──
  stackFlags: [
    {
      signal: "IFS ERP (core production)",
      leadPlay: "A validated integration path is the whole game. Get the order channel writing into IFS cleanly.",
      commodityFlag: "A \"native IFS connector\" that does not exist, or a full ERP-side rebuild. The unlock is a bridge, not a replatform.",
    },
    {
      signal: "Novacura Flow (low-code, 15K+ txns/day)",
      leadPlay: "Use the low-code layer you already trust as the IFS bridge for the portal, not just the shop floor.",
      commodityFlag: "A brand-new middleware stack. You may already own the bridge.",
    },
    {
      signal: "WordPress brochure site",
      leadPlay: "Stand up a real B2B portal beside it. Clean greenfield, no incumbent to rip out.",
      commodityFlag: "A glossy marketing-site redesign that still has no cart.",
    },
    {
      signal: "EDI / phone / email order intake",
      leadPlay: "Automate order-to-cash: self-service ordering, reorder, status, straight into IFS.",
      commodityFlag: "\"AI everywhere\" before the basic order channel exists. Sequence it.",
    },
  ],

  // ── Module 3, The Commodity-vs-Compounding Map (above gate) ──
  // Y: 0 commodity to 1 compounding · X: 0 foundation-required to 1 bolt-on-ready (wedge = top-right)
  mapPlays: [
    { id: "portal", label: "B2B ordering portal (sub-brand pilot)", compounding: 0.88, bolton: 0.82, magnitude: 5, lit: true, wedge: true },
    { id: "ifs-path", label: "IFS integration path (the gate)", compounding: 0.92, bolton: 0.6, magnitude: 4, lit: true },
    { id: "order-automation", label: "Order automation (EDI/email to order)", compounding: 0.8, bolton: 0.7, magnitude: 4, lit: true },
    { id: "reorder-nba", label: "Distributor reorder + NBA", compounding: 0.82, bolton: 0.55, magnitude: 4, lit: true },
    { id: "rgm", label: "RGM / pricing (for Kennedy)", compounding: 0.9, bolton: 0.4, magnitude: 5, lit: true },
    { id: "demand-sensing", label: "Demand sensing / trade-promo", compounding: 0.72, bolton: 0.34, magnitude: 3, lit: true },
    { id: "pim", label: "AI PIM / product data", compounding: 0.85, bolton: 0.45, magnitude: 3, lit: true },
    { id: "agentic", label: "Agentic-commerce ready", compounding: 0.95, bolton: 0.18, magnitude: 4, lit: true },
    { id: "dtc", label: "Generic DTC storefront", compounding: 0.2, bolton: 0.8, magnitude: 1, lit: false },
    { id: "chatbot", label: "Chatbot on the brochure", compounding: 0.14, bolton: 0.88, magnitude: 1, lit: false },
    { id: "ai-pricing", label: "\"AI pricing\" with no order data", compounding: 0.45, bolton: 0.4, magnitude: 2, lit: false },
  ],

  // ── Below the gate (payoff), never in the initial payload ──
  payoff: {
    headlineOpportunity: [4, 14],
    moneyPools: [
      {
        id: "order-intake",
        label: "Order intake: kill the manual keying and the errors",
        range: [1, 4],
        note: "Every EDI exception, phone order and emailed PO is a person, a delay and an error. JPW Industries cut order processing from 16–24 hours to under one hour by automating email and fax intake. At Land O'Frost's order volume, self-service ordering and straight-through processing into IFS frees real headcount and cuts the costly mistakes a manual desk makes daily.",
        credibility: "verified",
        source: SRC.jpw,
      },
      {
        id: "margin",
        label: "Margin: pricing and trade spend you can finally see",
        range: [1.5, 5],
        note: "Today the order data lives in fax piles and inboxes, so nobody can price against it. A portal makes every line, price and promo visible for the first time, and that is the raw material for revenue growth management. Pricefx delivered $15M in first-year value for a lubricants maker. This is Marc Kennedy's pool.",
        credibility: "illustrative",
        source: SRC.pricefx,
      },
      {
        id: "installed-base",
        label: "Installed base: defend and grow the buyers you own",
        range: [1, 4],
        note: "Selling more to distributors who already carry your brands is far cheaper than winning new ones, and cross-sell converts several times more often. Kawasaki Engines USA grew average order value 5x after launching a B2B dealer portal. With four brands across one buyer base, reorder nudges and next-best-action on portal data defend and expand the accounts you already own.",
        credibility: "verified",
        source: SRC.kawasaki,
      },
      {
        id: "operations",
        label: "Operations: protect the lines and the inventory",
        range: [0.5, 3],
        note: "You just consolidated to three plants. That makes demand-signal accuracy and inventory positioning matter more, not less. General Mills booked $20M+ in verified savings applying AI across 5,000+ daily shipments, and BRF's SAP IBP demand sensing cut planning time 33%. Layer demand sensing onto IFS and the portal's order signal so the network you optimized stays in stock without dead capital.",
        credibility: "verified",
        source: SRC.generalmills,
      },
    ],
    roadmap: [
      {
        phase: "Phase 1, starts now",
        title: "Integration-first proof, then a sub-brand B2B portal",
        body: "First validate the IFS integration path with Chris Wheeler, possibly bridged through Novacura Flow. Do not claim a native connector. Then ship a B2B ordering portal for a single sub-brand (Wellshire or DaBecca) that writes orders straight into IFS, well clear of the core production environment. This is the wedge: it proves the seam and the value at once, inside the new CCO's first window.",
        active: true,
      },
      {
        phase: "Phase 2, 3 to 6 months",
        title: "Scale the portal across brands and foodservice",
        body: "Roll the proven pattern across all four brands and the foodservice/distributor base. Add order status, self-service reorder and EDI fallback so no buyer is left on the phone. This becomes the order-to-cash backbone the company never had.",
      },
      {
        phase: "Phase 3, 6 to 12 months",
        title: "RGM, reorder intelligence and personalization",
        body: "With clean portal order data flowing, turn on revenue growth management: price and trade-promo visibility, margin floors, win-aware quoting. Add cross-sell and reorder next-best-action on the installed base. This is the pool we reserved for Marc Kennedy, and it only works once Phases 1 and 2 produce the data.",
      },
      {
        phase: "Phase 4, back office and the agentic bet",
        title: "Demand sensing, trade-promo, agentic readiness",
        body: "Layer demand sensing and trade-promotion optimization onto IFS and the portal signal, and make the catalog machine-readable for the AI buyers coming next (Google AP2, Anthropic MCP). Gartner expects 90% of B2B purchases to be AI-intermediated by 2028. For a company with no digital order channel today, the risk is not being behind. It is being invisible.",
      },
    ],
    // ── The play shortlist, across order-to-cash, revenue growth, operations and the foundation ──
    plays: [
      // STOREFRONT AND ORDER-TO-CASH
      {
        id: "portal",
        pillar: "storefront",
        title: "The B2B foodservice/distributor portal",
        problem:
          "Distributors and foodservice buyers order at national scale by EDI, phone and email. Every order is keyed by hand, every exception is a call, and you have no system of record for what was bought at what price.",
        caseName: "Kawasaki Engines USA, JPW Industries",
        caseDetail:
          "Kawasaki Engines USA grew average order value 5x after launching a Salesforce B2B portal with dealer order automation. JPW Industries cut order processing from 16–24 hours to under one hour.",
        roi: "Self-service ordering removes manual keying, cuts error-driven credits, and frees the order desk for exceptions. The portal is also the only clean source of the order data every later play needs.",
        whatI95Does:
          "Build the B2B portal on Adobe Commerce or BigCommerce, piloted on one sub-brand, writing orders into IFS through a validated path. No replatform of the WordPress site, no claim of a native IFS connector.",
        credibility: "verified",
        source: SRC.kawasaki,
      },
      {
        id: "ifs-path",
        pillar: "storefront",
        title: "IFS integration path, validated first",
        problem:
          "The portal is worthless if orders do not land cleanly in IFS. IFS is not in the standard connector set most vendors carry, and a wrong claim here sinks the project.",
        caseName: "Land O'Frost / Novacura, Nolato",
        caseDetail:
          "Land O'Frost already runs Novacura Flow as its low-code IFS layer, processing 15,000+ transactions a day. Nolato ran a clean IFS 9 implementation bridged through Novacura. The bridge pattern is proven on your own stack.",
        roi: "De-risks the entire portfolio. A validated seam turns every downstream play from a maybe into a build.",
        whatI95Does:
          "Lead with an integration-first point of view: validate the IFS path with Chris Wheeler, scope the Novacura Flow bridge or a middleware adapter, and confirm it before any platform talk.",
        credibility: "verified",
        source: SRC.novacura,
      },
      {
        id: "order-automation",
        pillar: "storefront",
        title: "Order automation: EDI and email intake into the system of record",
        problem:
          "Even with a portal, large retail and foodservice partners send EDI and email POs. Today those are reconciled by hand against the floor.",
        caseName: "US Foods MOXe, commercetools",
        caseDetail:
          "US Foods' MOXe platform handles image-and-doc-to-order and AI search at scale, adding 1.3M cases a year. commercetools' B2B Intake Agent turns emails, PDFs and spreadsheets into structured quotes.",
        roi: "Touchless intake of the orders that cannot move to self-service captures the long tail that a portal alone misses.",
        whatI95Does:
          "Wire EDI and document-to-order intake into the same IFS-integrated order layer, so every channel lands in one place.",
        credibility: "verified",
        source: SRC.usfoods,
      },
      // SALES, MARKETING AND REVENUE GROWTH (the Kennedy angle)
      {
        id: "rgm",
        pillar: "sales-marketing",
        title: "Revenue growth management and pricing visibility",
        problem:
          "RGM needs clean, line-level transaction data. With orders living in fax piles and inboxes, price realization and trade-promo effectiveness are guesswork. You manage four brands across one buyer base with no single view of what each pays.",
        caseName: "Pricefx, Zilliant",
        caseDetail:
          "Pricefx delivered $15M in first-year value for a lubricants maker; Zilliant lifted margin 134 basis points in foodservice.",
        roi: "One point of realized price drops almost entirely to margin. The portal is what finally makes that point measurable and enforceable.",
        whatI95Does:
          "Once portal order data flows, stand up price and trade-promo visibility, margin floors and win-aware quoting, mapped to Kennedy's RGM mandate.",
        credibility: "illustrative",
        source: SRC.pricefx,
      },
      {
        id: "reorder-nba",
        pillar: "sales-marketing",
        title: "Distributor reorder, cross-sell and next-best-action",
        problem:
          "Growing the distributors who already carry Land O'Frost is far cheaper than winning new ones, but reorder timing and white-space cross-sell across four brands stay manual and invisible.",
        caseName: "Johnson Controls",
        caseDetail:
          "Johnson Controls propensity and whitespace models tracked $100M+ of protectable revenue; whitespace-managed accounts grow 9% versus 5–6%. New-customer acquisition costs 5–7x expansion.",
        roi: "8–12 points of retention, plus cross-brand attach that only shows up once order data is unified.",
        whatI95Does:
          "Reorder nudges in the portal and cross-sell next-best-action on portal and IFS order history, surfaced to the sales team.",
        credibility: "verified",
        source: SRC.jci,
      },
      // BACK OFFICE AND OPERATIONS
      {
        id: "demand-sensing",
        pillar: "back-office",
        title: "Demand sensing and trade-promotion signal",
        problem:
          "You just consolidated to three plants. Forecast misses and promo blind spots now hit a leaner network harder, and short-shelf-life deli meat is unforgiving.",
        caseName: "General Mills, BRF",
        caseDetail:
          "General Mills booked $20M+ in verified savings applying AI across 5,000+ daily shipments; BRF's SAP IBP demand sensing cut planning time 33%.",
        roi: "Demand sensing frees roughly 10–12% of inventory working capital and protects service levels on the consolidated network.",
        whatI95Does:
          "Layer demand-sensing and trade-promo signals onto IFS and the portal's live order data, so planners see real demand before the stockout.",
        credibility: "verified",
        source: SRC.generalmills,
      },
      // FOUNDATION
      {
        id: "pim",
        pillar: "foundation",
        title: "AI product data and PIM, the foundation under the portal",
        problem:
          "A B2B portal across four brands needs accurate pack sizes, prices, specs and images. 30–60% of B2B catalogs have incomplete attributes, and a portal that shows a wrong pack or price loses trust instantly.",
        caseName: "Akeneo, inriver, Dawn Foods",
        caseDetail:
          "Akeneo and inriver run agentic PIM that bulk-enriches attributes with human-in-the-loop and scores quality continuously. Dawn Foods, a bakery-ingredient wholesaler, paired clean product data with AI search for 75%+ digital adoption and triple-digit online growth.",
        roi: "60–70% less manual stewardship, and it gates the credibility of the portal itself.",
        whatI95Does:
          "Stand up AI-enriched PIM that feeds the portal, search and IFS from one source of truth across all four brands.",
        credibility: "illustrative",
        source: SRC.akeneo,
      },
    ],
    why: {
      opener: "You'll be sold a $3M transformation. Your problem might be a six-week portal.",
      body: "The Big-4 are built for enterprise-wide change. Your wedge is not enterprise-wide. It is one order channel you never built and one ERP seam to validate. That is exactly i95Dev's lane: surgical, deep in commerce and ERP integration, on mid-market economics. We will not claim a native IFS connector we do not have, and we will not rip out your floor. We validate the path, pilot it on a sub-brand, and prove the order-to-cash win in time for your new CCO's first quarter.",
      ctaTitle: "Book your B2B Commerce and IFS Integration Diagnostic",
      ctaSubtitle:
        "A fixed-scope, fixed-fee assessment that validates the IFS path and these directional numbers against Land O'Frost's real data. Two weeks, not a $3M transformation.",
      credibility: { brands: "500+ B2B brands", years: "25+ years", projects: "1,200+ projects" },
    },
  },
};
