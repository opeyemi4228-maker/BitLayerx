"use client";

import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const router = useRouter();

  async function signOut() {
    await fetch("/api/admin/session", { method: "DELETE" });
    router.replace("/admin/login");
    router.refresh();
  }

  return (
    <button
      onClick={signOut}
      className="rounded-full bg-black px-5 py-2 text-[14.5px] font-medium text-white transition-colors hover:bg-[#0040FF]"
    >
      Sign out
    </button>
  );
}
