import { Checkbox } from './Checkbox.tsx';

export default {
	title: 'atom/Forms/Checkbox',
	component: Checkbox,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {
		isDisabled: false,
		children: 'Checkbox',
	},
};

export const Default = {
	args: {},
};
