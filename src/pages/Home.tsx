import HeroSwiper from "../components/ui/home/HeroSwiper";
import SpotlightArticles from "../components/ui/home/SpotlightArticles";
import Searchbar from "../components/ui/Searchbar";

export default function Home() {
  return (
    <div>
      <HeroSwiper />
      <Searchbar />

      <SpotlightArticles />
    </div>
  );
}
