import { Flex, Select, Typography } from "antd";
import { useSearchParams } from "react-router-dom";

import { SORTBY } from "@/constants/variable";

const { Title, Text } = Typography;

interface Props {
  options?: { value: string; label: string }[];
  label: string;
}

export default function FilterRenderGroup({ label, options }: Props) {
  const sortby = options ? options : SORTBY;

  const [searchParams, setSearchParams] = useSearchParams();

  const filters = searchParams.values();

  return (
    <div className="py-5">
      <Title
        level={2}
        className="font-poppins !text-xl !font-semibold capitalize text-dark"
      >
        {label}
      </Title>

      {/* render chips */}
      <div></div>

      <Flex gap={"16px"} align="center" className="mt-2.5">
        <Text className="font-comfortaa !text-sm !font-bold capitalize">
          sort by:
        </Text>

        <Select
          defaultValue={sortby[0]}
          options={sortby}
          className="h-auto flex-grow rounded-full border border-[#EBEBEB] bg-white px-2.5 py-3.5"
          labelRender={({ label }) => (
            <p className="font-comfortaa !text-sm !font-bold text-dark">
              {label}
            </p>
          )}
          popupClassName="rounded-b-[27px] !p-0"
          popupMatchSelectWidth
        />
      </Flex>
    </div>
  );
}
