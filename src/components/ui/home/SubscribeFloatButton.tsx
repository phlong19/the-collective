import { Button, Flex, Input, Modal, Typography } from "antd";
import { AIArrowRight, AIMail, AIXmark } from "aveicon";
import { useState } from "react";

import CTAButton from "../CTAButton";

const { Title, Paragraph } = Typography;

export default function SubscribeFloatButton() {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState<number[]>([]);

  function close() {
    setShow(false);
  }

  return (
    <>
      <Button
        onClick={() => setShow(true)}
        style={{ padding: 40 }}
        className="sticky left-5 top-1/2 z-50 w-[72px] whitespace-normal break-words rounded-full border-none bg-primary text-center font-poppins !text-xs !font-semibold !text-white shadow-sm shadow-dark"
        variant="filled"
      >
        Subscribe now
      </Button>
      <Modal
        open={show}
        onCancel={close}
        onOk={close}
        styles={{
          body: { flex: 1 },
          content: {
            display: "flex",
            flexDirection: "column",
            height: "80dvh",
            padding: "30px 16px",
          },
          footer: {
            textAlign: "left",
          },
        }}
        style={{ paddingBottom: 0 }}
        className="rounded-xl border-t-4 border-primary"
        closeIcon={<AIXmark size={50} strokeWidth={1} />}
        footer={
          <CTAButton
            label="sign me up"
            icon={<AIArrowRight size={15} stroke="white" />}
          />
        }
      >
        <Title level={1} className="font-poppins !text-2xl text-dark">
          Newsletter
        </Title>
        <Paragraph className="max-w-[80%] !pt-6 font-comfortaa !text-base !font-normal text-dark">
          Give us a heads up on the topics that interest you
        </Paragraph>

        <Flex className="mt-8 flex-col gap-8">
          <Flex className="flex-wrap gap-2">
            {categories.map((item, index) => (
              <div
                onClick={() =>
                  setSelected((prev) =>
                    prev.includes(index)
                      ? prev.filter((i) => i !== index)
                      : [...prev, index],
                  )
                }
                key={index}
                className={`${selected.includes(index) ? "border-primary text-primary" : "border-black text-black"} rounded-full border-2 px-6 py-2 text-center font-comfortaa text-sm font-bold`}
              >
                {item}
              </div>
            ))}
          </Flex>
          <Flex className="flex-col gap-2">
            <Paragraph className="font-comfortaa !text-base !font-normal text-dark">
              Let us know who to send updates to
            </Paragraph>
            <Input
              prefix={<AIMail className="mx-2" size={20} />}
              placeholder="Email"
              className="border-gray-border h-16 border font-comfortaa !text-base !font-normal text-black"
            />
          </Flex>
        </Flex>
      </Modal>
    </>
  );
}

const categories = [
  "Recommended for You",
  "Visual",
  "Multidisciplinary",
  "Literary",
  "Theatre",
  "Film",
  "Music",
  "Dance",
  "Let's get out",
  "Photography",
  "Inspire Your Child",
  "What's Online",
  "Free",
  "Weekend Fix",
];
