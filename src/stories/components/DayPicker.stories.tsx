import { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";
import { useState } from "react";
import { DayPicker } from "react-day-picker";

const meta = {
  title: "B. Ejemplo/DayPicker",
  component: DayPicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: {
        type: "select",
      },
      options: ["single", "multiple", "range"],
      description: "The selection mode",
    },
    selected: {
      control: {
        type: "date",
      },
      description: "The selected date(s)",
    },
    startMonth: {
      control: {
        type: "date",
      },
      description: "The earliest month to start the month navigation.",
    },
    endMonth: {
      control: {
        type: "date",
      },
      description: "The latest month to end the month navigation.",
    },
    hidden: {
      description:
        "Apply the hidden modifier to the matching days. Will hide them from the calendar",
    },
    min: {
      control: {
        type: "number",
      },
      description:
        "The minimum number of selectable days. (Only for mode='multiple')",
    },
    max: {
      control: {
        type: "number",
      },
      description:
        "The maximum number of selectable days. (Only for mode='multiple')",
    },
    disabled: {
      description: "Allowing to disable the whole calendar",
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    onSelect: fn(),
  },
} satisfies Meta<typeof DayPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

const SingleComponent: Story["render"] = (props) => {
  const [selectedDate, setSelectedDate] = useState(
    props.mode === "single" ? props.selected : undefined
  );
  return (
    <DayPicker
      {...props}
      mode="single"
      selected={selectedDate}
      onSelect={(newDate) => setSelectedDate(newDate)}
    />
  );
};

export const Single: Story = {
  args: {
    mode: "single",
  },
  render: SingleComponent,
};

const MultipleComponent: Story["render"] = (props) => {
  const [selectedDate, setSelectedDate] = useState(
    props.mode === "multiple" ? props.selected : undefined
  );
  return (
    <DayPicker
      {...props}
      mode="multiple"
      selected={selectedDate}
      onSelect={(newDate) => setSelectedDate(newDate)}
    />
  );
};

export const Multiple: Story = {
  args: {
    mode: "multiple",
    max: 2,
    min: 0,
  },
  render: MultipleComponent,
};

const RangeComponent: Story["render"] = (props) => {
  const [selectedDate, setSelectedDate] = useState(
    props.mode === "range" ? props.selected : undefined
  );
  return (
    <DayPicker
      {...props}
      mode="range"
      selected={selectedDate}
      onSelect={(newDate) => setSelectedDate(newDate)}
    />
  );
};

export const Range: Story = {
  args: {
    mode: "range",
  },
  render: RangeComponent,
};

export const SingleCanChooseDate: Story = {
  name: "test - Single can choose date",
  args: {
    mode: "single",
  },
  render: SingleComponent,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByText("15"));

    await expect(canvas.getByText("15").parentElement).toHaveClass(
      "rdp-selected"
    );
  },
};

export const SingleCanAddAndRemoveSelection: Story = {
  name: "test - Single can add and remove selection",
  args: {
    mode: "single",
  },
  render: SingleComponent,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Select date 15
    await userEvent.click(canvas.getByText("15"));
    await expect(canvas.getByText("15").parentElement).toHaveClass(
      "rdp-selected"
    );

    // Click on date 15 again to deselect it
    await userEvent.click(canvas.getByText("15"));
    await expect(canvas.getByText("15").parentElement).not.toHaveClass(
      "rdp-selected"
    );
  },
};

export const MultipleCanChooseMultipleDates: Story = {
  name: "test - Multiple can select multiple dates",
  args: {
    mode: "multiple",
  },
  render: MultipleComponent,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Select two dates
    await userEvent.click(canvas.getByText("10"));
    await expect(canvas.getByText("10").parentElement).toHaveClass(
      "rdp-selected"
    );

    await userEvent.click(canvas.getByText("12"));
    await expect(canvas.getByText("12").parentElement).toHaveClass(
      "rdp-selected"
    );
  },
};

export const RangeCanChooseDateRange: Story = {
  name: "test - Range can select a date range",
  args: {
    mode: "range",
  },
  render: RangeComponent,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Select date range from 10 to 15
    await userEvent.click(canvas.getByText("10"));
    await expect(canvas.getByText("10").parentElement).toHaveClass(
      "rdp-range_start"
    );

    await userEvent.click(canvas.getByText("15"));
    await expect(canvas.getByText("15").parentElement).toHaveClass(
      "rdp-range_end"
    );

    await expect(canvas.getByText("12").parentElement).toHaveClass(
      "rdp-range_middle"
    );
  },
};
