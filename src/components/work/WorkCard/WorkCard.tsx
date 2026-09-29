import Image from "next/image";
import type { WorkItem } from "@/types/work";
import styles from "./WorkCard.module.css";

interface WorkCardProps {
  item: WorkItem;
  onOpen: (item: WorkItem) => void;
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
          alt={item.alt}
          width={800}
          height={800}
          className={styles.image}
          unoptimized
        />
      </button>

      <div className={styles.meta}>
        <p className={styles.title}>{item.title}</p>

        <p className={styles.category}>
          {item.categories
            .map((category) =>
              category
                .split("-")
                .map(
                  (word) =>
                    word.charAt(0).toUpperCase() + word.slice(1),
                )
                .join(" "),
            )
            .join(" · ")}
        </p>
      </div>
    </article>
  );
}