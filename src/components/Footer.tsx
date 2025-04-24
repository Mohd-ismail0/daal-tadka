import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <Separator />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
            &copy; {currentYear} Advista Marketing Pvt Ltd. All rights reserved.
          </p>
          <div className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-right">
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