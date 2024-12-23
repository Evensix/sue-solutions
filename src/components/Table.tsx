import { ArrowUp } from 'lucide-react';
import {
  Cell as AriaCell,
  Column as AriaColumn,
  Row as AriaRow,
  Table as AriaTable,
  TableHeader as AriaTableHeader,
  Button,
  CellProps,
  Collection,
  ColumnProps,
  ColumnResizer,
  Group,
  ResizableTableContainer,
  RowProps,
  TableHeaderProps,
  TableProps,
  composeRenderProps,
  useTableOptions
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { Checkbox } from './Checkbox.tsx';
import { composeTailwindRenderProps, focusRing } from './utils.ts';

export function Table(props: TableProps) {
  return (
    <ResizableTableContainer className="max-h-[280px] w-[550px] overflow-auto scroll-pt-[2.281rem] relative rounded-8">
      <AriaTable {...props} className="border-separate border-spacing-0 " />
    </ResizableTableContainer>
  );
}

const columnStyles = tv({
  extend: focusRing,
  base: 'px-2 h-5 flex-1 flex gap-1 items-center overflow-hidden'
});

const resizerStyles = tv({
  extend: focusRing,
  base: 'w-px px-[8px] translate-x-[8px] box-content py-1 h-5 bg-clip-content bg-neutral-400 dark:bg-secondary-500 forced-colors:bg-[ButtonBorder] cursor-col-resize rounded resizing:bg-purple-600 forced-colors:resizing:bg-[Highlight] resizing:w-[2px] resizing:pl-[7px] -outline-offset-2'
});

export function Column(props: ColumnProps) {
  return (
    <AriaColumn {...props} className={composeTailwindRenderProps(props.className, '[&:hover]:z-20 [&:focus-within]:z-20 text-start text-sm font-semibold text-neutral-700 dark:text-secondary-300 cursor-default')}>
      {composeRenderProps(props.children, (children, { allowsSorting, sortDirection }) => (
        <div className="flex items-center">
          <Group
            role="presentation"
            tabIndex={-1}
            className={columnStyles}
          >
            <span className="truncate">{children}</span>
            {allowsSorting && (
              <span
                className={`w-4 h-4 flex items-center justify-center transition ${
                  sortDirection === 'descending' ? 'rotate-180' : ''
                }`}
              >
                {sortDirection && <ArrowUp aria-hidden className="w-4 h-4 text-neutral-500 dark:text-secondary-400 forced-colors:text-[ButtonText]" />}
              </span>
            )}
          </Group>
          {!props.width && <ColumnResizer className={resizerStyles} />}
        </div>
      ))}
    </AriaColumn>
  );
}

export function TableHeader<T extends object>(props: TableHeaderProps<T>) {
  let { selectionBehavior, selectionMode, allowsDragging } = useTableOptions();

  return (
    <AriaTableHeader {...props} className={composeTailwindRenderProps(props.className, 'sticky top-0 z-10 bg-neutral-900/5 dark:bg-secondary-700/60 backdrop-blur-md supports-[-moz-appearance:none]:bg-neutral-100 dark:supports-[-moz-appearance:none]:bg-secondary-700 forced-colors:bg-[Canvas] border-neutral-900/20 dark:border-b-secondary-700')}>
      {/* Add extra columns for drag and drop and selection. */}
      {allowsDragging && <Column />}
      {selectionBehavior === 'toggle' && (
        <AriaColumn width={36} minWidth={36} className="text-start text-sm font-semibold cursor-default py-20 px-8">
          {selectionMode === 'multiple' && <Checkbox slot="selection" />}
        </AriaColumn>
      )}
      <Collection items={props.columns}>
        {props.children}
      </Collection>
    </AriaTableHeader>
  );
}

const rowStyles = tv({
  extend: focusRing,
  base: [
    'group/row relative cursor-default select-none -outline-offset-2 text-neutral-900 text-14 ',
    'disabled:text-neutral-300',
    'dark:text-secondary-200 dark:disabled:text-secondary-600',
    'hover:bg-neutral-100 dark:hover:bg-secondary-700/60',
    'selected:bg-purple-100 selected:hover:bg-purple-200 dark:selected:bg-purple-700/30 dark:selected:hover:bg-purple-700/40']
});

export function Row<T extends object>(
  { id, columns, children, ...otherProps }: RowProps<T>
) {
  let { selectionBehavior, allowsDragging } = useTableOptions();

  return (
    <AriaRow id={id} {...otherProps} className={rowStyles}>
      {allowsDragging && (
        <Cell>
          <Button slot="drag">≡</Button>
        </Cell>
      )}
      {selectionBehavior === 'toggle' && (
        <Cell>
          <Checkbox slot="selection" />
        </Cell>
      )}
      <Collection items={columns}>
        {children}
      </Collection>
    </AriaRow>
  );
}

const cellStyles = tv({
  extend: focusRing,
  base: [
    ' dark:border-b-secondary-700 group-last/row:border-b-0 p-8 truncate -outline-offset-2',
    '[--selected-border:theme(colors.blue.200)] dark:[--selected-border:theme(colors.blue.900)] group-selected/row:border-[--selected-border]',
    '[:has(+[data-selected])_&]:border-[--selected-border] ']
});

export function Cell(props: CellProps) {
  return (
    <AriaCell {...props} className={cellStyles} />
  );
}
