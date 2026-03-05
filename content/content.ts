export type Currency = "USD" | "EUR" | "GBP";

export type Category = {
  slug: string;        // used in URL: /shop/<slug>
  name: string;        // shown to visitors
  description?: string;
  coverImage?: string; // optional: /public/...
  shippingFlat: { USD: number; EUR: number; GBP: number }; // flat per order for this category
};

export type Product = {
  slug: string;        // /product/<slug>
  title: string;
  category: string;    // must match Category.slug
  price: { USD: number; EUR: number; GBP: number }; // you set exact prices per currency
  images: string[];    // /public/...
  short?: string;
  details?: {
    size?: string;
    material?: string;
    year?: string;
    edition?: string;  // e.g., "Open Edition" / "Limited Edition 50 (signed)"
    notes?: string;
  };
  availability: "In stock" | "Made to order" | "Sold out" | "On inquiry";
  maxQty?: number;     // recommended: allow qty for prints, 1 for paintings/ceramics
};

// ✅ YOU ONLY EDIT THIS SECTION to add categories/products
export const CATEGORIES: Category[] = [
  {
    slug: "prints",
    name: "Prints",
    description: "Open editions and limited editions.",
    coverImage: "/placeholders/category-prints.jpg",
    shippingFlat: { USD: 25, EUR: 25, GBP: 20 },
  },
  {
    slug: "ceramics",
    name: "Ceramics",
    description: "Handmade functional & decorative pieces.",
    coverImage: "/placeholders/category-ceramics.jpg",
    shippingFlat: { USD: 40, EUR: 40, GBP: 35 },
  },
  {
    slug: "paintings",
    name: "Paintings",
    description: "Original works and one-of-ones.",
    coverImage: "/placeholders/category-paintings.jpg",
    shippingFlat: { USD: 90, EUR: 90, GBP: 80 },
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

export function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}
export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
export function getProductsByCategory(categorySlug: string) {
  return PRODUCTS.filter((p) => p.category === categorySlug);
}