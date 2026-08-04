import bracelet from "@/assets/product-bracelet.jpg";
import charm from "@/assets/product-charm.jpg";
import keychain from "@/assets/product-keychain.jpg";
import gift from "@/assets/product-gift.jpg";
import permanent from "@/assets/permanent-jewelry.jpg";

export const categories = [
  "All",
  "Handmade Jewelry",
  "Bracelets",
  "Charms",
  "Keychains",
  "Permanent Jewelry",
  "Gifts",
] as const;

export type Category = (typeof categories)[number];

export type Product = {
  id: string;
  name: string;
  category: Exclude<Category, "All">;
  /** Price in PKR. Use null for enquiry-only pieces. */
  price: number | null;
  priceNote?: string;
  description: string;
  image: string;
  imageAlt: string;
  badge?: "New" | "Bestseller" | "Gift";
  featured?: boolean;
  newArrival?: boolean;
  bestseller?: boolean;
  customizable?: boolean;
};

/**
 * Example catalogue — prices are starting prices.
 * Add, edit or remove entries here to update the shop.
 */
export const products: Product[] = [
  {
    id: "beaded-bracelet",
    name: "Beaded Bracelet",
    category: "Bracelets",
    price: 90,
    priceNote: "Starting from",
    description:
      "A handmade beaded bracelet, strung one bead at a time in soft everyday colours.",
    image: bracelet,
    imageAlt: "Handmade beaded bracelet in pink and burgundy beads",
    badge: "Bestseller",
    featured: true,
    bestseller: true,
    customizable: true,
  },
  {
    id: "charm-bracelet",
    name: "Charm Bracelet",
    category: "Bracelets",
    price: 150,
    priceNote: "Starting from",
    description:
      "A delicate bracelet finished with a little charm you can choose yourself.",
    image: bracelet,
    imageAlt: "Handmade charm bracelet on a warm cream background",
    badge: "New",
    featured: true,
    newArrival: true,
    customizable: true,
  },
  {
    id: "personalized-keychain",
    name: "Personalized Keychain",
    category: "Keychains",
    price: 180,
    priceNote: "Starting from",
    description:
      "A beaded keychain made personal — share your name, initials or colours.",
    image: keychain,
    imageAlt: "Handmade beaded keychain with pastel beads",
    badge: "New",
    newArrival: true,
    customizable: true,
  },
  {
    id: "mini-charm",
    name: "Mini Charm",
    category: "Charms",
    price: 120,
    priceNote: "Starting from",
    description:
      "A small charm made to add a little detail to a bracelet, chain or keyring.",
    image: charm,
    imageAlt: "Small delicate gold charms arranged on cream background",
    newArrival: true,
  },
  {
    id: "classic-bracelet",
    name: "Classic Bracelet",
    category: "Handmade Jewelry",
    price: 90,
    priceNote: "Starting from",
    description:
      "A simple handmade bracelet designed to be worn every single day.",
    image: bracelet,
    imageAlt: "Simple handmade beaded bracelet on cream background",
    bestseller: true,
  },
  {
    id: "signature-charm",
    name: "Signature Charm",
    category: "Charms",
    price: 150,
    priceNote: "Starting from",
    description:
      "A slightly more detailed charm for pieces that deserve a little extra.",
    image: charm,
    imageAlt: "Detailed handmade charm photographed on cream background",
    bestseller: true,
    featured: true,
  },
  {
    id: "gift-keychain",
    name: "Gift Keychain",
    category: "Gifts",
    price: 180,
    priceNote: "Starting from",
    description:
      "A little keychain wrapped and ready to give — small, thoughtful and sweet.",
    image: gift,
    imageAlt: "Small gift box with blush ribbon beside a handmade piece",
    badge: "Gift",
    newArrival: true,
  },
  {
    id: "permanent-bracelet",
    name: "Permanent Bracelet",
    category: "Permanent Jewelry",
    price: null,
    priceNote: "Enquire",
    description:
      "A delicate permanent piece for a friendship, a milestone or simply yourself. Details are shared on WhatsApp.",
    image: permanent,
    imageAlt: "Two wrists wearing thin delicate chain bracelets",
    featured: true,
  },
  {
    id: "custom-piece",
    name: "Custom Piece",
    category: "Handmade Jewelry",
    price: null,
    priceNote: "Enquire",
    description:
      "Something made just for you — share your idea, colours and occasion.",
    image: gift,
    imageAlt: "Handmade custom jewelry piece styled on cream background",
    customizable: true,
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);

export const formatPrice = (product: Product) =>
  product.price === null
    ? "Price on enquiry"
    : `${product.priceNote ? product.priceNote + " " : ""}Rs. ${product.price}`;
