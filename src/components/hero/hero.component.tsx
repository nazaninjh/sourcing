import Image from "next/image";
import NavbarComponent from "../navbar/navbar.component";

import texts from "./assets/texts/hero.json";

import clsx from "clsx";
import GridImageComponent from "../shared/grid-image/gridImage.component";
import { Carousel } from "antd";
import { mapImages } from "@/assets/images/mentor/mapImages";
import styles from "./hero.module.scss";
import overlay from "@/assets/images/hero/hero-overlay.webp";
import { isMobile } from "react-device-detect";

export default function HeroComponent() {
  return (
    <div className={styles.wrapper}>
      {!isMobile ? (
        <Carousel arrows fade speed={1500}>
          {texts.images.map((image, index) => (
            <div key={image.src} className={styles["img-container"]}>
              <GridImageComponent
                props={{
                  img: (
                    <Image
                      src={mapImages("hero", image.src)}
                      alt="Home Background"
                      className={styles.img}
                      width={1440}
                      height={780}
                    />
                  ),
                  hasOverlay: false,
                  customOverlay:
                    index === 0 ? <Image alt="" src={overlay} fill /> : null,
                  topChildren: {
                    direction: "start",
                    width: "100%",
                    child: (
                      <div className={styles.nav}>
                        <NavbarComponent />
                      </div>
                    ),
                  },
                  centerChildren: {
                    direction: "center",
                    width: "100%",
                    child: (
                      <div className={clsx(styles.texts)}>
                        <h1>{texts.texts.title}</h1>
                        <h4>{texts.texts.subTitle}</h4>
                        <h5>{texts.texts.content}</h5>
                        <div className={styles.btns}>
                          <button type="button">{texts.btns.archive}</button>
                          <button type="button">
                            {texts.btns.competitions}
                          </button>
                        </div>
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
            </div>
          ))}
        </Carousel>
      ) : (
        texts.images.map((image) => (
          <div key={image.src} className={styles["img-container"]}>
            <GridImageComponent
              props={{
                img: (
                  <Image
                    src={mapImages("hero", image.src)}
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
                centerChildren: {
                  direction: "center",
                  width: "100%",
                  child: (
                    <div className={clsx(styles.texts)}>
                      <h1>{texts.texts.title}</h1>
                      <h4>{texts.texts.subTitle}</h4>
                      <h5>{texts.texts.content}</h5>
                      <div className={styles.btns}>
                        <button type="button">{texts.btns.archive}</button>
                        <button type="button">{texts.btns.competitions}</button>
                      </div>
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
          </div>
        ))
      )}
    </div>
  );
}
