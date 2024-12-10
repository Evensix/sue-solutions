"use dom";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import {
  Button as AriaButton,
  composeRenderProps,
  type ButtonProps as AriaButtonProps,
} from "react-aria-components";

import { cn } from "@/lib/utils";

// Define button variants
const buttonVariants = cva(
  [
    "inline-flex relative group items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors",
    /* Disabled */
    "data-[disabled]:pointer-events-none",
    /* Focus Visible */
    "data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2",
    /* Resets */
    "focus-visible:outline-none",
  ],
  {
    variants: {
      variant: {
        "primary":
          " bg-button-background-primary text-button-text-primary "+ 
          "data-[pressed]:bg-button-background-primary "+
          "data-[hovered]:bg-button-background-primary-hover "+
          "data-[disabled]:text-button-text-primary-disabled data-[disabled]:bg-button-background-primary-disabled",
        
          "secondary":
          " bg-button-background-secondary text-button-text-secondary border border-button-text-secondary-outline "+ 
          "data-[pressed]:bg-button-background-secondary data-[pressed]: "+
          "data-[hovered]:bg-button-background-secondary-hover data-[hovered]:text-button-text-secondary-hover "+
          "data-[disabled]:text-button-text-secondary-disabled data-[disabled]:bg-button-background-secondary-disabled",
        
        "tertiary":
        " bg-button-background-tertiary text-button-text-tertiary "+ 
        "data-[pressed]:bg-button-background-tertiary "+
        "data-[hovered]:bg-button-background-tertiary-hover data-[hovered]:text-button-text-tertiary-hover "+
        "data-[disabled]:text-button-text-tertiary-disabled data-[disabled]:bg-button-background-tertiary-disabled",
      

        "link":
        " bg-button-background-link text-button-text-link "+ 
        "data-[pressed]:bg-button-background-link "+
        "data-[hovered]:bg-button-background-link-hover data-[hovered]:text-button-text-link-hover "+
        "data-[disabled]:text-button-text-link-disabled data-[disabled]:bg-button-background-link-disabled",
      
      },
      size: {
        primary: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "primary",
    },
  }
);

interface ButtonDecoration {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

interface ButtonProps
  extends AriaButtonProps,
    VariantProps<typeof buttonVariants>,
    ButtonDecoration {}

const Button = ({ className, variant, size, prefix, suffix, children, ...props }: ButtonProps) => {
  return ( 
      <AriaButton
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
      >
        <div className="absolute halo -inset-1 rounded-md w-[calc(100%+8px)] h-[calc(100%+8px)] -z-10"/>

        <span className="flex items-center gap-2 ">
          {prefix && <span className="flex-shrink-0">{prefix}</span>}
          {children}
          {suffix && <span className="flex-shrink-0">{suffix}</span>}
        </span>
        
      </AriaButton>
  );
};

export default { Button, buttonVariants };
export type { ButtonProps };
