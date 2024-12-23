import type { Meta } from '@storybook/react';
import { Disclosure, DisclosureHeader, DisclosurePanel } from './Disclosure.tsx';

const meta: Meta<typeof Disclosure> = {
	title: 'aria/Navigation/Disclosure',
	component: Disclosure,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;

export const Example = (args: any) => (
	<Disclosure {...args}>
		<DisclosureHeader>Files</DisclosureHeader>
		<DisclosurePanel>Files content</DisclosurePanel>
	</Disclosure>
);
