import { ContactForm } from "@/components/ui/contact-form";
import { Header } from "@/components/Header";
import { PageSeo } from "@/components/PageSeo";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <PageSeo
        title="Contact Us | Daal Tadka"
        description="Get in touch with Advista Marketing Pvt Ltd about Daal Tadka pulses. Email admin@advistaltd.com or call +91 9164015302."
        keywords="daal tadka contact, advista marketing bangalore, buy unpolished dal"
      />
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-primary">Contact Us</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-primary">Get in Touch</h2>
              <p className="text-foreground">
                Have questions about our premium pulses? We'd love to hear from you. Send us a
                message and we'll respond as soon as possible.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-primary">Advista Marketing Pvt Ltd</h3>
                  <p className="text-foreground">
                    #273, 2nd Main, 1st Block, <br /> R.T Nagar, Bangalore - 560032
                  </p>
                  <p className="text-foreground mt-1">
                    Website:{" "}
                    <a
                      href="https://advistaltd.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-primary"
                    >
                      advistaltd.com
                    </a>
                  </p>
                </div>
                <p className="flex items-center space-x-3">
                  <span className="font-medium text-primary">Email:</span>
                  <a href="mailto:admin@advistaltd.com" className="text-foreground hover:text-primary">
                    admin@advistaltd.com
                  </a>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="font-medium text-primary">Phone:</span>
                  <a href="tel:+919164015302" className="text-foreground hover:text-primary">
                    +91 9164015302
                  </a>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="font-medium text-primary">FSSAI:</span>
                  <span className="text-foreground">11225998000056</span>
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
}
