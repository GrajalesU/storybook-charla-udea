import { Meta, StoryObj } from "@storybook/react";
import { SidebarElement } from "../../components/SidebarElement";
import { Icon } from "../../components/Icon";

const meta = {
  title: "B. Ejemplo/SidebarElement",
  component: SidebarElement,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      control: {
        type: "text",
      },
      description: "The label to render next to the icon",
    },
    name: {
      control: {
        type: "select",
      },
      options: Object.keys(Icon),
      description:
        "The name of the icon to render, all icons from lucide-react are available",
    },
  },
} satisfies Meta<typeof SidebarElement>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Home",
    name: "House",
  },
};