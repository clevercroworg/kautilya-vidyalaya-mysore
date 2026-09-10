import { Metadata } from "next";
import ParentPerspectivesClientView from "@/components/parents/ParentPerspectivesClientView";

export const metadata: Metadata = {
  title: "Parent Perspectives | Kautilya Vidyalaya, Mysore",
  description:
    "Hear real video reflections and testimonials from parents of Kautilya Vidyalaya students across Kindergarten, Primary, Middle, and High School in Mysore.",
  keywords: [
    "Kautilya Vidyalaya parent reviews",
    "Kautilya Vidyalaya parent testimonials",
    "CBSE school parent feedback Mysore",
    "Kautilya school video reviews",
  ],
};

export default function ParentPerspectivesPage() {
  return <ParentPerspectivesClientView />;
}
