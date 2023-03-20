import { useSelector } from "react-redux";
import { ReducerProps } from "../store/companies";

export const useGetUsers = () => {
  const users = useSelector((state: ReducerProps) => state.users);

  return users;
};
