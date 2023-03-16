import { getWorkOrders, WorkOrder } from "@/services/getWorkOrders";
import { useEffect, useState } from "react";

export const useGetWorkOrders = () => {
  const [data, setData] = useState<WorkOrder[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getWorkOrders();
      setData(response);
    };

    fetchData();
  }, []);

  return data;
};
