@AGENTS.md

# TopServ Digital website

This site sells a methodology, BrandFormance, not a list of services. Every
page teaches it and every path leads to the Brand Assessment.

## Documentation router

Open the file before doing the work. Do not work from memory of these rules,
and do not run fresh keyword research per page.

| Work | Read first |
|---|---|
| Anything that states a price | `docs/PRICING-HANDOFF-2026-10-14.md`, then `pricingModel` in `src/lib/bf-content.ts` |
| Building or editing ANY public-facing page | `docs/SEO-GUIDELINES.md`, then that page's entry in `docs/KEYWORD-RESEARCH.md` |
| What a page must argue, and in what order | `docs/ARGUMENT-SPINE.md` |
| Voice, signature language, banned phrases | `docs/COPY-FRAMEWORK.md` |
| Scope, page specs, pricing and assessment doctrine | `docs/BUILD-SPEC-V2.md` |
| Code architecture and systems map | `docs/ARCHITECTURE.md` |
| Status, ownership, open decisions | `docs/HANDOFF.md` |
| Blog ingest, MCP, Content Studio | `BLOG-INGEST.md`, `docs/BLOG-WORKFLOW.md` |
| Admin content types and slots | `docs/ADMIN-CONTENT.md` |
| Domain cutover and launch | `LAUNCH.md` |

`docs/SEO-GUIDELINES.md` is standing instructions for every public-facing
page, every time, including its section 13 pre-publish checklist. It does not
expire at launch.

Order of authority when documents disagree: Build Spec v2, then Argument
Spine, then Copy Framework, then SEO Guidelines. Raise a conflict, never
silently resolve it. `docs/CONVERSION-NOTES.md` records how the converted
documents were produced and what they cannot represent.

## Non-negotiables

These bind titles, meta descriptions, headings, alt text, schema and body
copy alike:

- Price comes from `pricingModel` in `src/lib/bf-content.ts` and nowhere
  else. Never retype a figure, never invent a 4th program, never discount.
- Advertising spend is separate and is said so next to every figure. A base
  is never an all-inclusive price.
- Performance Pay is never a 60/40 or 50/50 split, never a bonus, never a
  guaranteed result. A program level means the resources a plan requires,
  never more deliverables and never a better chance of success.
- A Brand Grade is not the performance payment score. Never attach a price
  to a grade.
- The public assessment returns a GRADE, never a number. "Brand Score" never
  appears publicly. Score components and weights stay internal.
- Brand frequency is fixed at 3 times weekly. A larger program buys more
  geography at the same frequency, never more frequency.
- No em dashes anywhere. Numerals rather than spelled out numbers.
- One primary keyword per page, never assigned to a second page.
- Capabilities such as SEO and PPC are never a page's opening frame.

## Resolved conflicts, kept for the record

### Price, October 2026: the spec is superseded

Build Spec v2 made it a non-negotiable that the site carry no price table,
that the $1,000 per week floor and the $10,000 one time activation be the
only public numbers, and that no monthly or annual figure appear anywhere.

Jonathan's Pricing Page Developer Handoff of 14 October 2026
(`docs/PRICING-HANDOFF-2026-10-14.md`, with the approved mockup beside it)
publishes 3 monthly bases, a quarterly Performance Pay cap and a $15,000
activation. Its own first line says it replaces the 8 October handoff
"including its names, amounts, activation, percentage split and payout
ladder". It is 2 months newer than the spec and comes from the spec's
author, which is why it wins. Shaw instructed the rebuild on 29 October with
the document attached.

**This supersedes the spec on price and only on price.** The grade only
assessment, the fixed 3 times weekly frequency and every other
non-negotiable are untouched. 2 further rules were knowingly broken on
`/programs-pricing/pricing` alone, both at the handoff's instruction: SEO
Guidelines 1.3 (no price figures in the title or meta description) and
KEYWORD-RESEARCH 4.4d, whose primary keyword "home service marketing
pricing" the approved title and H1 do not contain.

Build Spec v2, the Argument Spine, SEO Guidelines and KEYWORD-RESEARCH still
carry the retired offer. They were not edited, because they are converted
source documents. Read this section before trusting them on price.

### The grade labels

Build Spec v2 names the 4 grades No Brand Equity, Name Recognition,
Household Name, Negative Brand Equity and says to use those labels verbatim.
`src/lib/bf-content.ts` carried "Unknown" and "Negative Equity" from the
older revision. Ryan signed this off in October 2026 and the labels were
swapped across every surface that carries them: `bf-content.ts`, `faqs.ts`,
the concierge prompt, and `llms.txt`. Each grade's meaning text was left as
written. See `docs/CONVERSION-NOTES.md`.
