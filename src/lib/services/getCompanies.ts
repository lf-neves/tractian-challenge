import { Company } from "../models/Companies";

export const getCompanies = async (): Promise<Array<Company>> => {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/companies`);

  const units = await resp.json();

  return units as unknown as Array<Company>;
};
