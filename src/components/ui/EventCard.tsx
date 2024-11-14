import { Button, Flex, Image, Popover, Typography } from "antd";
import { AICalendar, AIHeart, AILocation, AIRss } from "aveicon";
import { useCallback } from "react";
import { Link } from "react-router-dom";

import { Event } from "@/services/model/model";

const { Title, Text } = Typography;

import dayjs from "dayjs";
import slugify from "slugify";

import Badge from "./Badge";

interface Props {
  data: Event;
  isCard?: boolean;
}

export default function EventCard({ data, isCard = true }: Props) {
  const {
    endDate,
    categories,
    id,
    image,
    startDate,
    title,
    hybrid,
    isFree,
    isSuperEvent,
    location,
  } = data;
  const renderCategoriesBadge = useCallback(
    (categories: Event["categories"]) =>
      categories.length <= 5 ? (
        categories.map((cat, index) => <Badge key={index} label={cat} />)
      ) : (
        <>
          {categories.slice(0, 5).map((cat, index) => (
            <Badge key={index} label={cat} />
          ))}

          <Popover
            content={
              <div className="flex gap-1">
                {categories.slice(5).map((cat, index) => (
                  <Badge key={index} label={cat} />
                ))}
              </div>
            }
            trigger="hover"
          >
            <Badge label={`+ ${categories.length - 5}`} />
          </Popover>
        </>
      ),
    [],
  );

  return (
    <Flex
      className={`${isCard ? "items-baseline overflow-hidden rounded-[20px] border border-gray-border shadow-[0px_2px_6px_2px_#00000025,_0px_1px_2px_0px_#0000004d]" : "items-center"} relative flex-col justify-center`}
    >
      {/* media */}
      <div>
        <div className="relative overflow-hidden">
          <Image
            src={image}
            alt="image"
            style={{ objectFit: "cover" }}
            className="min-h-[220px]"
            preview={false}
          />
          {isSuperEvent && (
            <div className="absolute -left-[50px] top-[12%] -rotate-45 bg-secondary px-12 py-2 text-center font-poppins !text-base !font-bold uppercase text-dark">
              <p>super event</p>
            </div>
          )}
          {isFree && (
            <div
              className={`${isCard ? "py-2" : "py-4"} absolute right-0 top-0 rounded-es-[15px] border-b-[1.5px] border-l-[1.5px] border-white bg-dark px-6 text-center font-comfortaa text-xl font-bold uppercase leading-6 text-white`}
            >
              free
            </div>
          )}
        </div>
      </div>
      {/* like btn */}
      <Button
        style={{ padding: isCard ? "14px" : "18px" }}
        className={`${isCard ? "right-3 top-[35%]" : "right-5 top-[40%]"} absolute z-20 h-auto !w-fit rounded-full hover:!border-inherit`}
        icon={<AIHeart size={isCard ? 22 : 25} />}
      ></Button>
      {/* information */}
      <Flex className="flex-col p-6" gap={isCard ? 12 : 20}>
        <Flex gap={8}>
          <AICalendar />
          <Text className="!text-base font-bold !leading-[18px]">
            {dayjs(startDate).isSame(endDate, "year")
              ? `${dayjs(startDate).format("DD MMM (ddd)")} - ${dayjs(endDate).format("DD MMM (ddd)")}`
              : `${dayjs(startDate).format("DD MMM YYYY (ddd)")} - ${dayjs(endDate).format("DD MMM YYYY (ddd)")}`}
          </Text>
        </Flex>

        <Title level={4} className="!m-0 font-poppins !text-xl">
          {title}
        </Title>

        {hybrid && (
          <Flex gap={8} align="baseline">
            <AIRss size={12} />
            <Text className="!font-bold">Available Online</Text>
          </Flex>
        )}
        {location && (
          <Flex className="items-center gap-2">
            <AILocation size={14} />
            <Text className="!text-base !font-bold">{location}</Text>
          </Flex>
        )}
        {/* badges */}
        <Flex wrap className="z-20 mb-5 gap-2">
          {renderCategoriesBadge(categories)}
        </Flex>
      </Flex>
      {/* link overlay */}
      <Link
        to={`/event/${slugify(title)}`}
        className="absolute inset-0 z-10"
      ></Link>
    </Flex>
  );
}
