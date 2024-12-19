import { FC, useRef } from "react";
import { useTableHeaderRow } from "react-aria";

export const TableHeaderRow: FC<{
  item: any;
  state: any;
  children: React.ReactNode;
}> = ({ item, state, children }) => {
  let ref = useRef<HTMLTableRowElement | null>(null);
  let { rowProps } = useTableHeaderRow({ node: item }, state, ref);

  return (
    <tr {...rowProps} ref={ref}>
      {children}
    </tr>
  );
};
