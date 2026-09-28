import type { WorkCategory } from "@/data/categories";

export type ProjectStatus = "completed" | "in-development";

export interface ProjectMedia {
  src: string;
  type: "image" | "gif";
  alt: string;
}

export interface Project {
  slug: string;
  title: string;
  year: number;
  status: ProjectStatus;
  genre: string;
  role: string;
  shortDescription: string;
  description?: string;
  disciplines: WorkCategory[];
  cover: string;
  coverWidth: number;
  coverHeight: number;
  gallery: ProjectMedia[];
  relatedWork?: string[];
  featured: boolean;
}