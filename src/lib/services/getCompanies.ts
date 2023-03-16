import { Company } from "../models/Companies";

export const getCompanies = async (): Promise<Array<Company>> => {
  const resp = await fetch(
    "https://my-json-server.typicode.com/tractian/fake-api/companies"
  );

  const units = await resp.json();

  return units as unknown as Array<Company>;
};
