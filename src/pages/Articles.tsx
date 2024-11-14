import { Image } from "antd";

import BreadCrumb from "@/components/ui/BreadCrumb";
import FilterRenderGroup from "@/components/ui/FilterRenderGroup";
import Searchbar from "@/components/ui/Searchbar";

export default function Articles() {
  return (
    <div id="articles">
      <div className="relative max-h-[150px]">
        <Image
          preview={false}
          src="/articles.png"
          wrapperClassName="w-full"
          className="!h-[150px] w-full object-cover"
        />
        <BreadCrumb label="Articles" custom />
      </div>

      <Searchbar border={false} />

      <div className="px-[16.5px]">
        <FilterRenderGroup label="all articles" />
      </div>
    </div>
  );
}
