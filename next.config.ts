import type { NextConfig } from "next";

// 301 map from the old Webflow site's URLs. Old legal-page URLs are preserved
// as-is (same slugs exist here), so they need no entries.
const OLD_SERVICE_SLUGS: Record<string, string> = {
  "video-marketing-for-home-service-companies": "video-marketing",
  "paid-advertising-for-home-service-companies": "paid-advertising",
  "graphic-design-solutions-for-home-service-companies": "graphic-design",
  "web-development-for-home-service-companies": "web-development",
  "email-marketing-for-home-service-companies": "email-marketing",
  "seo-services-for-home-service-companies": "seo",
  "social-media-marketing-for-home-service-companies": "social-media-marketing",
  "automation-solutions-for-home-service-companies": "automation",
  "local-services-ads-lsa-for-home-service-companies": "local-services-ads",
  "geofencing-marketing-for-home-service-companies": "geofencing",
};

// The old site also sold 3 bundle pages that grouped several capabilities
// under a marketing name. Nothing in the new IA groups capabilities that way,
// so each goes to the page that covers the same ground AND is reachable from
// the menu or footer. The /services pages are a closer topic match, but they
// are linked from neither, so landing there strands the visitor on a page
// with no way back into the site.
//
// Mapped from the live pages' own headings, not their titles or meta
// descriptions, which did not match what was on them: "Digital Growth
// Solutions" is described as creative and visual identity and is actually
// SEO and paid search.
const OLD_BUNDLE_PAGES: Record<string, string> = {
  // Social Media Strategy, Paid Social Campaigns, Content Creation: being
  // known and engaged with, which is the brand half of the methodology.
  "brand-visibility-engagement": "/brandformance",
  // Local SEO, National and Enterprise SEO, Paid Search and SEM: demand
  // capture, which the Method covers as a stage inside the system.
  "digital-growth-solutions": "/method",
  // Consulting, Campaign Audits, Strategic Planning, Automation and CRM:
  // how the work is planned and run, month by month.
  "strategic-business-consulting": "/programs-pricing/how-it-works",
};
const TRADES = ["hvac", "plumbing", "roofing", "electrical", "garage-door", "pest-control"];

// The 3 published case studies came off in October 2026: former clients leave
// the site and every story shown needs sourced numbers. Nothing replaced them,
// so every URL that ever pointed at one now lands on the hub rather than at a
// page that is not there. That covers the old Webflow URLs, which existed at
// both a nested and a top level path, and the slugs this site itself used.
const RETIRED_CASE_STUDY_PATHS = [
  "/about/case-studies/all-heart-case-study",
  "/about/case-studies/flow-pros-case-study",
  "/about/case-studies/the-problem-solvers-case-study",
  "/all-heart-case-study",
  "/flow-pros-case-study",
  "/the-problem-solvers-case-study",
  "/case-studies/all-heart",
  "/case-studies/flow-pros-plumbing",
  "/case-studies/the-problem-solvers",
];

const nextConfig: NextConfig = {
  // Next's own trailing-slash redirect answers 308 and lands on the stripped
  // path, which costs a second hop whenever that path redirects again, and
  // contradicts the 301 every other permanent redirect here uses. src/proxy.ts
  // does it instead, in 1 hop and as a 301.
  skipTrailingSlashRedirect: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "i.vimeocdn.com",
      },
    ],
  },
  // Every permanent redirect answers a literal 301 rather than Next's default
  // 308. Both are permanent and search engines treat them the same, but 301 is
  // what the team asked for, so statusCode is set explicitly instead of using
  // `permanent: true`. The 2 properties are mutually exclusive in the type.
  async redirects() {
    return [
      ...Object.entries(OLD_SERVICE_SLUGS).map(([oldSlug, newSlug]) => ({
        source: `/services/${oldSlug}`,
        destination: `/services/${newSlug}`,
        statusCode: 301,
      })),
      ...Object.entries(OLD_BUNDLE_PAGES).map(([oldSlug, destination]) => ({
        source: `/${oldSlug}`,
        destination,
        statusCode: 301,
      })),
      ...TRADES.map((trade) => ({
        source: `/digital-marketing-services/digital-marketing-for-${trade}-companies`,
        destination: `/industries/${trade}`,
        statusCode: 301,
      })),
      ...RETIRED_CASE_STUDY_PATHS.map((source) => ({
        source,
        destination: "/case-studies",
        statusCode: 301,
      })),
      // The Flow Pros post came off with the client stories.
      { source: "/blog/flow-pros-seo-sprint", destination: "/blog", statusCode: 301 },
      { source: "/about/case-studies", destination: "/case-studies", statusCode: 301 },
      { source: "/about/team", destination: "/about", statusCode: 301 },
      { source: "/topserv-digital-testimonials", destination: "/about", statusCode: 301 },
      { source: "/spotlight", destination: "/about", statusCode: 301 },
      // BrandFormance restructure: pricing lives inside the Programs hub now.
      { source: "/pricing", destination: "/programs-pricing/pricing", statusCode: 301 },
      // The Programs hub is navigation, not a page: it lands on Overview. Done
      // here rather than with permanentRedirect() in a page component, because
      // that helper is hardcoded to 308 and the team asked for 301.
      { source: "/programs-pricing", destination: "/programs-pricing/overview", statusCode: 301 },
      // Spec v2: the public diagnostic is the Brand Assessment (grade only).
      { source: "/brand-score", destination: "/brand-assessment", statusCode: 301 },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
