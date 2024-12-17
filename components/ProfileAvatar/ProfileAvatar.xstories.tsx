import type { Meta, StoryObj } from '@storybook/react';
import ProfileAvatar from './ProfileAvatar';

const meta = {
  title: 'atom/ProfileAvatar',
  component: ProfileAvatar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
  },
} satisfies Meta<typeof ProfileAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Basic: Story = {
  name: "Basic",
  args:{
    avatar: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250'
  }

};


