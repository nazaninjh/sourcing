import HeroComponent from "@/components/hero/hero.component";
import FooterComponent from "@/components/footer/footer.component";
import IntroComponent from "@/components/intro/intro.component";
import InformationComponent from "@/components/information/information.component";
import BiddingComponent from "@/components/bidding/bidding.component";

export default function Home() {
  return (
    <main>
      <HeroComponent />
      <IntroComponent />
      <InformationComponent />
      <BiddingComponent />
      <FooterComponent />
    </main>
  );
}
