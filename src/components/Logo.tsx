import { Link } from "@tanstack/react-router";
import { brand } from "@/config/brand";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  linkTo = "/",
  invert = false,
}: {
  className?: string;
  linkTo?: string | null;
  invert?: boolean;
}) {
  const img = (
    <img
      src={brand.logo}
      alt={brand.logoAlt}
      className={cn(
        "h-full w-auto object-contain",
        invert && "brightness-0 invert opacity-90",
      )}
    />
  );

  if (!linkTo) return <span className={cn("block", className)}>{img}</span>;

  return (
    <Link
      to={linkTo}
      aria-label={`${brand.name} — home`}
      className={cn("block shrink-0", className)}
    >
      {img}
    </Link>
  );
}
