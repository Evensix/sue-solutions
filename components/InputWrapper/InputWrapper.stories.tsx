import React from "react";
import { View } from "react-native";
import InputWrapper, {  InputWrapperProps } from "./InputWrapper";
import InputField from "../InputField/InputField";

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';


const meta = {
  title: 'atom/InputWrapper',
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
  storyName: "Basic",
  args: {
    example: "Example text if needed",
    label: "Label",
    hint: "Hint",
    children: <InputField name="basic"/>,
  },
};



