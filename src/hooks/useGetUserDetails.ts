import { getUserDetails, User } from "@/services/getUsers";
import { useEffect, useState } from "react";

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
