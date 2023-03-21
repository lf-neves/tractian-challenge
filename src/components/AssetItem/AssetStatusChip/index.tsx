import { Asset, AssetStatusEnum } from "@/lib/models";
import { Chip } from "@mui/material";

const getChipColorByStatus = (status: Asset["status"]) => {
  switch (status) {
    case AssetStatusEnum.inOperation:
      return "#00C49F";
    case AssetStatusEnum.inAlert:
      return "#FFBB28";
    case AssetStatusEnum.inDowntime:
      return "#FF8042";
    default:
      return "info";
  }
};

export const AssetStatusChip: React.FC<{ status: AssetStatusEnum }> = ({
  status,
}) => {
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
