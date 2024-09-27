import { Meta, StoryObj } from "@storybook/react";
import { StatCard } from "../../components/StatCard";

const meta = {
  title: "B. Ejemplo/StatCard",
  component: StatCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      control: {
        type: "text",
      },
      description: "The title of the stat",
    },
    value: {
      control: {
        type: "text",
      },
      description: "The current value of the stat",
    },
    change: {
      control: {
        type: "number",
      },
      description: "The change of the stat (percentage)",
    },
  },
} satisfies Meta<typeof StatCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Positive: Story = {
  args: {
    title: "Revenue",
    value: "$5,000",
    change: 10,
  },
};

export const Negative: Story = {
  args: {
    title: "Expenses",
    value: "$3,000",
    change: -5,
  },
};