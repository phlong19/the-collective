import { Button, Input } from "antd";
import { AIFilter } from "aveicon";
import { useState } from "react";

function Searchbar() {
  const [query, setQuery] = useState("");

  return (
    <div className="w-full border-t-4 border-primary bg-dark p-7 px-2">
      <div className="relative">
        <Input
          id="home"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search event"
          className="border-gray-border min-h-[60px] rounded-full border pl-3.5 font-comfortaa text-sm font-bold leading-5 placeholder:text-[#817F7D]"
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
