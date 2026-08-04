import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronLeft, MessageCircle, HelpCircle, Minus, Plus } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Section } from "@/components/Section";
import { ProductGrid } from "@/components/ProductGrid";
import { BtnAnchor } from "@/components/Btn";
import {
  formatPrice,
  getProduct,
  products,
  type Product,
} from "@/data/products";
import { generateWhatsAppOrder, generateWhatsAppQuestion } from "@/lib/whatsapp";

export const Route = createFileRoute("/product/$productId")({
  loader: ({ params }) => {
    const product = getProduct(params.productId);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    const title = p ? `${p.name} | JewelIgnite` : "Product | JewelIgnite";
    const description = p
      ? `${p.description} ${formatPrice(p)}. Order on WhatsApp.`
      : "Handmade JewelIgnite pieces made with care.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData() as { product: Product };
  const [qty, setQty] = useState(1);
  const [personalization, setPersonalization] = useState("");

  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  return (
    <SiteLayout>
      <Section className="!pb-10 !pt-10">
        <Link
          to="/shop"
          className="inline-flex items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-primary"
        >
          <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
          Back to shop
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-md border border-border bg-[var(--cream)]">
            <img
              src={product.image}
              alt={product.imageAlt}
              width={1000}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="eyebrow">{product.category}</p>
            <h1 className="mt-3 font-display text-[2.2rem] leading-tight text-primary sm:text-[3rem]">
              {product.name}
            </h1>
            <p className="mt-4 text-lg font-semibold text-foreground">
              {formatPrice(product)}
            </p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              {product.description}
            </p>

            <dl className="mt-7 space-y-2 border-t border-border pt-6 text-sm">
              <div className="flex gap-2">
                <dt className="text-muted-foreground">Availability:</dt>
                <dd className="text-primary">Confirmed on WhatsApp</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-muted-foreground">Made:</dt>
                <dd className="text-primary">By hand, to order</dd>
              </div>
            </dl>

            {product.price !== null && (
              <div className="mt-7">
                <span className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Quantity
                </span>
                <div className="inline-flex items-center rounded-full border border-border">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="flex h-11 w-11 items-center justify-center rounded-full text-primary transition-colors hover:bg-[var(--cream)]"
                  >
                    <Minus className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <span aria-live="polite" className="w-10 text-center text-sm">
                    {qty}
                  </span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => setQty((q) => q + 1)}
                    className="flex h-11 w-11 items-center justify-center rounded-full text-primary transition-colors hover:bg-[var(--cream)]"
                  >
                    <Plus className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            )}

            {product.customizable && (
              <div className="mt-7">
                <label
                  htmlFor="personalization"
                  className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground"
                >
                  Personalization (optional)
                </label>
                <textarea
                  id="personalization"
                  rows={3}
                  value={personalization}
                  onChange={(e) => setPersonalization(e.target.value)}
                  placeholder="A name, initials, colours or an occasion…"
                  className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground/70 focus:border-[var(--berry)] focus:outline-none"
                />
              </div>
            )}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <BtnAnchor
                href={generateWhatsAppOrder(product, {
                  quantity: qty,
                  personalization,
                })}
              >
                <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                Order on WhatsApp
              </BtnAnchor>
              <BtnAnchor
                href={generateWhatsAppQuestion(product.name)}
                variant="secondary"
              >
                <HelpCircle className="h-3.5 w-3.5" aria-hidden="true" />
                Ask a Question
              </BtnAnchor>
            </div>
          </div>
        </div>
      </Section>

      {related.length > 0 && (
        <Section tone="cream">
          <h2 className="text-center font-display text-3xl text-primary sm:text-4xl">
            You may also love
          </h2>
          <div className="mt-10">
            <ProductGrid products={related} />
          </div>
        </Section>
      )}
    </SiteLayout>
  );
}
