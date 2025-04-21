

import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { products } from "@/productsData";
import { ChevronRight, ShoppingCart, Star } from "lucide-react";
import { Table, TableBody, TableCell, TableRow, TableHead, TableHeader } from "@/components/ui/table";

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
      <div className="container mx-auto max-w-5xl px-4 py-10">
        {/* Breadcrumbs */}
        <nav className="mb-5 text-muted-foreground text-sm flex items-center gap-1">
          <Link to="/" className="hover:underline text-[#2E7D32]">Home</Link>
          <ChevronRight className="inline-block mx-1 text-muted-foreground" size={14} />
          <Link to="/products" className="hover:underline text-[#2E7D32]">Products</Link>
          <ChevronRight className="inline-block mx-1 text-muted-foreground" size={14} />
          <span className="text-foreground font-medium">{product.name}</span>
        </nav>
        <div className="flex flex-col lg:flex-row gap-10 bg-card rounded-xl shadow-lg p-7">
          {/* IMAGE SECTION */}
          <div className="w-full lg:w-2/5 flex flex-col items-center">
            <div className="bg-gray-900/80 border border-gray-800 rounded-lg p-4 mb-3 w-full flex items-center justify-center min-h-[325px]">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-md object-contain w-full max-h-[310px] bg-gray-900"
                style={{ backgroundColor: "#18181b" }}
              />
            </div>
            {/* Amazon-like star rating/fake */}
            <div className="flex items-center space-x-1 mt-1">
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
              <span className="ml-2 text-xs text-muted-foreground">(1,024 ratings)</span>
            </div>
          </div>
          {/* PRODUCT INFO & BUY */}
          <div className="w-full lg:w-3/5 flex flex-col justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold text-[#2E7D32] mb-2">{product.name}</h1>
              <p className="mb-4 text-lg text-foreground/90">{product.description}</p>

              {/* Highlights */}
              {product.highlights && (
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  {product.highlights.map((highlight, i) => (
                    <li className="text-muted-foreground text-sm" key={i}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
            {/* Buy Buttons */}
            <div className="flex flex-col gap-2 w-full mt-3">
              <Button asChild className="w-full bg-[#F97316] hover:bg-[#F97316]/90 shadow-sm flex items-center justify-center gap-2 text-base py-5 rounded-lg font-semibold">
                <a href={product.stores.amazon} target="_blank" rel="noopener noreferrer">
                  <ShoppingCart className="inline" /> Buy on Amazon
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32]/10 flex items-center gap-2 font-semibold py-4 rounded-lg">
                <a href={product.stores.blinkit} target="_blank" rel="noopener noreferrer">
                  <ShoppingCart className="inline" /> Buy on Blinkit
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32]/10 flex items-center gap-2 font-semibold py-4 rounded-lg">
                <a href={product.stores.zepto} target="_blank" rel="noopener noreferrer">
                  <ShoppingCart className="inline" /> Buy on Zepto
                </a>
              </Button>
            </div>
            {/* Details Table */}
            {product.details && (
              <div className="mt-8 bg-gray-900/80 rounded-lg p-5 border border-gray-800 shadow-inner">
                <h2 className="text-lg font-semibold mb-3 text-foreground/90">Product Details</h2>
                <Table>
                  <TableBody>
                    {product.details.map((row, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-semibold w-40 text-muted-foreground">{row.label}</TableCell>
                        <TableCell className="text-foreground/90">{row.value}</TableCell>
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
  );
}
