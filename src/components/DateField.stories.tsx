import type { Meta } from '@storybook/react';
import { Form } from 'react-aria-components';
import { Button } from './Button.tsx';
import { DateField } from './DateField.tsx';

const meta: Meta<typeof DateField> = {
	title: 'atom/Date & Time/DateField',
	component: DateField,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: {
		label: 'Event date',
	},
};

export default meta;

export const Example = (args: any) => <DateField {...args} />;

export const Validation = (args: any) => (
	<Form className="flex flex-col items-start gap-2">
		<DateField {...args} />
		<Button type="submit" variant="secondary">
			Submit
		</Button>
	</Form>
);

Validation.args = {
	isRequired: true,
};
