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
    "inline-flex transition ease-in-out delay-150 relative group items-center justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors",
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
          " bg-button-background-primary text-button-text-primary border-border-button-primary-outline [&>div]:bg-transparent "+ 
          "data-[pressed]:bg-button-background-primary [&>div]:data-[pressed]:bg-button-primary-halo  "+
          "data-[hovered]:bg-button-background-primary-hover "+
          "data-[disabled]:text-button-text-primary-disabled data-[disabled]:bg-button-background-primary-disabled",
        
          "secondary":
          " bg-button-background-secondary text-button-text-secondary border border-button-secondary-border "+ 
          "data-[pressed]:bg-button-background-secondary [&>div]:data-[pressed]:bg-button-secondary-halo "+
          "data-[hovered]:bg-button-background-secondary-hover data-[hovered]:text-button-text-secondary-hover "+
          "data-[disabled]:text-button-text-secondary-disabled data-[disabled]:bg-button-background-secondary-disabled",
        
        "tertiary":
        " bg-button-background-tertiary text-button-text-tertiary "+ 
        "data-[pressed]:bg-button-background-tertiary [&>div]:data-[pressed]:bg-button-tertiary-halo "+
        "data-[hovered]:bg-button-background-tertiary-hover data-[hovered]:text-button-text-tertiary-hover "+
        "data-[disabled]:text-button-text-tertiary-disabled data-[disabled]:bg-button-background-tertiary-disabled",
      

        "link":
        " bg-button-background-link text-button-text-link "+ 
        "data-[pressed]:bg-button-background-link "+
        "data-[hovered]:bg-button-background-link-hover data-[hovered]:text-button-text-link-hover "+
        "data-[disabled]:text-button-text-link-disabled data-[disabled]:bg-button-background-link-disabled",
      
      },
      size: {
        xxsmall: " text-16  [&>.content]:h-16 [& * svg]:h-16   p-4",
        xsmall:  " text-16  [&>.content]:h-20 [& * svg]:h-16  p-4",
        small:   " text-20  [&>.content]:h-20 [& * svg]:h-20  p-6",
        medium:  " text-20  [&>.content]:h-20 [& * svg]:h-20  p-8",
        large:   " text-20  [&>.content]:h-20 [& * svg]:h-20  p-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

interface ButtonDecoration {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export interface ButtonProps
  extends AriaButtonProps,
    VariantProps<typeof buttonVariants>,
    ButtonDecoration {}

const Button:React.FC<ButtonProps> = ({ className, variant, size, prefix, suffix, children, ...props }: ButtonProps) => {
  return ( 
      <AriaButton
        className={composeRenderProps(className, (className) =>
          cn(
            buttonVariants({
              size,
              variant,
              className,
            })
          )
        )}
        {...props}
      >
        <div className="absolute  ease-in-out -inset-1 rounded-md w-[calc(100%+8px)] h-[calc(100%+8px)] -z-10 transition-colors duration-600"/>

        <span className="content flex items-center gap-2 ">
          {prefix && <span className="flex-shrink-0">{prefix}</span>}
          {children}
          {suffix && <span className="flex-shrink-0">{suffix}</span>}
        </span>
        
      </AriaButton>
  );
};

export default  Button ;
export {buttonVariants}

