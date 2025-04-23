
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

// Grab the tur dal image array to share with others
import { products as allProducts } from "@/productsData";
const turDalImages =
  Array.isArray(allProducts[0].images) && allProducts[0].images.length > 0
    ? allProducts[0].images
    : [allProducts[0].image];

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  // Find the product
  const product = products.find((p) => String(p.id) === id);
  const isMobile = useIsMobile();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(!isMobile);

  useEffect(() => {
    if (!product) return;
    // For all products, use tur dal images for now
    setSelectedImage(turDalImages[0]);
  }, [product]);

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

  // Use tur dal images for all products for now
  const productImages = turDalImages;

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
          {/* LEFT COLUMN: Images + buy options */}
          <div className="w-full lg:w-[37%] flex flex-col items-center sticky top-24 self-start">
            {/* Main image carousel style */}
            <div className="rounded-lg border border-gray-200 bg-white mb-4 flex items-center justify-center min-h-[340px] min-w-[270px] max-w-[370px] overflow-hidden aspect-square">
              <img
                src={selectedImage || productImages[0]}
                alt={product.name}
                className="transition-all duration-300 rounded object-contain max-h-[300px] w-auto mx-auto"
                style={{ maxWidth: "100%", maxHeight: 340, background: "#fafafa" }}
                draggable={false}
              />
            </div>
            {/* Thumbnails */}
            {productImages.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
                {productImages.map((imgSrc: string, i: number) => (
                  <div
                    key={i}
                    className={`cursor-pointer rounded border p-1 min-w-[52px] max-w-[52px] h-[52px] flex items-center justify-center bg-gray-50
                      ${selectedImage === imgSrc ? 'border-primary border-2 shadow-md' : 'border-gray-200 hover:border-primary/60'}`}
                    onClick={() => setSelectedImage(imgSrc)}
                  >
                    <img
                      src={imgSrc}
                      className="w-full h-full object-contain"
                      alt={`Thumbnail ${i + 1}`}
                      style={{ maxWidth: "44px", maxHeight: "44px" }}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Buy buttons */}
            <div className="flex flex-col gap-2 w-full mt-5">
              <Button asChild className="w-full bg-accent hover:bg-accent/90 shadow-sm flex items-center justify-center gap-2 text-base py-4 rounded-full font-semibold text-gray-900">
                <a href={product.stores.amazon} target="_blank" rel="noopener noreferrer">
                  <ShoppingCart size={18} className="inline" /> Buy on Amazon
                </a>
              </Button>
              <div className="grid grid-cols-2 gap-2">
                <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/5 flex items-center justify-center gap-2 font-medium py-2 rounded-full">
                  <a href={product.stores.blinkit} target="_blank" rel="noopener noreferrer">
                    <ShoppingCart size={16} className="inline" /> Blinkit
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/5 flex items-center justify-center gap-2 font-medium py-2 rounded-full">
                  <a href={product.stores.zepto} target="_blank" rel="noopener noreferrer">
                    <ShoppingCart size={16} className="inline" /> Zepto
                  </a>
                </Button>
              </div>
            </div>
            {/* Star reviews */}
            <div className="flex items-center justify-center space-x-1 mt-3 mb-1">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
              ))}
              <span className="ml-2 text-xs text-gray-500 font-medium">(1,024 reviews)</span>
            </div>
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
              <ul className="space-y-2">
                {product.highlights && product.highlights.map((highlight, i) => (
                  <li className="flex items-start" key={i}>
                    <span className="text-primary mr-2 mt-1 flex-shrink-0">•</span>
                    <span className="text-gray-700 text-sm">{highlight}</span>
                  </li>
                ))}
              </ul>
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
            <div className="w-full flex flex-col lg:flex-row gap-7">
              {/* Product Description */}
              <div className="w-full lg:w-1/2">
                {isMobile ? (
                  <Collapsible open={isDescriptionOpen} onOpenChange={setIsDescriptionOpen}>
                    <CollapsibleTrigger className="flex w-full justify-between items-center py-2 text-left font-medium text-gray-900">
                      <h2 className="text-lg">Product Description</h2>
                      <ChevronDown className={`h-5 w-5 transition-transform ${isDescriptionOpen ? 'transform rotate-180' : ''}`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="text-gray-700 text-sm leading-relaxed">
                      <p className="whitespace-pre-line">
                        {product.longDescription || product.description}
                      </p>
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <>
                    <h2 className="text-lg font-medium mb-3 text-gray-900">Product Description</h2>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                      {product.longDescription || product.description}
                    </p>
                  </>
                )}
              </div>
              {/* Product Specifications */}
              <div className="w-full lg:w-1/2">
                {product.details && (
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                    <h2 className="text-lg font-medium mb-3 text-gray-900">Product Specifications</h2>
                    <Table>
                      <TableBody>
                        {product.details.map((row, i) => (
                          <TableRow key={i} className="border-b border-gray-100">
                            <TableCell className="py-2 font-medium text-gray-700 text-sm">{row.label}</TableCell>
                            <TableCell className="py-2 text-gray-700 text-sm">{row.value}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </div>
            </div>
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
