import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUnits, getUsers, getCompanies, getWorkOrders } from "../services";
import { getAssets } from "../services/getAssets";
import { updateStore } from "../store/companies";

export const useSetCompanies = () => {
  const data = useSelector((state: any) => state.companies);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const companies = await getCompanies();
      const units = await getUnits();
      const users = await getUsers();
      const workOrders = await getWorkOrders();
      const assets = await getAssets();

      dispatch(updateStore({ companies, users, units, workOrders, assets }));
    };

    fetchData();
  }, [dispatch]);

  return data;
};
