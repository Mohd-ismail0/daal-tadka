import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { products } from "@/productsData";
import { ChevronRight, ShoppingCart, Star, Package, Award, Truck } from "lucide-react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Header } from "@/components/Header";
import { Helmet } from "react-helmet";
import { Separator } from "@/components/ui/separator";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => String(p.id) === id);

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

  const productImages =
    Array.isArray(product.images) && product.images.length > 0
      ? product.images
      : [product.image];

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
      
      <div className="container mx-auto max-w-6xl px-4 py-10">
        <nav className="mb-8 text-sm flex items-center gap-1">
          <Link to="/" className="hover:text-primary text-gray-600">Home</Link>
          <ChevronRight className="inline-block mx-1 text-gray-400" size={14} />
          <Link to="/products" className="hover:text-primary text-gray-600">Products</Link>
          <ChevronRight className="inline-block mx-1 text-gray-400" size={14} />
          <span className="text-primary font-medium">{product.name}</span>
        </nav>
        
        <div className="flex flex-col lg:flex-row gap-12 bg-white/70 rounded-2xl shadow-xl p-8 border border-gray-100 glass-morphism transition-shadow duration-300">
          <div className="w-full lg:w-2/5 space-y-8">
            <div className="rounded-xl bg-gray-50/60 p-6 flex items-center justify-center min-h-[400px] hover-zoom shadow">
              {productImages.length > 1 ? (
                <div className="w-full max-w-xs mx-auto relative">
                  <Carousel className="w-full h-full">
                    <CarouselContent>
                      {productImages.map((imgSrc: string, i: number) => (
                        <CarouselItem key={i}>
                          <img
                            src={imgSrc}
                            alt={`${product.name} image ${i + 1}`}
                            className="rounded-lg object-contain max-h-[320px] w-full bg-white transition-transform duration-200 hover:scale-105 border shadow"
                            draggable={false}
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                  <div className="flex gap-2 mt-4 justify-center">
                    {productImages.map((imgSrc: string, i: number) => (
                      <img
                        key={i}
                        src={imgSrc}
                        className="w-14 h-14 object-cover rounded border hover:ring-2 hover:ring-primary cursor-pointer bg-white shadow"
                        style={{ borderWidth: "2px", borderColor: "#ddd" }}
                        alt={`Thumbnail ${i + 1}`}
                        onClick={() => {
                          const emblaNode = document.querySelector(
                            ".embla__container"
                          ) as HTMLElement | null;
                          if (emblaNode && emblaNode.children[i]) {
                            emblaNode.children[i].scrollIntoView({
                              behavior: "smooth",
                              block: "nearest",
                              inline: "nearest"
                            });
                          }
                        }}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <img
                  src={productImages[0]}
                  alt={product.name}
                  className="rounded-md object-contain max-h-[360px] w-full"
                  draggable={false}
                />
              )}
            </div>
            
            <div className="flex items-center justify-center space-x-1">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
              ))}
              <span className="ml-2 text-sm text-gray-500">(1,024 reviews)</span>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-4 pb-2">
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Package size={18} className="text-primary" />
                </div>
                <span className="text-xs text-gray-700">Premium Quality</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Award size={18} className="text-primary" />
                </div>
                <span className="text-xs text-gray-700">100% Organic</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Truck size={18} className="text-primary" />
                </div>
                <span className="text-xs text-gray-700">Fast Delivery</span>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-3/5 flex flex-col justify-between gap-8">
            <div>
              <h1 className="text-3xl font-semibold text-gray-900 mb-2 tracking-tight leading-tight">
                {product.name}
              </h1>
              <p className="mb-6 text-lg text-gray-700/90 whitespace-pre-line">
                {product.longDescription || product.description}
              </p>

              <Separator className="my-7" />
              
              {product.highlights && (
                <div className="mb-8">
                  <h2 className="text-lg font-bold mb-4 text-gray-900">Product Highlights</h2>
                  <ul className="space-y-3">
                    {product.highlights.map((highlight, i) => (
                      <li className="flex items-start" key={i}>
                        <span className="text-primary mr-3 mt-1 text-lg">•</span>
                        <span className="text-gray-700 leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            <div className="flex flex-col gap-3 w-full">
              <Button asChild className="w-full bg-accent hover:bg-accent/90 shadow-sm flex items-center justify-center gap-2 text-base py-6 rounded-full font-semibold text-gray-900">
                <a href={product.stores.amazon} target="_blank" rel="noopener noreferrer">
                  <ShoppingCart size={18} className="inline" /> Buy on Amazon
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/5 flex items-center justify-center gap-2 font-medium py-5 rounded-full">
                <a href={product.stores.blinkit} target="_blank" rel="noopener noreferrer">
                  <ShoppingCart size={18} className="inline" /> Buy on Blinkit
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/5 flex items-center justify-center gap-2 font-medium py-5 rounded-full">
                <a href={product.stores.zepto} target="_blank" rel="noopener noreferrer">
                  <ShoppingCart size={18} className="inline" /> Buy on Zepto
                </a>
              </Button>
            </div>
            
            {product.details && (
              <div className="mt-8 bg-gray-100/80 rounded-lg p-6 border border-gray-100">
                <h2 className="text-lg font-bold mb-4 text-gray-900">Product Specifications</h2>
                <Table>
                  <TableBody>
                    {product.details.map((row, i) => (
                      <TableRow key={i} className="border-b border-gray-100">
                        <TableCell className="py-3 font-medium text-gray-700">{row.label}</TableCell>
                        <TableCell className="py-3 text-gray-700/90">{row.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
        </div>
        
        <div className="my-12 max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-medium mb-4 text-gray-900">Why Choose Our {product.name.split("|")[0].trim()}?</h2>
          <p className="text-gray-600 mb-6">
            {product.longDescription ||
              "Our premium product is meticulously sourced from organic farms across India. Carefully processed for maximum nutrition, perfect for health-conscious professionals in Bangalore."}
          </p>
          <p className="text-gray-600">
            With reliable delivery across Bangalore's tech hubs including Koramangala, HSR Layout, Indiranagar, and Whitefield, we ensure your pantry stays stocked with nutritious essentials without disrupting your demanding schedule.
          </p>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-medium mb-8 text-gray-900">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products
              .filter(p => p.id !== product.id)
              .map(p => (
                <Link key={p.id} to={`/products/${p.id}`} className="group">
                  <div className="flex items-center space-x-4 p-4 rounded-lg border hover:shadow-md transition-all">
                    <div className="w-16 h-16 bg-gray-50 rounded overflow-hidden">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-medium text-primary group-hover:underline">{p.name}</h3>
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
