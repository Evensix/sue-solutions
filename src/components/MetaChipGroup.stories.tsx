import type { Meta } from '@storybook/react';
import { MetaChip, MetaChipGroup } from './MetaChipGroup.tsx';

const meta: Meta<typeof Example> = {
	title: 'atom/Collections/MetaChipGroup',
	component: MetaChipGroup,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;

export const Example = (args: any) => (
	<MetaChipGroup {...args}>
		<MetaChip>Chocolate</MetaChip>
		<MetaChip>Mint</MetaChip>
		<MetaChip>Strawberry</MetaChip>
		<MetaChip>Vanilla</MetaChip>
	</MetaChipGroup>
);

Example.args = {
};
