"use dom"

import { cva, type VariantProps } from "class-variance-authority"
import {
  FieldError as AriaFieldError,
  FieldErrorProps as AriaFieldErrorProps,
  Group as AriaGroup,
  GroupProps as AriaGroupProps,
  Label as AriaLabel,
  LabelProps as AriaLabelProps,
  Text as AriaText,
  TextProps as AriaTextProps,
} from "react-aria-components"


const labelVariants = cva([
  "text-sm font-medium leading-none",
  /* Disabled */
  "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70",
  /* Invalid */
  "group-data-[invalid]:text-destructive",
])

const Label = ({ className, ...props }: AriaLabelProps) => (
  <AriaLabel className={className} {...props} />
)

function FormDescription({ className, ...props }: AriaTextProps) {
  return (
    <AriaText
      className={ className }
      {...props}
      slot="description"
    />
  )
}

function FieldError({ className, ...props }: AriaFieldErrorProps) {
  return (
    <AriaFieldError
      className={className}
      {...props}
    />
  )
}

const fieldGroupVariants = cva("", {
  variants: {
    variant: {
      default: [
        "relative flex w-full items-center overflow-hidden bg-background px-3 py-2 text-sm ring-offset-background gap-10",
        /* Focus Within */
        "data-[focus-within]:outline-none data-[focus-within]:ring-2 data-[focus-within]:ring-ring data-[focus-within]:ring-offset-2",
        /* Disabled */
        "data-[disabled]:opacity-50",
      ],
      ghost: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

interface GroupProps
  extends AriaGroupProps,
    VariantProps<typeof fieldGroupVariants> {}

function FieldGroup({ className, variant, ...props }: GroupProps) {
  return (
    <AriaGroup
      className={className}
      {...props}
    />
  )
}

export {
  Label,
  labelVariants,
  FieldGroup,
  fieldGroupVariants,
  FieldError,
  FormDescription,
}