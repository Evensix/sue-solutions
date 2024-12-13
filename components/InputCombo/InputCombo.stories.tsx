import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { JollyComboBox } from './InputCombo';



const meta = {
  title: 'atom/ComboBox',
  component: JollyComboBox,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
  },
} satisfies Meta<typeof JollyComboBox>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Basic: Story = {
  name: "Basic",
  args: {
    children:<div>Children</div>
    
  },
};




