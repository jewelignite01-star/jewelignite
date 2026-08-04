import { useState, type FormEvent } from "react";
import { MessageCircle, Mail, Instagram, Phone } from "lucide-react";
import { Section, SectionHead, Reveal } from "@/components/Section";
import { Btn } from "@/components/Btn";
import { brand } from "@/config/brand";
import { generateWhatsAppContact } from "@/lib/whatsapp";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.open(generateWhatsAppContact(form), "_blank", "noopener,noreferrer");
  };

  const field =
    "w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-[var(--berry)] focus:outline-none";

  return (
    <Section tone="cream" id="contact">
      <SectionHead
        eyebrow="Contact"
        title={
          <>
            Have a question?
            <br />
            Let's make it beautiful.
          </>
        }
        copy="Whether you're asking about an existing piece, a custom idea, permanent jewelry or an order, we'd love to hear from you."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <Reveal>
          <ul className="space-y-4">
            <li>
              <a
                href={brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-md border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--blush)]/60 hover:shadow-soft"
              >
                <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-[var(--berry)]" aria-hidden="true" strokeWidth={1.5} />
                <span className="min-w-0">
                  <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    WhatsApp
                  </span>
                  <span className="mt-1 block text-sm text-primary">
                    {brand.phoneDisplay}
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={brand.emailLink}
                className="flex items-start gap-4 rounded-md border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--blush)]/60 hover:shadow-soft"
              >
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[var(--berry)]" aria-hidden="true" strokeWidth={1.5} />
                <span className="min-w-0">
                  <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Email
                  </span>
                  <span className="mt-1 block break-all text-sm text-primary">
                    {brand.email}
                  </span>
                </span>
              </a>
            </li>
            <li>
              <div className="flex items-start gap-4 rounded-md border border-border bg-background p-5">
                <Instagram className="mt-0.5 h-5 w-5 shrink-0 text-[var(--berry)]" aria-hidden="true" strokeWidth={1.5} />
                <span className="min-w-0">
                  <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Instagram
                  </span>
                  {brand.instagramUrl ? (
                    <a
                      href={brand.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-sm text-primary underline-offset-4 hover:underline"
                    >
                      {brand.instagramHandle}
                    </a>
                  ) : (
                    <span className="mt-1 block text-sm text-primary">
                      {brand.instagramHandle}
                    </span>
                  )}
                </span>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-4 rounded-md border border-border bg-background p-5">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[var(--berry)]" aria-hidden="true" strokeWidth={1.5} />
                <span className="min-w-0">
                  <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Phone
                  </span>
                  <span className="mt-1 block text-sm text-primary">
                    {brand.phoneDisplay}
                  </span>
                </span>
              </div>
            </li>
          </ul>
        </Reveal>

        <Reveal>
          <form
            onSubmit={onSubmit}
            className="rounded-md border border-border bg-background p-6 sm:p-8"
          >
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={field}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={field}
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={field}
                  placeholder="Tell us what you're looking for…"
                />
              </div>
            </div>

            <Btn type="submit" className="mt-6 w-full sm:w-auto">
              <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
              Send Message
            </Btn>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              This form opens WhatsApp with your message ready to send — nothing
              is emailed automatically.
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
