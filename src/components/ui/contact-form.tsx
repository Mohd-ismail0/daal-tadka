import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";

function encodeFormData(form: HTMLFormElement) {
  const formData = new FormData(form);
  const params = new URLSearchParams();
  formData.forEach((value, key) => {
    params.append(key, String(value));
  });
  return params.toString();
}

function isLocalHost() {
  if (typeof window === "undefined") return false;
  return ["localhost", "127.0.0.1"].includes(window.location.hostname);
}

export function ContactForm() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmitting(true);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData(form),
      });

      // Vite/local hosts cannot process Netlify form POSTs; still complete the UX flow.
      if (!response.ok && !isLocalHost() && !import.meta.env.DEV) {
        throw new Error(`Form submission failed (${response.status})`);
      }

      navigate("/thank-you");
    } catch {
      if (isLocalHost() || import.meta.env.DEV) {
        navigate("/thank-you");
        return;
      }
      toast.error("We couldn't send your message. Please try again or email admin@advistaltd.com.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      name="contact"
      method="POST"
      action="/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-6 w-full max-w-md"
    >
      <input type="hidden" name="form-name" value="contact" />

      <p className="hidden">
        <label>
          Don't fill this out if you're human: <input name="bot-field" />
        </label>
      </p>

      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <Input id="name" name="name" required autoComplete="name" className="w-full" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <Textarea id="message" name="message" required className="w-full min-h-[150px]" />
      </div>
      <Button type="submit" className="w-full" disabled={submitting}>
        {submitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
