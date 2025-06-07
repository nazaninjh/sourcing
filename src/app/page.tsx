import HeroComponent from "@/components/hero/hero.component";
import FooterComponent from "@/components/footer/footer.component";
import IntroComponent from "@/components/intro/intro.component";
import InformationComponent from "@/components/information/information.component";
import BiddingComponent from "@/components/bidding/bidding.component";
import MapComponent from "@/components/map/map.component";

export default function Home() {
  return (
    <main>
      <HeroComponent />
      <IntroComponent />
      <InformationComponent />
      <BiddingComponent />
      <MapComponent />
      <FooterComponent />
    </main>
  );
}
