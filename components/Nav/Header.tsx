"use client";
import styles from "./header.module.css";
import { unifrakturMaguntia } from "@/fonts";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <h1 className={`${unifrakturMaguntia.className} ${styles.title}`}>
        Utah&#39;s Winning Chronicle
      </h1>
    </div>
  );
}
