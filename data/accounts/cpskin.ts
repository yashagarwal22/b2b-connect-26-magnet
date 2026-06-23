import type { AccountConfig } from "@/lib/types";

// Sources reused across the report (Verified vs. Illustrative labelled per-claim, spec section 14).
const SRC = {
  mit: { label: "MIT NANDA, ~95% of pilots", url: "https://nanda.media.mit.edu/" },
  mck: { label: "Installed-base economics, McKinsey; CDP retention 10-25%", url: "https://www.mckinsey.com/" },
  jci: { label: "Johnson Controls, $35M per attrition point", url: "https://www.johnsoncontrols.com/" },
  kawasaki: { label: "Kawasaki Engines, B2B portal AOV +5x", url: "https://www.salesforce.com/" },
  watsco: { label: "Watsco / Adobe, AI recs +10% AOV", url: "https://www.watsco.com/" },
  search: { label: "AI search ~1.67x keyword conversion", url: "https://www.algolia.com/" },
  watts: { label: "Watts Water, cited by Perplexity", url: "https://www.watts.com/" },
  stibo: { label: "Stibo / Informatica, Gartner MDM Leaders", url: "https://www.stibosystems.com/" },
  gartner: { label: "Gartner, 90% of B2B AI-intermediated by 2028", url: "https://www.gartner.com/" },
} as const;

/**
 * CP Skin Health Group (a Colgate-Palmolive company), a warm, active worked account. Every section
 * is grounded in the Account-360 profile and the AI research dump, and maps 1:1 to companies/cpskin/
 * cpskin-spec.md.
 *
 * Spine: CP Skin does not win on advertising, it wins in the chair. EltaMD is the #1 derm-recommended
 * sunscreen, PCA SKIN the #1 professional peel; the moat is the professional recommendation L'Oréal
 * (SkinCeuticals) cannot copy. After Colgate's $794M Q4-2025 skin-health impairment, the reflex is to
 * buy back share in a media auction L'Oréal will always outbid. The cheaper, defensible growth is the
 * patients and professionals CP Skin already earned, activated on first-party data (Gigya, BlueConic).
 * Write to John Apostolidis (economic buyer) and Andrew Freeman (VP NA eCommerce, champion), sponsor
 * Joanna Zucker. Guardrails: no replatform; Shopify (DTC) and VTEX (B2B) do not compete (make them
 * share a patient); Gigya and BlueConic are assets to activate, not problems to fix.
 */
export const cpskin: AccountConfig = {
  slug: "cpskin",
  companyName: "CP Skin",
  aliases: ["CP Skin Health Group", "EltaMD", "PCA SKIN", "FILORGA", "Filorga"],
  domains: ["eltamd.com", "pcaskin.com", "us.filorga.com", "cpskinhealthpro.com"],
  vertical: "cpg",
  verticalLabel: "Professional and prestige skin health",
  revenueBand: "$300–500M",
  role: "Head of DTC and B2B Ecosystem / VP eCommerce",
  roleEmphasis: "ecommerce",
  activeRequirement: true,
  published: true,

  thesis: "You can't out-spend L'Oréal for strangers. Grow the patients your professionals already sent you.",
  wedge:
    "Reorder and reactivation, personalized to the patients you already have",
  wedgeDetail:
    "It runs on the first-party data already sitting in BlueConic and Gigya, it improves the conversion number the board is funding, and it compounds the professional recommendation L'Oréal cannot buy. Prove it on EltaMD refills, then scale to PCA SKIN and Filorga.",

  // ── Module 1, The Reframe (above gate) ──
  reframe: {
    opener: "Everyone here is selling you AI to win new customers. The customer you already won is the cheapest growth in the building.",
    stat: "95%",
    statSource: SRC.mit,
    body: "95% of enterprise AI pilots return nothing to the P&L. They sit beside the work instead of inside it. After a $794M impairment, the instinct is to buy back share in the same media auction L'Oréal will always outbid. The edge is not a better ad. It is pointing ordinary AI at what SkinCeuticals cannot copy: EltaMD is the number-one dermatologist-recommended sunscreen, PCA SKIN the number-one professional peel, and every patient a professional sends you is first-party data you already own.",
  },

  // ── Module 2, The Hype Filter (above gate) ──
  hypeFilter: {
    opener: "Commodity AI chases the customers you don't have. Compounding AI grows the ones you do.",
    commodity: [
      "More performance media to win back traffic",
      "A generic chatbot bolted onto the brand sites",
      "AI-written outreach to cold lists",
      "Conversion tweaks that treat every visitor the same",
    ],
    compounding: [
      "Reorder and refill prompts for the patients you have",
      "The professional portal as a recommendation engine",
      "Cross-brand regimen recs: PCA peel, EltaMD, Filorga",
      "Personalization on the BlueConic data you already hold",
    ],
    pitchWarning:
      "After the impairment, expect a pitch for more performance media and an \"AI conversion uplift.\" That is the most expensive way to grow, and it is a fight against L'Oréal's budget. Your Gigya identity and BlueConic data already hold the cheaper growth. Spend there first.",
  },

  // ── Module 2.5, Your Stack (Account-360 confirmed stack) ──
  stackFlags: [
    {
      signal: "SAP S/4HANA (Colgate digital core)",
      leadPlay: "Reconcile DTC, B2B and retail orders, inventory and pricing against one core",
      commodityFlag: "A parallel data lake. The core is already consolidating; orchestrate to it.",
    },
    {
      signal: "Shopify (DTC) + VTEX (B2B)",
      leadPlay: "Two front-ends, one customer: share PIM, OMS and checkout across both",
      commodityFlag: "\"Pick one platform.\" You do not need to. You need them to share a patient.",
    },
    {
      signal: "Gigya / SAP CDC + BlueConic (CDP)",
      leadPlay: "Activate the identity and CDP you already run into reorder and personalization",
      commodityFlag: "\"Buy a new CDP.\" You already have one. The gap is activation, not acquisition.",
    },
    {
      signal: "Attentive (SMS)",
      leadPlay: "Trigger timed refill and replenishment flows to known patients",
      commodityFlag: "More blast campaigns. The win is per-patient reorder timing, not more sends.",
    },
    {
      signal: "cpskinhealthpro.com (pro portal)",
      leadPlay: "Make the gated portal a recommendation, education and reorder engine",
      commodityFlag: "A brochure refresh. The portal is where your moat compounds. Build it as an engine.",
    },
  ],

  // ── Module 3, The Commodity-vs-Compounding Map (above gate) ──
  // Y: 0 commodity to 1 compounding · X: 0 foundation-required to 1 bolt-on-ready (wedge = top-right)
  mapPlays: [
    { id: "reorder", label: "Reorder + reactivation", compounding: 0.92, bolton: 0.8, magnitude: 5, lit: true, wedge: true },
    { id: "pro-channel", label: "Professional-channel engine", compounding: 0.95, bolton: 0.6, magnitude: 4, lit: true },
    { id: "cross-brand", label: "Cross-brand recs / NBA", compounding: 0.85, bolton: 0.7, magnitude: 4, lit: true },
    { id: "checkout", label: "Personalized checkout / CRO", compounding: 0.7, bolton: 0.85, magnitude: 3, lit: true },
    { id: "identity", label: "Identity + CDP activation", compounding: 0.8, bolton: 0.55, magnitude: 4, lit: true },
    { id: "shelf", label: "Digital shelf / 1P-3P", compounding: 0.72, bolton: 0.5, magnitude: 4, lit: true },
    { id: "aeo", label: "AEO for skin concerns", compounding: 0.9, bolton: 0.65, magnitude: 3, lit: true },
    { id: "pim", label: "AI claims + compliance PIM", compounding: 0.8, bolton: 0.4, magnitude: 3, lit: true },
    { id: "agentic", label: "Agentic-commerce ready", compounding: 0.95, bolton: 0.25, magnitude: 4, lit: true },
    { id: "chatbot", label: "Generic chatbot", compounding: 0.14, bolton: 0.9, magnitude: 1, lit: false },
    { id: "adcopy", label: "AI-written ad copy", compounding: 0.12, bolton: 0.8, magnitude: 1, lit: false },
    { id: "media", label: "More performance media", compounding: 0.3, bolton: 0.85, magnitude: 2, lit: false },
  ],

  // ── Below the gate (payoff), never in the initial payload ──
  payoff: {
    headlineOpportunity: [8, 24],
    moneyPools: [
      {
        id: "retention",
        label: "Patients you already have: reorder and reactivation",
        range: [3, 10],
        note: "Skincare is consumable, yet most patients are treated as a one-time conversion. Keeping a customer costs five to seven times less than winning one, and cross-sell converts three to four times more often. First-party activation through a CDP like your BlueConic lifts retention 10 to 25%. A few points of repeat rate on a $300M+ base is the cheapest line in the model.",
        credibility: "verified",
        source: SRC.mck,
      },
      {
        id: "pro-channel",
        label: "Professionals who recommend you: the channel engine",
        range: [2, 5],
        note: "Your moat is the dermatologist, surgeon and aesthetician who hand a patient your brand. Today the gated portal is a catalog, not an engine, and the link from the professional who recommends to the patient who buys is invisible. Kawasaki put a service agent on its B2B portal and average order value rose fivefold. Industrializing the recommendation compounds every other play.",
        credibility: "verified",
        source: SRC.kawasaki,
      },
      {
        id: "shelf",
        label: "The shelf you don't control: 1P and 3P harmonization",
        range: [2, 5],
        note: "Your own stated focus is \"harmonizing 1P and 3P selling.\" On Amazon and Dermstore, unmanaged third-party listings erode price, content and the prestige positioning the brand is priced on. Watsco's AI-driven recommendations and digital-shelf discipline lifted average order value 10%. Governing the shelf defends margin and the equity that justifies the price.",
        credibility: "verified",
        source: SRC.watsco,
      },
      {
        id: "checkout",
        label: "The checkout you're already funding: made personal",
        range: [1, 4],
        note: "The near-term project is checkout and conversion, but a generic optimization pass treats a loyal EltaMD patient like an anonymous visitor. AI-aware search alone converts about 1.67 times keyword, and personalization on resolved identity is the standard conversion lever. The same conversion budget returns more when the storefront knows the patient, and this is the land that funds the rest.",
        credibility: "verified",
        source: SRC.search,
      },
    ],
    roadmap: [
      {
        phase: "Phase 1, starts now",
        title: "Reorder and personalized conversion",
        body: "Land inside the funded checkout and conversion project. Personalize the storefront for identity-resolved patients and turn on reorder and refill flows through BlueConic, Gigya and Attentive, timed to each product's real refill cycle. It improves the board's conversion number and seeds the loyalty engine. This is the wedge.",
        active: true,
      },
      {
        phase: "Phase 2, 3 to 6 months",
        title: "The professional channel as an engine",
        body: "Turn cpskinhealthpro.com into a recommendation, education and reorder engine, and connect the professional who recommends to the patient who buys so you can reward both. This compounds the one asset L'Oréal cannot copy.",
      },
      {
        phase: "Phase 3, 6 to 12 months",
        title: "Cross-brand growth and the digital shelf",
        body: "Cross-brand next-best-action across PCA SKIN, EltaMD and Filorga so a peel patient gets the right aftercare, and harmonize 1P and 3P on Amazon and Dermstore with digital-shelf and price governance. This grows basket and defends margin at once.",
      },
      {
        phase: "Phase 4, the spine and the bet",
        title: "Unify to SAP, get agentic-ready",
        body: "Orchestrate Shopify, VTEX and the pro portal to the S/4HANA core for one customer and one inventory truth, enrich claims and compliance content with AI PIM, and make the catalog machine-purchasable for AI buyers. Gartner expects 90% of B2B purchases to be AI-intermediated by 2028, and this aligns to Colgate's 2030 AI mandate. The risk is being invisible, not being behind.",
      },
    ],
    // ── The play shortlist, spanning retention, the professional channel, the storefront, and the foundation ──
    plays: [
      // RETENTION & THE INSTALLED BASE
      {
        id: "reorder",
        pillar: "sales-marketing",
        title: "Reorder and reactivation for the patients you already have",
        problem:
          "Skincare is consumable, but most patients are treated as a one-time sale. After a $794M impairment, buying new customers is the most expensive way to recover, and it is a fight against L'Oréal's media budget.",
        caseName: "Johnson Controls",
        caseDetail:
          "Johnson Controls tracked installed-base value at $35M per point of attrition; first-party activation through a CDP like your BlueConic lifts retention 10 to 25%.",
        roi: "Keeping a patient costs five to seven times less than winning one, and cross-sell converts three to four times more often. A few points of repeat rate is the cheapest line in the model.",
        whatI95Does:
          "Identity-resolved reorder and reactivation across Shopify, Amazon and the professional channel, triggered through BlueConic and Attentive, timed to each product's real refill cycle.",
        credibility: "verified",
        source: SRC.jci,
      },
      {
        id: "cross-brand",
        pillar: "sales-marketing",
        title: "Cross-brand regimen recommendations and next-best-action",
        problem:
          "PCA SKIN, EltaMD and Filorga still sell as three brands, not one regimen. A peel patient needs aftercare sunscreen, and that cross-sell is left on the table.",
        caseName: "Watsco, Dawn Foods",
        caseDetail:
          "Watsco's AI recommendations lifted average order value 10%; Dawn Foods behavioral recommendations lifted baskets 10%.",
        roi: "Regimen-based cross-sell raises basket and retention together, on patients you already have.",
        whatI95Does:
          "Cross-brand propensity and next-best-action across the three brands, surfaced on-site and in Attentive flows, grounded in the regimen the professional prescribed.",
        credibility: "verified",
        source: SRC.watsco,
      },
      // THE PROFESSIONAL CHANNEL
      {
        id: "pro-channel",
        pillar: "storefront",
        title: "The professional portal as a recommendation engine",
        problem:
          "Your moat is the recommendation of the dermatologist, surgeon and aesthetician, but cpskinhealthpro.com is a catalog, and the link from the professional who recommends to the patient who buys is invisible.",
        caseName: "MilliporeSigma, Kawasaki",
        caseDetail:
          "MilliporeSigma runs account-based entitlement and AI reorder on approved lists for regulated buyers; Kawasaki put a service agent on its B2B portal and average order value rose fivefold.",
        roi: "The professional relationship is the one asset SkinCeuticals and AI cannot replicate. Industrializing it compounds every other play.",
        whatI95Does:
          "Turn the gated portal into a recommendation, education and reorder engine on VTEX, with practice-marketing tools and professional-to-patient attribution that rewards the recommender.",
        credibility: "verified",
        source: SRC.kawasaki,
      },
      // STOREFRONT & DISCOVERY
      {
        id: "checkout",
        pillar: "storefront",
        title: "Personalized checkout and conversion",
        problem:
          "The funded near-term project is checkout and conversion, but a generic optimization pass treats a loyal EltaMD patient like an anonymous visitor.",
        caseName: "AI search benchmarks",
        caseDetail:
          "AI search converts about 1.67 times keyword (4.6% versus 2.8%), and personalization on resolved identity is the standard lever for conversion lift.",
        roi: "The same conversion budget returns more when the storefront knows the patient. This is the land that funds the rest.",
        whatI95Does:
          "Checkout extensibility and on-site personalization on Shopify and VTEX, driven by Gigya identity and BlueConic, so a known patient sees their regimen, their reorder and their price.",
        credibility: "verified",
        source: SRC.search,
      },
      {
        id: "shelf",
        pillar: "storefront",
        title: "Digital shelf and 1P / 3P harmonization",
        problem:
          "Your stated focus is \"harmonizing 1P and 3P selling,\" but on Amazon and Dermstore unmanaged third-party listings erode price, content and prestige positioning.",
        caseName: "Watsco, Similarweb",
        caseDetail:
          "Watsco's digital-shelf discipline and recommendations lifted average order value 10%; your own Similarweb work already recovered lost traffic.",
        roi: "Governing price and content across the marketplace defends margin and the prestige equity that justifies the premium.",
        whatI95Does:
          "Digital-shelf governance, content syndication and 1P / 3P order and inventory reconciliation against the SAP core.",
        credibility: "verified",
        source: SRC.watsco,
      },
      {
        id: "aeo",
        pillar: "storefront",
        title: "Answer Engine Optimization for skin concerns",
        problem:
          "\"Best sunscreen for rosacea\" now goes to ChatGPT and Google AI. EltaMD is the number-one dermatologist pick, but if the answer engine cites SkinCeuticals, the recommendation you earned offline is lost online.",
        caseName: "Watts Water",
        caseDetail:
          "Watts structured its content so Perplexity cites it over rivals; AI referrals grew 357% year on year and convert about 31% higher than organic.",
        roi: "Your professional endorsements and clinical claims are exactly the structured proof answer engines reward, and almost no prestige skincare brand has done it.",
        whatI95Does:
          "Structure claims, ingredient and professional-endorsement content so AI engines cite EltaMD, PCA SKIN and Filorga for the concerns they actually treat.",
        credibility: "illustrative",
        source: SRC.watts,
      },
      // FOUNDATION & THE BET
      {
        id: "pim",
        pillar: "foundation",
        title: "AI claims, ingredient and compliance content (PIM)",
        problem:
          "Medical-grade skincare lives or dies on accurate claims, ingredients and compliance across three brands and every channel. 30 to 60% of catalogs have incomplete attributes, and an LLM is confidently wrong on dirty data.",
        caseName: "Bio-Rad, Stibo",
        caseDetail:
          "Bio-Rad and Thermo Fisher enrich regulated catalogs from source documents; Stibo and Informatica are Gartner MDM Leaders, and Salesforce acquired Informatica in 2025.",
        roi: "Clean, claim-accurate product data gates every play above, from AEO to recommendations to the professional portal. The cheapest insurance on the whole portfolio.",
        whatI95Does:
          "AI-enriched PIM and MDM with human-in-the-loop that standardizes claims, ingredients and compliance and feeds Shopify, VTEX, the pro portal and every AI surface from one source.",
        credibility: "illustrative",
        source: SRC.stibo,
      },
      {
        id: "agentic",
        pillar: "foundation",
        title: "Unify the commerce-to-SAP spine and get agentic-ready",
        problem:
          "Three channels on Shopify, VTEX and the pro portal are consolidating onto SAP S/4HANA. Without one customer and one inventory truth, personalization and reorder are guesswork, and the catalog is invisible to the AI buyers coming next.",
        caseName: "Gartner, OpenAI Instant Checkout",
        caseDetail:
          "Gartner expects 90% of B2B purchases to be AI-intermediated by 2028, and consumer agentic checkout is already shipping (OpenAI Instant Checkout with Walmart and Target).",
        roi: "It aligns to Colgate's 2030 AI and agentic mandate, an enterprise-sanctioned growth story, and future-proofs against being invisible in 2027 and 2028.",
        whatI95Does:
          "Orchestrate Shopify, VTEX and the pro portal to the S/4HANA core for one customer and one inventory truth, and make the catalog machine-purchasable for agents using AP2 and MCP.",
        credibility: "illustrative",
        source: SRC.gartner,
      },
    ],
    why: {
      opener: "You'll be sold a media plan to win back share. Your share comes back one refill at a time.",
      body: "The agencies are built to spend your way back to growth in an auction L'Oréal will always win. Your growth is cheaper and closer: the patients your professionals already sent you, activated on the data you already hold. That is i95Dev's lane: surgical, deep in commerce, ERP and customer data, on mid-market economics, and aligned to the SAP core Colgate is standardizing. We do not replatform your stack. We make it grow the patients you already earned, in time to show the board a number this year.",
      ctaTitle: "Book your Retention and Conversion Diagnostic",
      ctaSubtitle:
        "A fixed-scope, fixed-fee assessment that validates these numbers against CP Skin's real first-party data. Two weeks, not an 18-month program.",
      credibility: { brands: "500+ B2B brands", years: "25+ years", projects: "1,200+ projects" },
    },
  },
};
