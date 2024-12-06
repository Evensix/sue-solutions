import React from "react";
import { View } from "react-native";
import { Meta, StoryObj } from "@storybook/react-native";
import { InputWrapper, InputWrapperProps } from "./InputWrapper";
import { InputField } from "../InputField/InputField";

const meta: Meta<InputWrapperProps> = {
  title: "WrappedInput",
  component: InputWrapper,
  argTypes: {
   },

  decorators: [
    (Story) => (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <InputWrapper label="Label" error="Error" example="Example text if needed" hint="Hint">
        <InputField/>
        </InputWrapper>
      </View>
    ),
  ],
};

export default meta;

type Story = StoryObj<InputWrapperProps>;

export const Basic: Story = {
  storyName: "Basic",
  args: {
    example: "Example text if needed",
    label: "Label",
    hint: "Hint",
    children: '|_____________|',
  },
};


