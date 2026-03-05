import Link from "next/link";
import Container from "./Container";

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="text-sm tracking-wide text-neutral-800 hover:text-black transition"
  >
    {label}
  </Link>
);

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">
            Chaouali Arts
          </Link>

          <nav className="flex items-center gap-6">
            <NavLink href="/gallery" label="Gallery" />
            <NavLink href="/about" label="About" />
            <NavLink href="/contact" label="Contact" />
            <NavLink href="/shop" label="Shop" />
          </nav>
        </div>
      </Container>
    </header>
  );
}
