import { ArrowRight } from "lucide-react";
import aboutImage from "@/assets/about-craft.jpg";
import { Reveal } from "@/components/Section";
import { BtnLink } from "@/components/Btn";

export function AboutSection() {
  return (
    <section className="section-pad bg-[var(--cream)]">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <p className="eyebrow">Our Story</p>
          <h2 className="mt-4 font-display text-[2rem] leading-[1.08] text-primary sm:text-[2.9rem]">
            Made by hand.
            <br />
            Made with feeling.
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              JewelIgnite began with a simple idea: beautiful things don't have to
              feel distant or unattainable.
            </p>
            <p>
              Every piece is made with care, attention to detail and the belief
              that even the smallest accessory can carry a big feeling.
            </p>
            <p>
              From bracelets and charms to keychains and permanent jewelry,
              JewelIgnite is about creating little pieces that feel personal,
              thoughtful and beautiful.
            </p>
          </div>
          <div className="mt-9">
            <BtnLink to="/shop">
              Explore the Collection
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </BtnLink>
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2">
          <div className="relative">
            <div className="overflow-hidden rounded-md border border-border bg-background shadow-soft">
              <img
                src={aboutImage}
                alt="Hands stringing beads onto a handmade bracelet at a clean workspace"
                loading="lazy"
                width={1008}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 hidden h-20 w-20 rounded-full border border-[var(--blush)]/50 sm:block"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
