import type { Metadata } from "next";
import CareersClientView from "@/components/careers/CareersClientView";

export const metadata: Metadata = {
  title: "Careers & Job Openings | Kautilya Vidyalaya Mysuru",
  description:
    "We are hiring! Join Kautilya Vidyalaya, Dattagalli, Mysuru. Openings for Front Office Associate and Admission Associate. Freshers are welcome! Apply online with resume.",
  keywords: [
    "Kautilya Vidyalaya Careers",
    "Front Office Associate jobs Mysore",
    "Admission Associate vacancies Mysuru",
    "CBSE school jobs Mysore",
    "Freshers jobs Mysore",
    "School recruitment Mysore",
  ],
  alternates: {
    canonical: "https://kautilyavidyalaya.edu.in/careers",
  },
  openGraph: {
    title: "We Are Hiring! Careers at Kautilya Vidyalaya Mysuru",
    description:
      "Join our growing team in Dattagalli, Mysuru. Openings for Front Office Associate & Admission Associate. Freshers welcome!",
    url: "https://kautilyavidyalaya.edu.in/careers",
    siteName: "Kautilya Vidyalaya Mysore",
    images: [
      {
        url: "/images/bg/kautilya-campus-header-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Careers at Kautilya Vidyalaya Mysore",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function CareersPage() {
  return <CareersClientView />;
}
