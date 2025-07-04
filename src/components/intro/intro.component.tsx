import Image from "next/image";
import texts from "./assets/texts/intro.json";
import { imageMap } from "./imageMap";
import styles from "./intro.module.scss";
export default function IntroComponent() {
  return (
    <div className="wrapper">
      <div className={styles.container}>
        {texts.map((text) => {
          return (
            <div className={styles.card} key={text.img}>
              <Image src={imageMap[text.img]} alt="" width={100} height={100} />
              <span> {text.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
