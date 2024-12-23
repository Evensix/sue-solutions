import { Calendar } from './Calendar.tsx';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof Calendar> = {
	title: 'aria/Date & Time/Calendar',
	component: Calendar,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;

export const Example = (args: any) => <Calendar aria-label="Event date" {...args} />;
