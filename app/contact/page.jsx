import { pageMetadata } from "@/lib/seo";
import ContactClient from "./ContactClient";

// Server wrapper. The page body is a client component (it uses animation and
// state), and client components cannot export metadata  -  so the route's title,
// description and self-referencing canonical are declared here instead.
export const metadata = pageMetadata("/contact");

export default function Page() {
  return <ContactClient />;
}
