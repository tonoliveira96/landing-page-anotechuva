import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://anotechuva.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date("2026-09-15"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/privacidade`,
      lastModified: new Date("2026-09-17"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/termos-de-uso`,
      lastModified: new Date("2026-09-17"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/exclusao-de-dados`,
      lastModified: new Date("2026-09-17"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
