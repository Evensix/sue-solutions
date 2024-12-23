import { Checkbox } from './Checkbox.tsx';

export default {
	title: 'aria/Forms/Checkbox',
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
