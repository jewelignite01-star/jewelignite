import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Hero } from "@/components/Hero";
import { BrandIntro } from "@/components/BrandIntro";
import { NewArrivals, BestSellers } from "@/components/FeaturedSections";
import { WhyJewelIgnite } from "@/components/WhyJewelIgnite";
import { AboutSection } from "@/components/AboutSection";
import { PermanentJewelry } from "@/components/PermanentJewelry";
import { GiftSection, HowToOrder } from "@/components/GiftAndOrder";
import { Reviews } from "@/components/Reviews";
import { InstagramGrid } from "@/components/InstagramGrid";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JewelIgnite | From Beads to Beauty." },
      {
        name: "description",
        content:
          "JewelIgnite creates handmade jewelry, accessories and little gifts made with care. Discover cute, affordable and giftable pieces — From Beads to Beauty.",
      },
      { property: "og:title", content: "JewelIgnite | From Beads to Beauty." },
      {
        property: "og:description",
        content:
          "Handmade bracelets, charms, keychains, permanent jewelry and gifts. Order easily on WhatsApp.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <BrandIntro />
      <NewArrivals />
      <BestSellers />
      <WhyJewelIgnite />
      <AboutSection />
      <PermanentJewelry />
      <GiftSection />
      <HowToOrder />
      <Reviews />
      <InstagramGrid />
      <FAQ />
      <Contact />
    </SiteLayout>
  );
}
