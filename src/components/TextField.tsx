import {
	TextField as AriaTextField,
	type TextFieldProps as AriaTextFieldProps
} from 'react-aria-components';
import { tv } from 'tailwind-variants';
import { Input, fieldBorderStyles } from './Field.tsx';
import { composeTailwindRenderProps, focusRing } from './utils.ts';

const inputStyles = tv({
	extend: focusRing,
	base: 'rounded-4 border-[1px] border-neutral-900/25 bg-white dark:bg-secondary-900 forced-colors:bg-[Field] focus:ring-4 focus:ring-brand-500/25', //
	variants: {
		// isFocused: fieldBorderStyles.variants.isFocusWithin,
		...fieldBorderStyles.variants,
	},
});

export interface TextFieldProps extends AriaTextFieldProps {
	
} 

export function TextField({ ...props }: TextFieldProps) {
	return (
		<AriaTextField {...props} className={composeTailwindRenderProps(props.className, 'flex flex-col gap-1')}>
			{/* {label && <Label>{label}</Label>} */}
			<Input className={inputStyles} />
			{/* {description && <Description>{description}</Description>} */}
			{/* <FieldError>{errorMessage}</FieldError> */}
		</AriaTextField>
	);
}
