import { isMobile } from "react-device-detect";

import { AfricaImage } from "./assets/images/africa.image";
import { IranImage } from "./assets/images/iran.image";
import { ArrowIcon } from "./assets/icons/arrow.icon";

import { Carousel } from "antd";

import styles from "./map.module.scss";
import { NextArrowIcon } from "./assets/icons/nextArrow";

export default function MapComponent() {
  // note: make the svg an image so it can adjust it's size
  return (
    <div className="wrapper">
      <div className={styles.container}>
        <div className={styles.item}>
          <Carousel
            arrows
            dots={false}
            prevArrow={<ArrowIcon />}
            nextArrow={<NextArrowIcon />}
            style={{
              outline: "none",
              border: "none",
            }}
          >
            <AfricaImage
              width={isMobile ? 200 : 300}
              height={isMobile ? 239 : 507}
            />
            <IranImage
              width={isMobile ? 200 : 300}
              height={isMobile ? 239 : 507}
            />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
