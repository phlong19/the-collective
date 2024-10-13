import { Button, Input } from "antd";
import { AIFilter } from "aveicon";
import { useState } from "react";
function Searchbar() {
  const [query, setQuery] = useState("");

  return (
    <div className="relative w-full mt-3 border-t-4 border-primary px-2">
      <Input
        id="home"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          minHeight: 50,
          borderRadius: "99px",
          fontSize: "larger",
          fontWeight: 600,
        }}
      />
      <Button
        variant="outlined"
        style={{
          padding: 20,
          position: "absolute",
          right: 12,
          top: 3.5,
          borderRadius: "99px",
        }}
        icon={<AIFilter size={20} strokeWidth={1.5} />}
      />
    </div>
  );
}

export default Searchbar;
