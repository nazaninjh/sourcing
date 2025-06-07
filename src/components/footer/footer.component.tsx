"use client";
import Image from "next/image";
import Link from "next/link";
import LogoComponent from "../shared/logo-beigi/logo.component";
import vars from "./../../app/styles/variables.module.scss";
import useContent from "./assets/texts/useContent";
import footerImg from "./assets/images/footer-img.webp";
import styles from "./footer.module.scss";
import scrollToTop from "@/functions/scrollToTop";

import texts from "./assets/texts/footer.json";
import GoUOIcon from "./assets/icons/goUp.icon";
export default function FooterComponent() {
  const content = useContent();

  return (
    <div className="wrapper">
      <div className={styles.container}>
        <div className={styles["uls"]}>
          <ul>
            <li>
              <LogoComponent
                customStyles={{
                  color: vars["text-dark"],
                }}
              />
            </li>
            {content.beigi.items.map((item, index) => {
              return (
                <li key={item.linkAddress + item.title + index}>
                  <span> {item.icon}</span>
                  <span>{item.title}</span>
                  <Link href={item.linkAddress ? item.linkAddress : "#"}>
                    {item.addres}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul>
            <li className={styles.heading}>{content.media.heading}</li>
            {content.media.items.map((item, index) => {
              return (
                <li key={item.addres + item.title + index}>
                  <Image src={item.icon} alt="" width={18} height={18} />
                  <span>{item.title}</span>

                  <Link href={item.addres ? item.addres : "#"} />
                </li>
              );
            })}
          </ul>

          <Image
            src={footerImg}
            alt="نشان اطمینان"
            width={125}
            height={136}
            className={styles["bottom-img"]}
          />
        </div>
        <div className={styles.divider} />
        <div className={styles["sub-footer"]}>
          <button
            type="button"
            onClick={() => scrollToTop()}
            className={styles.btn}
          >
            <span>
              <GoUOIcon />
            </span>
            <span>{texts.goUp}</span>
          </button>
          <p>{texts.copyRight}</p>
        </div>
      </div>
    </div>
  );
}
