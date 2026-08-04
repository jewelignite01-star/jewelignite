import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Section";
import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";

export function ProductGrid({
  products,
  columns = 4,
}: {
  products: Product[];
  columns?: 3 | 4;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-4 sm:gap-6",
        columns === 4 ? "md:grid-cols-3 lg:grid-cols-4" : "md:grid-cols-3",
      )}
    >
      {products.map((p, i) => (
        <Reveal
          key={p.id}
          className="h-full"
          // stagger handled purely by scroll position; keep it subtle
        >
          <div style={{ transitionDelay: `${Math.min(i, 5) * 60}ms` }} className="h-full">
            <ProductCard product={p} />
          </div>
        </Reveal>
      ))}
    </div>
  );
}
