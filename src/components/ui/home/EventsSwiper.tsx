import { Flex, Typography } from "antd";
import { AIArrowRight } from "aveicon";
import { useMemo } from "react";
import Slider, { Settings } from "react-slick";

import { SCREEN } from "@/constants/variable";
import { Event } from "@/services/model/model";

import CTAButton from "../CTAButton";
import EventCard from "../EventCard";

const { Title, Paragraph } = Typography;

interface Props {
  data: Event[];
  homepage?: boolean;
  label?: string;
  navigate?: boolean;
}

export default function EventsSwiper({
  data,
  homepage = true,
  label,
  navigate = true,
}: Props) {
  const events: Event[] = data
    ? data
    : Array.from({ length: 5 }).map((_, index) => {
        const isEven = index % 2 === 0;

        return {
          title: "IMPART Art Prize Open Call 2024",
          startDate: isEven ? "2023/10/10" : "2024/08/03",
          endDate: "2024/10/20",
          image: "/home-event.png",
          hybrid: true,
          categories: !isEven
            ? ["Multi-Disciplinary", "Music"]
            : ["Multi-Disciplinary", "Music", "Game", "Black"],
          isFree: isEven,
          isSuperEvent: !isEven,
          id: Math.random().toString(),
        };
      });

  const settings: Settings = useMemo(
    () => ({
      infinite: true,
      dots: true,
      arrows: false,
      responsive: [
        {
          breakpoint: SCREEN.sm,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },

        {
          breakpoint: SCREEN.lg,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 3,
            centerMode: true,
          },
        },
      ],
      appendDots: (dots) => (
        <ul
          style={{
            position: "absolute",
            bottom: -20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
          }}
        >
          {dots}
        </ul>
      ),
      customPaging: () => (
        <div className={`h-2.5 w-7 rounded-full bg-white/50`}></div>
      ),
    }),
    [],
  );

  return (
    <Flex
      className="flex-col gap-5 bg-secondary"
      style={{ padding: !navigate ? "40px 16px 20px" : "40px 16px" }}
    >
      {homepage ? (
        <Flex gap={4} className="flex-col">
          <Title
            rootClassName="!text-primary font-poppins !text-lg"
            style={{ fontWeight: 600 }}
            level={4}
          >
            •Event•
          </Title>

          <Title className="!m-0 font-poppins !text-xl font-semibold capitalize">
            what's up in the world
          </Title>
          <Paragraph className="!m-0 text-lg leading-[25px]">
            Here's the latest line up not to be missed.
          </Paragraph>
        </Flex>
      ) : (
        <Title className="!m-0 font-poppins !text-xl font-semibold capitalize">
          {label}
        </Title>
      )}
      <div className="mb-10">
        <Slider {...settings}>
          {events.map((event) => (
            <EventCard key={event.id} data={event} isCard={false} />
          ))}
        </Slider>
      </div>

      {navigate && (
        <CTAButton
          to="/events"
          label="view all events"
          icon={<AIArrowRight stroke="white" size={12} />}
        />
      )}
    </Flex>
  );
}
