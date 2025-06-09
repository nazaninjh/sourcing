import Image from "next/image";
import brandImg from "./assets/images/brand.webp";
import styles from "./brands.module.scss";
import { Carousel } from "antd";
export default function BrandsComponent() {
  const settings = {
    arrows: true,
    dots: false,
    slidesToScroll: 1,
  };
  return (
    <div className="wrapper">
      <div className={styles.container}>
        <p>برند هایی که مارو انتخاب کردند</p>
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
