import { Breadcrumb, Breadcrumbs } from './Breadcrumbs.tsx';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof Breadcrumbs> = {
	title: 'aria/Navigation/Breadcrumbs',
	component: Breadcrumbs,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;

export const Example = (args: any) => (
	<Breadcrumbs {...args}>
		<Breadcrumb href="/">Home</Breadcrumb>
		<Breadcrumb href="/react-aria">Aria</Breadcrumb>
		<Breadcrumb>Breadcrumbs</Breadcrumb>
	</Breadcrumbs>
);
