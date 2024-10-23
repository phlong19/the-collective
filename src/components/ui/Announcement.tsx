import { Button as AntButton, Flex, Typography } from "antd";
import { AIChevronsLeft, AIChevronsRight, AIXmark } from "aveicon";
import { useState } from "react";

import { useAppDispatch } from "@/hooks/hooks";
import { hideAnnouncement } from "@/services/redux/commonSlice";

const { Text } = Typography;

export default function Announcement() {
  const [selected, setSelected] = useState(0);
  const dispatch = useAppDispatch();

  function next() {
    // -1 since we use length
    // and -1 cause we need, so it is -2
    setSelected((prev) => (prev > messages.length - 2 ? 0 : prev + 1));
  }

  function prev() {
    setSelected((prev) => (prev < 1 ? messages.length - 1 : prev - 1));
  }

  return (
    <div className="flex gap-2 bg-dark px-4 pt-3 text-white">
      <Flex gap={6}>
        <Button
          onClick={prev}
          icon={<AIChevronsLeft stroke="white" size={20} />}
        ></Button>
        <p>
          {selected + 1}/{messages.length}
        </p>
        <Button
          onClick={next}
          icon={<AIChevronsRight stroke="white" size={20} />}
        ></Button>
      </Flex>
      <Text className="line-clamp-1 pr-4 text-white" ellipsis>
        {messages[selected]}
      </Text>
      <Button
        onClick={() => dispatch(hideAnnouncement())}
        icon={<AIXmark stroke="white" size={25} />}
      ></Button>
    </div>
  );
}

function Button({ onClick, icon }: { icon: JSX.Element; onClick: () => void }) {
  return (
    <AntButton
      onClick={onClick}
      ghost
      style={{
        border: "none",
        width: "auto",
        padding: 0,
        alignItems: "baseline",
      }}
      icon={icon}
    ></AntButton>
  );
}

const messages = [
  "somethign important is coming, son aosnfi ansoi fonis",
  "al that i need there, was something i couldn't find",
  "to burn it down, can't wait to burn it to the ground",
];
