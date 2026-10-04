import {
  workCategories,
  type WorkCategory,
} from "@/data/categories";
import { projects } from "@/data/projects";

import type { WorkItem, WorkMediaType } from "@/types/work";



interface WorkMetadata {

  title: string;

  details: string;

}



interface CreateWorkItemsOptions {

  category: WorkCategory;

  directory: string;

  prefix: string;

  numbers: number[];

  metadata: Record<number, WorkMetadata>;

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

  metadata,

  mediaType = "image",

  gifNumbers = [],

  width = 800,

  height = 800,

  dimensions = {},

}: CreateWorkItemsOptions): WorkItem[] {

  return numbers.map((number) => {

    const itemMediaType = gifNumbers.includes(number)

      ? "gif"

      : mediaType;



    const extension =

      itemMediaType === "gif" ? "gif" : "png";



    const paddedNumber = String(number).padStart(2, "0");



    const itemDimensions = dimensions[number] ?? {

      width,

      height,

    };



    const itemMetadata = metadata[number];



    return {

      id: `${category}-${paddedNumber}`,

      title: itemMetadata.title,

      details: itemMetadata.details,

      media: `/work/${directory}/${prefix}${paddedNumber}.${extension}`,

      width: itemDimensions.width,

      height: itemDimensions.height,

      mediaType: itemMediaType,

      categories: [category],

      alt: `${itemMetadata.title} pixel art by Noisechip.`,

    };

  });

}



const standaloneWorkItems: WorkItem[] = [

  // Animations — 10

  ...createWorkItems({

    category: "animations",

    directory: "animations",

    prefix: "ani",

    numbers: [14, 13, 11, 10, 9, 8, 7, 6, 5, 2],

    mediaType: "gif",

    metadata: {

      14: {

        title: "Walking",

        details: "Side Scrolling • 16x24 • 4 Frames",

      },

      13: {

        title: "Various",

        details: "Top Down Front • 16x16 • 4 Frames",

      },

      11: {

        title: "Walking",

        details: "Top Down • 8 Directions • 16x20 • 4 Frames",

      },

      10: {

        title: "Walking & Death",

        details: "Side Scrolling • 16x16 • 4 Frames",

      },

      9: {

        title: "Moving",

        details: "Top Down • 4 Directions • 16x16 • 4 Frames",

      },

      8: {

        title: "Walking",

        details: "Top Down • 4 Directions • 16x16 • 4 Frames",

      },

      7: {

        title: "Running",

        details: "Side Scrolling • 24x32 • 6 Frames",

      },

      6: {

        title: "Various",

        details:

          "Vertical Scrolling • Various Sizes • Various Frames",

      },

      5: {

        title: "Idle",

        details: "Vertical Scrolling • Various Sizes • 4 Frames",

      },

      2: {

        title: "Moving & Action",

        details: "Side Scrolling • 16x16 • 6 Frames",

      },

    },

  }),



  // Characters — 10

  ...createWorkItems({

    category: "characters",

    directory: "characters",

    prefix: "char",

    numbers: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],

    metadata: {

      10: {

        title: "Various",

        details: "16x16",

      },

      9: {

        title: "Various",

        details: "32x32",

      },

      8: {

        title: "Various",

        details: "72x72",

      },

      7: {

        title: "RPG",

        details: "16x16",

      },

      6: {

        title: "Portrait With Expressions",

        details: "32x32",

      },

      5: {

        title: "Various",

        details: "16x16",

      },

      4: {

        title: "Action",

        details: "16x32",

      },

      3: {

        title: "Action",

        details: "96x48",

      },

      2: {

        title: "RPG",

        details: "18x16",

      },

      1: {

        title: "Hats",

        details: "Top Down • 4 Directions • Various Sizes",

      },

    },

  }),



  // Environments — 10

  ...createWorkItems({

    category: "environments",

    directory: "environments",

    prefix: "bg",

    numbers: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],

    gifNumbers: [6, 10],

    metadata: {

      10: {

        title: "RPG",

        details: "256x144 • 16:9",

      },

      9: {

        title: "RPG",

        details: "256x144 • 16:9",

      },

      8: {

        title: "Action",

        details: "24x24",

      },

      7: {

        title: "RPG",

        details: "256x144 • 16:9",

      },

      6: {

        title: "RPG",

        details: "256x144 • 16:9",

      },

      5: {

        title: "Metroidvania",

        details: "256x144 • 16:9",

      },

      4: {

        title: "Various",

        details: "256x144 • 16:9",

      },

      3: {

        title: "RPG",

        details: "160x144 • 10:9",

      },

      2: {

        title: "Various",

        details: "256x144 • 16:9",

      },

      1: {

        title: "Metroidvania",

        details: "320x180 • 16:9",

      },

    },

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

    numbers: [7, 6, 5, 4, 3, 2, 1],

    metadata: {

      7: {

        title: "Stats Screen",

        details: "160x144 • 10:9",

      },

      6: {

        title: "Title Screen",

        details: "256x144 • 16:9",

      },

      5: {

        title: "Main Menu Screen",

        details: "256x144 • 16:9",

      },

      4: {

        title: "Title Screen",

        details: "320x240 • 4:3",

      },

      3: {

        title: "Title Screen",

        details: "320x240 • 4:3",

      },

      2: {

        title: "Title Screen",

        details: "256x144 • 16:9",

      },

      1: {

        title: "Gui Buttons",

        details: "64x64",

      },

    },

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

  // These four files were moved from the old "Various" section.

  ...createWorkItems({

    category: "icons-items",

    directory: "icons-items",

    prefix: "icons",

    numbers: [4, 3, 2, 1],

    metadata: {

      4: {

        title: "RPG Inventory Items",

        details: "16x16 & 32x16",

      },

      3: {

        title: "Vertical Shooter Ships & Enemies",

        details: "Various Sizes",

      },

      2: {

        title: "Top Down Racer Cars",

        details: "Various Sizes",

      },

      1: {

        title: "Hats",

        details: "Top Down • 4 Directions • Various Sizes",

      },

    },

  }),



  // Illustrations — 7

  ...createWorkItems({

    category: "illustrations",

    directory: "illustrations",

    prefix: "illus",

    numbers: [7, 6, 5, 4, 3, 2, 1],

    metadata: {

      7: {

        title: "Various",

        details: "100x200 • 1:2",

      },

      6: {

        title: "Various",

        details: "256x256 • 1:1",

      },

      5: {

        title: "Various",

        details: "256x144 • 16:9",

      },

      4: {

        title: "Various",

        details: "256x144 • 16:9",

      },

      3: {

        title: "Various",

        details: "256x128 • 2:1",

      },

      2: {

        title: "Various",

        details: "256x144 • 16:9",

      },

      1: {

        title: "Various",

        details: "256x144 • 16:9",

      },

    },

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

    numbers: [7, 6, 5, 4, 3, 2, 1],

    metadata: {

      7: {

        title: "Various",

        details: "8x8",

      },

      6: {

        title: "Various",

        details: "6x8",

      },

      5: {

        title: "Various",

        details: "16x16",

      },

      4: {

        title: "Various",

        details: "6x6",

      },

      3: {

        title: "Various",

        details: "5x6",

      },

      2: {

        title: "Various",

        details: "6x8",

      },

      1: {

        title: "Various",

        details: "14x14",

      },

    },

  }),



  // Game Mockups — 19

  ...createWorkItems({

    category: "game-mockups",

    directory: "game-mockups",

    prefix: "mock",

    numbers: [

      20, 19, 18, 17, 16, 15, 14, 13, 12, 11,

      10, 9, 8, 7, 6, 5, 4, 3, 2,

    ],

    metadata: {

      20: {

        title: "Horizontal Shooter",

        details: "256x144 • 16:9",

      },

      19: {

        title: "Metroidvania",

        details: "400x240 • 5:3",

      },

      18: {

        title: "Top Down Racer",

        details: "144x256 • 9:16",

      },

      17: {

        title: "Horizontal Shooter",

        details: "256x144 • 16:9",

      },

      16: {

        title: "Top Down Shooter",

        details: "256x144 • 16:9",

      },

      15: {

        title: "Action",

        details: "180x320 • 9:16",

      },

      14: {

        title: "Vertical Shooter",

        details: "180x320 • 9:16",

      },

      13: {

        title: "Action RPG",

        details: "320x180 • 16:9",

      },

      12: {

        title: "Action Platformer",

        details: "320x180 • 16:9",

      },

      11: {

        title: "Action",

        details: "320x180 • 16:9",

      },

      10: {

        title: "Action Platformer",

        details: "256x144 • 16:9",

      },

      9: {

        title: "Platformer",

        details: "160x144 • 10:9",

      },

      8: {

        title: "Side Scrolling Action",

        details: "256x144 • 16:9",

      },

      7: {

        title: "Action Platformer",

        details: "160x144 • 10:9",

      },

      6: {

        title: "Run & Gun",

        details: "160x144 • 10:9",

      },

      5: {

        title: "Action Platformer",

        details: "160x144 • 10:9",

      },

      4: {

        title: "Action Platformer",

        details: "160x144 • 10:9",

      },

      3: {

        title: "Visual Novel",

        details: "256x144 • 16:9",

      },

      2: {

        title: "Visual Novel",

        details: "256x144 • 16:9",

      },

    },

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

const projectWorkTitles: Partial<Record<WorkCategory, string>> = {
  animations: "Character Animation",
  characters: "Character",
  environments: "Environment",
  "ui-gui": "UI / GUI",
};

const projectWorkItems: WorkItem[] = projects.flatMap((project) =>
  project.gallery.flatMap((item, index) => {
    if (!item.workCategory) {
      return [];
    }

    return [
      {
        id: `project-${project.slug}-${index}`,
        title:
          projectWorkTitles[item.workCategory] ??
          "Project Artwork",
        media: item.src,
        width: item.width,
        height: item.height,
        mediaType: item.type,
        categories: [item.workCategory],
        alt: item.alt,
        project: {
          slug: project.slug,
          title: project.title,
        },
      },
    ];
  }),
);

export const workItems: WorkItem[] = workCategories.flatMap(
  (category) => [
    ...projectWorkItems.filter((item) =>
      item.categories.includes(category.id),
    ),
    ...standaloneWorkItems.filter((item) =>
      item.categories.includes(category.id),
    ),
  ],
);