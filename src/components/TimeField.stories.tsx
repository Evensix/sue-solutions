import type { Meta } from '@storybook/react';
import { Form } from 'react-aria-components';
import { Button } from './Button.tsx';
import { TimeField } from './TimeField.tsx';

const meta: Meta<typeof TimeField> = {
	title: 'aria/Date & Time/TimeField',
	component: TimeField,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: {
		label: 'Event time',
	},
};

export default meta;

export const Example = (args: any) => <TimeField {...args} />;

export const Validation = (args: any) => (
	<Form className="flex flex-col items-start gap-2">
		<TimeField {...args} />
		<Button type="submit" variant="secondary">
			Submit
		</Button>
	</Form>
);

Validation.args = {
	isRequired: true,
};
