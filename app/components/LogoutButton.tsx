"use client";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  const handle = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/login";
  };

  return (
    <button onClick={handle} className="px-4 py-2 bg-red-600 text-white rounded">
      Logout
    </button>
  );
}
