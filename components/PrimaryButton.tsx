import Link from "next/link";

export default function PrimaryButton({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
}) {
  const cls =
    variant === "solid"
      ? "bg-black text-white hover:opacity-90"
      : "border border-black text-black hover:bg-black hover:text-white";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition ${cls}`}
    >
      {children}
    </Link>
  );
}