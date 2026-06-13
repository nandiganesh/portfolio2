import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/data";
import { Reveal, SplitText } from "./Motion";
import MagneticButton from "./MagneticButton";

export default function CTASection() {
  return (
    <section className="px-6 py-32">
      <div className="max-w-content mx-auto text-center">
        <Reveal>
          <p className="text-accent text-sm font-mono mb-6 tracking-wider">
            [ 04 — GET IN TOUCH ]
          </p>
        </Reveal>
        <h2 className="font-display text-[12vw] md:text-[7vw] font-medium leading-[1.05] tracking-tight">
          <SplitText text="Have a project" />
          <br />
          <span className="text-gradient-accent">
            <SplitText text="in mind?" delay={0.1} />
          </span>
        </h2>

        <Reveal delay={0.3} className="mt-10">
          <MagneticButton
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-semibold text-background"
          >
            Let&apos;s talk <ArrowUpRight size={20} />
          </MagneticButton>
          <p className="mt-6 text-muted text-sm">
            Or email me directly at{" "}
            <a href={`mailto:${SITE.email}`} className="text-foreground underline underline-offset-4">
              {SITE.email}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
