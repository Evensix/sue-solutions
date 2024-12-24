import type { ReactNode } from "react";
import {
	Radio as RACRadio,
	RadioGroup as RACRadioGroup,
	type RadioGroupProps as RACRadioGroupProps,
	type RadioProps
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { composeTailwindRenderProps, focusRing } from "./utils.ts";

export interface RadioGroupProps extends Omit<RACRadioGroupProps, "children"> {
  children?: ReactNode;
}

export function RadioGroup(props: RadioGroupProps) {
  return (
    <RACRadioGroup
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "group flex flex-col gap-8"
      )}
    >
      <div className="flex gap-8 group-orientation-vertical:flex-col group-orientation-horizontal:gap-4">
        {props.children}
      </div>
    </RACRadioGroup>
  );
}

const styles = tv({
  extend: focusRing,
  base: [
    "h-20 w-20 rounded-full border-2 bg-white transition-all dark:bg-secondary-900",
    "outline-brand-500/25 dark:outline-brand-500/25",
  ],
  variants: {
    isSelected: {
      false: "border-neutral-900/25  group-pressed:border-neutral-500 dark:border-secondary-400 dark:group-pressed:border-secondary-300 ",
      true: "forced-colors:!border-[Highlight] border-[7px] border-brand-600 group-pressed:border-neutral-800 dark:border-neutral-300 dark:group-pressed:border-neutral-200 disabled:border-neutral-900/5",
    },
    isInvalid: {
      true: "forced-colors:!border-[Mark] border-error-700 group-pressed:border-error-800 dark:border-error-600 dark:group-pressed:border-error-700",
    },
    isDisabled : {
      true: " bg-neutral-900/25 border-white/50  border-[10px]",
    },
	isSelectedDisabled: {
		true: " border-[5px]"
	}
  },
});

export function Radio(props: RadioProps) {
  return (
    <RACRadio
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "group flex items-center gap-8 text-neutral-800 text-14 transition disabled:text-neutral-300  dark:text-secondary-200 dark:disabled:text-secondary-600 forced-colors:disabled:text-[GrayText]"
      )}
    >
      {(renderProps) =>(
        <>
			<div className={`${renderProps.isDisabled && "border-[1px] border-neutral-900/25 rounded-full"}`}>
            	<div className={styles({...renderProps, isSelectedDisabled: renderProps.isSelected && renderProps.isDisabled})} />
			</div>
          {props.children}
        </>
      )}
    </RACRadio>
  );
}
