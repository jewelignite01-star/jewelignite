/**
 * Editable site content. Replace the placeholder reviews below with real
 * customer words once you have them — they are marked as samples until then.
 */

export type Review = {
  id: string;
  rating: number;
  text: string;
  author: string;
  /** Placeholder content that is not a real customer review. */
  placeholder: boolean;
};

export const reviews: Review[] = [
  {
    id: "r1",
    rating: 5,
    text: "Sample review — replace this with a real customer message once you receive one.",
    author: "Customer name",
    placeholder: true,
  },
  {
    id: "r2",
    rating: 5,
    text: "Sample review — a short line about how the piece felt to receive and wear.",
    author: "Customer initials",
    placeholder: true,
  },
  {
    id: "r3",
    rating: 5,
    text: "Sample review — a note about packaging, gifting or a custom request.",
    author: "Customer name",
    placeholder: true,
  },
];

export const faqs = [
  {
    q: "How do I place an order?",
    a: "Browse the collection, pick the piece you love and tap Order on WhatsApp. Your message opens ready to send, and we confirm the details with you from there.",
  },
  {
    q: "Are the pieces handmade?",
    a: "Yes. Every JewelIgnite piece is made by hand with care and attention to detail.",
  },
  {
    q: "Can I request a custom piece?",
    a: "Absolutely. Send us your idea on WhatsApp — colours, occasion, anything you have in mind — and we will let you know what is possible.",
  },
  {
    q: "Do you offer permanent jewelry?",
    a: "Yes, permanent jewelry is part of what we offer. Message us on WhatsApp and we will walk you through the current options and availability.",
  },
  {
    q: "How do I ask about delivery?",
    a: "Delivery details are confirmed per order. Send us a message on WhatsApp with your city and we will share what applies to you.",
  },
  {
    q: "Can I buy something as a gift?",
    a: "Of course — many of our pieces are made with gifting in mind. Let us know it is a gift when you message us.",
  },
  {
    q: "Can I request personalization?",
    a: "Yes, on selected pieces. Add your personalization note when you order, or ask us on WhatsApp first if you are unsure.",
  },
];

export const benefits = [
  {
    title: "Handmade",
    copy: "Every piece is created with attention, patience and care.",
  },
  {
    title: "Cute & Expressive",
    copy: "Little details designed to make your everyday look feel more you.",
  },
  {
    title: "Affordable",
    copy: "Beautiful accessories without an intimidating price tag.",
  },
  {
    title: "Giftable",
    copy: "Thoughtful little pieces made for yourself or someone you love.",
  },
];

export const orderSteps = [
  { no: "01", title: "Explore", copy: "Browse the JewelIgnite collection." },
  { no: "02", title: "Choose", copy: "Pick your favorite piece or ask about customization." },
  { no: "03", title: "Message Us", copy: "Send your order through WhatsApp." },
  { no: "04", title: "Confirm", copy: "Confirm availability, final price and order details with us." },
];

export const giftCategories = [
  { title: "For Her", copy: "Soft, pretty pieces made to feel personal." },
  { title: "Friendship Gifts", copy: "Little matching moments for people you love." },
  { title: "Little Treats", copy: "Small, affordable pieces that still feel special." },
  { title: "Personalized Pieces", copy: "Made around a name, a colour or a memory." },
];
