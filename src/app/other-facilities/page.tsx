import type { Metadata } from "next";
import OtherFacilitiesClientView from "@/components/academics/OtherFacilitiesClientView";

export const metadata: Metadata = {
  title: "Other Facilities | Infirmary, Day Care & GPS Transport - Kautilya Vidyalaya",
  description:
    "Explore student care facilities at Kautilya Vidyalaya, Mysuru. Featuring a 4-bed nurse infirmary, extended day care facility (1 PM - 4 PM), and GPS-tracked school transport.",
  keywords: [
    "School Facilities Kautilya Vidyalaya",
    "School Transport Mysore",
    "School Infirmary Mysore",
    "School Day Care Mysore",
    "Safe Campus Kautilya",
  ],
  openGraph: {
    title: "Other Facilities | Kautilya Vidyalaya, Mysuru",
    description:
      "A safe, nurturing campus infrastructure with a dedicated infirmary, day care, and school bus fleet.",
    url: "https://kautilyavidyalaya.edu.in/other-facilities",
    siteName: "Kautilya Vidyalaya",
    locale: "en_IN",
    type: "website",
  },
};

export default function OtherFacilitiesPage() {
  return <OtherFacilitiesClientView />;
}
