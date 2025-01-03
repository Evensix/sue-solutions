import { fn } from '@storybook/test';
import { Button } from './Button.tsx';

export default {
	title: 'atom/Buttons/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['primary', 'secondary', 'tertiary', 'link'],
		},
		theme: {
			control: 'select',
			options: ['brand', 'error'],
		},
		size: {
			control: 'select',
			options: ['xxsmall', 'xsmall', 'small', 'medium', 'large'],
		},
	},
	args: {
		isDisabled: false,
		children: 'Button',
		onClick: fn(() => {console.log('Clicked')})
	},
};

export const Primary = {
	args: {
		variant: 'primary',
		theme: 'brand',
	},
};

export const Secondary = {
	args: {
		variant: 'secondary',
		theme: 'brand',
	},
};

export const Tertiary = {
	args: {
		variant: 'tertiary',
		theme: 'brand',
	},
};

export const Link = {
	args: {
		variant: 'link',
		theme: 'brand',
	},
};
