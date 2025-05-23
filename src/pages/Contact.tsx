import { ContactForm } from "@/components/ui/contact-form";
import { Header } from "@/components/Header";
export default function Contact() {
  return <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-[#2E7D32]">Contact Us</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-[#2E7D32]">Get in Touch</h2>
              <p className="text-foreground">
                Have questions about our premium pulses? We'd love to hear from you. Send us a message
                and we'll respond as soon as possible.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-[#2E7D32]">Advista Marketing Pvt Ltd</h3>
                  <p className="text-foreground">
                    #273, 2nd Main, 1st Block, <br /> R.T Nagar, Bangalore - 560032
                  </p>
                  <p className="text-foreground mt-1">
                    Website: <a href="https://advistaltd.com" target="_blank" rel="noopener noreferrer" className="hover:underline text-primary">advistaltd.com</a>
                  </p>
                </div>
                <p className="flex items-center space-x-3">
                  <span className="font-medium text-[#2E7D32]">Email:</span>
                  <span className="text-foreground">admin@advistaltd.com</span>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="font-medium text-[#2E7D32]">Phone:</span>
                  <span className="text-foreground">+91 9164015302</span>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="font-medium text-[#2E7D32]">FSSAI:</span>
                  <span className="text-foreground">11225998000056</span>
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </main>
    </div>;
}
