"use server";

import { readFile, writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type User = {
  id: string;
  firstName: string;
  lastName: string;
};

export const createUser = async (prevSate: any, formData: FormData) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;

  // const rawData = Object.fromEntries(formData)
  const newUser: User = {
    lastName,
    firstName,
    id: Date.now().toString(),
  };

  try {
    await saveUser(newUser);
    revalidatePath("/actions");
    return "user created successfully";
  } catch (error) {
    console.log(error);
    return "Failed to create user";
  }

  // redirect('/')
};

export const fetchUsers = async (): Promise<User[]> => {
  const result = await readFile("users.json", { encoding: "utf-8" });
  const users = result ? JSON.parse(result) : [];
  return users;
};

export const saveUser = async (user: User) => {
  const users = await fetchUsers();
  users.push(user);
  await writeFile("users.json", JSON.stringify(users));
};

export const deleteUser = async (formData: FormData) => {
  const id = formData.get("id") as string;
  const users = await fetchUsers();
  const updatedUsers = users.filter((user) => {
    return user.id !== id;
  });

  await writeFile("users.json", JSON.stringify(updatedUsers));
  revalidatePath("/actions");
};
