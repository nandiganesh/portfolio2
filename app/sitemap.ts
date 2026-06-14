import { MetadataRoute } from "next";
import { SITE, PROJECTS } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: SITE.url, priority: 1 },
    { url: `${SITE.url}/projects`, priority: 0.9 },
    { url: `${SITE.url}/work`, priority: 0.9 },
    { url: `${SITE.url}/experience`, priority: 0.8 },
    { url: `${SITE.url}/about`, priority: 0.8 },
    { url: `${SITE.url}/contact`, priority: 0.7 },
  ].map((page) => ({
    url: page.url,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: page.priority,
  }));

  const projectPages = PROJECTS.map((p) => ({
    url: `${SITE.url}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...projectPages];
}
