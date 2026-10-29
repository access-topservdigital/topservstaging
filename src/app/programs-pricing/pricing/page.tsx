import type { Metadata } from "next";
import { BreadcrumbJsonLd, FAQJsonLd, JsonLd } from "@/components/seo/json-ld";
import {
  PActivation,
  PExample,
  PPerformance,
  PPricingCta,
  PPricingFaq,
  PPricingHero,
  PPricingProof,
  PProgramFit,
  PPrograms,
} from "@/components/programs/p-pricing";
import { pricingFaqs } from "@/lib/faqs";
import { siteConfig } from "@/lib/site-config";

/**
 * Programs and Pricing 4: Pricing.
 *
 * SOURCE. Jonathan's Pricing Page Developer Handoff, 14 October 2026. The
 * section order below is the handoff's own and should not be reshuffled:
 * hero and video, program cards, activation, managed scope, program fit,
 * the scorecard, the illustrative calculation, verified proof, the FAQs,
 * the final CTA. Every number renders from pricingModel in bf-content.ts.
 *
 * WHAT CHANGED, AND WHAT IT COST. This page used to publish a $1,000 weekly
 * floor and a $10,000 activation and nothing else, because Build Spec v2
 * forbade a price table in as many words. The approved offer is a table, so
 * the spec is superseded on price. Recorded in CLAUDE.md rather than
 * resolved quietly.
 *
 * 2 GUIDELINES THIS PAGE NOW BREAKS ON PURPOSE, both raised with the team:
 *
 *   SEO Guidelines 1.3 keeps price figures out of the title and the meta
 *   description. The handoff specifies a description carrying all 4 figures
 *   and it was asked for by name, so it ships as written.
 *
 *   KEYWORD-RESEARCH 4.4d gives this page the primary keyword "home service
 *   marketing pricing", which the handoff's title and H1 do not contain.
 *   Nothing was invented to smuggle it back in. If the keyword matters more
 *   than the approved wording, that is a copy decision for Jonathan and
 *   Alejandro, not something to fix in the markup.
 *
 * THE FILM. The handoff puts Jonathan's pricing film beside the hero and
 * its checklist twice forbids shipping a play control that does nothing.
 * The film is not recorded, so the slot carries the offer as text. No
 * VideoObject for it until the file exists; the 2 proof films further down
 * have their own and are real.
 *
 * SEO. Indexed, canonical /programs-pricing/pricing, in the sitemap. The
 * FAQPage schema is emitted from the same pricingFaqs the page renders, so
 * the answers in the markup and the answers in the schema are 1 string.
 */
export const metadata: Metadata = {
  title: { absolute: "BrandFormance Pricing and Programs | TopServ Digital" },
  description:
    "Explore BrandFormance programs with $3,000, $5,000 or $8,000 monthly bases, quarterly earned Performance Pay and $15,000 activation. Ad spend is separate.",
  alternates: { canonical: "/programs-pricing/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Programs and Pricing", href: "/programs-pricing/overview" },
          { name: "Pricing", href: "/programs-pricing/pricing" },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "BrandFormance Pricing and Programs",
          url: `${siteConfig.url}/programs-pricing/pricing`,
          description:
            "The 3 BrandFormance programs, their monthly bases, the quarterly Performance Pay they can earn, and the one time activation. Advertising spend is separate.",
          about: { "@id": `${siteConfig.url}/#organization` },
        }}
      />
      <FAQJsonLd items={[...pricingFaqs]} />

      <PPricingHero />
      <PPrograms />
      <PActivation />
      <PProgramFit />
      <PPerformance />
      <PExample />
      <PPricingProof />
      <PPricingFaq />
      <PPricingCta />
    </>
  );
}
