import {
	TextField as AriaTextField,
	type TextFieldProps as AriaTextFieldProps,
	type ValidationResult,
} from 'react-aria-components';
import { tv } from 'tailwind-variants';
import { Description, FieldError, FieldGroup, Input, Label, fieldBorderStyles } from './Field.tsx';
import { composeTailwindRenderProps, focusRing } from './utils.ts';

const inputStyles = tv({
	extend: focusRing,
	base: 'rounded-md border-2 focus:ring-4 focus:ring-brand-500/25', //
	variants: {
		isFocused: fieldBorderStyles.variants.isFocusWithin,
		...fieldBorderStyles.variants,
	},
});

export interface TextFieldProps extends AriaTextFieldProps {
	label?: string;
	description?: string;
	errorMessage?: string | ((validation: ValidationResult) => string);
}

export function TextField({ label, description, errorMessage, ...props }: TextFieldProps) {
	return (
		<AriaTextField {...props} className={composeTailwindRenderProps(props.className, 'flex flex-col gap-1')}>
			{label && <Label>{label}</Label>}
			<Input className={inputStyles} />
			{description && <Description>{description}</Description>}
			<FieldError>{errorMessage}</FieldError>
		</AriaTextField>
	);
}
