export type Currency = "USD" | "EUR" | "GBP";

export type Category = {
  slug: string;
  name: string;
  description?: string;
  coverImage?: string;
  shippingFlat: { USD: number; EUR: number; GBP: number };
};

export type Product = {
  slug: string;
  title: string;
  category: string;
  price: { USD: number; EUR: number; GBP: number };
  images: string[];
  short?: string;
  details?: {
    size?: string;
    material?: string;
    year?: string;
    edition?: string;
    notes?: string;
  };
  availability: "In stock" | "Made to order" | "Sold out" | "On inquiry";
  maxQty?: number;
};

// ✅ EDIT ONLY THESE ARRAYS
export const CATEGORIES: Category[] = [
  {
    slug: "limited-editions",
    name: "Limited Editions",
    description: "Signed / numbered editions.",
    coverImage: "/placeholders/category-limited.jpg",
    shippingFlat: { USD: 25, EUR: 25, GBP: 20 },
  },
  {
    slug: "originals",
    name: "Originals",
    description: "Private acquisition (contact to buy).",
    coverImage: "/placeholders/category-originals.jpg",
    shippingFlat: { USD: 90, EUR: 90, GBP: 80 },
  },
  {
    slug: "sculptures",
    name: "Sculptures & Ceramics",
    description: "Handmade sculptural work.",
    coverImage: "/placeholders/category-sculptures.jpg",
    shippingFlat: { USD: 40, EUR: 40, GBP: 35 },
  },
];

export const PRODUCTS: Product[] = [
  {
    slug: "sunlit-echo-print-a2",
    title: "Sunlit Echo — Print (A2)",
    category: "prints",
    price: { USD: 60, EUR: 55, GBP: 48 },
    images: ["/placeholders/product-1.jpg"],
    short: "High-quality art print. Made to order.",
    details: {
      size: "A2",
      material: "Fine art paper",
      edition: "Open Edition",
    },
    availability: "Made to order",
    maxQty: 5,
  },
  {
    slug: "tunisian-noon-ceramic-plate",
    title: "Tunisian Noon — Ceramic Plate",
    category: "ceramics",
    price: { USD: 120, EUR: 110, GBP: 95 },
    images: ["/placeholders/product-2.jpg"],
    short: "Handmade ceramic plate, glazed and signed.",
    details: {
      material: "Ceramic (handmade)",
      notes: "Each piece varies slightly (handmade).",
    },
    availability: "Made to order",
    maxQty: 2,
  },
  {
    slug: "heartbeat-blue-original",
    title: "Heartbeat Blue — Original Painting",
    category: "paintings",
    price: { USD: 950, EUR: 900, GBP: 780 },
    images: ["/placeholders/product-3.jpg"],
    short: "Original painting. Certificate of authenticity on request.",
    details: {
      size: "80 × 60 cm",
      material: "Acrylic on canvas",
      year: "2026",
    },
    availability: "On inquiry",
    maxQty: 1,
  },
];

// ✅ Helpers (these were missing — required by your pages)
export function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}
export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
export function getProductsByCategory(categorySlug: string) {
  return PRODUCTS.filter((p) => p.category === categorySlug);
}