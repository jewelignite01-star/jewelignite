import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, SectionHead, Reveal } from "@/components/Section";
import { faqs } from "@/data/site-content";

export function FAQ() {
  return (
    <Section id="faq">
      <SectionHead
        eyebrow="FAQ"
        title="Good to know"
        copy="Anything else? Message us on WhatsApp and we'll happily help."
      />
      <Reveal className="mx-auto mt-12 max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="py-5 text-left font-display text-lg text-primary hover:no-underline sm:text-xl">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </Section>
  );
}
