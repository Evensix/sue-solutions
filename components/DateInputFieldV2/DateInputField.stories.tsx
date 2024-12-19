import type { Meta, StoryObj } from '@storybook/react';
import {DateInputField} from '../DateInputFieldV2/DateInputField';

const meta = {
  title: 'atom/DateInputV2',
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
  },
};


