import type { Metadata } from "next";
import ChairmansDeskClientView from "@/components/school/ChairmansDeskClientView";

export const metadata: Metadata = {
  title: "Chairman’s Desk | Mr. T Babu - Kautilya Vidyalaya Mysuru",
  description:
    "Read the official message from Mr. T Babu, Chairman of Kautilya Vidyalaya, Mysuru. Discover our commitment to service, character building, and social responsibility in education.",
  keywords: [
    "Chairman Desk Kautilya Vidyalaya",
    "Mr T Babu Chairman",
    "Kautilya Vidyalaya Leadership",
    "Service in Education",
    "CBSE School Mysore Management",
  ],
  openGraph: {
    title: "Chairman’s Desk | Kautilya Vidyalaya, Mysuru",
    description:
      "A message on service, character, and lifelong societal impact from Chairman Mr. T Babu.",
    url: "https://kautilyavidyalaya.edu.in/chairmans-desk",
    siteName: "Kautilya Vidyalaya",
    locale: "en_IN",
    type: "website",
  },
};

export default function ChairmansDeskPage() {
  return <ChairmansDeskClientView />;
}
