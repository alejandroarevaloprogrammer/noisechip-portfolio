import type { WorkCategory } from "@/data/categories";
import type { WorkItem, WorkMediaType } from "@/types/work";

interface CreateWorkItemsOptions {
  category: WorkCategory;
  directory: string;
  prefix: string;
  numbers: number[];
  mediaType?: WorkMediaType;
  gifNumbers?: number[];
}

function createWorkItems({
  category,
  directory,
  prefix,
  numbers,
  mediaType = "image",
  gifNumbers = [],
}: CreateWorkItemsOptions): WorkItem[] {
  return numbers.map((number) => {
    const itemMediaType = gifNumbers.includes(number) ? "gif" : mediaType;
    const extension = itemMediaType === "gif" ? "gif" : "png";
    const paddedNumber = String(number).padStart(2, "0");

    return {
      id: `${category}-${paddedNumber}`,
      title: `${category}-${paddedNumber}`,
      media: `/work/${directory}/${prefix}${paddedNumber}.${extension}`,
      mediaType: itemMediaType,
      categories: [category],
      featured: false,
      alt: `Noisechip ${category} pixel art ${number}.`,
    };
  });
}

    export const workItems: WorkItem[] = [
    ...createWorkItems({
    category: "animations",
    directory: "animations",
    prefix: "ani",
    numbers: [2, 5, 6, 7, 8, 9, 10, 11, 13, 14],
    mediaType: "gif",
  }),
    ...createWorkItems({
    category: "characters",
    directory: "characters",
    prefix: "char",
    numbers: [2, 3, 4, 5, 7, 8, 9, 10],
  }),
  {
    id: "characters-var02",
    title: "Creature Sprites",
    media: "/work/characters/var02.png",
    mediaType: "image",
    categories: ["characters"],
    tags: ["creatures", "sprites"],
    featured: false,
    alt: "Pixel art creature sprites by Noisechip.",
  },
  {
    id: "characters-var05",
    title: "Portrait Expressions",
    media: "/work/characters/var05.png",
    mediaType: "image",
    categories: ["characters"],
    tags: ["portrait", "expressions"],
    featured: false,
    alt: "Pixel art character portrait expressions by Noisechip.",
  },
    ...createWorkItems({
    category: "environments",
    directory: "environments",
    prefix: "bg",
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    gifNumbers: [6, 10],
  }),
    ...createWorkItems({
    category: "ui-gui",
    directory: "ui-gui",
    prefix: "gui",
    numbers: [1, 2, 3, 4, 5, 6, 7],
  }),
    {
    id: "icons-items-var01",
    title: "Hats & Helmets",
    media: "/work/icons-items/var01.png",
    mediaType: "image",
    categories: ["icons-items"],
    tags: ["hats", "equipment"],
    featured: false,
    alt: "Pixel art hats and helmets by Noisechip.",
  },
  {
    id: "icons-items-var06",
    title: "Racing Cars",
    media: "/work/icons-items/var06.png",
    mediaType: "image",
    categories: ["icons-items"],
    tags: ["vehicles", "cars"],
    featured: false,
    alt: "Pixel art racing cars by Noisechip.",
  },
  {
    id: "icons-items-var07",
    title: "Spaceships & Enemies",
    media: "/work/icons-items/var07.png",
    mediaType: "image",
    categories: ["icons-items"],
    tags: ["spaceships", "enemies"],
    featured: false,
    alt: "Pixel art spaceships and enemies by Noisechip.",
  },
  {
    id: "icons-items-var08",
    title: "RPG Items",
    media: "/work/icons-items/var08.png",
    mediaType: "image",
    categories: ["icons-items"],
    tags: ["RPG", "inventory", "equipment"],
    featured: false,
    alt: "Pixel art RPG inventory items and equipment by Noisechip.",
  },
    ...createWorkItems({
    category: "illustrations",
    directory: "illustrations",
    prefix: "illus",
    numbers: [1, 2, 3, 4, 5, 6, 7],
  }),
    ...createWorkItems({
    category: "fonts",
    directory: "fonts",
    prefix: "font",
    numbers: [1, 2, 3, 4, 5, 6, 7],
  }),
    ...createWorkItems({
    category: "game-mockups",
    directory: "game-mockups",
    prefix: "mock",
    numbers: [
      2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
      12, 13, 14, 15, 16, 17, 18, 19, 20,
    ],
  }),
];