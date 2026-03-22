"use client";

import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const NAV = [
  { href: "/artist", label: "THE ARTIST" },
  { href: "/shop", label: "CHAOUALI SHOP" },
  { href: "/connect", label: "CONNECT" },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const [q, setQ] = useState("");
  const [lang, setLang] = useState("en");

  // persist UI language (real translations later)
  useEffect(() => {
    const saved = localStorage.getItem("chaouali_lang");
    if (saved) setLang(saved);
  }, []);
  useEffect(() => {
    localStorage.setItem("chaouali_lang", lang);
  }, [lang]);

  const active = useMemo(() => (href: string) => pathname === href, [pathname]);

  function onSearch(e: React.FormEvent) {
    e.preventDefault();
    const query = q.trim();
    if (!query) return;
    router.push(`/shop?search=${encodeURIComponent(query)}`);
  }

  return (
    <header className="sticky top-0 z-50 bg-black text-white border-b border-white/10">
      <div className="mx-auto max-w-7xl px-5">
        {/* Row 1 */}
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Left: Shop now */}
          <Link
            href="/shop"
            className="hidden sm:inline-flex items-center gap-2 border border-white px-4 py-2 text-xs font-bold tracking-widest hover:bg-white hover:text-black transition"
          >
            SHOP NOW <span aria-hidden>›</span>
          </Link>

          {/* Center logo */}
          <Link href="/" className="text-xl md:text-2xl font-extrabold tracking-widest">
            CHAOUALI ARTS
          </Link>

          {/* Right: search + language */}
          <div className="hidden md:flex items-center gap-3">
            <form onSubmit={onSearch} className="flex items-center gap-2">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Enter your search"
                className="w-56 bg-black text-white border border-white/40 px-3 py-2 text-xs outline-none focus:border-white"
              />
              <button
                type="submit"
                className="border border-white/40 px-3 py-2 text-xs hover:border-white transition"
                aria-label="Search"
              >
                🔍
              </button>
            </form>

            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="bg-black border border-white/40 px-3 py-2 text-xs outline-none"
              aria-label="Language"
            >
              <option value="en">🇺🇸 English</option>
              <option value="fr">🇫🇷 Français</option>
              <option value="ar">🇹🇳 العربية</option>
            </select>
          </div>
        </div>

        {/* Row 2: nav like Britto */}
        <nav className="hidden md:flex items-center justify-center gap-10 pb-3">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-xs font-bold tracking-widest ${
                active(item.href) ? "text-white" : "text-white/75 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile */}
        <div className="md:hidden pb-4 space-y-3">
          <div className="flex flex-wrap gap-2">
            <Link href="/shop" className="border border-white px-3 py-2 text-xs font-bold tracking-widest">
              SHOP NOW ›
            </Link>
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className="border border-white/30 px-3 py-2 text-xs">
                {item.label}
              </Link>
            ))}
          </div>

          <form onSubmit={onSearch} className="flex gap-2">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search"
              className="flex-1 bg-black text-white border border-white/40 px-3 py-2 text-xs outline-none"
            />
            <button className="border border-white/40 px-3 py-2 text-xs">🔍</button>
          </form>

          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="w-full bg-black border border-white/40 px-3 py-2 text-xs outline-none"
          >
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="ar">العربية</option>
          </select>
        </div>
      </div>
    </header>
  );
}