import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
export function Header() {
  return <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto rounded-none py-4">
        <div className="flex h-14 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img alt="Daal Tadka Logo" src="/images/logo-landscape-without.png" className="h-16 w-auto object-contain" />
            
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-sm font-medium hover:text-primary transition-colors">
              Products
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-6 mt-8">
                <Link to="/" className="text-lg font-medium hover:text-primary transition-colors">
                  Home
                </Link>
                <Link to="/products" className="text-lg font-medium hover:text-primary transition-colors">
                  Products
                </Link>
                <Link to="/contact" className="text-lg font-medium hover:text-primary transition-colors">
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>;
}
