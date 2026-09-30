"use client";

import { useEffect, useRef } from "react";
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
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === "ArrowLeft" && hasPrevious) {
        event.preventDefault();
        onPrevious();
        return;
      }

      if (event.key === "ArrowRight" && hasNext) {
        event.preventDefault();
        onNext();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const dialog = dialogRef.current;

      if (!dialog) {
        return;
      }

      const focusableElements = Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement =
        focusableElements[focusableElements.length - 1];

      if (
        event.shiftKey &&
        document.activeElement === firstElement
      ) {
        event.preventDefault();
        lastElement.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === lastElement
      ) {
        event.preventDefault();
        firstElement.focus();
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
      ref={dialogRef}
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
            ref={closeButtonRef}
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