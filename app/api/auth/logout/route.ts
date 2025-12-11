import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const url = new URL(request.url);
  const res = NextResponse.redirect(new URL("/login", url));

  res.cookies.set({
    name: "myapp_auth",
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });

  return res;
}
