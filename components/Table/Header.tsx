import React, { FC } from "react";
import { useTableRowGroup } from "react-aria";

export const RowGroup: FC<{
  type: React.ElementType;
  children: React.ReactNode;
}> = ({ type: Element, children }) => {
  let { rowGroupProps } = useTableRowGroup();
  return (
    <Element
      {...rowGroupProps}
      style={
        Element === "thead"
          ? {
              borderBottom: "2px solid var(--spectrum-global-color-gray-800)",
            }
          : null
      }
    >
      {children}
    </Element>
  );
};
