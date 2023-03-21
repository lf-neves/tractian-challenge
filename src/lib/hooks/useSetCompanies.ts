import { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { getUnits, getUsers, getCompanies, getWorkOrders } from "../services";
import { getAssets } from "../services/getAssets";
import { updateStore } from "../store/companies";

export const useSetCompanies = () => {
  const { companies } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const { data: companiesData, isLoading: companiesLoading } = useQuery(
    "companies",
    getCompanies
  );
  const { data: unitsData, isLoading: unitsLoading } = useQuery(
    "units",
    getUnits
  );
  const { data: usersData, isLoading: usersLoading } = useQuery(
    "users",
    getUsers
  );
  const { data: workOrdersData, isLoading: workOrdersLoading } = useQuery(
    "workOrders",
    getWorkOrders
  );
  const { data: assetsData, isLoading: assetsLoading } = useQuery(
    "assets",
    getAssets
  );

  const isLoading =
    companiesLoading ||
    unitsLoading ||
    usersLoading ||
    workOrdersLoading ||
    assetsLoading;

  useEffect(() => {
    !isLoading &&
      companies.length === 0 &&
      dispatch(
        updateStore({
          companies: companiesData,
          users: usersData,
          units: unitsData,
          workOrders: workOrdersData,
          assets: assetsData,
        })
      );
  }, [
    assetsData,
    companies.length,
    companiesData,
    dispatch,
    isLoading,
    unitsData,
    usersData,
    workOrdersData,
  ]);

  return;
};
