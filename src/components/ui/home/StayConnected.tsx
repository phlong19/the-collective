import { Flex, Typography } from "antd";
import { AIArrowRight } from "aveicon";

import CTAButton from "../CTAButton";

const { Title, Paragraph } = Typography;

export default function StayConnected() {
  return (
    <Flex
      style={{ padding: "36px 16px" }}
      className="flex-col gap-4 bg-primary-400"
    >
      <Title
        className="!m-0 font-poppins !text-2xl !font-semibold capitalize"
        level={1}
      >
        Stay connected with us
      </Title>
      <div>
        <Title
          level={2}
          className="!m-0 font-poppins !text-xl capitalize !leading-6"
        >
          Subscribe to our latest news
        </Title>
        <Paragraph style={{ paddingBlock: "14px", width: "90%", margin: 0 }}>
          We can’t wait to share more awesome content with you! This is going to
          be so much fun.
        </Paragraph>
      </div>

      <CTAButton
        mt={0}
        center={false}
        label="sign me up"
        icon={<AIArrowRight size={12} stroke="white" />}
      />
    </Flex>
  );
}
