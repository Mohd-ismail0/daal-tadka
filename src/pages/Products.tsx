import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { getProductDisplayName, type Product, products } from "@/productsData";
import { ChevronRight } from "lucide-react";
import { PageSeo } from "@/components/PageSeo";

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card overflow-hidden rounded-xl border bg-card shadow-sm transition-all duration-300 flex flex-col h-full">
      <div className="aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={getProductDisplayName(product)}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-medium text-primary mb-2 line-clamp-2">
          {getProductDisplayName(product)}
        </h3>
        <p className="text-muted-foreground mb-6 flex-1 line-clamp-3">{product.description}</p>
        <div className="mt-auto flex justify-end">
          <Button
            asChild
            className="rounded-full font-medium px-6 bg-primary/10 text-primary hover:bg-primary/20 border-none"
          >
            <Link to={`/products/${product.id}`} className="flex items-center gap-2">
              View More Details <ChevronRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  const pageTitle = "Premium Unpolished Pulses | Daal Tadka";
  const pageDescription =
    "Explore Daal Tadka's collection of high-quality, unpolished pulses. Start with our FSSAI certified Premium Tur Dal 1kg.";

  return (
    <div className="min-h-screen bg-background">
      <PageSeo
        title={pageTitle}
        description={pageDescription}
        keywords="unpolished pulses, premium dal, tur dal 1kg, daal tadka, bangalore delivery"
      />

      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto mb-12 text-center fade-up">
          <h1 className="text-4xl font-medium mb-6 text-gray-900">Our Premium Collection</h1>
          <p className="text-gray-600 text-lg">
            Carefully sourced unpolished pulses, packed hygienically for daily Indian cooking.
          </p>
        </div>

        <div className={`grid gap-8 ${products.length === 1 ? "max-w-md mx-auto" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-medium mb-4">Looking for custom bulk orders?</h2>
          <p className="text-gray-600 mb-6">
            We offer special packages for corporate offices, tech parks, and residential communities
            across Bangalore.
          </p>
          <Button
            asChild
            variant="outline"
            className="rounded-full font-medium text-primary border-primary hover:bg-primary/5"
          >
            <Link to="/contact">Contact our business team</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
