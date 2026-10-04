import Image from "next/image";
import Link from "next/link";
import type { Project, ProjectMedia } from "@/types/project";
import { workCategories } from "@/data/categories";
import ProjectHeroSlideshow from "./ProjectHeroSlideshow";
import styles from "./ProjectHero.module.css";

interface ProjectHeroProps {
  project: Project;
}

function formatStatus(status: Project["status"]) {
  return status === "in-development"
    ? "In Development"
    : "Completed";
}

function getDisciplineLabel(id: Project["disciplines"][number]) {
  return (
    workCategories.find((category) => category.id === id)?.label ??
    id
  );
}

function getSlideshowItems(project: Project): ProjectMedia[] {
  switch (project.slug) {
    case "retro-casual-memory":
    case "retro-casual-arcade":
      return project.gallery.filter(
        (item) => item.group === "gameplay",
      );

    case "retro-platformer":
      return project.gallery.filter(
        (item) => item.workCategory === "environments",
      );

    default:
      return [];
  }
}

export default function ProjectHero({
  project,
}: ProjectHeroProps) {
  const slideshowItems = getSlideshowItems(project);
  const showSlideshow = slideshowItems.length > 0;

  return (
    <>
      <section className={styles.header}>
        <div className="container">
          <Link href="/projects" className={styles.backLink}>
            <span aria-hidden="true">←</span>
            Back to Projects
          </Link>

          <div className={styles.heading}>
            <div className={styles.intro}>
              <p className={styles.eyebrow}>
                {project.year} · {formatStatus(project.status)}
              </p>

              <h1 className={styles.title}>{project.title}</h1>
            </div>

            <div className={styles.details}>
              <dl className={styles.meta}>
                <div className={styles.metaItem}>
                  <dt>Role</dt>
                  <dd>{project.role}</dd>
                </div>

                <div className={styles.metaItem}>
                  <dt>Genre</dt>
                  <dd>{project.genre}</dd>
                </div>

                <div className={styles.metaItem}>
                  <dt>Disciplines</dt>
                  <dd>
                    {project.disciplines
                      .map(getDisciplineLabel)
                      .join(" · ")}
                  </dd>
                </div>
              </dl>

              <p className={styles.description}>
                {project.shortDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className={styles.artworkSection}
        aria-label={`${project.title} featured artwork`}
      >
        <div className="container">
          <div className={styles.artwork}>
            {showSlideshow ? (
              <ProjectHeroSlideshow items={slideshowItems} />
            ) : (
              <Image
                src={project.cover}
                alt={`${project.title} project cover.`}
                width={project.coverWidth}
                height={project.coverHeight}
                className={`${styles.image} ${
                  project.slug === "retro-puzzle"
                    ? styles.imageLandscape
                    : ""
                }`}
                unoptimized
                priority
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}