import type { Metadata } from "next";
import { SITE, SOCIALS } from "@/lib/data";
import { Reveal } from "@/components/Motion";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${SITE.name} for freelance work, full-time roles, or collaboration.`,
  alternates: { canonical: `${SITE.url}/contact` },
};

export default function ContactPage() {
  return (
    <section className="px-6 pt-40 pb-32">
      <div className="max-w-content mx-auto">
        <Reveal>
          <p className="text-accent text-sm font-mono mb-3 tracking-wider">
            [ CONTACT ]
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-medium tracking-tight mb-6">
            Let&apos;s work together.
          </h1>
          <p className="text-muted text-lg max-w-xl mb-16">
            Have a project, role, or idea you&apos;d like to discuss? Fill out
            the form below or reach me directly via email or social.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-7">
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-5">
            <div className="border border-border rounded-2xl p-8 sticky top-32">
              <p className="text-sm text-muted mb-6">Or reach me at</p>
              <a
                href={`mailto:${SITE.email}`}
                className="font-display text-2xl md:text-3xl font-medium hover:text-accent transition-colors block mb-8 break-all"
              >
                {SITE.email}
              </a>
              <div className="flex flex-col gap-3">
                {SOCIALS.filter((s) => s.label !== "Email").map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-accent transition-colors"
                  >
                    {s.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
