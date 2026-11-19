import type { Metadata } from "next";
import CareersClientView from "@/components/careers/CareersClientView";

export const metadata: Metadata = {
  title: "Careers & Job Openings | Kautilya Vidyalaya Mysuru",
  description:
    "We are hiring! Join Kautilya Vidyalaya, Mysuru. Openings for Computer Teacher, Marketing Manager and Marketing Executive. Apply online with your resume.",
  keywords: [
    "Kautilya Vidyalaya Careers",
    "Computer Teacher jobs Mysore",
    "Marketing Manager jobs Mysuru",
    "Marketing Executive jobs Mysore",
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
      "Join our growing team in Mysuru. Openings for Computer Teacher, Marketing Manager & Marketing Executive.",
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
