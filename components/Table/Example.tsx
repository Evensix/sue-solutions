import { FC } from "react";
import { Cell, Column, Row, Table, TableBody, TableHeader } from "./Util";

export const ExampleTable = (props:any) => {
    let columns = [
      { name: 'Name', key: 'name' },
      { name: 'Type', key: 'type' },
      { name: 'Date Modified', key: 'date' }
    ];
  
    let rows = [
      {
        id: 1,
        name: 'Games',
        date: '6/7/2020',
        type: 'File folder'
      },
      {
        id: 2,
        name: 'Program Files',
        date: '4/7/2021',
        type: 'File folder'
      },
      {
        id: 3,
        name: 'bootmgr',
        date: '11/20/2010',
        type: 'System file'
      },
      {
        id: 4,
        name: 'log.txt',
        date: '1/18/2016',
        type: 'Text Document'
      }
    ];
  
    return (
      <Table
        aria-label="Example dynamic collection table"
        {...props}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <Column isRowHeader>
              {column.name}
            </Column>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item:any) => (
            <Row>
              {(columnKey:any) => <Cell>{item[columnKey]}</Cell>}
            </Row>
          )}
        </TableBody>
      </Table>
    );
  }