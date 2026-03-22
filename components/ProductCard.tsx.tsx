import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/content/catalog";

export default function ProductCard({ product }: { product: Product }) {
  const cover = product.images?.[0] || "/placeholders/product.jpg";
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group rounded-2xl border border-neutral-200 overflow-hidden hover:border-neutral-400 transition"
    >
      <div className="relative aspect-[4/5] bg-neutral-100">
        <Image src={cover} alt={product.title} fill className="object-cover group-hover:scale-[1.02] transition" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-semibold tracking-tight">{product.title}</h3>
            <p className="mt-1 text-sm text-neutral-600">{product.availability}</p>
          </div>
          <span className="text-xs rounded-full border border-neutral-300 px-2 py-1 text-neutral-700">
            From {product.price.USD}$
          </span>
        </div>
      </div>
    </Link>
  );
}