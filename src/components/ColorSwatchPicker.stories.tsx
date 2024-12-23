import type { Meta } from '@storybook/react';
import { ColorSwatchPicker, ColorSwatchPickerItem } from './ColorSwatchPicker.tsx';

const meta: Meta<typeof ColorSwatchPicker> = {
	title: 'aria/Color/ColorSwatchPicker',
	component: ColorSwatchPicker,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;

export const Example = (args: any) => (
	<ColorSwatchPicker {...args}>
		<ColorSwatchPickerItem color="#A00" />
		<ColorSwatchPickerItem color="#f80" />
		<ColorSwatchPickerItem color="#080" />
		<ColorSwatchPickerItem color="#08f" />
		<ColorSwatchPickerItem color="#088" />
		<ColorSwatchPickerItem color="#008" />
	</ColorSwatchPicker>
);
