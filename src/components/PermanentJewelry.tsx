import { MessageCircle, ArrowRight } from "lucide-react";
import permanentImage from "@/assets/permanent-jewelry.jpg";
import { Reveal } from "@/components/Section";
import { BtnLink, BtnAnchor } from "@/components/Btn";
import { generateWhatsAppCustom } from "@/lib/whatsapp";

const enquiry = generateWhatsAppCustom(
  "I'd like to know more about permanent jewelry.",
);

export function PermanentJewelry() {
  return (
    <section className="section-pad bg-[var(--ink)] text-white">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow text-[var(--blush)]">Permanent Jewelry</p>
          <h2 className="mt-4 font-display text-[2rem] leading-[1.08] sm:text-[2.9rem]">
            Permanent Jewelry,
            <br />
            made meaningful.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
            Celebrate a friendship, a milestone, a special connection — or simply
            yourself — with a piece designed to stay with you.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <BtnAnchor href={enquiry} variant="primary" className="bg-white text-primary hover:bg-[var(--blush)] hover:text-[var(--ink)]">
              <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
              Enquire on WhatsApp
            </BtnAnchor>
            <BtnLink to="/permanent-jewelry" variant="light">
              Learn More
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </BtnLink>
          </div>
        </Reveal>

        <Reveal>
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full border border-white/15"
            />
            <div
              aria-hidden="true"
              className="absolute inset-6 rounded-full border border-[var(--blush)]/25"
            />
            <div className="absolute inset-12 overflow-hidden rounded-full">
              <img
                src={permanentImage}
                alt="Two wrists wearing thin delicate permanent chain bracelets"
                loading="lazy"
                width={1200}
                height={912}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
