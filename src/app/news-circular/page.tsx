import type { Metadata } from "next";
import NewsCircularClientView from "@/components/school/NewsCircularClientView";

export const metadata: Metadata = {
  title: "News & Circular | Official Notices & Advisories - Kautilya Vidyalaya Mysuru",
  description:
    "Stay updated with official news, academic circulars, PTM schedules, competition announcements, and event guidelines at Kautilya Vidyalaya, Mysuru.",
  keywords: [
    "Kautilya Vidyalaya Circulars",
    "School Notices Mysore",
    "PTM Meeting Schedule",
    "CBSE School Circulars Mysuru",
    "Ganesha Festival Competition Circular",
  ],
  openGraph: {
    title: "News & Circular | Kautilya Vidyalaya, Mysuru",
    description:
      "Official institutional announcements, examination schedules, and parent advisories.",
    url: "https://kautilyavidyalaya.edu.in/news-circular",
    siteName: "Kautilya Vidyalaya",
    locale: "en_IN",
    type: "website",
  },
};

export default function NewsCircularPage() {
  return <NewsCircularClientView />;
}
