import { Asset } from "../models";

export const getAssets = async (): Promise<Array<Asset>> => {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/assets`);

  const units = await resp.json();

  return units as unknown as Array<Asset>;
};
