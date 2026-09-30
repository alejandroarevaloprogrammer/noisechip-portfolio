"use client";

import { useState } from "react";
import NavigationLink from "@/components/ui/NavigationLink/NavigationLink";
import { mainNavigation } from "@/data/navigation";
import styles from "./MobileMenu.module.css";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className={styles.mobileMenu}>
      <button
        type="button"
        className={styles.toggle}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span
          className={styles.toggleLines}
          aria-hidden="true"
        >
          <span />
          <span />
        </span>
      </button>

      {isOpen && (
        <nav
          id="mobile-navigation"
          className={styles.navigation}
          aria-label="Mobile navigation"
        >
          <ul className={styles.navigationList}>
            {mainNavigation.map((item) => (
              <li key={item.href}>
                <NavigationLink
                  href={item.href}
                  className={styles.navigationLink}
                  onClick={closeMenu}
                >
                  {item.label}
                </NavigationLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}