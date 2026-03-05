import Container from "@/components/Container";
import ArtworkCard from "@/components/ArtworkCard";
import { ARTWORKS } from "@/content/artworks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Selected works, originals and studies.",
};

export default function GalleryPage() {
  return (
    <main className="py-12">
      <Container>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Gallery
        </h1>
        <p className="mt-3 text-neutral-600 max-w-2xl">
          A curated body of work. Click any piece for details, close-ups, and inquiry.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {ARTWORKS.map((art) => (
            <ArtworkCard key={art.slug} art={art} />
          ))}
        </div>
      </Container>
    </main>
  );
}
