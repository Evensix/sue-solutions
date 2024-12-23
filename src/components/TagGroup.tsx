import { XIcon } from 'lucide-react';
import { createContext, useContext } from 'react';
import {
  Tag as AriaTag,
  TagGroup as AriaTagGroup,
  TagGroupProps as AriaTagGroupProps,
  TagProps as AriaTagProps,
  Button,
  TagList,
  TagListProps,
  Text,
  composeRenderProps
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { Description, Label } from './Field.tsx';
import { focusRing } from './utils.ts';

const colors = {
  gray: 'bg-neutral-100 text-neutral-600 border-neutral-200 hover:border-neutral-300 dark:bg-secondary-700 dark:text-secondary-300 dark:border-secondary-600 dark:hover:border-secondary-500',
  green: 'bg-green-100 text-green-700 border-green-200 hover:border-green-300 dark:bg-green-300/20 dark:text-green-400 dark:border-green-300/10 dark:hover:border-green-300/20',
  yellow: 'bg-warning-100 text-warning-700 border-warning-200 hover:border-warning-300 dark:bg-warning-300/20 dark:text-warning-400 dark:border-warning-300/10 dark:hover:border-warning-300/20',
  blue: 'bg-purple-100 text-purple-700 border-purple-200 hover:border-purple-300 dark:bg-purple-400/20 dark:text-purple-300 dark:border-purple-400/10 dark:hover:border-purple-400/20'
};

type Color = keyof typeof colors;
const ColorContext = createContext<Color>('gray');

const tagStyles = tv({
  extend: focusRing,
  base: 'transition cursor-default text-xs rounded-full border px-3 py-0.5 flex items-center max-w-fit gap-1',
  variants: {
    color: {
      gray: '',
      green: '',
      yellow: '',
      blue: ''
    },
    allowsRemoving: {
      true: 'pr-1'
    },
    isSelected: {
      true: 'bg-purple-600 text-white border-transparent forced-colors:bg-[Highlight] forced-colors:text-[HighlightText] forced-color-adjust-none'
    },
    isDisabled: {
      true: 'bg-neutral-100 dark:bg-transparent dark:border-white/20 text-neutral-300 dark:text-secondary-600 forced-colors:text-[GrayText]'
    }
  },
  compoundVariants: (Object.keys(colors) as Color[]).map((color) => ({
    isSelected: false,
    isDisabled: false,
    color,
    class: colors[color]
  }))
});

export interface TagGroupProps<T> extends Omit<AriaTagGroupProps, 'children'>, Pick<TagListProps<T>, 'items' | 'children' | 'renderEmptyState'> {
  color?: Color;
  label?: string;
  description?: string;
  errorMessage?: string;
}

export interface TagProps extends AriaTagProps {
  color?: Color
}

export function TagGroup<T extends object>(
  {
    label,
    description,
    errorMessage,
    items,
    children,
    renderEmptyState,
    ...props
  }: TagGroupProps<T>
) {
  return (
    <AriaTagGroup {...props} className={twMerge('flex flex-col gap-1', props.className)}>
      <Label>{label}</Label>
      <ColorContext.Provider value={props.color || 'gray'}>
        <TagList items={items} renderEmptyState={renderEmptyState} className="flex flex-wrap gap-1">
          {children}
        </TagList>
      </ColorContext.Provider>
      {description && <Description>{description}</Description>}
      {errorMessage && <Text slot="errorMessage" className="text-sm text-error-600">{errorMessage}</Text>}
    </AriaTagGroup>
  );
}

const removeButtonStyles = tv({
  extend: focusRing,
  base: 'cursor-default rounded-full transition-[background-color] p-0.5 flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 pressed:bg-black/20 dark:pressed:bg-white/20'
});

export function Tag({ children, color, ...props }: TagProps) {
  let textValue = typeof children === 'string' ? children : undefined;
  let groupColor = useContext(ColorContext);
  return (
    <AriaTag
      textValue={textValue}
      {...props}
      className={composeRenderProps(
        props.className,
        (className, renderProps) => tagStyles({...renderProps, className, color: color || groupColor})
      )}>
      {({ allowsRemoving }) => (
        <>
          {children}
          {allowsRemoving &&
            <Button slot="remove" className={removeButtonStyles}>
              <XIcon aria-hidden className="w-3 h-3" />
            </Button>
          }
        </>
      )}
    </AriaTag>
  );
}
