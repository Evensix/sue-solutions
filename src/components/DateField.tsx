import {
  DateField as AriaDateField,
  DateFieldProps as AriaDateFieldProps,
  DateInput as AriaDateInput,
  DateInputProps,
  DateSegment,
  DateValue,
  ValidationResult
} from 'react-aria-components';
import { tv } from 'tailwind-variants';
import { fieldGroupStyles } from './Field.tsx';
import { composeTailwindRenderProps } from './utils.ts';

export interface DateFieldProps<T extends DateValue> extends AriaDateFieldProps<T> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function DateField<T extends DateValue>(
  {  ...props }: DateFieldProps<T>
) {
  return (
    <AriaDateField {...props} className={composeTailwindRenderProps(props.className, 'flex flex-col gap-1')}>
      <DateInput />
    </AriaDateField>
  );
}

const segmentStyles = tv({
  base: 'inline p-0.5 type-literal:px-0 rounded outline outline-0 forced-color-adjust-none caret-transparent text-neutral-800 dark:text-secondary-200 forced-colors:text-[ButtonText]',
  variants: {
    isPlaceholder: {
      true: 'text-neutral-600 dark:text-secondary-400 italic'
    },
    isDisabled: {
      true: 'text-neutral-200 dark:text-secondary-600 forced-colors:text-[GrayText]'
    },
    isFocused: {
      true: 'bg-purple-600 text-white dark:text-white forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]'
    }
  }
});

export function DateInput(props: Omit<DateInputProps, 'children'>) {
  return (
    <AriaDateInput className={renderProps => fieldGroupStyles({...renderProps, class: 'block min-w-[150px] px-2 py-1.5 text-16'})} {...props}>
      {(segment) => <DateSegment segment={segment} className={segmentStyles} />}
    </AriaDateInput>
  );
}
