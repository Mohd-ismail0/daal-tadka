import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { products } from "@/productsData";
import { ChevronRight, ShoppingCart, Star, Package, Award, Truck, ChevronDown } from "lucide-react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Header } from "@/components/Header";
import { Helmet } from "react-helmet";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ProductImages } from "@/components/ProductImages";
import { ProductBuyButtons } from "@/components/ProductBuyButtons";
import { ProductHighlights } from "@/components/ProductHighlights";
import { ProductSpecsAndDescription } from "@/components/ProductSpecsAndDescription";

// Grab the tur dal image array to share with others
import { products as allProducts } from "@/productsData";
const turDalImages =
  Array.isArray(allProducts[0].images) && allProducts[0].images.length > 0
    ? allProducts[0].images
    : [allProducts[0].image];

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => String(p.id) === id);
  const isMobile = useIsMobile();

  // For image gallery
  import { products as allProducts } from "@/productsData";
  const turDalImages =
    Array.isArray(allProducts[0].images) && allProducts[0].images.length > 0
      ? allProducts[0].images
      : [allProducts[0].image];
  const productImages = turDalImages;

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-primary mb-4">Product Not Found</h1>
        <Button variant="outline" onClick={() => navigate(-1)} className="rounded-full">
          Go Back
        </Button>
      </div>
    );
  }

  const pageTitle = product.name;
  const pageDescription =
    product.longDescription ||
    product.description ||
    "Premium organic pulses, rich in nutrients, delivered fresh to your doorstep in Bangalore.";

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={product.keywords || ""} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="product" />
        <meta property="og:image" content={productImages[0]} />
      </Helmet>
      <Header />
      <div className="container mx-auto max-w-6xl px-4 py-6">
        <nav className="mb-6 text-sm flex items-center gap-1">
          <Link to="/" className="hover:text-primary text-gray-600">Home</Link>
          <ChevronRight className="inline-block mx-1 text-gray-400" size={14} />
          <Link to="/products" className="hover:text-primary text-gray-600">Products</Link>
          <ChevronRight className="inline-block mx-1 text-gray-400" size={14} />
          <span className="text-primary font-medium">{product.name.split("|")[0].trim()}</span>
        </nav>
        {/* FLEX GRID - IMAGES | BUY BUTTONS | PRODUCT INFO */}
        <div className="flex flex-col gap-8 lg:flex-row bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          {/* LEFT COLUMN: Images + BUY BUTTONS */}
          <div className="w-full lg:w-[37%] flex flex-col items-center sticky top-24 self-start">
            <ProductImages productName={product.name} images={productImages} />
            <ProductBuyButtons stores={product.stores} />
          </div>
          {/* RIGHT COLUMN: Info (Highlights, Specs, Description in 2col grid) */}
          <div className="w-full lg:w-[63%] flex flex-col">
            {/* Product Title */}
            <div className="mb-3">
              <h1 className="text-2xl md:text-3xl font-medium text-gray-900 mb-1 leading-tight">
                {product.name}
              </h1>
            </div>
            {/* Features section */}
            <div className="mb-5">
              <h2 className="text-lg font-semibold mb-3 text-gray-900 whitespace-nowrap">Product Highlights</h2>
              <ProductHighlights highlights={product.highlights} />
            </div>
            {/* Product Icons row */}
            <div className="grid grid-cols-3 gap-4 my-3 pb-2 max-w-md">
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Package size={16} className="text-primary" />
                </div>
                <span className="text-xs text-gray-700">Premium Quality</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Award size={16} className="text-primary" />
                </div>
                <span className="text-xs text-gray-700">100% Organic</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Truck size={16} className="text-primary" />
                </div>
                <span className="text-xs text-gray-700">Fast Delivery</span>
              </div>
            </div>
            <Separator className="my-4" />
            {/* Description and Specs Grid */}
            <ProductSpecsAndDescription
              longDescription={product.longDescription}
              description={product.description}
              details={product.details}
            />
          </div>
        </div>
        {/* Similar Products Section */}
        <div className="mt-12">
          <h2 className="text-xl font-medium mb-6 text-gray-900">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products
              .filter(p => p.id !== product.id)
              .map(p => (
                <Link key={p.id} to={`/products/${p.id}`} className="group">
                  <div className="flex items-center space-x-4 p-4 rounded-lg border hover:shadow-md transition-all">
                    <div className="w-16 h-16 bg-gray-50 rounded overflow-hidden">
                      <img src={productImages[0]} alt={p.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-medium text-primary group-hover:underline">{p.name.split("|")[0]}</h3>
                      <p className="text-sm text-gray-500 line-clamp-1">{p.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
