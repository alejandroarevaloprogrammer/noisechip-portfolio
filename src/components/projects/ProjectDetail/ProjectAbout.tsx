import type { Project } from "@/types/project";
import styles from "./ProjectAbout.module.css";

interface ProjectAboutProps {
  project: Project;
}

export default function ProjectAbout({
  project,
}: ProjectAboutProps) {
  const description =
    project.description ?? project.shortDescription;

  return (
    <section
      className={styles.section}
      aria-labelledby="project-about-title"
    >
      <div className="container">
        <div className={styles.layout}>
          <div>
            <p className={styles.eyebrow}>About</p>

            <h2
              id="project-about-title"
              className={styles.title}
            >
              About the project.
            </h2>
          </div>

          <div className={styles.content}>
            <p className={styles.description}>
              {description}
            </p>

            <dl className={styles.details}>
              <div className={styles.detail}>
                <dt>Year</dt>
                <dd>{project.year}</dd>
              </div>

              <div className={styles.detail}>
                <dt>Genre</dt>
                <dd>{project.genre}</dd>
              </div>

              <div className={styles.detail}>
                <dt>Role</dt>
                <dd>{project.role}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}