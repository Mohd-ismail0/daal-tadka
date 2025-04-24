import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 flex flex-col items-center justify-center text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mb-6" />
        <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Your message has been sent successfully. We'll get back to you soon.
        </p>
        <Button asChild>
          <Link to="/">Return to Home</Link>
        </Button>
      </main>
    </div>
  );
} 