import Image from "next/image";
import NavbarComponent from "../navbar/navbar.component";

import texts from "./assets/texts/hero.json";

import clsx from "clsx";
import GridImageComponent from "../shared/grid-image/gridImage.component";

import { mapImages } from "@/assets/images/mentor/mapImages";
import styles from "./hero.module.scss";
import overlay from "@/assets/images/hero/hero-overlay.webp";

export default function HeroMobileComponent() {
  return (
    <GridImageComponent
      props={{
        img: (
          <Image
            src={mapImages("hero", "hero1")}
            alt="Home Background"
            className={styles.img}
            width={1440}
            height={780}
          />
        ),
        hasOverlay: false,
        customOverlay: <Image alt="" src={overlay} fill />,
        topChildren: {
          direction: "start",
          width: "100%",
          child: (
            <div className={styles.nav}>
              <NavbarComponent />
            </div>
          ),
        },

        bottomChildren: {
          direction: "center",
          child: (
            <div className={clsx(styles["mobile-texts"])}>
              <h1>{texts.texts.title}</h1>
              <h4>{texts.texts.subTitle}</h4>
            </div>
          ),
        },
      }}
    />
  );
}
