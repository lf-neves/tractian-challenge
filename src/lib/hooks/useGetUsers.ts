import { getUsers } from "@/lib/services/getUsers";
import { useEffect, useState } from "react";
import { User } from "../models/Users";

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
