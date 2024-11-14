import { Flex, Image, Typography } from "antd";

import BreadCrumb from "@/components/ui/BreadCrumb";
import CTAButton from "@/components/ui/CTAButton";
import EventCard from "@/components/ui/EventCard";
import FilterRenderGroup from "@/components/ui/FilterRenderGroup";
import RecommendedList from "@/components/ui/RecommendedList";
import Searchbar from "@/components/ui/Searchbar";

const { Text } = Typography;

export default function Events() {
  return (
    <div id="events">
      <div className="relative max-h-[150px]">
        <Image
          preview={false}
          src="/events.png"
          wrapperClassName="w-full"
          className="!h-[150px] w-full object-cover"
        />
        <BreadCrumb label="Events" custom />
      </div>

      <Searchbar padding="28px 16px" border={false} />

      <div className="px-[16.5px]">
        <FilterRenderGroup label="all events" />

        <Flex gap={16} className="flex-col">
          {events.map((event) => (
            <EventCard key={event.id} data={event} />
          ))}
        </Flex>

        <Flex gap={8} className="mt-10 flex-col">
          <Text className="text-center !text-sm !font-bold">
            Showing 10 of 100 results
          </Text>
          <CTAButton label="load more" mt={0} />
        </Flex>
      </div>

      <div className="mt-10">
        <RecommendedList event />
      </div>
    </div>
  );
}

export const events = [
  {
    title: "Fusion Arts Festival 2024",
    startDate: "2024/06/15",
    endDate: "2024/07/20",
    image: "/home-event.png",
    hybrid: false,
    categories: ["Performing Arts", "Dance", "Music", "Technology"],
    isFree: true,
    isSuperEvent: false,
    id: "d6f8b429-b81d-47b8-a1c3-5e3b972cfc6b",
    location: "Los Angeles, USA",
  },
  {
    title: "Global Voices Art Prize 2024",
    startDate: "2024/04/10",
    endDate: "2024/05/15",
    image: "/home-event.png",
    hybrid: false,
    categories: ["Multi-Disciplinary", "Visual Arts", "Innovation"],
    isFree: false,
    isSuperEvent: true,
    id: "b09a0d2b-3e9f-4d94-b3b1-b5f22a7f56c2",
    location: "Berlin, Germany",
  },
  {
    title: "Neo-Urban Art Prize 2024",
    startDate: "2024/02/05",
    endDate: "2024/03/10",
    image: "/home-event.png",
    hybrid: true,
    categories: ["Urban Art", "Street Art", "Interactive"],
    isFree: true,
    isSuperEvent: false,
    id: "3ba256e3-0f45-41f8-b2de-90d34ac77ad7",
  },
  {
    title: "Rhythm & Pixels 2024",
    startDate: "2024/09/01",
    endDate: "2024/09/30",
    image: "/home-event.png",
    hybrid: false,
    categories: ["Music", "Game", "Technology", "Experimental"],
    isFree: true,
    isSuperEvent: true,
    id: "a8f84c9b-bf9a-487d-a5fa-cdc1c6a1d1f3",
    location: "Tokyo, Japan",
  },
  {
    title: "Digital Horizons Festival 2024",
    startDate: "2024/10/01",
    endDate: "2024/11/10",
    image: "/home-event.png",
    hybrid: true,
    categories: ["Digital Art", "Technology", "Film", "Virtual Reality"],
    isFree: false,
    isSuperEvent: true,
    id: "27b755ef-7883-4634-b89f-e5c775b53da9",
  },
  {
    title: "Global Rhythms Arts Showcase 2024",
    startDate: "2024/08/15",
    endDate: "2024/09/01",
    image: "/home-event.png",
    hybrid: false,
    categories: ["World Music", "Dance", "Interactive"],
    isFree: false,
    isSuperEvent: false,
    id: "aab3f320-9112-4406-92a1-c238d2342b39",
    location: "Cape Town, South Africa",
  },
  {
    title: "TechnoArt Collective 2024",
    startDate: "2024/03/20",
    endDate: "2024/04/25",
    image: "/home-event.png",
    hybrid: false,
    categories: ["Multi-Disciplinary", "Technology", "Visual Arts", "Music"],
    isFree: true,
    isSuperEvent: true,
    id: "517fc85a-b3a0-4f2b-b45c-8be5865b87c0",
    location: "San Francisco, USA",
  },
  {
    title: "Metropolis Art Week 2024",
    startDate: "2024/07/01",
    endDate: "2024/08/01",
    image: "/home-event.png",
    hybrid: true,
    categories: ["Architecture", "Urban Art", "Design", "Film"],
    isFree: false,
    isSuperEvent: false,
    id: "9c1d66cf-e0e9-4087-9302-4f8de30c9c27",
  },
  {
    title: "NextGen Creatives 2024",
    startDate: "2024/01/10",
    endDate: "2024/02/15",
    image: "/home-event.png",
    hybrid: true,
    categories: ["Emerging Artists", "Visual Arts", "Music", "Fashion"],
    isFree: true,
    isSuperEvent: true,
    id: "6ad52c7d-bec1-438d-b71d-3bbd076e1c62",
  },
  {
    title: "Sound & Vision Expo 2024",
    startDate: "2024/11/01",
    endDate: "2024/11/30",
    image: "/home-event.png",
    hybrid: false,
    categories: ["Music", "Sound Art", "Technology", "Innovation"],
    isFree: false,
    isSuperEvent: true,
    id: "ca3e1a35-4955-4a0e-855f-2b3e4a89da72",
    location: "Berlin, Germany",
  },
];
