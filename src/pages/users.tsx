import Dashboard from "@/components/Dashboard";
import { UsersTable } from "@/components/tables/UsersTable";
import { useSetCompanies } from "@/lib/hooks/useSetCompanies";

const Users = () => {
  useSetCompanies();

  return (
    <Dashboard>
      <UsersTable />
    </Dashboard>
  );
};

export default Users;
