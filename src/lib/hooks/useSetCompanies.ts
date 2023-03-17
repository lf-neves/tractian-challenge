import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Unit, User, WorkOrder, Company, Asset } from "../models";
import { getUnits, getUsers, getCompanies, getWorkOrders } from "../services";
import { getAssets } from "../services/getAssets";
import { updateCompanies } from "../store/companies";

interface FillCompaniesProps {
  companies: Array<Company>;
  users: Array<User>;
  units: Array<Unit>;
  workOrders: Array<WorkOrder>;
  assets: Array<Asset>;
}

export const useSetCompanies = () => {
  const data = useSelector((state: any) => state.companies);
  const dispatch = useDispatch();

  const fillCompanies = useCallback(
    ({ companies, users, units, workOrders, assets }: FillCompaniesProps) => {
      workOrders.forEach((wo) => {
        wo.users = users.filter((user) => wo.assignedUserIds.includes(user.id));
      });

      assets.forEach((asset) => {
        asset.workOrders = workOrders.filter((wo) => wo.assetId === asset.id);
      });

      units.forEach((unit) => {
        unit.assets = assets.filter((asset) => asset.unitId === unit.id);
        unit.users = users.filter((user) => user.unitId === unit.id);
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
      const assets = await getAssets();

      dispatch(
        updateCompanies(
          fillCompanies({ companies, users, units, workOrders, assets })
        )
      );
    };

    fetchData();
  }, [dispatch, fillCompanies]);

  return data;
};
