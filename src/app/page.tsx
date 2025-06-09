import HeroComponent from "@/components/hero/hero.component";
import FooterComponent from "@/components/footer/footer.component";
import IntroComponent from "@/components/intro/intro.component";
import InformationComponent from "@/components/information/information.component";
import BiddingComponent from "@/components/bidding/bidding.component";
import MapComponent from "@/components/map/map.component";
import ArchivedComponent from "@/components/Home/archived-projects/archived.component";
import ToolsComponent from "@/components/Home/tools-component/tools.component";
import MentorsComponent from "@/components/Home/mentors/mentors.component";
import BrandsComponent from "@/components/Home/brands/brands.component";
import NewsComponent from "@/components/Home/news/news.component";

export default function Home() {
  return (
    <main>
      <HeroComponent />
      <IntroComponent />
      <InformationComponent />
      <BiddingComponent />
      <MapComponent />
      <ArchivedComponent />
      <ToolsComponent />
      <MentorsComponent />
      <BrandsComponent />
      <NewsComponent />
      <FooterComponent />
    </main>
  );
}
