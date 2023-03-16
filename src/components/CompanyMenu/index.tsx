import { MenuItem, Select } from "@mui/material";
import { StyledMenuContainer } from "./styled";

interface CompanyMenuProps {
  companyName: number;
}

export const CompanyMenu: React.FC<CompanyMenuProps> = ({ companyName }) => {
  return (
    <StyledMenuContainer>
      <Select value={companyName} fullWidth size="small" sx={{ width: "60%" }}>
        <MenuItem value={1}>Test Company</MenuItem>
      </Select>
    </StyledMenuContainer>
  );
};
