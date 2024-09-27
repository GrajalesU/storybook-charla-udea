import { SidebarElement } from "./SidebarElement";

export function Sidebar() {
  return (
    <nav className="bg-gray-800 text-white h-full w-64">
      <div className="p-5">
        <ul className="space-y-2">
          <li className="flex items-center">
            <SidebarElement label="Home" name="House" />
          </li>
          <li className="flex items-center">
            <SidebarElement label="Analytics" name="ChartBarBig" />
          </li>
          <li className="flex items-center">
            <SidebarElement label="Users" name="Users" />
          </li>
          <li className="flex items-center">
            <SidebarElement label="Settings" name="Settings" />
          </li>
        </ul>
      </div>
    </nav>
  );
}
