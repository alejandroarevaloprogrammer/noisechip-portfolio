"use client";

import { useEffect } from "react";
import Image from "next/image";
import type { ProjectMedia } from "@/types/project";
import styles from "./ProjectLightbox.module.css";

interface ProjectLightboxProps {
  item: ProjectMedia;
  projectTitle: string;
  currentIndex: number;
  totalItems: number;
  hasPrevious: boolean;
  hasNext: boolean;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

const groupLabels: Record<ProjectMedia["group"], string> = {
  environments: "Environments",
  "characters-animation": "Characters & Animation",
  "ui-gui": "UI / GUI",
  gameplay: "Gameplay",
};

export default function ProjectLightbox({
  item,
  projectTitle,
  currentIndex,
  totalItems,
  hasPrevious,
  hasNext,
  onClose,
  onPrevious,
  onNext,
}: ProjectLightboxProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft" && hasPrevious) {
        onPrevious();
      }

      if (event.key === "ArrowRight" && hasNext) {
        onNext();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [
    hasPrevious,
    hasNext,
    onClose,
    onPrevious,
    onNext,
  ]);

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label={`${projectTitle} artwork`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className={styles.lightbox}>
        <div className={styles.topbar}>
          <div className={styles.info}>
            <h2 className={styles.title}>{projectTitle}</h2>

            <p className={styles.category}>
              {groupLabels[item.group]}
            </p>
          </div>

          <button
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label="Close artwork"
          >
            ×
          </button>
        </div>

        <div className={styles.viewer}>
          <Image
            key={item.src}
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            className={styles.image}
            unoptimized
            priority
          />
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.counter}>
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(totalItems).padStart(2, "0")}
          </p>

          <div
            className={styles.navigation}
            aria-label="Artwork navigation"
          >
            <button
              type="button"
              className={styles.navigationButton}
              onClick={onPrevious}
              disabled={!hasPrevious}
              aria-label="Previous artwork"
            >
              ← Previous
            </button>

            <button
              type="button"
              className={styles.navigationButton}
              onClick={onNext}
              disabled={!hasNext}
              aria-label="Next artwork"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}