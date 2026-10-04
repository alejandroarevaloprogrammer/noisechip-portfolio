import type { WorkCategory } from "@/data/categories";

export type WorkMediaType = "image" | "gif";

export interface WorkProjectReference {
  slug: string;
  title: string;
}

export interface WorkItem {
  id: string;
  title: string;
  details?: string;
  media: string;
  width: number;
  height: number;
  mediaType: WorkMediaType;
  categories: WorkCategory[];
  tags?: string[];
  alt: string;
  project?: WorkProjectReference;
}