
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";

interface ProductBuyButtonsProps {
  stores: {
    amazon: string,
    blinkit: string,
    zepto: string,
  };
  showStars?: boolean;
}

export function ProductBuyButtons({ stores, showStars = true }: ProductBuyButtonsProps) {
  return (
    <>
      <div className="flex flex-col gap-2 w-full mt-5">
        <Button asChild className="w-full bg-accent hover:bg-accent/90 shadow-sm flex items-center justify-center gap-2 text-base py-4 rounded-full font-semibold text-gray-900">
          <a href={stores.amazon} target="_blank" rel="noopener noreferrer">
            <ShoppingCart size={18} className="inline" /> Buy on Amazon
          </a>
        </Button>
        <div className="grid grid-cols-2 gap-2">
          <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/5 flex items-center justify-center gap-2 font-medium py-2 rounded-full">
            <a href={stores.blinkit} target="_blank" rel="noopener noreferrer">
              <ShoppingCart size={16} className="inline" /> Blinkit
            </a>
          </Button>
          <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/5 flex items-center justify-center gap-2 font-medium py-2 rounded-full">
            <a href={stores.zepto} target="_blank" rel="noopener noreferrer">
              <ShoppingCart size={16} className="inline" /> Zepto
            </a>
          </Button>
        </div>
      </div>
      {showStars && (
        <div className="flex items-center justify-center space-x-1 mt-3 mb-1">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
          ))}
          <span className="ml-2 text-xs text-gray-500 font-medium">(1,024 reviews)</span>
        </div>
      )}
    </>
  );
}
