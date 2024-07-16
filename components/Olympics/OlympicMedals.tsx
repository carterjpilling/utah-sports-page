"use client";

import DoughnutChart from "../Graphs/DoughnutChart";
import MedalLeaders from "./MedalLeaders";
import styles from "./olympicMedals.module.css";

export default function OlympicMedals({ medals }) {
  return (
    <div className={styles.medalSectionContainer}>
      2020 Summer Olympics - Medal Tracker
      <div className={styles.medalInfoContainer}>
        <div className={styles.overallMedalLeaderContainer}>
          <h4>Overall Medal Leaders</h4>
          <div className={styles.doughnutChartContainer}>
            {medals?.total?.map((country) => (
              <DoughnutChart
                key={country.id}
                countryAbreviation={country.abbreviation}
                bronzeCount={country.medalStandings.bronzeMedalCount}
                silverCount={country.medalStandings.silverMedalCount}
                goldCount={country.medalStandings.goldMedalCount}
                totalCount={country.medalStandings.totalMedals}
                flag={country.flag}
              />
            ))}
          </div>
        </div>
        <div className={styles.individualMedalLeaderContainer}>
          <h4>Individual Medal Leaders</h4>
          <div className={styles.medalLeadersContainer}>
            <MedalLeaders
              medalImage={"https://a.espncdn.com/i/oly/medals/gold.svg"}
              label={"gold"}
              hexColor={"#F5AB1B"}
              data={medals?.gold}
            />
            <MedalLeaders
              medalImage={"https://a.espncdn.com/i/oly/medals/silver.svg"}
              label={"SILVER"}
              hexColor={"#B2B2B2"}
              data={medals?.silver}
            />
            <MedalLeaders
              medalImage={"https://a.espncdn.com/i/oly/medals/bronze.svg"}
              label={"BRONZE"}
              hexColor={"#D97827"}
              data={medals?.bronze}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
