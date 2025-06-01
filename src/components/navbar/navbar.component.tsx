import LogoComponent from "../shared/logo-beigi/logo.component";
import vars from "@/app/styles/variables.module.scss";
import styles from "./navbar.module.scss";
import clsx from "clsx";
import { UserIcon } from "./assets/icons/user.icon";
import { HamburgerIcon } from "./assets/icons/hamburger.icon";
import NavbarMobileComponent from "./navbarMobile.component";
export default function NavbarComponent() {
  return (
    <div className="wrapper">
      <nav className={clsx(styles.nav)}>
        <div className={styles.logo}>
          <LogoComponent
            styles={{
              color: "black",
              fontFamily: "var(--rozha-fa)",
              fontSize: vars["fz-heading-md"],
            }}
          />
        </div>
        <ul>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
        </ul>

        <div className={styles["btn-container"]}>
          <button type="button" className={styles.btn}>
            @
          </button>
          <button type="button" className={styles.btn}>
            button
          </button>
        </div>
      </nav>

      <NavbarMobileComponent />
    </div>
  );
}
