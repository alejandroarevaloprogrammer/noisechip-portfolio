import type { WorkCategory } from "@/data/categories";

export type WorkMediaType = "image" | "gif";

export type WorkPresentationSize =
  | "compact"
  | "standard"
  | "large"
  | "wide";

export interface WorkItem {
  id: string;
  title: string;
  media: string;
  width: number;
  height: number;
  mediaType: WorkMediaType;
  categories: WorkCategory[];
  tags?: string[];
  project?: string;
  featured: boolean;
  alt: string;
  presentation?: {
    size: WorkPresentationSize;
  };
}