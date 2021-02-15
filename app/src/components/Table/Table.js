import React from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  IconButton
} from "@material-ui/core";

import { Button } from "../../components/Wrappers";
import {
  AddShoppingCart as AddShoppingCartIcon
} from '@material-ui/icons'

const states = {
  sent: "success",
  pending: "warning",
  declined: "secondary",
};

export default function TableComponent({ data, cells }) {
  let keys;
  if (!cells) {
    const keys = Object.keys(data[0]).map(i => i.toUpperCase());
    keys.shift(); // delete "id" key
  } else {
    keys = cells;
  }


  return (
    <Table className="mb-0">
      <TableHead>
        <TableRow>
          {keys.map(key => (
            <TableCell key={key}>{key}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item[cells[0]]}>
            <TableCell className="pl-3 fw-normal">
              {item[cells[1]]}
            </TableCell>
            <TableCell>{item[cells[2]]} CUP</TableCell>
            <TableCell>{item[cells[3]]}</TableCell>
            <TableCell>
              <IconButton size="small"
                className="px-2"
                variant="contained">
                <AddShoppingCartIcon/>
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
