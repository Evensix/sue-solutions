import { Link as AriaLink, LinkProps as AriaLinkProps, composeRenderProps } from 'react-aria-components';
import { tv } from 'tailwind-variants';
import { focusRing } from './utils.ts';

interface LinkProps extends AriaLinkProps {
  variant?: 'primary' | 'secondary'
}

const styles = tv({
  extend: focusRing,
  base: 'underline disabled:no-underline disabled:cursor-default forced-colors:disabled:text-[GrayText] transition rounded',
  variants: {
    variant: {
      primary: 'text-purple-600 dark:text-purple-500 underline decoration-purple-600/60 hover:decoration-purple-600 dark:decoration-purple-500/60 dark:hover:decoration-purple-500',
      secondary: 'text-neutral-700 dark:text-secondary-300 underline decoration-neutral-700/50 hover:decoration-neutral-700 dark:decoration-secondary-300/70 dark:hover:decoration-secondary-300'
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
});

export function Link(props: LinkProps) {
  return <AriaLink {...props} className={composeRenderProps(props.className, (className, renderProps) =>  styles({...renderProps, className, variant: props.variant}))} />;
}
