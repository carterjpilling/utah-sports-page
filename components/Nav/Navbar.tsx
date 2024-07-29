"use client";
import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  const today = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = today.toLocaleDateString("en-US", options);

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarWrapper}>
        <div>|||</div>
        <div className={styles.optionContainer}>
          <h2 className={styles.navbarOption}>Home</h2>
          <h2 className={styles.navbarOption}>Schedules</h2>
          <Link href={"/deals"} className={styles.navbarOption}>
            Sponsor Deals
          </Link>
          <h2 className={styles.navbarOption}>Team Stores</h2>
          <h2 className={styles.navbarOption}>Tickets</h2>
        </div>
        <div>{formattedDate}</div>
      </div>
    </div>
  );
}
