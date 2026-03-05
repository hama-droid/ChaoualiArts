"use client";

import Container from "@/components/Container";
import { PRODUCTS, getCategory, type Currency } from "@/content/catalog";
import { useMemo, useState } from "react";

const ORDER_EMAIL = "mtalebled@gmail.com";

function getParam(name: string) {
  if (typeof window === "undefined") return "";
  const url = new URL(window.location.href);
  return url.searchParams.get(name) || "";
}

export default function InquiryCheckout() {
  const slugFromUrl = typeof window !== "undefined" ? getParam("slug") : "";
  const initialProduct = PRODUCTS.find((p) => p.slug === slugFromUrl) || PRODUCTS[0];

  const [productSlug, setProductSlug] = useState(initialProduct?.slug || "");
  const [currency, setCurrency] = useState<Currency>("USD");
  const [qty, setQty] = useState(1);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const product = useMemo(() => PRODUCTS.find((p) => p.slug === productSlug)!, [productSlug]);
  const category = useMemo(() => getCategory(product.category), [product]);

  const maxQty = product.maxQty ?? 1;
  const safeQty = Math.min(Math.max(qty, 1), maxQty);

  const itemPrice = product.price[currency];
  const shipping = category?.shippingFlat[currency] ?? 0;
  const estimatedTotal = itemPrice * safeQty + shipping;

  const subject = encodeURIComponent(`Order Inquiry — ${product.title}`);
  const body = encodeURIComponent(
`ORDER INQUIRY

Product: ${product.title}
Slug: ${product.slug}
Category: ${category?.name || product.category}
Quantity: ${safeQty}
Currency: ${currency}

Item price: ${itemPrice} ${currency}
Flat shipping: ${shipping} ${currency}
Estimated total: ${estimatedTotal} ${currency}

Customer:
Name: ${name}
Email: ${email}
Phone: ${phone}

Shipping Address:
Country: ${country}
City: ${city}
ZIP: ${zip}
Address: ${address}

Notes:
${notes}

NEXT STEP:
Please reply with final total + payment options (card / Apple Pay / Google Pay / PayPal) and estimated delivery time.
`
  );

  const mailto = `mailto:${ORDER_EMAIL}?subject=${subject}&body=${body}`;

  return (
    <main className="py-12">
      <Container>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Checkout (Inquiry)</h1>
        <p className="mt-3 text-neutral-600 max-w-2xl">
          You’ll submit your order details. We’ll confirm final total and send a payment link (easy payment methods).
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="rounded-3xl border border-neutral-200 p-6 space-y-4">
              <div>
                <label className="text-sm text-neutral-700">Product</label>
                <select
                  className="mt-2 w-full rounded-2xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black"
                  value={productSlug}
                  onChange={(e) => { setProductSlug(e.target.value); setQty(1); }}
                >
                  {PRODUCTS.map((p) => (
                    <option key={p.slug} value={p.slug}>{p.title}</option>
                  ))}
                </select>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm text-neutral-700">Currency</label>
                  <select
                    className="mt-2 w-full rounded-2xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value as Currency)}
                  >
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="GBP">GBP (£)</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-neutral-700">Quantity</label>
                  <input
                    type="number"
                    min={1}
                    max={maxQty}
                    value={safeQty}
                    onChange={(e) => setQty(Number(e.target.value))}
                    className="mt-2 w-full rounded-2xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black"
                  />
                  <p className="mt-1 text-xs text-neutral-500">Max for this item: {maxQty}</p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm text-neutral-700">Name</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} className="mt-2 w-full rounded-2xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black" />
                </div>
                <div>
                  <label className="text-sm text-neutral-700">Email</label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="mt-2 w-full rounded-2xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black" />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm text-neutral-700">Phone (optional)</label>
                  <input value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-2 w-full rounded-2xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black" />
                </div>
                <div>
                  <label className="text-sm text-neutral-700">Country</label>
                  <input value={country} onChange={(e) => setCountry(e.target.value)} className="mt-2 w-full rounded-2xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black" />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm text-neutral-700">City</label>
                  <input value={city} onChange={(e) => setCity(e.target.value)} className="mt-2 w-full rounded-2xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black" />
                </div>
                <div>
                  <label className="text-sm text-neutral-700">ZIP / Postal</label>
                  <input value={zip} onChange={(e) => setZip(e.target.value)} className="mt-2 w-full rounded-2xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black" />
                </div>
              </div>

              <div>
                <label className="text-sm text-neutral-700">Address</label>
                <input value={address} onChange={(e) => setAddress(e.target.value)} className="mt-2 w-full rounded-2xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black" />
              </div>

              <div>
                <label className="text-sm text-neutral-700">Notes (optional)</label>
                <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={4} className="mt-2 w-full rounded-2xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black" />
              </div>

              <a
                href={mailto}
                className="block w-full rounded-full bg-black px-5 py-3 text-center text-sm font-medium text-white hover:opacity-90 transition"
              >
                Submit Order Inquiry
              </a>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-3xl border border-neutral-200 p-6">
              <h2 className="font-semibold">Order summary</h2>
              <div className="mt-4 text-sm text-neutral-700 space-y-2">
                <div className="flex justify-between"><span>Item</span><span>{itemPrice} {currency}</span></div>
                <div className="flex justify-between"><span>Qty</span><span>{safeQty}</span></div>
                <div className="flex justify-between"><span>Flat shipping</span><span>{shipping} {currency}</span></div>
                <div className="border-t pt-3 mt-3 flex justify-between font-semibold">
                  <span>Estimated total</span><span>{estimatedTotal} {currency}</span>
                </div>
              </div>
              <p className="mt-4 text-xs text-neutral-500">
                Final total is confirmed by email. You’ll receive payment options (card/wallets/PayPal) to complete the purchase.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}