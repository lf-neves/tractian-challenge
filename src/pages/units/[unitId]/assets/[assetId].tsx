import { Flex } from "@/components/common/Flex";
import { SelectMenu } from "@/components/common/SelectMenu";
import Title from "@/components/Dashboard/DashboardItem/Title";
import { WorkOrdersTable } from "@/components/tables/WorkOrdersTable";
import { useGetAssets } from "@/lib/hooks/useGetAssets";
import { useSetCompanies } from "@/lib/hooks/useSetCompanies";
import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import EngineeringIcon from "@mui/icons-material/Engineering";
import { HealthScoreProgress } from "@/components/HealthScoreProgress";
import SensorsIcon from "@mui/icons-material/Sensors";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { AssetStatusChip } from "@/components/AssetItem/AssetStatusChip";
import { HealthHistoryChart } from "@/components/charts/HealthHistoryChart";
import { DashboardItem } from "@/components/Dashboard/DashboardItem";
import { EditAssetForm } from "@/components/EditAssetForm";
import { Modal } from "@/components/common/Modal";

const Asset = () => {
  useSetCompanies();

  const router = useRouter();
  const { assetId, unitId } = router.query;
  const assets = useGetAssets(parseInt(unitId as string));

  const [selectedAssetId, setSelectedAssetId] = useState(
    parseInt(assetId as string) || 1
  );

  const selectedAsset = assets.find((asset) => asset.id === selectedAssetId);

  const formattedSelectData = assets.map((asset) => ({
    label: asset.name,
    value: asset.id,
  }));

  return (
    <Container sx={{ py: 10 }}>
      {selectedAsset && (
        <Grid container spacing={3}>
          <Grid item xs={12} md={10}>
            <Flex>
              <Button
                sx={{ mr: 5 }}
                variant="outlined"
                startIcon={<ArrowBackIcon />}
                onClick={() => router.back()}
              >
                Back
              </Button>
              <SelectMenu
                data={formattedSelectData}
                onChange={(value) => setSelectedAssetId(value)}
                selectedValue={selectedAssetId}
              />
              <Box sx={{ ml: 5 }}>
                <Modal buttonText="Edit" buttonVariant="contained">
                  <EditAssetForm asset={selectedAsset} />
                </Modal>
              </Box>
            </Flex>
          </Grid>
          <Grid item xs={6} md={3} lg={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Image
                src={selectedAsset.image}
                width={220}
                height={220}
                alt="asset-image"
                style={{ borderRadius: 10 }}
              />
            </Box>
          </Grid>
          <DashboardItem xs={12} md={9}>
            <Title>Techinical Details</Title>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                pr: 30,
              }}
            >
              <List>
                <ListItem>
                  <ListItemIcon>
                    <EngineeringIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Model"
                    secondary={selectedAsset.model}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SensorsIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Sensors"
                    secondary={
                      <ul style={{ paddingLeft: 20 }}>
                        {selectedAsset.sensors.map((s, index) => (
                          <li key={index}>{s}</li>
                        ))}
                      </ul>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DisplaySettingsIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Specifications"
                    secondary={
                      <ul style={{ paddingLeft: 20 }}>
                        {Object.entries(selectedAsset.specifications).map(
                          (spec) => (
                            <li key={spec[0]}>{`${spec[0]}: ${spec[1]}`}</li>
                          )
                        )}
                      </ul>
                    }
                  />
                </ListItem>
              </List>
              <Box sx={{ mt: 5 }}>
                <HealthScoreProgress
                  size={100}
                  color={
                    selectedAsset.healthscore > 80
                      ? "success"
                      : selectedAsset.healthscore > 50
                      ? "warning"
                      : "error"
                  }
                  value={selectedAsset.healthscore}
                />
                <Typography>Health Score</Typography>
                <Box sx={{ mt: 2 }}>
                  <AssetStatusChip status={selectedAsset.status} />
                </Box>
              </Box>
            </Box>
          </DashboardItem>
          <DashboardItem height={300} xs={12} md={8}>
            <Title>Health History</Title>
            <HealthHistoryChart healthHistory={selectedAsset.healthHistory} />
          </DashboardItem>
          <DashboardItem height={300} xs={12} md={4}>
            <Title>Asset Metrics</Title>
            <List>
              <ListItem>
                <ListItemIcon>
                  <EngineeringIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Last Up Time"
                  secondary={selectedAsset.metrics.lastUptimeAt.split("T")[0]}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <SensorsIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Total Collects Uptime"
                  secondary={selectedAsset.metrics.totalCollectsUptime}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EngineeringIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Total Uptime"
                  secondary={
                    selectedAsset.metrics.totalUptime.toFixed(0) + " hours"
                  }
                />
              </ListItem>
            </List>
          </DashboardItem>
          <DashboardItem xs={12}>
            <Title>WorkOrders</Title>
            <WorkOrdersTable assetId={selectedAsset.id} />
          </DashboardItem>
        </Grid>
      )}
    </Container>
  );
};

export default Asset;
