import styles from "./page.module.scss";

import NavbarComponent from "@/components/navbar/navbar.component";
export default function Home() {
  return (
    <main className={styles.home}>
      <NavbarComponent />
    </main>
  );
}
