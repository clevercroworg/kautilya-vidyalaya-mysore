import type { Metadata } from "next";
import PrincipalsMessageClientView from "@/components/school/PrincipalsMessageClientView";

export const metadata: Metadata = {
  title: "Director & Principal's Message | Dr. S. Jayashree Muralidhar - Kautilya Vidyalaya",
  description:
    "Read the welcome message from Dr. S. Jayashree Muralidhar, Director & Principal of Kautilya Vidyalaya, Mysuru. Discover our holistic learning environment, Atal lab, space lab, and value-based education.",
  keywords: [
    "Principals Message Kautilya Vidyalaya",
    "Dr S Jayashree Muralidhar",
    "Director Principal Kautilya Vidyalaya",
    "CBSE School Principal Mysore",
    "Atal Tinkering Lab Mysore School",
  ],
  openGraph: {
    title: "Director & Principal's Message | Kautilya Vidyalaya, Mysuru",
    description:
      "A welcoming message on comprehensive learning, creative discovery, and 21st-century leadership from Principal Dr. S. Jayashree Muralidhar.",
    url: "https://kautilyavidyalaya.edu.in/principals-message",
    siteName: "Kautilya Vidyalaya",
    locale: "en_IN",
    type: "website",
  },
};

export default function PrincipalsMessagePage() {
  return <PrincipalsMessageClientView />;
}
