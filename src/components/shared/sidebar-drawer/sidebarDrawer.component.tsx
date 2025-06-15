"use client";
import { ReactNode, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import styles from "./sidebarDrawer.module.scss";

type IProps = {
  items: { text: string }[];
  hamburgerIcon: ReactNode;
  closeIcon: ReactNode;
  hasCloseIcon: boolean;
};
export default function SidebarDrawerComponent(props: IProps) {
  const [openSidebar, setOpenSidebar] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current?.contains(e.target as Node)
      ) {
        sidebarRef.current.classList.add("close");
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  // Lock body scroll
  useEffect(() => {
    if (openSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openSidebar]);

  const handleClose = () => {
    setOpenSidebar(false);
  };
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenSidebar(false);
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        className={styles.menuBtn}
        onClick={() => setOpenSidebar((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {props.hamburgerIcon}
      </button>

      <div
        className={clsx(
          styles.overlay,
          openSidebar ? styles.show : styles.close
        )}
        onClick={handleClose}
      />

      <aside
        ref={sidebarRef}
        className={clsx(
          styles.sidebar,
          openSidebar ? styles.show : styles.close
        )}
      >
        {props.hasCloseIcon && (
          <button
            type="button"
            onClick={handleClose}
            className={styles.closeBtn}
          >
            {props.closeIcon}
          </button>
        )}
        <ul>
          {props.items.map((item) => {
            return <li key={item.text}>{item.text}</li>;
          })}
        </ul>
      </aside>
    </div>
  );
}
