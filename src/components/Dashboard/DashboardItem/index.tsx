import Grid, { GridProps } from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { ReactNode } from "react";

interface DashboardItemProps {
  height?: number;
  children: ReactNode;
}

export const DashboardItem: React.FC<DashboardItemProps & GridProps> = ({
  height,
  children,
  ...props
}) => {
  return (
    <Grid item {...props}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: height || "unset",
        }}
      >
        {children}
      </Paper>
    </Grid>
  );
};
