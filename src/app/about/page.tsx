import type { Metadata } from "next";
import Link from "next/link";
import styles from "./About.module.css";

export const metadata: Metadata = {
  title: "About | Noisechip",
  description:
    "About Noisechip, a freelance pixel artist creating retro-inspired art for games.",
};

const disciplines = [
  "Characters",
  "Environments",
  "UI",
  "Animations",
];

const processSteps = [
  {
    number: "01",
    title: "References & Brief",
    description:
      "We discuss the project, requirements and visual references.",
  },
  {
    number: "02",
    title: "Sketches",
    description:
      "I prepare initial sketches and concepts for review.",
  },
  {
    number: "03",
    title: "Production",
    description:
      "Once the direction is approved, I create the final pixel art.",
  },
  {
    number: "04",
    title: "Revisions & Delivery",
    description:
      "I make any necessary adjustments based on feedback and prepare the final files for delivery.",
  },
];

const tools = ["Aseprite", "GameMaker", "Unity"];

export default function AboutPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <p className={styles.eyebrow}>About</p>

          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>About</h1>

            <p className={styles.heroDescription}>
              Pixel art for games and retro-inspired projects.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.introduction}>
        <div className="container">
          <div className={styles.introductionGrid}>
            <div>
              <p className={styles.sectionLabel}>Noisechip</p>

              <h2 className={styles.sectionTitle}>
                Creating pixel art for indie games.
              </h2>
            </div>

            <div className={styles.introductionContent}>
              <p className={styles.lead}>
                I&apos;m a freelance pixel artist creating characters,
                environments, UI and animations for games.
              </p>

              <p className={styles.bodyText}>
                I work with indie developers and personal game projects,
                creating pixel art that fits the visual direction and needs of
                each game.
              </p>

              <div className={styles.disciplines}>
                {disciplines.map((discipline) => (
                  <span
                    key={discipline}
                    className={styles.discipline}
                  >
                    {discipline}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={styles.process}
        aria-labelledby="process-title"
      >
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Process</p>

            <h2
              id="process-title"
              className={styles.sectionTitle}
            >
              From references to final delivery.
            </h2>
          </div>

          <div className={styles.processGrid}>
            {processSteps.map((step) => (
              <article
                key={step.number}
                className={styles.processStep}
              >
                <p className={styles.stepNumber}>
                  {step.number}
                </p>

                <h3 className={styles.stepTitle}>
                  {step.title}
                </h3>

                <p className={styles.stepDescription}>
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className={styles.details}
        aria-labelledby="tools-title"
      >
        <div className="container">
          <div className={styles.detailsGrid}>
            <div className={styles.tools}>
              <p className={styles.sectionLabel}>Tools</p>

              <h2
                id="tools-title"
                className={styles.sectionTitle}
              >
                Tools I work with.
              </h2>

              <ul className={styles.toolList}>
                {tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </div>

            <div className={styles.availability}>
              <p className={styles.sectionLabel}>
                Availability
              </p>

              <h2 className={styles.sectionTitle}>
                Available for freelance work.
              </h2>

              <p className={styles.bodyText}>
                Typical turnaround is around one week for standard commissions.
                Larger or more complex projects may require additional time.
              </p>

              <Link
                href="/contact"
                className={styles.contactLink}
              >
                Get in Touch
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}