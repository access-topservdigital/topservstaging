export interface PortfolioVideo {
  id: string;
  title: string;
  client: string;
  trade: string;
  kind: string;
  uploadDate: string;
  embedUrl: string;
  thumbnail: string;
}

function yt(id: string, rest: Omit<PortfolioVideo, "id" | "embedUrl" | "thumbnail">): PortfolioVideo {
  return {
    id,
    ...rest,
    embedUrl: `https://www.youtube.com/embed/${id}`,
    thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
  };
}

// Verified live videos from TopServ's client channels (titles and upload
// dates pulled from YouTube, Aug 2026).
export const portfolioVideos: PortfolioVideo[] = [
  yt("IDMA6lnKITI", {
    title: "Why Over 100 Neighbors Trust Sugar Land Premier Roofing for Their Roofs!",
    client: "Sugar Land Premier Roofing",
    trade: "Roofing",
    kind: "Social proof film",
    uploadDate: "2025-01-16",
  }),
  yt("iyHKJUvPEEs", {
    title: "45 Years of Trust: Why Chisholm Plumbing Air Electric is Greer's Trusted Home Service Expert",
    client: "Chisholm Plumbing, Heating & Air Conditioning",
    trade: "Plumbing · HVAC · Electrical",
    kind: "Brand story film",
    uploadDate: "2024-08-20",
  }),
  yt("4hYU9yjk6V4", {
    title: "Our HVAC Story in Clackamas, OR: A Commitment to Home Comfort and Safety | Ultimate Comfort",
    client: "Ultimate Comfort",
    trade: "HVAC",
    kind: "Brand story film",
    uploadDate: "2024-04-04",
  }),
];
