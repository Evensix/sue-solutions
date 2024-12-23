import type { Meta } from '@storybook/react';
import { DateField } from './DateFieldQuick.tsx';
import { Form } from 'react-aria-components';
import { Button } from './Button.tsx';

const meta: Meta<typeof DateField> = {
	title: 'atom/Date & Time/DateField Quick',
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

export const Basic = (args: any) => <DateField {...args} />;


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
