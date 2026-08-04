import { HandHeart, Sparkles, Tag, Gift } from "lucide-react";
import { Section, SectionHead, Reveal } from "@/components/Section";
import { benefits } from "@/data/site-content";

const icons = [HandHeart, Sparkles, Tag, Gift];

export function WhyJewelIgnite() {
  return (
    <Section>
      <SectionHead eyebrow="Why JewelIgnite" title="Little things, made properly." />
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {benefits.map((b, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={b.title} className="text-center lg:text-left">
              <div
                style={{ transitionDelay: `${i * 80}ms` }}
                className="flex h-full flex-col items-center lg:items-start"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--blush)]/50 text-[var(--berry)]">
                  <Icon className="h-5 w-5" aria-hidden="true" strokeWidth={1.4} />
                </span>
                <h3 className="mt-5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary font-sans">
                  {b.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {b.copy}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
