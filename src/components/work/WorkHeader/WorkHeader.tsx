import styles from "./WorkHeader.module.css";

export default function WorkHeader() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.eyebrow}>Selected work</p>

        <div className={styles.content}>
          <h1 className={styles.title}>Work</h1>

          <p className={styles.description}>
            A selection of pixel art for games, including characters,
            environments, UI, animations and more.
          </p>
        </div>
      </div>
    </header>
  );
}