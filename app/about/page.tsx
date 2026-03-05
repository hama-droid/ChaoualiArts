import Container from "@/components/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Artist statement and background.",
};

export default function AboutPage() {
  return (
    <main className="py-12">
      <Container>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          About
        </h1>

        <div className="mt-8 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-neutral-800 leading-relaxed">
              Chaouali Arts is a contemporary practice focused on bold color,
              clean structure, and high-finish surfaces. The work is designed to
              read instantly from a distance and reveal detail at close range.
            </p>

            <p className="mt-5 text-neutral-700 leading-relaxed">
              Replace this text with your real story: where you’re from, what
              your work is about, what your influences are, and what collectors
              should know.
            </p>

            <div className="mt-8 rounded-3xl border border-neutral-200 p-6">
              <h2 className="font-semibold">Collector notes</h2>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                <li>• Certificate of authenticity on request</li>
                <li>• Shipping quoted per destination</li>
                <li>• Commission slots limited per month</li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-3xl border border-neutral-200 p-6">
              <h2 className="font-semibold">Press / Highlights</h2>
              <p className="mt-3 text-sm text-neutral-700">
                Add any exhibitions, collaborations, press mentions, or awards here.
              </p>

              <h2 className="mt-8 font-semibold">Location</h2>
              <p className="mt-3 text-sm text-neutral-700">Tunisia (studio-based)</p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
