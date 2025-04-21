
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { products } from "@/productsData";
import { ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet";

function ProductCard({ id, name, description, image }: typeof products[0]) {
  return (
    <div className="product-card overflow-hidden rounded-xl border bg-card shadow-sm transition-all duration-300 flex flex-col h-full">
      <div className="aspect-square overflow-hidden bg-gray-50">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-medium text-primary mb-2">{name}</h3>
        <p className="text-muted-foreground mb-6 flex-1">{description}</p>
        <div className="mt-auto flex justify-end">
          <Button asChild className="rounded-full font-medium px-6 bg-primary/10 text-primary hover:bg-primary/20 border-none">
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
  // SEO metadata
  const pageTitle = "Premium Organic Products Collection | Daal Tadka";
  const pageDescription = "Explore our collection of high-quality, unpolished organic pulses and authentic Indian spices. Perfect for health-conscious professionals in Bangalore.";

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="organic pulses, spices collection, premium dal, unpolished pulses, bangalore delivery" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
      </Helmet>
    
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto mb-12 text-center fade-up">
          <h1 className="text-4xl font-medium mb-6 text-gray-900">Our Premium Collection</h1>
          <p className="text-gray-600 text-lg">
            Discover our carefully curated selection of organic pulses and authentic spices,
            sourced directly from sustainable farms across India.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-medium mb-4">Looking for custom bulk orders?</h2>
          <p className="text-gray-600 mb-6">
            We offer special packages for corporate offices, tech parks, and residential communities across Bangalore.
          </p>
          <Button asChild variant="outline" className="rounded-full font-medium text-primary border-primary hover:bg-primary/5">
            <Link to="/contact">Contact our business team</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
