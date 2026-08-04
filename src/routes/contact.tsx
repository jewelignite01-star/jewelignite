import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Contact } from "@/components/Contact";
import { Section, SectionHead } from "@/components/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact JewelIgnite | WhatsApp & Email" },
      {
        name: "description",
        content:
          "Contact JewelIgnite on WhatsApp at +92 332 5428685 or email jewel.ignite01@gmail.com for orders, custom pieces and permanent jewelry.",
      },
      { property: "og:title", content: "Contact JewelIgnite | WhatsApp & Email" },
      {
        property: "og:description",
        content: "Reach JewelIgnite for orders, custom pieces and enquiries.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <Section className="!pb-6">
        <SectionHead
          level={1}
          eyebrow="Contact"
          title="Let's talk."
          copy="Orders, custom ideas, permanent jewelry or just a question — we're here."
        />
      </Section>
      <Contact />
    </SiteLayout>
  );
}
