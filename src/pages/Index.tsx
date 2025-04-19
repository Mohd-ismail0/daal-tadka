
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-r from-amber-50 to-yellow-50">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-5xl font-bold text-amber-900">
              Premium Organic Pulses for Your Healthy Lifestyle
            </h1>
            <p className="text-xl text-gray-600">
              Experience the finest quality unpolished dals, sourced directly from organic farms.
              Pure, natural, and rich in nutrients.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg" className="bg-amber-700 hover:bg-amber-800">
                <Link to="/products">
                  Explore Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
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
              <div className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-900">100% Organic</h3>
              <p className="text-gray-600">
                Sourced from certified organic farms with sustainable practices
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-900">Unpolished Quality</h3>
              <p className="text-gray-600">
                Natural and unpolished dals retaining all their nutritional value
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-900">Available Online</h3>
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
