import type { Meta } from '@storybook/react';
import { RangeCalendar } from './RangeCalendar.tsx';

const meta: Meta<typeof RangeCalendar> = {
	title: 'aria/Date & Time/RangeCalendar',
	component: RangeCalendar,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;

export const Example = (args: any) => <RangeCalendar aria-label="Trip dates" {...args} />;
