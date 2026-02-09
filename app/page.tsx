"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold">Chaouali Arts</h1>
      <p className="mt-4 opacity-70">Contemporary Art & Prints</p>

      <div className="mt-8 flex gap-4">
        <Link href="/gallery" className="border px-6 py-3">
          Gallery
        </Link>

        <Link href="/shop" className="border px-6 py-3">
          Shop
        </Link>
      </div>
    </main>
  );
}
