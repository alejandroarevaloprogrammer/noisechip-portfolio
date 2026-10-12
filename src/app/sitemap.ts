import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://noisechip.com";

  const staticPages = [
    "",
    "/work",
    "/projects",
    "/about",
    "/contact",
  ];

  const pages = staticPages.map((path) => ({
    url: `${baseUrl}${path}/`,
  }));

  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}/`,
  }));

  return [...pages, ...projectPages];
}