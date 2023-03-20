import {
  Checkbox,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Modal } from "../common/Modal";
import Title from "../Dashboard/DashboardItem/Title";
import { UsersTable } from "../UsersTable";
import DetailsIcon from "@mui/icons-material/Details";
import BuildIcon from "@mui/icons-material/Build";
import LowPriorityIcon from "@mui/icons-material/LowPriority";
import { WorkOrder } from "@/lib/models";
import { DashboardItem } from "../Dashboard/DashboardItem";

export const WorkOrdersDetailsModal: React.FC<{ wOrders: WorkOrder }> = ({
  wOrders,
}) => {
  return (
    <Modal buttonText="Details">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Work Order Details - {wOrders.title}
      </Typography>
      <Grid container spacing={10}>
        <DashboardItem height={300} xs={12} md={4}>
          <Title>Owners</Title>
          <UsersTable summarized />
        </DashboardItem>
        <DashboardItem height={300} xs={12} md={4}>
          <Title>Details</Title>
          <List>
            <ListItem>
              <ListItemIcon>
                <LowPriorityIcon />
              </ListItemIcon>
              <ListItemText primary="Priority" secondary={wOrders.priority} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DetailsIcon />
              </ListItemIcon>
              <ListItemText
                primary="Description"
                secondary={wOrders.description}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <BuildIcon />
              </ListItemIcon>
              <ListItemText primary="Status" secondary={wOrders.status} />
            </ListItem>
          </List>
        </DashboardItem>
        <DashboardItem height={300} xs={12} md={4}>
          <Title>Checklist</Title>
          <List>
            {wOrders.checklist.map((item, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={item.completed}
                    tabIndex={-1}
                    disableRipple
                  />
                </ListItemIcon>
                <ListItemText primary={item.task} />
              </ListItem>
            ))}
          </List>
        </DashboardItem>
      </Grid>
    </Modal>
  );
};
