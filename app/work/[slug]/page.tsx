import Container from "@/components/Container";
import { ARTWORKS, getArtworkBySlug } from "@/content/artworks";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return ARTWORKS.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const art = getArtworkBySlug(params.slug);
  if (!art) return { title: "Work not found" };

  return {
    title: art.title,
    description: `${art.medium} · ${art.size}`,
  };
}

export default function WorkPage({ params }: { params: { slug: string } }) {
  const art = getArtworkBySlug(params.slug);
  if (!art) return notFound();

  return (
    <main className="py-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100">
              <Image
                src={art.coverImage}
                alt={art.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {art.galleryImages.slice(0, 3).map((src) => (
                <div
                  key={src}
                  className="relative aspect-square overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100"
                >
                  <Image src={src} alt="" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          <aside className="md:col-span-5">
            <h1 className="text-3xl font-semibold tracking-tight">{art.title}</h1>
            <p className="mt-2 text-neutral-600">
              {art.year ? `${art.year} · ` : ""}
              {art.medium} · {art.size}
            </p>

            <div className="mt-4 inline-flex items-center rounded-full border border-neutral-300 px-3 py-1 text-sm">
              {art.availability}
            </div>

            {art.statement && (
              <p className="mt-6 leading-relaxed text-neutral-800">
                {art.statement}
              </p>
            )}

            <div className="mt-8 rounded-3xl border border-neutral-200 p-5">
              <p className="text-sm text-neutral-600">Inquiry</p>
              <p className="mt-2 text-sm text-neutral-700">
                For pricing and availability, contact the studio.
              </p>

              <a
                className="mt-4 block rounded-full bg-black px-5 py-3 text-center text-sm font-medium text-white hover:opacity-90 transition"
                href={`mailto:mtalebled@gmail.com?subject=${encodeURIComponent(
                  `Inquiry: ${art.title}`
                )}`}
              >
                Email about this work
              </a>

              <p className="mt-4 text-xs text-neutral-500">
                Certificate of authenticity available on request.
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}