import { useCheckbox } from "@react-aria/checkbox";
import { useTableCell, useTableSelectionCheckbox } from "@react-aria/table";
import { useToggleState } from "@react-stately/toggle";
import { FC, useRef } from "react";

const TableCheckboxCell: FC<{ cell: any; state: any }> = ({ cell, state }) => {
  let ref = useRef<HTMLTableCellElement | null>(null);
  let { gridCellProps } = useTableCell({ node: cell }, state, ref);
  let { checkboxProps } = useTableSelectionCheckbox(
    { key: cell.parentKey },
    state
  );

  let inputRef = useRef(null);
  let { inputProps } = useCheckbox(
    checkboxProps,
    useToggleState(checkboxProps),
    inputRef
  );

  return (
    <td {...gridCellProps} className="px-6 py-4 whitespace-nowrap" ref={ref}>
      <input {...inputProps} />
    </td>
  );
};

export default TableCheckboxCell;