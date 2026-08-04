import logoAsset from "@/assets/jewelignite-logo.png.asset.json";

/**
 * Central brand configuration.
 * Update these values to change contact details across the whole site.
 */
export const brand = {
  name: "JewelIgnite",
  tagline: "From Beads to Beauty.",
  phoneDisplay: "+92 332 5428685",
  whatsappNumber: "923325428685",
  whatsappUrl: "https://wa.me/923325428685",
  email: "jewel.ignite01@gmail.com",
  emailLink: "mailto:jewel.ignite01@gmail.com",
  /** Set this once the official Instagram profile URL is confirmed. */
  instagramHandle: "@JewelIgnite",
  instagramUrl: "" as string,
  logo: logoAsset.url,
  logoAlt: "JewelIgnite — From Beads to Beauty",
  colors: {
    deepBurgundy: "#3A0519",
    burgundy: "#670D2F",
    berryRose: "#A53860",
    softPink: "#EF88AD",
    warmCream: "#FFF7F3",
    white: "#FFFFFF",
  },
} as const;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "About", to: "/about" },
  { label: "Permanent Jewelry", to: "/permanent-jewelry" },
  { label: "Reviews", to: "/reviews" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
] as const;
