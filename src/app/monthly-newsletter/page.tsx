import { Metadata } from "next";
import MonthlyNewsletterClientView from "@/components/student-corner/MonthlyNewsletterClientView";

export const metadata: Metadata = {
  title: "Monthly Newsletter | Kautilya Vidyalaya Mysuru",
  description:
    "Explore the official monthly newsletters of Kautilya Vidyalaya. Read about campus events, student literary writings, artwork, and school milestones.",
};

export default function MonthlyNewsletterPage() {
  return <MonthlyNewsletterClientView />;
}
