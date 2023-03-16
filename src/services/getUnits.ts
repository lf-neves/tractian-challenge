export interface Unit {
  companyId: number;
  id: number;
  name: string;
}

export const getUnits = async (): Promise<Array<Unit>> => {
  const resp = await fetch(
    "https://my-json-server.typicode.com/tractian/fake-api/units"
  );

  const units = await resp.json();

  return units as unknown as Array<Unit>;
};
