import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { PROJECTS, SITE } from "@/lib/data";
import { Reveal } from "@/components/Motion";

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `${SITE.url}/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} — ${SITE.name}`,
      description: project.description,
      images: [{ url: project.image, width: 1200, height: 630, alt: project.title }],
      type: "article",
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    creator: { "@type": "Person", name: SITE.name },
    url: `${SITE.url}/projects/${project.slug}`,
    dateCreated: project.year,
    keywords: project.tags.join(", "),
  };

  return (
    <article className="px-6 pt-40 pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-content mx-auto">
        <Reveal>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors mb-10"
          >
            <ArrowLeft size={16} /> Back to projects
          </Link>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono text-muted border border-border rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-medium tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="text-muted text-lg max-w-2xl mb-8">
            {project.description}
          </p>

          <div className="flex gap-4 mb-12">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background"
              >
                Live Site <ArrowUpRight size={16} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-accent hover:text-accent transition-colors"
              >
                <Github size={16} /> Source
              </a>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-border mb-16">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </Reveal>

        {(project.problem || project.approach || project.outcome) && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {project.problem && (
              <Reveal delay={0.1}>
                <h3 className="font-display text-xl mb-3 text-accent">
                  The Problem
                </h3>
                <p className="text-muted leading-relaxed">{project.problem}</p>
              </Reveal>
            )}
            {project.approach && (
              <Reveal delay={0.2}>
                <h3 className="font-display text-xl mb-3 text-accent">
                  The Approach
                </h3>
                <p className="text-muted leading-relaxed">{project.approach}</p>
              </Reveal>
            )}
            {project.outcome && (
              <Reveal delay={0.3}>
                <h3 className="font-display text-xl mb-3 text-accent">
                  The Outcome
                </h3>
                <p className="text-muted leading-relaxed">{project.outcome}</p>
              </Reveal>
            )}
          </div>
        )}

        {project.longDescription && (
          <Reveal>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-muted">
                {project.longDescription}
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </article>
  );
}
