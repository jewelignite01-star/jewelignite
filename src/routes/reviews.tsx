import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reviews } from "@/components/Reviews";
import { InstagramGrid } from "@/components/InstagramGrid";
import { Section, SectionHead } from "@/components/Section";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews | JewelIgnite" },
      {
        name: "description",
        content:
          "Kind words about JewelIgnite handmade jewelry, accessories and gifts. Share your own after your order.",
      },
      { property: "og:title", content: "Reviews | JewelIgnite" },
      {
        property: "og:description",
        content: "Customer words about JewelIgnite handmade pieces.",
      },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <SiteLayout>
      <Section className="!pb-6">
        <SectionHead
          level={1}
          eyebrow="Reviews"
          title="Kind Words"
          copy="Your happiness is one of our favorite parts of creating JewelIgnite."
        />
      </Section>
      <Reviews />
      <InstagramGrid />
    </SiteLayout>
  );
}
