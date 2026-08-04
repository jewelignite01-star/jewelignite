import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { BtnLink } from "@/components/Btn";
import { navLinks } from "@/config/brand";
import { whatsappGeneral } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md transition-all duration-500",
        scrolled ? "border-border/70 shadow-soft" : "border-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-6xl items-center gap-4 px-5 transition-all duration-500 sm:px-8",
          scrolled ? "h-16" : "h-20 sm:h-24",
        )}
      >
        <Logo className={cn("transition-all duration-500", scrolled ? "h-9" : "h-11 sm:h-14")} />

        <nav aria-label="Main" className="ml-auto hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "relative py-1 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-foreground/70 transition-colors hover:text-primary",
                pathname === l.to && "text-primary",
              )}
            >
              {l.label}
              <span
                className={cn(
                  "absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-[var(--berry)] transition-transform duration-300",
                  pathname === l.to && "scale-x-100",
                )}
                aria-hidden="true"
              />
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-6">
          <a
            href={whatsappGeneral}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with JewelIgnite on WhatsApp"
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-border text-primary transition-colors hover:border-primary hover:bg-[var(--cream)] sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
          </a>
          <BtnLink to="/shop" size="sm" className="hidden sm:inline-flex">
            Shop Now
          </BtnLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary transition-colors hover:bg-[var(--cream)] lg:hidden"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {open && (
      <div
        id="mobile-nav"
        className="fixed inset-0 top-0 z-50 flex flex-col bg-background lg:hidden"
      >
        <div className="flex h-20 items-center justify-between px-5">
          <Logo className="h-11" />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Mobile" className="flex flex-1 flex-col gap-1 overflow-y-auto px-5 pt-6">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="border-b border-border/60 py-4 font-display text-2xl text-primary"
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-8 flex flex-col gap-3 pb-10">
            <BtnLink to="/shop">Shop Now</BtnLink>
            <a
              href={whatsappGeneral}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-primary/40 px-7 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-primary"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Order on WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
