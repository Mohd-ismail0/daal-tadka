
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Premium Tur Dal",
    description: "Unpolished, organic tur dal sourced from the finest farms",
    image: "https://images.unsplash.com/photo-1585996563222-458a0bde4d68?auto=format&fit=crop&q=80&w=500",
    stores: {
      amazon: "https://amazon.in",
      blinkit: "https://blinkit.com",
      zepto: "https://zepto.in"
    }
  },
  {
    id: 2,
    name: "Organic Moong Dal",
    description: "Pure and natural moong dal, perfect for a healthy diet",
    image: "https://images.unsplash.com/photo-1604848987049-8b5c1a4a4c7c?auto=format&fit=crop&q=80&w=500",
    stores: {
      amazon: "https://amazon.in",
      blinkit: "https://blinkit.com",
      zepto: "https://zepto.in"
    }
  },
  {
    id: 3,
    name: "Premium Masoor Dal",
    description: "High-quality masoor dal with rich nutrients",
    image: "https://images.unsplash.com/photo-1604848987008-e923e5e4f1c7?auto=format&fit=crop&q=80&w=500",
    stores: {
      amazon: "https://amazon.in",
      blinkit: "https://blinkit.com",
      zepto: "https://zepto.in"
    }
  },
];

function ProductCard({ name, description, image, stores }: typeof products[0]) {
  return (
    <div className="overflow-hidden rounded-lg border bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-amber-900">{name}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <div className="mt-6 space-y-3">
          <Button asChild className="w-full bg-amber-700 hover:bg-amber-800">
            <a href={stores.amazon} target="_blank" rel="noopener noreferrer">
              Buy on Amazon
            </a>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <a href={stores.blinkit} target="_blank" rel="noopener noreferrer">
              Buy on Blinkit
            </a>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <a href={stores.zepto} target="_blank" rel="noopener noreferrer">
              Buy on Zepto
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-amber-900">Our Premium Collection</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
}
