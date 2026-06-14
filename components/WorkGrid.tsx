"use client";

import { useState, useMemo, useCallback } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FREELANCE_WORK } from "@/lib/data";
import { StaggerContainer, StaggerItem } from "./Motion";

function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-border overflow-hidden bg-surface/30 animate-pulse">
      {/* Image skeleton */}
      <div className="relative aspect-video bg-surface">
        <div className="absolute inset-0 skeleton-shimmer" />
      </div>
      {/* Content skeleton */}
      <div className="p-5 space-y-3">
        <div className="flex items-center justify-between">
          <div className="h-5 w-32 bg-border/60 rounded-md" />
          <div className="h-4 w-4 bg-border/60 rounded" />
        </div>
        <div className="space-y-2">
          <div className="h-3.5 w-full bg-border/40 rounded-md" />
          <div className="h-3.5 w-3/4 bg-border/40 rounded-md" />
        </div>
        <div className="h-6 w-20 bg-border/40 rounded-full" />
      </div>
    </div>
  );
}

function WorkCard({
  work,
}: {
  work: (typeof FREELANCE_WORK)[number];
}) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <a
      href={work.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border border-border overflow-hidden hover:border-accent/50 transition-all duration-300 bg-surface/30 hover:bg-surface/60"
    >
      {/* Image preview */}
      <div className="relative aspect-video overflow-hidden bg-surface">
        {/* Skeleton shimmer shown while image loads */}
        {!imageLoaded && (
          <div className="absolute inset-0 skeleton-shimmer z-10" />
        )}
        <Image
          src={work.image}
          alt={work.title}
          fill
          className={`object-cover object-top transition-all duration-700 group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onLoad={() => setImageLoaded(true)}
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
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
  );
}

export default function WorkGrid() {
  const [isInitialLoad, setIsInitialLoad] = useState(true);

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

  // Dismiss initial skeleton after a brief delay
  const handleMounted = useCallback(() => {
    const timer = setTimeout(() => setIsInitialLoad(false), 600);
    return () => clearTimeout(timer);
  }, []);

  // Trigger on mount
  useState(() => {
    handleMounted();
  });

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

      {/* Show skeleton grid on initial load */}
      {isInitialLoad ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : (
        <StaggerContainer
          key={activeCategory}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {filtered.map((work) => (
            <StaggerItem key={work.title}>
              <WorkCard work={work} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      )}
    </div>
  );
}
