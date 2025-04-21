
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { products } from "@/productsData";
import { ChevronRight } from "lucide-react";

function ProductCard({ id, name, description, image }: typeof products[0]) {
  return (
    <div className="overflow-hidden rounded-xl border bg-card shadow-lg transition-transform duration-150 hover:scale-[1.025] flex flex-col ring-1 ring-gray-900/5">
      <div className="aspect-square overflow-hidden bg-gray-900/70">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-[#2E7D32] mb-2">{name}</h3>
        <p className="text-muted-foreground mb-4 flex-1">{description}</p>
        <div className="mt-auto flex justify-end">
          <Button asChild className="bg-[#F97316] hover:bg-[#F97316]/90 rounded-full font-medium px-6">
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
        <h1 className="text-4xl font-extrabold text-center mb-12 text-[#2E7D32] drop-shadow">Our Premium Collection</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
}
