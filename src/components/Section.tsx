import type { ElementType, ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  const { ref, className: revealClass } = useReveal<HTMLDivElement>();
  return (
    <As ref={ref} className={cn(revealClass, className)}>
      {children}
    </As>
  );
}

export function Section({
  children,
  className,
  tone = "white",
  id,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  tone?: "white" | "cream" | "ink";
  id?: string;
} & Record<string, unknown>) {
  const tones = {
    white: "bg-background text-foreground",
    cream: "bg-[var(--cream)] text-foreground",
    ink: "bg-[var(--ink)] text-white",
  } as const;
  return (
    <section id={id} className={cn("section-pad", tones[tone], className)} {...rest}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  copy,
  align = "center",
  light = false,
  level = 2,
}: {
  eyebrow?: string;
  title: ReactNode;
  copy?: string;
  align?: "center" | "left";
  light?: boolean;
  level?: 1 | 2;
}) {
  const H = (level === 1 ? "h1" : "h2") as ElementType;
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {eyebrow && (
        <p className={cn("eyebrow", light && "text-[var(--blush)]")}>{eyebrow}</p>
      )}
      <H
        className={cn(
          "mt-4 text-[2rem] leading-[1.08] sm:text-[2.75rem] md:text-[3.25rem]",
          light ? "text-white" : "text-primary",
        )}
      >
        {title}
      </H>
      {copy && (
        <p
          className={cn(
            "mt-5 text-sm leading-relaxed sm:text-base",
            light ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {copy}
        </p>
      )}
    </Reveal>
  );
}

export function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("h-3 w-3 text-[var(--blush)]", className)}
      fill="currentColor"
    >
      <path d="M12 0c.6 5.9 5.5 10.8 11.4 11.4v1.2C17.5 13.2 12.6 18.1 12 24h-1.2C10.2 18.1 5.3 13.2-.6 12.6v-1.2C5.3 10.8 10.2 5.9 10.8 0Z" />
    </svg>
  );
}

export function Divider({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center justify-center gap-3 py-1" aria-hidden="true">
      <span
        className={cn(
          "h-px w-16 sm:w-24",
          light
            ? "bg-gradient-to-r from-transparent to-white/30"
            : "bg-gradient-to-r from-transparent to-[var(--blush)]/60",
        )}
      />
      <Sparkle />
      <span
        className={cn(
          "h-px w-16 sm:w-24",
          light
            ? "bg-gradient-to-l from-transparent to-white/30"
            : "bg-gradient-to-l from-transparent to-[var(--blush)]/60",
        )}
      />
    </div>
  );
}
