import { Instagram } from "lucide-react";
import { Section, SectionHead, Reveal, Sparkle } from "@/components/Section";
import { BtnAnchor } from "@/components/Btn";
import { brand } from "@/config/brand";

export function InstagramGrid() {
  const tiles = Array.from({ length: 8 });
  return (
    <Section tone="cream">
      <SectionHead
        eyebrow="Instagram"
        title="Follow the Spark"
        copy="Behind the scenes, new pieces, launches, packaging and little JewelIgnite moments."
      />
      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {tiles.map((_, i) => (
          <Reveal key={i}>
            <div
              style={{ transitionDelay: `${Math.min(i, 6) * 50}ms` }}
              className="flex aspect-square items-center justify-center rounded-md border border-border bg-background/70 transition-colors duration-500 hover:border-[var(--blush)]/60"
            >
              <span className="flex flex-col items-center gap-2 text-center">
                <Sparkle />
                <span className="px-2 text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground">
                  Photo slot {i + 1}
                </span>
              </span>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-muted-foreground">
        Image placeholders — ready to be replaced with real JewelIgnite photos.
      </p>
      <div className="mt-9 flex justify-center">
        {brand.instagramUrl ? (
          <BtnAnchor href={brand.instagramUrl} variant="secondary">
            <Instagram className="h-3.5 w-3.5" aria-hidden="true" />
            Follow {brand.instagramHandle}
          </BtnAnchor>
        ) : (
          <p className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            <Instagram className="h-3.5 w-3.5" aria-hidden="true" />
            Follow {brand.instagramHandle} — link coming soon
          </p>
        )}
      </div>
    </Section>
  );
}
