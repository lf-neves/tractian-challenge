import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Unit } from "../models";
import { ReducerProps } from "../store/companies";

export const useGetUnits = (): Array<Unit> => {
  const companyId = useSelector(
    (state: ReducerProps) => state.selectedCompanyId
  );
  const units = useSelector((state: ReducerProps) => state.units);

  const filteredUnits = useMemo(() => {
    return units.filter((u) => u.companyId === companyId);
  }, [companyId, units]);

  return filteredUnits;
};
