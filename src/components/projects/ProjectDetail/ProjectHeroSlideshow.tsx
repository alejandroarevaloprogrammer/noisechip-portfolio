"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { ProjectMedia } from "@/types/project";
import styles from "./ProjectHero.module.css";

interface ProjectHeroSlideshowProps {
  items: ProjectMedia[];
}

const SLIDE_DURATION = 3000;

export default function ProjectHeroSlideshow({
  items,
}: ProjectHeroSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, SLIDE_DURATION);

    return () => {
      window.clearInterval(interval);
    };
  }, [items.length]);

  if (items.length === 0) {
    return null;
  }

  return (
    <div className={styles.slideshow} aria-hidden="true">
      {items.map((item, index) => {
        const isLandscape = item.width > item.height;

        return (
          <Image
            key={item.src}
            src={item.src}
            alt=""
            width={item.width}
            height={item.height}
            className={`${styles.slideshowImage} ${
              isLandscape ? styles.slideshowImageLandscape : ""
            } ${
              index === activeIndex
                ? styles.slideshowImageActive
                : ""
            }`}
            unoptimized
            priority={index === 0}
          />
        );
      })}
    </div>
  );
}