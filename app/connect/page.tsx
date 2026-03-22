import Container from "@/components/Container";
import Link from "next/link";

export default function ConnectPage() {
  return (
    <main className="py-12">
      <Container>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Connect</h1>
        <p className="mt-4 text-neutral-700 max-w-2xl leading-relaxed">
          For collectors, commissions, wholesale, or collaborations.
        </p>

        <div className="mt-8 flex flex-col gap-3">
          <a className="underline" href="mailto:mtalebled@gmail.com">mtalebled@gmail.com</a>
          <Link className="underline" href="/contact">Commission / Inquiry form</Link>
          <Link className="underline" href="/shop">Go to Chaouali Shop</Link>
        </div>
      </Container>
    </main>
  );
}