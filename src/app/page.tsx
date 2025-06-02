import HeroComponent from "@/components/hero/hero.component";
import styles from "./page.module.scss";
import FooterComponent from "@/components/footer/footer.component";

export default function Home() {
  return (
    <main>
      <HeroComponent />
      <FooterComponent />
    </main>
  );
}
