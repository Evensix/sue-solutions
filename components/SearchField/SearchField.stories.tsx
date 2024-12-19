import type { Meta, StoryObj } from '@storybook/react';
import { fn, resetAllMocks } from '@storybook/test';
import  InputField  from './SearchField';
import { MailOutline } from '@mui/icons-material';
import { userEvent, within, expect } from '@storybook/test';

const meta = {
  title: 'atom/InputSearch',
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
    length: "sm",
    name: "basic",
  },
};
