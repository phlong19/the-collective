import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import MobileNavBar from "../ui/MobileNavBar";
import { useMediaQuery } from "@mui/material";
import DesktopNavBar from "../ui/DesktopFloatMenu";

export default function AppLayout() {
  const matches = useMediaQuery("(max-width:768px)");

  return (
    <Container sx={{ maxWidth: "100% !important" }} disableGutters>
      {matches ? <MobileNavBar /> : <DesktopNavBar />}
      <Outlet />
    </Container>
  );
}
