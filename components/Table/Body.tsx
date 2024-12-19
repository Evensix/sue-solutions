import { FC, useRef } from "react";
import { mergeProps, useFocusRing, useTableRow } from "react-aria";

export const TableRow: FC<{ item: any; state: any; children: React.ReactNode }> = ({
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
          ? "blueviolet"
          : isPressed
          ? "var(--spectrum-global-color-gray-400)"
          : item.index % 2
          ? "var(--spectrum-alias-highlight-hover)"
          : "none",
        color: isSelected ? 'white' : null,
        outline: "none",
        boxShadow: isFocusVisible ? "inset 0 0 0 2px orange" : "none",
        cursor: "default",
      }}
      {...mergeProps(rowProps, focusProps)}
      ref={ref}
    >
      {children}
    </tr>
  );
};
