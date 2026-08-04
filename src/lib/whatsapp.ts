import { brand } from "@/config/brand";
import type { Product } from "@/data/products";

const build = (text: string) =>
  `${brand.whatsappUrl}?text=${encodeURIComponent(text)}`;

export const generateWhatsAppOrder = (
  product: Pick<Product, "name">,
  options?: { quantity?: number; personalization?: string },
) => {
  const lines = [
    "Hi JewelIgnite! ✨",
    "",
    "I'd like to order:",
    product.name,
  ];
  if (options?.quantity && options.quantity > 1) {
    lines.push("", `Quantity: ${options.quantity}`);
  }
  if (options?.personalization?.trim()) {
    lines.push("", "Personalization:", options.personalization.trim());
  }
  lines.push("", "Please share availability, final price and order details.");
  return build(lines.join("\n"));
};

export const generateWhatsAppQuestion = (productName: string) =>
  build(
    [
      "Hi JewelIgnite! ✨",
      "",
      "I have a question about:",
      productName,
      "",
      "Could you help me with the details?",
    ].join("\n"),
  );

export const generateWhatsAppCustom = (message: string) =>
  build(
    [
      "Hi JewelIgnite! ✨",
      "",
      "I'd like to enquire about a custom piece.",
      "",
      "Here are my requirements:",
      message.trim() || "[my requirements]",
      "",
      "Please let me know the details.",
    ].join("\n"),
  );

export const generateWhatsAppContact = (data: {
  name: string;
  email: string;
  message: string;
}) =>
  build(
    [
      "Hi JewelIgnite! ✨",
      "",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      "",
      "Message:",
      data.message,
      "",
      "Please get back to me when convenient.",
    ].join("\n"),
  );

export const whatsappGeneral = build(
  ["Hi JewelIgnite! ✨", "", "I'd love to know more about your pieces."].join("\n"),
);
