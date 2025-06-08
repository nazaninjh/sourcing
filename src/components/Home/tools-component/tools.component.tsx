import Image from "next/image";
import texts from "./assets/texts/tools.json";
import crane from "./assets/images/crane-pic.webp";
import rectangle from "./assets/images/crane-rectangle.webp";
import styles from "./tools.module.scss";

export default function ToolsComponent() {
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div className={styles.bg} />
        <div className={styles["bg-desktop"]}>
          <Image src={rectangle} alt="جرثقیل" width={586} height={333} />
        </div>
        <Image src={crane} alt="جرثقیل" width={428} height={269} />
      </div>

      <div className="wrapper">
        <div className={styles.txt}>
          <p className={styles.title}>{texts.title}</p>
          <p className={styles.content}>{texts.content}</p>
          <button type="button">{texts.btnTxt}</button>
        </div>
      </div>
    </section>
  );
}
