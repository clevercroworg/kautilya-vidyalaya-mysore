import type { Metadata } from "next";
import CareersClientView from "@/components/careers/CareersClientView";

export const metadata: Metadata = {
  title: "Careers & Job Openings | Kautilya Vidyalaya Mysuru",
  description:
    "Explore teaching and staff career opportunities at Kautilya Vidyalaya, Mysuru. Apply online for Kindergarten, PRT, TGT, PGT, and administrative openings with resume upload.",
  keywords: [
    "Kautilya Vidyalaya Careers",
    "Teaching jobs in Mysore",
    "CBSE school teacher vacancies Mysore",
    "PRT TGT PGT jobs Mysuru",
    "Kindergarten Montessori teacher jobs Mysore",
    "School recruitment Mysore",
  ],
  alternates: {
    canonical: "https://kautilyavidyalaya.edu.in/careers",
  },
  openGraph: {
    title: "Careers at Kautilya Vidyalaya Mysuru | Join Our Faculty",
    description:
      "Join our passionate academic community in Mysuru. Apply online for teaching and administrative vacancies.",
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
