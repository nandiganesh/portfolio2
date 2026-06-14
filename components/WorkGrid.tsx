"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FREELANCE_WORK } from "@/lib/data";
import { StaggerContainer, StaggerItem } from "./Motion";

export default function WorkGrid() {
  const allCategories = useMemo(() => {
    const cats = new Set<string>();
    FREELANCE_WORK.forEach((w) => cats.add(w.category));
    return ["All", ...Array.from(cats)];
  }, []);

  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") return FREELANCE_WORK;
    return FREELANCE_WORK.filter((w) => w.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="mt-12">
      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mb-12">
        {allCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-sm font-mono rounded-full px-4 py-2 border transition-colors ${
              activeCategory === cat
                ? "bg-accent text-background border-accent"
                : "border-border text-muted hover:text-foreground hover:border-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <StaggerContainer
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        staggerDelay={0.08}
      >
        {filtered.map((work) => (
          <StaggerItem key={work.title}>
            <a
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-border overflow-hidden hover:border-accent/50 transition-all duration-300 bg-surface/30 hover:bg-surface/60"
            >
              {/* Image preview */}
              <div className="relative aspect-video overflow-hidden bg-surface">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="flex items-center gap-2 text-sm font-medium text-accent border border-accent rounded-full px-5 py-2.5 backdrop-blur-sm">
                    Visit Site <ExternalLink size={14} />
                  </span>
                </div>
              </div>

              {/* Card content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-lg font-medium group-hover:text-accent transition-colors">
                    {work.title}
                  </h3>
                  <ExternalLink
                    size={16}
                    className="text-muted group-hover:text-accent group-hover:rotate-12 transition-all flex-shrink-0"
                  />
                </div>
                <p className="text-sm text-muted mb-3 line-clamp-2">
                  {work.description}
                </p>
                <span className="text-xs font-mono text-muted border border-border rounded-full px-3 py-1">
                  {work.category}
                </span>
              </div>
            </a>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
