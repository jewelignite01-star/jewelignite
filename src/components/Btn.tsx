import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "light";
type Size = "sm" | "md";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-sans font-semibold uppercase tracking-[0.14em] transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none";

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-[0.65rem] min-h-11",
  md: "px-7 py-3 text-[0.7rem] min-h-11",
};

const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-accent shadow-soft hover:shadow-lift",
  secondary:
    "border border-primary/40 text-primary bg-transparent hover:bg-primary hover:text-primary-foreground",
  ghost: "text-primary hover:text-accent underline-offset-8 hover:underline",
  light:
    "border border-white/40 text-white bg-transparent hover:bg-white hover:text-primary",
};

type Common = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export function BtnLink({
  to,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: Common & { to: string } & Record<string, unknown>) {
  return (
    <Link
      to={to}
      className={cn(base, sizes[size], variants[variant], className)}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function BtnAnchor({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  external = true,
  ...rest
}: Common & { href: string; external?: boolean } & Record<string, unknown>) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(base, sizes[size], variants[variant], className)}
      {...rest}
    >
      {children}
    </a>
  );
}

export function Btn({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: Common & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(base, sizes[size], variants[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
}
