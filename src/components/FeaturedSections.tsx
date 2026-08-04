import { ArrowRight } from "lucide-react";
import { Section, SectionHead } from "@/components/Section";
import { ProductGrid } from "@/components/ProductGrid";
import { BtnLink } from "@/components/Btn";
import { products } from "@/data/products";

export function NewArrivals() {
  const items = products.filter((p) => p.newArrival).slice(0, 8);
  return (
    <Section>
      <SectionHead
        eyebrow="New Arrivals"
        title="Freshly Made"
        copy="New little pieces, made to bring something special to your everyday."
      />
      <div className="mt-12">
        <ProductGrid products={items} />
      </div>
      <div className="mt-12 flex justify-center">
        <BtnLink to="/shop" variant="secondary">
          View All Pieces
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </BtnLink>
      </div>
    </Section>
  );
}

export function BestSellers() {
  const items = products.filter((p) => p.bestseller).slice(0, 6);
  return (
    <Section tone="cream">
      <SectionHead
        eyebrow="Best Sellers"
        title="Most Loved"
        copy="Pieces our customers keep coming back for."
      />
      <div className="mt-12">
        <ProductGrid products={items} columns={3} />
      </div>
    </Section>
  );
}
