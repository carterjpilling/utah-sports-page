"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import LeftColumn from "@components//Columns/LeftColumn";
import RightColumn from "@components//Columns/RightColumn";
import MiddleColumn from "@components//Columns/MiddleColumn";
import NewsCarousel from "@components//Carousels/NewsCarousel";

async function getJazzData() {
  const res = await fetch(
    "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/news?limit=10&team=26&categories=4564",
    {
      cache: "force-cache",
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return data;
}

export default function Home() {
  const [jazzData, setJazzData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getJazzData();
        console.log({ data });
        setJazzData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.newsContainer}>
      <div className={styles.newsColumnContainer}>
        <div className={`${styles.column} ${styles.left}`}>
          <LeftColumn data={jazzData} />
        </div>
        <div className={`${styles.column} ${styles.middle}`}>
          <MiddleColumn data={jazzData} />
        </div>
        <div className={`${styles.column} ${styles.right}`}>
          <RightColumn data={jazzData} />
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.carouselContainer}>
        <NewsCarousel data={jazzData} />
      </div>
    </div>
  );
}
