import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { ReducerProps } from "@/lib/store/companies";
import { WorkOrdersDetailsModal } from "../../WorkOrdersDetailsModal";

export const IncompleteWorkOrdersTable: React.FC = () => {
  const { workOrders } = useSelector((state: ReducerProps) => state);

  const incompleteWOrders = React.useMemo(() => {
    return workOrders.filter((wo) => wo.status !== "completed");
  }, [workOrders]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Priority</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {incompleteWOrders.map((wo) => (
            <TableRow
              key={wo.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {wo.title}
              </TableCell>
              <TableCell>{wo.priority}</TableCell>
              <TableCell>{wo.status}</TableCell>
              <TableCell>
                <WorkOrdersDetailsModal wOrders={wo} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
