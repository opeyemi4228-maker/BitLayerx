import { pageMetadata } from "@/lib/seo";
import SolutionsClient from "./SolutionsClient";

// Server wrapper. The page body is a client component (it uses animation and
// state), and client components cannot export metadata  -  so the route's title,
// description and self-referencing canonical are declared here instead.
export const metadata = pageMetadata("/solutions");

export default function Page() {
  return <SolutionsClient />;
}
