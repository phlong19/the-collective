import { Input } from "antd";
import { useState } from "react";
function Searchbar() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <Input
        id="home"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default Searchbar;
