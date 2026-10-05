"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

const SLIDE_DURATION = 3000;

const slides = [
  {
    src: "/work/game-mockups/mock02.png",
    width: 768,
    height: 432,
  },
  {
    src: "/work/environments/bg04.png",
    width: 768,
    height: 432,
  },
  {
    src: "/work/game-mockups/mock13.png",
    width: 960,
    height: 540,
  },
  {
    src: "/work/game-mockups/mock12.png",
    width: 640,
    height: 360,
  },
  {
    src: "/work/game-mockups/mock03.png",
    width: 768,
    height: 432,
  },
  {
    src: "/work/game-mockups/mock17.png",
    width: 768,
    height: 432,
  },
] as const;

export default function HeroSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex(
        (current) => (current + 1) % slides.length,
      );
    }, SLIDE_DURATION);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.background} aria-hidden="true">
      {slides.map((slide, index) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt=""
          width={slide.width}
          height={slide.height}
          priority={index === 0}
          className={`${styles.backgroundImage} ${
            index === activeIndex
              ? styles.backgroundImageActive
              : ""
          }`}
          unoptimized
        />
      ))}
    </div>
  );
}