import type { Meta } from '@storybook/react';
import { Switch } from './Switch.tsx';

const meta: Meta<typeof Switch> = {
	title: 'aria/Forms/Switch',
	component: Switch,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;

export const Example = (args: any) => <Switch {...args}>Wi-Fi</Switch>;
