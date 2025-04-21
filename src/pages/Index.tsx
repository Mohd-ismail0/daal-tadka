import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Package, ShoppingCart, Star, Truck } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Helmet } from "react-helmet";
import { products } from "@/productsData";

// Featured product component
const FeaturedProduct = ({
  id,
  name,
  image,
  description
}: typeof products[0]) => <Link to={`/products/${id}`} className="group">
    <div className="product-card overflow-hidden rounded-2xl bg-card">
      <div className="aspect-square overflow-hidden bg-gray-50">
        <img src={image} alt={name} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-medium text-primary">{name}</h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{description}</p>
      </div>
    </div>
  </Link>;

// Testimonial component
const Testimonial = ({
  quote,
  author,
  role
}: {
  quote: string;
  author: string;
  role: string;
}) => <Card className="bg-gray-50 border-none shadow-sm">
    <CardContent className="pt-6">
      <div className="flex gap-2 mb-3">
        {[1, 2, 3, 4, 5].map(star => <Star key={star} size={16} className="text-yellow-400 fill-yellow-400" />)}
      </div>
      <p className="italic text-gray-600">"{quote}"</p>
      <div className="mt-4">
        <p className="font-medium">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </CardContent>
  </Card>;
export default function Index() {
  // SEO metadata
  const pageTitle = "Premium Organic Pulses & Spices | Daal Tadka";
  const pageDescription = "Discover high-quality, unpolished organic pulses and authentic spices. Delivered fresh to Bangalore tech professionals who value health without compromise.";
  return <div className="min-h-screen bg-background">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="organic pulses, spices, bangalore delivery, unpolished dal, premium spices" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/43485b87-1a3d-4a65-ae9d-39e3f258f90b.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Helmet>
      
      <Header />
      
      {/* Hero Section - Apple-like minimalism */}
      <section className="hero-gradient py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:gap-12">
            <div className="md:w-1/2 space-y-6 fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900">
                Premium <span className="text-primary">Organic</span> Essentials
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-md">
                Elevate your daily cooking with unpolished pulses and authentic spices.
              </p>
              <div className="flex gap-4 pt-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8">
                  <Link to="/products">
                    Explore Collection <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-primary text-primary hover:bg-primary/5">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            
            <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
              <img alt="Premium Organic Products" className="h-auto w-full max-w-md animate-float" src="/lovable-uploads/ed5efda9-e9d7-453f-acbe-657cd86daffc.png" />
            </div>
          </div>
        </div>
      </section>

      {/* USP Section - Nike-like clarity */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center font-medium mb-16 fade-up">Why Choose Our Products?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center fade-up stagger-1">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">100% Organic</h3>
              <p className="text-gray-600">
                Sourced directly from certified organic farms using sustainable farming practices
              </p>
            </div>
            <div className="text-center fade-up stagger-2">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Package className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">Unpolished Quality</h3>
              <p className="text-gray-600">
                Natural and unpolished pulses and spices that retain all nutritional value
              </p>
            </div>
            <div className="text-center fade-up stagger-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">Bangalore Delivery</h3>
              <p className="text-gray-600">
                Fast, reliable delivery to tech hubs and residential areas across Bangalore
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-12">
            <h2 className="text-3xl md:text-4xl font-medium mb-4 md:mb-0">Featured Products</h2>
            <Link to="/products" className="text-primary hover:underline flex items-center gap-1">
              View all products <ArrowRight size={14} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => <FeaturedProduct key={product.id} {...product} />)}
          </div>
        </div>
      </section>

      {/* Customer Reviews - Carousel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center font-medium mb-12">Our Customers Love Us</h2>
          
          <div className="mx-auto max-w-4xl px-8">
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <Testimonial quote="As a software engineer working long hours, I never compromise on the quality of food I eat. These organic pulses have become a staple in my daily diet." author="Rahul Sharma" role="Software Engineer, Bangalore" />
                </CarouselItem>
                <CarouselItem>
                  <Testimonial quote="The authentic flavor of these unpolished dals reminds me of my grandmother's cooking. Love that I can get this quality despite my busy schedule." author="Priya Mehta" role="UX Designer, Whitefield" />
                </CarouselItem>
                <CarouselItem>
                  <Testimonial quote="Having these premium quality spices delivered to my doorstep has made cooking enjoyable again. The difference in flavor is remarkable!" author="Arjun Nair" role="Product Manager, Koramangala" />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* SEO-rich content section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="seo-content max-w-3xl mx-auto">
            <h2 className="text-3xl font-medium mb-6">Premium Organic Pulses for Bangalore's Tech Professionals</h2>
            <p>
              In today's fast-paced tech environment across Bangalore's vibrant IT corridors from Electronic City to Whitefield, maintaining a healthy diet can be challenging. Our premium organic pulses and authentic spices bridge the gap between convenience and nutrition, ensuring you don't compromise on health despite demanding schedules.
            </p>
            
            <h2>Why Unpolished Pulses Matter</h2>
            <p>
              Unlike commercially polished pulses, our unpolished variants retain the essential bran layer. This preservation significantly increases protein content, dietary fiber, and essential micronutrients - perfect for the health-conscious tech professional looking to maintain optimal wellness and sustained energy throughout long workdays.
            </p>
            
            <h2>Authentic Spices from Source</h2>
            <p>
              Our carefully curated spice collection features authentic varieties sourced directly from traditional growing regions across India. Each batch undergoes rigorous quality testing to ensure maximum flavor, aroma, and nutritional benefits - bringing the authentic taste of home-cooked meals to your Bangalore apartment.
            </p>
            
            <h2>Designed for Bangalore's Tech Community</h2>
            <p>
              With reliable delivery across Bangalore's tech hubs including Koramangala, HSR Layout, Indiranagar, and Whitefield, we ensure your pantry stays stocked with nutritious essentials without disrupting your demanding schedule. Our convenient online ordering system and flexible delivery windows cater specifically to the unique lifestyle of technology professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6 text-primary">Ready to elevate your daily nutrition?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Experience the difference premium organic pulses and spices can make in your daily cooking and overall wellbeing.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-10 py-6 text-lg">
            <Link to="/products">
              Shop Our Collection <ShoppingCart className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>;
}