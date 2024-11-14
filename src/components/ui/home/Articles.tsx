import { Button, Flex, Image, Typography } from "antd";
import { AIArrowRight, AIHeart } from "aveicon";

import { Article } from "@/services/model/model";

import CTAButton from "../CTAButton";

const { Title, Text, Paragraph } = Typography;

export default function Articles() {
  return (
    <Flex style={{ paddingBlock: "36px" }} className="relative flex-col">
      {/* overlay to apply opacity on bg image */}
      <div className="absolute inset-0 z-[2] h-full w-full bg-secondary-200/35 bg-opacity-20"></div>
      <Flex
        className="z-10 mb-6 flex-col gap-2"
        style={{ paddingInline: "16px" }}
      >
        <Title
          level={3}
          className="!m-0 font-poppins !text-lg !font-semibold capitalize !text-primary"
        >
          • article •
        </Title>

        <Title
          level={2}
          className="!m-0 font-poppins !text-xl capitalize leading-6"
        >
          the talk of the town
        </Title>

        <Text className="font-comfortaa !text-lg !font-normal">
          These articles have been the latest buzz around the island.
        </Text>
      </Flex>

      {/* articles */}
      <Flex className="z-10 flex-col">
        {articles.map((item, index) =>
          index > 0 ? (
            <Flex
              key={index}
              style={{ paddingInline: "16px" }}
              className={`${index === articles.length - 1 ? "border-b" : ""} border-t border-gray-border !py-4`}
            >
              {/* wrapper for like btn */}
              <div className="relative w-full">
                <Image
                  preview={false}
                  src={item.image}
                  wrapperClassName="h-full"
                  alt="article thumbnail"
                  className="!h-full rounded object-cover"
                />

                <Button
                  style={{ padding: "10px" }}
                  className="absolute bottom-3 right-3 h-auto !w-fit rounded-full"
                  icon={<AIHeart size={18} />}
                ></Button>
              </div>
              <Flex className="flex-col gap-2 !p-4">
                <Title className="!m-0 font-poppins !text-lg !font-semibold">
                  {item.title}
                </Title>
                <Paragraph className="!m-0 italic">{item.author}</Paragraph>
              </Flex>
            </Flex>
          ) : (
            <Flex key={index} className="mt-2.5 w-full flex-col gap-3 !px-4">
              <div className="relative w-full">
                <Image
                  preview={false}
                  src={item.image}
                  alt="article thumbnail"
                  className="rounded object-cover"
                />
                <Button
                  style={{ padding: "10px" }}
                  className="absolute bottom-5 right-3 h-auto !w-fit rounded-full"
                  icon={<AIHeart size={18} />}
                ></Button>
              </div>

              <Flex className="flex-col gap-2 !px-10 !pb-6">
                <Title className="!m-0 font-poppins !text-lg !font-semibold">
                  {item.title}
                </Title>
                <Paragraph className="!m-0 italic">{item.author}</Paragraph>
              </Flex>
            </Flex>
          ),
        )}
      </Flex>

      <CTAButton
        to="articles"
        icon={<AIArrowRight stroke="white" size={12} />}
        label="view all articles"
      />
    </Flex>
  );
}

const articles: Article[] = [
  {
    id: "1",
    image: "/a1.png",
    title:
      "Look forward to a visual arts feast as Singapore Night Festival returns to the Bras Basah.Bugis precinct",
    author: "hagen",
  },
  {
    id: "2",
    image: "/a2.png",
    title: "Things to do, watch, listen: July 2022",
    author: "hagen",
  },
  {
    id: "3",
    image: "/a3.png",
    title: "Things to do, watch, listen: July 2022",
    author: "hagen",
  },
  {
    id: "4",
    image: "/a4.png",
    title: "Things to do, watch, listen: July 2022",
    author: "hagen",
  },
];
