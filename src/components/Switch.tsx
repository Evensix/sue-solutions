import type {ReactNode} from 'react';
import {
  Switch as AriaSwitch,
  SwitchProps as AriaSwitchProps
} from 'react-aria-components';
import { tv } from 'tailwind-variants';
import { composeTailwindRenderProps, focusRing } from './utils.ts';

export interface SwitchProps extends Omit<AriaSwitchProps, 'children'> {
  children: ReactNode;
}

const track = tv({
  extend: focusRing,
  base: 'flex h-[24px] w-[44px] px-px items-center shrink-0 cursor-default rounded-full transition duration-200 ease-in-out shadow-inner border border-transparent',
  variants: {
    isSelected: {
      false: 'bg-neutral-900/10 dark:bg-secondary-400 group-pressed:bg-neutral-500 dark:group-pressed:bg-secondary-300',
      true: 'bg-brand-600 dark:bg-secondary-300 forced-colors:!bg-[Highlight] group-pressed:bg-neutral-800 dark:group-pressed:bg-secondary-200',
    },
    isDisabled: {
      true: 'bg-neutral-200 dark:bg-secondary-700 forced-colors:group-selected:!bg-[GrayText] forced-colors:border-[GrayText]',
    }
  }
});

const handle = tv({
  base: 'h-[20px] w-[20px] transform rounded-full bg-white dark:bg-secondary-900 outline outline-1 -outline-offset-1 outline-transparent shadow transition duration-200 ease-in-out',
  variants: {
    isSelected: {
      false: 'translate-x-2',
      true: 'translate-x-[100%]'
    },
    isDisabled: {
      true: 'forced-colors:outline-[GrayText]'
    }
  }
});

export function Switch({ children, ...props }: SwitchProps) {
  return (
    <AriaSwitch {...props} className={composeTailwindRenderProps(props.className, 'group flex gap-8 items-center text-neutral-800 disabled:text-neutral-300 dark:text-secondary-200 dark:disabled:text-secondary-600 forced-colors:disabled:text-[GrayText] text-14 transition')}>
      {(renderProps) => (
        <>
          <div className={track(renderProps)}>
            <span className={handle(renderProps)} />
          </div>
          {children}
        </>
      )}
    </AriaSwitch>
  );
}
