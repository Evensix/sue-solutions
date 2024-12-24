import type { Meta } from '@storybook/react';
import { MetaChip, MetaChipGroup } from './MetaChipGroup.tsx';
import { CircleIcon } from 'lucide-react';

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
		<MetaChip>{<CircleIcon height={12} width={12}/>} Chocolate</MetaChip>
		<MetaChip>{<CircleIcon height={12} width={12}/>} Mint</MetaChip>
		<MetaChip>{<CircleIcon height={12} width={12}/>} Strawberry</MetaChip>
		<MetaChip>{<CircleIcon height={12} width={12}/>} Vanilla</MetaChip>
	</MetaChipGroup>
);

Example.args = {
};
