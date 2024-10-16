import { Flex, Image, Typography } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const { Title, Paragraph, Text } = Typography;

function SpotlightArticles() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setSelected((prev) => (prev > 1 ? 0 : prev + 1));
    }, 3000);
  });

  return (
    <AnimatePresence>
      <Flex gap={10}>
        {data.map((item, index) => (
          <motion.div
            key={index}
            className={`flex gap-4 ${selected === index ? "w-full" : "w-20"}`}
          >
            <Flex className="flex-col">
              <Title level={3}>{item.title}</Title>
              <Paragraph>{item.description}</Paragraph>
            </Flex>

            <Image src={item.image} alt="article thumbnail" />
          </motion.div>
        ))}
      </Flex>
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
      "The first thing one should know about Bao Songyu is this: think of him as a maker-designer, not an artist.",
    image: "",
  },
  {
    title: "Singapore Night Festival",
    image: "",
    description:
      "Singapore's premier night-time arts and culture festival, the Singapore Night Festival (SNF), makes a comeback from 19 to 27 August 2022 following a two-years hiatus. Themed Rebirth for its 13th edition, the festival will bring the Bras Basah.Bugis (BBB) precinct to life again with local artists and the community reimagining the precinct in a whole new light.",
  },
  {
    title: "Fat Kids Are Harder To Kidnap 2022",
    image: "",
    description:
      "Sign up for an evening of laughs with How Drama's Fat Kids Are Harder To Kidnap 2022. A national treasure since 2008, this comedy fringe show returns in person this year touching on topics ranging from the local children shortages to the recent parliamentary drama.",
  },
];
