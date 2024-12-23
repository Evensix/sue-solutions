import type { Meta } from '@storybook/react';
import { Button } from './Button.tsx';
import { DateField } from './DateField.tsx';
import { Form } from './Form.tsx';
import { TextField } from './TextField.tsx';

const meta: Meta<typeof Form> = {
	title: 'aria/Forms/Form',
	component: Form,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;

export const Example = (args: any) => (
	<Form {...args} validationBehavior={'aria'}>
		<TextField label="Email" name="email" type="email" isRequired isInvalid={false} />
		<DateField label="Birth date" isRequired />
		<div className="flex gap-2">
			<Button type="submit">Submit</Button>
			<Button type="reset" variant="secondary">
				Reset
			</Button>
		</div>
	</Form>
);
