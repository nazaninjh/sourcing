import LogoComponent from "../shared/logo-beigi/logo.component";
import { HamburgerIcon } from "./assets/icons/hamburger.icon";
import { UserIcon } from "./assets/icons/user.icon";

import text from "./assets/texts/navbar.json";

import vars from "@/app/styles/variables.module.scss";
import styles from "./navbar.module.scss";
import SidebarDrawerComponent from "../shared/sidebar-drawer/sidebarDrawer.component";
import { CloseIcon } from "./assets/icons/close.icon";

export default function NavbarMobileComponent() {
  return (
    <nav className={styles["mobile-nav"]}>
      <SidebarDrawerComponent
        items={[
          { text: text.options.home },
          { text: text.options.designers },
          { text: text.options.applicant },
          { text: text.options.gallary },
          { text: text.options.news },
        ]}
        hamburgerIcon={<HamburgerIcon color="white" />}
        hasCloseIcon={true}
        closeIcon={<CloseIcon />}
      />

      <LogoComponent
        customStyles={{
          color: vars["text-light"],
          textAlign: "center",
        }}
      />

      <UserIcon />
    </nav>
  );
}
