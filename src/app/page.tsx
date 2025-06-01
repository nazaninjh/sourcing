import HeroComponent from "@/components/hero/hero.component";
import styles from "./page.module.scss";

import NavbarComponent from "@/components/navbar/navbar.component";
export default function Home() {
  return (
    <main className={styles.home}>
      <HeroComponent />
    </main>
  );
}
