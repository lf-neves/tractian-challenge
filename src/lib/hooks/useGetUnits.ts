import { useMemo } from "react";
import { Unit } from "../models";
import { useGetCompanies } from "./useGetCompanies";

export const useGetUnits = (companyId: number): Array<Unit> => {
  const companies = useGetCompanies();

  const units = useMemo(() => {
    return (
      companies.filter((company) => company.id === companyId)[0]?.units || []
    );
  }, [companies, companyId]);

  return units;
};
