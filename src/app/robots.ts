import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://anotechuva.com/sitemap.xml",
    host: "https://anotechuva.com",
  };
}
