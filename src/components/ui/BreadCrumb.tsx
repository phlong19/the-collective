import { Breadcrumb as ABreadCrumb } from "antd";
import { AIChevronsRight } from "aveicon";
import { Link } from "react-router-dom";

interface Props {
  label: string;
  link?: string;
  colorCode?: string;
  custom?: boolean;
}

/**
 *
 * @param label string: endpoint label, default convert this into link
 * @param link if exist, override default converted label
 * @returns
 */
export default function BreadCrumb({
  label,
  link,
  colorCode = "white",
  custom = false,
}: Props) {
  const to = link ? link : label.toLowerCase();
  const color = `text-${colorCode}`;
  const fill = colorCode.split("-")[0];

  return custom ? (
    <div className={`${color} absolute bottom-[18px] left-4`}>
      <div className="flex gap-2.5">
        <Link to={"/"}>Home</Link>
        <AIChevronsRight size={20} stroke={fill} />
      </div>
      <Link
        to={to}
        className="font-poppins text-2xl font-semibold text-primary-800"
      >
        {label}
      </Link>
    </div>
  ) : (
    <ABreadCrumb separator=">">
      <ABreadCrumb.Item>
        <Link to="/">Home</Link>
      </ABreadCrumb.Item>
      <ABreadCrumb.Item separator=">">
        <Link
          to={to}
          className="font-comfortaa text-sm font-bold capitalize !text-primary-800"
        >
          {label}
        </Link>
      </ABreadCrumb.Item>
    </ABreadCrumb>
  );
}
