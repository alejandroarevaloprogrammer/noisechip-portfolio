import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
}

function formatStatus(status: Project["status"]) {
  return status === "in-development"
    ? "In Development"
    : "Completed";
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <Link
        href={`/projects/${project.slug}`}
        className={styles.mediaLink}
        aria-label={`View ${project.title} project`}
      >
        <div className={styles.media}>
          <Image
            src={project.cover}
            alt={`${project.title} project cover.`}
            width={project.coverWidth}
            height={project.coverHeight}
            className={styles.image}
            unoptimized
          />
        </div>
      </Link>

      <div className={styles.content}>
        <div className={styles.heading}>
          <h2 className={styles.title}>
            <Link
              href={`/projects/${project.slug}`}
              className={styles.titleLink}
            >
              {project.title}
            </Link>
          </h2>

          <p className={styles.year}>{project.year}</p>
        </div>

        <p className={styles.description}>
          {project.shortDescription}
        </p>

        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Status</span>
            <span>{formatStatus(project.status)}</span>
          </div>

          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Genre</span>
            <span>{project.genre}</span>
          </div>

          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Role</span>
            <span>{project.role}</span>
          </div>
        </div>
      </div>
    </article>
  );
}