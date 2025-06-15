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
    const close = (e: TouchEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current?.contains(e.target as Node)
      ) {
        sidebarRef.current.classList.add("close");
      }
    };
    document.addEventListener("touchstart", close);
    return () => document.removeEventListener("touchstart", close);
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

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        className={styles.menuBtn}
        onTouchStart={() => setOpenSidebar((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {props.hamburgerIcon}
      </button>

      <div
        className={clsx(
          styles.overlay,
          openSidebar ? styles.show : styles.close
        )}
        onTouchStart={handleClose}
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
            onTouchStart={handleClose}
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
