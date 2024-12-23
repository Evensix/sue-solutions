import type { Meta } from '@storybook/react';
import { Tag, TagGroup } from './TagGroup.tsx';

const meta: Meta<typeof Example> = {
	title: 'aria/Collections/TagGroup',
	component: TagGroup,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;

export const Example = (args: any) => (
	<TagGroup {...args}>
		<Tag>Chocolate</Tag>
		<Tag isDisabled>Mint</Tag>
		<Tag>Strawberry</Tag>
		<Tag>Vanilla</Tag>
	</TagGroup>
);

Example.args = {
	label: 'Ice cream flavor',
	selectionMode: 'single',
};
