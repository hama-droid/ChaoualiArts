import Container from "@/components/Container";
import EmailPopup from "@/components/EmailPopup";
import PrimaryButton from "@/components/PrimaryButton";
import ArtworkCard from "@/components/ArtworkCard";
import { ARTWORKS } from "@/content/artworks";
import Link from "next/link";

export default function Home() {
  const featured = ARTWORKS.slice(0, 3);
  const hero = ARTWORKS[0];

  return (
    <main>
      <EmailPopup />

      {/* HERO: big artwork like brand sites */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-5 py-10 md:py-14">
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-6">
              <p className="text-xs font-semibold tracking-[0.22em] text-white/70">
                CONTEMPORARY • COLOR • CRAFT
              </p>

              <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
                Chaouali Arts
              </h1>

              <p className="mt-4 text-white/80 max-w-xl leading-relaxed">
                Originals, limited editions, sculptures & ceramics — built with bold
                composition and clean finishing.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center border border-white px-5 py-3 text-sm font-semibold tracking-wide hover:bg-white hover:text-black transition"
                >
                  Shop Now →
                </Link>
                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center border border-white/40 px-5 py-3 text-sm font-medium text-white hover:border-white transition"
                >
                  View Gallery
                </Link>
              </div>
            </div>

            <div className="md:col-span-6">
              {/* Simple hero showcase using your first artwork title */}
              <div className="rounded-3xl border border-white/15 bg-white/5 p-6">
                <p className="text-xs font-semibold tracking-[0.22em] text-white/70">
                  FEATURED WORK
                </p>
                <p className="mt-2 text-2xl font-semibold">{hero?.title}</p>
                <p className="mt-2 text-sm text-white/70">
                  {hero?.medium} · {hero?.size}
                </p>
                <Link
                  href={`/work/${hero?.slug}`}
                  className="mt-5 inline-flex items-center justify-center border border-white px-4 py-2 text-xs font-bold tracking-[0.22em] hover:bg-white hover:text-black transition"
                >
                  VIEW →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop category strip like Britto entry points */}
      <section className="py-10 border-b border-neutral-200">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/shop/limited-editions"
              className="rounded-2xl border border-neutral-200 p-6 hover:border-neutral-400 transition"
            >
              <p className="text-xs font-semibold tracking-[0.22em] text-neutral-600">CHAOUALI SHOP</p>
              <h2 className="mt-2 text-xl font-semibold">Limited Editions</h2>
              <p className="mt-2 text-sm text-neutral-600">Signed / numbered editions.</p>
            </Link>

            <Link
              href="/shop/originals"
              className="rounded-2xl border border-neutral-200 p-6 hover:border-neutral-400 transition"
            >
              <p className="text-xs font-semibold tracking-[0.22em] text-neutral-600">COLLECTORS</p>
              <h2 className="mt-2 text-xl font-semibold">Originals</h2>
              <p className="mt-2 text-sm text-neutral-600">Private acquisition (no public prices).</p>
            </Link>

            <Link
              href="/shop/sculptures"
              className="rounded-2xl border border-neutral-200 p-6 hover:border-neutral-400 transition"
            >
              <p className="text-xs font-semibold tracking-[0.22em] text-neutral-600">OBJECTS</p>
              <h2 className="mt-2 text-xl font-semibold">Sculptures & Ceramics</h2>
              <p className="mt-2 text-sm text-neutral-600">Handmade sculptural work.</p>
            </Link>
          </div>
        </Container>
      </section>

      {/* Featured works */}
      <section className="py-10">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Featured works</h2>
              <p className="mt-2 text-neutral-600">
                Curated selection — explore the full body of work in the gallery.
              </p>
            </div>
            <a className="text-sm underline" href="/gallery">
              View all
            </a>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {featured.map((art) => (
              <ArtworkCard key={art.slug} art={art} />
            ))}
          </div>

          <div className="mt-10">
            <PrimaryButton href="/contact">Commission / Inquiry</PrimaryButton>
          </div>
        </Container>
      </section>
    </main>
  );
}