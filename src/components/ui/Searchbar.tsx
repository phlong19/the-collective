import {
  Button,
  Collapse,
  DatePicker,
  Flex,
  Input,
  Modal,
  Typography,
} from "antd";
import {
  AIBackspace,
  AIChevronsDown,
  AIChevronsRight,
  AIFilter,
  AINewFolder,
  AIXmark,
} from "aveicon";
import { useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";

import DynamicAveIcon from "./DynamicAveIcon";
import ModalityIcon from "./ModalityIcon";

const { Paragraph } = Typography;

interface Props {
  padding?: string;
  border?: boolean;
}

function Searchbar({ padding = "28px 8px", border = true }: Props) {
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);
  const [opens, setOpens] = useState<string[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({});

  const [searchParams, setSearchParams] = useSearchParams();

  function search() {
    Object.entries(selectedFilters).map(([key, values]) =>
      searchParams.set(key, values.join(",")),
    );
    setSearchParams(searchParams);
  }

  function saved() {}

  function selectFilterItemChild(parent: string, child: string) {
    setSelectedFilters((prev) => {
      if (!prev[parent]) {
        prev[parent] = [];
      }

      if (!prev[parent].includes(child)) {
        return { ...prev, [parent]: [...prev[parent], child] };
      } else {
        return { ...prev, [parent]: prev[parent].filter((i) => i !== child) };
      }
    });
  }

  const renderFilterItemChild = useCallback(
    (type: string, value: string, child?: FilterItem["child"]) => {
      switch (type) {
        case "checklist":
          return (
            <Flex className="flex-wrap gap-4">
              {child?.map((item, index) => (
                <div
                  onClick={() => selectFilterItemChild(value, item.value)}
                  key={index}
                  className={`${selectedFilters[value]?.includes(item.value) ? "border-primary text-primary" : "border-gray-border text-gray-border"} cursor-grab rounded-full border px-4 py-1.5 transition-all duration-300 md:hover:border-primary md:hover:text-primary`}
                >
                  {item.label}
                </div>
              ))}
            </Flex>
          );
        case "datepicker":
          return (
            <DatePicker.RangePicker
              onChange={(_, dateString) =>
                setSelectedFilters((prev) => ({ ...prev, [value]: dateString }))
              }
              className="w-full p-4 placeholder:text-dark"
            />
          );
        case "iconlist":
          return (
            <div className="grid grid-cols-3 gap-x-[30px] gap-y-6 px-5">
              {child?.map((item, index) => {
                const isSelected = selectedFilters[value]?.includes(item.value);
                return (
                  <div
                    onClick={() => selectFilterItemChild(value, item.value)}
                    key={index}
                    className="flex cursor-pointer flex-col items-center justify-center gap-2 text-center"
                  >
                    <ModalityIcon
                      type={item.value}
                      fill={isSelected ? "white" : "gray"}
                    />
                    <Paragraph
                      style={{ color: isSelected ? "white" : "gray" }}
                      className="md:!hover:text-white !m-0"
                    >
                      {item.label}
                    </Paragraph>
                  </div>
                );
              })}
            </div>
          );
        default:
          return <></>;
      }
    },
    [selectedFilters],
  );

  return (
    <div
      style={{ padding }}
      className={`${border ? "border-t-4 border-primary" : ""} w-full bg-dark p-7 px-2`}
    >
      <div className="relative">
        <Input
          id="home"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search event"
          className="min-h-[60px] rounded-full border border-gray-border pl-4 font-comfortaa text-sm font-bold leading-5 placeholder:text-[#817F7D]"
        />
        <Button
          onClick={() => setShow(true)}
          variant="outlined"
          className="absolute rounded-full border-black hover:!border-black focus:!border-black"
          style={{
            padding: 24,
            right: 6,
            top: 5,
          }}
          icon={<AIFilter size={20} strokeWidth={1.5} />}
        />
      </div>
      <Modal
        title={
          <h1 className="font-poppins text-2xl font-semibold text-white">
            Filters
          </h1>
        }
        centered
        styles={{
          body: { flex: 1 },
          header: { background: "var(--dark)", marginBottom: "16px" },
          content: {
            background: "var(--dark)",
            color: "white",
            height: "80dvh",
            overflowY: "auto",
          },
          mask: { backgroundColor: "#808080b5" },
        }}
        style={{ maxWidth: "100%", top: 0, margin: 0, paddingBottom: 0 }}
        closeIcon={<AIXmark stroke="white" size={25} className="mt-1" />}
        open={show}
        onCancel={() => setShow(false)}
        onClose={() => setShow(false)}
        footer={
          <div
            className={`${opens.includes(filterData.slice(-1)[0].id) ? "border-t" : ""} w-full border-white pt-4 text-left`}
          >
            <Button
              className="mb-4 px-0 capitalize text-white/80 hover:!text-white"
              type="link"
              onClick={() => {
                setSelectedFilters({});
                setSearchParams({});
              }}
            >
              clear all filters
            </Button>

            <Flex className="mt-2 gap-3.5">
              <Button
                variant="outlined"
                className="h-auto w-full rounded-full px-4 py-3.5 !text-base font-bold !text-white/70 hover:!border-inherit hover:!text-white focus:!text-inherit"
                ghost
                onClick={saved}
              >
                Save Filters
              </Button>
              <Button
                className="h-auto w-full rounded-full bg-white px-4 py-3.5 !text-base font-bold text-dark hover:!border-inherit hover:!text-dark focus:!text-dark"
                onClick={search}
              >
                Confirm
              </Button>
            </Flex>
          </div>
        }
      >
        <Collapse bordered={false} expandIcon={() => <span></span>}>
          {filterData.map((item, index) => (
            <Collapse.Panel
              className="!border-none"
              key={index}
              header={
                <Flex
                  onClick={() =>
                    setOpens((prev) =>
                      prev.includes(item.id)
                        ? prev.filter((i) => i !== item.id)
                        : [...prev, item.id],
                    )
                  }
                  className="justify-between border-b border-white py-3.5"
                >
                  <Flex align="center" gap={8} className="grow">
                    <DynamicAveIcon
                      name={item.icon}
                      fill="white"
                      className="m-1 ml-0"
                    />
                    <Paragraph className="!m-0 font-comfortaa !text-sm !font-bold !text-white">
                      {item.title}
                    </Paragraph>
                  </Flex>

                  <span>
                    {opens.includes(item.id) ? (
                      <AIChevronsDown stroke="var(--primary)" size={20} />
                    ) : (
                      <AIChevronsRight stroke="white" size={20} />
                    )}
                  </span>
                </Flex>
              }
            >
              <div
                className={`${opens.includes(item.id) ? "pb-8" : ""} mt-3.5`}
              >
                {renderFilterItemChild(item.type, item.value, item.child)}
              </div>
            </Collapse.Panel>
          ))}
        </Collapse>
      </Modal>

      <Flex className="mt-5 justify-end gap-3.5">
        <Button
          type="text"
          icon={<AINewFolder fill="white" size={20} />}
          className="items-start capitalize text-white"
        >
          save filter
        </Button>
        <Button
          type="text"
          icon={<AIBackspace fill="white" size={20} />}
          className="items-start capitalize text-white"
        >
          clear all filters
        </Button>
      </Flex>
    </div>
  );
}

export default Searchbar;

interface FilterItem {
  id: string;
  value: string;
  icon: string;
  title: string;
  type: "checklist" | "iconlist" | "datepicker";
  child?: { label: string; value: string; icon?: string }[];
}

const filterData: FilterItem[] = [
  {
    id: "1357457",
    icon: "chat",
    title: "Languages",
    value: "languages",
    type: "checklist",
    child: [
      { label: "English", value: "english" },
      { label: "Spanish", value: "spanish" },
      { label: "French", value: "french" },
      { label: "German", value: "german" },
      { label: "Mandarin", value: "mandarin" },
    ],
  },
  {
    id: "64358438",
    icon: "coin",
    title: "Price",
    type: "checklist",
    value: "price",
    child: [
      { value: "ticket", label: "Ticket" },
      { label: "Free", value: "free" },
    ],
  },
  {
    id: "2357457",
    value: "eventDate",
    icon: "calendar",
    title: "Event Date",
    type: "datepicker",
  },
  {
    id: "365234",
    icon: "category",
    title: "Event Categories",
    value: "eventCategories",
    type: "checklist",
    child: [
      { label: "Music", value: "music", icon: "music2" },
      { label: "Arts", value: "arts", icon: "image" },
      { label: "Food", value: "food", icon: "gift" },
      { label: "Sports", value: "sports", icon: "buoy" },
      { label: "Education", value: "education", icon: "book" },
    ],
  },
  {
    id: "512367",
    icon: "clock",
    title: "Modality",
    type: "iconlist",
    value: "modality",
    child: [
      { label: "Online", value: "online", icon: "/online.svg" },
      { label: "Physical", value: "physical", icon: "/physical.svg" },
    ],
  },
  {
    id: "463472",
    icon: "location2",
    title: "Venue",
    value: "venue",
    type: "checklist",
    child: [
      { label: "Aliwal Arts Centre", value: "center" },
      { label: "Artscience Museum", value: "museum" },
      { label: "Asian Civilisation Museum", value: "asian" },
      { label: "Esplanade", value: "esp" },
      { label: "Good Arts Centre", value: "good" },
      { label: "Malay Heritage Centre", value: "maley" },
      { label: "National Gallery Singapore", value: "ngs" },
      { label: "National Museum of Singapore", value: "nms" },
      { label: "Peranakan Museum", value: "pera" },
      { label: "Singapore Art Museum", value: "sg" },
      { label: "Singapore Philatelic Museum", value: "phil" },
      { label: "Sun Yat Sen Nanyang Memorial Hall", value: "yat" },
      { label: "The Arts House", value: "house" },
      { label: "Victoria Theatre & Concert Hall", value: "victoria" },
    ],
  },
];
