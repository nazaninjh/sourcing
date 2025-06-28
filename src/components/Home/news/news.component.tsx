import Image from "next/image";
import { mapImages } from "@/assets/images/mentor/mapImages";

import texts from "./assets/texts/news.json";

import styles from "./news.module.scss";
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

          {texts.videos.map((video) => {
            return (
              <div key={video.src + video.title}>
                <video className={styles.videoPlayer} controls>
                  <source src="/videos/laptop-video.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
