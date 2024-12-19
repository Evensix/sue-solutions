import { useTableHeaderRow } from "@react-aria/table";
import { FC, useRef } from "react";

const TableHeaderRow: FC<{
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

export default TableHeaderRow;