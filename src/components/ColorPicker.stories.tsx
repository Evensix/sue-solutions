import type { Meta } from '@storybook/react';
import { ColorPicker } from './ColorPicker.tsx';

const meta: Meta<typeof ColorPicker> = {
	title: 'aria/Color/ColorPicker',
	component: ColorPicker,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: {
		label: 'Color',
		defaultValue: '#ff0',
	},
};

export default meta;

export const Example = (args: any) => <ColorPicker {...args} />;
