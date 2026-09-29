"use client";

import { useEffect } from "react";
import Image from "next/image";
import type { WorkItem } from "@/types/work";
import styles from "./WorkLightbox.module.css";

interface WorkLightboxProps {
  item: WorkItem;
  hasPrevious: boolean;
  hasNext: boolean;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

function formatCategory(category: string) {
  return category
    .split("-")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() + word.slice(1),
    )
    .join(" ");
}

export default function WorkLightbox({
  item,
  hasPrevious,
  hasNext,
  onClose,
  onPrevious,
  onNext,
}: WorkLightboxProps) {
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
      aria-label={item.title}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className={styles.lightbox}>
        <div className={styles.topbar}>
          <div className={styles.info}>
            <h2 className={styles.title}>{item.title}</h2>

            <p className={styles.categories}>
              {item.categories
                .map(formatCategory)
                .join(" · ")}
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
            key={item.id}
            src={item.media}
            alt={item.alt}
            width={1600}
            height={1600}
            className={styles.image}
            unoptimized
            priority
          />
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.details}>
            {item.tags && item.tags.length > 0 && (
              <p className={styles.tags}>
                {item.tags.join(" · ")}
              </p>
            )}
          </div>

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