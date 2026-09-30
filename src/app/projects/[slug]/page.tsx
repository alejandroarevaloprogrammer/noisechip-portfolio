import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectHero from "@/components/projects/ProjectDetail/ProjectHero";
import ProjectAbout from "@/components/projects/ProjectDetail/ProjectAbout";
import ProjectGallery from "@/components/projects/ProjectDetail/ProjectGallery";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project Not Found | Noisechip",
    };
  }

  return {
    title: `${project.title} | Noisechip`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <ProjectHero project={project} />
      <ProjectAbout project={project} />
      <ProjectGallery project={project} />
    </main>
  );
}