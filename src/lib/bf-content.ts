/**
 * BrandFormance site content, per Build Specification v2 (Aug 2026).
 * The spec is canonical: six stages, three phases, four public brand
 * grades (grade only, never score components or weights), six named
 * clients, and brand frequency fixed at 3x weekly with geography as the
 * variable. Copy standards: bold, clear, direct, numerals, no em dashes.
 *
 * PRICE IS THE 1 PLACE THE SPEC NO LONGER RULES. Its "no price table, the
 * $1,000/week floor and the $10,000 activation only" was superseded by
 * Jonathan's Pricing Page Developer Handoff of 14 October 2026. See
 * pricingModel below, and CLAUDE.md's resolved conflicts.
 */

export const oneLine = "Stop Chasing Leads. Start Building a Brand Customers Choose.";

export const heroSupport =
  "TopServ Digital is the home of BrandFormance, combining brand building with performance marketing to help home service companies become the obvious choice in their markets.";

export const equation = [
  { term: "BRAND", does: "creates demand" },
  { term: "PERFORMANCE", does: "captures demand" },
  { term: "BRANDFORMANCE", does: "builds market dominance" },
] as const;

export const beforeAfter = [
  { before: "Competing on price and availability", after: "Chosen before the search begins" },
  { before: "Renting attention month to month", after: "Owning attention that compounds" },
  { before: "Interchangeable with every competitor", after: "The obvious choice in the market" },
  { before: "Marketing is a cost line", after: "Brand is an asset on the balance sheet" },
  { before: "Dependent on platforms that raise prices", after: "Independent, with falling acquisition cost" },
] as const;

export const sixStages = [
  {
    n: 1,
    name: "Position",
    what: "Clarify what the company stands for, what it stands against, and what makes it distinct.",
  },
  {
    n: 2,
    name: "Build",
    what: "Create the assets the brand requires. Video, messaging, proof, site, profiles.",
  },
  {
    n: 3,
    name: "Create Demand",
    what: "Build awareness and familiarity in the geography we can afford to own at frequency.",
  },
  {
    n: 4,
    name: "Capture Demand",
    what: "Be present when customers are ready to buy. Search, maps, Local Services, retargeting.",
  },
  {
    n: 5,
    name: "Convert",
    what: "Turn attention into revenue. Booking, speed to lead, conversion infrastructure.",
  },
  {
    n: 6,
    name: "Measure and Optimize",
    what: "Measure the complete system, then improve it. Cost per booked call is the headline number.",
  },
] as const;

export const threePhases = [
  {
    n: 1,
    name: "Strategy and Alignment",
    timing: "Months 1 to 2",
    stages: "Position, Build",
    covers:
      "Market positioning, message clarity, brand trust foundations, performance strategy alignment.",
    topserv:
      "TopServ runs the positioning work, plans the asset build, and aligns the performance strategy to the brand.",
    client: "The client provides leadership time, market truth, and the willingness to be on camera.",
    progress: "A distinct position, an approved message, and a filming plan the whole team believes in.",
  },
  {
    n: 2,
    name: "Execution and Activation",
    timing: "Months 2 to 6",
    stages: "Create Demand, Capture Demand, Convert",
    covers: "Performance channels, brand signal creation, conversion infrastructure.",
    topserv:
      "TopServ produces and distributes the brand content, activates the performance channels, and builds the conversion path.",
    client: "The client keeps operations ready for the demand and answers fast when leads arrive.",
    progress: "Consistent local reach, working capture channels, and a booking flow that converts.",
  },
  {
    n: 3,
    name: "Optimization and Scale",
    timing: "Months 6 to 12 and beyond",
    stages: "Measure and Optimize",
    covers: "Performance refinement, brand momentum compounding, scaling spend with confidence.",
    topserv:
      "TopServ measures the complete system, cuts what does not perform, and scales what does.",
    client: "The client reviews the numbers with us and plans growth against them.",
    progress: "Cost per booked call falling as brand equity builds, and spend scaling with confidence.",
  },
] as const;

/**
 * THE APPROVED BRANDFORMANCE OFFER. The single shared configuration for
 * every surface that states a price: the Pricing page, the FAQ sets, the
 * chat concierge, llms.txt, pricing.md and the industry and service copy.
 * Source: Jonathan's Pricing Page Developer Handoff, 14 October 2026, which
 * states in its own first line that it replaces the 8 October handoff
 * "including its names, amounts, activation, percentage split and payout
 * ladder".
 *
 * THIS SUPERSEDES BUILD SPEC v2 ON PRICE, AND ONLY ON PRICE. The spec's
 * non-negotiable was "no price table, the $1,000/week floor and the $10,000
 * activation are the only public numbers, never monthly, never annual". The
 * approved offer is 3 monthly bases, a quarterly Performance Pay cap and a
 * $15,000 activation, so the site now publishes exactly what the spec
 * forbade. The handoff is 2 months newer and comes from the author of the
 * spec, which is why it wins. Recorded in CLAUDE.md under the resolved
 * conflicts rather than resolved silently. Every other non-negotiable is
 * untouched: the assessment still returns a GRADE and never a number, and
 * brand frequency is still fixed at 3 times weekly.
 *
 * LANGUAGE RULES THE HANDOFF SETS, which bind every surface below:
 *   - Never call it a 60/40 or 50/50 split, a bonus, or a guaranteed result.
 *   - Never mark a base as an all-inclusive price. Advertising is separate,
 *     and that disclosure stays visible near every figure.
 *   - Program level means the resources a plan requires. It never means more
 *     deliverables, and it never means a greater likelihood of success.
 *   - A Brand Grade is not the performance payment score. They are different
 *     objects and nothing may imply otherwise.
 */
export const pricingModel = {
  programs: [
    {
      name: "BrandFormance Program 1",
      short: "Program 1",
      base: "$3,000",
      capPerQuarter: "$6,000",
      capPerMonth: "$2,000",
    },
    {
      name: "BrandFormance Program 2",
      short: "Program 2",
      base: "$5,000",
      capPerQuarter: "$9,000",
      capPerMonth: "$3,000",
    },
    {
      name: "BrandFormance Program 3",
      short: "Program 3",
      base: "$8,000",
      capPerQuarter: "$12,000",
      capPerMonth: "$4,000",
    },
  ],

  activation: "$15,000",
  activationLine:
    "A one time $15,000 activation. It includes your first month of service, the new agentic website, and the initial video production: strategy, scripting, planning, crew, travel, lodging and editing. The first shoot is 2 days, with a 3rd included if TopServ determines it is needed.",

  /** Month 1 is inside the activation. Everything else starts in month 2. */
  billingLine:
    "Month 1 carries no additional base invoice and no Performance Pay. Base billing starts in month 2. The first performance period is service months 2 to 4, and later periods are consecutive 3 service month groups rather than calendar quarters.",
  advertisingLine:
    "Advertising spend is a separate, approved budget. It is never inside a base and never inside the activation.",

  /** The 4 categories. Weights total 100. Each one earns on its own. */
  scorecard: [
    {
      category: "Be Seen",
      weight: "30%",
      visible: "Verified weekly brand reach and frequency.",
      metric:
        "Verified weekly brand reach and average frequency on 1 primary platform.",
    },
    {
      category: "Be Found",
      weight: "30%",
      visible: "Growth in branded and non-branded organic traffic.",
      metric: "Growth in total branded and non-branded organic sessions.",
    },
    {
      category: "Be Chosen",
      weight: "30%",
      visible:
        "Qualified service opportunities from new and existing customers.",
      metric:
        "Growth in distinct qualified service opportunities from new and existing customers.",
    },
    {
      category: "Client Experience",
      weight: "10%",
      visible: "Your feedback on our partnership.",
      metric:
        "Monthly feedback on communication, follow-through and responsiveness.",
    },
  ],

  earningRule:
    "Each category earns independently. Below 60% achievement a category earns $0. From 60% through 100% it earns that percentage of its available amount, and scores cap at 100%. There is no aggregate gate, no payout band and no 95% threshold.",
  targetsLine:
    "Baselines and targets are set during activation. Proposed targets are due at least 10 calendar days before each period and need approval before measurement begins. Both parties verify and approve payable results before any Performance Pay request. Late reporting leaves a payment pending rather than forfeited.",

  /**
   * The worked example. Program 3, and it must stay labelled illustrative:
   * the percentages are achievement against agreed targets, not traffic
   * growth and not survey ratings. Be Chosen earns $0 on purpose, because a
   * category below 60% is the part of the model people miss.
   */
  example: {
    label: "Illustrative Program 3 example, not actual client results.",
    rows: [
      { category: "Be Seen", achievement: "80%", available: "$3,600", earned: "$2,880" },
      { category: "Be Found", achievement: "75%", available: "$3,600", earned: "$2,700" },
      { category: "Be Chosen", achievement: "50%", available: "$3,600", earned: "$0" },
      { category: "Client Experience", achievement: "90%", available: "$1,200", earned: "$1,080" },
    ],
    availableTotal: "$12,000",
    earnedTotal: "$6,660",
    note: "Be Chosen earns $0 because it is below 60%.",
    fullPeriod:
      "3 base payments total $24,000. Adding the earned Performance Pay gives $30,660 for this full funded period, before advertising. The activation was paid in month 1, outside this first performance period.",
  },

  /** What a recommendation is read from. No numeric weights, ever. */
  fitFactors: [
    {
      name: "Market and service area",
      detail: "The geography and the number of households you actually serve.",
    },
    {
      name: "Competition",
      detail: "Who else is buying attention in the same map, and how hard.",
    },
    {
      name: "Current brand equity",
      detail: "How well the market knows you before any money is spent.",
    },
    {
      name: "Growth goals",
      detail: "What you want to pursue, which is not always what is easiest.",
    },
  ],

  /** The managed scope strip. 1 system, not 5 retainers. */
  scope: [
    "Website and Hosting",
    "SEO and AIO",
    "Paid Media",
    "Social and Reputation",
    "Video and Strategy",
  ],

  howReached:
    "We assess the geography and households you serve, your competition, your current brand equity and the growth you want to pursue. A smaller market with ambitious goals can need more resources than a larger market with modest ones. We recommend the program that fits your plan, then adapt the work inside the approved scope and budget.",

  // Spec v2 section 6, untouched by the October handoff: frequency is fixed
  // at the floor of 3 times weekly at every level. Geography is the
  // variable. Larger programs buy more territory held at the same
  // frequency, never more impressions.
  frequencyDoctrine:
    "Brand frequency is fixed: 3 times weekly, at every level. What a larger program buys is more geography held at that same frequency, never more impressions. Competitors sell more impressions. We sell more territory, owned properly.",
} as const;

/**
 * Build Spec v2 section 15, Decision 1: which of the 6 clients can be named
 * publicly. Cleared in October 2026, Shaw instructing, so each outcome below
 * now carries the company it belongs to.
 *
 * 2 surfaces move with this flag, both reading the same sixClients rows: the
 * home page proof band and the growth diagram on the programs pages. The
 * "names withheld" line each of them carried disappears on its own.
 *
 * Set it back to false to withhold every name again; anonymousClient is what
 * they read as instead.
 */
export const namesCleared = true;

/** What a client is called publicly while its own name is not cleared. */
export const anonymousClient = "Home services company";

/**
 * Home page proof run: the 2 sections the team switches off when the material
 * behind them is not ready to show. The logo marquee goes dark when a partner
 * asks to be removed, the video testimonials when a film is being recut.
 *
 * Flip either to false and the page composes around it. The run alternates
 * tinted and untinted section backgrounds so each band reads as its own, and
 * src/app/page.tsx assigns those tones from whichever sections are actually
 * on, rather than each section hardcoding its own. Turning 1 off therefore
 * cannot leave 2 same-toned bands against each other.
 */
export const homeProofSections = {
  /**
   * The film reel: the big player and the strip of client films under it.
   * Off since October 2026, asked for by Shaw. Hidden, not deleted: every
   * film's title, client, poster and YouTube id stays in
   * src/lib/video-portfolio.ts, so flipping this back restores the section
   * exactly as it was.
   */
  filmReel: false,
  /** "Meet our valued partners", the static client logo row. */
  partnerMarquee: true,
  /**
   * The on camera client video testimonials. Off since October 2026, asked
   * for by Shaw. Hidden, not deleted: the films, speakers and companies
   * stay in src/lib/testimonials.ts, so flipping this back restores the
   * section as it was.
   */
  videoTestimonials: false,
};

/**
 * The client stories the site publishes.
 *
 * 1 row, not 6. Jonathan's call: former clients come off the site, and every
 * story shown needs numbers with a source behind them. All Heart Heating,
 * Your New Door, Nick AC, Zen Air and C and S Air are gone. The last 3 can
 * return once their numbers are sourced.
 *
 * NO DOLLAR FIGURES. Revenue is not shown without the client's say so, so a
 * row carries the growth it can state and nothing else. Spencer's row keeps
 * "289 percent over 9 years" and has lost "$1.8M to $7M". The result field
 * is now that percentage rather than a before and after, which is why the
 * detail field is gone with it.
 */
export const namesWithheldNote =
  "Company names are withheld until each client clears theirs for publication.";

export const sixClients = [
  { client: "Spencer Air", market: "Irving, TX", result: "289 percent over 9 years" },
] as const;

/**
 * The public Brand Assessment returns a GRADE only (spec v2, section 5).
 * The numeric score, its components, weights, and normalization method are
 * internal to the sales console and must never appear on the site or be
 * restated in any document. The 4 grades are published in JB's book.
 */
export const brandGrades = [
  {
    grade: "No Brand Equity",
    meaning: "Outside their own circle, nobody can find them. The market does not know the name.",
  },
  {
    grade: "Name Recognition",
    meaning: "People know the name but are not choosing it. Familiarity without preference.",
  },
  {
    grade: "Household Name",
    meaning: "Searched by name. Leads cost almost nothing.",
  },
  {
    grade: "Negative Brand Equity",
    meaning: "Actively chosen against. Fix operations before spending on marketing.",
  },
] as const;

export const builtFor = [
  "Established home service businesses with consistent demand and constrained growth",
  "Owner led or leadership driven, willing to be visible on camera",
  "Frustrated with ads, vendors and diminishing returns",
  "Feeling price pressure despite doing quality work",
  "Beginning to understand that brand creates leverage",
  "Long term thinkers focused on enterprise value, not quick wins",
] as const;

export const notFor = [
  "Buyers looking for cheap or fast lead generation",
  "Set it and forget it marketing mindsets",
  "Owners unwilling to be visible or lead from the front",
  "Businesses that see marketing strictly as a cost",
  "Anyone expecting short term tactics to fix structural problems",
  "Commercial, multifamily, developer or general contractor buyers",
] as const;

/** The ten questions the BrandFormance page answers, in order. */
export const tenQuestions = [
  {
    q: "What is BrandFormance?",
    a: "BrandFormance is the combination of brand building and performance marketing run as 1 system. Brand creates demand by making a company known, trusted and remembered inside its market. Performance captures that demand when customers are ready to buy. Run together, they build market dominance. Run separately, each underperforms.",
  },
  {
    q: "Why was it created?",
    a: "Because home service companies were being forced to choose between brand and leads, and that is the wrong decision. Jonathan Bannister built BrandFormance after a decade of watching contractors rank first, run ads, hold strong reviews and still lose jobs to the company the customer already knew. The methodology exists to make our clients that company.",
  },
  {
    q: "What is wrong with traditional digital marketing?",
    a: "Dependency. Stop paying and the leads stop. Lose rankings and the phone slows. Competition rises and acquisition cost rises with it. Traditional digital marketing rents attention month to month and calls it growth. Nothing compounds, and the platform holds all the leverage.",
  },
  {
    q: "What is the difference between brand and performance?",
    a: "Brand marketing builds familiarity and preference before a customer needs service. Performance marketing captures customers who are searching right now. Brand answers the question of who they call. Performance answers the question of who they find. A company needs to win both answers.",
  },
  {
    q: "How does BrandFormance work?",
    a: "Brand advertising and content run at a fixed weekly frequency inside a defined geography, building familiarity the company can afford to sustain. Performance channels capture the demand that familiarity creates. The 2 sides share 1 measurement system, so brand investment is judged by what it does to performance efficiency, not by impressions.",
  },
  {
    q: "What are its core components?",
    a: "A clear market position. Video led brand content published at frequency. Paid brand distribution in the home geography. Search, maps and Local Services capture. Conversion infrastructure with speed to lead. And 1 measurement system with cost per booked call as the headline number.",
  },
  {
    q: "What business outcomes does it create?",
    a: "Branded search grows. Lead quality improves, because people who already know the company convert better and negotiate less. Cost per booked call falls as brand equity builds. Close rates rise. Over time the company owns attention it used to rent, and acquisition cost falls while competitors pay more every year.",
  },
  {
    q: "Who is it for?",
    a: "Established residential home service companies, roughly $1M to $10M in annual revenue, led by owners willing to be visible and thinking in years rather than quarters. It is not for buyers who want cheap leads fast, and it does not serve commercial, multifamily or general contractor demand.",
  },
  {
    q: "What does implementation look like?",
    a: "3 phases. Strategy and Alignment in months 1 to 2 sets the position and builds the assets. Execution and Activation from months 2 to 6 turns on demand creation, demand capture and conversion. Optimization and Scale from month 6 onward measures the complete system and scales what works.",
  },
  {
    q: "How can a contractor get started?",
    a: "Get My Brand Grade. The Brand Assessment reads how strong your brand actually is in your market and returns 1 of 4 grades, each with what it means for your business. The program and the price come from the full assessment afterward: diagnosis first, prescription second, never a menu.",
  },
] as const;

/** Tier 1 launch videos and where they live. */
export const videoSlots = {
  jbOverview: { title: "The TopServ Overview with Jonathan Bannister", length: "10 minutes", tier: 1 },
  investment: { title: "How We Think About Investment", length: "5 to 7 minutes", tier: 1 },
  whatIsBrandformance: { title: "What Is BrandFormance", length: "5 to 8 minutes", tier: 1 },
  processWalkthrough: { title: "The Process Walkthrough", length: "5 to 7 minutes", tier: 2 },
  outcomes: { title: "What Actually Improves", length: "4 to 6 minutes", tier: 2 },
  method: { title: "The Method", length: "5 to 7 minutes", tier: 2 },
  whoThisIsNotFor: { title: "Who This Is Not For", length: "2 to 3 minutes", tier: 2 },
} as const;
