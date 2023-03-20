import { useSetCompanies } from "@/lib/hooks/useSetCompanies";
import { CompanyMenu } from "../CompanyMenu";
import SidebarMenu from "../SidebarMenu";
import { ReactNode } from "react";
import { Flex } from "../common/Flex";
import { Box } from "@mui/material";

interface LayoutContainerProps {
  children: ReactNode;
}

export const LayoutContainer: React.FC<LayoutContainerProps> = ({
  children,
}) => {
  useSetCompanies();

  return (
    <Box>
      <CompanyMenu />
      <Flex>
        <SidebarMenu />
        {children}
      </Flex>
    </Box>
  );
};
