import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../[...nextauth]/route";

export async function GET(request: Request) {
    const url = new URL(request.url);

    const session = await getServerSession(authOptions);
    if (!session || !session.user?.email) {
        return NextResponse.redirect(new URL("/login", url));
    }
    const payload = {
        email: session.user.email,
        accessToken: (session as any).accessToken ?? null,
    };

    const res = NextResponse.redirect(new URL("/welcome", url));

    res.cookies.set({
        name: "myapp_auth",
        value: JSON.stringify(payload),
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
    });

    return res;
}
