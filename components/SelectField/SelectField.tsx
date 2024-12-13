"use dom";


import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
  ListBox as AriaListBox,
  ListBoxProps as AriaListBoxProps,
  ListBoxItem as AriaListBoxItem,
  PopoverProps as AriaPopoverProps,
  Select as AriaSelect,
  SelectProps as AriaSelectProps,
  SelectValue as AriaSelectValue,
  SelectValueProps as AriaSelectValueProps,
  ValidationResult as AriaValidationResult,
  composeRenderProps,
  Text,
} from "react-aria-components"


import { ExpandMore } from '@mui/icons-material';



const Select = AriaSelect

const SelectItem = ListBoxItem

const SelectHeader = ListBoxHeader

const SelectSection = ListBoxSection

const SelectCollection = ListBoxCollection

import React from "react";
import {
  Input as AriaInput,
  InputProps as AriaInputProps,
} from "react-aria-components"
import { ListBoxCollection, ListBoxHeader, ListBoxItem, ListBoxSection } from "../ListBox/ListBox";
import { Label } from "../InputUtils/InputUtils";
import { Popover } from "../Popover/Popover";

export type InputFieldProps =  AriaInputProps & {
  className?: string;
  name: string;
  type?: "text" | "password" | "email" | "number" | "search" | "tel" | "url",
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
        "line-clamp-1 data-[placeholder]:text-muted-foreground"+
        /* Description */
        "[&>[slot=description]]:hidden"}
    {...props}
  />
)

const SelectTrigger = ({ className, children, ...props }: AriaButtonProps) => (
  <AriaButton
    className={
        "flex h-10 w-full items-center justify-between rounded-md border border-input-border bg-input-background px-3 py-2 text-sm "+
        /* Disabled */
        "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50"+
        /* Focused */
        "data-[focus-visible]:outline-none  "+
        /* Resets */
        "focus-visible:outline-none"}
    {...props}
  >
    {composeRenderProps(children, (children) => (
      <>
        {children}
        <ExpandMore/>
      </>
    ))}
  </AriaButton>
)

const SelectPopover = ({ className, ...props }: AriaPopoverProps) => (
  <Popover
    className={"w-[--trigger-width]"}
    {...props}
  />
)
interface SelectProps<T extends object>
  extends Omit<AriaSelectProps<T>, "children"> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: AriaValidationResult) => string);
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
      className="max-h-[inherit] overflow-auto p-1 outline-none [clip-path:inset(0_0_0_0_round_calc(var(--radius)-2px))]"
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
  label,
  description,
  errorMessage,
  children,
  className,
  items,
  ...props
}: SelectProps<T>) {
  return (
    <Select className="group flex flex-col gap-2 min-w-[200px]" {...props}>
      {label && <Label className="text-sm font-medium">{label}</Label>}
      {description && (
        <p className="text-xs text-gray-500">{description}</p>
      )}
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectPopover>
        <SelectListBox items={items} />
      </SelectPopover>
      {typeof errorMessage === "string" && (
        <p className="text-sm text-red-500">{errorMessage}</p>
      )}
    </Select>
  );
}



export default SelectField;
