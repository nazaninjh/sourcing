import Image from "next/image";
import { Carousel } from "antd";

import texts from "./assets/texts/brans.json";
import brandImg from "./assets/images/brand.webp";
import styles from "./brands.module.scss";
export default function BrandsComponent() {
  const settings = {
    arrows: true,
    dots: false,
    slidesToScroll: 1,
  };
  return (
    <div className="wrapper">
      <div className={styles.container}>
        <p className={styles.title}>{texts.title}</p>
        <div className={styles.items}>
          <Carousel {...settings}>
            <div className={styles.slide}>
              {new Array(6).fill(undefined).map((_, index) => (
                <Image
                  key={index}
                  src={brandImg}
                  alt=""
                  width={86}
                  height={79}
                />
              ))}
            </div>
            <div className={styles.slide}>
              {new Array(6).fill(undefined).map((_, index) => (
                <Image
                  key={index}
                  src={brandImg}
                  alt=""
                  width={86}
                  height={79}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
