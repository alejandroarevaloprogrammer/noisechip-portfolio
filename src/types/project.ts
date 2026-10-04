import type { WorkCategory } from "@/data/categories";

export type ProjectStatus = "completed" | "in-development";

export type ProjectMediaType = "image" | "gif";

export type ProjectMediaGroup =
  | "environments"
  | "characters-animation"
  | "ui-gui"
  | "gameplay";

export interface ProjectMedia {
  src: string;
  type: ProjectMediaType;
  alt: string;
  width: number;
  height: number;
  group: ProjectMediaGroup;
  workCategory?: WorkCategory;
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
}