import type { Meta } from '@storybook/react';
import { Tab, TabList, TabPanel, Tabs } from './Tabs.tsx';

const meta: Meta<typeof Tabs> = {
	title: 'molecule/Navigation/Tabs',
	component: Tabs,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		type: {
			control: 'select',
			options: ['button', 'underline'],
		},
		size: {
			control: 'select',
			options: ['small', 'medium'],
		},
	},
	tags: ['autodocs'],
};

export default meta;

export const Example = (args: any) => (
	<Tabs {...args}>
		<TabList aria-label="History of Ancient Rome">
			<Tab {...args} id="FoR">Founding of Rome</Tab>
			<Tab {...args} id="MaR">Monarchy and Republic</Tab>
			<Tab {...args} id="Emp">Empire</Tab>
		</TabList>
		<TabPanel id="FoR">Arma virumque cano, Troiae qui primus ab oris.</TabPanel>
		<TabPanel id="MaR">Senatus Populusque Romanus.</TabPanel>
		<TabPanel id="Emp">Alea jacta est.</TabPanel>
	</Tabs>
);
