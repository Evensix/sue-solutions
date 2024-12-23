import type { Meta } from '@storybook/react';
import { HelpCircle } from 'lucide-react';
import { DialogTrigger, Heading } from 'react-aria-components';
import { Button } from './Button.tsx';
import { Dialog } from './Dialog.tsx';
import { Popover } from './Popover.tsx';

const meta: Meta<typeof Popover> = {
	title: 'aria/Overlays/Popover',
	component: Popover,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: {
		showArrow: true,
	},
};

export default meta;

export const Example = (args: any) => (
	<DialogTrigger>
		<Button variant="icon" aria-label="Help">
			<HelpCircle className="h-4 w-4" />
		</Button>
		<Popover {...args} className="max-w-[250px]">
			<Dialog>
				<Heading slot="title" className="mb-2 font-semibold text-lg">
					Help
				</Heading>
				<p className="text-sm">For help accessing your account, please contact support.</p>
			</Dialog>
		</Popover>
	</DialogTrigger>
);
