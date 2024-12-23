import type { Meta } from '@storybook/react';
import { ColorArea } from './ColorArea.tsx';

const meta: Meta<typeof ColorArea> = {
	title: 'aria/Color/ColorArea',
	component: ColorArea,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;

export const Example = (args: any) => <ColorArea {...args} />;
