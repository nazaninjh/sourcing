import HeroComponent from "@/components/hero/hero.component";
import FooterComponent from "@/components/footer/footer.component";
import IntroComponent from "@/components/intro/intro.component";

export default function Home() {
  return (
    <main>
      <HeroComponent />
      <IntroComponent />
      <FooterComponent />
    </main>
  );
}
