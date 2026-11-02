import { Instagram } from "lucide-react";
import { Section, SectionHead, Reveal } from "@/components/Section";
import { BtnAnchor } from "@/components/Btn";
import { brand } from "@/config/brand";
import bts from "@/assets/instagram-bts.jpg";
import packing from "@/assets/instagram-packing.jpg";
import launch from "@/assets/instagram-launch.jpg";
import studio from "@/assets/instagram-studio.jpg";

const posts = [
  {
    src: bts,
    alt: "Behind the scenes — threading beads on a bracelet at the JewelIgnite desk",
    label: "Behind the Scenes",
    caption: "Bead by bead, this is where every piece begins.",
  },
  {
    src: packing,
    alt: "Packing a JewelIgnite order in a cream gift box with blush ribbon",
    label: "Packing Orders",
    caption: "Every order leaves wrapped like a little gift.",
  },
  {
    src: launch,
    alt: "New launch — freshly made bracelets and charms laid out with tags",
    label: "New Launch",
    caption: "Fresh pieces, hot off the beading mat.",
  },
  {
    src: studio,
    alt: "The craft corner — beads, gold charms and tools on a cream surface",
    label: "The Craft Corner",
    caption: "Small beads. Big dreams.",
  },
];

export function InstagramGrid() {
  return (
    <Section tone="cream">
      <SectionHead
        eyebrow="Instagram"
        title="Follow the Spark"
        copy="Behind the scenes, packing days, new launches and little JewelIgnite moments."
      />
      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {posts.map((post, i) => (
          <Reveal key={post.label}>
            <figure
              style={{ transitionDelay: `${Math.min(i, 6) * 60}ms` }}
              className="group relative aspect-square overflow-hidden rounded-md border border-border"
            >
              <img
                src={post.src}
                alt={post.alt}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <figcaption className="absolute inset-0 flex flex-col justify-end bg-[color-mix(in_oklab,var(--ink)_55%,transparent)] p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="eyebrow !text-[color-mix(in_oklab,var(--blush)_85%,white)]">
                  {post.label}
                </span>
                <span className="mt-1 font-display text-lg leading-snug text-white">
                  {post.caption}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
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
