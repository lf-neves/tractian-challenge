import { getUsers, User } from "@/services/getUsers";
import { useEffect, useState } from "react";

export const useGetUsers = () => {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUsers();
      setData(response);
    };

    fetchData();
  }, []);

  return data;
};
