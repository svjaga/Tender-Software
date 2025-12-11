import { cookies } from "next/headers";
import Link from "next/link";
import Header from "../components/Header";

export default async function WelcomePage() {
    const cookieStore = await cookies();
    const cookie = cookieStore.get("myapp_auth");

    let payload = null;
    try {
        payload = cookie?.value ? JSON.parse(cookie.value) : null;
    } catch {
        payload = null;
    }

    const email = payload?.email ?? null;

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <Header labColor="lab(77 0 -0.01)" />
            <main className="flex-1 flex items-center justify-center">
                {!email ? (
                    <div className="text-center p-12 rounded-xl shadow-lg bg-gradient-to-r from-red-400 to-pink-600 text-white max-w-sm">
                        <h2 className="text-3xl font-bold mb-6">No auth cookie found</h2>
                        <Link
                            href="/login"
                            className="px-6 py-3 bg-white text-red-600 font-semibold rounded shadow hover:bg-gray-100 transition"
                        >
                            Go to Login
                        </Link>
                    </div>
                ) : (
                    <div className="text-center p-16 rounded-xl shadow-xl bg-white w-[50vw] max-w-full">
                        <h2 className="text-3xl font-bold mb-6 whitespace-nowrap overflow-x-auto">
                            Welcome, {email}
                        </h2>
                        <p className="mb-8 text-gray-700">
                            You are successfully logged in.
                        </p>
                        <form action="/api/auth/logout" method="POST">
                            <button className="px-8 py-4 bg-red-600 text-white font-semibold rounded shadow hover:bg-red-700 transition">
                                Logout
                            </button>
                        </form>
                    </div>


                )}
            </main>
        </div>
    );
}
