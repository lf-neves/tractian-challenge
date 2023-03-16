import * as React from "react";
import { useGetUnits } from "@/hooks/useGetUnits";
import { UnitItem } from "./UnitItem";
import { Box } from "@mui/material";

export const UnitPanel: React.FC = () => {
  const units = useGetUnits();

  return (
    <Box>
      {units.map((unit, index) => (
        <UnitItem key={index} data={unit} />
      ))}
    </Box>
  );
};
