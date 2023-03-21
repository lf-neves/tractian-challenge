import { CompaniesTable } from "@/components/tables/CompaniesTable";
import Dashboard from "@/components/Dashboard";
import { useSetCompanies } from "@/lib/hooks/useSetCompanies";

const Companies = () => {
  useSetCompanies();

  return (
    <Dashboard>
      <CompaniesTable />
    </Dashboard>
  );
};

export default Companies;
