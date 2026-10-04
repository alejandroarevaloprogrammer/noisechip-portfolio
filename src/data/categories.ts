export const workCategories = [
  { id: "animations", label: "Animations" },
  { id: "characters", label: "Characters" },
  { id: "environments", label: "Environments" },
  { id: "ui-gui", label: "UI / GUI" },
  { id: "icons-items", label: "Icons & Items" },
  { id: "illustrations", label: "Illustrations" },
  { id: "fonts", label: "Fonts" },
  { id: "game-mockups", label: "Game Mockups" },
] as const;

export type WorkCategory =
  (typeof workCategories)[number]["id"];