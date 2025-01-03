import { CalendarIcon } from "lucide-react";
import {
  DatePicker as AriaDatePicker,
  Input as AriaInput,
  Button,
  type DatePickerProps as AriaDatePickerProps,
  type DateValue,
} from "react-aria-components";
import { DateInput } from "./DateField.tsx";
import { FieldGroup } from "./Field.tsx";
import { composeTailwindRenderProps } from "./utils.ts";
import { useState } from "react";

export interface DatePickerProps<T extends DateValue>
  extends AriaDatePickerProps<T> {
  label?: string;
}

export function DatePickerNative<T extends DateValue>({
  ...props
}: DatePickerProps<T>) {

	const [value, setValue] = useState('');
  return (
    <AriaDatePicker
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "group flex flex-row gap-4"
      )}
    >
      <FieldGroup className="w-auto min-w-[167px]">
        <DateInput  className="min-w-[150px] flex-1 px-8 py-6 text-sm" />
      </FieldGroup>
      <div className="relative items-center justify-center flex">
        <CalendarIcon />
        <AriaInput
		  onChange={(e) => setValue(e.target.value)}
          type="date"
          className="w-32 h-40 opacity-0 absolute top-0 left-0 z-[10]"
        />
      </div>
    </AriaDatePicker>
  );
}
