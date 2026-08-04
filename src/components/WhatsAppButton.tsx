import { MessageCircle } from "lucide-react";
import { whatsappGeneral } from "@/lib/whatsapp";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappGeneral}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with JewelIgnite on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-0 rounded-full bg-primary py-3 pl-3 pr-3 text-primary-foreground shadow-lift transition-all duration-300 hover:bg-accent sm:bottom-7 sm:right-7"
    >
      <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-[0.7rem] font-semibold uppercase tracking-[0.14em] opacity-0 transition-all duration-500 group-hover:max-w-[14rem] group-hover:pl-2 group-hover:opacity-100 group-focus-visible:max-w-[14rem] group-focus-visible:pl-2 group-focus-visible:opacity-100">
        Chat with JewelIgnite
      </span>
    </a>
  );
}
