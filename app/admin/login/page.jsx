import { Suspense } from "react";
import LoginForm from "./LoginForm";

export const metadata = {
  title: "Admin",
  robots: { index: false, follow: false, nocache: true },
};

export default function AdminLoginPage() {
  // useSearchParams() opts the subtree out of static rendering, so it has to
  // sit inside a Suspense boundary or the build cannot prerender this route.
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[70vh] items-center justify-center bg-[#f5f5f7]">
          <p className="text-[14.5px] text-[#6e6e73]">Loading…</p>
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
