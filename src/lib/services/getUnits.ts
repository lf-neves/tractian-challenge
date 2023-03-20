import { Unit } from "../models/Units";

export const getUnits = async (): Promise<Array<Unit>> => {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/units`);

  const units = await resp.json();

  return units as unknown as Array<Unit>;
};
