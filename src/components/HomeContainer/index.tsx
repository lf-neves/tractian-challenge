import { useSetCompanies } from "@/lib/hooks/useSetCompanies";
import { Box } from "@mui/material";
import { CompanyMenu } from "../CompanyMenu";
import { Layout } from "../Layout";
import { VerticalTabs } from "../VerticalTabMenu";

export const HomeContainer: React.FC = () => {
  useSetCompanies();

  return (
    <Layout>
      <CompanyMenu />
      <Box>
        <VerticalTabs />
      </Box>
    </Layout>
  );
};
