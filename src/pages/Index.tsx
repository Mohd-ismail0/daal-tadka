
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with improved spacing and gradients */}
      <section className="relative h-[80vh] bg-background">
        <div className="container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl space-y-8">
            <div className="flex items-center space-x-8">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#556B2F] to-[#8B0000] rounded-lg blur opacity-30"></div>
                <img 
                  src="/lovable-uploads/43485b87-1a3d-4a65-ae9d-39e3f258f90b.png" 
                  alt="Daal Tadka Logo" 
                  className="relative h-32 w-auto rounded-lg"
                />
              </div>
              <div>
                <h1 className="text-5xl font-bold text-[#FFD700] mb-3">
                  Premium Organic Pulses
                </h1>
                <p className="text-xl text-[#556B2F] font-medium">
                  Unpolished, Natural, Nutritious
                </p>
              </div>
            </div>
            <p className="text-xl text-foreground/90 max-w-xl">
              Experience the finest quality unpolished dals, sourced directly from organic farms.
              Pure, natural, and rich in nutrients.
            </p>
            <div className="flex gap-6">
              <Button 
                asChild 
                size="lg" 
                className="bg-[#556B2F] hover:bg-[#556B2F]/80 text-[#FFD700] text-lg px-8 py-6 shadow-lg hover:shadow-xl"
              >
                <Link to="/products" className="flex items-center">
                  Explore Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-2 border-[#8B0000] text-[#FFD700] hover:bg-[#8B0000]/10 text-lg px-8 py-6"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with improved cards */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: "🌱", title: "100% Organic", desc: "Sourced from certified organic farms with sustainable practices" },
              { icon: "✨", title: "Unpolished Quality", desc: "Natural and unpolished dals retaining all their nutritional value" },
              { icon: "📦", title: "Available Online", desc: "Purchase easily through your favorite online platforms" }
            ].map((feature, index) => (
              <div key={index} className="group relative p-8 rounded-xl bg-gradient-to-b from-muted to-background border border-border/50 hover:border-[#556B2F]/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-[#556B2F]/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative space-y-4">
                  <div className="w-16 h-16 flex items-center justify-center text-3xl bg-gradient-to-br from-[#556B2F]/20 to-[#8B0000]/20 rounded-xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#FFD700]">{feature.title}</h3>
                  <p className="text-foreground/90">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
