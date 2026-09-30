import type {
  Project,
  ProjectMediaGroup,
} from "@/types/project";

interface CreateMediaOptions {
  basePath: string;
  prefix: string;
  count: number;
  label: string;
  width: number;
  height: number;
  group: ProjectMediaGroup;
  gifIndexes?: number[];
}

function createMedia({
  basePath,
  prefix,
  count,
  label,
  width,
  height,
  group,
  gifIndexes = [],
}: CreateMediaOptions) {
  return Array.from({ length: count }, (_, index) => {
    const number = index + 1;
    const extension = gifIndexes.includes(number) ? "gif" : "png";

    return {
      src: `${basePath}/${prefix}-${String(number).padStart(2, "0")}.${extension}`,
      type: extension === "gif" ? ("gif" as const) : ("image" as const),
      alt: `${label} ${number}.`,
      width,
      height,
      group,
    };
  });
}

export const projects: Project[] = [
  {
    slug: "retro-platformer",
    title: "Retro Platformer",
    year: 2026,
    status: "in-development",
    genre: "Platformer",
    role: "All Art",
    shortDescription:
      "A retro-style platformer currently in development.",
    disciplines: ["environments"],
    cover: "/projects/retro-platformer/image-01.png",
    coverWidth: 768,
    coverHeight: 432,
    gallery: [
      {
        src: "/projects/retro-platformer/image-01.png",
        type: "image",
        alt: "Retro Platformer pixel art environment 1.",
        width: 768,
        height: 432,
        group: "environments",
      },
      {
        src: "/projects/retro-platformer/image-02.png",
        type: "image",
        alt: "Retro Platformer pixel art environment 2.",
        width: 768,
        height: 432,
        group: "environments",
      },
    ],
  },
  {
    slug: "retro-puzzle",
    title: "Retro Puzzle",
    year: 2024,
    status: "completed",
    genre: "Puzzle",
    role: "All Art",
    shortDescription:
      "A retro-style puzzle game with complete pixel art created by Noisechip.",
    disciplines: ["characters", "animations", "ui-gui"],
    cover: "/projects/retro-puzzle/gui-01.png",
    coverWidth: 768,
    coverHeight: 432,
    gallery: [
      {
        src: "/projects/retro-puzzle/character-01.gif",
        type: "gif",
        alt: "Animated pixel art character from Retro Puzzle.",
        width: 800,
        height: 800,
        group: "characters-animation",
      },
      {
        src: "/projects/retro-puzzle/gui-01.png",
        type: "image",
        alt: "Retro Puzzle pixel art UI 1.",
        width: 768,
        height: 432,
        group: "ui-gui",
      },
      {
        src: "/projects/retro-puzzle/gui-02.png",
        type: "image",
        alt: "Retro Puzzle pixel art UI 2.",
        width: 768,
        height: 432,
        group: "ui-gui",
      },
      {
        src: "/projects/retro-puzzle/gui-03.png",
        type: "image",
        alt: "Retro Puzzle pixel art UI 3.",
        width: 768,
        height: 432,
        group: "ui-gui",
      },
      {
        src: "/projects/retro-puzzle/gui-04.png",
        type: "image",
        alt: "Retro Puzzle pixel art UI 4.",
        width: 800,
        height: 800,
        group: "ui-gui",
      },
      {
        src: "/projects/retro-puzzle/gui-05.png",
        type: "image",
        alt: "Retro Puzzle pixel art UI 5.",
        width: 800,
        height: 800,
        group: "ui-gui",
      },
      {
        src: "/projects/retro-puzzle/gui-06.png",
        type: "image",
        alt: "Retro Puzzle pixel art UI 6.",
        width: 768,
        height: 432,
        group: "ui-gui",
      },
    ],
  },
  {
    slug: "retro-casual-memory",
    title: "Retro Casual Memory",
    year: 2023,
    status: "completed",
    genre: "Casual Memory",
    role: "All Art",
    shortDescription:
      "A casual memory game with complete pixel art created by Noisechip.",
    disciplines: [
      "characters",
      "animations",
      "environments",
      "ui-gui",
    ],
    cover: "/projects/retro-casual-memory/gameplay-01.png",
    coverWidth: 1366,
    coverHeight: 768,
    gallery: [
      ...createMedia({
        basePath: "/projects/retro-casual-memory",
        prefix: "background",
        count: 10,
        label: "Retro Casual Memory pixel art background",
        width: 768,
        height: 432,
        group: "environments",
      }),

      ...createMedia({
        basePath: "/projects/retro-casual-memory",
        prefix: "character",
        count: 10,
        label: "Retro Casual Memory pixel art character",
        width: 800,
        height: 800,
        group: "characters-animation",
      }),

      {
        src: "/projects/retro-casual-memory/character-11.gif",
        type: "gif",
        alt: "Retro Casual Memory animated pixel art character 11.",
        width: 768,
        height: 432,
        group: "characters-animation",
      },

      {
        src: "/projects/retro-casual-memory/gui-01.png",
        type: "image",
        alt: "Retro Casual Memory pixel art UI 1.",
        width: 768,
        height: 432,
        group: "ui-gui",
      },
      {
        src: "/projects/retro-casual-memory/gui-02.gif",
        type: "gif",
        alt: "Retro Casual Memory animated pixel art UI 2.",
        width: 768,
        height: 432,
        group: "ui-gui",
      },
      {
        src: "/projects/retro-casual-memory/gui-03.png",
        type: "image",
        alt: "Retro Casual Memory pixel art UI 3.",
        width: 800,
        height: 800,
        group: "ui-gui",
      },

      ...Array.from({ length: 13 }, (_, index) => {
        const number = index + 4;

        return {
          src: `/projects/retro-casual-memory/gui-${String(number).padStart(2, "0")}.png`,
          type: "image" as const,
          alt: `Retro Casual Memory pixel art UI ${number}.`,
          width: 768,
          height: 432,
          group: "ui-gui" as const,
        };
      }),

      ...createMedia({
        basePath: "/projects/retro-casual-memory",
        prefix: "gameplay",
        count: 6,
        label: "Retro Casual Memory gameplay",
        width: 1366,
        height: 768,
        group: "gameplay",
      }),
    ],
  },
  {
    slug: "retro-casual-arcade",
    title: "Retro Casual Arcade",
    year: 2022,
    status: "completed",
    genre: "Casual Arcade",
    role: "In-game Graphics",
    shortDescription:
      "A casual arcade game featuring in-game pixel graphics created by Noisechip.",
    disciplines: [
      "characters",
      "animations",
      "environments",
      "ui-gui",
    ],
    cover: "/projects/retro-casual-arcade/gameplay-01.png",
    coverWidth: 576,
    coverHeight: 768,
    gallery: [
      ...createMedia({
        basePath: "/projects/retro-casual-arcade",
        prefix: "background",
        count: 3,
        label: "Retro Casual Arcade pixel art background",
        width: 480,
        height: 480,
        group: "environments",
      }),

      {
        src: "/projects/retro-casual-arcade/character-01.gif",
        type: "gif",
        alt: "Retro Casual Arcade animated pixel art character.",
        width: 800,
        height: 800,
        group: "characters-animation",
      },

      {
        src: "/projects/retro-casual-arcade/gui-01.png",
        type: "image",
        alt: "Retro Casual Arcade pixel art UI.",
        width: 800,
        height: 800,
        group: "ui-gui",
      },

      ...createMedia({
        basePath: "/projects/retro-casual-arcade",
        prefix: "gameplay",
        count: 6,
        label: "Retro Casual Arcade gameplay",
        width: 576,
        height: 768,
        group: "gameplay",
      }),
    ],
  },
];