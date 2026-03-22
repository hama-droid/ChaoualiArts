import Container from "@/components/Container";
import EmailPopup from "@/components/EmailPopup";
import PrimaryButton from "@/components/PrimaryButton";
import ArtworkCard from "@/components/ArtworkCard";
import { ARTWORKS } from "@/content/artworks";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const featured = ARTWORKS.slice(0, 3);
  const hero = ARTWORKS[0];

  return (
    <main>
      <EmailPopup />

      {/* HERO */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 opacity-35">
          {hero?.coverImage && (
            <Image
              src={hero.coverImage}
              alt=""
              fill
              className="object-cover"
              priority
            />
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/85" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 md:py-24">
          <p className="text-xs font-semibold tracking-[0.22em] text-white/70">
            CHAOUALI ARTS
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl">
            Contemporary color-driven work—built to feel alive on the wall.
          </h1>

          <p className="mt-5 text-white/80 max-w-2xl leading-relaxed">
            Limited editions, originals (private acquisition), and sculptures/ceramics.
            Worldwide shipping. Certificate of authenticity available.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton href="/shop">Shop Now</PrimaryButton>
            <PrimaryButton href="/gallery" variant="outline">
              View Gallery
            </PrimaryButton>
            <PrimaryButton href="/contact" variant="outline">
              Commission / Inquiry
            </PrimaryButton>
          </div>

          {hero && (
            <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm text-white/90">
              <span className="text-white/70">Featured:</span>
              <Link href={`/work/${hero.slug}`} className="underline hover:text-white">
                {hero.title} →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Shop category tiles */}
      <section className="py-10 border-b border-neutral-200">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/shop/limited-editions"
              className="rounded-3xl border border-neutral-200 p-7 shadow-sm hover:shadow-md hover:border-neutral-300 transition"
            >
              <p className="text-xs font-semibold tracking-[0.22em] text-neutral-500">
                CHAOUALI SHOP
              </p>
              <h2 className="mt-2 text-xl font-semibold">Limited Editions</h2>
              <p className="mt-2 text-sm text-neutral-600">
                Signed / numbered releases.
              </p>
            </Link>

            <Link
              href="/shop/originals"
              className="rounded-3xl border border-neutral-200 p-7 shadow-sm hover:shadow-md hover:border-neutral-300 transition"
            >
              <p className="text-xs font-semibold tracking-[0.22em] text-neutral-500">
                COLLECTORS
              </p>
              <h2 className="mt-2 text-xl font-semibold">Originals</h2>
              <p className="mt-2 text-sm text-neutral-600">
                Private acquisition—contact to buy.
              </p>
            </Link>

            <Link
              href="/shop/sculptures"
              className="rounded-3xl border border-neutral-200 p-7 shadow-sm hover:shadow-md hover:border-neutral-300 transition"
            >
              <p className="text-xs font-semibold tracking-[0.22em] text-neutral-500">
                OBJECTS
              </p>
              <h2 className="mt-2 text-xl font-semibold">Sculptures & Ceramics</h2>
              <p className="mt-2 text-sm text-neutral-600">
                Handmade sculptural work.
              </p>
            </Link>
          </div>
        </Container>
      </section>

      {/* Featured works */}
      <section className="py-12">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Featured works</h2>
              <p className="mt-2 text-neutral-600">
                Curated selection—explore the full gallery.
              </p>
            </div>
            <Link className="text-sm underline" href="/gallery">
              View all
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {featured.map((art) => (
              <ArtworkCard key={art.slug} art={art} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}