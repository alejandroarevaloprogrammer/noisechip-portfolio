import type { WorkCategory } from "@/data/categories";
import type { WorkItem, WorkMediaType } from "@/types/work";

interface CreateWorkItemsOptions {
  category: WorkCategory;
  directory: string;
  prefix: string;
  numbers: number[];
  mediaType?: WorkMediaType;
  gifNumbers?: number[];
  width?: number;
  height?: number;
  dimensions?: Record<number, { width: number; height: number }>;
}

function createWorkItems({
  category,
  directory,
  prefix,
  numbers,
  mediaType = "image",
  gifNumbers = [],
  width = 800,
  height = 800,
  dimensions = {},
}: CreateWorkItemsOptions): WorkItem[] {
  return numbers.map((number) => {
    const itemMediaType = gifNumbers.includes(number) ? "gif" : mediaType;
    const extension = itemMediaType === "gif" ? "gif" : "png";
    const paddedNumber = String(number).padStart(2, "0");
    const itemDimensions = dimensions[number] ?? { width, height };

    return {
      id: `${category}-${paddedNumber}`,
      title: `${category}-${paddedNumber}`,
      media: `/work/${directory}/${prefix}${paddedNumber}.${extension}`,
      width: itemDimensions.width,
      height: itemDimensions.height,
      mediaType: itemMediaType,
      categories: [category],
      featured: false,
      alt: `Noisechip ${category} pixel art ${number}.`,
    };
  });
}

export const workItems: WorkItem[] = [
  // Animations — 10
  ...createWorkItems({
    category: "animations",
    directory: "animations",
    prefix: "ani",
    numbers: [2, 5, 6, 7, 8, 9, 10, 11, 13, 14],
    mediaType: "gif",
  }),

  // Characters — 8
  ...createWorkItems({
    category: "characters",
    directory: "characters",
    prefix: "char",
    numbers: [2, 3, 4, 5, 7, 8, 9, 10],
  }),

  // Characters — Various — 2
  {
    id: "characters-var02",
    title: "Creature Sprites",
    media: "/work/characters/var02.png",
    width: 800,
    height: 800,
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
    width: 800,
    height: 800,
    mediaType: "image",
    categories: ["characters"],
    tags: ["portrait", "expressions"],
    featured: false,
    alt: "Pixel art character portrait expressions by Noisechip.",
  },

  // Environments — 10
  ...createWorkItems({
    category: "environments",
    directory: "environments",
    prefix: "bg",
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    gifNumbers: [6, 10],
    dimensions: {
      1: { width: 640, height: 360 },
      2: { width: 768, height: 432 },
      3: { width: 640, height: 576 },
      4: { width: 768, height: 432 },
      5: { width: 768, height: 432 },
      6: { width: 768, height: 432 },
      7: { width: 768, height: 432 },
      8: { width: 800, height: 800 },
      9: { width: 768, height: 432 },
      10: { width: 768, height: 432 },
    },
  }),

  // UI / GUI — 7
  ...createWorkItems({
    category: "ui-gui",
    directory: "ui-gui",
    prefix: "gui",
    numbers: [1, 2, 3, 4, 5, 6, 7],
    dimensions: {
      1: { width: 800, height: 800 },
      2: { width: 768, height: 432 },
      3: { width: 640, height: 480 },
      4: { width: 640, height: 480 },
      5: { width: 768, height: 432 },
      6: { width: 768, height: 432 },
      7: { width: 640, height: 576 },
    },
  }),

  // Icons & Items — 4
  {
    id: "icons-items-var01",
    title: "Hats & Helmets",
    media: "/work/icons-items/var01.png",
    width: 800,
    height: 800,
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
    width: 800,
    height: 800,
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
    width: 800,
    height: 800,
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
    width: 800,
    height: 800,
    mediaType: "image",
    categories: ["icons-items"],
    tags: ["RPG", "inventory", "equipment"],
    featured: false,
    alt: "Pixel art RPG inventory items and equipment by Noisechip.",
  },

  // Illustrations — 7
  ...createWorkItems({
    category: "illustrations",
    directory: "illustrations",
    prefix: "illus",
    numbers: [1, 2, 3, 4, 5, 6, 7],
    dimensions: {
      1: { width: 768, height: 432 },
      2: { width: 768, height: 432 },
      3: { width: 768, height: 384 },
      4: { width: 768, height: 432 },
      5: { width: 768, height: 432 },
      6: { width: 512, height: 512 },
      7: { width: 400, height: 800 },
    },
  }),

  // Fonts — 7
  ...createWorkItems({
    category: "fonts",
    directory: "fonts",
    prefix: "font",
    numbers: [1, 2, 3, 4, 5, 6, 7],
  }),

  // Game Mockups — 19
  ...createWorkItems({
    category: "game-mockups",
    directory: "game-mockups",
    prefix: "mock",
    numbers: [
      2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
      20,
    ],
    dimensions: {
      2: { width: 768, height: 432 },
      3: { width: 768, height: 432 },
      4: { width: 640, height: 576 },
      5: { width: 640, height: 576 },
      6: { width: 640, height: 576 },
      7: { width: 640, height: 576 },
      8: { width: 768, height: 432 },
      9: { width: 640, height: 576 },
      10: { width: 768, height: 432 },
      11: { width: 640, height: 360 },
      12: { width: 640, height: 360 },
      13: { width: 960, height: 540 },
      14: { width: 360, height: 640 },
      15: { width: 360, height: 640 },
      16: { width: 768, height: 432 },
      17: { width: 768, height: 432 },
      18: { width: 288, height: 512 },
      19: { width: 800, height: 480 },
      20: { width: 768, height: 432 },
    },
  }),
];