import { Button, Drawer, Flex, Layout, Modal, Typography } from "antd";
import { AIFacebook, AIInstagram, AIMenu, AIXmark, AIYoutube } from "aveicon";
import { useState } from "react";
import { Link } from "react-router-dom";

import DynamicAveIcon from "./DynamicAveIcon";

const { Header } = Layout;
const { Title, Paragraph } = Typography;

export default function MobileNavBar() {
  const [notifications, setNotifications] = useState(fakeNotifications);

  const [open, setOpen] = useState(false);
  const [notificationDrawer, setNotificationDrawer] = useState(false);
  const [selected, setSelected] = useState<Notification | null>(null); // selected notification to open modal

  function markRead(id?: string, isRead?: boolean) {
    if (!id || typeof isRead !== "boolean") return;
    if (isRead) {
      return setSelected(null);
    }
    // api call

    // then mark as read by id and reset selected
    setNotifications((prev) =>
      prev.map((i) => (i.id === id ? { ...i, isRead: true } : i)),
    );
    setSelected(null);
  }

  return (
    <>
      <Header
        style={{
          padding: "0 10px",
          paddingRight: 0,
          display: "flex",
          position: "sticky",
          top: 0,
          zIndex: 999,
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className="bg-dark"
      >
        <Link to="/">
          <p className="text-white">logo</p>
        </Link>

        <Button
          style={{
            minWidth: "64px",
            borderRadius: 0,
            border: "none",
            height: "100%",
          }}
          className="bg-primary"
          icon={<AIMenu size={40} stroke="white" strokeWidth={1} />}
          aria-label="menu"
          onClick={() => setOpen(true)}
        />
      </Header>
      {/* general */}
      <Drawer
        width="100%"
        open={open}
        onClose={() => setOpen(false)}
        className="border-l-[16px] border-primary"
        styles={{ body: { padding: "20px 40px" } }}
        closeIcon={
          <AIXmark size={50} strokeWidth={1} style={{ marginTop: 8 }} />
        }
        title={<p>logo</p>}
      >
        {links.map((link) =>
          link.type === "list" ? (
            <Flex
              key={link.title}
              className={`${link.size === "larger" ? "mb-4 gap-3.5" : "my-8 gap-3"} flex-col`}
            >
              <Title
                className="!m-0 font-poppins !text-2xl !font-semibold capitalize !text-primary"
                level={1}
              >
                {link.title}
              </Title>
              {link.child?.map((item) => (
                <Link
                  key={item}
                  to={item}
                  className={`${link.capitalize ? "capitalize" : ""} ${link.size === "larger" ? "font-poppins text-lg font-semibold" : "font-comfortaa text-base font-bold"} text-dark`}
                >
                  {item}
                </Link>
              ))}
            </Flex>
          ) : link.type === "single" ? (
            <div
              key={link.title}
              className={`${link.border ? "border-y border-gray-border py-3.5" : ""} mb-4 flex w-fit items-center gap-3 font-comfortaa text-lg font-bold capitalize leading-6 text-dark`}
            >
              <SingleMenuLink
                icon={<DynamicAveIcon name={link.icon || ""} size={20} />}
                title={link.title}
                type={link.icon}
                countNotifications={4}
                onClick={
                  link.icon === "bell"
                    ? () => setNotificationDrawer(true)
                    : undefined
                }
              />
            </div>
          ) : (
            <Flex className="flex-col gap-[18px]" key={link.title}>
              <Title
                className="font-poppins !text-2xl !font-semibold capitalize !text-primary"
                level={1}
              >
                {link.title}
              </Title>
              <Flex className="gap-2.5">
                <Link to={"fb"}>
                  <Button
                    variant="filled"
                    className="h-auto !w-fit rounded-full bg-dark !p-2.5"
                    icon={
                      <AIFacebook
                        fill="white"
                        stroke="white"
                        strokeWidth={1.5}
                        size={19}
                      />
                    }
                  ></Button>
                </Link>
                <Link to={"fb"}>
                  <Button
                    variant="filled"
                    className="h-auto !w-fit rounded-full bg-dark !p-2.5"
                    icon={<AIInstagram fill="white" size={19} />}
                  ></Button>
                </Link>
                <Link to={"fb"}>
                  <Button
                    variant="filled"
                    className="h-auto !w-fit rounded-full bg-dark !p-2.5"
                    icon={<AIYoutube fill="white" size={19} />}
                  ></Button>
                </Link>
              </Flex>
            </Flex>
          ),
        )}
      </Drawer>

      {/* notifications */}
      <Drawer
        open={notificationDrawer}
        width="100%"
        onClose={() => setNotificationDrawer(false)}
        styles={{ body: { padding: "20px 0px" } }}
        closeIcon={
          <AIXmark size={50} strokeWidth={1} style={{ marginTop: 8 }} />
        }
      >
        <Title
          level={1}
          className="!m-0 !ml-[30px] font-poppins !text-2xl text-dark"
        >
          Notifications
        </Title>
        <Paragraph className="!m-4 !ml-auto w-fit font-comfortaa !text-base !font-bold capitalize text-primary">
          mark all as read
        </Paragraph>

        <Flex className="flex-col">
          {notifications.map((item, index) => (
            <div
              onClick={() => setSelected(item)}
              key={index}
              className={`${!item.isRead ? "border-l-4 border-primary !font-bold" : ""} ${index === notifications.length - 1 ? "border-b border-b-gray-border" : ""} w-full border-t border-t-gray-border p-4 pl-[30px] text-base font-normal`}
            >
              {item.title}
            </div>
          ))}
        </Flex>
      </Drawer>
      <Modal
        centered
        open={!!selected}
        closeIcon={null}
        title={
          <Title className="!m-0 !mr-8 !text-lg" level={2}>
            {selected?.title}
          </Title>
        }
        styles={{ content: { padding: "20px" } }}
        footer={
          <Flex>
            {selected?.count && <Paragraph>{selected.count}</Paragraph>}
            <Button
              variant="filled"
              className="ml-auto bg-primary text-white"
              onClick={() => markRead(selected?.id, selected?.isRead)}
            >
              OK
            </Button>
          </Flex>
        }
        onCancel={() => markRead(selected?.id, selected?.isRead)}
      >
        <Paragraph className="!m-0">{selected?.content}</Paragraph>
      </Modal>
    </>
  );
}

interface MenuLink {
  title: string;
  type: "list" | "single" | "social";
  size?: "small" | "larger"; // for gap size, font style
  child?: string[];
  capitalize?: boolean;
  border?: boolean;
  icon?: "user" | "search" | "bell";
}

const links: MenuLink[] = [
  {
    title: "explore",
    type: "list",
    child: ["events", "articles", "list with us", "contact us"],
    capitalize: true,
    size: "larger",
  },
  {
    title: "login / signup",
    type: "single",
    border: true,
    icon: "user",
  },
  {
    title: "search",
    type: "single",
    border: false,
    icon: "search",
  },
  {
    title: "notification",
    type: "single",
    border: false,
    icon: "bell",
  },
  {
    title: "more information",
    type: "list",
    capitalize: false,
    size: "small",
    child: [
      "Sitemap",
      "FAQ",
      "Report Vulnerability",
      "Privacy Statement",
      "Terms of Use",
    ],
  },
  { title: "follow us", type: "social" },
];

function SingleMenuLink({
  type,
  title,
  icon,
  countNotifications,
  onClick,
}: {
  type?: string;
  title: string;
  icon: JSX.Element;
  countNotifications?: number;
  onClick?: () => void;
}) {
  return type !== "bell" ? (
    <>
      {icon}
      <Link to={title.toLowerCase()}>{title}</Link>
    </>
  ) : (
    <>
      <div className="notifications relative" onClick={onClick}>
        {countNotifications && (
          <p className="absolute -right-1 -top-1.5 rounded-full bg-primary px-1 py-0.5 text-center font-poppins text-xs font-bold leading-3 text-white">
            {countNotifications}
          </p>
        )}
        {icon}
      </div>
      <p onClick={onClick}>{title}</p>
    </>
  );
}

// save mark read all and read-ed notification in local
interface Notification {
  id: string;
  title: string;
  content: string;
  isRead?: boolean;
  userID?: string;
  type: "global" | "personal";
  count?: number;
  createdAt: string;
  readAt?: string;
}

const fakeNotifications: Notification[] = [
  {
    title:
      "20 Aug 2022 - SIGUR ROS World Tour 2022 postphoned to a later date. More details will be sent to your email.",
    content:
      "20 Aug 2022 - SIGUR ROS World Tour 2022 postphoned to a later date. More details will be sent to your email. content",
    count: 402,
    createdAt: "2024-11-21 12:24:51",
    type: "global",
    id: "1",
    isRead: false,
  },
  {
    id: "2",
    title: "Latest Updates on COVID-19.",
    content: "its over",
    count: 9643,
    type: "global",
    createdAt: "2028-04-28 00:19:52",
    isRead: true,
  },
  {
    id: "3",
    title: "New events for the month of December 2022 is out!",
    content:
      "I often have to generate random UNIX timestamps so I created this simple online utility that does it for me. It lets you generate however many random POSIX times you need from a 64-bit time range. It works in the browser and is powered by alien technology from the future.",
    createdAt: "2011-01-07 16:04:52",
    type: "global",
    isRead: true,
  },
  {
    id: "4",
    title: "Your wishlist has been updated.",
    content: "read title",
    isRead: false,
    type: "personal",
    createdAt: "2018-07-18 19:35:02",
  },
];
