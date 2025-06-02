import Image from "next/image";
import NavbarComponent from "../navbar/navbar.component";
import homeImg from "@/assets/images/home.webp";
import homeMobileImg from "@/assets/images/home-mobile.webp";

import text from "./assets/texts/hero.json";

import styles from "./hero.module.scss";
import clsx from "clsx";

export default function HeroComponent() {
  return (
    <div className={styles.wrapper}>
      <Image
        src={homeImg}
        alt="Home Background"
        className={styles.img}
        width={1440}
        height={780}
      />
      <Image
        src={homeMobileImg}
        alt="Home Background"
        className={styles["mobile-img"]}
        width={428}
        height={251}
      />
      <div className={styles.overlay} />
      <div className={styles.nav}>
        <NavbarComponent />
      </div>
      <div className={clsx(styles.texts)}>
        <h1>{text.texts.title}</h1>
        <h4>{text.texts.subTitle}</h4>
        <h5>{text.texts.content}</h5>
        <div className={styles.btns}>
          <button type="button">{text.btns.archive}</button>
          <button type="button">{text.btns.competitions}</button>
        </div>
      </div>
      <div className={clsx(styles["mobile-texts"])}>
        <h1>{text.texts.title}</h1>
        <h4>{text.texts.subTitle}</h4>
      </div>
    </div>
  );
}
