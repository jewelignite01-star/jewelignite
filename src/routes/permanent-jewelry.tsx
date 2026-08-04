import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PermanentJewelry } from "@/components/PermanentJewelry";
import { HowToOrder } from "@/components/GiftAndOrder";
import { Section, SectionHead, Reveal } from "@/components/Section";

export const Route = createFileRoute("/permanent-jewelry")({
  head: () => ({
    meta: [
      { title: "Permanent Jewelry | JewelIgnite" },
      {
        name: "description",
        content:
          "Permanent jewelry by JewelIgnite — celebrate a friendship, a milestone or yourself with a piece designed to stay with you. Enquire on WhatsApp.",
      },
      { property: "og:title", content: "Permanent Jewelry | JewelIgnite" },
      {
        property: "og:description",
        content:
          "Delicate permanent jewelry, made meaningful. Enquire on WhatsApp for details.",
      },
    ],
  }),
  component: PermanentJewelryPage,
});

const notes = [
  {
    title: "Made for the moment",
    copy: "A piece chosen together — for a friendship, a milestone or simply for yourself.",
  },
  {
    title: "Booked over WhatsApp",
    copy: "Message us to ask about availability and how the appointment works.",
  },
  {
    title: "Details confirmed with you",
    copy: "Options, styles and pricing are shared directly so nothing is a surprise.",
  },
];

function PermanentJewelryPage() {
  return (
    <SiteLayout>
      <Section className="!pb-6">
        <SectionHead
          level={1}
          eyebrow="Permanent Jewelry"
          title="A piece that stays."
          copy="Something small and delicate, chosen for a moment worth remembering."
        />
      </Section>
      <PermanentJewelry />
      <Section tone="cream">
        <div className="grid gap-6 md:grid-cols-3">
          {notes.map((n, i) => (
            <Reveal key={n.title}>
              <div
                style={{ transitionDelay: `${i * 80}ms` }}
                className="h-full rounded-md border border-border bg-background p-6"
              >
                <h2 className="font-display text-2xl text-primary">{n.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {n.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">
          Service details, materials and pricing are confirmed on WhatsApp.
        </p>
      </Section>
      <HowToOrder />
    </SiteLayout>
  );
}
