import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Chaouali Arts",
    template: "%s · Chaouali Arts",
  },
  description: "Contemporary art, originals, and commissions.",
  metadataBase: new URL("https://chaoualiarts.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-950">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
