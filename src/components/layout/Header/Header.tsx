import Link from "next/link";
import MobileMenu from "@/components/layout/MobileMenu/MobileMenu";
import ThemeToggle from "@/components/ui/ThemeToggle/ThemeToggle";
import styles from "./Header.module.css";

const navigation = [
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label="Noisechip home">
          Noisechip
        </Link>

        <div className={styles.actions}>
          <nav className={styles.navigation} aria-label="Main navigation">
            <ul className={styles.navigationList}>
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.navigationLink}>
                    {item.label}
                  </Link>
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