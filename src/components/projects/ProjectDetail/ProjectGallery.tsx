"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import type {
  Project,
  ProjectMediaGroup,
} from "@/types/project";
import ProjectLightbox from "@/components/projects/ProjectLightbox/ProjectLightbox";
import styles from "./ProjectGallery.module.css";

interface ProjectGalleryProps {
  project: Project;
}

const groupOrder: ProjectMediaGroup[] = [
  "environments",
  "characters-animation",
  "ui-gui",
  "gameplay",
];

const groupLabels: Record<ProjectMediaGroup, string> = {
  environments: "Environments",
  "characters-animation": "Characters & Animation",
  "ui-gui": "UI / GUI",
  gameplay: "Gameplay",
};

export default function ProjectGallery({
  project,
}: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(
    null,
  );

  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const groups = groupOrder
    .map((group) => ({
      id: group,
      label: groupLabels[group],
      items: project.gallery.filter(
        (item) => item.group === group,
      ),
    }))
    .filter((group) => group.items.length > 0);

  const openLightbox = (
    index: number,
    trigger: HTMLButtonElement,
  ) => {
    triggerRef.current = trigger;
    setActiveIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);

    requestAnimationFrame(() => {
      triggerRef.current?.focus();
    });
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null || current <= 0) {
        return current;
      }

      return current - 1;
    });
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (
        current === null ||
        current >= project.gallery.length - 1
      ) {
        return current;
      }

      return current + 1;
    });
  }, [project.gallery.length]);

  const activeItem =
    activeIndex !== null
      ? project.gallery[activeIndex]
      : null;

  return (
    <>
      <section
        className={styles.section}
        aria-labelledby="project-gallery-title"
      >
        <div className="container">
          <div className={styles.header}>
            <p className={styles.eyebrow}>Project Artwork</p>

            <h2
              id="project-gallery-title"
              className={styles.title}
            >
              Selected artwork.
            </h2>
          </div>

          <div className={styles.groups}>
            {groups.map((group) => (
              <section
                key={group.id}
                className={styles.group}
                aria-labelledby={`project-group-${group.id}`}
              >
                <div className={styles.groupHeader}>
                  <h3
                    id={`project-group-${group.id}`}
                    className={styles.groupTitle}
                  >
                    {group.label}
                  </h3>

                  <span className={styles.count}>
                    {String(group.items.length).padStart(2, "0")}
                  </span>
                </div>

                <div className={styles.gallery}>
                  {group.items.map((item) => {
                    const itemIndex =
                      project.gallery.indexOf(item);

                    return (
                      <figure
                        key={item.src}
                        className={styles.item}
                      >
                        <button
                          type="button"
                          className={styles.artworkButton}
                          onClick={(event) =>
                            openLightbox(
                              itemIndex,
                              event.currentTarget,
                            )
                          }
                          aria-label={`Open artwork: ${item.alt}`}
                        >
                          <Image
                            src={item.src}
                            alt=""
                            width={item.width}
                            height={item.height}
                            className={styles.image}
                            unoptimized
                          />
                        </button>
                      </figure>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {activeItem && activeIndex !== null && (
        <ProjectLightbox
          item={activeItem}
          projectTitle={project.title}
          currentIndex={activeIndex}
          totalItems={project.gallery.length}
          hasPrevious={activeIndex > 0}
          hasNext={activeIndex < project.gallery.length - 1}
          onClose={closeLightbox}
          onPrevious={showPrevious}
          onNext={showNext}
        />
      )}
    </>
  );
}