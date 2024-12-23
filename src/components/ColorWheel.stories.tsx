import type { Meta } from '@storybook/react';
import { ColorWheel } from './ColorWheel.tsx';

const meta: Meta<typeof ColorWheel> = {
	title: 'aria/Color/ColorWheel',
	component: ColorWheel,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;

export const Example = (args: any) => <ColorWheel {...args} />;
