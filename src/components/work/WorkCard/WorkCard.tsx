import Image from "next/image";
import type { WorkItem } from "@/types/work";
import styles from "./WorkCard.module.css";

interface WorkCardProps {
  item: WorkItem;
  onOpen: (item: WorkItem) => void;
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

export default function WorkCard({
  item,
  onOpen,
}: WorkCardProps) {
  return (
    <article className={styles.card}>
      <button
        type="button"
        className={styles.media}
        onClick={() => onOpen(item)}
        aria-label={`Open ${item.title}`}
      >
        <Image
          src={item.media}
          alt=""
          width={item.width}
          height={item.height}
          className={styles.image}
          unoptimized
        />

        {item.project && (
          <span className={styles.projectBadge}>
            Project
          </span>
        )}
      </button>

      <div className={styles.meta}>
        <div className={styles.info}>
          <p className={styles.title}>{item.title}</p>

          {item.project ? (
            <p className={styles.details}>
              {item.project.title}
            </p>
          ) : (
            item.details && (
              <p className={styles.details}>
                {item.details}
              </p>
            )
          )}
        </div>

        <p className={styles.category}>
          {item.categories
            .map(formatCategory)
            .join(" · ")}
        </p>
      </div>
    </article>
  );
}