import { MessageCircle, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-jewelry.jpg";
import { Logo } from "@/components/Logo";
import { BtnLink, BtnAnchor } from "@/components/Btn";
import { Sparkle } from "@/components/Section";
import { whatsappGeneral } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-[var(--blush)]/12 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-[24rem] w-[24rem] rounded-full bg-[var(--cream)] blur-2xl"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-28">
        <div className="animate-fade-up">
          <div className="flex items-center gap-2">
            <Sparkle className="h-2.5 w-2.5" />
            <p className="eyebrow">Handmade • Cute • Affordable</p>
          </div>

          <h1 className="mt-6 font-display text-[2.9rem] leading-[1.02] text-primary sm:text-[4rem] lg:text-[4.6rem]">
            Little things,
            <br />
            <em className="not-italic text-[var(--berry)]">big feelings.</em>
          </h1>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            Handmade jewelry, accessories and little gifts made with care —
            created to add a little beauty to your everyday.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <BtnLink to="/shop">
              Shop the Collection
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </BtnLink>
            <BtnAnchor href={whatsappGeneral} variant="secondary">
              <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
              Order on WhatsApp
            </BtnAnchor>
          </div>

          <div className="mt-12 flex items-center gap-5 border-t border-border pt-7">
            <Logo className="h-12 opacity-90 sm:h-14" linkTo={null} />
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-t-[10rem] rounded-b-md border border-border bg-[var(--cream)] shadow-soft">
            <img
              src={heroImage}
              alt="Handmade beaded bracelets and charms arranged on warm cream linen"
              width={1200}
              height={1504}
              className="h-full w-full object-cover"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -left-4 hidden h-24 w-24 rounded-full border border-[var(--blush)]/50 sm:block"
          />
        </div>
      </div>
    </section>
  );
}
