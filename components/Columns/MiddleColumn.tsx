"use client";

import styles from "./middleColumn.module.css";
import Image from "next/image";
import { merriWeather, loraBold, loraLight, openSans } from "@/fonts";
import { Skeleton } from "@mui/material";

export default function MiddleColumn({ data }: { data: any }) {
  function displayDate(dateString: Date) {
    const date = new Date(dateString);
    return date.toDateString();
  }

  return (
    <div className={styles.middleColumnContainer}>
      {data?.articles ? (
        <>
          {data?.articles?.slice(0, 1).map((article: any) => (
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
        </>
      ) : (
        <div className={styles.articleContainer}>
          <div className={styles.imageContainer}>
            <Skeleton animation="wave" variant="rectangular" height={"100%"} />
          </div>
          <h2 className={`${loraBold.className} ${styles.headline}`}>
            {" "}
            <Skeleton animation="wave" variant="text" height={30} />
          </h2>
          <p className={loraLight.className}>
            <Skeleton animation="wave" variant="text" height={40} />
          </p>
          <div className={`${openSans.className} ${styles.articleInfo}`}>
            <p className={styles.byline}>
              <Skeleton
                animation="wave"
                variant="text"
                width={70}
                height={30}
              />
            </p>
            <p className={styles.date}>
              <Skeleton
                animation="wave"
                variant="text"
                width={100}
                height={30}
              />
            </p>{" "}
          </div>
        </div>
      )}
    </div>
  );
}
