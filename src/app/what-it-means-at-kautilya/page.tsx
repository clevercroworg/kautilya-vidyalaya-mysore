import type { Metadata } from "next";
import WhatItMeansClientView from "@/components/academics/WhatItMeansClientView";

export const metadata: Metadata = {
  title: "What it means at Kautilya? | Academic Excellence & Philosophy - Kautilya Vidyalaya",
  description:
    "Discover the academic philosophy of Kautilya Vidyalaya, Mysuru. From strong foundational learning to interdisciplinary thinking, digital innovation, and future-ready skills.",
  keywords: [
    "Academic Philosophy Kautilya Vidyalaya",
    "What it means at Kautilya",
    "CBSE Curriculum Mysore",
    "Holistic Academics Mysuru",
    "STEM Education Mysore",
  ],
  openGraph: {
    title: "What it means at Kautilya? | Academic Excellence & Philosophy",
    description:
      "A balanced, interdisciplinary, and future-ready academic ecosystem at Kautilya Vidyalaya, Mysuru.",
    url: "https://kautilyavidyalaya.edu.in/what-it-means-at-kautilya",
    siteName: "Kautilya Vidyalaya",
    locale: "en_IN",
    type: "website",
  },
};

export default function WhatItMeansPage() {
  return <WhatItMeansClientView />;
}
