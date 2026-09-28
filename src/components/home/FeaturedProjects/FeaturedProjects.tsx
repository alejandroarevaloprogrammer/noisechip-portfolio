import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import styles from "./FeaturedProjects.module.css";

function formatStatus(status: string) {
  return status === "in-development" ? "In Development" : "Completed";
}

export default function FeaturedProjects() {
  return (
    <section
      className={styles.section}
      aria-labelledby="featured-projects-title"
    >
      <div className="container">
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Projects</p>

            <h2 id="featured-projects-title" className={styles.title}>
              Pixel art in context.
            </h2>
          </div>

          <Link href="/projects" className={styles.viewAll}>
            View all projects
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.slug} className={styles.project}>
              <Link
                href={`/projects/${project.slug}`}
                className={styles.projectLink}
              >
                <div className={styles.media}>
                  <Image
                    src={project.cover}
                    alt={`${project.title} project cover.`}
                    width={project.coverWidth}
                    height={project.coverHeight}
                    className={styles.image}
                  />
                </div>

                <div className={styles.info}>
                  <div>
                    <h3 className={styles.projectTitle}>
                      {project.title}
                    </h3>

                    <p className={styles.disciplines}>
                      {project.disciplines.join(" · ")}
                    </p>
                  </div>

                  <div className={styles.meta}>
                    <span>{project.year}</span>
                    <span>{formatStatus(project.status)}</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}