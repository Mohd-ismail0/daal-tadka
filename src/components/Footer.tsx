import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100">
      <Separator />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600 text-center md:text-left">
            &copy; {currentYear} Advista Marketing Pvt Ltd. All rights reserved.
          </p>
          <nav className="flex items-center gap-5 text-sm">
            <Link to="/" className="text-gray-600 hover:text-primary">
              Home
            </Link>
            <Link to="/products" className="text-gray-600 hover:text-primary">
              Products
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="text-sm text-gray-600 text-center md:text-right">
            <span>Visit our main site: </span>
            <a
              href="https://advistaltd.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              advistaltd.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
