"use client";

import styles from "./middleColumn.module.css";
import Image from "next/image";
import { merriWeather, loraBold, loraLight, openSans, roboto } from "@/fonts";

export default function MiddleColumn({ data }) {
  function displayDate(dateString: Date) {
    const date = new Date(dateString);
    return date.toDateString();
  }

  return (
    <div className={styles.middleColumnContainer}>
      {data?.articles?.slice(0, 1).map((article) => (
        <div
          className={styles.articleContainer}
          key={article.dataSourceIdentifier}
        >
          <div className={styles.imageContainer}>
            <Image
              src={article.images[0].url}
              alt={article.headline}
              fill={true}
              className={styles.image}
            />
          </div>
          <h2 className={`${loraBold.className} ${styles.headline}`}>
            {article.headline}
          </h2>
          <p className={loraLight.className}>{article.description}</p>
          <div className={`${openSans.className} ${styles.articleInfo}`}>
            <p className={styles.byline}>{article.byline}</p>
            <p className={styles.date}>
              {displayDate(article.lastModified)}
            </p>{" "}
          </div>
        </div>
      ))}
    </div>
  );
}
