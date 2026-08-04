import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Section, SectionHead } from "@/components/Section";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ProductGrid } from "@/components/ProductGrid";
import { Btn } from "@/components/Btn";
import { products, type Category } from "@/data/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop Handmade Jewelry & Gifts | JewelIgnite" },
      {
        name: "description",
        content:
          "Browse JewelIgnite handmade bracelets, charms, keychains, permanent jewelry and little gifts. Filter, search and order on WhatsApp.",
      },
      { property: "og:title", content: "Shop Handmade Jewelry & Gifts | JewelIgnite" },
      {
        property: "og:description",
        content:
          "Handmade bracelets, charms, keychains and gifts — browse the JewelIgnite collection.",
      },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  const [category, setCategory] = useState<Category>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const inCat = category === "All" || p.category === category;
      const inQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      return inCat && inQuery;
    });
  }, [category, query]);

  const reset = () => {
    setCategory("All");
    setQuery("");
  };

  return (
    <SiteLayout>
      <Section tone="cream" className="!pb-10">
        <SectionHead
          level={1}
          eyebrow="The Collection"
          title="Find your next little favorite."
          copy="Handmade bracelets, charms, keychains, permanent jewelry and gifts — all made with care."
        />

        <div className="mx-auto mt-10 max-w-md">
          <label htmlFor="shop-search" className="sr-only">
            Search products
          </label>
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              id="shop-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search your next little favorite..."
              className="w-full rounded-full border border-border bg-background py-3.5 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground/80 focus:border-[var(--berry)] focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-8">
          <CategoryFilter active={category} onChange={setCategory} />
        </div>
      </Section>

      <Section className="!pt-12">
        {filtered.length > 0 ? (
          <div key={`${category}-${query}`} className="animate-fade-up">
            <ProductGrid products={filtered} />
          </div>
        ) : (
          <div className="mx-auto max-w-md py-12 text-center">
            <h2 className="font-display text-3xl text-primary">
              No little favorites found.
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Try another search or explore all pieces.
            </p>
            <Btn className="mt-7" onClick={reset}>
              View All Pieces
            </Btn>
          </div>
        )}
      </Section>
    </SiteLayout>
  );
}
