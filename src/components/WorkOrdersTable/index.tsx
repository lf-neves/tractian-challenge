import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { useGetWorkOrders } from "@/hooks/useGetWorkOrders";

export const WorkOrdersTable: React.FC = () => {
  const wOrders = useGetWorkOrders();

  return (
    <Box sx={{ padding: "0 2rem ", marginBottom: "2rem" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {wOrders.map((wo) => (
              <TableRow
                key={wo.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {wo.title}
                </TableCell>
                <TableCell>{wo.priority}</TableCell>
                <TableCell>{wo.status}</TableCell>
                <TableCell>Details</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
