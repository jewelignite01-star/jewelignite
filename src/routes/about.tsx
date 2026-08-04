import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { AboutSection } from "@/components/AboutSection";
import { WhyJewelIgnite } from "@/components/WhyJewelIgnite";
import { Section, SectionHead } from "@/components/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About JewelIgnite | Handmade with Care" },
      {
        name: "description",
        content:
          "JewelIgnite is a handmade jewelry, accessories and gifting brand creating little pieces that feel personal, thoughtful and beautiful.",
      },
      { property: "og:title", content: "About JewelIgnite | Handmade with Care" },
      {
        property: "og:description",
        content:
          "The story behind JewelIgnite — handmade pieces made with care, from beads to beauty.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <Section className="!pb-6">
        <SectionHead
          level={1}
          eyebrow="About"
          title="From Beads to Beauty."
          copy="A small handmade brand built on the idea that little things can carry big feelings."
        />
      </Section>
      <AboutSection />
      <WhyJewelIgnite />
    </SiteLayout>
  );
}
