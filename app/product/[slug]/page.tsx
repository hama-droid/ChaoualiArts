import Container from "@/components/Container";
import { getProduct, getCategory } from "@/content/catalog";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) return notFound();

  const category = getCategory(product.category);
  const cover = product.images?.[0] || "/placeholders/product.jpg";

  // send to inquiry checkout
  const orderLink = `/checkout/inquiry?slug=${encodeURIComponent(product.slug)}`;

  return (
    <main className="py-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100">
              <Image src={cover} alt={product.title} fill className="object-cover" priority />
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              {product.images.slice(0, 3).map((src) => (
                <div key={src} className="relative aspect-square overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
                  <Image src={src} alt="" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          <aside className="md:col-span-5">
            <p className="text-sm text-neutral-600">{category?.name}</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight">{product.title}</h1>
            {product.short && <p className="mt-3 text-neutral-700 leading-relaxed">{product.short}</p>}

            <div className="mt-5 rounded-3xl border border-neutral-200 p-5">
              <p className="text-sm text-neutral-600">Price</p>
              <div className="mt-2 text-sm text-neutral-800 space-y-1">
                <div>USD: <b>${product.price.USD}</b></div>
                <div>EUR: <b>€{product.price.EUR}</b></div>
                <div>GBP: <b>£{product.price.GBP}</b></div>
              </div>
              <p className="mt-3 text-xs text-neutral-500">
                Shipping is flat-rate by category, confirmed during checkout inquiry.
              </p>

              <a
                href={orderLink}
                className="mt-5 block rounded-full bg-black px-5 py-3 text-center text-sm font-medium text-white hover:opacity-90 transition"
              >
                Order (Inquiry Checkout)
              </a>

              <div className="mt-4 text-xs text-neutral-500">
                Authenticity: certificate of authenticity available on request.
              </div>
            </div>

            {product.details && (
              <div className="mt-6 rounded-3xl border border-neutral-200 p-5">
                <p className="text-sm text-neutral-600">Details</p>
                <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                  {product.details.size && <li>• Size: {product.details.size}</li>}
                  {product.details.material && <li>• Material: {product.details.material}</li>}
                  {product.details.year && <li>• Year: {product.details.year}</li>}
                  {product.details.edition && <li>• Edition: {product.details.edition}</li>}
                  {product.details.notes && <li>• Notes: {product.details.notes}</li>}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </main>
  );
}