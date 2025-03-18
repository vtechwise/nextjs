"use server";

import { readFile } from "fs/promises";

type User = {
  id: string;
  firstName: string;
  lastName: string;
};

export const createUser = async (formData: FormData) => {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;

  // const rawData = Object.fromEntries(formData)
  const newUser: User = {
    lastName,
    firstName,
    id: Date.now().toString(),
  };
};

export const fetchUsers = async (): Promise<User[]> => {
  const result = await readFile("users.json", { encoding: "utf-8" });
  const users = result ? JSON.parse(result) : [];
  return users;
};
