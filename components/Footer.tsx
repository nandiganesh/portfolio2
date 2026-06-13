import Link from "next/link";
import { SITE, SOCIALS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-content mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <p className="font-display text-3xl md:text-5xl font-medium tracking-tight">
              Let&apos;s build something{" "}
              <span className="text-gradient-accent">great</span> together.
            </p>
            <Link
              href="/contact"
              className="inline-flex mt-6 items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-105"
            >
              Get in touch →
            </Link>
          </div>

          <div className="flex flex-col gap-2 text-sm text-muted">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target={s.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>Built with Next.js, Tailwind & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
