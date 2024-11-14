import { Badge as ABadge } from "antd";

interface Props {
  type?: string;
  label: string;
}

export default function Badge({ type, label }: Props) {
  switch (type) {
    case "filter":
      return (
        <ABadge className="border border-primary text-primary">{label}</ABadge>
      );

    default:
      // category badge
      return (
        <ABadge className="rounded-[20px] bg-info px-2.5 py-1 !font-bold">
          {label}
        </ABadge>
      );
  }
}
