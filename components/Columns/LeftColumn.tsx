"use client";

import styles from "./leftColumn.module.css";
import { merriWeather, loraBold, openSans } from "@/fonts";

export default function LeftColumn({ data }) {
  // const calculateHoursOld = (dateString: Date) => {
  //   const contentDate = new Date(dateString);
  //   const currentDate = new Date();
  //   const differenceInTime = currentDate.getTime() - contentDate.getTime();
  //   const differenceInDays = Math.floor(differenceInTime / (1000 * 3600));
  //   return differenceInDays;
  // };

  function displayDate(dateString: Date) {
    const date = new Date(dateString);
    return date.toDateString();
  }

  return (
    <div className={styles.leftColumnContainer}>
      <h1 className={` ${merriWeather.className} ${styles.columnTitle}`}>
        Recent NBA and Jazz News
      </h1>

      {data?.articles?.slice(1, 5).map((article) => (
        <div
          className={styles.articleContainer}
          key={article.dataSourceIdentifier}
        >
          <h2 className={`${loraBold.className} ${styles.headline}`}>
            {article.headline}
          </h2>
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
