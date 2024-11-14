import { Button, Calendar, Flex, Image, Modal, Switch, Typography } from "antd";
import {
  AIBulletList,
  AICalendar,
  AIEye,
  AIHeading,
  AIHeart,
  AIShare,
} from "aveicon";
import dayjs, { ConfigType } from "dayjs";
import { useMemo, useState } from "react";

import Badge from "@/components/ui/Badge";
import BreadCrumb from "@/components/ui/BreadCrumb";
import CTAButton from "@/components/ui/CTAButton";
import RecommendedList from "@/components/ui/RecommendedList";
import { DateTimeItem } from "@/services/model/model";

const { Title, Text, Paragraph } = Typography;

function Event() {
  const [times] = useState(defaultTimes);

  const [calendarView, setCalendarView] = useState(false);
  const [selectedDate, setSelectedDate] = useState<DateTimeItem>();
  return (
    <div>
      <div>
        <Image
          src="/event-detail.png"
          className="max-h-[250px] w-full object-cover"
          alt="event detail thumbnail"
        />
      </div>

      <div className="mt-5 px-4">
        <BreadCrumb label="Events" />
      </div>

      <div className="mt-2 space-y-10 px-4 pb-6">
        <Flex id="basic-information" className="flex-col gap-2">
          <Title className="!m-0 font-poppins !text-2xl capitalize">
            Singapore night festival 2024
          </Title>
          <Text className="font-poppins !text-lg !font-semibold">
            19 Aug (Fri) - 27 Aug (Sat)
          </Text>
          <Flex className="my-2 flex-wrap gap-1.5">
            {Array.from({ length: 6 }).map((_, index) => (
              <Badge
                key={index}
                label={String(Math.ceil(Math.random() * 1000000000))}
              />
            ))}
          </Flex>
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
        </Flex>

        <div id="date-time" className="border-l-2 border-primary pl-4">
          <Flex align="center" className="mb-2 justify-between">
            <Paragraph className="!m-0 font-poppins !text-base !font-semibold text-primary">
              Date and Time
            </Paragraph>

            <Switch
              checkedChildren={<AICalendar className="mt-0.5" fill="white" />}
              unCheckedChildren={
                <AIBulletList size={14} className="mt-0.5" stroke="white" />
              }
              onChange={() => setCalendarView((prev) => !prev)}
            />
          </Flex>
          {calendarView ? (
            <Calendar
              headerRender={() => (
                <Flex>
                  {/* todo */}
                  <span>custom header</span>
                </Flex>
              )}
              // disabledDate={(e) => {
              //   if (e.isSame(times[2].date, "day")) return true;
              //   return false;
              // }}

              validRange={[
                dayjs(times[0].date),
                dayjs(times.slice(-1)?.[0]?.date).add(1, "day"),
              ]}
              fullscreen={false}
              onSelect={(date) =>
                setSelectedDate(times.find((i) => date.isSame(i.date, "day")))
              }
            />
          ) : (
            <div>
              <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                {times.map((i) => (
                  <Paragraph key={i.date}>
                    <p className="!m-0 font-bold">
                      {dayjs(i.date).date()} {i.month?.slice(0, 3)} {i.year}
                    </p>
                    <p className="!m-0 !text-[13px]">
                      {i.dayOfWeek}:{" "}
                      {i.isFullDay
                        ? "Full day"
                        : `${dayjs(`${i.date} ${i.startTime}`).format("H:mma")} ~ ${dayjs(`${i.date} ${i.endTime}`).format("H:mma")}`}
                    </p>
                  </Paragraph>
                ))}
              </div>
            </div>
          )}

          <Modal
            open={!!selectedDate}
            onCancel={() => setSelectedDate(undefined)}
            footer={() => null}
            centered
            width="80%"
          >
            {selectedDate && (
              <>
                <Title level={5} className="capitalize">
                  {dayjs(selectedDate.date).format("ddd, DD MMMM YYYY")}
                </Title>
                {selectedDate.isFullDay ? (
                  <Paragraph>Full day event.</Paragraph>
                ) : (
                  <>
                    <Paragraph>
                      Start time:{" "}
                      {dayjs(
                        `${selectedDate.date} ${selectedDate.startTime}`,
                      ).format("H:mma")}
                    </Paragraph>
                    <Paragraph>
                      End time:{" "}
                      {dayjs(
                        `${selectedDate.date} ${selectedDate.endTime}`,
                      ).format("H:mma")}
                    </Paragraph>
                  </>
                )}
              </>
            )}
          </Modal>
        </div>

        <div id="links"></div>

        <div id="price-description"></div>

        <div id="media"></div>

        <div id="addition-detail"></div>

        <div id="embedded"></div>
      </div>

      <RecommendedList event label="you may also like" />
      <RecommendedList />
    </div>
  );
}

export default Event;

const defaultTimes: DateTimeItem[] = [
  {
    id: "8203nc2",
    date: "2024-11-12",
    dayOfWeek: "Tue",
    month: "November",
    year: "2024",
    startTime: "8:16:06 AM",
    endTime: "12:16:06 AM",
  },
  {
    id: "8192nc3",
    date: "2024-11-13",
    dayOfWeek: "Wed",
    month: "November",
    year: "2024",
    startTime: "9:00:00 AM",
    endTime: "1:00:00 PM",
  },
  {
    id: "8294nc4",
    date: "2024-11-14",
    dayOfWeek: "Thu",
    month: "November",
    year: "2024",
    startTime: "10:30:00 AM",
    endTime: "2:30:00 PM",
  },
  {
    id: "8305nc5",
    date: "2024-11-15",
    dayOfWeek: "Fri",
    month: "November",
    year: "2024",
    startTime: "7:45:00 AM",
    endTime: "11:45:00 AM",
  },
  {
    id: "8326nc6",
    date: "2024-11-16",
    dayOfWeek: "Sat",
    month: "November",
    year: "2024",
    isFullDay: true, // Example of full day event
  },
  {
    id: "8417nc7",
    date: "2024-12-17",
    dayOfWeek: "Sun",
    month: "December",
    year: "2024",
    startTime: "9:30:00 AM",
    endTime: "1:30:00 PM",
  },
];
