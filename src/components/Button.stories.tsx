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
			theme: ['brand',  'neutral', 'destructive'],
		},
	},
	args: {
		isDisabled: false,
		children: 'Button',
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
	},
};

export const Tertiary = {
	args: {
		variant: 'tertiary',
	},
};

export const Link = {
	args: {
		variant: 'link',
	},
};
