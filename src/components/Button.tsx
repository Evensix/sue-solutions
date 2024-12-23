import { Button as RACButton, type ButtonProps as RACButtonProps, composeRenderProps } from 'react-aria-components';
import { tv } from 'tailwind-variants';
import { focusRing } from './utils.ts';

export interface ButtonProps extends RACButtonProps {
	variant?: 'primary' | 'secondary' | 'tertiary' | 'icon' | 'link';
	theme?: 'brand' | 'error' | 'neutral';
	size?: 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large';
}

const button = tv({
	extend: focusRing,
	base: 'cursor-default select-none rounded-6 px-12 py-6 text-center transition',
	variants  : {
		size: {
			xxsmall: " h-20 [& * svg]:h-10  p-2",
			xsmall:  " h-20 [& * svg]:h-10  p-4",
			small:   " h-20 [& * svg]:h-20  p-6",
			medium:  " h-20 [& * svg]:h-20  p-8",
			large:   " h-20 [& * svg]:h-20  p-10",
		},
		variant : {
			'primary-brand': [
				"bg-brand-600 text-white ",
				"hover:bg-brand-700",
				"pressed:bg-brand-800 ",
				"disabled:text-white disabled:bg-neutral-900/5",
				"outline-brand-500/25 dark:outline-brand-500/25"
			],
			'secondary-brand': [
				"bg-white text-neutral-900/80 border border-neutral-900/15",
				"hover:bg-neutral-900/20 ",
				"pressed:bg-white ",
				"disabled:text-neutral-900/15 disabled:bg-white disabled:border-neutral-900/15",
				"outline-neutral-900/25 dark:outline-neutral-900/25"

			],
			'tertiary-brand': [
				"bg-white text-neutral-900/80",
				"hover:bg-neutral-900/10",
				"pressed:bg-white ",
				"disabled:text-neutral-900/15 disabled:bg-white",
				"outline-neutral-900/10 dark:outline-neutral-900/10"

			],
			'link-brand': [
				"bg-white text-brand-600 p-0",
				"hover: hover:text-brand-800",
				"pressed:text-brand-700 ",
				"disabled:text-neutral-900/15 disabled:bg-white",
				"outline-none dark:outline-"
			],

			'icon-brand': 'flex items-center justify-center border-0 pressed:bg-black/10 p-1 text-neutral-600 hover:bg-black/[5%] disabled:bg-transparent dark:pressed:bg-white/20 dark:text-secondary-400 dark:hover:bg-white/10',

			'primary-error': [
				"bg-error-600 text-white",
				"hover:bg-error-700",
				"pressed:bg-error-800 ",
				"disabled:text-white disabled:bg-neutral-900/5",
				"outline-error-500/25 dark:outline-error-500/25"
			],
			'secondary-error': [
				"bg-white text-error-600 border border-error-50",
				"hover:bg-error-50 hover:text-error-700",
				"pressed:bg-white ",
				"disabled:text-neutral-900/15 disabled:bg-white disabled:border-neutral-900/15",
				"outline-error-50 dark:outline-error-50"

			],
			'tertiary-error': [
				"bg-white text-error-600",
				"hover:bg-error-50",
				"pressed:bg-white ",
				"disabled:text-neutral-900/15 disabled:bg-white",
				"outline-error-50 dark:outline-error-50"

			],
			'link-error': [
				"bg-white text-error-600 p-0",
				"hover:text-error-800 ",
				"pressed:bg-white text-error-700 ",
				"disabled:text-neutral-900/15 disabled:bg-white",
				"outline-none dark:outline-"
			],

			'icon-error': 'flex items-center justify-center border-0 pressed:bg-black/10 p-1 text-neutral-600 hover:bg-black/[5%] disabled:bg-transparent dark:pressed:bg-white/20 dark:text-secondary-400 dark:hover:bg-white/10',
			
			'link-neutral': [
				"bg-white text-neutral-900/90 p-0",
				"hover:text-neutral-900/80 ",
				"pressed:bg-white text-neutral-900/90 ",
				"disabled:text-neutral-900/15 disabled:bg-white",
				"outline-none dark:outline-"
			],


		}
	},
	defaultVariants: {
		variant: 'primary-brand',
	},
});

	


export function Button(props: ButtonProps) {
	return (
		<RACButton
			{...props}
			className={composeRenderProps(props.className, (className, renderProps) =>
				button({
					isFocusVisible: renderProps.isFocusVisible || renderProps.isPressed,
					variant: `${props.variant}-${props.theme}`,
					className,
				}),
			)}
		/>
	);
}


			
