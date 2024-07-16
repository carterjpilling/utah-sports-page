"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import LeftColumn from "@components//Columns/LeftColumn";
import RightColumn from "@components//Columns/RightColumn";
import MiddleColumn from "@components//Columns/MiddleColumn";
import NewsCarousel from "@components//Carousels/NewsCarousel";
import OlympicNews from "@components//Olympics/OlympicNews";
import OlympicMedals from "@components//Olympics/OlympicMedals";

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

async function getOlympicData() {
  const res = await fetch(
    `https://secure.espn.com/olympics/summer/2020/medals?xhr=1`
    // {
    //   cache: "force-cache",
    //   next: { revalidate: 3600 },
    // }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return data;
}

export default function Home() {
  const [jazzData, setJazzData] = useState({});
  const [olympicNews, setOlympicNews] = useState({});
  const [olympicMedals, setOlympicMedals] = useState({});

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

    const fetchOlympicData = async () => {
      try {
        const olympicData = await getOlympicData();
        console.log("olympicData.leaders", olympicData.leaders);
        setOlympicNews(olympicData.rightCol[3]);
        setOlympicMedals(olympicData.leaders);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchOlympicData();
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
      <div className={styles.divider}></div>
      <div className={styles.carouselContainer}>
        <OlympicMedals medals={olympicMedals} />
        <OlympicNews news={olympicNews} />
      </div>
      <div className={styles.divider}></div>
    </div>
  );
}
