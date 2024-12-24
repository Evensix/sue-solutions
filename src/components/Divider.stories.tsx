import type { Meta } from '@storybook/react';
import Divider from './Divider.tsx';

const meta: Meta<typeof Divider> = {
	title: 'atom/Divider',
	component: Divider,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;

export const Horizontal = {
	args: {
		orientation: 'horizontal',
		className: 'min-w-[150px]',
	},
};
export const Vertical = {
	args: {
		orientation: 'vertical',
		className: 'min-h-[150px]',
	},
};
