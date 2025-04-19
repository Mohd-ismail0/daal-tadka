
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";

const products = [
  {
    id: 1,
    name: "Premium Tur Dal",
    description: "Unpolished, organic tur dal sourced from the finest farms",
    image: "https://images.unsplash.com/photo-1585996563222-458a0bde4d68?auto=format&fit=crop&q=80&w=500",
    prices: {
      "500g": 80,
      "1kg": 150,
      "2kg": 290,
    }
  },
  {
    id: 2,
    name: "Organic Moong Dal",
    description: "Pure and natural moong dal, perfect for a healthy diet",
    image: "https://images.unsplash.com/photo-1604848987049-8b5c1a4a4c7c?auto=format&fit=crop&q=80&w=500",
    prices: {
      "500g": 75,
      "1kg": 140,
      "2kg": 270,
    }
  },
  {
    id: 3,
    name: "Premium Masoor Dal",
    description: "High-quality masoor dal with rich nutrients",
    image: "https://images.unsplash.com/photo-1604848987008-e923e5e4f1c7?auto=format&fit=crop&q=80&w=500",
    prices: {
      "500g": 70,
      "1kg": 130,
      "2kg": 250,
    }
  },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Our Premium Collection</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
}
