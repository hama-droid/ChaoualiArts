import Container from "@/components/Container";
import { getCategory, getProductsByCategory } from "@/content/catalog";
import ProductCard from "@/components/ProductCard";
import { notFound } from "next/navigation";

export default function ShopCategoryPage({ params }: { params: { category: string } }) {
  const cat = getCategory(params.category);
  if (!cat) return notFound();

  const items = getProductsByCategory(cat.slug);

  return (
    <main className="py-12">
      <Container>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{cat.name}</h1>
        {cat.description && <p className="mt-3 text-neutral-600 max-w-2xl">{cat.description}</p>}

        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {items.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </Container>
    </main>
  );
}