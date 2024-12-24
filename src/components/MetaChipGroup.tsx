import { Circle } from 'lucide-react';
import {
  Tag as AriaTag,
  TagGroup as AriaTagGroup,
  TagGroupProps as AriaTagGroupProps,
  TagProps as AriaTagProps,
  TagList,
  TagListProps
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';




export interface TagGroupProps<T> extends Omit<AriaTagGroupProps, 'children'>, Pick<TagListProps<T>, 'items' | 'children' | 'renderEmptyState'> {
}

export function MetaChipGroup<T extends object>(
  {
    items,
    children,
    ...props
  }: TagGroupProps<T>
) {
  return (
    <AriaTagGroup {...props} className={twMerge('flex flex-col  ', props.className)}>
        <TagList items={items} className={`flex flex-wrap justify-center align-middle  [&>*:not(:last-child)]:after:content-['•']  [&>*:not(:last-child)]:after:px-[20px] `} >
          {children}
        </TagList>
    </AriaTagGroup>
  );
}


export function MetaChip({ children, ...props }: AriaTagProps) {
  return (
    <AriaTag
      {...props}
      className={'flex gap-4 svg-fill-nutral-600 text-neutral-600 dark:text-secondary-200'}>
         <Circle/>
        <span>
          {children}
        </span>
    </AriaTag>
  );
}

const Seporater = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="3" height="4" viewBox="0 0 3 4" fill="none">
    <path d="M1.5 3.5C1.91667 3.5 2.27083 3.35417 2.5625 3.0625C2.85417 2.77083 3 2.41667 3 2C3 1.58333 2.85417 1.22917 2.5625 0.9375C2.27083 0.645833 1.91667 0.5 1.5 0.5C1.08333 0.5 0.729167 0.645833 0.4375 0.9375C0.145833 1.22917 0 1.58333 0 2C0 2.41667 0.145833 2.77083 0.4375 3.0625C0.729167 3.35417 1.08333 3.5 1.5 3.5Z" fill="#5F5981"/>
    </svg>
  )
}