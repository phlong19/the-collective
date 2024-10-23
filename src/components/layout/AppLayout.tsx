import { Layout } from "antd";
import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";

import { useAppSelector } from "@/hooks/hooks";

import Announcement from "../ui/Announcement";
import DesktopNavBar from "../ui/DesktopFloatMenu";
import Footer from "../ui/Footer";
import MobileNavBar from "../ui/MobileNavBar";

export default function AppLayout() {
  const matches = useMediaQuery({ query: "(max-width:768px)" });
  const { showAnnouncement } = useAppSelector((state) => state.common);

  return (
    <Layout>
      {matches ? <MobileNavBar /> : <DesktopNavBar />}
      {showAnnouncement && <Announcement />}
      <Outlet />
      <Footer />
    </Layout>
  );
}
