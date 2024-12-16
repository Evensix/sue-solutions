import type { Meta, StoryObj } from '@storybook/react';
import { fn, resetAllMocks } from '@storybook/test';
import  InputField  from './InputField';
import { MailOutline } from '@mui/icons-material';
import { userEvent, within, expect } from '@storybook/test';

const meta = {
  title: 'atom/Input',
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

export const Disabled: Story = {
  name: "Disabled",
  args: {
    name: "disabled",
    disabled: true
  },
};

export const Error: Story = {
  name: "Error",
  args: {
    name: "error",
    "aria-errormessage": "error message"
  },
};


export const All: Story = {
  name: "All",
  args: {
    name: "All",
    rightMembers: ['', <div>suffix</div>],
    leftMembers: ['', <div>prefix</div>],
  },  
};

export const Email: Story = {
  name: "Email",
  args: {
    name: "email",
    leftMembers: [ '', <MailOutline/> ],
  },
};

export const Website: Story = {
  name: "Website",
  args: {
    name: "website",
    leftMembers: ['',<div>
      <span>https://</span>
    </div>],
  },
};


export const InputTest: Story = {
  name: "access Tests",
  args: {
    name: "access Tests",
    leftMembers: ['',<div>
      <span>https://</span>
    </div>],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
 
    // 👇 Simulate interactions with the component
    await userEvent.type(canvas.getByRole('textbox'), 'www.evensix.com');
 
    // 👇 Assert DOM structure
    await expect(
      canvas.getByRole('textbox'),
    ).toHaveValue('www.evensix.com');

  },
}; 
export const DisabledTest: Story = {
  name: "disabled Tests",
  args: {
    name: "disabled Tests",
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
 
    // 👇 Assert DOM structure
    await expect(
      canvas.getByRole('textbox'),
    ).toBeDisabled();

  },
}; 
