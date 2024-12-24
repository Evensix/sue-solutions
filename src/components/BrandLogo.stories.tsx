import type { Meta } from '@storybook/react';
import BrandLogo from './BrandLogo';

const meta: Meta<typeof BrandLogo> = {
	title: 'atom/BrandLogo',
	component: BrandLogo,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;

export const Full = {
	args: {
	},
};

export const Mini = {
	args: {
		size: "mini",
	},
};
