import { useFocusRing } from "@react-aria/focus";
import { useTableCell } from "@react-aria/table";
import { mergeProps } from "@react-aria/utils";
import { FC, useRef } from "react";

const TableCell: FC<{ cell: any; state: any }> = ({ cell, state }) => {
  let ref = useRef<HTMLTableCellElement | null>(null);
  let { gridCellProps } = useTableCell({ node: cell }, state, ref);
  let { isFocusVisible, focusProps } = useFocusRing();

  return (
    <td
      {...mergeProps(gridCellProps, focusProps)}
      style={{
        padding: "5px 10px",
        outline: isFocusVisible ? "2px solid orange" : "none",
        cursor: "default",
      }}
      className="px-6 py-4 whitespace-nowrap"
      ref={ref}
    >
      {cell.rendered}
    </td>
  );
};

export default TableCell;