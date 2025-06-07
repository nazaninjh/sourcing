import { isMobile } from "react-device-detect";
import Carousel from "../shared/carousel/carousel.component";
import { AfricaImage } from "./assets/images/africa.image";
import { IranImage } from "./assets/images/iran.image";
import { ArrowIcon } from "./assets/icons/arrow.icon";

import styles from "./map.module.scss";
export default function MapComponent() {
  // note: make the svg an image so it can adjust it's size
  return (
    <div className="wrapper">
      <div className={styles.container}>
        <div className={styles.item}>
          <Carousel
            customArrows={[
              <ArrowIcon direction="left" key="left" />,
              <ArrowIcon direction="right" key="right" />,
            ]}
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
