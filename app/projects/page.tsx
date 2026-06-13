import type { Metadata } from "next";
import { SITE } from "@/lib/data";
import ProjectsGrid from "@/components/ProjectsGrid";
import { Reveal } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Projects",
  description: `A collection of projects built by ${SITE.name} — ${SITE.role}. Explore case studies covering web apps, tools, and experiments.`,
  alternates: { canonical: `${SITE.url}/projects` },
};

export default function ProjectsPage() {
  return (
    <section className="px-6 pt-40 pb-32">
      <div className="max-w-content mx-auto">
        <Reveal>
          <p className="text-accent text-sm font-mono mb-3 tracking-wider">
            [ PROJECTS ]
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-medium tracking-tight mb-6">
            All Projects
          </h1>
          <p className="text-muted max-w-xl text-lg">
            A selection of things I&apos;ve built — from production apps to
            weekend experiments. Each one taught me something new.
          </p>
        </Reveal>

        <ProjectsGrid />
      </div>
    </section>
  );
}
