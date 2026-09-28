import Image from "next/image";
import Link from "next/link";
import { workItems } from "@/data/work";
import styles from "./FeaturedWork.module.css";

const featuredIds = [
  "characters-02",
  "environments-04",
  "animations-05",
  "game-mockups-02",
];

const featuredItems = featuredIds
  .map((id) => workItems.find((item) => item.id === id))
  .filter((item) => item !== undefined);

export default function FeaturedWork() {
  return (
    <section className={styles.section} aria-labelledby="featured-work-title">
      <div className="container">
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Selected Work</p>

            <h2 id="featured-work-title" className={styles.title}>
              A selection of pixel art.
            </h2>
          </div>

          <Link href="/work" className={styles.viewAll}>
            View all work
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className={styles.grid}>
          {featuredItems.map((item) => (
            <article key={item.id} className={styles.item}>
              <div className={styles.media}>
                <Image
                    src={item.media}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    className={styles.image}
                />
              </div>

              <div className={styles.meta}>
                <p className={styles.category}>
                    {item.categories.join(" · ")}
                </p>
            </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}