import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { EXPERIENCE } from "@/lib/data";
import { Reveal } from "./Motion";

export default function ExperiencePreview() {
  return (
    <section className="px-6 py-32">
      <div className="max-w-content mx-auto">
        <Reveal className="mb-16">
          <p className="text-accent text-sm font-mono mb-3 tracking-wider">
            [ 03 — EXPERIENCE ]
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-medium tracking-tight">
            Where I&apos;ve worked
          </h2>
        </Reveal>

        <div className="flex flex-col">
          {EXPERIENCE.map((item, i) => (
            <Reveal key={item.company} delay={i * 0.05}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 border-t border-border py-8">
                <div className="md:col-span-3 font-mono text-sm text-muted">
                  {item.period}
                </div>
                <div className="md:col-span-3">
                  <h3 className="font-display text-xl font-medium">
                    {item.role}
                  </h3>
                  <p className="text-accent text-sm mt-1">{item.company}</p>
                </div>
                <p className="md:col-span-6 text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-border" />
        </div>

        <Reveal className="mt-10">
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent transition-colors"
          >
            Full experience timeline <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
