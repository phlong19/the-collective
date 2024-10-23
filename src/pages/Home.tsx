import Articles from "@/components/ui/home/Articles";
import StayConnected from "@/components/ui/home/StayConnected";
import SubscribeFloatButton from "@/components/ui/home/SubscribeFloatButton";

import EventsSwiper from "../components/ui/home/EventsSwiper";
import HeroSwiper from "../components/ui/home/HeroSwiper";
import SpotlightArticles from "../components/ui/home/SpotlightArticles";
import Searchbar from "../components/ui/Searchbar";

export default function Home() {
  return (
    <div className="relative">
      <SubscribeFloatButton />
      <HeroSwiper />
      <Searchbar />
      <EventsSwiper />
      <SpotlightArticles />
      <Articles />
      <StayConnected />
    </div>
  );
}
