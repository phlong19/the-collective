import EventsSwiper from "../components/ui/home/EventsSwiper";
import HeroSwiper from "../components/ui/home/HeroSwiper";
import SpotlightArticles from "../components/ui/home/SpotlightArticles";
import Searchbar from "../components/ui/Searchbar";

export default function Home() {
  return (
    <div>
      <HeroSwiper />
      <Searchbar />
      <EventsSwiper />

      <SpotlightArticles />
    </div>
  );
}
