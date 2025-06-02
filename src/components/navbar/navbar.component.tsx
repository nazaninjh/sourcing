import LogoComponent from "../shared/logo-beigi/logo.component";
import vars from "@/app/styles/variables.module.scss";

import text from "./assets/texts/navbar.json";

import clsx from "clsx";
import styles from "./navbar.module.scss";

import NavbarMobileComponent from "./navbarMobile.component";
import { SearchIcon } from "./assets/icons/search.icon";
import ExitIcon from "./assets/icons/exit.icon";
export default function NavbarComponent() {
  return (
    <div className="wrapper">
      <nav className={clsx(styles.nav)}>
        <div className={styles.logo}>
          <LogoComponent
            customStyles={{
              color: vars["text-light"],
            }}
          />
        </div>
        <ul>
          <li>{text.options.home}</li>
          <li>{text.options.designers}</li>
          <li>{text.options.applicant}</li>
          <li>{text.options.gallary}</li>
          <li>{text.options.news}</li>
        </ul>

        <div className={styles["btn-container"]}>
          <button title="جست و جو" type="button" className={styles.btn}>
            <SearchIcon width={18} height={18} />
          </button>
          <button type="button" className={styles.btn}>
            <span>
              <ExitIcon width={16} height={14} />
            </span>
            <span>
              {text.signup.enter} | {text.signup.signup}
            </span>
          </button>
        </div>
      </nav>

      <NavbarMobileComponent />
    </div>
  );
}
