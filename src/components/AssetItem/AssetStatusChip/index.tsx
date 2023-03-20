import { Asset } from "@/lib/models";
import { Chip } from "@mui/material";

const getChipColorByStatus = (status: Asset["status"]) => {
  switch (status) {
    case "inOperation":
      return "#00C49F";
    case "inAlert":
      return "#FFBB28";
    case "inDowntime":
      return "#FF8042";
    default:
      return "info";
  }
};

export const AssetStatusChip: React.FC<{ status: string }> = ({ status }) => {
  return (
    <Chip
      size="small"
      sx={{
        backgroundColor: getChipColorByStatus(status),
        p: 1,
        py: 2,
        color: "white",
      }}
      label={status}
    />
  );
};
