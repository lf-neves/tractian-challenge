import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useGetUsers } from "@/lib/hooks/useGetUsers";

interface UsersTableProps {
  summarized?: boolean;
  filterByIds?: Array<number>;
}

export const UsersTable: React.FC<UsersTableProps> = ({
  summarized = false,
  filterByIds,
}) => {
  const users = useGetUsers();

  const filteredUsers = React.useMemo(() => {
    return filterByIds
      ? users.filter((user) => filterByIds.includes(user.id))
      : users;
  }, [filterByIds, users]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            {!summarized && <TableCell>Unit</TableCell>}
            {!summarized && <TableCell>Details</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredUsers.map((user) => (
            <TableRow
              key={user.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
              <TableCell>{user.email}</TableCell>
              {!summarized && <TableCell>{user.unitId}</TableCell>}
              {!summarized && <TableCell>Details</TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
