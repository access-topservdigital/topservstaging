# Pricing Page Developer Handoff, 14 October 2026

Jonathan Bannister's handoff, converted from
`docs/TSD_Pricing_Page_Developer_Handoff_2026-10-14.docx` (the original, kept
beside this file) on 29 October 2026. The approved visual reference is
`docs/pricing-handoff-2026-10-14-mockup.png`, lifted from the same document
and recompressed. Shaw attached the document and instructed the rebuild.

**This document is the source for every number on the site.** It states in
its own first line that it replaces the 8 October handoff "including its
names, amounts, activation, percentage split and payout ladder", and it
supersedes Build Spec v2 on price. See CLAUDE.md, resolved conflicts.

Implemented in `pricingModel` (`src/lib/bf-content.ts`), which is the single
shared configuration the acceptance checklist asks for. Every surface reads
from it: the Pricing page, `faqs.ts`, the chat concierge, `llms.txt`,
`public/pricing.md`, `service-copy.ts`, `industry-copy.ts`.

## 3 deliberate departures from this document

1. **"Find My BrandFormance Program" ships as "BOOK my BrandFormance Call",**
   and **"Get Your Brand Grade" ships as "Get My Brand Grade"**. Jonathan's
   CTA rule of 29 October overrides the labels written here.
2. **The hero carries no video player.** The handoff places Jonathan's
   pricing film beside the hero, and its own checklist twice forbids shipping
   a play control that does nothing or using the empty chair mockup as a
   promise that a film exists. The film is not recorded, so the slot carries
   the offer as text. Swap in a `JbVideoFigure` when the file lands.
3. **Spelled out numbers are rendered as numerals** ("2 days", not "two
   days"), per the house copy standard. Substance is unchanged.

The **pricing video script and shoot instructions** below are recorded for
the video team. They are not website work.

## The approved offer

| Program | Monthly base from month 2 | Performance Pay cap per quarter | Monthly equivalent of cap |
|---|---|---|---|
| BrandFormance Program 1 | $3,000 | $6,000 | Up to $2,000 |
| BrandFormance Program 2 | $5,000 | $9,000 | Up to $3,000 |
| BrandFormance Program 3 | $8,000 | $12,000 | Up to $4,000 |

Activation is $15,000 once. It includes first month service, website work and
the initial video production: strategy, scripting, planning, crew, travel,
lodging and editing. The first shoot is 2 days, with a 3rd included if TopServ
determines it is needed. Advertising is separate. Additional shoots and
approved extras are priced separately.

Month 1 has no additional base invoice and no Performance Pay. Regular base
billing starts in month 2. The first performance period is service months 2
to 4; later periods are consecutive 3 service month groups, not necessarily
calendar quarters.

Program levels reflect required resources, not different quantities of
deliverables and not a promise of greater success.

### The scorecard

| Category | Weight | Payment metric |
|---|---|---|
| Be Seen | 30% | Verified weekly brand reach and average frequency on 1 primary platform. |
| Be Found | 30% | Growth in total branded and non-branded organic sessions. |
| Be Chosen | 30% | Growth in distinct qualified service opportunities from new and existing customers. |
| Client Experience | 10% | Monthly feedback on communication, follow-through and responsiveness. |

Each category earns independently. Below 60% achievement earns $0 in that
category. From 60% through 100%, earn that percentage of its available
amount. Cap scores at 100%. No aggregate gate, payout bands or 95% full
payment threshold remains.

Baselines and targets are established during activation. Proposed targets are
due at least 10 calendar days before each period and require approval before
measurement. Monthly and quarterly reports are due within 10 days after their
respective periods. Both parties verify and expressly approve payable results
before a Performance Pay request or invoice. Late reporting leaves payment
pending rather than forfeited.

Do not describe this as a fixed 60/40 or 50/50 fee split. If full recurring
fees are shown for clarity, use $5,000 / $8,000 / $12,000 monthly equivalents
when fully earned, secondary to the base prices and clearly labeled. They
exclude activation and advertising. **Not implemented:** the mockup does not
show them and nothing on the page needs them.

### The illustrative example

Label it visible: "Illustrative Program 3 example, not actual client
results." The percentages are achievement against agreed targets, not traffic
growth and not survey ratings.

| Category | Achievement | Available | Earned |
|---|---|---|---|
| Be Seen | 80% | $3,600 | $2,880 |
| Be Found | 75% | $3,600 | $2,700 |
| Be Chosen | 50% | $3,600 | $0 |
| Client Experience | 90% | $1,200 | $1,080 |
| **Total** | | **Up to $12,000** | **$6,660** |

Be Chosen earns $0 because it is below 60%. 3 base payments total $24,000;
adding earned pay gives $30,660 for this full funded period, before
advertising. Activation was paid in month 1, outside this first performance
period. Results require usable evidence and mutual approval.

## Developer acceptance checklist

- All prices are text, not image-only content. Base, quarterly maximum,
  activation and separate advertising labels remain visible on mobile.
- Use one shared configuration. Do not call the fee split 60/40, 50/50, a
  bonus or a guaranteed result.
- All categories earn independently at the 60% floor. The example totals
  $6,660; its Be Chosen category earns $0.
- Month 1 is included in activation; base starts month 2. First performance
  period covers service months 2 to 4.
- FAQ answers are in HTML, schema matches the copy, and client ownership
  language matches the agreement.
- Calendar booking and grader delivery are verified with test records;
  capture confirmed events without duplicates.
- The video thumbnail is replaced with Jonathan's actual approved film when
  ready; a nonfunctional play control must not ship.
- Before release, search all sitewide copy, schemas, policies and the HVAC
  budget article for old offer statements.

## Page copy and layout

Route: `/programs-pricing/pricing`. Keep existing navigation and URL. Follow
the approved dark and lime mockup.

Page order: hero and video, equal program cards, activation, managed scope,
program fit factors, scorecard, illustrative calculation, verified proof,
FAQs, final CTA. Then verify responsive layout, source HTML, metadata,
calendar, grader and events.

**Hero.** Eyebrow: BRANDFORMANCE PROGRAMS. H1: "Built around your goals.
Earned through performance." Body: "Your market. Your competition. Your
starting point. Your growth goals. We recommend the resources your plan
requires." Primary button to the team discovery calendar, secondary link to
`/brand-assessment`.

**Program cards.** H2: "The right program for your growth plan." Sub: "One
approach. A resource level matched to your business." Equal dimensions, type
hierarchy and emphasis. No Most Popular badge, preselected tier or success
ladder. On mobile stack 1, 2, 3. Below the cards: "Performance Pay is earned
and billed quarterly. Advertising spend is separate. Programs are recommended
after assessment, not selected by content quantities. Monthly base billing
begins in month 2."

**Activation panel.** "$15,000 one-time activation", the inclusions, then
"Monthly base billing starts in month two. Advertising spend is separate."
Scope strip: One connected BrandFormance system. Website and Hosting, SEO and
AIO, Paid Media, Social and Reputation, Video and Strategy.

**Program fit.** H2: "Your program follows your market and goals." 4 factor
tiles: Market and service area, Competition, Current brand equity, Growth
goals. Service complexity and capacity can be discussed during discovery. Do
not invent numeric placement weights or grader cutoffs. A Brand Grade is not
the performance payment score.

**Performance.** H2: "Four clear ways we earn our performance pay." The 4
categories with their weights and visible explanations.

**Proof before FAQs.** "See BrandFormance in practice." Use approved Spencer
and Watt's Right films or story links with verified summaries. Do not imply
these clients used the new payment model.

**Final CTA after FAQs.** "Let's find your BrandFormance program."

### The 8 FAQs

Implemented verbatim in `pricingFaqs` (`src/lib/faqs.ts`), which the page
renders and the FAQPage schema is built from, so copy and schema are 1
string.

1. What will I pay each month?
2. How is Performance Pay earned?
3. What does activation include?
4. Is advertising included?
5. Why not choose the lowest program?
6. Does my program include a website?
7. What is the commitment?
8. Do you guarantee rankings, AI mentions or revenue?

### Metadata

- Title: `BrandFormance Pricing and Programs | TopServ Digital`
- Description: `Explore BrandFormance programs with $3,000, $5,000 or $8,000 monthly bases, quarterly earned Performance Pay and $15,000 activation. Ad spend is separate.`

Preserve the canonical on the approved production domain. Render pricing,
disclosures and FAQ answers in HTML. Update visible copy and any FAQ or
Service descriptions together. Do not mark a base fee as an all-inclusive
offer price.

## Pricing video script and filming plan (video team, not website work)

Asset: "How BrandFormance pricing works." Presenter: Jonathan Bannister.
Target roughly 100 to 120 seconds. Final duration metadata must match the
exported file.

> "How much should it take to grow your business? That depends on your
> market, your competition, where your brand stands today and what you want
> to accomplish.
>
> That's how we recommend a BrandFormance program. We look at the resources
> your plan needs, then recommend Program 1, 2 or 3.
>
> The monthly bases are three thousand, five thousand and eight thousand
> dollars. Alongside that base is Performance Pay we have to earn, up to six
> thousand, nine thousand or twelve thousand dollars per quarter, depending
> on your program.
>
> We agree on the targets with you. Then we report on four things: Be Seen,
> Be Found, Be Chosen and your experience working with us.
>
> Each category stands on its own. Below sixty percent achievement, we earn
> nothing for that category. At sixty percent or above, we earn that
> percentage of its available payment. We review the evidence and approve
> the calculation together.
>
> Getting started is a fifteen-thousand-dollar activation. That includes
> your first month, your new website and our initial video production,
> including planning, travel and editing. Advertising spend is separate.
> Monthly base billing starts in month two.
>
> Our job is to recommend the right resources, put them to work and show you
> the progress. Book a discovery call with our team, and let's find your
> BrandFormance program."

Shoot and edit: film horizontally in 16:9 at eye level, waist or chest up, a
clean office or branded set, a lavalier microphone and soft front lighting.
Look into the lens. Record 2 full takes plus clean pickups for all dollar
amounts. Overlay the 3 base prices, then their quarterly caps; display all 4
scorecard categories together. Label every money amount as monthly base,
quarterly maximum or one-time activation. Use a real frame of Jonathan for the
thumbnail. Add accurate captions, a short text summary and a transcript. Keep
playback user initiated. Export the web master and thumbnail, verify desktop
and mobile playback, then set the actual duration and upload date in
VideoObject.
