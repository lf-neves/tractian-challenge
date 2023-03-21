import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useGetCompanies } from "@/lib/hooks/useGetCompanies";
import { Modal } from "../../common/Modal";

export const CompaniesTable: React.FC = () => {
  const companies = useGetCompanies();

  const [openModal, setOpenModal] = React.useState(false);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {companies.map((company) => (
            <TableRow
              key={company.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {company.id}
              </TableCell>
              <TableCell>{company.name}</TableCell>
              <TableCell>
                <Modal
                  buttonText="Edit"
                  open={openModal}
                  setOpen={setOpenModal}
                >
                  <>Not ready</>
                </Modal>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
