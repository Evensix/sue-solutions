import { Meta, StoryObj } from "@storybook/react-native";
import React from "react";
import { View } from "react-native";
import { InputField, InputFieldProps } from "./InputField";

const meta: Meta<InputFieldProps> = {
  title: "InputField",
  component: InputField,
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

type Story = StoryObj<InputFieldProps>;

export const Basic: Story = {
  storyName: "Basic",
  args: {
    inputProps : {}
  },
};

export const Disabled: Story = {
  storyName: "Disabled",
  args: {
    inputProps : {"aria-disabled": true},
    disabled: true
  },
};

export const DisabledTest: Story = {
  storyName: "DisabledTest",
  args: {
    inputProps : {"aria-disabled": true},
    disabled: true
  },
};

export const All: Story = {
  storyName: "All",
  args: {
    rightMembers: ['', <div>suffix</div>],
    leftMembers: ['', <div>prefix</div>],
  },  
};

export const Email: Story = {
  storyName: "Email",
  args: {
    leftMembers: [ '', <div>
      E
    </div>],
  },
};

export const Website: Story = {
  storyName: "Website",
  args: {
    leftMembers: ['',<div>
      <span>https://</span>
    </div>],
  },
};


