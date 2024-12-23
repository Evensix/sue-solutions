import { Form } from 'react-aria-components';
import { Button } from './Button.tsx';
import { Radio, RadioGroup } from './RadioGroup.tsx';

export default {
	title: 'aria/Forms/RadioGroup',
	component: RadioGroup,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {
		label: 'Favorite sport',
		isDisabled: false,
		isRequired: false,
		description: '',
		children: (
			<>
				<Radio value="soccer">Soccer</Radio>
				<Radio value="baseball">Baseball</Radio>
				<Radio value="basketball">Basketball</Radio>
			</>
		),
	},
};

export const Default = {
	args: {},
};

export const Validation = (args: any) => (
	<Form className="flex flex-col items-start gap-2">
		<RadioGroup {...args} />
		<Button type="submit" variant="secondary">
			Submit
		</Button>
	</Form>
);

Validation.args = {
	isRequired: true,
};
