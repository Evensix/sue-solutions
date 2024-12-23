import type { ReactNode } from 'react';
import {
	Radio as RACRadio,
	RadioGroup as RACRadioGroup,
	type RadioGroupProps as RACRadioGroupProps,
	type RadioProps,
	type ValidationResult,
} from 'react-aria-components';
import { tv } from 'tailwind-variants';
import { Description, FieldError, Label } from './Field.tsx';
import { composeTailwindRenderProps, focusRing } from './utils.ts';

export interface RadioGroupProps extends Omit<RACRadioGroupProps, 'children'> {
	label?: string;
	children?: ReactNode;
	description?: string;
	errorMessage?: string | ((validation: ValidationResult) => string);
}

export function RadioGroup(props: RadioGroupProps) {
	return (
		<RACRadioGroup {...props} className={composeTailwindRenderProps(props.className, 'group flex flex-col gap-2')}>
			<Label>{props.label}</Label>
			<div className="flex gap-2 group-orientation-vertical:flex-col group-orientation-horizontal:gap-4">
				{props.children}
			</div>
			{props.description && <Description>{props.description}</Description>}
			<FieldError>{props.errorMessage}</FieldError>
		</RACRadioGroup>
	);
}

const styles = tv({
	extend: focusRing,
	base: 'h-5 w-5 rounded-full border-2 bg-white transition-all dark:bg-secondary-900',
	variants: {
		isSelected: {
			false:
				'border-neutral-400 group-pressed:border-neutral-500 dark:border-secondary-400 dark:group-pressed:border-secondary-300',
			true: 'forced-colors:!border-[Highlight] border-[7px] border-neutral-700 group-pressed:border-neutral-800 dark:border-neutral-300 dark:group-pressed:border-neutral-200',
		},
		isInvalid: {
			true: 'forced-colors:!border-[Mark] border-error-700 group-pressed:border-error-800 dark:border-error-600 dark:group-pressed:border-error-700',
		},
		isDisabled: {
			true: 'forced-colors:!border-[GrayText] border-neutral-200 dark:border-secondary-700',
		},
	},
});

export function Radio(props: RadioProps) {
	return (
		<RACRadio
			{...props}
			className={composeTailwindRenderProps(
				props.className,
				'group flex items-center gap-2 text-neutral-800 text-sm transition disabled:text-neutral-300 dark:text-secondary-200 dark:disabled:text-secondary-600 forced-colors:disabled:text-[GrayText]',
			)}
		>
			{(renderProps) => (
				<>
					<div className={styles(renderProps)} />
					{props.children}
				</>
			)}
		</RACRadio>
	);
}
