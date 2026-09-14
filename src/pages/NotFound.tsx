import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { PageSeo } from "@/components/PageSeo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <PageSeo
        title="Page Not Found | Daal Tadka"
        description="The page you are looking for does not exist. Browse Daal Tadka premium unpolished pulses instead."
      />
      <Header />
      <main className="flex items-center justify-center px-4 py-24">
        <div className="text-center max-w-md">
          <h1 className="text-5xl font-bold mb-4 text-primary">404</h1>
          <p className="text-xl text-gray-600 mb-8">Oops! This page could not be found.</p>
          <Button asChild className="rounded-full">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
