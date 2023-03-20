import { AssetItem } from "@/components/AssetItem";
import { AssetsChart } from "@/components/charts/AssetsChart";
import { SelectMenu } from "@/components/common/SelectMenu";
import Dashboard from "@/components/Dashboard";
import Title from "@/components/Dashboard/Title";
import { UsersTable } from "@/components/UsersTable";
import { useGetAssets } from "@/lib/hooks/useGetAssets";
import { useGetUnits } from "@/lib/hooks/useGetUnits";
import { useSetCompanies } from "@/lib/hooks/useSetCompanies";
import { Grid, Paper } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

const Unit = () => {
  useSetCompanies();

  const router = useRouter();
  const { unitId } = router.query;
  const units = useGetUnits();

  const [selectedUnit, setSelectedUnit] = useState(
    parseInt(unitId as string) || 1
  );

  const formattedSelectData = units.map((unit) => ({
    label: unit.name,
    value: unit.id,
  }));

  const assets = useGetAssets(selectedUnit);

  return (
    <Dashboard>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <SelectMenu
            data={formattedSelectData}
            onChange={(value) => setSelectedUnit(value)}
            selectedValue={selectedUnit}
          />
        </Grid>
        {/* Chart */}
        <Grid item xs={12} md={6} lg={6}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 300,
            }}
          >
            <Title>Unit Users</Title>
            <UsersTable summarized />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 300,
            }}
          >
            <Title>Assets Statuses</Title>
            <AssetsChart assets={assets} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Title>Assets</Title>
            <Grid container spacing={2}>
              {assets.map((asset) => (
                <AssetItem key={asset.id} asset={asset} />
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Dashboard>
  );
};

export default Unit;
