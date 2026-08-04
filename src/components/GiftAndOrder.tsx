import { Section, SectionHead, Reveal } from "@/components/Section";
import { giftCategories, orderSteps } from "@/data/site-content";
import { BtnLink } from "@/components/Btn";

export function GiftSection() {
  return (
    <Section>
      <SectionHead
        eyebrow="Gifting"
        title={
          <>
            Little gifts.
            <br />
            Big feelings.
          </>
        }
        copy="Looking for something small, thoughtful and beautiful? JewelIgnite pieces make lovely gifts for birthdays, friendships, milestones and everyday surprises."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {giftCategories.map((g, i) => (
          <Reveal key={g.title}>
            <div
              style={{ transitionDelay: `${i * 70}ms` }}
              className="flex h-full flex-col justify-between rounded-md border border-border bg-[var(--cream)] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--blush)]/60 hover:shadow-soft"
            >
              <h3 className="font-display text-2xl text-primary">{g.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {g.copy}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <BtnLink to="/shop" variant="secondary">
          Browse Gift Pieces
        </BtnLink>
      </div>
    </Section>
  );
}

export function HowToOrder() {
  return (
    <Section tone="cream" id="how-to-order">
      <SectionHead
        eyebrow="How to Order"
        title="Four small steps."
        copy="Ordering with JewelIgnite is simple, personal and happens on WhatsApp."
      />
      <ol className="mt-14 grid gap-8 md:grid-cols-4 md:gap-6">
        {orderSteps.map((s, i) => (
          <Reveal key={s.no} as="li">
            <div
              style={{ transitionDelay: `${i * 80}ms` }}
              className="relative border-t border-[var(--blush)]/50 pt-6"
            >
              <span className="font-display text-3xl text-[var(--berry)]">{s.no}</span>
              <h3 className="mt-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary font-sans">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.copy}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
