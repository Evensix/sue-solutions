"use client"

import * as React from "react"
import { Check, Minus } from "lucide-react"
import {
  Checkbox as AriaCheckbox,
  CheckboxGroup as AriaCheckboxGroup,
  CheckboxGroupProps as AriaCheckboxGroupProps,
  ValidationResult as AriaValidationResult,
  composeRenderProps,
  Text,
  type CheckboxProps as AriaCheckboxProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"
import { labelVariants } from "../InputUtils/InputUtils"



const Checkbox = ({ className, children, ...props }: AriaCheckboxProps) => (
  <AriaCheckbox
    className={composeRenderProps(className, (className) =>
      cn(
        "group/checkbox flex items-center gap-x-2",
        /* Disabled */
        "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70",
        labelVariants,
        className
      )
    )}
    {...props}
  >
    {composeRenderProps(children, (children, renderProps) => (
      <>
        <div
          className={cn(
            "flex size-4 shrink-0 items-center justify-center rounded-sm border border-primary text-current ring-offset-background",
            /* Focus Visible */
            "group-data-[focus-visible]/checkbox:outline-none group-data-[focus-visible]/checkbox:ring-2 group-data-[focus-visible]/checkbox:ring-ring group-data-[focus-visible]/checkbox:ring-offset-2",
            /* Selected */
            "group-data-[indeterminate]/checkbox:bg-primary group-data-[selected]/checkbox:bg-primary group-data-[indeterminate]/checkbox:text-primary-foreground  group-data-[selected]/checkbox:text-primary-foreground",
            /* Disabled */
            "group-data-[disabled]/checkbox:cursor-not-allowed group-data-[disabled]/checkbox:opacity-50",
            /* Invalid */
            "group-data-[invalid]/checkbox:border-destructive group-data-[invalid]/checkbox:group-data-[selected]/checkbox:bg-destructive group-data-[invalid]/checkbox:group-data-[selected]/checkbox:text-destructive-foreground",
            /* Resets */
            "focus:outline-none focus-visible:outline-none"
          )}
        >
          {renderProps.isIndeterminate ? (
            <Minus className="size-4" />
          ) : renderProps.isSelected ? (
            <Check className="size-4" />
          ) : null}
        </div>
        {children}
      </>
    ))}
  </AriaCheckbox>
)

interface CheckboxGroupProps extends AriaCheckboxGroupProps {
}

function CheckboxGroup({
  className,
  children,
  ...props
}: CheckboxGroupProps) {
  return (
    <AriaCheckboxGroup
      className={composeRenderProps(className, (className) =>
        cn("group flex flex-col gap-2", className)
      )}
      {...props}
    >
      {composeRenderProps(children, (children) => (
        <>
          {children}
        </>
      ))}
    </AriaCheckboxGroup>
  )
}

export { Checkbox, CheckboxGroup }
export type { CheckboxGroupProps as CheckboxGroupProps }