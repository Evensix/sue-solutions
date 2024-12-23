import type { Meta } from '@storybook/react';
import { Slider } from './Slider.tsx';

const meta: Meta<typeof Slider> = {
	title: 'aria/Forms/Slider',
	component: Slider,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;

export const Example = (args: any) => <Slider {...args} />;

Example.args = {
	label: 'Range',
	defaultValue: [30, 60],
	thumbLabels: ['start', 'end'],
};
