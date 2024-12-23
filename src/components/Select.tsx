import { ChevronDown } from 'lucide-react';
import type { ReactNode } from 'react';
import {
	Select as AriaSelect,
	type SelectProps as AriaSelectProps,
	Button,
	ListBox,
	type ListBoxItemProps,
	SelectValue,
	type ValidationResult,
} from 'react-aria-components';
import { tv } from 'tailwind-variants';
import { Description, FieldError, Label } from './Field.tsx';
import { DropdownItem, DropdownSection, type DropdownSectionProps } from './ListBox.tsx';
import { Popover } from './Popover.tsx';
import { composeTailwindRenderProps, focusRing } from './utils.ts';

const styles = tv({
	extend: focusRing,
	base: 'flex w-full min-w-[150px] cursor-default items-center gap-4  border border-black/10 bg-neutral-50 py-2 pr-2 pl-3 text-start shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] transition dark:border-white/10 dark:bg-secondary-700 dark:shadow-none',
	variants: {
		isDisabled: {
			false:
				'pressed:bg-neutral-200 text-neutral-800 hover:bg-neutral-100 group-invalid:border-error-600 dark:pressed:bg-secondary-500 dark:text-secondary-300 dark:hover:bg-secondary-600 forced-colors:group-invalid:border-[Mark]',
			true: 'text-neutral-200 dark:border-white/5 dark:bg-secondary-800 dark:text-secondary-600 forced-colors:border-[GrayText] forced-colors:text-[GrayText]',
		},
	},
});

export interface SelectProps<T extends object> extends Omit<AriaSelectProps<T>, 'children'> {
	label?: string;
	description?: string;
	errorMessage?: string | ((validation: ValidationResult) => string);
	items?: Iterable<T>;
	children: ReactNode | ((item: T) => ReactNode);
}

export function Select<T extends object>({
	label,
	description,
	errorMessage,
	children,
	items,
	...props
}: SelectProps<T>) {
	return (
		<AriaSelect {...props} className={composeTailwindRenderProps(props.className, 'group flex flex-col gap-1')}>
			{label && <Label>{label}</Label>}
			<Button className={styles}>
				<SelectValue className="flex-1 text-sm placeholder-shown:italic" />
				<ChevronDown
					aria-hidden
					className="h-4 w-4 text-neutral-600 group-disabled:text-neutral-200 dark:text-secondary-400 dark:group-disabled:text-secondary-600 forced-colors:text-[ButtonText] forced-colors:group-disabled:text-[GrayText]"
				/>
			</Button>
			{description && <Description>{description}</Description>}
			<FieldError>{errorMessage}</FieldError>
			<Popover className="min-w-[--trigger-width]">
				<ListBox
					items={items}
					className="max-h-[inherit] overflow-auto p-1 outline-none "
				>
					{children}
				</ListBox>
			</Popover>
		</AriaSelect>
	);
}

export function SelectItem(props: ListBoxItemProps) {
	return <DropdownItem {...props} />;
}

export function SelectSection<T extends object>(props: DropdownSectionProps<T>) {
	return <DropdownSection {...props} />;
}
