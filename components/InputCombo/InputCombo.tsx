"use dom";

import {
  ComboBox as AriaComboBox,
  ComboBoxProps as AriaComboBoxProps,
  Input as AriaInput,
  InputProps as AriaInputProps,
  ListBox as AriaListBox,
  ListBoxProps as AriaListBoxProps,
  PopoverProps as AriaPopoverProps,
  composeRenderProps,
  Label,
} from "react-aria-components"



import { ListBoxCollection, ListBoxHeader, ListBoxItem, ListBoxSection } from "../ListBox/ListBox";
import { Popover } from "../Popover/Popover";
import Button from "../Button/Button";
import { FieldGroup } from "../InputUtils/InputUtils";

const Combobox = AriaComboBox

const ComboboxItem = ListBoxItem

const ComboboxHeader = ListBoxHeader

const ComboboxSection = ListBoxSection

const ComboboxCollection = ListBoxCollection

const ComboboxInput = ({ className, ...props }: AriaInputProps) => (
  <AriaInput
    className={composeRenderProps(className, (className) =>
        "flex  w-full bg-background px-3 py-2 outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground"+
        /* Disabled */
        "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50"
        
      )
    }
    {...props}
  />
)

const ComboboxPopover = ({ className, ...props }: AriaPopoverProps) => (
  <Popover
    className={composeRenderProps(className, (className) =>
      "w-[calc(var(--trigger-width)+4px)]"
    )}
    {...props}
  />
)

const ComboboxListBox = <T extends object>({
  className,
  ...props
}: AriaListBoxProps<T>) => (
  <AriaListBox
    className={composeRenderProps(className, (className) =>
        "max-h-[inherit] overflow-auto p-1 outline-none [clip-path:inset(0_0_0_0_round_calc(var(--radius)-2px))]"
    )}
    {...props}
  />
)

interface JollyComboBoxProps<T extends object>
  extends Omit<AriaComboBoxProps<T>, "children"> {
  label?: string
  description?: string | null
  children: React.ReactNode | ((item: T) => React.ReactNode)
}

function JollyComboBox<T extends object>({
  label,
  description,
  className,
  children,
  ...props
}: JollyComboBoxProps<T>) {
  return (
    <Combobox
      className={composeRenderProps(className, (className) =>
      "group flex flex-col gap-2"
      )}
      {...props}
    >
      <Label>{label}</Label>
      <FieldGroup className="p-0">
        <ComboboxInput />
        <Button variant="primary" size="icon" className="mr-1 size-6 p-1">
          x
        </Button>
      </FieldGroup>
      {description && (
        <span className="text-sm text-muted-foreground" slot="description">
          {description}
        </span>
      )}
      <ComboboxPopover>
        <ComboboxListBox>{children}</ComboboxListBox>
      </ComboboxPopover>
    </Combobox>
  )
}


export {
  ComboboxSection,
  Combobox,
  ComboboxListBox,
  ComboboxInput,
  ComboboxCollection,
  ComboboxItem,
  ComboboxHeader,
  ComboboxPopover,
  JollyComboBox,
}
export type { JollyComboBoxProps }
