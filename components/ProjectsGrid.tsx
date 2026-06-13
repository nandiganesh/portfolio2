"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { StaggerContainer, StaggerItem } from "./Motion";

export default function ProjectsGrid() {
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    PROJECTS.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return ["All", ...Array.from(tags)];
  }, []);

  const [activeTag, setActiveTag] = useState("All");

  const filtered = useMemo(() => {
    if (activeTag === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <div className="mt-12">
      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mb-12">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`text-sm font-mono rounded-full px-4 py-2 border transition-colors ${
              activeTag === tag
                ? "bg-accent text-background border-accent"
                : "border-border text-muted hover:text-foreground hover:border-foreground"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <StaggerContainer
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        staggerDelay={0.08}
      >
        {filtered.map((project) => (
          <StaggerItem key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              className="group block rounded-2xl border border-border overflow-hidden hover:border-accent/50 transition-colors"
            >
              <div className="relative aspect-video overflow-hidden bg-surface">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-2xl font-medium group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={20}
                    className="text-muted group-hover:text-accent group-hover:rotate-45 transition-all"
                  />
                </div>
                <p className="text-sm text-muted mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-muted border border-border rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
