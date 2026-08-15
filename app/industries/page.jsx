import { pageMetadata } from "@/lib/seo";
import IndustriesClient from "./IndustriesClient";

// The body needs no state or animation, so it renders on the server and ships
// no JavaScript. Metadata stays here because that is where Next expects it.
export const metadata = pageMetadata("/industries");

export default function Page() {
  return <IndustriesClient />;
}
