import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm/ContactForm";
import styles from "./Contact.module.css";

export const metadata: Metadata = {
  title: "Contact | Noisechip",
  description:
    "Get in touch with Noisechip for pixel art commissions, freelance work and game projects.",
};

export default function ContactPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.eyebrow}>Contact</p>

          <h1 className={styles.title}>
            Let&apos;s create something together.
          </h1>

          <p className={styles.description}>
            Have a game or pixel art project in mind? Tell me a little
            about what you&apos;re working on and what you need.
          </p>
        </div>
      </section>

      <section className={styles.contact}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.details}>
              <div className={styles.detailBlock}>
                <p className={styles.label}>Email</p>

                <a
                  href="mailto:contact@noisechip.com"
                  className={styles.contactLink}
                >
                  contact@noisechip.com
                </a>
              </div>

              <div className={styles.detailBlock}>
                <p className={styles.label}>Social</p>

                <div className={styles.socialLinks}>
                  <a
                    href="https://www.instagram.com/noisechip/"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.contactLink}
                  >
                    Instagram ↗
                  </a>

                  <a
                    href="https://x.com/noisechip"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.contactLink}
                  >
                    X ↗
                  </a>
                </div>
              </div>

              <div className={styles.detailBlock}>
                <p className={styles.label}>Availability</p>

                <p className={styles.muted}>
                  Available for freelance work, commissions and
                  collaborations.
                </p>
              </div>
            </div>

            <div className={styles.formArea}>
              <div className={styles.formHeader}>
                <p className={styles.label}>Project inquiry</p>

                <h2>Tell me about your project.</h2>

                <p className={styles.formIntro}>
                  References, the type of artwork you need and an
                  approximate timeline are helpful if you already have
                  them.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}