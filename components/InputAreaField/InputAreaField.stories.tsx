import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import  InputField  from './InputAreaField';


const meta = {
  title: 'atom/InputArea',
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
  name: "Basic",
  args: {
    name: "basic",
  },
};

