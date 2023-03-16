import { useGetCompanies } from "@/lib/hooks/useGetCompanies";
import { Company } from "@/lib/models";
import { MenuItem, Select } from "@mui/material";
import { StyledMenuContainer } from "./styled";

export const CompanyMenu: React.FC = () => {
  const companies = useGetCompanies();

  return companies.length > 0 ? (
    <StyledMenuContainer>
      <Select
        value={companies[0]?.id}
        fullWidth
        size="small"
        sx={{ width: "60%" }}
      >
        {companies.map((company: Company) => (
          <MenuItem key={company.id} value={company.id}>
            {company.name}
          </MenuItem>
        ))}
      </Select>
    </StyledMenuContainer>
  ) : (
    <></>
  );
};
