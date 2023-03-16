import * as React from "react";
import { useGetUnits } from "@/lib/hooks/useGetUnits";
import { UnitItem } from "./UnitItem";
import { Box } from "@mui/material";
import { Unit } from "@/lib/models";

export const UnitPanel: React.FC = () => {
  const units = useGetUnits(1);

  return (
    <Box>
      {units.map((unit: Unit) => (
        <UnitItem key={unit.id} data={unit} />
      ))}
    </Box>
  );
};
