import { MetadataRoute } from "next";
import { SITE } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Standard search engine crawlers
        userAgent: "*",
        allow: "/",
      },
      {
        // Explicitly allow AI crawlers for AEO (AI Engine Optimization)
        // so tools like ChatGPT, Perplexity, and Claude can index your portfolio
        userAgent: ["GPTBot", "ChatGPT-User", "PerplexityBot", "ClaudeBot", "Google-Extended"],
        allow: "/",
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
