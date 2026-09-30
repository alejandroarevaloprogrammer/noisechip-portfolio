import Link from "next/link";
import MobileMenu from "@/components/layout/MobileMenu/MobileMenu";
import NavigationLink from "@/components/ui/NavigationLink/NavigationLink";
import ThemeToggle from "@/components/ui/ThemeToggle/ThemeToggle";
import { mainNavigation } from "@/data/navigation";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link
          href="/"
          className={styles.logo}
          aria-label="Noisechip home"
        >
          Noisechip
        </Link>

        <div className={styles.actions}>
          <nav
            className={styles.navigation}
            aria-label="Main navigation"
          >
            <ul className={styles.navigationList}>
              {mainNavigation.map((item) => (
                <li key={item.href}>
                  <NavigationLink
                    href={item.href}
                    className={styles.navigationLink}
                  >
                    {item.label}
                  </NavigationLink>
                </li>
              ))}
            </ul>
          </nav>

          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}