import { CSSProperties } from "react";
import styles from "./logo.module.scss";
export default function LogoComponent({
  customStyles,
}: {
  customStyles: CSSProperties;
}) {
  return (
    <div className={styles.logo} style={customStyles}>
      BEIGI
    </div>
  );
}
