import { STACK } from "@/lib/data";
import { Reveal } from "./Motion";

export default function TechStack() {
  // Duplicate the array for a seamless infinite marquee
  const items = [...STACK, ...STACK];

  return (
    <section className="py-20 border-y border-border overflow-hidden">
      <Reveal className="px-6 max-w-content mx-auto mb-10">
        <p className="text-accent text-sm font-mono mb-3 tracking-wider">
          [ 02 — TOOLKIT ]
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-medium tracking-tight">
          Technologies I work with
        </h2>
      </Reveal>

      <div className="relative">
        <div className="marquee-track">
          {items.map((tech, i) => (
            <span
              key={i}
              className="font-display text-5xl md:text-7xl font-medium text-muted/30 px-8 whitespace-nowrap flex items-center gap-8"
            >
              {tech}
              <span className="text-accent text-3xl">✦</span>
            </span>
          ))}
        </div>
        {/* Edge fade */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
