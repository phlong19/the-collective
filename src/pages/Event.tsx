import { Button, Flex, Image, Typography } from "antd";
import { AIEye, AIHeading, AIHeart, AIShare } from "aveicon";

import CTAButton from "@/components/ui/CTAButton";

const { Title, Text, Paragraph } = Typography;

function Event() {
  return (
    <div>
      <div>
        <Image
          src="/event-detail.png"
          className="max-h-[250px] w-full object-cover"
          alt="event detail thumbnail"
        />
      </div>

      <div className="space-y-10 px-4 py-6">
        {/* breadcrumb */}
        <div id="basic-information">
          <Title className="font-poppins !text-2xl capitalize">
            Singapore night festival 2024
          </Title>
          <Text className="mt-2 font-poppins !text-lg !font-semibold">
            19 Aug (Fri) - 27 Aug (Sat)
          </Text>
          <div>tags</div>
          <Flex className="my-2" align="center">
            <div className="w-[40%]">
              <Flex gap={8}>
                <Button
                  icon={<AIShare size={14} />}
                  variant="outlined"
                  shape="circle"
                ></Button>
                <Button
                  icon={<AIHeading size={12} />}
                  variant="outlined"
                  shape="circle"
                ></Button>
                <Button
                  icon={<AIHeart size={14} />}
                  variant="outlined"
                  shape="circle"
                ></Button>
              </Flex>
              <Flex align="center" justify="normal" className="mt-4" gap={8}>
                <div></div>
                <AIEye />
                <Text className="font-comfortaa !text-sm !font-normal capitalize">
                  1,200 views
                </Text>
              </Flex>
            </div>

            <CTAButton label="buy ticket" mt={0} />
          </Flex>
        </div>

        <div id="date-time" className="border-l-2 border-primary pl-4">
          <Paragraph className="mb-8 font-comfortaa !text-base !font-bold underline">
            Date and Time
          </Paragraph>
          <Flex className="flex-col gap-1">
            {times.map((i) => (
              <Paragraph key={i.date}>
                {i.dayOfWeek}: {i.times[0].time}
              </Paragraph>
            ))}
          </Flex>
        </div>

        <div id="links"></div>

        <div id="price-description"></div>

        <div id="media"></div>

        <div id="addition-detail"></div>

        <div id="embedded"></div>
      </div>

      {/* recommended list */}
      {/* recommended list */}
    </div>
  );
}

export default Event;

const times = [
  {
    date: "2024-11-12",
    dayOfWeek: "Tue",
    times: [
      {
        time: "7:30pm",
        legend: "PM",
        color: "#FF5733",
      },
    ],
  },
  {
    date: "2024-11-13",
    dayOfWeek: "Wed",
    times: [
      {
        time: "3:00pm",
        legend: "PM",
        color: "#33CFFF",
      },
      {
        time: "7:30pm",
        legend: "PM",
        color: "#FF5733",
      },
    ],
  },
  {
    date: "2024-11-14",
    dayOfWeek: "Thu",
    times: [
      {
        time: "7:30pm",
        legend: "PM",
        color: "#FF5733",
      },
    ],
  },
  {
    date: "2024-11-15",
    dayOfWeek: "Fri",
    times: [
      {
        time: "7:30pm",
        legend: "PM",
        color: "#FF5733",
      },
    ],
  },
  {
    date: "2024-11-16",
    dayOfWeek: "Sat",
    times: [
      {
        time: "2:30pm",
        legend: "PM",
        color: "#FF5733",
      },
      {
        time: "7:30pm",
        legend: "PM",
        color: "#FF5733",
      },
    ],
  },
  {
    date: "2024-11-17",
    dayOfWeek: "Sun",
    times: [
      {
        time: "2:30pm",
        legend: "PM",
        color: "#FF5733",
      },
    ],
  },
];
