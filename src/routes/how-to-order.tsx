import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { HowToOrder } from "@/components/GiftAndOrder";
import { FAQ } from "@/components/FAQ";
import { Section, SectionHead } from "@/components/Section";

export const Route = createFileRoute("/how-to-order")({
  head: () => ({
    meta: [
      { title: "How to Order | JewelIgnite" },
      {
        name: "description",
        content:
          "Ordering from JewelIgnite takes four small steps: explore, choose, message us on WhatsApp and confirm your details.",
      },
      { property: "og:title", content: "How to Order | JewelIgnite" },
      {
        property: "og:description",
        content: "Browse, choose and order your JewelIgnite piece on WhatsApp.",
      },
    ],
  }),
  component: HowToOrderPage,
});

function HowToOrderPage() {
  return (
    <SiteLayout>
      <Section className="!pb-6">
        <SectionHead
          level={1}
          eyebrow="How to Order"
          title="Simple, personal ordering."
          copy="Every JewelIgnite order happens over WhatsApp so we can confirm the little details with you."
        />
      </Section>
      <HowToOrder />
      <FAQ />
    </SiteLayout>
  );
}
