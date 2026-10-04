"use client";

import type { MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HomeLogoLinkProps {
  className?: string;
}

export default function HomeLogoLink({
  className,
}: HomeLogoLinkProps) {
  const pathname = usePathname();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (pathname !== "/") {
      return;
    }

    event.preventDefault();

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }

  return (
    <Link
      href="/"
      className={className}
      aria-label="Noisechip home"
      onClick={handleClick}
    >
      Noisechip
    </Link>
  );
}