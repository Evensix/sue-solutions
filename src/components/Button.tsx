import { Button as RACButton, type ButtonProps as RACButtonProps, composeRenderProps } from 'react-aria-components';
import { tv } from 'tailwind-variants';
import { focusRing } from './utils.ts';

export interface ButtonProps extends RACButtonProps {
	variant?: 'primary' | 'secondary' | 'tertiary' | 'icon' | 'link';
	theme?: 'brand' | 'neutral' | 'destructive';
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
			primary: [
				"bg-brand-600 text-white ",
				"hover:bg-brand-700",
				"pressed:bg-brand-800 ",
				"disabled:text-white disabled:bg-neutral-900/5",
				"outline-brand-500/25 dark:outline-brand-500/25"
			],
			secondary: [
			"bg-white text-neutral-900/80 border border-neutral-900/15",
			"hover:bg-neutral-900/20 ",
			"pressed:bg-white ",
			"disabled:text-neutral-900/15 disabled:bg-white disabled:border-neutral-900/15",
			"outline-neutral-900/25 dark:outline-neutral-900/25"

			],
			tertiary: [
			"bg-white text-neutral-900/80",
			"hover:bg-neutral-900/10",
			"pressed:bg-white ",
			"disabled:text-neutral-900/15 disabled:bg-white",
			"outline-neutral-900/10 dark:outline-neutral-900/10"

			],
			link: [
			"bg- text-",
			"pressed:bg- ",
			"hover: hover:",
			"disabled:text disabled:bg-",
			"outline- dark:outline-"
			],

			icon: 'flex items-center justify-center border-0 pressed:bg-black/10 p-1 text-neutral-600 hover:bg-black/[5%] disabled:bg-transparent dark:pressed:bg-white/20 dark:text-secondary-400 dark:hover:bg-white/10',
			
		}


	},
	defaultVariants: {
		variant: 'primary',
	},
	// customStyle: ({ theme:any }) => {
	// 	const themeMap = {
	// 	  brand: {
	// 		'--primary-bg': 'brand-600',
	// 		'--primary-bg-hover': 'brand-700',
	// 		'--primary-bg-pressed': 'brand-800',
	// 		'--primary-bg-outline': 'brand-500/25',
	// 		'--primary-bg-outline-dark': 'brand-500/25',
	// 	  },
	// 	  neutral: {
	// 		'--primary-bg': 'neutral-900',
	// 		'--primary-bg-hover': 'neutral-900/20',
	// 		'--primary-bg-pressed': 'neutral-900/30',
	// 		'--primary-bg-outline': 'neutral-900/25',
	// 		'--primary-bg-outline-dark': 'neutral-900/25',
	// 	  },
	// 	  destructive: {
	// 		'--primary-bg': 'error-600',
	// 		'--primary-bg-hover': 'error-700',
	// 		'--primary-bg-pressed': 'error-800',
	// 		'--primary-bg-outline': 'error-500/25',
	// 		'--primary-bg-outline-dark': 'error-500/25',
	// 	  },
	// 	};
	
	// 	const selectedTheme = themeMap[theme] || themeMap.brand; // Default to 'brand' if color is missing
	// 	return selectedTheme;
	//   },
	});

	


export function Button(props: ButtonProps) {
	return (
		<RACButton
			{...props}
			className={composeRenderProps(props.className, (className, renderProps) =>
				button({
					isFocusVisible: renderProps.isFocusVisible || renderProps.isPressed,
					variant: props.variant,
					className,
				}),
			)}
		/>
	);
}
