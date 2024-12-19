import { useTableRowGroup } from "@react-aria/table";
import { mergeProps } from "@react-aria/utils";
import { FC } from "react";

const TableRowGroup: FC<{
  type: React.ElementType;
  style?: React.CSSProperties;
  children: React.ReactNode;
  [key: string]: any;
}> = ({ type: Element, style, children, ...props }) => {
  let { rowGroupProps } = useTableRowGroup();
  return (
    <Element {...mergeProps(rowGroupProps, props)} style={style}>
      {children}
    </Element>
  );
};

export default TableRowGroup;