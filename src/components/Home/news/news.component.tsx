import Image from "next/image";
import { mapImages } from "@/assets/images/mentor/mapImages";

import texts from "./assets/texts/news.json";

import styles from "./news.module.scss";
import GridImageComponent from "@/components/shared/grid-image/gridImage.component";
import PlayIcon from "./assets/icons/play.icon";
export default function NewsComponent() {
  // CONSISTS OF VIDEO AND CARDS
  return (
    <section className="wrapper">
      <div className={styles.container}>
        <p className={styles.title}>{texts.title}</p>
        <div className={styles.contents}>
          <div className={styles.cards}>
            {texts.cards.map((card) => {
              return (
                <div key={card.img} className={styles.card}>
                  <Image
                    alt=""
                    src={mapImages("news", card.img)}
                    width={184}
                    height={105}
                  />
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
                  <GridImageComponent
                    props={{
                      img: (
                        <Image
                          alt=""
                          src={mapImages("news", video.img)}
                          width={284}
                          height={400}
                          className={styles["video-img"]}
                        />
                      ),
                      hasOverlay: true,
                      bottomChildren: {
                        direction: "start",
                        child: <p className={styles.title}>{video.title}</p>,
                      },
                      centerChildren: {
                        direction: "center",
                        child: <PlayIcon />,
                      },
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
