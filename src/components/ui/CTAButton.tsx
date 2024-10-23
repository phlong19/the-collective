import { Button } from "antd";

interface Props {
  icon?: JSX.Element;
  iconPosition?: "start" | "end";
  label?: string;
  center?: boolean;
  mt?: number | string;
  onClick?: () => void;
}

export default function CTAButton({
  icon,
  iconPosition = "end",
  label,
  center = true,
  mt = 20,
  onClick,
}: Props) {
  return (
    <Button
      onClick={onClick}
      style={{ marginTop: `${mt}px` }}
      className={`${center ? "mx-auto" : ""} z-[2] h-auto w-fit gap-2.5 rounded-full border-0 bg-dark px-8 py-3.5 text-base font-bold capitalize leading-5 text-white hover:bg-black/80`}
      icon={icon}
      iconPosition={iconPosition}
    >
      {label}
    </Button>
  );
}
