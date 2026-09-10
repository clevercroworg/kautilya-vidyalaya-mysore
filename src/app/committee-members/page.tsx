import type { Metadata } from "next";
import CommitteeMembersClientView from "@/components/school/CommitteeMembersClientView";

export const metadata: Metadata = {
  title: "Committee Members | Management & Academic Advisory Board - Kautilya Vidyalaya",
  description:
    "Meet the distinguished Management Committee and Academic Advisory Board of Kautilya Vidyalaya, Mysuru, featuring eminent leaders from medicine, engineering, and academia.",
  keywords: [
    "Kautilya Vidyalaya Committee Members",
    "School Management Mysore",
    "Academic Advisory Board",
    "Dr Prakash MS",
    "Dr KN Subramanya",
    "Dr Naveen S",
    "Mr T Babu",
  ],
  openGraph: {
    title: "Committee Members | Kautilya Vidyalaya, Mysuru",
    description:
      "Visionary leadership and academic advisory board guiding Kautilya Vidyalaya towards educational excellence.",
    url: "https://kautilyavidyalaya.edu.in/committee-members",
    siteName: "Kautilya Vidyalaya",
    locale: "en_IN",
    type: "website",
  },
};

export default function CommitteeMembersPage() {
  return <CommitteeMembersClientView />;
}
