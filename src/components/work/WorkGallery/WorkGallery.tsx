"use client";

import { useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  workCategories,
  type WorkCategory,
} from "@/data/categories";
import { workItems } from "@/data/work";
import type { WorkItem } from "@/types/work";
import WorkCard from "@/components/work/WorkCard/WorkCard";
import WorkLightbox from "@/components/work/WorkLightbox/WorkLightbox";
import styles from "./WorkGallery.module.css";

type ActiveCategory = "all" | WorkCategory;

const INITIAL_ITEMS = 12;
const ITEMS_PER_LOAD = 12;

function isWorkCategory(value: string | null): value is WorkCategory {
  return workCategories.some((category) => category.id === value);
}

export default function WorkGallery() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const categoryParam = searchParams.get("category");

  const activeCategory: ActiveCategory = isWorkCategory(categoryParam)
    ? categoryParam
    : "all";

  const [visibleItems, setVisibleItems] = useState(INITIAL_ITEMS);
  const [selectedItem, setSelectedItem] = useState<WorkItem | null>(null);

  const triggerElementRef = useRef<HTMLElement | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? workItems
      : workItems.filter((item) =>
          item.categories.includes(activeCategory),
        );

  const displayedItems = filteredItems.slice(0, visibleItems);

  const hasMoreItems = visibleItems < filteredItems.length;

  const selectedIndex = selectedItem
    ? filteredItems.findIndex((item) => item.id === selectedItem.id)
    : -1;

  const hasPrevious = selectedIndex > 0;
  const hasNext =
    selectedIndex >= 0 && selectedIndex < filteredItems.length - 1;

  function handleCategoryChange(category: ActiveCategory) {
    const params = new URLSearchParams(searchParams.toString());

    if (category === "all") {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    setVisibleItems(INITIAL_ITEMS);
    setSelectedItem(null);

    const queryString = params.toString();

    router.replace(
      queryString ? `${pathname}?${queryString}` : pathname,
      { scroll: false },
    );
  }

  function handleLoadMore() {
    setVisibleItems((current) => current + ITEMS_PER_LOAD);
  }

  function handleOpen(item: WorkItem) {
    triggerElementRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    setSelectedItem(item);
  }

  function handleClose() {
    setSelectedItem(null);

    requestAnimationFrame(() => {
      triggerElementRef.current?.focus();
      triggerElementRef.current = null;
    });
  }

  function handlePrevious() {
    if (!hasPrevious) {
      return;
    }

    setSelectedItem(filteredItems[selectedIndex - 1]);
  }

  function handleNext() {
    if (!hasNext) {
      return;
    }

    const nextIndex = selectedIndex + 1;

    setSelectedItem(filteredItems[nextIndex]);

    if (nextIndex >= visibleItems) {
      setVisibleItems((current) =>
        Math.min(
          current + ITEMS_PER_LOAD,
          filteredItems.length,
        ),
      );
    }
  }

  return (
    <>
      <section className={styles.section} aria-label="Work gallery">
        <div className="container">
          <div
            className={styles.filters}
            role="group"
            aria-label="Filter work by category"
          >
            <button
              type="button"
              className={`${styles.filter} ${
                activeCategory === "all" ? styles.active : ""
              }`}
              aria-pressed={activeCategory === "all"}
              onClick={() => handleCategoryChange("all")}
            >
              All
            </button>

            {workCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={`${styles.filter} ${
                  activeCategory === category.id ? styles.active : ""
                }`}
                aria-pressed={activeCategory === category.id}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className={styles.gallery}>
            {displayedItems.map((item) => (
              <WorkCard
                key={item.id}
                item={item}
                onOpen={handleOpen}
              />
            ))}
          </div>

          {hasMoreItems && (
            <div className={styles.loadMoreWrapper}>
              <button
                type="button"
                className={styles.loadMore}
                onClick={handleLoadMore}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {selectedItem && (
        <WorkLightbox
          item={selectedItem}
          hasPrevious={hasPrevious}
          hasNext={hasNext}
          onClose={handleClose}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      )}
    </>
  );
}