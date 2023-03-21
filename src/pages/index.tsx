import { CompanyMenu } from "@/components/CompanyMenu";
import Dashboard from "@/components/Dashboard";
import { DashboardItem } from "@/components/Dashboard/DashboardItem";
import Title from "@/components/Dashboard/DashboardItem/Title";
import { DownAssetsTable } from "@/components/tables/DowAssetsTable";
import { IncompleteWorkOrdersTable } from "@/components/tables/IncompleteWorkOrdersTable";
import { UsersTable } from "@/components/tables/UsersTable";
import { useGetUnits } from "@/lib/hooks/useGetUnits";
import { useGetUsers } from "@/lib/hooks/useGetUsers";
import { useSetCompanies } from "@/lib/hooks/useSetCompanies";
import { ReducerProps } from "@/lib/store/companies";
import { Grid, List, ListItem, ListItemText, Paper } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  useSetCompanies();

  const { selectedCompanyId } = useSelector((state: ReducerProps) => state);

  const users = useGetUsers();
  const units = useGetUnits();
  const userIdsFilteredByCompany = React.useMemo(() => {
    return users
      .filter((user) => user.companyId === selectedCompanyId)
      .map((u) => u.id);
  }, [selectedCompanyId, users]);

  return (
    <Dashboard>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <CompanyMenu />
        </Grid>
        {/* Chart */}
        <DashboardItem xs={12} md={6} height={300}>
          <Title>In Down Time Assets </Title>
          <DownAssetsTable />
        </DashboardItem>
        <DashboardItem xs={12} md={6} height={300}>
          <Title>Incomplete Work Orders </Title>
          <IncompleteWorkOrdersTable />
        </DashboardItem>
        <DashboardItem xs={12} md={3} height={400}>
          <Title>Company Units</Title>
          <List>
            {units.map((unit) => (
              <ListItem key={unit.id}>
                <ListItemText
                  primary={unit.name}
                  secondary={`id: ${unit.id}`}
                />
              </ListItem>
            ))}
          </List>
        </DashboardItem>
        <DashboardItem xs={12} md={9} height={400}>
          <Title>Company Users</Title>
          <UsersTable filterByIds={userIdsFilteredByCompany} />
        </DashboardItem>
      </Grid>
    </Dashboard>
  );
};

export default Home;
