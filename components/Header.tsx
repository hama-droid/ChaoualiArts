"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const NAV = [
  { href: "/artist", label: "THE ARTIST" },
  { href: "/shop", label: "CHAOUALI SHOP" },
  { href: "/connect", label: "CONNECT" },
];

const SHOP_QUICK = [
  { href: "/shop/limited-editions", label: "LIMITED EDITIONS" },
  { href: "/shop/originals", label: "ORIGINALS" },
  { href: "/shop/sculptures", label: "SCULPTURES" },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [q, setQ] = useState("");
  const [lang, setLang] = useState("en");

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
          <Link
            href="/shop"
            className="hidden sm:inline-flex items-center gap-2 border border-white px-4 py-2 text-xs font-bold tracking-[0.22em] hover:bg-white hover:text-black transition"
          >
            SHOP NOW <span aria-hidden>›</span>
          </Link>

          <Link href="/" className="text-xl md:text-2xl font-extrabold tracking-[0.22em]">
            CHAOUALIARTS
          </Link>

          <div className="hidden md:flex items-center gap-3">
            <form onSubmit={onSearch} className="flex items-center gap-2">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Enter your search"
                className="w-56 bg-black text-white border border-white/40 px-3 py-2 text-xs outline-none focus:border-white"
              />
              <button type="submit" className="border border-white/40 px-3 py-2 text-xs hover:border-white">
                🔍
              </button>
            </form>

            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="bg-black border border-white/40 px-3 py-2 text-xs outline-none"
            >
              <option value="en">🇺🇸 English</option>
              <option value="fr">🇫🇷 Français</option>
              <option value="ar">🇹🇳 العربية</option>
            </select>
          </div>
        </div>

        {/* Row 2 */}
        <nav className="hidden md:flex items-center justify-center gap-10 pb-3">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-xs font-bold tracking-[0.22em] ${
                active(item.href) ? "text-white" : "text-white/75 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <div className="ml-6 flex items-center gap-6 border-l border-white/15 pl-6">
            {SHOP_QUICK.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-semibold tracking-[0.18em] text-white/70 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile */}
        <div className="md:hidden pb-4 space-y-3">
          <div className="flex flex-wrap gap-2">
            <Link href="/shop" className="border border-white px-3 py-2 text-xs font-bold tracking-[0.22em]">
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