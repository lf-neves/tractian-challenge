import { useSelector } from "react-redux";
import { Company } from "../models";

export const useGetCompanies = (): Array<Company> => {
  return useSelector((state: any) => state.companies);
};
