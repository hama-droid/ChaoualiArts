import Container from "@/components/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Inquiries and commission requests.",
};

export default function ContactPage() {
  return (
    <main className="py-12">
      <Container>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Contact
        </h1>
        <p className="mt-3 text-neutral-600 max-w-2xl">
          Use this form to inquire about an artwork or request a commission.
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <form
              className="rounded-3xl border border-neutral-200 p-6 space-y-4"
              action="mailto:chaoualiarts@gmail.com"
              method="post"
              encType="text/plain"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm text-neutral-700">Name</label>
                  <input
                    name="name"
                    className="mt-2 w-full rounded-2xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-neutral-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="mt-2 w-full rounded-2xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-neutral-700">Subject</label>
                <input
                  name="subject"
                  placeholder='e.g., Inquiry about "Sunlit Echo"'
                  className="mt-2 w-full rounded-2xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black"
                  required
                />
              </div>

              <div>
                <label className="text-sm text-neutral-700">Message</label>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell me your location, budget range, and deadline (if any)."
                  className="mt-2 w-full rounded-2xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black"
                  required
                />
              </div>

              <button className="w-full rounded-full bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90 transition">
                Send Inquiry
              </button>
            </form>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-3xl border border-neutral-200 p-6">
              <h2 className="font-semibold">Direct</h2>
              <p className="mt-3 text-sm text-neutral-700">
                Email:{" "}
                <a className="underline" href="mailto:chaoualiarts@gmail.com">
                  chaoualiarts@gmail.com
                </a>
              </p>

              <h2 className="mt-8 font-semibold">Commission flow</h2>
              <ol className="mt-3 space-y-2 text-sm text-neutral-700 list-decimal pl-5">
                <li>Inquiry + references</li>
                <li>Quote + timeline</li>
                <li>Deposit to lock slot</li>
                <li>Progress updates</li>
                <li>Delivery / pickup</li>
              </ol>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}