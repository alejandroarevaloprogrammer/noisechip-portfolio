import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background} aria-hidden="true">
        <Image
          src="/work/environments/bg04.png"
          alt=""
          width={768}
          height={432}
          priority
          className={styles.backgroundImage}
          unoptimized
        />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Freelance Pixel Artist</p>

          <h1 className={styles.title}>
            Retro-Inspired
            <br />
            Pixel Art for Games
          </h1>

          <p className={styles.description}>
            Freelance pixel artist creating characters, environments, UI and
            animations for indie games and retro-inspired projects.
          </p>

          <div className={styles.actions}>
            <Link href="/work" className={styles.primaryAction}>
              View Work
            </Link>

            <Link href="/contact" className={styles.secondaryAction}>
              Get in Touch
            </Link>
          </div>

          <p className={styles.availability}>
            <span className={styles.availabilityDot} aria-hidden="true" />
            Available for freelance work, commissions and long-term
            collaborations.
          </p>
        </div>
      </div>
    </section>
  );
}