import { Button } from "antd";
import { Link } from "react-router-dom";

interface Props {
  icon?: JSX.Element;
  iconPosition?: "start" | "end";
  label?: string;
  center?: boolean;
  mt?: number | string;
  onClick?: () => void;
  to?: string;
}

export default function CTAButton({
  icon,
  iconPosition = "end",
  label,
  center = true,

  mt = 20,
  onClick,
  to,
}: Props) {
  const button = (
    <Button
      onClick={onClick}
      style={{ marginTop: `${mt}px` }}
      className={`${center ? "mx-auto" : ""} z-[2] h-auto w-fit gap-2.5 rounded-full border-0 bg-dark px-8 py-3.5 text-base font-bold capitalize leading-5 text-white/90 transition-colors duration-300 hover:!bg-black/80 hover:!text-white`}
      icon={icon}
      iconPosition={iconPosition}
    >
      {label}
    </Button>
  );

  return to ? (
    <Link to={to} className="mx-auto">
      {button}
    </Link>
  ) : (
    button
  );
}
