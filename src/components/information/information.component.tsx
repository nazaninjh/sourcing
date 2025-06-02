import Image from "next/image";

import img from "./assets/images/video-placeholder.webp";
import texts from "./assets/texts/information.json";

import styles from "./information.module.scss";
import clsx from "clsx";
export default function InformationComponent() {
  // todo: add categories and active states, use opacity and visibility
  return (
    <div className="wrapper">
      <div className={styles.container}>
        <p className={styles["mobile-title"]}>{texts.title}</p>
        <Image src={img} alt="video" width={388} height={243} />
        <div className={styles.texts}>
          <p className={styles["title"]}>{texts.title}</p>
          <p className={clsx(styles.categories, styles.active)}>
            {texts.engineers}
          </p>
          {texts.options.map((item) => {
            return (
              <p key={item.id} className={styles.content}>
                {item.content}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
