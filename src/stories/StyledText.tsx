import {tv, type VariantProps} from "tailwind-variants";
import React, {ComponentProps, ReactNode} from "react";
export type textSizeArray = 56 | 48 | 40 | 32 | 24 | 20 | 18 | 16 | 14 | 12 | 11 | 10;
export type textWeightArray = 'regular' | 'medium' | 'semibold';
const styles = tv({
    base: '',
    variants: {
        family: {
            jakarta: "font-plus-jakarta-sans",
        },
        size: {
            56: "text-56 tracking-tighter",
            48: "text-48 tracking-tighter",
            40: "text-40 tracking-tighter",
            32: "text-32 tracking-tighter",
            24: "text-24 tracking-tighter",
            20: "text-20",
            18: "text-18",
            16: "text-16",
            14: "text-14",
            12: "text-12",
            11: "text-11",
            10: "text-10",
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