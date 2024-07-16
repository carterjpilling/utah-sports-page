// components/DoughnutChart.js
import styles from "./doughnutChart.module.css";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Image from "next/image";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart({
  countryAbreviation,
  bronzeCount,
  silverCount,
  goldCount,
  totalCount,
  flag,
}) {
  const donutData = {
    labels: ["Bronze", "Silver", "Gold"],
    datasets: [
      {
        data: [bronzeCount, silverCount, goldCount],
        backgroundColor: ["#D97827", "#d6d6d6", "#EFA900"],
        hoverOffset: 4,
        borderWidth: 5,
      },
    ],
  };

  const options = {
    cutout: "85%", // Adjust to control the thickness of the doughnut edge
    aspectRatio: 1,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: false, // Enable tooltips
        // callbacks: {
        //   label: function (tooltipItem) {
        //     return `${tooltipItem.label}: ${tooltipItem.raw}`;
        //   },
        // },
      },
      centerText: {
        display: true,
        text: "Medals",
        color: "black",
        font: {
          size: 20,
          weight: "bold",
        },
      },
    },
  };

  return (
    <div className={styles.doughnutContainer}>
      <Doughnut data={donutData} options={options} />
      <div className={styles.centerContent}>
        <h1>{totalCount}</h1>
        <div className={styles.flagCountryContainer}>
          <Image
            src={flag.href}
            alt={flag.alt}
            width={20}
            height={20}
            // style={{ width: "15px" }}
          />
          <p>{countryAbreviation}</p>
        </div>
      </div>
    </div>
  );
}
