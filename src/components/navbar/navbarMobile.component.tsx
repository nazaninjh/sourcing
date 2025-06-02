"use client";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import LogoComponent from "../shared/logo-beigi/logo.component";
import { HamburgerIcon } from "./assets/icons/hamburger.icon";
import { UserIcon } from "./assets/icons/user.icon";
import vars from "@/app/styles/variables.module.scss";
import styles from "./navbar.module.scss";

export default function NavbarMobileComponent() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  //   todo: add close animation

  // Close on outside click
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
    if (!sidebarRef.current) return;
    sidebarRef.current.classList.add("close");
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
    <nav className={styles["mobile-nav"]}>
      <button
        type="button"
        className={styles.menuBtn}
        // onClick={() => {
        //   console.log("Hamburger clicked");
        //   setOpenSidebar((prev) => !prev);
        // }}
        aria-label="Toggle menu"
      >
        <HamburgerIcon color="white" />
      </button>

      <LogoComponent
        customStyles={{
          color: vars["text-light"],
          textAlign: "center",
        }}
      />

      <UserIcon />

      <div
        className={clsx(
          styles.overlay,
          openSidebar ? styles.show : styles.close,
        )}
        onClick={handleClose}
      >
        <aside
          ref={sidebarRef}
          className={clsx(
            styles.sidebar,
            openSidebar ? styles.show : styles.close,
          )}
        >
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </aside>
      </div>
    </nav>
  );
}
