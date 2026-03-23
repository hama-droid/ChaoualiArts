import Container from "@/components/Container";
import EmailPopup from "@/components/EmailPopup";
import ArtworkCard from "@/components/ArtworkCard";
import { ARTWORKS } from "@/content/artworks";
import Link from "next/link";
import Image from "next/image";

function ArtBanner({ slug, label }: { slug: string; label: string }) {
  const art = ARTWORKS.find((a) => a.slug === slug) || ARTWORKS[0];

  return (
    <section className="py-10">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] border-4 border-black shadow-[10px_10px_0_0_#000]">
          <div className="absolute inset-0">
            <Image src={art.coverImage} alt="" fill className="object-cover" priority={false} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-black/70" />
          <div className="relative p-7 md:p-10">
            <p className="text-xs font-extrabold tracking-[0.25em] text-white/80">
              {label}
            </p>
            <h3 className="mt-3 text-2xl md:text-4xl font-black tracking-tight text-white">
              {art.title}
            </h3>
            <p className="mt-2 text-sm md:text-base text-white/80">
              {art.medium} · {art.size}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`/work/${art.slug}`}
                className="inline-flex items-center justify-center rounded-full border-2 border-white bg-white px-5 py-3 text-sm font-bold text-black hover:opacity-90 transition"
              >
                View Artwork →
              </Link>
              <Link
                href="/shop"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/70 px-5 py-3 text-sm font-bold text-white hover:border-white transition"
              >
                Shop →
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function Home() {
  const hero = ARTWORKS[0];
  const featured = ARTWORKS.slice(0, 6);

  return (
    <main>
      <EmailPopup />

      {/* HERO */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 opacity-35">
          {hero?.coverImage && (
            <Image src={hero.coverImage} alt="" fill className="object-cover" priority />
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/90" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold tracking-[0.25em] text-white/70">
              CHAOUALI ARTS
            </p>

            <h1 className="mt-5 text-4xl md:text-6xl font-black tracking-tight">
              Pop-art energy. Collector finish. Handmade soul.
            </h1>

            <p className="mt-5 text-white/80 leading-relaxed text-base md:text-lg">
              Originals (private acquisition), limited editions, sculptures & ceramics.
              Worldwide shipping. Certificate of authenticity available.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="rounded-full border-2 border-white bg-white px-6 py-3 text-sm font-bold text-black hover:opacity-90 transition"
              >
                SHOP NOW →
              </Link>

              <Link
                href="/gallery"
                className="rounded-full border-2 border-white/60 px-6 py-3 text-sm font-bold text-white hover:border-white transition"
              >
                VIEW GALLERY
              </Link>

              <Link
                href="/artist"
                className="rounded-full border-2 border-white/25 px-6 py-3 text-sm font-bold text-white hover:border-white/60 transition"
              >
                THE ARTIST
              </Link>
            </div>
          </div>

          {/* Pop-art chips */}
          <div className="mt-10 flex flex-wrap gap-3">
            <span className="rounded-full border-2 border-white/25 bg-white/10 px-4 py-2 text-xs font-bold tracking-wide">
              LIMITED DROPS
            </span>
            <span className="rounded-full border-2 border-white/25 bg-white/10 px-4 py-2 text-xs font-bold tracking-wide">
              HANDMADE CERAMICS
            </span>
            <span className="rounded-full border-2 border-white/25 bg-white/10 px-4 py-2 text-xs font-bold tracking-wide">
              ORIGINALS: PRIVATE
            </span>
          </div>
        </div>
      </section>

      {/* Shop category tiles (Britto-style entry points) */}
      <section className="py-12">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            <Link
              href="/shop/limited-editions"
              className="rounded-[28px] border-4 border-black bg-[linear-gradient(135deg,var(--accent3),#fff)] p-7 shadow-[10px_10px_0_0_#000] hover:-translate-y-1 transition"
            >
              <p className="text-xs font-extrabold tracking-[0.25em]">CHAOUALI SHOP</p>
              <h2 className="mt-2 text-2xl font-black">Limited Editions</h2>
              <p className="mt-2 text-sm text-black/80">Signed / numbered releases.</p>
              <p className="mt-5 text-sm font-bold underline">Explore →</p>
            </Link>

            <Link
              href="/shop/originals"
              className="rounded-[28px] border-4 border-black bg-[linear-gradient(135deg,var(--accent1),#fff)] p-7 shadow-[10px_10px_0_0_#000] hover:-translate-y-1 transition"
            >
              <p className="text-xs font-extrabold tracking-[0.25em]">COLLECTORS</p>
              <h2 className="mt-2 text-2xl font-black">Originals</h2>
              <p className="mt-2 text-sm text-black/80">
                Private acquisition — contact to buy.
              </p>
              <p className="mt-5 text-sm font-bold underline">View →</p>
            </Link>

            <Link
              href="/shop/sculptures"
              className="rounded-[28px] border-4 border-black bg-[linear-gradient(135deg,var(--accent2),#fff)] p-7 shadow-[10px_10px_0_0_#000] hover:-translate-y-1 transition"
            >
              <p className="text-xs font-extrabold tracking-[0.25em]">OBJECTS</p>
              <h2 className="mt-2 text-2xl font-black">Sculptures & Ceramics</h2>
              <p className="mt-2 text-sm text-black/80">Handmade sculptural work.</p>
              <p className="mt-5 text-sm font-bold underline">Shop →</p>
            </Link>
          </div>
        </Container>
      </section>

      {/* Painting banner between sections */}
      <ArtBanner slug="tunisian-noon" label="STUDIO FEATURE" />

      {/* Featured works grid */}
      <section className="py-12">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-black tracking-tight">Featured Works</h2>
              <p className="mt-2 text-neutral-600">
                A curated selection—built to look powerful from distance and rich up close.
              </p>
            </div>
            <Link className="text-sm font-bold underline" href="/gallery">
              View all →
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {featured.map((art) => (
              <ArtworkCard key={art.slug} art={art} />
            ))}
          </div>
        </Container>
      </section>

      {/* Another painting banner */}
      <ArtBanner slug="sunlit-echo" label="NEW DROP ENERGY" />

      {/* Bottom CTA */}
      <section className="py-14">
        <Container>
          <div className="rounded-[28px] border-4 border-black bg-black text-white p-8 md:p-10 shadow-[10px_10px_0_0_#000]">
            <h3 className="text-2xl md:text-4xl font-black tracking-tight">
              Want a commissioned piece?
            </h3>
            <p className="mt-3 text-white/80 max-w-2xl">
              Tell us the size, theme, deadline, and where it will be displayed.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-white bg-white px-6 py-3 text-sm font-bold text-black hover:opacity-90 transition"
              >
                Commission / Inquiry →
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}