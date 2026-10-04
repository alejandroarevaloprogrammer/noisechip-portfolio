"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
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
  if (category === "ui-gui") {
    return "UI / GUI";
  }

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

  function handleProjectNavigation() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }

  return (
    <div
      ref={dialogRef}
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
            key={item.id}
            src={item.media}
            alt={item.alt}
            width={item.width}
            height={item.height}
            className={styles.image}
            unoptimized
            priority
          />
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.details}>
            {item.project ? (
              <>
                <p className={styles.description}>
                  {item.project.title}
                </p>

                <Link
                  href={`/projects/${item.project.slug}`}
                  className={styles.projectLink}
                  scroll
                  onClick={handleProjectNavigation}
                >
                  View Full Project ↗
                </Link>
              </>
            ) : (
              <>
                {item.details && (
                  <p className={styles.description}>
                    {item.details}
                  </p>
                )}

                {item.tags && item.tags.length > 0 && (
                  <p className={styles.tags}>
                    {item.tags.join(" · ")}
                  </p>
                )}
              </>
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