import { pageMetadata } from "@/lib/seo";
import ServicesClient from "./ServicesClient";

// Server wrapper. The page body is a client component (it uses animation and
// state), and client components cannot export metadata, so the route's title,
// description and self-referencing canonical are declared here instead.
export const metadata = pageMetadata("/services");

export default function Page() {
  return <ServicesClient />;
}
