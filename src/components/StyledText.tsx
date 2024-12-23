import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const styles = tv({
  base: "",
  variants: {
    family: {
      jakarta: "font-plus-jakarta-sans",
    },
    size: {
      56: "font-56 tracking-tighter",
      48: "font-48 tracking-tighter",
      40: "font-40 tracking-tighter",
      32: "font-32 tracking-tighter",
      24: "font-24 tracking-tight",
      20: "font-20",
      18: "font-18",
      16: "font-16",
      14: "font-14",
      12: "font-12",
      11: "font-11",
      10: "font-10",
    },
    weight: {
      regular: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
    },
    italic: {
      default: "",
      normal: "normal",
      italic: "italic",
    },
    decoration: {
      default: "",
      none: "no-underline",
      underline: "underline",
      overline: "overline",
      "line-through": "line-through",
    },
  },
  defaultVariants: {
    family: "jakarta",
    size: 14,
    weight: "regular",
  },
  compoundVariants: [],
});

function StyledText<T extends keyof React.JSX.IntrinsicElements>(
  props: VariantProps<typeof styles> & { as: T } & ComponentProps<T> & {
      className?: string;
    }
): ReactNode {
  const { as, className, ...attr } = props;
  const El = (as || "div") as any;
  const style =
    styles({
      className,
      size: props.size,
      family: props.family,
      weight: props.weight,
      decoration: props.decoration,
      italic: props.italic,
    })
  
  return <El className={style} {...attr} />;
}

export default StyledText;
