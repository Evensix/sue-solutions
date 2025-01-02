import { Badge } from "./Badge";

export default {
	title: 'atom/Badge',
	component: Badge,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		type: {
			control: 'select',
			options: ['badge' , 'badge-color' , 'pill' , 'ghost'],
		},
		color: {
			control: 'select',
			options: [	'white','neutral','success','warning','error','brand'],
		},
		size: {
			control: 'select',
			options: ['xxsmall', 'xsmall', 'small', 'medium'],
		},
	},
	args: {
		children: 'Label',
	},
};

export const Primary = {
	name: 'Badge-Colour',
	args: {
		type: 'badge-color',
		color: 'brand',
	},
};

export const Secondary = {
	name: 'Pill',
	args: {
		type: 'pill',
		color: 'brand',
	},
};

export const Tertiary = {
	name: 'Ghost',
	args: {
		type: 'ghost',
		color: 'brand',
	},
};

export const Quaternary = {
	name: 'Badge',
	args: {
		type: 'badge',
		color: 'brand',
	},
};
