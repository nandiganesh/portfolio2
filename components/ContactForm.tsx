"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // TODO: Replace with your form endpoint — e.g. Formspree, Resend API route, etc.
      // Example:
      // const res = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(data),
      // });
      // if (!res.ok) throw new Error("Failed");

      console.log("Form submitted:", data);
      await new Promise((r) => setTimeout(r, 1000)); // simulate request
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="border border-accent/30 bg-accent/5 rounded-2xl p-12 text-center"
      >
        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
          <Check size={24} className="text-background" />
        </div>
        <h3 className="font-display text-2xl mb-2">Message sent!</h3>
        <p className="text-muted">
          Thanks for reaching out — I&apos;ll get back to you soon.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div>
        <label htmlFor="name" className="block text-sm text-muted mb-2">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-muted mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 transition-colors"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-muted mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 transition-colors resize-none"
          placeholder="Tell me about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-background w-fit transition-opacity disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
        {status !== "loading" && <ArrowUpRight size={16} />}
      </button>

      {status === "error" && (
        <p className="text-red-400 text-sm">
          Something went wrong. Please try again or email me directly.
        </p>
      )}
    </form>
  );
}
