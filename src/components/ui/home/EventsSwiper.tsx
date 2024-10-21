import Slider, { Settings } from "react-slick";
import { Event } from "@/services/model/model";
import { useCallback, useMemo, useState } from "react";
import { Badge, Button, Flex, Image, Popover, Typography } from "antd";
import { AIArrowRight, AICalendar, AIRss } from "aveicon";
import { SCREEN } from "@/constants/variable";
import dayjs from "@/utils/dayjs";

const { Title, Text, Paragraph } = Typography;

export default function EventsSwiper() {
  const events: Event[] = Array.from({ length: 5 }).map((_, index) => ({
    title: "IMPART Art Prize Open Call 2024",
    startDate: "2023/10/10",
    endDate: "2024/10/20",
    image: "/home-event.png",
    hybrid: true,
    categories:
      index !== 2
        ? ["Multi-Disciplinary", "Music"]
        : ["Multi-Disciplinary", "Music", "Game", "Black"],
    isFree: index % 2 === 0,
    isSuperEvent: index % 2 !== 0,
    id: Math.random().toString(),
  }));

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

  const renderCategoriesBadge = useCallback(
    (categories: Event["categories"]) =>
      categories.length <= 2 ? (
        categories.map((cat, index) => (
          <Badge
            key={index}
            className="rounded-[20px] bg-info px-2.5 py-1 !font-bold"
          >
            {cat}
          </Badge>
        ))
      ) : (
        <>
          {categories.slice(0, 2).map((cat, index) => (
            <Badge
              key={index}
              className="rounded-[20px] bg-info px-2.5 py-1 !font-bold"
            >
              {cat}
            </Badge>
          ))}

          <Popover
            content={
              <div className="flex gap-1">
                {categories.slice(2).map((cat, index) => (
                  <Badge
                    key={index}
                    className="rounded-[20px] bg-info px-2.5 py-1 !font-bold"
                  >
                    {cat}
                  </Badge>
                ))}
              </div>
            }
            trigger="hover"
          >
            <Badge className="rounded-[20px] bg-info px-2.5 py-1 !font-bold">
              + {categories.length - 2}
            </Badge>
          </Popover>
        </>
      ),
    [],
  );

  return (
    <Flex
      className="flex-col gap-5 bg-secondary"
      style={{ padding: "40px 16px" }}
    >
      <Flex gap={4} className="flex-col">
        <Title
          rootClassName="!text-primary font-poppins !text-lg"
          style={{ fontWeight: 600 }}
          level={4}
        >
          •Event•
        </Title>

        <Title className="font-poppins !text-xl font-semibold capitalize">
          what's up in the world
        </Title>
        <Paragraph className="text-lg leading-[25px]">
          Here's the latest line up not to be missed.
        </Paragraph>
      </Flex>
      <div className="mb-10">
        <Slider {...settings}>
          {events.map(
            ({
              categories,
              endDate,
              startDate,
              id,
              image,
              title,
              hybrid,
              isFree,
              isSuperEvent,
            }) => (
              <Flex key={id} className="flex-col items-center justify-center">
                {/* media */}
                <div className="relative">
                  <Image
                    src={image}
                    alt="image"
                    style={{ objectFit: "cover" }}
                    className="min-h-[220px]"
                  />
                  {(isFree || isSuperEvent) && (
                    <div className="absolute right-0 top-0 rounded-es-[15px] border-b-[1.5px] border-l-[1.5px] border-white bg-dark px-6 py-4 text-center font-comfortaa text-xl font-bold uppercase leading-6 text-white">
                      {isFree ? "free" : isSuperEvent ? "super" : ""}
                    </div>
                  )}
                </div>
                {/* information */}
                <Flex className="flex-col gap-4 p-6">
                  <Flex gap={8}>
                    <AICalendar />
                    <Text className="!text-base font-bold !leading-[18px]">
                      {dayjs(startDate).isSame(endDate, "year")
                        ? `${dayjs(startDate).format("DD MMM (ddd)")} - ${dayjs(endDate).format("DD MMM (ddd)")}`
                        : `${dayjs(startDate).format("DD MMM YYYY (ddd)")} - ${dayjs(endDate)}`}
                    </Text>
                  </Flex>
                  <Title level={4} className="font-poppins !text-xl">
                    {title}
                  </Title>
                  {hybrid && (
                    <Flex gap={8} align="baseline">
                      <AIRss size={12} />
                      <Text className="!font-bold">Available Online</Text>
                    </Flex>
                  )}
                  {/* badges */}
                  <Flex wrap gap={4} className="mb-5">
                    {renderCategoriesBadge(categories)}
                  </Flex>
                </Flex>
              </Flex>
            ),
          )}
        </Slider>
      </div>

      <Button
        className="mx-auto h-auto w-fit gap-2.5 rounded-full border-0 bg-dark px-8 py-3.5 text-base font-bold capitalize leading-5 text-white hover:bg-black/80"
        icon={<AIArrowRight stroke="white" size={12} />}
        iconPosition="end"
      >
        view all events
      </Button>
    </Flex>
  );
}
