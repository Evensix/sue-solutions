"use client"

import { VariantProps } from "class-variance-authority"
import {
  DateField as AriaDateField,
  DateFieldProps as AriaDateFieldProps,
  DateInput as AriaDateInput,
  DateInputProps as AriaDateInputProps,
  DateSegment as AriaDateSegment,
  DateSegmentProps as AriaDateSegmentProps,
  DateValue as AriaDateValue,
  TimeField as AriaTimeField,
  TimeFieldProps as AriaTimeFieldProps,
  TimeValue as AriaTimeValue,
  ValidationResult as AriaValidationResult,
  composeRenderProps,
  Text,
} from "react-aria-components"

import { cn } from "@/lib/utils"
import { fieldGroupVariants } from "../InputUtils/InputUtils"


const DateField = AriaDateField

const TimeField = AriaTimeField

function DateSegment({ className, ...props }: AriaDateSegmentProps) {
  return (
    <AriaDateSegment
      className={composeRenderProps(className, (className) =>
        cn(
          "type-literal:px-0 inline w-48  rounded p-0.5 caret-transparent outline outline-0",
          /* Placeholder */
          "data-[placeholder]:text-muted-foreground",
          /* Disabled */
          "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
          /* Focused */
          "data-[focused]:bg-accent data-[focused]:text-accent-foreground",
          /* Invalid */
          "data-[invalid]:data-[focused]:bg-destructive data-[invalid]:data-[focused]:data-[placeholder]:text-destructive-foreground data-[invalid]:data-[focused]:text-destructive-foreground data-[invalid]:data-[placeholder]:text-destructive data-[invalid]:text-destructive",
          className
        )
      )}
      {...props}
    />
  )
}

interface DateInputProps
  extends AriaDateInputProps,
    VariantProps<typeof fieldGroupVariants> {}

function DateInput({
  className,
  variant,
  ...props
}: Omit<DateInputProps, "children">) {
  return (
    <AriaDateInput
      className={composeRenderProps(className, (className) =>
        cn(fieldGroupVariants({ variant }), "text-sm", className)
      )}
      {...props}
    >
      {(segment) => <DateSegment segment={segment} />}
    </AriaDateInput>
  )
}

interface DateFieldProps<T extends AriaDateValue>
  extends AriaDateFieldProps<T> {
}

function DateInputField<T extends AriaDateValue>({
  className,
  ...props
}: DateFieldProps<T>) {
  return (
    <DateField
      className={composeRenderProps(className, (className) =>
        cn("group flex flex-col gap-2 [&>div]:h-56", className)
      )}
      {...props}
    >
      <DateInput />
    </DateField>
  )
}

interface TimeFieldProps<T extends AriaTimeValue>
  extends AriaTimeFieldProps<T> {
}

function TimeInputField<T extends AriaTimeValue>({
  className,
  ...props
}: TimeFieldProps<T>) {
  return (
    <TimeInputField
      className={composeRenderProps(className, (className) =>
        cn("group flex flex-col gap-2", className)
      )}
      {...props}
    >
      <DateInput />
    </TimeInputField>
  )
}

export {
  DateField,
  DateSegment,
  DateInput,
  TimeInputField ,
  DateInputField ,
}
export type { DateInputProps, DateFieldProps as JollyDateFieldProps, TimeFieldProps as JollyTimeFieldProps }
