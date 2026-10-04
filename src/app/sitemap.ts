// src/app/sitemap.ts
import { MetadataRoute } from "next";
import { businessCases } from "@/businessCases";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://complexmedia.ru";
  const lastModified = new Date("2026-08-11");
  const seoLastModified = new Date("2026-09-22");

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/services/web-development`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/ai-bots`,
      lastModified: seoLastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/voice-ai-consultant`,
      lastModified: seoLastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/ai-agents`,
      lastModified: seoLastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/ai-sales-automation`,
      lastModified: seoLastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/executive-ai-assistant`,
      lastModified: seoLastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/ai-consulting`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/digital-asset`,
      lastModified: seoLastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/ai-platform`,
      lastModified: seoLastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified: seoLastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...[
      "ai-sales-automation",
      "corporate-knowledge-base",
      "executive-ai-assistant",
      "crm-ai-agents",
      "voice-ai-consultant",
      "ai-implementation",
      "ai-support-agent",
    ].map((slug) => ({
      url: `${baseUrl}/solutions/${slug}`,
      lastModified: seoLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles/ai-implementation-business`,
      lastModified: seoLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles/ai-for-sales`,
      lastModified: seoLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles/corporate-knowledge-base`,
      lastModified: seoLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles/ai-agent-vs-chatbot`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...businessCases.map((item) => ({
      url: `${baseUrl}/cases/${item.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    // Добавьте сюда /portfolio, когда включите его
  ];
}
