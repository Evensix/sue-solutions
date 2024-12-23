import type { Meta } from '@storybook/react';
import { Disclosure, DisclosureGroup, DisclosureHeader, DisclosurePanel } from './Disclosure.tsx';

const meta: Meta<typeof DisclosureGroup> = {
	title: 'aria/Navigation/DisclosureGroup',
	component: DisclosureGroup,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;

export const Example = (args: any) => (
	<DisclosureGroup {...args}>
		<Disclosure>
			<DisclosureHeader>Files</DisclosureHeader>
			<DisclosurePanel>Files content</DisclosurePanel>
		</Disclosure>
		<Disclosure>
			<DisclosureHeader>Images</DisclosureHeader>
			<DisclosurePanel>Images content</DisclosurePanel>
		</Disclosure>
		<Disclosure>
			<DisclosureHeader>Documents</DisclosureHeader>
			<DisclosurePanel>Documents content</DisclosurePanel>
		</Disclosure>
	</DisclosureGroup>
);
