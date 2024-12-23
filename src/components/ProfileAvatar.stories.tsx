import type { Meta, StoryObj } from "@storybook/react";
import AvatarProfile from "./ProfileAvatar";

const meta = {
  title: "atom/ProfileAvatar",
  component: AvatarProfile,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof AvatarProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  name: "Basic",
  args: {
    avatars: [
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    ],
  },
};
export const Size16: Story = {
  name: "Size16",
  args: {
    size: 16,
    avatars: [
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    ],
  },
};
export const Square: Story = {
  name: "Basic",
  args: {
    shape: "square",
    avatars: [
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    ],
  },
};

export const Triple: Story = {
  name: "Triple",
  args: {
    avatars: [
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    ],
  },
};

export const Lots: Story = {
  name: "Lots",
  args: {
    avatars: [
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    ],
  },
};
