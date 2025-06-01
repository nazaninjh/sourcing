import Image from "next/image";
import NavbarComponent from "../navbar/navbar.component";
import homeImg from "@/assets/images/home.webp";
import homeMobileImg from "@/assets/images/home-mobile.webp";

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
        <h1>گـروه صنعتـی بـیـــگـــــــی</h1>
        <h4>اولین استارت آپ جمع سپاری و مسابقات معماری ایران</h4>
        <h5>
          در صنعت ساختمان فعالیت می‌کنید؟ فرقی ندارد سازنده باشید یا معمار، گروه
          بیگی برای شما بهترین و خوشایندترین تجربه همکاری را رقم خواهد.
        </h5>
      </div>
      <div className={clsx(styles["mobile-texts"])}>
        <h1>گـروه صنعتـی بـیـــگـــــــی</h1>
        <h4>اولین استارت آپ جمع سپاری و مسابقات معماری ایران</h4>
      </div>
    </div>
  );
}
