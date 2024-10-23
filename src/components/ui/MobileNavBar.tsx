import { Button, Drawer, Flex, Layout, Typography } from "antd";
import {
  AIBell,
  AIFacebook,
  AIInstagram,
  AIMenu,
  AISearch,
  AIUser,
  AIXmark,
  AIYoutube,
} from "aveicon";
import { useState } from "react";
import { Link } from "react-router-dom";

const { Header } = Layout;
const { Title } = Typography;

export default function MobileNavBar() {
  const [open, setOpen] = useState(false);

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
        <p className="text-white">logo</p>

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
                className="font-poppins !text-2xl !font-semibold capitalize !text-primary"
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
              className={`${link.border ? "border-gray-border border-y py-3.5" : ""} mb-4 flex w-fit items-center gap-3 font-comfortaa text-lg font-bold capitalize leading-6 text-dark`}
            >
              {link.icon === "user" ? (
                <AIUser size={25} strokeWidth={1.5} />
              ) : link.icon === "search" ? (
                <AISearch size={25} strokeWidth={1.5} />
              ) : (
                <div className="notifications">
                  <AIBell size={25} strokeWidth={1.5} />
                </div>
              )}
              <Link to={link.title.toLowerCase()}>{link.title}</Link>
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
