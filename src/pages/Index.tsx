
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-r from-[#F2FCE2] to-[#FEF7CD]">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center space-x-6">
              <img 
                src="/lovable-uploads/43485b87-1a3d-4a65-ae9d-39e3f258f90b.png" 
                alt="Daal Tadka Logo" 
                className="h-32 w-auto"
              />
              <div>
                <h1 className="text-5xl font-bold text-[#2E7D32]">
                  Premium Organic Pulses
                </h1>
                <p className="text-xl text-[#2E7D32]/80 mt-2">
                  Unpolished, Natural, Nutritious
                </p>
              </div>
            </div>
            <p className="text-xl text-gray-600">
              Experience the finest quality unpolished dals, sourced directly from organic farms.
              Pure, natural, and rich in nutrients.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg" className="bg-[#F97316] hover:bg-[#F97316]/90">
                <Link to="/products">
                  Explore Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32]/10">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-[#F2FCE2] rounded-full flex items-center justify-center">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-[#2E7D32]">100% Organic</h3>
              <p className="text-gray-600">
                Sourced from certified organic farms with sustainable practices
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-[#F2FCE2] rounded-full flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-[#2E7D32]">Unpolished Quality</h3>
              <p className="text-gray-600">
                Natural and unpolished dals retaining all their nutritional value
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-[#F2FCE2] rounded-full flex items-center justify-center">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="text-xl font-semibold text-[#2E7D32]">Available Online</h3>
              <p className="text-gray-600">
                Purchase easily through your favorite online platforms
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
