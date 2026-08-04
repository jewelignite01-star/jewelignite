import { Link } from "@tanstack/react-router";
import { Mail, Phone, Instagram } from "lucide-react";
import { Logo } from "@/components/Logo";
import { brand } from "@/config/brand";
import { whatsappGeneral } from "@/lib/whatsapp";

const shopLinks = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "About", to: "/about" },
  { label: "Permanent Jewelry", to: "/permanent-jewelry" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-white/70">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="rounded-lg bg-white/95 p-4 inline-block">
              <Logo className="h-14" linkTo={null} />
            </div>
            <p className="mt-6 max-w-xs font-display text-xl text-white/85">
              {brand.tagline}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/55">
              Handmade jewelry, accessories and little gifts, made with care.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="eyebrow text-[var(--blush)]">Explore</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {shopLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow text-[var(--blush)]">Customer</h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link to="/how-to-order" className="transition-colors hover:text-white">
                  How to Order
                </Link>
              </li>
              <li>
                <a
                  href={whatsappGeneral}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                {brand.instagramUrl ? (
                  <a
                    href={brand.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition-colors hover:text-white"
                  >
                    <Instagram className="h-4 w-4" aria-hidden="true" /> Instagram
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2">
                    <Instagram className="h-4 w-4" aria-hidden="true" />
                    Instagram {brand.instagramHandle}
                  </span>
                )}
              </li>
            </ul>

            <h2 className="eyebrow mt-8 text-[var(--blush)]">Contact</h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={brand.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {brand.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={brand.emailLink}
                  className="inline-flex items-center gap-2 break-all transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {brand.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-14 border-t border-white/10 pt-6 text-xs text-white/45">
          © 2026 {brand.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
