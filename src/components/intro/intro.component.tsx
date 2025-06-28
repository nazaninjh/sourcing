import Image from "next/image";
import texts from "./assets/texts/intro.json";

import styles from "./intro.module.scss";
import { mapImages } from "@/assets/images/mentor/mapImages";
export default function IntroComponent() {
  return (
    <div className="wrapper">
      <div className={styles.container}>
        {texts.map((text) => {
          return (
            <div className={styles.card} key={text.img}>
              <Image
                src={mapImages("intro", text.img)}
                alt=""
                width={70}
                height={70}
              />
              <span> {text.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
