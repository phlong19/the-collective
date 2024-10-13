import { useState } from "react";
import { Button, Drawer, Layout } from "antd";

import { AIMenu } from "aveicon";

const { Header } = Layout;

export default function MobileNavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header
        style={{
          padding: "0 10px",
          display: "flex",
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p>logo</p>

        <Button
          icon={<AIMenu />}
          aria-label="menu"
          onClick={() => setOpen(true)}
        />
      </Header>
      <Drawer open={open} onClose={() => setOpen(false)}>
        blabla
        <p style={{ minWidth: 300 }}>hi</p>
      </Drawer>
    </>
  );
}
