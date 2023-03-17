import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { UnitPanel } from "../UnitPanel";
import { UsersTable } from "../UsersTable";
import { PanelContent } from "./PanelContent";

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export const VerticalTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 224,
        width: "100%",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          marginTop: 10,
        }}
      >
        <Tab label="Work Orders" {...a11yProps(0)} />
        <Tab label="Users" {...a11yProps(1)} />
        <Tab label="Units" {...a11yProps(2)} />
      </Tabs>
      <Box sx={{ width: "100%" }}>
        <PanelContent value={value} index={0}>
          <UsersTable />
        </PanelContent>
        <PanelContent value={value} index={1}>
          <UsersTable />
        </PanelContent>
        <PanelContent value={value} index={2}>
          <UnitPanel />
        </PanelContent>
      </Box>
    </Box>
  );
};
