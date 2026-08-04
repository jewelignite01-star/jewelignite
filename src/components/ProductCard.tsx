import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { formatPrice, type Product } from "@/data/products";
import { generateWhatsAppOrder } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-md border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-[var(--blush)]/60 hover:shadow-lift">
      <Link
        to="/product/$productId"
        params={{ productId: product.id }}
        className="relative block aspect-square overflow-hidden bg-[var(--cream)]"
        aria-label={`View details for ${product.name}`}
      >
        <img
          src={product.image}
          alt={product.imageAlt}
          loading="lazy"
          width={1000}
          height={1000}
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
        />
        {product.badge && (
          <span
            className={cn(
              "absolute left-3 top-3 rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em]",
              product.badge === "Bestseller"
                ? "bg-primary text-primary-foreground"
                : product.badge === "Gift"
                  ? "bg-[var(--berry)] text-white"
                  : "bg-white/90 text-primary",
            )}
          >
            {product.badge}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="eyebrow text-[0.6rem]">{product.category}</p>
        <h3 className="mt-2 font-display text-xl leading-tight text-primary">
          <Link to="/product/$productId" params={{ productId: product.id }}>
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
          {product.description}
        </p>
        <p className="mt-3 text-sm font-semibold text-foreground">
          {formatPrice(product)}
        </p>

        <div className="mt-4 flex flex-col gap-2 pt-1 sm:flex-row">
          <Link
            to="/product/$productId"
            params={{ productId: product.id }}
            className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full border border-primary/30 px-4 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            View Details
          </Link>
          <a
            href={generateWhatsAppOrder(product)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Order ${product.name} on WhatsApp`}
            className="inline-flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-full bg-primary px-4 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-accent"
          >
            <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
            Order
          </a>
        </div>
      </div>
    </article>
  );
}
