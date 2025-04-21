
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { products } from "@/productsData";
import { ChevronRight } from "lucide-react";

function ProductCard({ id, name, description, image }: typeof products[0]) {
  return (
    <div className="overflow-hidden rounded-lg border bg-card shadow-sm transition-shadow hover:shadow-md flex flex-col">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-[#2E7D32]">{name}</h3>
        <p className="mt-2 text-foreground flex-1">{description}</p>
        <div className="mt-6 flex justify-end">
          <Button asChild className="bg-[#F97316] hover:bg-[#F97316]/90">
            <Link to={`/products/${id}`} className="flex items-center gap-2">
              View More Details <ChevronRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#2E7D32]">Our Premium Collection</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
}
