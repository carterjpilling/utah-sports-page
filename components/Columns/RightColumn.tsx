"use client";

import styles from "./rightColumn.module.css";
import Image from "next/image";
import { loraBold } from "@/fonts";

export default function RightColumn({ data }) {
  return (
    <div className={styles.rightColumnContainer}>
      {data?.articles?.slice(0, 2).map((article) => (
        <div
          className={styles.articleContainer}
          key={article.dataSourceIdentifier}
        >
          <Image
            src={article.images[0].url}
            alt={article.headline}
            height={200}
            width={315}
            className={styles.image}
          />
          <h2 className={`${loraBold.className} ${styles.headline}`}>
            {article.headline}
          </h2>
        </div>
      ))}
    </div>
  );
}
