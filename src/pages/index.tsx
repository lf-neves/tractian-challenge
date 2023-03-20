import { CompanyMenu } from "@/components/CompanyMenu";
import Dashboard from "@/components/Dashboard";
import Title from "@/components/Dashboard/DashboardItem/Title";
import { UsersTable } from "@/components/UsersTable";
import { useSetCompanies } from "@/lib/hooks/useSetCompanies";
import { Grid, Paper } from "@mui/material";

const Home = () => {
  useSetCompanies();

  return (
    <Dashboard>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <CompanyMenu />
        </Grid>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <>test</>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            test
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Title>Users</Title>
            <UsersTable />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Title>Units</Title>
          </Paper>
        </Grid>
      </Grid>
    </Dashboard>
  );
};

export default Home;
