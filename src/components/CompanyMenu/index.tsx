import { useGetCompanies } from "@/lib/hooks/useGetCompanies";
import { setSelectedCompanyId } from "@/lib/store/companies";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { SelectMenu } from "../common/SelectMenu";

export const CompanyMenu: React.FC = () => {
  const companies = useGetCompanies();
  const dispatch = useDispatch();

  const formattedData = companies.map((company) => ({
    label: company.name,
    value: company.id,
  }));

  return companies.length > 0 ? (
    <Box>
      <SelectMenu
        selectedValue={1}
        data={formattedData}
        onChange={(value) => dispatch(setSelectedCompanyId(value))}
      />
    </Box>
  ) : (
    <></>
  );
};
