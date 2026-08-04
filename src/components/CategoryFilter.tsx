import { categories, type Category } from "@/data/products";
import { cn } from "@/lib/utils";

export function CategoryFilter({
  active,
  onChange,
}: {
  active: Category;
  onChange: (c: Category) => void;
}) {
  return (
    <div
      role="group"
      aria-label="Filter products by category"
      className="flex flex-wrap justify-center gap-2"
    >
      {categories.map((c) => (
        <button
          key={c}
          type="button"
          aria-pressed={active === c}
          onClick={() => onChange(c)}
          className={cn(
            "min-h-10 rounded-full border px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em] transition-all duration-300",
            active === c
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border text-foreground/70 hover:border-[var(--blush)] hover:text-primary",
          )}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
