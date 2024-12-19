"use dom";

import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
  ListBox as AriaListBox,
  ListBoxProps as AriaListBoxProps,
  PopoverProps as AriaPopoverProps,
  Select as AriaSelect,
  SelectProps as AriaSelectProps,
  SelectValue as AriaSelectValue,
  SelectValueProps as AriaSelectValueProps,
  composeRenderProps,
} from "react-aria-components";

import { ExpandMore } from "@mui/icons-material";

const Select = AriaSelect;

const SelectItem = ListBoxItem;

const SelectHeader = ListBoxHeader;

const SelectSection = ListBoxSection;

const SelectCollection = ListBoxCollection;

import { cn } from "@/lib/utils";
import React from "react";
import { InputProps as AriaInputProps } from "react-aria-components";
import {
  ListBoxCollection,
  ListBoxHeader,
  ListBoxItem,
  ListBoxSection,
} from "../ListBox/ListBox";
import { Popover } from "../Popover/Popover";

export type InputFieldProps = AriaInputProps & {
  className?: string;
  name: string;
  type?: "text" | "password" | "email" | "number" | "search" | "tel" | "url";
  leftMembers?: React.ReactNode[];
  rightMembers?: React.ReactNode[];
  disabled?: boolean;
};

const SelectValue = <T extends object>({
  className,
  ...props
}: AriaSelectValueProps<T>) => (
  <AriaSelectValue
    className={
      "line-clamp-1 data-[placeholder]:text-muted-foreground" +
      /* Description */
      "[&>[slot=description]]:hidden"
    }
    {...props}
  />
);

const SelectTrigger = ({ className, children, ...props }: AriaButtonProps) => (
  <AriaButton
    className={cn(
      "flex  w-full items-center justify-between radius-4 border border-input-border bg-input-background px-3 py-2 text-sm px-8 relative  ",
      /* Disabled */
      "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
      /* Focused */
      "data-[focus-visible]:outline-none  ",
      /* Resets */
      "focus-visible:outline-none  "
    )}
    {...props}
  >
    {composeRenderProps(children, (children) => (
      <>
        {children}
        <ExpandMore />
      </>
    ))}
  </AriaButton>
);

const SelectPopover = ({ className, ...props }: AriaPopoverProps) => (
  <Popover className={"popover w-[--trigger-width] relative"} {...props} />

);
interface SelectProps<T extends object>
  extends Omit<AriaSelectProps<T>, "children"> {
  items?: Iterable<{ key: string | number; name: string }>;
  children?: React.ReactNode | ((item: T) => React.ReactNode);
}

const SelectListBox = <T extends { key: string | number; name: string }>({
  className,
  ...props
}: AriaListBoxProps<T>) => {
  const itemsArray = props.items ? Array.from(props.items) : []; // Convert Iterable<T> to array

  return (
    <AriaListBox
      className="max-h-[inherit] overflow-auto p-1 outline-none  [clip-path:inset(0_0_0_0_round_calc(var(--radius)-2px))] px-6"
      {...props}
    >
      {itemsArray.map((item) => (
        <SelectItem key={item.key} value={item}>
          {item.name}
        </SelectItem>
      ))}
    </AriaListBox>
  );
};

function SelectField<T extends object>({
  children,
  className,
  items,
  ...props
}: SelectProps<T>) {
  const ref = React.useRef(null);

  return (
    <Select
      className="group flex flex-col gap-2   min-w-[200px] [&>.halo]:data-[focused]:bg-input-halo-focus  relative "
      {...props}
    >
    <span className={`absolute halo bg-transparent ease-in-out -inset-4 radius-8 w-[calc(100%+8px)] h-[calc(100%+8px)] -z-10 transition-colors duration-600`}/>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectPopover >
        <SelectListBox items={items} />
      </SelectPopover>
    </Select>
  );
}

export default SelectField;
