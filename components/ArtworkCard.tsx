import Image from "next/image";
import Link from "next/link";
import type { Artwork } from "@/content/artworks";

export default function ArtworkCard({ art }: { art: Artwork }) {
  return (
    <Link
      href={`/work/${art.slug}`}
      className="group block overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm hover:shadow-md hover:border-neutral-300 transition"
    >
      <div className="relative aspect-[4/5] bg-neutral-100 overflow-hidden">
        <Image
          src={art.coverImage}
          alt={art.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold tracking-tight">{art.title}</h3>
            <p className="mt-1 text-sm text-neutral-600">
              {art.medium} · {art.size}
            </p>
          </div>

          <span className="shrink-0 rounded-full border border-neutral-300 px-3 py-1 text-xs text-neutral-700">
            {art.availability}
          </span>
        </div>
      </div>
    </Link>
  );
}