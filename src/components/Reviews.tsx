import { Star } from "lucide-react";
import { Section, SectionHead, Reveal } from "@/components/Section";
import { reviews } from "@/data/site-content";

export function Reviews() {
  return (
    <Section>
      <SectionHead
        eyebrow="Reviews"
        title="Kind Words"
        copy="Your happiness is one of our favorite parts of creating JewelIgnite."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {reviews.map((r, i) => (
          <Reveal key={r.id}>
            <article
              style={{ transitionDelay: `${i * 80}ms` }}
              className="flex h-full flex-col rounded-md border border-border bg-card p-6"
            >
              <div className="flex gap-1" aria-label={`${r.rating} out of 5 stars`}>
                {Array.from({ length: r.rating }).map((_, s) => (
                  <Star
                    key={s}
                    className="h-3.5 w-3.5 fill-[var(--blush)] text-[var(--blush)]"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="mt-5 flex-1 font-display text-lg leading-snug text-primary">
                “{r.text}”
              </p>
              <p className="mt-5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {r.author}
              </p>
              {r.placeholder && (
                <p className="mt-2 text-[0.65rem] italic text-muted-foreground/80">
                  Placeholder — replace with a real customer review.
                </p>
              )}
            </article>
          </Reveal>
        ))}
      </div>
      <p className="mt-8 text-center text-xs text-muted-foreground">
        These entries are editable placeholders and are not presented as real
        customer reviews.
      </p>
    </Section>
  );
}
