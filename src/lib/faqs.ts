export interface Faq {
  question: string;
  answer: string;
}

// Answers are written as self-contained 40–70 word passages an AI system can
// quote without surrounding context, each one stands alone. These render on
// the site AND feed the chat concierge's knowledge block, so they must match
// the approved offer and the doctrine around it: the 3 program bases, the
// quarterly Performance Pay cap and the $15,000 activation exactly as
// pricingModel in bf-content.ts states them, advertising always named as
// separate, never a 60/40 or 50/50 split and never a guaranteed result, the
// Brand Assessment returning a grade only, and the 6 stage Method as the
// system. The $1,000 weekly floor and the $10,000 activation are retired.

export const generalFaqs: Faq[] = [
  {
    question: "What makes TopServ Digital different from other marketing agencies?",
    answer:
      "TopServ Digital is the home of BrandFormance: brand building and performance marketing run as 1 system, instead of choosing between brand or leads. The agency has worked exclusively with home service companies since 2016, and publishes its programs openly: monthly bases of $3,000, $5,000 or $8,000, quarterly Performance Pay we have to earn, and a $15,000 one time activation.",
  },
  {
    question: "What is BrandFormance?",
    answer:
      "BrandFormance is TopServ's methodology: brand creates demand by making a company known, trusted and remembered in its market, performance captures that demand when customers are ready to buy, and together they build market dominance. Run separately, each underperforms. The full explanation lives at topservdigital.com/brandformance.",
  },
  {
    question: "How does TopServ Digital grow a home service company?",
    answer:
      "Through the 6 stage BrandFormance Method, in order: Position (clarify what the company stands for), Build (create the video, messaging and proof assets), Create Demand (brand advertising at frequency in the home geography), Capture Demand (search, maps, Local Services, retargeting), Convert (booking and speed to lead), and Measure and Optimize, where cost per booked call is the headline number.",
  },
  {
    question: "What is the Brand Assessment?",
    answer:
      "The Brand Assessment reads how strong a company's brand actually is in its market and returns 1 of 4 grades: No Brand Equity, Name Recognition, Household Name, or Negative Brand Equity. Each grade comes with what it means for the business and the right next step. It is the honest starting point before any program or price conversation. Get yours at topservdigital.com/brand-assessment.",
  },
  {
    question: "Which industries does TopServ Digital serve?",
    answer:
      "TopServ Digital serves six home service trades: HVAC, plumbing, roofing, electrical, garage door, and pest control companies. HVAC is the agency's original specialty, it started as an HVAC-focused agency in 2016, and every strategy is adapted to how each trade's customers actually buy.",
  },
  {
    question: "Where is TopServ Digital located, and do you work nationwide?",
    answer:
      "TopServ Digital is headquartered at 15222 King Road, Unit 403, Frisco, Texas 75036, and works with home service companies across the United States. Video shoots are done on site at the client's location, wherever that is.",
  },
  {
    question: "How much does TopServ Digital cost?",
    answer:
      "There are 3 BrandFormance programs, with monthly bases of $3,000, $5,000 and $8,000 beginning in month 2. Performance Pay is additional, earned and billed quarterly, up to $6,000, $9,000 or $12,000 per quarter by program. Activation is $15,000 once and includes your first month. Advertising spend is separate. Which program fits comes from your market, competition, current brand equity and growth goals.",
  },
  {
    question: "How long until we see results?",
    answer:
      "Paid channels like Google Ads and Local Services Ads can produce booked jobs within weeks. Brand equity compounds over months: as more people search the company by name, lead quality rises and cost per booked call falls. Every engagement reports both.",
  },
];

export const pricingFaqs: Faq[] = [
  {
    question: "What will I pay each month?",
    answer:
      "Your recommended program has a monthly base of $3,000, $5,000 or $8,000, beginning in month 2. Performance Pay is additional, earned and billed quarterly. Activation is $15,000 once and includes your first month. Advertising is separate.",
  },
  {
    question: "How is Performance Pay earned?",
    answer:
      "We agree on targets and measurement rules before the performance period. Each of 4 categories earns independently: below 60% achievement earns nothing for that category, and at 60% or above we earn that percentage of its available payment. Both parties verify and approve the quarterly calculation.",
  },
  {
    question: "What does activation include?",
    answer:
      "Your first month of service, website build and initial video production, including strategy, scripting, planning, filming, travel, lodging and editing. The initial shoot is 2 days, with a 3rd included if needed as determined by TopServ. Further shoots require separate written pricing.",
  },
  {
    question: "Is advertising included?",
    answer:
      "Advertising is a separate, approved budget. BrandFormance requires funding for at least 3.0 average weekly exposures per reached audience member on the designated primary platform, alongside agreed reach. We size the territory to a sustainable budget, and frequency is not identical exposure to every homeowner.",
  },
  {
    question: "Why not choose the lowest program?",
    answer:
      "We recommend resources around your market, competition, current brand position and growth goals. The higher priced program is appropriate when the work requires it. Paying more does not inherently produce greater success.",
  },
  {
    question: "Does my program include a website?",
    answer:
      "Yes. We build a new agentic website and provide hosting and ongoing management. You retain your original site and domain. Ownership of the custom new site transfers after 12 completed service months. An optional earlier purchase is available under the agreement, and platform and third party licenses apply.",
  },
  {
    question: "What is the commitment?",
    answer:
      "The initial commitment is 90 days. After that initial term, either party may give 30 days written notice. The agreement explains cancellation, breach remedies, ownership and transition.",
  },
  {
    question: "Do you guarantee rankings, AI mentions or revenue?",
    answer:
      "No. We agree on measurable marketing targets and report progress. Client capacity, sales execution and market conditions also affect business results. AI citations and cost metrics may be reported separately, and they are not additional payment categories.",
  },
];
