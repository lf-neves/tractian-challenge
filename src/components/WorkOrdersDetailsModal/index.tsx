import {
  Checkbox,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { Modal } from "../common/Modal";
import Title from "../Dashboard/Title";
import { UsersTable } from "../UsersTable";
import DetailsIcon from "@mui/icons-material/Details";
import BuildIcon from "@mui/icons-material/Build";
import LowPriorityIcon from "@mui/icons-material/LowPriority";
import { WorkOrder } from "@/lib/models";

export const WorkOrdersDetailsModal: React.FC<{ wOrders: WorkOrder }> = ({
  wOrders,
}) => {
  return (
    <Modal buttonText="Details">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Work Order Details - {wOrders.title}
      </Typography>
      <Grid container spacing={10}>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 300,
            }}
          >
            <Title>Owners</Title>
            <UsersTable summarized />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 300,
            }}
          >
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
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 300,
            }}
          >
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
          </Paper>
        </Grid>
      </Grid>
    </Modal>
  );
};
