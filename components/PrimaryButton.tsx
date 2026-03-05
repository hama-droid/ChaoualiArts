import Link from "next/link";

export default function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-black px-5 py-3 text-sm font-medium text-black hover:bg-black hover:text-white transition"
    >
      {children}
    </Link>
  );
}
