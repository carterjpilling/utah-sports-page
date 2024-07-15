import { loraBold, loraLight } from "@/fonts";
import Image from "next/image";
import styles from "./carouselCard.module.css";

export default function CarouselCard({ image, headline, description }) {
  return (
    <div>
      <Image
        src={image}
        alt={headline}
        height={221}
        width={393}
        className={styles.image}
      />
      <h2 className={`${loraBold.className} ${styles.headline}`}>{headline}</h2>
      <p className={`${loraLight.className} ${styles.description}`}>
        {description}
      </p>
    </div>
  );
}
