
/**
 * Central product data, used for both listing and detail pages.
 */
export const products = [
  {
    id: 1,
    name: "Premium Tur Dal",
    description: "Unpolished, organic tur dal sourced from the finest farms.",
    image: "https://images.unsplash.com/photo-1585996563222-458a0bde4d68?auto=format&fit=crop&q=80&w=500",
    stores: {
      amazon: "https://amazon.in",
      blinkit: "https://blinkit.com",
      zepto: "https://zepto.in"
    },
    highlights: [
      "100% Organic & Unpolished",
      "Rich in Protein & Dietary Fiber",
      "No Added Preservatives",
      "Traditionally Sourced"
    ],
    details: [
      { label: "Brand", value: "Farm Fresh Pulses" },
      { label: "Type", value: "Unpolished Tur Dal" },
      { label: "Weight", value: "1 kg" },
      { label: "Shelf Life", value: "12 months" },
      { label: "Origin", value: "Maharashtra, India" },
      { label: "Packaging", value: "Sealed Pouch" }
    ]
  },
  {
    id: 2,
    name: "Organic Moong Dal",
    description: "Pure and natural moong dal, perfect for a healthy diet.",
    image: "https://images.unsplash.com/photo-1604848987049-8b5c1a4a4c7c?auto=format&fit=crop&q=80&w=500",
    stores: {
      amazon: "https://amazon.in",
      blinkit: "https://blinkit.com",
      zepto: "https://zepto.in"
    },
    highlights: [
      "Naturally Grown",
      "Easy to Digest",
      "Rich in Vitamins",
      "No Artificial Additives"
    ]
  },
  {
    id: 3,
    name: "Premium Masoor Dal",
    description: "High-quality masoor dal with rich nutrients.",
    image: "https://images.unsplash.com/photo-1604848987008-e923e5e4f1c7?auto=format&fit=crop&q=80&w=500",
    stores: {
      amazon: "https://amazon.in",
      blinkit: "https://blinkit.com",
      zepto: "https://zepto.in"
    },
    highlights: [
      "Naturally Sourced",
      "High in Protein",
      "Soft Texture",
      "Delicious Taste"
    ]
  }
];
