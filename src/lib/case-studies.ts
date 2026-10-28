export interface CaseStudyStat {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  trade: string;
  location?: string;
  timeline?: string;
  headline: string;
  problem: string;
  approach: string[];
  stats: CaseStudyStat[];
  outcome: string;
  /** Entries in lib/videos.ts to embed as the client's films. */
  videoIds?: string[];
}

// Facts sourced from TopServ's published case studies (fetched Aug 2026).
/**
 * No case studies are published.
 *
 * Flow Pros Plumbing, All Heart and The Problem Solvers came off in October
 * 2026: former clients leave the site, and every story shown needs numbers
 * with a source. Their 3 pages 301 to /case-studies, and the old site's
 * URLs for them do the same, in next.config.ts.
 *
 * The hub stays and renders its empty state. New stories for All Seasons,
 * King's, Hawkins, Lilypad and Watt's Right land here when their numbers
 * arrive.
 */
export const caseStudies: CaseStudy[] = [];
