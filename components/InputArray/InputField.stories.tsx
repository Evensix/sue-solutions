import React from "react";
import { View } from "react-native";
import { Meta, StoryObj } from "@storybook/react-native";
import { InputArray, InputWrapperProps } from "./InputField";

const meta: Meta<InputWrapperProps> = {
  title: "WrappedInput",
  component: InputArray,
  argTypes: {
   },

  decorators: [
    (Story) => (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

type Story = StoryObj<InputWrapperProps>;

export const Basic: Story = {
  storyName: "Basic",
  args: {
  },
};



