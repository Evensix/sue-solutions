import { ToggleButton as RACToggleButton, ToggleButtonProps, composeRenderProps } from 'react-aria-components';
import { tv } from 'tailwind-variants';
import { focusRing } from './utils.ts';

let styles = tv({
  extend: focusRing,
  base: 'px-5 py-2 [&:has(svg:only-child)]:px-2 text-sm text-center transition rounded-lg border border-black/10 dark:border-white/10 forced-colors:border-[ButtonBorder] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] dark:shadow-none cursor-default forced-color-adjust-none',
  variants: {
    isSelected: {
      false: 'bg-neutral-100 hover:bg-neutral-200 pressed:bg-neutral-300 text-neutral-800 dark:bg-secondary-600 dark:hover:bg-secondary-500 dark:pressed:bg-secondary-400 dark:text-secondary-100 forced-colors:!bg-[ButtonFace] forced-colors:!text-[ButtonText]',
      true: 'bg-neutral-700 hover:bg-neutral-800 pressed:bg-neutral-900 text-white dark:bg-neutral-300 dark:hover:bg-neutral-200 dark:pressed:bg-neutral-100 dark:text-black forced-colors:!bg-[Highlight] forced-colors:!text-[HighlightText]'
    },
    isDisabled: {
      true: 'bg-neutral-100 dark:bg-secondary-800 forced-colors:!bg-[ButtonFace] text-neutral-300 dark:text-secondary-600 forced-colors:!text-[GrayText] border-black/5 dark:border-white/5 forced-colors:border-[GrayText]'
    }
  }
});

export function ToggleButton(props: ToggleButtonProps) {
  return (
    <RACToggleButton
      {...props}
      className={composeRenderProps(
        props.className,
        (className, renderProps) => styles({...renderProps, className})
      )} />
  );
}
