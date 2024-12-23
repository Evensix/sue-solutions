import type { Meta } from '@storybook/react';
import { Form } from 'react-aria-components';
import { Button } from './Button.tsx';
import { SearchField } from './SearchBar.tsx';

const meta: Meta<typeof SearchField> = {
	title: 'atom/SearchBar',
	component: SearchField,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: {
		label: 'Search',
	},
};

export default meta;

export const Example = (args: any) => <SearchField {...args} />;

export const Validation = (args: any) => (
	<Form className="flex flex-col items-start gap-2">
		<SearchField {...args} />
		<Button type="submit" variant="secondary">
			Submit
		</Button>
	</Form>
);

Validation.args = {
	isRequired: true,
};
