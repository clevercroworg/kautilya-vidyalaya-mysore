import type { Metadata } from "next";
import SportsClientView from "@/components/academics/SportsClientView";

export const metadata: Metadata = {
  title: "Sports & Physical Education | Athletics, Yoga & Games - Kautilya Vidyalaya",
  description:
    "Discover the comprehensive physical education, outdoor athletics, indoor strategy games, and certified yoga instruction at Kautilya Vidyalaya, Mysuru.",
  keywords: [
    "Sports Kautilya Vidyalaya",
    "Physical Education Mysore School",
    "Cricket Basketball School Mysore",
    "Yoga Classes School Mysore",
    "School Sports Ground Mysuru",
  ],
  openGraph: {
    title: "Sports & Physical Education | Kautilya Vidyalaya, Mysuru",
    description:
      "Cultivating fitness, agility, teamwork, and mental resilience through outdoor sports, indoor games, and yoga.",
    url: "https://kautilyavidyalaya.edu.in/sports-and-physical-education",
    siteName: "Kautilya Vidyalaya",
    locale: "en_IN",
    type: "website",
  },
};

export default function SportsPage() {
  return <SportsClientView />;
}
