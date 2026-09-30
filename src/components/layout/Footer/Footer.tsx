import Link from "next/link";
import { mainNavigation } from "@/data/navigation";
import styles from "./Footer.module.css";

const socialLinks = [
  {
    href: "https://www.instagram.com/noisechip/",
    label: "Instagram",
  },
  {
    href: "https://x.com/noisechip",
    label: "X",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.main}>
          <div className={styles.identity}>
            <Link
              href="/"
              className={styles.logo}
            >
              Noisechip
            </Link>

            <p className={styles.description}>
              Freelance pixel artist creating retro-inspired art
              for games.
            </p>
          </div>

          <nav
            className={styles.navigation}
            aria-label="Footer navigation"
          >
            <p className={styles.heading}>Navigate</p>

            <ul className={styles.list}>
              {mainNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={styles.link}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.social}>
            <p className={styles.heading}>Elsewhere</p>

            <ul className={styles.list}>
              {socialLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={styles.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.label}
                    <span aria-hidden="true"> ↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {currentYear} Alejandro Arevalo Rojas
          </p>

          <p>Pixel art for games.</p>
        </div>
      </div>
    </footer>
  );
}