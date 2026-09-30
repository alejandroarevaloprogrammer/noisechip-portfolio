import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";
import { workCategories } from "@/data/categories";
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

export default function ProjectHero({
  project,
}: ProjectHeroProps) {
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

              <p className={styles.description}>
                {project.shortDescription}
              </p>
            </div>

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
          </div>
        </div>
      </section>

      <section
        className={styles.artworkSection}
        aria-label={`${project.title} featured artwork`}
      >
        <div className="container">
          <div className={styles.artwork}>
            <Image
              src={project.cover}
              alt={`${project.title} project cover.`}
              width={project.coverWidth}
              height={project.coverHeight}
              className={styles.image}
              unoptimized
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}