import { useTableRow } from "@react-aria/table";
import { useFocusRing } from "@react-aria/focus";
import { mergeProps } from "@react-aria/utils";
import { FC, useRef } from "react";

const TableRow: FC<{ item: any; state: any; children: React.ReactNode }> = ({
  item,
  children,
  state,
}) => {
  let ref = useRef<HTMLTableRowElement | null>(null);
  let isSelected = state.selectionManager.isSelected(item.key);
  let { rowProps, isPressed } = useTableRow(
    {
      node: item,
    },
    state,
    ref
  );
  let { isFocusVisible, focusProps } = useFocusRing();

  return (
    <tr
      style={{
        background: isSelected
          ? "bg-gray-50"
          : isPressed
          ? "var(--spectrum-global-color-gray-400)"
          : item.index % 2
          ? "var(--spectrum-alias-highlight-hover)"
          : "bg-white",
        color: isSelected ? "white" : null,
        outline: isFocusVisible ? "2px solid orange" : "none",
      }}
      {...mergeProps(rowProps, focusProps)}
      ref={ref}
    >
      {children}
    </tr>
  );
};

export default TableRow;