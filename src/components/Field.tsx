import {
	type FieldErrorProps,
	Group,
	type GroupProps,
	type InputProps,
	type LabelProps,
	FieldError as RACFieldError,
	Input as RACInput,
	Label as RACLabel,
	Text,
	type TextProps,
	composeRenderProps,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { composeTailwindRenderProps, focusRing } from './utils.ts';

export function Label(props: LabelProps) {
	return (
		<RACLabel
			{...props}
			className={twMerge(
				'w-fit cursor-default ',
				props.className,
			)}
		/>
	);
}

export function Description(props: TextProps) {
	return <Text {...props} slot="description" className={twMerge('text-neutral-600 text-sm', props.className)} />;
}

export function FieldError(props: FieldErrorProps) {
	return (
		<RACFieldError
			{...props}
			className={composeTailwindRenderProps(props.className, 'text-error-600 text-sm forced-colors:text-[Mark]')}
		/>
	);
}

export const fieldBorderStyles = tv({
	variants: {
		isFocusWithin: {
			false: 'border-neutral-300 dark:border-secondary-500 forced-colors:border-[ButtonBorder]',
			true: 'border-neutral-600 dark:border-secondary-300 forced-colors:border-[Highlight]',
		},
		isInvalid: {
			true: 'border-error-600 dark:border-error-600 forced-colors:border-[Mark]',
		},
		isDisabled: {
			true: 'border-neutral-200 dark:border-secondary-700 forced-colors:border-[GrayText]',
		},
	},
});

export const fieldGroupStyles = tv({
	extend: focusRing,
	base: 'group flex h-9 items-center overflow-hidden rounded-4 border-[1px] bg-white dark:bg-secondary-900 forced-colors:bg-[Field]',
	variants: fieldBorderStyles.variants,
});

export function FieldGroup(props: GroupProps) {
	return (
		<Group
			{...props}
			className={composeRenderProps(props.className, (className, renderProps) =>
				fieldGroupStyles({ ...renderProps, className }),
			)}
		/>
	);
}

export function Input(props: InputProps) {
	return (
		<RACInput
			{...props}
			className={composeTailwindRenderProps(
				props.className,
				'min-w-0 flex-1 bg-white px-2 py-1.5 text-neutral-800 text-sm outline outline-0 disabled:text-neutral-200 dark:bg-secondary-900 dark:text-secondary-200 dark:disabled:text-secondary-600',
			)}
		/>
	);
}
