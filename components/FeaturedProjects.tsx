"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { Reveal } from "./Motion";

export default function FeaturedProjects() {
  const featured = PROJECTS.filter((p) => p.featured);

  return (
    <section className="px-6 py-32">
      <div className="max-w-content mx-auto">
        <Reveal className="flex items-end justify-between mb-16">
          <div>
            <p className="text-accent text-sm font-mono mb-3 tracking-wider">
              [ 01 — SELECTED WORK ]
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-medium tracking-tight">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent transition-colors"
          >
            View all <ArrowUpRight size={16} />
          </Link>
        </Reveal>

        <div className="flex flex-col gap-2">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.05}>
              <Link
                href={`/projects/${project.slug}`}
                className="group relative grid grid-cols-1 md:grid-cols-12 items-center gap-6 border-t border-border py-8 transition-colors hover:bg-surface/50 px-4 -mx-4 rounded-lg"
              >
                <div className="md:col-span-1 font-mono text-sm text-muted">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className="md:col-span-4">
                  <h3 className="font-display text-2xl md:text-3xl font-medium group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted max-w-sm">
                    {project.description}
                  </p>
                </div>

                <div className="md:col-span-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-muted border border-border rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="md:col-span-2 text-sm text-muted font-mono">
                  {project.year}
                </div>

                <div className="md:col-span-1 flex justify-end">
                  <div className="rounded-full border border-border p-3 transition-all duration-300 group-hover:bg-accent group-hover:border-accent group-hover:rotate-45">
                    <ArrowUpRight
                      size={18}
                      className="transition-colors group-hover:text-background"
                    />
                  </div>
                </div>

                {/* Hover preview image — floats near cursor */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="hidden md:block absolute right-32 top-1/2 -translate-y-1/2 w-64 h-40 rounded-xl overflow-hidden border border-border pointer-events-none z-10 shadow-2xl"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </Link>
            </Reveal>
          ))}
          <div className="border-t border-border" />
        </div>

        <Reveal className="mt-10 md:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent"
          >
            View all projects <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
