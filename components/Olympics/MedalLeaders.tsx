import Image from "next/image";
import styles from "./medalLeaders.module.css";

export default function MedalLeaders({ medalImage, label, hexColor, data }) {
  return (
    <div className={styles.medalLeaderContainer}>
      <div className={styles.medalHeader}>
        <Image width={20} height={30} src={medalImage} alt={label} />
        <h4>{label}</h4>
      </div>

      <div className={styles.medalHeader}></div>
      {/* <div>{data}</div> */}
    </div>
  );
}
