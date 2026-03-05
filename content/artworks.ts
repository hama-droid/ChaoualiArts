export type Artwork = {
  slug: string;
  title: string;
  year?: string;
  medium: string;
  size: string; // e.g. "80 × 60 cm"
  availability: "Available" | "Sold" | "On inquiry";
  coverImage: string; // path under /public
  galleryImages: string[]; // paths under /public
  statement?: string;
};

export const ARTWORKS: Artwork[] = [
  {
    slug: "sunlit-echo",
    title: "Sunlit Echo",
    year: "2026",
    medium: "Acrylic on canvas",
    size: "80 × 60 cm",
    availability: "On inquiry",
    coverImage: "/art/sunlit-echo/cover.jpg",
    galleryImages: [
      "/art/sunlit-echo/cover.jpg",
      "/art/sunlit-echo/detail-1.jpg",
      "/art/sunlit-echo/detail-2.jpg",
    ],
    statement:
      "A study of rhythm and contrast—built to feel optimistic, loud, and clean from a distance, rich up close.",
  },
  {
    slug: "tunisian-noon",
    title: "Tunisian Noon",
    year: "2026",
    medium: "Mixed media",
    size: "70 × 50 cm",
    availability: "Available",
    coverImage: "/art/tunisian-noon/cover.jpg",
    galleryImages: [
      "/art/tunisian-noon/cover.jpg",
      "/art/tunisian-noon/detail-1.jpg",
    ],
    statement:
      "Heat, geometry, and saturated color—an homage to Mediterranean light and street pattern.",
  },
  {
    slug: "heartbeat-blue",
    title: "Heartbeat Blue",
    year: "2025",
    medium: "Acrylic on paper",
    size: "42 × 29.7 cm",
    availability: "Sold",
    coverImage: "/art/heartbeat-blue/cover.jpg",
    galleryImages: ["/art/heartbeat-blue/cover.jpg"],
    statement:
      "Minimal forms with high emotional pressure—quiet composition, strong pulse.",
  },
];

export function getArtworkBySlug(slug: string) {
  return ARTWORKS.find((a) => a.slug === slug);
}
