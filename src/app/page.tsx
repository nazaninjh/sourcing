import HeroComponent from "@/components/hero/hero.component";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.home}>
      <HeroComponent />
    </main>
  );
}
