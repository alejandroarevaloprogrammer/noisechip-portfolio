import type { Project } from "@/types/project";

function createMedia(
  basePath: string,
  prefix: string,
  count: number,
  label: string,
  gifIndexes: number[] = [],
) {
  return Array.from({ length: count }, (_, index) => {
    const number = index + 1;
    const extension = gifIndexes.includes(number) ? "gif" : "png";

    return {
      src: `${basePath}/${prefix}-${String(number).padStart(2, "0")}.${extension}`,
      type: extension === "gif" ? ("gif" as const) : ("image" as const),
      alt: `${label} ${number}.`,
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
    gallery: [
      {
        src: "/projects/retro-platformer/image-01.png",
        type: "image",
        alt: "Retro Platformer pixel art environment.",
      },
      {
        src: "/projects/retro-platformer/image-02.png",
        type: "image",
        alt: "Retro Platformer pixel art environment.",
      },
    ],
    featured: false,
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
    gallery: [
      {
        src: "/projects/retro-puzzle/character-01.gif",
        type: "gif",
        alt: "Animated pixel art character from Retro Puzzle.",
      },
      ...Array.from({ length: 6 }, (_, index) => ({
        src: `/projects/retro-puzzle/gui-${String(index + 1).padStart(2, "0")}.png`,
        type: "image" as const,
        alt: `Retro Puzzle pixel art UI ${index + 1}.`,
      })),
    ],
    featured: false,
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
    disciplines: ["characters", "animations", "environments", "ui-gui"],
    cover: "/projects/retro-casual-memory/gameplay-01.png",
    gallery: [
      ...createMedia(
        "/projects/retro-casual-memory",
        "background",
        10,
        "Retro Casual Memory pixel art background",
      ),
      ...createMedia(
        "/projects/retro-casual-memory",
        "character",
        11,
        "Retro Casual Memory pixel art character",
        [11],
      ),
      ...createMedia(
        "/projects/retro-casual-memory",
        "gui",
        16,
        "Retro Casual Memory pixel art UI",
        [2],
      ),
      ...createMedia(
        "/projects/retro-casual-memory",
        "gameplay",
        6,
        "Retro Casual Memory gameplay",
      ),
    ],
    featured: false,
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
    disciplines: ["characters", "animations", "environments", "ui-gui"],
    cover: "/projects/retro-casual-arcade/gameplay-01.png",
    gallery: [
      ...createMedia(
        "/projects/retro-casual-arcade",
        "background",
        3,
        "Retro Casual Arcade pixel art background",
      ),
      ...createMedia(
        "/projects/retro-casual-arcade",
        "character",
        1,
        "Retro Casual Arcade pixel art character",
        [1],
      ),
      ...createMedia(
        "/projects/retro-casual-arcade",
        "gui",
        1,
        "Retro Casual Arcade pixel art UI",
      ),
      ...createMedia(
        "/projects/retro-casual-arcade",
        "gameplay",
        6,
        "Retro Casual Arcade gameplay",
      ),
    ],
    featured: false,
  },
];