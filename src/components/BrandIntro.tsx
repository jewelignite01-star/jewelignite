import { ArrowRight } from "lucide-react";
import { Section, SectionHead, Divider } from "@/components/Section";
import { BtnLink } from "@/components/Btn";

export function BrandIntro() {
  return (
    <Section tone="cream">
      <SectionHead
        eyebrow="The JewelIgnite Feel"
        title={
          <>
            Made to be worn.
            <br />
            Made to be loved.
          </>
        }
        copy="JewelIgnite creates handmade accessories and little gifts that feel personal, beautiful and easy to love — cute enough to wear every day, affordable enough to enjoy, and thoughtful enough to give away."
      />
      <div className="mt-9 flex justify-center">
        <BtnLink to="/about" variant="secondary">
          Discover JewelIgnite
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </BtnLink>
      </div>
      <div className="mt-14">
        <Divider />
      </div>
    </Section>
  );
}
