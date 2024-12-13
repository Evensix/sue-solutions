import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import SelectField from "./SelectField";

const meta = {
  title: "atom/Select",
  component: SelectField,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof SelectField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  name: "Basic",
  args: {
    items: [
      { key: "a", value: "a", label: "a", name: "a" },
      { key: "b", value: "b", label: "b", name: "b" },
      { key: "c", value: "c", label: "c", name: "c" },
      { key: "d", value: "d", label: "d", name: "d" },
      { key: "e", value: "e", label: "e", name: "e" },
      { key: "f", value: "f", label: "f", name: "f" },
    ],
    children: (
      <>
        <option value="a">a</option>
        <option value="b">b</option>
        <option value="c">c</option>
      </>
    ),
  },
};
