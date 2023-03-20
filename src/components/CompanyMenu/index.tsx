import { useGetCompanies } from "@/lib/hooks/useGetCompanies";
import { Company } from "@/lib/models";
import { setSelectedCompanyId } from "@/lib/store/companies";
import { MenuItem, Select } from "@mui/material";
import { useDispatch } from "react-redux";
import { StyledMenuContainer } from "./styled";

export const CompanyMenu: React.FC = () => {
  const companies = useGetCompanies();
  const dispatch = useDispatch();

  return companies.length > 0 ? (
    <StyledMenuContainer>
      <Select
        value={companies[0]?.id}
        fullWidth
        size="small"
        onChange={(e) => {
          dispatch(setSelectedCompanyId(e.target.value));
        }}
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
