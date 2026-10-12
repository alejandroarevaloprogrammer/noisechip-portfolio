
import type { Metadata } from "next";
import ProjectsHeader from "@/components/projects/ProjectsHeader/ProjectsHeader";
import ProjectsGrid from "@/components/projects/ProjectsGrid/ProjectsGrid";

const description =
  "Selected game projects featuring pixel art by Noisechip, including characters, environments, UI and animations.";

export const metadata: Metadata = {
  title: "Projects | Noisechip",
  description,
  alternates: {
    canonical: "/projects/",
  },
  openGraph: {
    type: "website",
    siteName: "Noisechip",
    title: "Projects | Noisechip",
    description,
    url: "/projects/",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Noisechip - Retro-Inspired Pixel Art for Games",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Noisechip",
    description,
    images: ["/og-image.png"],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHeader />
      <ProjectsGrid />
    </>
  );
}
