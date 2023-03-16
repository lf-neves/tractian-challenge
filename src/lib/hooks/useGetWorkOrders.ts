import { useMemo } from "react";
import { WorkOrder } from "../models";
import { useGetUnits } from "./useGetUnits";

export const useGetWorkOrders = (unityId: number): Array<WorkOrder> => {
  const units = useGetUnits(1);

  const wOrders = useMemo(() => {
    return units.filter((u) => u.id === unityId)[0].workOrders || [];
  }, [units, unityId]);

  return wOrders;
};
