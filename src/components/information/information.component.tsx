"use client";
import Image from "next/image";

import { useState } from "react";
import img from "./assets/images/video-placeholder.webp";
import texts from "./assets/texts/information.json";

import ArrowIcon from "./assets/icons/arrow.icon";

import clsx from "clsx";
import styles from "./information.module.scss";
export default function InformationComponent() {
  const [activeState, setactiveState] = useState<
    "sin-designer" | "suleMarket" | "suleSazan"
  >("sin-designer");

  // todo: seperate breadcrumb
  return (
    <div className="wrapper">
      <div className={styles.container}>
        <p className={styles["mobile-title"]}>{texts.title}</p>
        <Image src={img} alt="video" width={388} height={243} />
        <div className={styles.texts}>
          <p className={styles["title"]}>{texts.title}</p>

          <div className={styles.breadcrumb}>
            {texts.breadcrumb.map((crumb, index) => {
              return (
                <button
                  key={crumb.code}
                  type="button"
                  className={clsx(
                    styles["bread-btn"],
                    crumb.code === activeState && styles.active
                  )}
                  onClick={() => {
                    setactiveState(
                      crumb.code as "sin-designer" | "suleMarket" | "suleSazan"
                    );
                  }}
                >
                  <p>{crumb.title}</p>
                  <span>
                    {index >= texts.breadcrumb.length - 1 ? (
                      ""
                    ) : (
                      <ArrowIcon width={16} height={16} />
                    )}
                  </span>
                </button>
              );
            })}
          </div>
          <div className={clsx(styles.categories)}>
            <div
              className={clsx(
                styles["group1"],
                activeState === "sin-designer" && styles.active
              )}
            >
              <p className={styles.content}>{texts["sin-designer"].content}</p>
            </div>

            <div
              className={clsx(
                styles["group2"],
                activeState === "suleMarket" && styles.active
              )}
            >
              <p className={styles.content}>{texts["sule-market"].content}</p>
            </div>
            <div
              className={clsx(
                styles["group3"],
                activeState === "suleSazan" && styles.active
              )}
            >
              <p className={styles.content}>{texts["sule-sazan"].content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
