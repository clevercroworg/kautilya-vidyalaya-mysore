import type { Metadata } from "next";
import TeachingFacultyClientView from "@/components/school/TeachingFacultyClientView";

export const metadata: Metadata = {
  title: "Teaching Faculty | Dedicated Educators - Kautilya Vidyalaya Mysuru",
  description:
    "Explore the qualified and experienced teaching faculty at Kautilya Vidyalaya, Mysuru. Meet our passionate educators inspiring excellence across sciences, humanities, arts, and languages.",
  keywords: [
    "Teaching Faculty Kautilya Vidyalaya",
    "School Teachers Mysore",
    "CBSE Qualified Faculty Mysuru",
    "Faculty List Kautilya Vidyalaya",
  ],
  openGraph: {
    title: "Teaching Faculty | Kautilya Vidyalaya, Mysuru",
    description:
      "Meet our dedicated, CBSE-qualified educators inspiring young minds at Kautilya Vidyalaya.",
    url: "https://kautilyavidyalaya.edu.in/teaching-faculty",
    siteName: "Kautilya Vidyalaya",
    locale: "en_IN",
    type: "website",
  },
};

export default function TeachingFacultyPage() {
  return <TeachingFacultyClientView />;
}
