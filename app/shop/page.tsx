import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";
import { CATEGORIES } from "@/content/catalog";

export default function ShopHome() {
  return (
    <main className="py-12">
      <Container>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Shop</h1>
        <p className="mt-3 text-neutral-600 max-w-2xl">
          Prints, ceramics, and original paintings. Worldwide shipping.
        </p>

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
      </Container>
    </main>
  );
}