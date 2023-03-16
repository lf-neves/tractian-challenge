import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { WorkOrdersTable } from "@/components/WorkOrdersTable";
import { Unit } from "@/lib/models";

interface UnitItemProps {
  data: Unit;
}

export const UnitItem: React.FC<UnitItemProps> = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 900, margin: "2rem 0" }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={data.name}
        subheader={`Company: ${data.companyId}`}
      />

      <CardContent>
        <WorkOrdersTable unitId={data.id} />
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
  );
};
