/**
 * Central product data, used for both listing and detail pages.
 */
export type StoreKey = "amazon" | "blinkit" | "zepto";

export type ProductDetail = {
  label: string;
  value: string;
};

export type Product = {
  id: number;
  name: string;
  shortName: string;
  description: string;
  image: string;
  images: string[];
  stores: Partial<Record<StoreKey, string>>;
  highlights: string[];
  details?: ProductDetail[];
  keywords?: string;
  longDescription?: string;
  comingSoon?: boolean;
};

const GENERIC_STORE_HOMES = new Set([
  "amazon.in",
  "www.amazon.in",
  "blinkit.com",
  "www.blinkit.com",
  "zepto.in",
  "www.zepto.in",
  "zepto.com",
  "www.zepto.com",
]);

export function isRealStoreUrl(url?: string): boolean {
  if (!url) return false;
  try {
    const parsed = new URL(url);
    return !(
      GENERIC_STORE_HOMES.has(parsed.hostname) &&
      (parsed.pathname === "/" || parsed.pathname === "")
    );
  } catch {
    return false;
  }
}

const STORE_LABELS: Record<StoreKey, string> = {
  amazon: "Amazon",
  blinkit: "Blinkit",
  zepto: "Zepto",
};

export function getAvailableStores(product: Product) {
  return (Object.keys(STORE_LABELS) as StoreKey[])
    .filter((key) => isRealStoreUrl(product.stores[key]))
    .map((key) => ({
      key,
      label: STORE_LABELS[key],
      url: product.stores[key] as string,
    }));
}

export function getProductImages(product: Product): string[] {
  if (product.images.length > 0) return product.images;
  return product.image ? [product.image] : ["/images/logo-main.png"];
}

export function getProductDisplayName(product: Product): string {
  return product.shortName || product.name.split("|")[0].trim();
}

export const products: Product[] = [
  {
    id: 1,
    name: "Daal Tadka Premium Tur Dal 1kg | Unpolished, Protein-Rich Toor Dal | High Fiber & Low Fat | Natural & Hygienically Packed Indian Pulses | Ideal for Daily Cooking",
    shortName: "Premium Tur Dal 1kg",
    description:
      "Daal Tadka's Premium Tur Dal is 100% unpolished, protein-rich, and packed using hygienic, sustainable processes. 22g protein & 15g fiber per 100g. No artificial polishing, perfect for daily Indian meals. FSSAI certified, farm-to-fork traceability, and sealed freshness for Bangalore's busy health-conscious professionals.",
    image: "/images/c0d0c740-a72f-4a23-8eee-bde2da313629.png",
    images: [
      "/images/c0d0c740-a72f-4a23-8eee-bde2da313629.png",
      "/images/9f02a996-c368-4948-9a19-2e27afe5f7bb.png",
      "/images/b1a633c7-8200-482b-8029-4cbd78ddd2d2.png",
    ],
    stores: {},
    highlights: [
      "✅ 100% Premium Unpolished Tur Dal: Daal Tadka brings you high-quality, unpolished Toor Dal—free from chemicals or artificial polishing. Retains natural nutrients and flavor.",
      "💪 Rich in Protein & Fiber: With 22g protein and 15g dietary fiber per 100g, our Tur Dal is ideal for vegetarians, fitness-conscious individuals, and balanced diets.",
      "🌿 Hygienically Packed: Processed and packed in a fully hygienic facility. Comes in food-grade pouches with zip-lock reseal to ensure freshness and long shelf life.",
      "🍲 Perfect for Indian Cuisine: Enhance your sambhar, dal fry, khichdi, or rasam with its authentic aroma, natural taste, and creamy texture after cooking.",
      "🇮🇳 Locally Sourced & Trusted: Grown by Indian farmers, processed by MIS Agro Foods, and marketed by Advista Marketing Pvt. Ltd—supporting farm-to-fork traceability.",
      "📦 1 Kg Convenient Pouch: Easy to store and handle; resealable pack ensures no spillage or moisture entry. Ideal for modern kitchens and daily use.",
    ],
    details: [
      { label: "Brand", value: "Daal Tadka" },
      { label: "Variant", value: "Tur Dal (Toor Dal / Arhar Dal)" },
      { label: "Weight", value: "1 Kg" },
      { label: "Packaging Type", value: "Resealable Zip Pouch" },
      { label: "Shelf Life", value: "12 months from packaging" },
      { label: "FSSAI License", value: "11225998000056" },
      { label: "Country of Origin", value: "India" },
      { label: "Marketed by", value: "Advista Marketing Pvt Ltd, Bangalore" },
      { label: "Packaged by", value: "MIS Agro Foods, Bengaluru Rural" },
      { label: "Email", value: "admin@advistaltd.com / misagro@advistaltd.com" },
      { label: "Contact", value: "+91 9164015302" },
    ],
    keywords:
      "toor dal, tur dal 1kg, unpolished dal, protein dal, Indian pulses, toor dal unpolished, best toor dal, buy dal online, natural tur dal, daal tadka brand, yellow split pigeon peas, daily cooking pulses, healthy dal",
    longDescription: `Daal Tadka's Premium Tur Dal is your go-to choice for everyday Indian cooking. Carefully sourced from trusted farms across India, our dal is 100% unpolished and naturally preserved to retain essential nutrients, taste, and color. Packed with 22g protein and 15g fiber per 100g, this high-protein dal supports your family's nutritional needs without compromising on taste.

Whether it's the comforting dal tadka, authentic sambhar, or a nourishing bowl of khichdi, our Tur Dal adapts beautifully to every Indian recipe. It's easy to cook, with a creamy, aromatic texture that elevates every meal.

Each pouch is packed at MIS Agro Foods, Karnataka, under strict quality controls, and distributed by Advista Marketing Pvt Ltd, Bangalore. With a focus on hygiene, sustainability, and nutritional value, Daal Tadka offers the perfect balance of tradition and quality.

FSSAI Certified | No Preservatives | 100% Natural | Farm Fresh`,
  },
];
