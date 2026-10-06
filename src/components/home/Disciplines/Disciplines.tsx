import Image from "next/image";
import Link from "next/link";
import styles from "./Disciplines.module.css";

const disciplines = [
  {
    number: "01",
    title: "Characters",
    href: "/work?category=characters",
    image: "/work/characters/characters.png",
    imageAlt: "Pixel art characters by Noisechip.",
  },
  {
    number: "02",
    title: "Environments",
    href: "/work?category=environments",
    image: "/work/environments/environments.png",
    imageAlt: "Pixel art environment by Noisechip.",
  },
  {
    number: "03",
    title: "UI",
    href: "/work?category=ui-gui",
    image: "/work/ui-gui/ui-gui.png",
    imageAlt: "Pixel art user interface by Noisechip.",
  },
  {
    number: "04",
    title: "Animations",
    href: "/work?category=animations",
    image: "/work/animations/animations.gif",
    imageAlt: "Pixel art animation by Noisechip.",
  },
];

export default function Disciplines() {
  return (
    <section
      className={styles.section}
      aria-labelledby="disciplines-title"
    >
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>What I Do</p>

          <h2 id="disciplines-title" className={styles.title}>
            Pixel art for your game.
          </h2>
        </div>

        <div className={styles.grid}>
          {disciplines.map((discipline) => (
            <Link
              key={discipline.title}
              href={discipline.href}
              className={styles.card}
            >
              <div className={styles.cardHeader}>
                <span className={styles.number}>
                  {discipline.number}
                </span>

                <span
                  className={styles.arrow}
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>

              <div className={styles.artwork}>
                <Image
                  src={discipline.image}
                  alt={discipline.imageAlt}
                  width={128}
                  height={128}
                  className={styles.artworkImage}
                  unoptimized
                />
              </div>

              <span className={styles.itemTitle}>
                {discipline.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}