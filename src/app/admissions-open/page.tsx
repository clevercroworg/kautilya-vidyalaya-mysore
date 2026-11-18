import { Metadata } from "next";
import AdmissionsLandingView from "@/components/landing/AdmissionsLandingView";

export const metadata: Metadata = {
  title: "Admissions Open 2027-28 | Kautilya Vidyalaya - CBSE School Mysuru",
  description:
    "Admissions open for 2027-28 at Kautilya Vidyalaya, Mysuru. CBSE affiliated school from Nursery to Grade 10. Enquire now to book a campus visit.",
  alternates: {
    canonical: "https://kautilyavidyalaya.edu.in/admissions-open",
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Admissions Open 2027-28 | Kautilya Vidyalaya Mysuru",
    description:
      "CBSE affiliated school in Mysuru, Nursery to Grade 10. Enquire now to book a campus visit.",
    url: "https://kautilyavidyalaya.edu.in/admissions-open",
    siteName: "Kautilya Vidyalaya",
    images: ["/images/kautilya-campus-building.jpg"],
    locale: "en_IN",
    type: "website",
  },
};

export default function AdmissionsOpenPage() {
  return <AdmissionsLandingView />;
}
