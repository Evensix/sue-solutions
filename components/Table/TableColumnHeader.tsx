import { useTableColumnHeader } from "@react-aria/table";
import { useFocusRing } from "@react-aria/focus";
import { mergeProps } from "@react-aria/utils";
import { FC, useRef } from "react";

const TableColumnHeader: FC<{ column: any; state: any; }> = ({
  column,
  state,
}) => {
  let ref = useRef<HTMLTableCellElement | null>(null);
  let { columnHeaderProps } = useTableColumnHeader(
    { node: column },
    state,
    ref
  );
  let { isFocusVisible, focusProps } = useFocusRing();
  let arrowIcon = state.sortDescriptor?.direction === "ascending" ? "▲" : "▼";

  return (
    <th
      {...mergeProps(columnHeaderProps, focusProps)}
      colSpan={column.colspan}
      style={{
        // textAlign: column.colspan > 1 ? "center" : "left",
        // padding: "5px 10px",
        outline: isFocusVisible ? "2px solid orange" : "none",
        // cursor: "default",
      }}
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      ref={ref}
    >
      {column.rendered}
      {column.props.allowsSorting && (
        <span
          aria-hidden="true"
          style={{
            padding: "0 2px",
            visibility:
              state.sortDescriptor?.column === column.key
                ? "visible"
                : "hidden",
          }}
        >
          {arrowIcon}
        </span>
      )}
    </th>
  );
};

export default TableColumnHeader;