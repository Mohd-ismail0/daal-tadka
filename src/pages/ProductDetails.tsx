
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { products } from "@/productsData";
import { ChevronRight, ShoppingCart } from "lucide-react";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-[#F97316] mb-4">Product Not Found</h1>
        <Button variant="outline" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <nav className="mb-4 text-muted-foreground">
          <Link to="/" className="hover:underline text-[#2E7D32]">Home</Link>
          <ChevronRight className="inline-block mx-1 text-muted-foreground" size={15} />
          <Link to="/products" className="hover:underline text-[#2E7D32]">Products</Link>
          <ChevronRight className="inline-block mx-1 text-muted-foreground" size={15} />
          <span className="text-foreground">{product.name}</span>
        </nav>
        <div className="flex flex-col lg:flex-row gap-12 bg-card rounded-xl shadow-lg p-6">
          <div className="flex-shrink-0 w-full lg:w-1/2 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-md w-full max-w-md object-cover bg-background p-4"
              style={{ backgroundColor: "#18181b" /* gray-900 fallback */ }}
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-[#2E7D32] mb-3 tracking-tight">{product.name}</h1>
              <p className="text-lg text-gray-200 mb-4">{product.description}</p>
            </div>
            <div className="space-y-3 mt-8">
              <Button asChild className="w-full bg-[#F97316] hover:bg-[#F97316]/90 flex items-center gap-2">
                <a href={product.stores.amazon} target="_blank" rel="noopener noreferrer">
                  <ShoppingCart className="inline" /> Buy on Amazon
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32]/10 flex items-center gap-2">
                <a href={product.stores.blinkit} target="_blank" rel="noopener noreferrer">
                  <ShoppingCart className="inline" /> Buy on Blinkit
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32]/10 flex items-center gap-2">
                <a href={product.stores.zepto} target="_blank" rel="noopener noreferrer">
                  <ShoppingCart className="inline" /> Buy on Zepto
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// This file depends on productsData.ts for consistent product info
