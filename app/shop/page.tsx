import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { CATEGORIES, PRODUCTS } from "@/content/catalog";

export default function ShopHome({
  searchParams,
}: {
  searchParams?: { search?: string };
}) {
  const q = (searchParams?.search || "").trim().toLowerCase();

  const filteredProducts =
    q.length > 0
      ? PRODUCTS.filter((p) => {
          const title = p.title.toLowerCase();
          const cat = p.category.toLowerCase();
          const short = (p.short || "").toLowerCase();
          const material = (p.details?.material || "").toLowerCase();
          return (
            title.includes(q) ||
            cat.includes(q) ||
            short.includes(q) ||
            material.includes(q)
          );
        })
      : [];

  return (
    <main className="py-12">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Chaouali Shop</h1>
            <p className="mt-3 text-neutral-600 max-w-2xl">
              Limited editions, originals, and sculptures. Worldwide shipping.
            </p>
          </div>

          {/* Optional: show active search */}
          {q && (
            <Link className="text-sm underline" href="/shop">
              Clear search
            </Link>
          )}
        </div>

        {/* If searching: show products */}
        {q ? (
          <>
            <p className="mt-6 text-sm text-neutral-600">
              Search results for: <b>{searchParams?.search}</b>
            </p>

            {filteredProducts.length === 0 ? (
              <div className="mt-10 rounded-3xl border border-neutral-200 p-6">
                <p className="text-neutral-700">
                  No products matched your search. Try a different keyword.
                </p>
              </div>
            ) : (
              <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
                {filteredProducts.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            )}
          </>
        ) : (
          /* No search: show category tiles */
          <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                href={`/shop/${c.slug}`}
                className="group rounded-2xl border border-neutral-200 overflow-hidden hover:border-neutral-400 transition"
              >
                <div className="relative aspect-[4/3] bg-neutral-100">
                  <Image
                    src={c.coverImage || "/placeholders/category.jpg"}
                    alt={c.name}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="p-4">
                  <h2 className="font-semibold tracking-tight">{c.name}</h2>
                  {c.description && (
                    <p className="mt-1 text-sm text-neutral-600">{c.description}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </main>
  );
}