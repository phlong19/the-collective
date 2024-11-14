import { Image } from "antd";
import { Link } from "react-router-dom";

import { events } from "@/pages/Events";
import { Article } from "@/services/model/model";

import EventsSwiper from "./home/EventsSwiper";

interface Props {
  event?: boolean;
  label?: string;
}
export default function RecommendedList({ event, label }: Props) {
  const defaultLabel = label
    ? label
    : event
      ? "recommended events"
      : "popular articles";

  return event ? (
    <EventsSwiper
      navigate={false}
      homepage={false}
      label={defaultLabel}
      data={events.slice(0, 5)}
    />
  ) : (
    <div className="bg-dark px-4 py-10">
      <div className="mb-7 font-poppins text-2xl font-semibold capitalize text-white">
        {defaultLabel}
      </div>
      <div className="flex flex-col gap-4">
        {articles.slice(0, 5).map(({ id, image, title }) => (
          <Link key={id} className="relative" to={title}>
            <Image
              preview={false}
              src={image}
              className="min-h-[250px] object-cover opacity-50"
            />
            <h3 className="absolute bottom-5 line-clamp-3 text-ellipsis px-7 font-poppins text-lg font-semibold text-white">
              {title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

const articles: Article[] = [
  {
    author: "hagen",
    id: "sd7g9sd8g",
    image: "/a1.png",
    title:
      "Look forward to a visual arts feast as Singapore Night Festival returns to the Bras Basah Plus some bla ting",
  },
  {
    author: "me",
    id: "asg9as8ga",
    image: "/hl1.png",
    title:
      "Look forward to a visual arts feast as Singapore Night Festival returns to the Bras Basah Plus some bla ting",
  },
  {
    author: "a",
    id: "982fn2",
    image: "/hl2.png",
    title:
      "Look forward to a visual arts feast as Singapore Night Festival returns to the Bras Basah Plus some bla ting",
  },
  {
    author: "a",
    id: "923894234a",
    image: "/hl2.png",
    title:
      "Look forward to a visual arts feast as Singapore Night Festival returns to the Bras Basah Plus some bla ting",
  },
  {
    author: "a",
    id: "asf0276",
    image: "/hl2.png",
    title:
      "Look forward to a visual arts feast as Singapore Night Festival returns to the Bras Basah Plus some bla ting",
  },
];
