import { useTable } from "@react-aria/table";
import { useTableState } from "@react-stately/table";
import React, { useRef } from "react";
import TableCell from "./TableCell";
import TableCheckboxCell from "./TableCheckboxCell";
import TableColumnHeader from "./TableColumnHeader";
import TableHeaderRow from "./TableHeaderRow";
import TableRow from "./TableRow";
import TableRowGroup from "./TableRowGroup";
import TableSelectAllCell from "./TableSelectAllCell";

export default function Table(props: any) {
  let { selectionMode, selectionBehavior } = props;
  let state = useTableState({
    ...props,
    showSelectionCheckboxes:
      selectionMode === "multiple" && selectionBehavior !== "replace",
  });

  let ref = useRef<HTMLTableElement | null>(null);
  let { collection } = state;
  let { gridProps } = useTable(props, state, ref);

  return (
    <div className="m-12 flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className=" overflow-hidden border-b border-gray-200">
            <table
              {...gridProps}
              ref={ref}
              className="min-w-full"
              style={{ borderCollapse: "collapse" }}
            >
              <TableRowGroup
                type="thead"
                style={{
                  borderBottom:
                    "2px solid var(--spectrum-global-color-gray-800)",
                }}
                className="bg-gray-50"
              >
                {collection.headerRows.map((headerRow) => (
                  <TableHeaderRow
                    key={headerRow.key}
                    item={headerRow}
                    state={state}
                  >
                    {[...headerRow.childNodes].map((column) =>
                      column.props.isSelectionCell ? (
                        <TableSelectAllCell
                          key={column.key}
                          column={column}
                          state={state}
                        />
                      ) : (
                        <TableColumnHeader
                          key={column.key}
                          column={column}
                          state={state}
                          // className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        />
                      )
                    )}
                  </TableHeaderRow>
                ))}
              </TableRowGroup>
              <TableRowGroup
                type="tbody"
                className="bg-white "
              >
                {[...collection.body.childNodes].map((row) => (
                  <TableRow key={row.key} item={row} state={state}>
                    {[...row.childNodes].map((cell) =>
                      cell.props.isSelectionCell ? (
                        <TableCheckboxCell
                          key={cell.key}
                          cell={cell}
                          state={state}
                        />
                      ) : (
                        <TableCell key={cell.key} cell={cell} state={state} />
                      )
                    )}
                  </TableRow>
                ))}
              </TableRowGroup>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
