import { User } from "../models/Users";

export const getUsers = async (): Promise<Array<User>> => {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`);

  const users = await resp.json();

  return users as unknown as Array<User>;
};

export const getUserDetails = async (userId: number) => {
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`
  );

  const user = await resp.json();

  return user as unknown as User;
};
