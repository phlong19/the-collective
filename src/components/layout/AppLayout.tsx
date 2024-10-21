import { Outlet } from "react-router-dom";
import MobileNavBar from "../ui/MobileNavBar";
import { useMediaQuery } from "react-responsive";
import DesktopNavBar from "../ui/DesktopFloatMenu";
import { Flex, Layout, Typography } from "antd";
import { AIChevronsLeft, AIChevronsRight, AIXmark } from "aveicon";
import Footer from "../ui/Footer";

export default function AppLayout() {
  const matches = useMediaQuery({ query: "(max-width:768px)" });

  return (
    <Layout>
      {matches ? <MobileNavBar /> : <DesktopNavBar />}
      {/* notifications */}
      <div className="flex place-items-start gap-2 bg-dark px-4 py-3 text-white">
        <Flex align="center" gap={6}>
          <AIChevronsLeft stroke="white" size={20} />
          <p>1/2</p>
          <AIChevronsRight stroke="white" size={20} />
        </Flex>
        <Typography.Text className="line-clamp-1 pr-4 text-white" ellipsis>
          somethign important is coming, son aosnfi ansoi fonis
        </Typography.Text>
        <AIXmark stroke="white" size={25} />
      </div>
      <Outlet />
      <Footer />
    </Layout>
  );
}
