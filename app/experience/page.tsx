import type { Metadata } from "next";
import { EXPERIENCE, SITE } from "@/lib/data";
import { Reveal } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Experience",
  description: `Work experience and career timeline of ${SITE.name}, ${SITE.role}.`,
  alternates: { canonical: `${SITE.url}/experience` },
};

export default function ExperiencePage() {
  return (
    <section className="px-6 pt-40 pb-32">
      <div className="max-w-content mx-auto">
        <Reveal>
          <p className="text-accent text-sm font-mono mb-3 tracking-wider">
            [ EXPERIENCE ]
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-medium tracking-tight mb-16">
            Career Timeline
          </h1>
        </Reveal>

        <div className="relative border-l border-border ml-3">
          {EXPERIENCE.map((item, i) => (
            <Reveal key={item.company} delay={i * 0.1} className="relative pl-10 pb-16 last:pb-0">
              <span className="absolute left-0 top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-accent" />
              <p className="font-mono text-sm text-muted mb-2">{item.period}</p>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-1">
                {item.role}
              </h2>
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent text-sm hover:underline"
                >
                  {item.company}
                </a>
              ) : (
                <p className="text-accent text-sm">{item.company}</p>
              )}
              <p className="mt-4 text-muted leading-relaxed max-w-2xl">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
