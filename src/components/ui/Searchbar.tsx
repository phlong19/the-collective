import { Button, Input } from "antd";
import { AIFilter } from "aveicon";
import { useState } from "react";

function Searchbar() {
  const [query, setQuery] = useState("");

  return (
    <div className="w-full border-t-4 border-primary p-7 px-2 bg-dark">
      <div className="relative">
        <Input
          id="home"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search event"
          className="min-h-[60px] font-comfortaa rounded-full border border-[#D5D4D4] pl-3.5 text-sm font-bold leading-5 placeholder:text-[#817F7D]"
        />
        <Button
          variant="outlined"
          className="absolute rounded-full border-black"
          style={{
            padding: 24,
            right: 6,
            top: 5,
          }}
          icon={<AIFilter size={20} strokeWidth={1.5} />}
        />
      </div>
    </div>
  );
}

export default Searchbar;
