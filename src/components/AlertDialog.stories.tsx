import type { Meta } from '@storybook/react';
import { DialogTrigger } from 'react-aria-components';
import { AlertDialog } from './AlertDialog.tsx';
import { Button } from './Button.tsx';
import { Modal } from './Modal.tsx';

const meta: Meta<typeof AlertDialog> = {
	title: 'aria/Overlays/AlertDialog',
	component: AlertDialog,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;

export const Example = (args: any) => (
	<DialogTrigger>
		<Button variant="secondary">Delete…</Button>
		<Modal>
			<AlertDialog {...args} />
		</Modal>
	</DialogTrigger>
);

Example.args = {
	title: 'Delete folder',
	children: 'Are you sure you want to delete "Documents"? All contents will be permanently destroyed.',
	variant: 'destructive',
	actionLabel: 'Delete',
};
