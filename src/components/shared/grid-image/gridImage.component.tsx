import styles from "./gridImage.module.scss";
import { ReactNode } from "react";
type IProps = {
  img: ReactNode;
  hasOverlay: boolean;
  topChildren?: {
    direction: "end" | "start" | "center";
    child: ReactNode;
    width?: string;
  };
  bottomChildren?: {
    direction: "end" | "start" | "center";
    child: ReactNode;
    width?: string;
  };
  centerChildren?: {
    direction: "end" | "start" | "center";
    child: ReactNode;
    width?: string;
  };
};
export default function GridImageComponent({ props }: { props: IProps }) {
  return (
    <div className={styles.wrapper}>
      {props.img}

      {props.hasOverlay && <div className={styles.overlay} />}

      <div
        className={styles["top-children-container"]}
        style={{
          justifySelf: props.topChildren?.direction ?? "",
          width: props.topChildren?.width ?? "auto",
        }}
      >
        {props.topChildren?.child ?? null}
      </div>
      <div
        className={styles["bottom-children-container"]}
        style={{
          justifySelf: props.bottomChildren?.direction ?? "",
          width: props.bottomChildren?.width ?? "auto",
        }}
      >
        {props.bottomChildren?.child ?? null}
      </div>
      <div
        className={styles["center-children-container"]}
        style={{
          justifySelf: props.centerChildren?.direction ?? "",
          width: props.centerChildren?.width ?? "auto",
        }}
      >
        {props.centerChildren?.child ?? null}
      </div>
    </div>
  );
}
