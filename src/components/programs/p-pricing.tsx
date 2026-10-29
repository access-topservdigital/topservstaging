import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Eye,
  Laptop,
  Monitor,
  Search,
  Star,
  Users,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow, Shell } from "@/components/programs/p-grid";
import { JbVideoFigure } from "@/components/video/jb-video-figure";
import { pricingModel } from "@/lib/bf-content";
import { pricingFaqs } from "@/lib/faqs";
import { heldForNameClearance } from "@/lib/jb-videos";
import { siteConfig } from "@/lib/site-config";

/**
 * Programs and Pricing 4: Pricing.
 *
 * BUILT FROM JONATHAN'S PRICING PAGE DEVELOPER HANDOFF, 14 October 2026,
 * which replaced the 8 October one "including its names, amounts,
 * activation, percentage split and payout ladder". The handoff fixes the
 * section order, and this file is written in it: hero and video, equal
 * program cards, activation, managed scope, program fit, the scorecard, the
 * illustrative calculation, verified proof, the FAQs, the final CTA.
 *
 * WHAT THIS PAGE USED TO BE. Build Spec v2 forbade a price table and
 * published 2 figures, a $1,000 weekly floor and a $10,000 activation. That
 * doctrine is retired on price and only on price. Every number here comes
 * from pricingModel in bf-content.ts, which is the 1 shared configuration
 * the handoff's acceptance checklist asks for, so no figure is typed twice
 * and the chat concierge cannot drift from the page.
 *
 * THE RULES THAT SURVIVE THE REWRITE, all from the handoff:
 *   - Every price is text. None of it is baked into an image, and the base,
 *     the quarterly maximum, the activation and the separate advertising
 *     label all stay visible at phone width.
 *   - No Most Popular badge, no preselected program, no success ladder. The
 *     3 cards are the same size, the same type and the same emphasis,
 *     because a level means the resources a plan needs and nothing else.
 *   - Never a 60/40 or 50/50 split, never a bonus, never a guaranteed
 *     result, and never a base presented as an all-inclusive price.
 *   - A Brand Grade is not the performance payment score.
 *
 * THE VIDEO SLOT IS DELIBERATELY NOT A PLAYER. The handoff puts Jonathan's
 * pricing film beside the hero, and its checklist says in 2 places that a
 * play control which does nothing must not ship and that the empty chair
 * mockup must not be used as a promise that a playable film exists. The
 * film is still to be recorded, so the slot carries the offer as text
 * instead. Swap in a JbVideoFigure the day the file lands.
 *
 * CTA LABELS. The handoff writes "Find My BrandFormance Program" and "Get
 * Your Brand Grade". Both were overridden on 29 October: anything booking a
 * meeting says "BOOK my BrandFormance Call", anything about the grade says
 * "Get My Brand Grade". The labels below are the override.
 */

const SCOPE_ICONS = [Monitor, Search, BarChart3, Users, Video] as const;
const SCORE_ICONS = [Eye, Search, Users, Star] as const;

const CARD = "rounded-[18px] border border-[#2b323c] bg-[#0d1015]";

/** Said next to every figure on the page, never only once at the bottom. */
function Disclosure({ className = "" }: { className?: string }) {
  return (
    <p className={`text-[0.8125rem] leading-relaxed text-ink-faint ${className}`}>
      Performance Pay is earned and billed quarterly. Advertising spend is
      separate. Programs are recommended after assessment, not selected by
      content quantities. Monthly base billing begins in month 2.
    </p>
  );
}

export function PPricingHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-background">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(64%_54%_at_12%_100%,rgba(158,216,68,0.13),transparent_62%)]"
      />
      <Shell className="py-16 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,56fr)_minmax(0,44fr)] lg:gap-14">
          <div>
            <Eyebrow>BrandFormance programs</Eyebrow>
            <h1 className="display mt-6 text-[clamp(1.85rem,3.75vw,3.375rem)] leading-[1.04]">
              Built around your goals.{" "}
              <span className="text-brand">Earned</span> through performance.
            </h1>

            <p className="mt-8 max-w-[58ch] text-[1.0625rem] leading-relaxed text-muted-foreground md:text-lg">
              Your market. Your competition. Your starting point. Your growth
              goals. We recommend the resources your plan requires.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Button asChild size="lg" className="text-base">
                <a href={siteConfig.booking.discoveryCall}>
                  BOOK my BrandFormance Call
                  <ArrowRight className="size-4" aria-hidden />
                </a>
              </Button>
              <Link
                href="/brand-assessment"
                className="inline-flex items-center gap-2 border-b border-foreground/40 pb-0.5 text-[0.9375rem] font-semibold text-foreground transition-colors hover:border-brand hover:text-brand"
              >
                Get My Brand Grade
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>

          {/* The film's slot, carrying the offer as text until the film
              exists. No thumbnail and no play control: a control that does
              nothing is the 1 thing the handoff rules out twice. */}
          <div className={`${CARD} p-7 md:p-8`}>
            <p className="label-mono text-ink-faint">The short version</p>
            <dl className="mt-6 space-y-4">
              {pricingModel.programs.map((p) => (
                <div
                  key={p.name}
                  className="flex items-baseline justify-between gap-4 border-b border-[rgba(244,245,242,0.09)] pb-4"
                >
                  <dt className="text-[0.9375rem] text-muted-foreground">
                    {p.short}
                  </dt>
                  <dd className="display text-[1.5rem] leading-none">
                    {p.base}
                    <span className="ml-1.5 text-[0.8125rem] font-normal text-ink-faint">
                      / month base
                    </span>
                  </dd>
                </div>
              ))}
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-[0.9375rem] text-muted-foreground">
                  Activation
                </dt>
                <dd className="display text-[1.5rem] leading-none text-brand">
                  {pricingModel.activation}
                  <span className="ml-1.5 text-[0.8125rem] font-normal text-ink-faint">
                    once
                  </span>
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-[0.8125rem] leading-relaxed text-ink-faint">
              Jonathan walks through how this works on camera. That film is
              being recorded. Everything it covers is written on this page, so
              nothing here waits on it.
            </p>
          </div>
        </div>
      </Shell>
    </section>
  );
}

/** The 3 programs. Equal weight, in every sense the handoff means it. */
export function PPrograms() {
  return (
    <section aria-labelledby="p-programs-heading" className="border-b border-border bg-background">
      <Shell className="py-16 md:py-20">
        <div className="mx-auto max-w-[46rem] text-center">
          <Eyebrow className="justify-center">Pricing</Eyebrow>
          <h2
            id="p-programs-heading"
            className="display mt-5 text-[clamp(1.6rem,2.8vw,2.4rem)] leading-[1.02]"
          >
            The right program for your growth plan.
          </h2>
          <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted-foreground md:text-base">
            One approach. A resource level matched to your business.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 lg:grid-cols-3">
          {pricingModel.programs.map((p) => (
            <li key={p.name} className={`${CARD} flex flex-col p-7`}>
              <p className="label-mono text-ink-faint">BrandFormance</p>
              <p className="display mt-3 text-[1.75rem] leading-none">
                {p.short}
              </p>

              <p className="display mt-5 text-[clamp(2.4rem,5vw,3.25rem)] leading-[0.94]">
                {p.base}
              </p>
              <p className="mt-1 text-[0.9375rem] text-muted-foreground">
                / month base
              </p>

              <span
                aria-hidden
                className="mt-6 block h-px w-full bg-[rgba(244,245,242,0.09)]"
              />

              <p className="mt-6 text-[0.8125rem] text-ink-faint">
                Plus earned Performance Pay
              </p>
              <p className="mt-2 text-[1.0625rem] font-semibold text-foreground">
                Up to {p.capPerQuarter} / quarter
              </p>
              <p className="mt-1 text-[0.8125rem] text-ink-faint">
                Equivalent to up to {p.capPerMonth} per month
              </p>

              <Button asChild size="lg" className="mt-7 w-full text-base">
                <a href={siteConfig.booking.discoveryCall}>
                  BOOK my BrandFormance Call
                </a>
              </Button>
            </li>
          ))}
        </ul>

        <Disclosure className="mx-auto mt-8 max-w-[68ch] text-center" />
      </Shell>
    </section>
  );
}

/** Activation, then the 1 system it switches on. */
export function PActivation() {
  return (
    <section aria-labelledby="p-activation-heading" className="border-b border-border bg-background">
      <Shell className="py-16 md:py-20">
        <div className="relative overflow-hidden rounded-[18px] border border-brand/45 bg-[linear-gradient(160deg,rgba(158,216,68,0.08),rgba(13,16,21,0.7)_62%)] p-7 md:p-10">
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_10%_0%,rgba(158,216,68,0.14),transparent_66%)]"
          />
          <div className="relative md:flex md:items-center md:gap-10 lg:gap-14">
            <div
              aria-hidden
              className="mb-7 flex items-center gap-7 md:mb-0 md:shrink-0 md:gap-8"
            >
              <Laptop className="size-14 text-brand lg:size-16" strokeWidth={1.1} />
              <span className="block h-14 w-px bg-brand/30 lg:h-16" />
              <Video className="size-14 text-brand lg:size-16" strokeWidth={1.1} />
            </div>

            <div>
              <h2
                id="p-activation-heading"
                className="display text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.02]"
              >
                <span className="text-brand">{pricingModel.activation}</span>{" "}
                one time activation
              </h2>
              <p className="mt-5 max-w-[66ch] text-[1.0625rem] leading-relaxed text-muted-foreground md:text-lg">
                {pricingModel.activationLine}
              </p>
              <p className="mt-4 max-w-[66ch] text-[0.9375rem] leading-relaxed text-ink-faint">
                {pricingModel.billingLine} {pricingModel.advertisingLine}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 text-center">
          <Eyebrow className="justify-center">Scope</Eyebrow>
          <h2 className="display mt-5 text-[clamp(1.6rem,2.8vw,2.4rem)] leading-[1.02]">
            One connected BrandFormance system.
          </h2>
        </div>

        <ul className="mx-auto mt-10 grid max-w-[64rem] grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {pricingModel.scope.map((item, i) => {
            const Icon = SCOPE_ICONS[i];
            return (
              <li
                key={item}
                className="flex flex-col items-center gap-3.5 border-[rgba(244,245,242,0.12)] px-4 py-6 text-center [&:not(:first-child)]:border-l"
              >
                <Icon className="size-6 text-foreground" aria-hidden />
                <span className="text-[0.875rem] font-semibold leading-snug text-foreground">
                  {item}
                </span>
              </li>
            );
          })}
        </ul>
      </Shell>
    </section>
  );
}

/** How a program is recommended. 4 factors, no numeric weights. */
export function PProgramFit() {
  return (
    <section aria-labelledby="p-fit-heading" className="border-b border-border bg-background">
      <Shell className="py-16 md:py-20">
        <div className="max-w-[46rem]">
          <Eyebrow>How we recommend your program</Eyebrow>
          <h2
            id="p-fit-heading"
            className="display mt-5 text-[clamp(1.6rem,2.8vw,2.4rem)] leading-[1.02]"
          >
            Your program follows your market and goals.
          </h2>
          <p className="mt-6 text-[0.9375rem] leading-relaxed text-muted-foreground md:text-base">
            {pricingModel.howReached}
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pricingModel.fitFactors.map((f) => (
            <li key={f.name} className={`${CARD} p-6`}>
              <p className="text-[1.0625rem] font-semibold leading-snug text-foreground">
                {f.name}
              </p>
              <p className="mt-3 text-[0.875rem] leading-relaxed text-muted-foreground">
                {f.detail}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-[68ch] text-[0.8125rem] leading-relaxed text-ink-faint">
          Service complexity and capacity come up during discovery. A Brand
          Grade is not the performance payment score: the grade reads how
          well your market knows you, and the score measures work we agreed
          to do.
        </p>
      </Shell>
    </section>
  );
}

/** The scorecard. 4 categories, each earning on its own. */
export function PPerformance() {
  return (
    <section aria-labelledby="p-performance-heading" className="border-b border-border bg-background">
      <Shell className="py-16 md:py-20">
        <div className="mx-auto max-w-[46rem] text-center">
          <Eyebrow className="justify-center">Performance</Eyebrow>
          <h2
            id="p-performance-heading"
            className="display mt-5 text-[clamp(1.6rem,2.8vw,2.4rem)] leading-[1.02]"
          >
            4 clear ways we earn our performance pay.
          </h2>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pricingModel.scorecard.map((s, i) => {
            const Icon = SCORE_ICONS[i];
            return (
              <li key={s.category} className={`${CARD} p-6`}>
                <Icon className="size-6 text-foreground" aria-hidden />
                <p className="mt-5 text-[1.0625rem] font-semibold text-foreground">
                  {s.category}
                </p>
                <p className="display mt-1 text-[clamp(2rem,4vw,2.5rem)] leading-none">
                  {s.weight}
                </p>
                <p className="mt-3 text-[0.875rem] leading-relaxed text-muted-foreground">
                  {s.visible}
                </p>
              </li>
            );
          })}
        </ul>

        <p className="mx-auto mt-8 max-w-[72ch] text-center text-[0.8125rem] leading-relaxed text-ink-faint">
          {pricingModel.earningRule} {pricingModel.targetsLine}
        </p>
      </Shell>
    </section>
  );
}

/**
 * The worked example, laid out as the mockup lays it out: the 4 categories
 * across, the achievement big, and what it earned against what it had
 * available under it. The mockup drops the per category available amounts;
 * they are kept here as "of $3,600" because without them the earned figure
 * is a number with nothing to measure it by, and the handoff's own table
 * publishes them.
 *
 * Labelled illustrative in 2 places, because the percentages are
 * achievement against agreed targets and read as traffic growth otherwise.
 */
export function PExample() {
  const { example } = pricingModel;
  return (
    <section aria-labelledby="p-example-heading" className="border-b border-border bg-background">
      <Shell className="py-16 md:py-20">
        <div className={`${CARD} px-6 py-7 md:px-10 md:py-9`}>
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 id="p-example-heading" className="label-mono text-brand">
              What earning it looks like
            </h2>
            <p className="text-[0.8125rem] text-ink-faint">{example.label}</p>
          </div>

          <ul className="mt-8 grid grid-cols-2 lg:grid-cols-4">
            {example.rows.map((r, i) => (
              <li
                key={r.category}
                className={`border-[rgba(244,245,242,0.12)] px-3 py-5 text-center lg:py-2 ${
                  i % 2 === 1 ? "border-l" : ""
                } ${i > 1 ? "border-t lg:border-t-0" : ""} lg:[&:not(:first-child)]:border-l`}
              >
                <p className="text-[0.875rem] text-muted-foreground">
                  {r.category}
                </p>
                <p className="display mt-2 text-[clamp(2rem,4.4vw,2.75rem)] leading-none">
                  {r.achievement}
                  <span className="sr-only"> achievement</span>
                </p>
                <p className="mt-2 text-[0.9375rem] text-muted-foreground">
                  {r.earned}{" "}
                  <span className="text-ink-faint">of {r.available}</span>
                  <span className="sr-only"> earned</span>
                </p>
              </li>
            ))}
          </ul>

          <span
            aria-hidden
            className="mt-7 block h-px w-full bg-[rgba(244,245,242,0.12)]"
          />

          <p className="mt-7 text-center text-[1.0625rem] font-semibold text-foreground md:text-[1.25rem]">
            Earned quarterly Performance Pay:{" "}
            <span className="display text-brand">
              {example.earnedTotal} of {example.availableTotal}
            </span>
          </p>
          <p className="mt-2 text-center text-[0.875rem] text-muted-foreground">
            {example.note}
          </p>
          <p className="mx-auto mt-5 max-w-[76ch] text-center text-[0.8125rem] leading-relaxed text-ink-faint">
            {example.fullPeriod} Results require usable evidence and mutual
            approval. The percentages are achievement against agreed targets,
            not traffic growth and not survey ratings.
          </p>
        </div>
      </Shell>
    </section>
  );
}

/** Verified proof, with the 1 thing it must not be read as. */
export function PPricingProof() {
  const films = [
    heldForNameClearance.spencerCaseStudy,
    heldForNameClearance.wattsRightCaseStudy,
  ];
  return (
    <section aria-labelledby="p-proof-heading" className="border-b border-border bg-background">
      <Shell className="py-16 md:py-20">
        <div className="mx-auto max-w-[46rem] text-center">
          <Eyebrow className="justify-center">Proof</Eyebrow>
          <h2
            id="p-proof-heading"
            className="display mt-5 text-[clamp(1.6rem,2.8vw,2.4rem)] leading-[1.02]"
          >
            See BrandFormance in practice.
          </h2>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {films.map((film) => (
            <JbVideoFigure key={film.id} video={film} className="max-w-none" />
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-[70ch] text-center text-[0.8125rem] leading-relaxed text-ink-faint">
          Both companies worked with TopServ before this payment model
          existed. Their results are their own and are not an example of
          Performance Pay.
        </p>
      </Shell>
    </section>
  );
}

/**
 * The pricing FAQs, every answer in the HTML rather than behind a toggle.
 * Same source as the FAQPage schema the page emits, so the 2 cannot drift.
 *
 * The mockup labels this block "FAQ" and goes straight into the questions
 * with no heading over them, and the 2 columns are divided by a rule rather
 * than boxed. The heading is still in the document for the outline, just
 * not on screen: a section of 8 questions with nothing above it in the
 * heading tree is a worse page for anyone navigating by headings.
 */
export function PPricingFaq() {
  return (
    <section aria-labelledby="p-pricing-faq-heading" className="border-b border-border bg-background">
      <Shell className="py-16 md:py-20">
        <p className="label-mono text-brand">FAQ</p>
        <h2 id="p-pricing-faq-heading" className="sr-only">
          Pricing questions
        </h2>

        <dl className="mt-8 grid md:grid-cols-2">
          {pricingFaqs.map((f, i) => (
            <div
              key={f.question}
              className={`border-[rgba(244,245,242,0.12)] py-7 md:px-9 md:first:pl-0 md:[&:nth-child(2)]:pr-0 ${
                i > 1 ? "border-t" : ""
              } md:[&:nth-child(odd)]:pl-0 md:[&:nth-child(even)]:border-l md:[&:nth-child(even)]:pr-0`}
            >
              <dt className="text-[1.0625rem] font-semibold leading-snug text-foreground md:text-[1.125rem]">
                {f.question}
              </dt>
              <dd className="mt-3 max-w-[56ch] text-[0.9375rem] leading-relaxed text-muted-foreground">
                {f.answer}
              </dd>
            </div>
          ))}
        </dl>
      </Shell>
    </section>
  );
}

export function PPricingCta() {
  return (
    <section
      aria-labelledby="p-pricing-cta-heading"
      className="relative isolate overflow-hidden border-t border-border bg-background"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(64%_54%_at_18%_100%,rgba(158,216,68,0.16),transparent_62%)]"
      />
      <Shell className="py-20 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,46fr)_minmax(0,54fr)] lg:gap-16">
          <div>
            <Eyebrow>Next step</Eyebrow>
            <h2
              id="p-pricing-cta-heading"
              className="display mt-5 text-[clamp(1.9rem,3.6vw,3rem)] leading-[0.98]"
            >
              Let us find your BrandFormance program.
            </h2>
          </div>
          <div>
            <p className="max-w-[54ch] text-[1.0625rem] leading-relaxed text-muted-foreground md:text-lg">
              We assess your market, your competition and where your brand
              stands today, then recommend the resources your plan needs.
              Nobody picks a program off a page.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Button asChild size="lg" className="text-base">
                <a href={siteConfig.booking.discoveryCall}>
                  BOOK my BrandFormance Call
                  <ArrowRight className="size-4" aria-hidden />
                </a>
              </Button>
              <Link
                href="/brand-assessment"
                className="inline-flex items-center gap-2 border-b border-foreground/40 pb-0.5 text-[0.9375rem] font-semibold text-foreground transition-colors hover:border-brand hover:text-brand"
              >
                Get My Brand Grade
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
            <Disclosure className="mt-8 max-w-[62ch]" />
          </div>
        </div>
      </Shell>
    </section>
  );
}
