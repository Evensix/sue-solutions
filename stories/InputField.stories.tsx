import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { InputField } from './InputField';


const meta = {
  title: 'Example/Input',
  component: InputField,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
  },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Basic: Story = {
  storyName: "Basic",
  args: {
    name: "basic",
    inputProps : {}
  },
};

export const Disabled: Story = {
  storyName: "Disabled",
  args: {
    name: "disabled",
    inputProps : {"aria-disabled": true},
    disabled: true
  },
};

