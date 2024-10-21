import { Divider, Layout, Space, Typography } from "antd";
import { Link } from "react-router-dom";

const { Footer: AntdFooter } = Layout;
const { Title } = Typography;

function Footer() {
  return (
    <AntdFooter
      style={{ marginBottom: "10px", padding: "36px 16px" }}
      className="bg-dark"
    >
      <Title
        level={2}
        className="!mb-6 font-poppins !text-xl leading-6 !text-white"
      >
        The Collective - Culture Anywhere
      </Title>
      <Space direction="vertical" size={24}>
        {links.map((link) => (
          <Link
            to={link}
            className="font-comfortaa !text-base !font-bold capitalize leading-[18px] text-white"
          >
            {link}
          </Link>
        ))}
      </Space>

      {/* todo */}
      <Divider style={{ borderColor: "#e3e3e3", width: "100%" }} />

      <Space direction="vertical" size={24}></Space>
    </AntdFooter>
  );
}

export default Footer;

const links = ["events", "articles", "list with us", "contact us"];
