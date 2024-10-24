import { Button, Divider, Flex, Layout, Space, Typography } from "antd";
import { AIFacebook, AIInstagram, AIYoutube } from "aveicon";
import { Link } from "react-router-dom";

import Test from "../layout/Test";

const { Footer: AntdFooter } = Layout;
const { Title } = Typography;

function Footer() {
  return (
    <AntdFooter style={{ padding: "36px 16px" }} className="bg-dark">
      <Title
        level={2}
        style={{ paddingBottom: "24px", margin: 0 }}
        className="font-poppins !text-xl leading-6 !text-white"
      >
        The Collective - Culture Anywhere
      </Title>
      <Space direction="vertical" size={24}>
        {links.map((link) => (
          <Link
            key={link}
            to={link}
            className="font-comfortaa !text-base !font-bold capitalize leading-[18px] text-white"
          >
            {link}
          </Link>
        ))}
      </Space>

      <Flex className="gap-2.5 !pt-6">
        <Link to={"fb"}>
          <Button
            variant="filled"
            className="h-auto !w-fit rounded-full !p-3"
            icon={<AIFacebook fill="#1877F2" stroke="#1877F2" size={18} />}
          ></Button>
        </Link>
        <Link to={"fb"}>
          <Button
            variant="filled"
            className="h-auto !w-fit rounded-full !p-3"
            icon={
              <AIInstagram
                size={18}
                className="from-red-400 to-lime-300 fill-blue-500 stroke-current"
              />
            }
          ></Button>
        </Link>
        <Link to={"fb"}>
          <Button
            variant="filled"
            className="h-auto !w-fit rounded-full !p-3"
            icon={<AIYoutube fill="red" stroke="white" size={18} />}
          ></Button>
        </Link>
        <Test size={16} className="" />
      </Flex>

      <Divider
        style={{ borderColor: "#e3e3e3", width: "100%", marginBlock: "36px" }}
      />

      <Space direction="vertical" size={24}>
        {links2.map((link) => (
          <Link
            to={link}
            key={link}
            className="font-comfortaa !text-sm !font-bold capitalize leading-[18px] text-white"
          >
            {link}
          </Link>
        ))}
      </Space>
    </AntdFooter>
  );
}

export default Footer;

const links = ["events", "articles", "list with us", "contact us"];
const links2 = [
  "Sitemap",
  "FAQ",
  "Report Vulnerability",
  "Privacy Statement",
  "Terms of Use",
  "Last Updated DD MM YYYY",
  `© ${new Date().getFullYear()} The Collective`,
];
