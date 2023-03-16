import { getUserDetails } from "@/lib/services/getUsers";
import { useEffect, useState } from "react";
import { User } from "../models/Users";

export const useGetUserDetails = (userId: number) => {
  const [data, setData] = useState<User>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUserDetails(userId);
      setData(response);
    };

    fetchData();
  }, [userId]);

  return data;
};
