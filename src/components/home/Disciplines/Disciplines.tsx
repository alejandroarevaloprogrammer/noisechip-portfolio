import Link from "next/link";
import styles from "./Disciplines.module.css";

const disciplines = [
  {
    number: "01",
    title: "Characters",
    href: "/work?category=characters",
  },
  {
    number: "02",
    title: "Environments",
    href: "/work?category=environments",
  },
  {
    number: "03",
    title: "UI",
    href: "/work?category=ui-gui",
  },
  {
    number: "04",
    title: "Animations",
    href: "/work?category=animations",
  },
];

export default function Disciplines() {
  return (
    <section className={styles.section} aria-labelledby="disciplines-title">
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>What I Do</p>

          <h2 id="disciplines-title" className={styles.title}>
            Pixel art for every part of your game.
          </h2>
        </div>

        <div className={styles.list}>
          {disciplines.map((discipline) => (
            <Link
              key={discipline.title}
              href={discipline.href}
              className={styles.item}
            >
              <span className={styles.number}>{discipline.number}</span>

              <span className={styles.itemTitle}>{discipline.title}</span>

              <span className={styles.arrow} aria-hidden="true">
                ↗
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}