import { AppBar, Box, Drawer, IconButton, Toolbar } from "@mui/material";
import { useState } from "react";

export default function MobileNavBar() {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "end" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ justifySelf: "end" }}
            onClick={() => setOpen(true)}
          >
            <img src="/menu.png" alt="menu" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={() => setOpen(false)} anchor="right">
        blabla
        <p style={{ minWidth: 300 }}>hi</p>
      </Drawer>
    </Box>
  );
}
