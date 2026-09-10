import { MetadataRoute } from "next";
import { eventsDetailData } from "@/data/eventsDetailData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kautilyavidyalaya.edu.in";
  const currentDate = new Date().toISOString();

  const staticRoutes = [
    { path: "", changeFrequency: "daily" as const, priority: 1.0 },
    { path: "/about-us", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/chairmans-desk", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/principals-message", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/committee-members", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/teaching-faculty", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/mandatory-public-disclosure", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/what-it-means-at-kautilya", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/other-facilities", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/co-curricular-activities", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/sports-and-physical-education", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/life-skills", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/result-graph", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/monthly-newsletter", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/news-circular", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/awards-and-achievements", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/events-gallery", changeFrequency: "weekly" as const, priority: 0.85 },
    { path: "/alumni-forum", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/faqs", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/parent-perspectives", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/fee-structure", changeFrequency: "weekly" as const, priority: 0.95 },
    { path: "/brochure-download", changeFrequency: "monthly" as const, priority: 0.85 },
    { path: "/podcast", changeFrequency: "weekly" as const, priority: 0.85 },
    { path: "/contact-us", changeFrequency: "weekly" as const, priority: 0.95 },
  ];

  const eventRoutes = eventsDetailData.map((event) => ({
    path: `/events-gallery/${event.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const allRoutes = [...staticRoutes, ...eventRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
