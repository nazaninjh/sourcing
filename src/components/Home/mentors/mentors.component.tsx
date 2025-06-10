"use client";
import Image from "next/image";
import texts from "./assets/texts/mentors.json";
import styles from "./mentors.module.scss";
import { mapImages } from "@/assets/images/mentor/mapImages";
import { useState } from "react";
import clsx from "clsx";

export default function MentorsComponent() {
  const [hovered, setHovered] = useState<{
    state: boolean;
    index: null | number;
  }>({
    state: false,
    index: null,
  });

  return (
    <section className="wrapper">
      <div className={styles.container}>
        <div className={styles.texts}>
          <p className={styles.title}>{texts.title}</p>
          <div className={styles.contents}>
            <p>{texts["sub-title"]}</p>
            <p>{texts.content}</p>
          </div>
          <button type="button" className={styles.btn}>
            {texts["btn-text"]}
          </button>
        </div>
        <div className={styles.mentors}>
          {texts.mentors.map((mentor, index) => {
            return (
              <div key={mentor.name} className={styles.mentorCard}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={mapImages("mentor", mentor.profile)}
                    alt={mentor.name}
                    fill
                    onTouchStart={() => setHovered({ index, state: true })}
                    onTouchEnd={() => setHovered({ index: null, state: false })}
                  />
                </div>
                <div
                  className={clsx(
                    styles.overlay,
                    hovered && hovered.index === index && styles.active,
                  )}
                >
                  {mentor.speciality}
                </div>
                <p className={styles.speciality}>{mentor.speciality}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
