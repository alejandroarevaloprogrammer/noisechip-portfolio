import Link from "next/link";
import type { Project } from "@/types/project";
import styles from "./ProjectNavigation.module.css";

interface ProjectNavigationProps {
  previousProject: Project;
  nextProject: Project;
}

export default function ProjectNavigation({
  previousProject,
  nextProject,
}: ProjectNavigationProps) {
  return (
    <nav
      className={styles.navigation}
      aria-label="Project navigation"
    >
      <div className="container">
        <div className={styles.grid}>
          <Link
            href={`/projects/${previousProject.slug}`}
            className={`${styles.link} ${styles.previous}`}
          >
            <span className={styles.direction}>
              ← Previous Project
            </span>

            <span className={styles.title}>
              {previousProject.title}
            </span>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className={`${styles.link} ${styles.next}`}
          >
            <span className={styles.direction}>
              Next Project →
            </span>

            <span className={styles.title}>
              {nextProject.title}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}