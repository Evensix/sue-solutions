import { Check, Minus } from 'lucide-react';
import type { ReactNode } from 'react';
import { Checkbox as AriaCheckbox, CheckboxGroup as AriaCheckboxGroup, CheckboxGroupProps as AriaCheckboxGroupProps, CheckboxProps, composeRenderProps } from 'react-aria-components';
import { tv } from 'tailwind-variants';
import { Label } from './Field.tsx';
import { composeTailwindRenderProps, focusRing } from './utils.ts';

export interface CheckboxGroupProps extends Omit<AriaCheckboxGroupProps, 'children'> {
  children?: ReactNode,
}

export function CheckboxGroup(props: CheckboxGroupProps) {
  return (
    <AriaCheckboxGroup {...props} className={composeTailwindRenderProps(props.className, 'flex flex-col gap-2')}>
      {props.children}
    </AriaCheckboxGroup>
  );
}

const checkboxStyles = tv({
  base: 'flex gap-2 items-center group text-sm transition gap-8',
  variants: {
    isDisabled: {
      false: 'text-neutral-800 dark:text-secondary-200',
      true: 'text-neutral-300 dark:text-secondary-600 forced-colors:text-[GrayText]'
    }
  }
});

const boxStyles = tv({
  extend: focusRing,
  base: ['w-20 h-20 flex-shrink-0 rounded-4 flex items-center justify-center border-2 transition border-neutral-900/25',
				'outline-brand-500/25 dark:outline-brand-500/25'
  ],
  variants: {
    isSelected: {
      false: 'bg-white dark:bg-neutral-900/10  dark:border-brand-400 ',
      true: 'bg-brand-600 border-brand-600'
    },
    isInvalid: {
      true: '[--color:theme(error-700)] dark:[--color:theme(colors.red.600)] forced-colors:![--color:Mark] '
    },
    isDisabled: {
      true: ' bg-neutral-900/5 border-neutral-900/25 [--color:neutral-900/5] dark:[--color:theme(colors.zinc.700)] forced-colors:![--color:GrayText]'
    }
  }
});

// const boxStyles = tv({
//   extend: focusRing,
//   base: 'w-20 h-20 flex-shrink-0 rounded-4 flex items-center justify-center border-2 transition border-neutral-900/25',
//   variants: {
//     isSelected: {
//       false: 'bg-white dark:bg-neutral-900/10 border-[--color] [--color:theme(colors.gray.400)] dark:[--color:colors.zinc-400)] group-pressed:[--color:theme(colors.gray.500)] dark:group-pressed:[--color:theme(colors.zinc.300)]',
//       true: 'bg-[--color] border-[--color] [--color:theme(colors.gray.700)] group-pressed:[--color:theme(colors.gray.800)] dark:[--color:theme(colors.slate.300)] dark:group-pressed:[--color:theme(colors.slate.200)] forced-colors:![--color:Highlight]'
//     },
//     isInvalid: {
//       true: '[--color:theme(colors.red.700)] dark:[--color:theme(colors.red.600)] forced-colors:![--color:Mark] group-pressed:[--color:theme(colors.red.800)] dark:group-pressed:[--color:theme(colors.red.700)]'
//     },
//     isDisabled: {
//       true: '[--color:theme(colors.gray.200)] dark:[--color:theme(colors.zinc.700)] forced-colors:![--color:GrayText]'
//     }
//   }
// });

const iconStyles = 'w-16 h-16 text-white z-10 group-disabled:text-neutral-400 dark:text-neutral-900 dark:group-disabled:text-neutral-600 forced-colors:text-[HighlightText]';

export function Checkbox(props: CheckboxProps) {
  return (
    <AriaCheckbox {...props} className={composeRenderProps(props.className, (className, renderProps) => checkboxStyles({...renderProps, className}))}>
      {({isSelected, isIndeterminate, ...renderProps}) => (
        <>
          <div className={boxStyles({isSelected: isSelected || isIndeterminate, ...renderProps})}>
            {isIndeterminate
              ? <Minus aria-hidden className={iconStyles} />
              : isSelected
                ? <Check aria-hidden className={iconStyles} />
                : null
            }
          </div>
          {props.children}
        </>
      )}
    </AriaCheckbox>
  );
}
