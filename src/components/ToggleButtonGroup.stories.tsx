import type { Meta } from '@storybook/react';
import { Bold, Italic, Underline } from 'lucide-react';
import { ToggleButton } from './ToggleButton.tsx';
import { ToggleButtonGroup } from './ToggleButtonGroup.tsx';

const meta: Meta<typeof ToggleButtonGroup> = {
	title: 'aria/Buttons/ToggleButtonGroup',
	component: ToggleButtonGroup,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;

export const Example = (args: any) => (
	<ToggleButtonGroup {...args}>
		<ToggleButton id="bold" aria-label="Bold">
			<Bold className="h-4 w-4" />
		</ToggleButton>
		<ToggleButton id="italic" aria-label="Italic">
			<Italic className="h-4 w-4" />
		</ToggleButton>
		<ToggleButton id="underline" aria-label="Underline">
			<Underline className="h-4 w-4" />
		</ToggleButton>
	</ToggleButtonGroup>
);

Example.args = {
	selectionMode: 'multiple',
};
