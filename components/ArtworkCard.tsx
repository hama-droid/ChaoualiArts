import Image from "next/image";
import Link from "next/link";
import type { Artwork } from "@/content/artworks";

export default function ArtworkCard({ art }: { art: Artwork }) {
  return (
    <Link
      href={`/work/${art.slug}`}
      className="group rounded-2xl border border-neutral-200 overflow-hidden hover:border-neutral-400 transition"
    >
      <div className="relative aspect-[4/5] bg-neutral-100">
        <Image
          src={art.coverImage}
          alt={art.title}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={false}
        />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-semibold tracking-tight">{art.title}</h3>
            <p className="mt-1 text-sm text-neutral-600">
              {art.medium} · {art.size}
            </p>
          </div>
          <span className="text-xs rounded-full border border-neutral-300 px-2 py-1 text-neutral-700">
            {art.availability}
          </span>
        </div>
      </div>
    </Link>
  );
}
