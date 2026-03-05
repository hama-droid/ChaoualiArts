import Container from "@/components/Container";
import PrimaryButton from "@/components/PrimaryButton";
import ArtworkCard from "@/components/ArtworkCard";
import { ARTWORKS } from "@/content/artworks";

export default function Home() {
  const featured = ARTWORKS.slice(0, 3);

  return (
    <main>
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
                Contemporary color-driven work—built to feel alive on the wall.
              </h1>
              <p className="mt-5 text-neutral-700 leading-relaxed max-w-xl">
                Originals and commissions by Chaouali. Clean composition, bold
                energy, and strong finishing—made to read from distance and
                reward up close.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton href="/gallery">View Gallery</PrimaryButton>
                <PrimaryButton href="/contact">Commission / Inquiry</PrimaryButton>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-3xl border border-neutral-200 p-6">
                <p className="text-sm text-neutral-600">
                  Collector notes
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>• Certificate of authenticity on request</li>
                  <li>• Worldwide shipping (quoted per piece)</li>
                  <li>• Studio updates + early access to new drops</li>
                </ul>

                <form
                  className="mt-6 flex gap-2"
                  action="mailto:chaoualiarts@gmail.com"
                  method="post"
                  encType="text/plain"
                >
                  <input
                    className="w-full rounded-full border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black"
                    placeholder="Your email for early access"
                    name="email"
                    type="email"
                    required
                  />
                  <button className="rounded-full bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90 transition">
                    Join
                  </button>
                </form>
                <p className="mt-3 text-xs text-neutral-500">
                  Phase 1 uses email-to-inbox signup. In Phase 2 we’ll connect a real list (Mailchimp/ConvertKit).
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Featured works
              </h2>
              <p className="mt-2 text-neutral-600">
                Curated selection—view the full body of work in the gallery.
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
        </Container>
      </section>
    </main>
  );
}
