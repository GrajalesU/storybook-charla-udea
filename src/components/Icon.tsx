import { icons } from "lucide-react";
import { FC } from "react";

export interface IconProps {
  name: keyof typeof icons;
  color?: string;
  size?: number;
}

export const Icon: FC<IconProps> = ({ name, size = 20, ...props }) => {
  const LucideIcon = icons[name];

  return <LucideIcon size={size} {...props} />;
};
