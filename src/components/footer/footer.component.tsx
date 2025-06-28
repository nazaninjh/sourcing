"use client";
import Image from "next/image";
import Link from "next/link";
import LogoComponent from "../shared/logo-beigi/logo.component";
import vars from "@/app/styles/variables.module.scss";
import useContent from "./assets/texts/useContent";
import footerImg from "./assets/images/footer-img.webp";
import scrollToPosition from "@/functions/scrollToPosition";

import texts from "./assets/texts/footer.json";
import GoUOIcon from "./assets/icons/goUp.icon";
import styles from "./footer.module.scss";
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
                  <address>
                    <span> {item.icon}</span>
                    <span>{item.title}</span>
                    <Link
                      href={item.linkAddress ? item.linkAddress : "#"}
                      target="_blank"
                    >
                      {item.addres}
                    </Link>
                  </address>
                </li>
              );
            })}
          </ul>
          <ul>
            <li className={styles.heading}>{content.media.heading}</li>
            {content.media.items.map((item, index) => {
              return (
                <li key={item.address + item.title + index}>
                  <address>
                    <Image src={item.icon} alt="" width={18} height={18} />
                    <Link href={item.address || "#"} target="_blank">
                      {item.title}
                    </Link>
                  </address>
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
            onClick={() => scrollToPosition("top")}
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
