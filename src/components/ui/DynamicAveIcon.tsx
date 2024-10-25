import * as icon from "aveicon";

interface Props extends icon.IconProps {
  name: string;
}

export default function DynamicAveIcon({ name, ...iconProps }: Props) {
  const splitName = name
    .split(" ")
    .map((i) => i[0].toUpperCase() + i.slice(1))
    .join("");
  const formattedName = `AI${splitName}`;
  const Component = icon[formattedName as keyof typeof icon];

  if (!Component) {
    return <icon.AIArchive />;
  }

  return <Component {...iconProps} />;
}
