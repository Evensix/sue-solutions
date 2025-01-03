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
        <TagList items={items} className={`flex flex-wrap justify-center align-middle  [&>*:not(:last-child)]:after:content-['•']  [&>*:not(:last-child)]:after:px-[6px] `} >
          {children}
        </TagList>
    </AriaTagGroup>
  );
}


export function MetaChip({ children, ...props }: AriaTagProps) {
  return (
    <AriaTag
      {...props}
      style={{alignItems: 'center', justifyContent: 'center'}}
      className={'flex svg-fill-nutral-600 text-neutral-600 dark:text-secondary-200 text-12 justify-center align-middle gap-2'}>
         
          {children}
    </AriaTag>
  );
}

