import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Unit, User, WorkOrder, Company } from "../models";
import { getUnits, getUsers, getCompanies, getWorkOrders } from "../services";
import { updateCompanies } from "../store/companies";

interface FillCompaniesProps {
  companies: Array<Company>;
  users: Array<User>;
  units: Array<Unit>;
  workOrders: Array<WorkOrder>;
}

export const useSetCompanies = () => {
  const data = useSelector((state: any) => state.companies);
  const dispatch = useDispatch();

  const fillCompanies = useCallback(
    ({ companies, users, units, workOrders }: FillCompaniesProps) => {
      units.forEach((unit) => {
        unit.workOrders = workOrders;
      });

      companies.forEach((company) => {
        company.users = users.filter((user) => user.companyId === company.id);
        company.units = units.filter((unit) => unit.companyId === company.id);
      });

      return companies;
    },
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      const companies = await getCompanies();
      const units = await getUnits();
      const users = await getUsers();
      const workOrders = await getWorkOrders();

      dispatch(
        updateCompanies(fillCompanies({ companies, users, units, workOrders }))
      );
    };

    fetchData();
  }, [dispatch, fillCompanies]);

  return data;
};
