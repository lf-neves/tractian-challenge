import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { Box } from "@mui/material";
import React from "react";
import PeopleIcon from "@mui/icons-material/People";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import StoreIcon from "@mui/icons-material/Store";
import { useRouter } from "next/router";

const drawerWidth = 240;

export default function SidebarMenu() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const listItems = [
    {
      label: "Users",
      icon: <PeopleIcon />,
      route: "/",
    },
    {
      label: "Units",
      icon: <CorporateFareIcon />,
      route: "/units",
    },
    {
      label: "Companies",
      icon: <StoreIcon />,
      route: "/companies",
    },
  ];

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List sx={{ paddingTop: "4rem" }}>
        {listItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => router.push(item.route)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
