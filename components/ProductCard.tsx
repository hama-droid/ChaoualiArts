import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/content/catalog";

export default function ProductCard({ product }: { product: Product }) {
  const cover = product.images?.[0] || "/placeholders/product.jpg";
  const isOriginal = product.category === "originals";

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm hover:shadow-md hover:border-neutral-300 transition"
    >
      <div className="relative aspect-[4/5] bg-neutral-100 overflow-hidden">
        <Image
          src={cover}
          alt={product.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="p-5">
        <h3 className="text-base font-semibold tracking-tight">{product.title}</h3>
        <p className="mt-1 text-sm text-neutral-600">{product.availability}</p>

        <div className="mt-4 flex items-center justify-between">
          {isOriginal ? (
            <span className="text-xs font-semibold tracking-wide text-neutral-700">
              PRIVATE ACQUISITION
            </span>
          ) : (
            <span className="text-sm font-semibold text-black">
              ${product.price.USD}
              <span className="ml-2 text-xs text-neutral-500">(USD)</span>
            </span>
          )}

          <span className="text-xs underline text-neutral-700 group-hover:text-black">
            View →
          </span>
        </div>
      </div>
    </Link>
  );
}