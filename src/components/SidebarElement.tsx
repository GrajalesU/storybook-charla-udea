import { ComponentProps, FC } from "react";
import { Icon } from "./Icon";

interface SidebarElementProps extends ComponentProps<typeof Icon> {
  label: string;
}

export const SidebarElement: FC<SidebarElementProps> = ({ label, name }) => {
  return (
    <div className="flex gap-3 items-center space-x-2 p-2 rounded hover:bg-gray-700 w-full">
      <Icon name={name} />
      <span>{label}</span>
    </div>
  );
};
