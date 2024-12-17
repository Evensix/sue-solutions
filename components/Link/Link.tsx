"use dom"

import * as React from "react"
import { type VariantProps } from "class-variance-authority"
import {
  Link as AriaLink,
  LinkProps as AriaLinkProps,
  composeRenderProps,
} from "react-aria-components"

import { buttonVariants } from "../Button/Button"
import { cn } from "@/lib/utils"



interface LinkProps
  extends AriaLinkProps,
    VariantProps<typeof buttonVariants> {}

const Link = ({ className, variant, size, ...props }: LinkProps) => {
  return (
    <AriaLink
      className={composeRenderProps(className, (className) =>
        cn(
          buttonVariants({
            variant,
            size,
            className,
          })
        )
      )}
      {...props}
    />
  )
}

export { Link }
export type { LinkProps }
