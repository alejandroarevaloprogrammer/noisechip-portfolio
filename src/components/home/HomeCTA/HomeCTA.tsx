import Link from "next/link";
import styles from "./HomeCTA.module.css";

export default function HomeCTA() {
  return (
    <section className={styles.section} aria-labelledby="home-cta-title">
      <div className={`container ${styles.inner}`}>
        <p className={styles.eyebrow}>Have a project in mind?</p>

        <h2 id="home-cta-title" className={styles.title}>
          Let&apos;s create something together.
        </h2>

        <p className={styles.description}>
          Available for freelance work, commissions and long-term
          collaborations.
        </p>

        <Link href="/contact" className={styles.button}>
          Get in touch
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}