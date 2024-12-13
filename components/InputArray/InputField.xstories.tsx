import React from "react";
import InputArray, {  InputWrapperProps } from "./InputField";

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';


const meta = {
  title: 'atom/InputArray',
  component: InputArray,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
  },
} satisfies Meta<typeof InputArray>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Basic: Story = {
  name: "Basic",
  args: {
    inputArray: []
  },
};



