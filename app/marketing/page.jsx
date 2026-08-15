import { pageMetadata } from "@/lib/seo";
import MarketingClient from "./MarketingClient";

// Server wrapper. The page body is a client component (it uses animation and
// state), and client components cannot export metadata, so the route's title,
// description and self-referencing canonical are declared here instead.
export const metadata = pageMetadata("/marketing");

export default function Page() {
  return <MarketingClient />;
}
