import styles from "./ProjectsHeader.module.css";

export default function ProjectsHeader() {
  return (
    <section className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.eyebrow}>Selected Projects</p>

        <div className={styles.content}>
          <h1 className={styles.title}>Projects</h1>

          <p className={styles.description}>
            Selected game projects featuring pixel art created for different
            genres and visual styles.
          </p>
        </div>
      </div>
    </section>
  );
}