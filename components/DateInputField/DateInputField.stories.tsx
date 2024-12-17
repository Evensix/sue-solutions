import type { Meta, StoryObj } from '@storybook/react';
import DateInputField from './DateInputField';

const meta = {
  title: 'atom/DateInput',
  component: DateInputField,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
  },
} satisfies Meta<typeof DateInputField>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Basic: Story = {
  name: "Basic",
  args: {
    length: "sm",
    name: "basic",
  },
};

export const Disabled: Story = {
  name: "Disabled",
  args: {
    name: "disabled",
    disabled: true
  },
};

export const Error: Story = {
  name: "Error",
  args: {
    name: "error",
    "aria-errormessage": "error message"
  },
};

