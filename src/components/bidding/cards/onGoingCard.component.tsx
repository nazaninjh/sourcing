import Image, { StaticImageData } from "next/image";

import styles from "./onGoingCard.module.scss";
import { ReactNode } from "react";
export default function OnGoingCardComponent({
  imgSrc,
  topStartTxts,
  bottomTxts,
}: {
  imgSrc: StaticImageData;
  topStartTxts: {
    name: string;
    categoryName: string;
    category: string;
    competitionCategory: string;
  };
  bottomTxts: {
    participantName: string;
    participantNum: string;
    participantUnit: string;
    priceName: string;
    priceNum: string;
    priceUnit: string;
    icon: {
      participant: ReactNode;
      price: ReactNode;
    };
  };
}) {
  return (
    <div className={styles.wrapper}>
      <Image src={imgSrc} alt="عکس پروژه" width={387} height={255} />
      <div className={styles.overlay} />

      <div className={styles["texts-top-container"]}>
        <div className={styles["name-container"]}>
          <p className={styles.name}>{topStartTxts.name}</p>
          <div className={styles.divider} />
          <p className={styles.comp}>{topStartTxts.competitionCategory}</p>
        </div>

        <div className={styles.category}>
          <span>{topStartTxts.categoryName}</span>
          <span> : </span>
          <span>{topStartTxts.category}</span>
        </div>
      </div>
      <div className={styles["texts-bottom-container"]}>
        <div className={styles.participant}>
          <span className={styles.icon}>{bottomTxts.icon.participant}</span>
          <div className={styles.texts}>
            <span>{bottomTxts.participantName}</span>
            <span>
              {bottomTxts.participantNum} {bottomTxts.participantUnit}
            </span>
          </div>
        </div>
        <div className={styles.price}>
          <span className={styles.icon}>{bottomTxts.icon.price}</span>
          <div className={styles.texts}>
            <span>{bottomTxts.priceName}</span>
            <span>
              {bottomTxts.priceNum} {bottomTxts.priceUnit}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
