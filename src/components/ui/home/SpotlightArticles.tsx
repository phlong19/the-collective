import { Collapse, Flex, Image, Typography } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const { Title, Paragraph, Text } = Typography;

function SpotlightArticles() {
  const [selected, setSelected] = useState(0);
  const matches = useMediaQuery({ query: "(min-width:768px)" });

  function changeSlide(index: number) {
    setSelected(index);
  }

  useEffect(() => {
    if (matches) {
      const timer = setTimeout(() => {
        changeSlide(selected > 1 ? 0 : selected + 1);
      }, 3000);

      return clearTimeout(timer);
    }
  });

  return (
    <AnimatePresence>
      <Collapse
        bordered={false}
        accordion
        className="w-full gap-4 bg-secondary-200 px-4 py-10"
        activeKey={selected}
        onChange={(key) => changeSlide(Number(key))}
      >
        {data.map((item, index) => {
          const isSelecting = selected === index;
          return (
            <Collapse.Panel
              style={{ borderBottom: 0, marginBottom: "16px" }}
              header={
                <Image
                  src={item.image}
                  preview={false}
                  className={`${!isSelecting ? "max-h-[120px] grayscale" : ""} rounded object-cover`}
                  alt="article thumbnail w-full"
                  rootClassName="w-full"
                />
              }
              key={index}
              showArrow={false}
            >
              <motion.div
                layout
                className={`wrapper flex flex-col-reverse gap-4 md:flex-row ${isSelecting ? "h-full" : "h-[120px]"}`}
              >
                {isSelecting && (
                  <Flex className="flex-col gap-2">
                    <Title
                      level={3}
                      style={{ margin: 0 }}
                      className="font-poppins !text-lg font-semibold capitalize leading-6 !text-primary"
                    >
                      • spotlight article •
                    </Title>

                    <Title level={3} style={{ margin: 0 }}>
                      {item.title}
                    </Title>
                    <Paragraph
                      style={{
                        marginTop: "16px",
                        marginBottom: 0,
                        fontWeight: 400,
                        fontSize: 16,
                        lineHeight: "24px",
                      }}
                      className="font-comfortaa text-dark"
                    >
                      {item.description}
                    </Paragraph>
                  </Flex>
                )}
              </motion.div>{" "}
            </Collapse.Panel>
          );
        })}
      </Collapse>
      {/* </Flex> */}
    </AnimatePresence>
  );
}

export default SpotlightArticles;

interface Data {
  title: string;
  image: string;
  description: string;
}

const data: Data[] = [
  {
    title: "Meet Bao Songyu: Call Him A Maker-Designer",
    description:
      "The first thing one should know about Bao Songyu is this: think of him as a maker-designer, not an artist. This is despite how the Singapore-based creator incorporates kineticism and 3D printing in his installations that explore deep topics like the future of humans.",
    image: "/hl1.png",
  },
  {
    title: "Singapore Night Festival",
    image: "/hl2.png",
    description:
      "Singapore's premier night-time arts and culture festival, the Singapore Night Festival (SNF), makes a comeback from 19 to 27 August 2022 following a two-years hiatus. Themed Rebirth for its 13th edition, the festival will bring the Bras Basah.Bugis (BBB) precinct to life again with local artists and the community reimagining the precinct in a whole new light.",
  },
  {
    title: "Fat Kids Are Harder To Kidnap 2022",
    image: "/hl3.png",
    description:
      "Sign up for an evening of laughs with How Drama's Fat Kids Are Harder To Kidnap 2022. A national treasure since 2008, this comedy fringe show returns in person this year touching on topics ranging from the local children shortages to the recent parliamentary drama.",
  },
];
