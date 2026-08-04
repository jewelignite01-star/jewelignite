import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Section, SectionHead } from "@/components/Section";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | JewelIgnite" },
      {
        name: "description",
        content:
          "Answers about ordering, handmade pieces, customization, permanent jewelry, gifting and personalization at JewelIgnite.",
      },
      { property: "og:title", content: "FAQ | JewelIgnite" },
      {
        property: "og:description",
        content: "Common questions about ordering handmade pieces from JewelIgnite.",
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <SiteLayout>
      <Section className="!pb-6">
        <SectionHead
          level={1}
          eyebrow="FAQ"
          title="Questions, answered."
          copy="Anything we haven't covered? Message us on WhatsApp and we'll help."
        />
      </Section>
      <FAQ />
      <Contact />
    </SiteLayout>
  );
}
