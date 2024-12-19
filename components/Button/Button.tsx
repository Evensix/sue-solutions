"use dom";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import {
  Button as AriaButton,
  composeRenderProps,
  type ButtonProps as AriaButtonProps,
} from "react-aria-components";

import { cn } from "@/lib/utils";
import StyledText from "../StyledText/StyledText";
import { Height } from "@mui/icons-material";

// Define button variants
const buttonVariants = cva(
  [
    "inline-flex transition w-fit ease-in-out relative group items-center justify-center whitespace-nowrap radius-6 ring-offset-background transition-colors",
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
          " bg-button-background-primary text-button-text-primary border-border-button-primary-outline  "+ 
          "data-[pressed]:bg-button-background-primary [&>.halo]:data-[pressed]:bg-button-primary-halo  "+
          "data-[hovered]:bg-button-background-primary-hover "+
          "data-[disabled]:text-button-text-primary-disabled data-[disabled]:bg-button-background-primary-disabled",
        
          "secondary":
          " bg-button-background-secondary text-button-text-secondary border border-button-secondary-border  "+ 
          "data-[pressed]:bg-button-background-secondary [&>.halo]:data-[pressed]:bg-button-secondary-halo "+
          "data-[hovered]:bg-button-background-secondary-hover data-[hovered]:text-button-text-secondary-hover "+
          "data-[disabled]:text-button-text-secondary-disabled data-[disabled]:bg-button-background-secondary-disabled",
        
        "tertiary":
        " bg-button-background-tertiary text-button-text-tertiary "+ 
        "data-[pressed]:bg-button-background-tertiary [&>.halo]:data-[pressed]:bg-button-tertiary-halo "+
        "data-[hovered]:bg-button-background-tertiary-hover data-[hovered]:text-button-text-tertiary-hover "+
        "data-[disabled]:text-button-text-tertiary-disabled data-[disabled]:bg-button-background-tertiary-disabled",
      

        "link":
        " bg-button-background-link text-button-text-link !p-0 "+ 
        "data-[pressed]:bg-button-background-link "+
        "data-[hovered]:bg-button-background-link-hover data-[hovered]:text-button-text-link-hover "+
        "data-[disabled]:text-button-text-link-disabled data-[disabled]:bg-button-background-link-disabled",
      
      },
      size: {
        link:    " [&>.content]:h-20 [& * svg]:h-20  p-0",
        xxsmall: " [&>.content]:h-20 [& * svg]:h-10  p-2",
        xsmall:  " [&>.content]:h-20 [& * svg]:h-10  p-4",
        small:   " [&>.content]:h-20 [& * svg]:h-20  p-6",
        medium:  " [&>.content]:h-20 [& * svg]:h-20  p-8",
        large:   " [&>.content]:h-20 [& * svg]:h-20  p-10",
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
  title?: string;
}

export interface ButtonProps
  extends AriaButtonProps,
    VariantProps<typeof buttonVariants>,
    ButtonDecoration {}

const Button:React.FC<ButtonProps> = ({ className, variant, size, prefix, suffix, title, ...props }: ButtonProps) => {
  const textSizeMap = {
    xxsmall: 12,
    xsmall: 12,
    small: 14,
    medium: 14,
    large: 16,
  }
  const iconSizeMap = {
    xxsmall: '16px',
    xsmall:'16px',
    small: '18px',
    medium: '18px',
    large: '22px',
  }

  const PrefixComponent = () => {
    return prefix ? React.cloneElement(prefix as React.ReactElement, { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: iconSizeMap[size], width: iconSizeMap[size] } }) : null;
  };

  const SuffixComponent = () => {
    return suffix ? React.cloneElement(suffix as React.ReactElement, { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: iconSizeMap[size], width:iconSizeMap[size] } }) : null;
  };

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
        <span className="absolute halo ease-in-out -inset-1 bg-transparent radius-8 w-[calc(100%+8px)] h-[calc(100%+8px)] -z-10 transition-colors duration-600"/>

        <span className="content flex items-center gap-2 ">
          {/* {prefix} */}
          <PrefixComponent />
          {title && <StyledText size={size ? textSizeMap[size] : 14} className="flex-1" as="span" >{title}</StyledText>}
          {/* {suffix} */}
          <SuffixComponent />
        </span>
        
      </AriaButton>
  );
};

export default  Button ;
export {buttonVariants}

