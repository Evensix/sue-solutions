import type { Meta } from '@storybook/react';
import { Link } from './Link.tsx';

const meta: Meta<typeof Link> = {
	title: 'aria/Navigation/Link',
	component: Link,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;

export const Example = (args: any) => <Link {...args}>The missing link</Link>;

Example.args = {
	href: 'https://www.imdb.com/title/tt6348138/',
	target: '_blank',
};
