"use dom";

import { cn } from "@/lib/utils";
import {
  Collection as AriaCollection,
  Header as AriaHeader,
  ListBox as AriaListBox,
  ListBoxItem as AriaListBoxItem,
  ListBoxItemProps as AriaListBoxItemProps,
  ListBoxProps as AriaListBoxProps,
  Section as AriaSection,
  composeRenderProps,
} from "react-aria-components"


const ListBoxSection = AriaSection

const ListBoxCollection = AriaCollection

function ListBox<T extends object>({
  className,
  ...props
}: AriaListBoxProps<T>) {
  return (
    <AriaListBox
      className={
        cn(
          "group overflow-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md outline-none",
          /* Empty */
          "data-[empty]:p-6 data-[empty]:text-center data-[empty]:text-sm"
        )
      }
      {...props}
    />
  )
}

const ListBoxItem = <T extends object>({
  className,
  children,
  ...props
}: AriaListBoxItemProps<T>) => {
  return (
    <AriaListBoxItem
      textValue={
        props.textValue || (typeof children === "string" ? children : undefined)
      }
      className={
        cn(
          "relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none ",
          /* Disabled */
          "data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ",
          /* Focused */
          "data-[focused]:bg-accent data-[focused]:text-accent-foreground ",
          /* Hovered */
          "data-[hovered]:bg-accent data-[hovered]:text-accent-foreground ",
          /* Selection */
          // "data-[selection-mode]:pl-8"
        )

      }
      {...props}
    >
      {composeRenderProps(children, (children, renderProps) => (
        <>
          {renderProps.isSelected && (
            <div className="absolute left-0 flex bg-input-halo-focus -z-10 w-full h-full items-center"></div>
          )}
          {children}
        </>
      ))}
    </AriaListBoxItem>
  )
}

function ListBoxHeader({
  className,
  ...props
}: React.ComponentProps<typeof AriaHeader>) {
  return (
    <AriaHeader
      className={"py-1.5 pl-8 pr-2 text-sm font-semibold"}
      {...props}
    />
  )
}

export {
  ListBox,
  ListBoxItem,
  ListBoxHeader,
  ListBoxSection,
  ListBoxCollection,
}
