import type { Meta } from '@storybook/react';
import { ColorField } from './ColorField.tsx';

const meta: Meta<typeof ColorField> = {
	title: 'aria/Color/ColorField',
	component: ColorField,
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

export const Example = (args: any) => <ColorField {...args} />;
