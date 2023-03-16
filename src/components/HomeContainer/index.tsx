import { Box } from "@mui/material";
import { CompanyMenu } from "../CompanyMenu";
import { Layout } from "../Layout";
import { VerticalTabs } from "../VerticalTabMenu";

export const HomeContainer: React.FC = () => {
  return (
    <Layout>
      <CompanyMenu companyName={1} />
      <Box>
        <VerticalTabs />
      </Box>
    </Layout>
  );
};
