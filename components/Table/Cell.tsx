import { FC, useRef } from 'react';
import {mergeProps, useFocusRing, useTableCell} from 'react-aria';

export const TableCell:FC< { cell: any; state: any }> = ({ cell, state }) => {
  let ref = useRef<HTMLTableCellElement | null>(null);
  let { gridCellProps } = useTableCell(
    { node: cell },
    state,
    ref
  );
  let { isFocusVisible, focusProps } = useFocusRing();

  return (
    <td
      {...mergeProps(gridCellProps, focusProps)}
      style={{
        padding: '5px 10px',
        outline: 'none',
        boxShadow: isFocusVisible
          ? 'inset 0 0 0 2px orange'
          : 'none'
      }}
      ref={ref}
    >
      {cell.rendered}
    </td>
  );
}