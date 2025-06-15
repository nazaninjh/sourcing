"use client";
import Image from "next/image";

import { useState } from "react";
import img from "./assets/images/video-placeholder.webp";
import texts from "./assets/texts/information.json";

import clsx from "clsx";
import styles from "./information.module.scss";
export default function InformationComponent() {
  const [activeState, setactiveState] = useState({
    isEngineer: false,
    isContractor: true,
  });

  // todo: seperate breadcrumb
  return (
    <div className="wrapper">
      <div className={styles.container}>
        <p className={styles["mobile-title"]}>{texts.title}</p>
        <Image src={img} alt="video" width={388} height={243} />
        <div className={styles.texts}>
          <p className={styles["title"]}>{texts.title}</p>
          <div className={clsx(styles.categories)}>
            <div
              className={clsx(
                styles["group1"],
                activeState.isEngineer && styles.active
              )}
            >
              <p className={styles.title}>{texts.engineers.title}</p>
              <p className={styles.content}>{texts.engineers.content}</p>
            </div>
            <button
              type="button"
              onClick={() => {
                const active = activeState.isContractor
                  ? {
                      isContractor: false,
                      isEngineer: true,
                    }
                  : {
                      isContractor: true,
                      isEngineer: false,
                    };

                setactiveState(active);
              }}
            >
              {" >> "}
            </button>
            <div
              className={clsx(
                styles["group2"],
                activeState.isContractor && styles.active
              )}
            >
              <p className={styles.title}>{texts.contractor.title}</p>
              <p className={styles.content}>{texts.contractor.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
