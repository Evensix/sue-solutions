import {tv, type VariantProps} from "tailwind-variants";
import React, {ComponentProps, ReactNode} from "react";
const styles = tv({
    base: '',
    variants: {
        family: {
            jakarta: "font-plus-jakarta-sans",
        },
        size: {
            56: "font-56 tracking-tighter",
            48: "font-48 tracking-tighter",
            40: "font-40 tracking-tighter",
            32: "font-32 tracking-tighter",
            24: "font-24 tracking-tighter",
            20: "font-20",
            18: "font-18",
            16: "font-16",
            14: "font-14",
            12: "font-12",
            10: "font-10",
        },
        weight: {
            regular: "font-normal",
            medium: "font-medium",
            semibold: "font-semibold",
        },
        style: {
            default: "",
            normal: "normal",
            italic: "italic",
        },
        decoration: {
            default: "",
            none: "no-underline",
            underline: "underline",
            overline: "overline",
            'line-through': "line-through",
        },
    },
    defaultVariants: {
        family: 'jakarta',
        size: 14,
        weight: 'regular',
    },
    compoundVariants: []
});


export function StyledText<T extends keyof React.JSX.IntrinsicElements = 'div'>(props: VariantProps<typeof styles> & {as: T} & ComponentProps<T>): ReactNode {
    const {as, className, ...attr} = props
    const El = (as || 'div') as 'div'
    const style = styles({
        className,
        size: props.size,
        family: props.family,
        weight: props.weight,
        style: props.style,
    });
    return <El className={style} {...attr} />
}