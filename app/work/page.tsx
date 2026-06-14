import type { Metadata } from "next";
import { SITE } from "@/lib/data";
import WorkGrid from "@/components/WorkGrid";
import { Reveal } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Work",
  description: `Freelance projects built by ${SITE.name} — websites, web apps, and digital experiences crafted for real clients.`,
  alternates: { canonical: `${SITE.url}/work` },
};

export default function WorkPage() {
  return (
    <section className="px-6 pt-40 pb-32">
      <div className="max-w-content mx-auto">
        <Reveal>
          <p className="text-accent text-sm font-mono mb-3 tracking-wider">
            [ FREELANCE WORK ]
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-medium tracking-tight mb-6">
            Client Projects
          </h1>
          <p className="text-muted max-w-xl text-lg">
            A showcase of websites and web apps I&apos;ve designed and developed
            for clients — from AI platforms to e-commerce stores.
          </p>
        </Reveal>

        <WorkGrid />
      </div>
    </section>
  );
}
