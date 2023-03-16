import { getUnits, Unit } from "@/services/getUnits";
import { useEffect, useState } from "react";

export const useGetUnits = () => {
  const [data, setData] = useState<Unit[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUnits();
      setData(response);
    };

    fetchData();
  }, []);

  return data;
};
