import type { Metadata } from "next";
import LifeSkillsClientView from "@/components/academics/LifeSkillsClientView";

export const metadata: Metadata = {
  title: "Life Skills | SUPW, Debate, Counseling & Environment - Kautilya Vidyalaya",
  description:
    "Explore the holistic life skills curriculum at Kautilya Vidyalaya, Mysuru. From SUPW and environmental education to public speaking, art, and professional student counseling.",
  keywords: [
    "Life Skills Kautilya Vidyalaya",
    "SUPW School Mysore",
    "Student Counseling Mysore",
    "Environmental Education School",
    "Debate and Public Speaking Mysore",
  ],
  openGraph: {
    title: "Life Skills | Kautilya Vidyalaya, Mysuru",
    description:
      "Empowering students with practical competencies, empathy, resilience, and environmental stewardship.",
    url: "https://kautilyavidyalaya.edu.in/life-skills",
    siteName: "Kautilya Vidyalaya",
    locale: "en_IN",
    type: "website",
  },
};

export default function LifeSkillsPage() {
  return <LifeSkillsClientView />;
}
