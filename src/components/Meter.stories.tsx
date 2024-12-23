import type { Meta } from '@storybook/react';
import { Meter } from './Meter.tsx';

const meta: Meta<typeof Meter> = {
	title: 'aria/Status/Meter',
	component: Meter,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;

export const Example = (args: any) => <Meter {...args} />;

Example.args = {
	label: 'Storage space',
	value: 80,
};
