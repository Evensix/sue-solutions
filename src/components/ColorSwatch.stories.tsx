import type { Meta } from '@storybook/react';
import { ColorSwatch } from './ColorSwatch.tsx';

const meta: Meta<typeof ColorSwatch> = {
	title: 'aria/Color/ColorSwatch',
	component: ColorSwatch,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;

export const Example = (args: any) => <ColorSwatch {...args} />;

Example.args = {
	color: '#f00a',
};