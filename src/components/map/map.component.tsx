"use client";
import { isMobile } from "react-device-detect";

import { AfricaImage } from "./assets/images/africa.image";
import { IranImage } from "./assets/images/iran.image";

import { Carousel } from "antd";
import { useState } from "react";
import texts from "./assets/texts/map.json";
import clsx from "clsx";
import TextIcon from "./assets/icons/text.icon";
import styles from "./map.module.scss";

export default function MapComponent() {
  const [currentContinent, setCurrentContinent] = useState<{
    code: "africa" | "middle";
    name: string;
  }>({
    code: "africa",
    name: texts.title.africa,
  });

  const isAfrica = currentContinent.code === "africa";

  const handleContinent = (slide: number) => {
    if (slide === 0) {
      setCurrentContinent({
        code: "africa",
        name: texts.title.africa,
      });
    } else {
      setCurrentContinent({
        code: "middle",
        name: texts.title["middle-east"],
      });
    }
  };
  return (
    <div className="wrapper">
      <div className={styles.container}>
        <div className={styles.item}>
          <Carousel
            dots={false}
            arrows={true}
            afterChange={(slide) => handleContinent(slide)}
          >
            <AfricaImage
              width={isMobile ? 200 : 300}
              height={isMobile ? 239 : 507}
              pointerEvents="none"
            />
            <IranImage
              width={isMobile ? 200 : 300}
              height={isMobile ? 239 : 507}
              pointerEvents="none"
            />
          </Carousel>
        </div>
        <div className={styles.texts}>
          <div className={styles.title}>
            <span>{texts.title.pt1} </span>
            <div className={clsx(styles.continent, isAfrica && styles.africa)}>
              <span
                className={clsx(
                  styles.text,
                  isAfrica && styles.active,
                  isAfrica && styles.africa
                )}
              >
                {texts.title.africa}
              </span>
              <span
                className={clsx(
                  styles.text,
                  !isAfrica && styles.active,
                  !isAfrica && styles.east
                )}
              >
                {texts.title["middle-east"]}
              </span>
              <span className={styles["text-icon"]}>
                <TextIcon />
              </span>
            </div>

            <span> {texts.title.pt2}</span>
          </div>
          <p className={styles.content}>{texts.content}</p>
        </div>
      </div>
    </div>
  );
}
