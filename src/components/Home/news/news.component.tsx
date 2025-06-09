import Image from "next/image";
import { mapImages } from "@/assets/images/mentor/mapImages";

import texts from "./assets/texts/news.json";

import styles from "./news.module.scss";
import PlayIcon from "./assets/icons/play.icon";
export default function NewsComponent() {
  return (
    <section className="wrapper">
      <div className={styles.container}>
        <p className={styles.title}>{texts.title}</p>
        <div className={styles.contents}>
          <div className={styles.cards}>
            {texts.cards.map((card) => {
              return (
                <div key={card.img} className={styles.card}>
                  <div className={styles["img-container"]}>
                    <Image alt="" src={mapImages("news", card.img)} fill />
                  </div>
                  <div className={styles.texts}>
                    <p>{card.title}</p>
                    <p>{card.content}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.videos}>
            {texts.videos.map((video) => {
              return (
                <div key={video.img + video.title} className={styles.video}>
                  <Image alt="" src={mapImages("news", video.img)} fill />
                  <div className={styles.overlay} />
                  <span className={styles.icon}>
                    <PlayIcon />
                  </span>
                  <span className={styles["video-title"]}>{video.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
