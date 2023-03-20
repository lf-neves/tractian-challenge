import { useMemo } from "react";
import { useSelector } from "react-redux";
import { WorkOrder } from "../models";
import { ReducerProps } from "../store/companies";

export const useGetWorkOrders = (assetId: number): Array<WorkOrder> => {
  const wOrders = useSelector((state: ReducerProps) => state.workOrders);

  const filteredOrders = useMemo(() => {
    return wOrders.filter((wo) => wo.assetId == assetId);
  }, [assetId, wOrders]);

  return filteredOrders;
};
