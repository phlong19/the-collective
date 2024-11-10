import { Button, Flex, Image, Typography } from "antd";
import { AIEye, AIHeading, AIHeart, AIShare } from "aveicon";

import CTAButton from "@/components/ui/CTAButton";

const { Title, Text } = Typography;

function Event() {
  return (
    <div>
      <div>
        <Image src="" />
      </div>

      <div className="px-4 py-6">
        {/* breadcrumb */}
        <Title className="font-poppins !text-2xl capitalize">
          Singapore night festival 2024
        </Title>
        <Text className="font-poppins !text-lg !font-semibold">
          19 Aug (Fri) - 27 Aug (Sat)
        </Text>
        <div>tags</div>
        <Flex className="my-2" align="center">
          <div>
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
            <Flex align="center" justify="center" className="mt-2" gap={8}>
              <AIEye />
              <Text className="font-comfortaa !text-sm !font-normal capitalize">
                1,200 views
              </Text>
            </Flex>
          </div>

          <CTAButton label="buy ticket" mt={0} />
        </Flex>
      </div>
    </div>
  );
}

export default Event;
