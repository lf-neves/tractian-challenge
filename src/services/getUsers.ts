export interface User {
  companyId: number;
  email: string;
  id: number;
  name: string;
  unitId: number;
}

export const getUsers = async (): Promise<Array<User>> => {
  const resp = await fetch(
    "https://my-json-server.typicode.com/tractian/fake-api/users"
  );

  const users = await resp.json();

  return users as unknown as Array<User>;
};

export const getUserDetails = async (userId: number) => {
  const resp = await fetch(
    `https://my-json-server.typicode.com/tractian/fake-api/users/${userId}`
  );

  const user = await resp.json();

  return user as unknown as User;
};
