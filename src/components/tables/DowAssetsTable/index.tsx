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
import { Button } from "@mui/material";
import { useRouter } from "next/router";

export const DownAssetsTable: React.FC = () => {
  const { assets } = useSelector((state: ReducerProps) => state);
  const router = useRouter();

  const downAssets = React.useMemo(() => {
    return assets.filter((asset) => asset.status === "inDowntime");
  }, [assets]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Health Score</TableCell>
            <TableCell>Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {downAssets.map((asset) => (
            <TableRow
              key={asset.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {asset.name}
              </TableCell>
              <TableCell>{asset.status}</TableCell>
              <TableCell>{asset.healthscore}</TableCell>
              <TableCell>
                <Button
                  size="small"
                  onClick={() =>
                    router.push(`/units/${asset.unitId}/assets/${asset.id}`)
                  }
                >
                  Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
