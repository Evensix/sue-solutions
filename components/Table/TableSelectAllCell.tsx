import { useCheckbox } from "@react-aria/checkbox";
import {
  useTableSelectAllCheckbox,
  useTableColumnHeader,
} from "@react-aria/table";
import { useToggleState } from "@react-stately/toggle";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { FC, useRef } from "react";

const TableSelectAllCell: FC<{ column: any; state: any }> = ({
  column,
  state,
}) => {
  let ref = useRef<HTMLTableCellElement | null>(null);
  let isSingleSelectionMode = state.selectionManager.selectionMode === "single";
  let { columnHeaderProps } = useTableColumnHeader(
    { node: column },
    state,
    ref
  );

  let { checkboxProps } = useTableSelectAllCheckbox(state);
  let inputRef = useRef(null);
  let { inputProps } = useCheckbox(
    checkboxProps,
    useToggleState(checkboxProps),
    inputRef
  );

  return (
    <th {...columnHeaderProps} ref={ref}>
      {state.selectionManager.selectionMode === "single" ? (
        <VisuallyHidden>{inputProps["aria-label"]}</VisuallyHidden>
      ) : (
        <input {...inputProps} ref={inputRef} />
      )}
    </th>
  );
};

export default TableSelectAllCell;