import InputWrapper from "./InputWrapper";

import type { Meta, StoryObj } from '@storybook/react';
import { Select, SelectItem } from "./Select";


const meta = {
  title: 'molecule/InputWrapper',
  component: InputWrapper,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
  },
} satisfies Meta<typeof InputWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Basic: Story = {
  name: "Basic",
  args: {
    example: "Example text if needed",
    label: "Label",
    labelFor: 'basic',
    hint: "Hint",
    children: <Select name="basic" >
    <SelectItem>Chocolate</SelectItem>
    <SelectItem id="mint">Mint</SelectItem>
    <SelectItem>Strawberry</SelectItem>
    <SelectItem>Vanilla</SelectItem>
    </Select>,
  },
};



