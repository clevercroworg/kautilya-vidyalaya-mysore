import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://kautilyavidyalaya.edu.in/sitemap.xml",
    host: "https://kautilyavidyalaya.edu.in",
  };
}
