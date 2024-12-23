import {
  DateField as AriaDateField,
  DateFieldProps as AriaDateFieldProps,
  DateInput as AriaDateInput,
  DateInputProps,
  DateSegment,
  DateValue,
  ValidationResult,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { fieldGroupStyles } from "./Field.tsx";
import { composeTailwindRenderProps } from "./utils.ts";

export interface DateFieldProps<T extends DateValue>
  extends AriaDateFieldProps<T> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function DateField<T extends DateValue>({
  ...props
}: DateFieldProps<T>) {
  return (
    <AriaDateField
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "flex flex-col gap-1"
      )}
    >
      <DateInput />
    </AriaDateField>
  );
}

const segmentStyles = tv({
  base: "inline p-0.5 type-literal:px-0  border border-neutral-300  rounded-4 p-10 outline outline-0 forced-color-adjust-none caret-transparent text-neutral-800 dark:text-secondary-200 forced-colors:text-[ButtonText]",
  
  variants: {
    isDisabled: {
      true: "text-neutral-200 dark:text-secondary-600 forced-colors:text-[GrayText]",
    },
    isFocused: {
      true: "bg-purple-600 text-white dark:text-white forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]",
    },
  },
});

export function DateInput(props: Omit<DateInputProps, "children">) {
  return (
    <AriaDateInput
      className={(renderProps) =>
        fieldGroupStyles({
          ...renderProps,
          class: " min-w-[150px] px-2 py-1.5 text-sm flex gap-16 border-0",
        })
      }
      {...props}
    >
      {(segment) => (
        <>
          {segment.type !== "literal" && (
            <div className="flex flex-col">
              <span className={` capitalize pb-[7px]  ${segment.type === "year" ? "w-[75px]" : "w-[60px]"} `}> {segment.type}</span>
              <DateSegment segment={{...segment, text: segment.text.replace(/\D/g, ""),}}  className={segmentStyles} />
            </div>
          )}
        </>
      )}
    </AriaDateInput>
  );
}
