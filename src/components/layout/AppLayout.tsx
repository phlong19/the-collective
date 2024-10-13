import { Outlet } from "react-router-dom";
import MobileNavBar from "../ui/MobileNavBar";
import { useMediaQuery } from "react-responsive";
import DesktopNavBar from "../ui/DesktopFloatMenu";
import { Layout } from "antd";

const { Footer } = Layout;

export default function AppLayout() {
  const matches = useMediaQuery({ query: "(max-width:768px)" });

  return (
    <Layout>
      {matches ? <MobileNavBar /> : <DesktopNavBar />}
      {/* notifications */}
      <div className="h-11 bg-dark text-white">
        1/1 somethign important is coming
      </div>
      <Outlet />
      <Footer />
    </Layout>
  );
}
