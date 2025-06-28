import Image from "next/image";
import GridImageComponent from "@/components/shared/grid-image/gridImage.component";

import texts from "./assets/texts/archived.json";

import PolygonIcon from "./assets/icons/polygon.icon";
import { mapImages } from "@/assets/images/mentor/mapImages";
import styles from "./archived.module.scss";

export default function ArchivedComponent() {
  return (
    <section className="wrapper">
      <div className={styles.container}>
        <p className={styles.title}>{texts.title}</p>
        <div className={styles.projects}>
          {texts.projects.map((project) => {
            return (
              <GridImageComponent
                key={project.img + project.category}
                props={{
                  hasOverlay: false,
                  img: (
                    <Image
                      src={mapImages("archived", project.img)}
                      alt=""
                      width={350}
                      height={400}
                      className={styles.img}
                    />
                  ),
                  topChildren: {
                    direction: "start",
                    child: (
                      <div className={styles["top-texts"]}>
                        <div className={styles["mobile-polygon"]}>
                          <PolygonIcon width="3.7rem" height="3.3rem" />
                        </div>
                        <div className={styles["desktop-polygon"]}>
                          <PolygonIcon width="5rem" height="4.5rem" />
                        </div>

                        <div className={styles.texts}>
                          <p className={styles.percent}>
                            {project.badge.number}
                          </p>
                          <p>{project.badge.text}</p>
                        </div>
                      </div>
                    ),
                  },
                  bottomChildren: {
                    direction: "start",
                    child: (
                      <p className={styles.category}>{project.category}</p>
                    ),
                  },
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
