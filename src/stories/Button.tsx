import { useTransition } from 'react';
import './button.css';
import 'tailwindcss/colors';
import { cn, tv } from 'tailwind-variants';

export interface ButtonProps {
	/** Is this the principal call to action on the page? */
	primary?: boolean;
	/** What background color to use */
	backgroundColor?: string;
	/** How large should the button be? */
	size?: 'small' | 'medium' | 'large';
	/** Button contents */
	label: string;
	/** Optional click handler */
	onClick?: () => void;
}

  

/** Primary UI component for user interaction */
export const Button = ({ primary = false, size = 'medium', backgroundColor, label, ...props }: ButtonProps) => {
	const [pending, startTransition] = useTransition();
	const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
	return (
		<button
			type="button"
			className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
			style={{ backgroundColor }}
			disabled={pending}
			{...props}
			onClick={() => {
				startTransition(async () => {
					const response = await fetch('/api/v1/feedback', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
					});
					if (!response.ok) {
						throw new Error(response.statusText);
					}

					props.onClick?.();
				});
			}}
		>
			{pending ? 'pending' : label}
		</button>
	);
};
