import { LayoutContainer } from "@/components/LayoutContainer";
import { UnitPanel } from "@/components/UnitPanel";
import { Box } from "@mui/material";

const Units = () => {
  return (
    <LayoutContainer>
      <Box sx={{ width: "100%" }}>
        <UnitPanel />
      </Box>
    </LayoutContainer>
  );
};

export default Units;
