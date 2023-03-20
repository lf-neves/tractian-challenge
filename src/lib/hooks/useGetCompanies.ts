import { useSelector } from "react-redux";
import { Company } from "../models";
import { ReducerProps } from "../store/companies";

export const useGetCompanies = (): Array<Company> => {
  const companies = useSelector((state: ReducerProps) => state.companies);

  return companies;
};
