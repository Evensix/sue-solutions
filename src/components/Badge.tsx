import { FC } from "react";
import { tv } from "tailwind-variants";
import { Label } from "./Field.tsx";

export interface BadgeProps {
  className?: string;
  type?: "badge" | "badge-color" | "pill" | "ghost";
  color?: "brand" | "error" | "neutral";
  size?: "xxsmall" | "xsmall" | "small" | "medium" | "large";
}

const badge = tv({
  base: "cursor-default select-none inline-flex p-[1px] gap-2 text-center transition",
  variants: {
    size: {
      xxsmall: "  [& * svg]:h-10  p-2",
      xsmall: "  [& * svg]:h-10  p-4",
      small: "  [& * svg]:h-20  p-6",
      medium: "  [& * svg]:h-20  p-8",
      large: "  [& * svg]:h-20  p-10",
    },
    type: {
      "badge-color": " rounded-6 ",
      pill: "rounded-full",
      ghost: " bg-transparent rounded-4",
      badge: "border rounded-4 border-neutral-900/15",
    },
    color: {
      white: "text-white bg-white/10",
      neutral: "text-neutral-700 bg-neutral-900/5",
      success: "text-success-800 success-50",
      warning: "text-warning-700 bg-warning-50",
      error: "text-error-600 bg-error-25",
      brand: "text-brand-600 bg-brand-500/15",
    },
  },
  compoundVariants: [
    {
      type: "ghost",
      color: "white",
      className: "bg-transparent",
    },
    {
      type: "ghost",
      color: "neutral",
      className: "bg-transparent",
    },
    {
      type: "ghost",
      color: "success",
      className: "bg-transparent",
    },
    {
      type: "ghost",
      color: "warning",
      className: "bg-transparent",
    },
    {
      type: "ghost",
      color: "error",
      className: "bg-transparent",
    },
    {
      type: "ghost",
      color: "brand",
      className: "bg-transparent",
    },
  ],
  defaultVariants: {
    type: "badge-color",
    color: "neutral",
    size: "medium",
  },
});

export const Badge: FC<BadgeProps> = (props) => {
  return (
    <Label
      {...props}
      className={badge({
        color: props.color,
        type: props.type,
        size: props.size,
      })}
    />
  );
};
