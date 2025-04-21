import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
export function Header() {
  return <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 rounded-none py-[10px] bg-gray-900">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/e984f320-8194-439a-bb6e-d6752b022ba9.png" alt="Daal Tadka Logo" className="h-10 w-auto" />
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium hover:text-[#F97316]">
              Home
            </Link>
            <Link to="/products" className="text-sm font-medium hover:text-[#F97316]">
              Products
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-[#F97316]">
              Contact
            </Link>
          </div>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-6">
                <Link to="/" className="text-lg font-medium hover:text-[#F97316]">
                  Home
                </Link>
                <Link to="/products" className="text-lg font-medium hover:text-[#F97316]">
                  Products
                </Link>
                <Link to="/contact" className="text-lg font-medium hover:text-[#F97316]">
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>;
}