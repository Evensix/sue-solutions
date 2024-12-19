import { useState } from "react";
import Table from "./Table";
import {
  Cell,
  Column,
  Row,
  TableBody,
  TableHeader,
} from "@react-stately/table";

export default {
  title: "Base/TableSelectDemo",
};

export const Colours = function () {
  const columns = [
    { name: "Field", uid: "field" },
    { name: "Value", uid: "value" },

  ];

  const rows = [
    { id: 1, field: "First Name", value: "Chloe" },
    { id: 2, field: "Middle Name", value: "" },
    { id: 3, field: "Last Name", value: "Alster" },
    { id: 4, field: "Previous Name", value: "" },
    { id: 5, field: "Other Names", value: "" },
  ];
  const [selectedKeys, setSelectedKeys] = useState(new Set([2]));

  return (
    <div
      className={`font-sans`}
      style={{ display: "flex", flexWrap: "wrap", overflow: "scroll" }}
    >
      <Table
        aria-label="Table with selection"
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        // onSelectionChange={setSelectedKeys}
      >
        <TableHeader columns={columns}>
          {(column) => <Column key={column.uid}>{column.name}</Column>}
        </TableHeader>
        <TableBody items={rows}>
          {(item: any) => (
            <Row>{(columnKey: any) => <Cell>{item[columnKey]}</Cell>}</Row>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
Colours.parameters = {
  status: {
    type: "done",
  },
};
Colours.storyName = "TableSelect";
