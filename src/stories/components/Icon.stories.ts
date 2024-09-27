import { Meta, StoryObj } from "@storybook/react";
import { Icon } from "../../components/Icon";
import { icons } from "lucide-react";

const meta = {
  title: "B. Ejemplo/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
    name: {
      control: {
        type: "select",
      },
      options: Object.keys(icons),
      description:
        "The name of the icon to render, all icons from lucide-react are available",
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Activity",
    color: "#09f",
    size: 24,
  },
};
