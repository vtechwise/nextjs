import { fetchUsers, saveUser } from "@/utils/actions";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  console.log(req.nextUrl.searchParams.get("id"));

  const users = await fetchUsers();
  return NextResponse.redirect(new URL("/", req.url));
};


export const POST = async (req: Request) => {
    const user = await req.json()
    const newUser = { ...user, id: Date.now().toString() }
    await saveUser(newUser)
    return Response.json({})
}