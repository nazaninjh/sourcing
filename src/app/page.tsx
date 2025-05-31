import clsx from "clsx";
import styles from "./page.module.scss";
export default function Home() {
  return <p className={clsx(styles.home, "wrapper", "global-btn")}>Home</p>;
}
