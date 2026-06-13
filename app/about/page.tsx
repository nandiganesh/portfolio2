import type { Metadata } from "next";
import Image from "next/image";
import { SITE, STACK } from "@/lib/data";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/Motion";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${SITE.name}, a ${SITE.role} based in ${SITE.location}. ${SITE.shortBio}`,
  alternates: { canonical: `${SITE.url}/about` },
};

export default function AboutPage() {
  return (
    <section className="px-6 pt-40 pb-32">
      <div className="max-w-content mx-auto">
        <Reveal>
          <p className="text-accent text-sm font-mono mb-3 tracking-wider">
            [ ABOUT ]
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-medium tracking-tight mb-16">
            Hi, I&apos;m {SITE.name.split(" ")[0]}.
          </h1>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          <Reveal className="md:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border bg-surface">
              {/* Replace with your photo */}
              <Image
                src="/profile.jpg"
                alt={SITE.name}
                fill
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-7">
            <div className="prose prose-invert max-w-none text-lg leading-relaxed text-muted whitespace-pre-line">
              {SITE.longBio}
            </div>
            <div className="mt-8 flex flex-col gap-2 text-sm">
              <p>
                <span className="text-foreground font-medium">Location:</span>{" "}
                <span className="text-muted">{SITE.location}</span>
              </p>
              <p>
                <span className="text-foreground font-medium">Email:</span>{" "}
                <a href={`mailto:${SITE.email}`} className="text-accent hover:underline">
                  {SITE.email}
                </a>
              </p>
              <p>
                <span className="text-foreground font-medium">Resume:</span>{" "}
                <a href={SITE.resumeUrl} className="text-accent hover:underline">
                  Download PDF
                </a>
              </p>
            </div>
          </Reveal>
        </div>

        {/* Stack grid */}
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-8">
            Skills & Tools
          </h2>
        </Reveal>
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3" staggerDelay={0.04}>
          {STACK.map((tech) => (
            <StaggerItem key={tech}>
              <div className="border border-border rounded-xl px-5 py-4 text-center font-mono text-sm hover:border-accent hover:text-accent transition-colors">
                {tech}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
