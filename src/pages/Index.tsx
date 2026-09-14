import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Package, ShoppingCart, Star, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { products } from "@/productsData";
import { PageSeo } from "@/components/PageSeo";

const FeaturedProduct = ({
  id,
  name,
  shortName,
  image,
  description,
}: (typeof products)[0]) => (
  <Link to={`/products/${id}`} className="group">
    <div className="product-card overflow-hidden rounded-2xl bg-card">
      <div className="aspect-square overflow-hidden bg-gray-50">
        <img
          src={image}
          alt={shortName || name}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-medium text-primary line-clamp-2">
          {shortName || name.split("|")[0].trim()}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{description}</p>
      </div>
    </div>
  </Link>
);

const Testimonial = ({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) => (
  <Card className="bg-gray-50 border-none shadow-sm">
    <CardContent className="pt-6">
      <div className="flex gap-2 mb-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} size={16} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="italic text-gray-600">"{quote}"</p>
      <div className="mt-4">
        <p className="font-medium">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </CardContent>
  </Card>
);

export default function Index() {
  const pageTitle = "Premium Unpolished Pulses | Daal Tadka";
  const pageDescription =
    "Discover high-quality, unpolished pulses from Daal Tadka. FSSAI certified Tur Dal, packed hygienically and delivered across Bangalore.";

  return (
    <div className="min-h-screen bg-background">
      <PageSeo
        title={pageTitle}
        description={pageDescription}
        keywords="unpolished dal, tur dal, toor dal, daal tadka, bangalore pulses, premium dal"
        image="/images/logo-main.png"
      />

      <Header />

      <section className="hero-gradient py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:gap-12">
            <div className="md:w-1/2 space-y-6 fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900">
                Premium <span className="text-primary">Unpolished</span> Pulses
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-md">
                Elevate your daily cooking with naturally unpolished dal, packed for freshness.
              </p>
              <div className="flex gap-4 pt-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8">
                  <Link to="/products">
                    Explore Collection <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 border-primary text-primary hover:bg-primary/5"
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>

            <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
              <img
                alt="Daal Tadka premium pulses"
                className="h-auto w-full max-w-md animate-float"
                src="/images/logo-main.png"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center font-medium mb-16 fade-up">
            Why Choose Our Products?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center fade-up stagger-1">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">100% Natural</h3>
              <p className="text-gray-600">
                Unpolished pulses with no artificial polishing, sourced from trusted Indian farms
              </p>
            </div>
            <div className="text-center fade-up stagger-2">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Package className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">Unpolished Quality</h3>
              <p className="text-gray-600">
                Natural, hygienically packed dal that retains taste, aroma, and nutritional value
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

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-12">
            <h2 className="text-3xl md:text-4xl font-medium mb-4 md:mb-0">Featured Products</h2>
            <Link to="/products" className="text-primary hover:underline flex items-center gap-1">
              View all products <ArrowRight size={14} />
            </Link>
          </div>

          <div className={`grid gap-8 ${products.length === 1 ? "max-w-md mx-auto" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}`}>
            {products.map((product) => (
              <FeaturedProduct key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center font-medium mb-12">Our Customers Love Us</h2>

          <div className="mx-auto max-w-4xl px-8">
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <Testimonial
                    quote="As a software engineer working long hours, I never compromise on the quality of food I eat. These unpolished pulses have become a staple in my daily diet."
                    author="Rahul Sharma"
                    role="Software Engineer, Bangalore"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Testimonial
                    quote="The authentic flavor of these unpolished dals reminds me of my grandmother's cooking. Love that I can get this quality despite my busy schedule."
                    author="Priya Mehta"
                    role="UX Designer, Whitefield"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Testimonial
                    quote="Having premium quality dal delivered in Bangalore has made weekday cooking easier. The texture and aroma are noticeably better than polished packets."
                    author="Arjun Nair"
                    role="Product Manager, Koramangala"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="seo-content max-w-3xl mx-auto">
            <h2 className="text-3xl font-medium mb-6">
              Premium Unpolished Pulses for Bangalore's Tech Professionals
            </h2>
            <p>
              In today's fast-paced tech environment across Bangalore's IT corridors from Electronic
              City to Whitefield, maintaining a healthy diet can be challenging. Our premium
              unpolished pulses bridge the gap between convenience and nutrition, so you don't have
              to compromise on everyday meals despite demanding schedules.
            </p>

            <h2>Why Unpolished Pulses Matter</h2>
            <p>
              Unlike commercially polished pulses, our unpolished variants retain more of their
              natural character. That means better flavour in sambhar, dal fry, and khichdi — and a
              more wholesome bowl for long workdays.
            </p>

            <h2>FSSAI Certified Quality</h2>
            <p>
              Daal Tadka Tur Dal is packed at MIS Agro Foods, Karnataka, and marketed by Advista
              Marketing Pvt Ltd, Bangalore. Every pouch is FSSAI licensed, resealable, and made for
              daily Indian cooking.
            </p>

            <h2>Designed for Bangalore's Tech Community</h2>
            <p>
              With a focus on Bangalore neighbourhoods including Koramangala, HSR Layout,
              Indiranagar, and Whitefield, we keep nutritious pantry staples easy to reach. Contact
              us for household or bulk orders.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6 text-primary">
            Ready to elevate your daily nutrition?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Experience the difference premium unpolished pulses can make in your daily cooking.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-10 py-6 text-lg">
            <Link to="/products">
              Shop Our Collection <ShoppingCart className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
