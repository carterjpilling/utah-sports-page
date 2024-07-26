"use client";

import { Skeleton } from "@mui/material";
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
      {data?.articles ? (
        <>
          <h1 className={` ${merriWeather.className} ${styles.columnTitle}`}>
            Recent NBA and Jazz News
          </h1>
          {data?.articles?.slice(1, 6).map((article: any) => (
            <div
              className={styles.articleContainer}
              key={article.dataSourceIdentifier}
            >
              <h2 className={`${loraBold.className} ${styles.headline}`}>
                {article.headline}
              </h2>
              <div className={`${openSans.className} ${styles.articleInfo}`}>
                <p className={styles.byline}>
                  {article.byline ? article.byline : article.type}
                </p>
                <p className={styles.date}>
                  {displayDate(article.lastModified)}
                </p>{" "}
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          <h1 className={` ${merriWeather.className} ${styles.columnTitle}`}>
            <Skeleton variant="rectangular" height={25} />
          </h1>
          {Array.from({ length: 5 }, (_, i) => i).map((_, index) => (
            <div className={styles.articleContainer} key={index}>
              <h2 className={`${loraBold.className} ${styles.headline}`}>
                <Skeleton variant="text" height={46} />
              </h2>
              <div className={`${openSans.className} ${styles.articleInfo}`}>
                <p className={styles.byline}>
                  <Skeleton variant="text" width={70} height={19} />
                </p>
                <p className={styles.date}>
                  <Skeleton variant="text" width={100} height={19} />
                </p>{" "}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
