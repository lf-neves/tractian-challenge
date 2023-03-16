import { User } from "../models/Users";

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
