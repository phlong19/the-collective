import { Outlet } from "react-router-dom";
import MobileNavBar from "../ui/MobileNavBar";
import { useMediaQuery } from "react-responsive";
import DesktopNavBar from "../ui/DesktopFloatMenu";
import { Flex, Layout } from "antd";
import { AIArrowRight } from "aveicon";
import Footer from "../ui/Footer";

export default function AppLayout() {
  const matches = useMediaQuery({ query: "(max-width:768px)" });

  return (
    <Layout>
      {matches ? <MobileNavBar /> : <DesktopNavBar />}
      {/* notifications */}
      <div className="flex items-center gap-2 bg-dark p-2 text-white">
        <Flex align="center" gap={6}>
          1/1 <AIArrowRight size={13} stroke="white" />
        </Flex>
        <p>somethign important is coming</p>
      </div>
      <Outlet />
      <Footer />
    </Layout>
  );
}
