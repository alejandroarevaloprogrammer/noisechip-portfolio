import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard/ProjectCard";
import styles from "./ProjectsGrid.module.css";

export default function ProjectsGrid() {
  return (
    <section className={styles.section} aria-label="Selected projects">
      <div className="container">
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}