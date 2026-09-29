import type { Metadata } from "next";
import ProjectsHeader from "@/components/projects/ProjectsHeader/ProjectsHeader";
import ProjectsGrid from "@/components/projects/ProjectsGrid/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects | Noisechip",
  description:
    "Selected game projects featuring pixel art by Noisechip, including characters, environments, UI and animations.",
};

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsHeader />
      <ProjectsGrid />
    </main>
  );
}