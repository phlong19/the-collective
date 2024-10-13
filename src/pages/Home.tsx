import { Button } from "antd";
import HeroSwiper from "../components/ui/home/HeroSwiper";
import Searchbar from "../components/ui/Searchbar";

export default function Home() {
  return (
    <div>
      Home
      <HeroSwiper />
      <Searchbar />
      <Button color="primary">eheh</Button>
    </div>
  );
}
