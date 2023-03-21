import { AssetItem } from "@/components/AssetItem";
import { AssetsChart } from "@/components/charts/AssetsChart";
import { SelectMenu } from "@/components/common/SelectMenu";
import Dashboard from "@/components/Dashboard";
import { DashboardItem } from "@/components/Dashboard/DashboardItem";
import Title from "@/components/Dashboard/DashboardItem/Title";
import { UsersTable } from "@/components/tables/UsersTable";
import { useGetAssets } from "@/lib/hooks/useGetAssets";
import { useGetUnits } from "@/lib/hooks/useGetUnits";
import { useGetUsers } from "@/lib/hooks/useGetUsers";
import { useSetCompanies } from "@/lib/hooks/useSetCompanies";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";

const Unit = () => {
  useSetCompanies();

  const router = useRouter();
  const { unitId } = router.query;
  const units = useGetUnits();

  const [selectedUnitId, setSelectedUnitId] = useState(
    parseInt(unitId as string) || 1
  );

  const formattedSelectData = units.map((unit) => ({
    label: unit.name,
    value: unit.id,
  }));

  const assets = useGetAssets(selectedUnitId);
  const users = useGetUsers();
  const unitUsersIds = React.useMemo(() => {
    return users
      .filter((user) => user.unitId === selectedUnitId)
      .map((u) => u.id);
  }, [selectedUnitId, users]);

  return (
    <Dashboard>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <SelectMenu
            data={formattedSelectData}
            onChange={(value) => setSelectedUnitId(value)}
            selectedValue={selectedUnitId}
          />
        </Grid>
        {/* Chart */}
        <DashboardItem height={300} xs={12} md={6} lg={6}>
          <Title>Unit Users</Title>
          <UsersTable summarized filterByIds={unitUsersIds} />
        </DashboardItem>
        <DashboardItem height={300} xs={12} md={6} lg={6}>
          <Title>Assets Statuses</Title>
          <AssetsChart assets={assets} />
        </DashboardItem>
        <DashboardItem xs={12}>
          <Title>Assets</Title>
          <Grid container spacing={2}>
            {assets.map((asset) => (
              <AssetItem key={asset.id} asset={asset} />
            ))}
          </Grid>
        </DashboardItem>
      </Grid>
    </Dashboard>
  );
};

export default Unit;
