import { Asset } from "../models";

export const getAssets = async (): Promise<Array<Asset>> => {
  const resp = await fetch(
    "https://my-json-server.typicode.com/tractian/fake-api/assets"
  );

  const units = await resp.json();

  return units as unknown as Array<Asset>;
};
