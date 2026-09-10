import type { Metadata } from "next";
import ResultGraphClientView from "@/components/academics/ResultGraphClientView";

export const metadata: Metadata = {
  title: "Result Graph | CBSE Board Results & Academic Distinction - Kautilya Vidyalaya",
  description:
    "Review the outstanding 100% CBSE board examination pass record, topper merit lists, and annual result graphs of Kautilya Vidyalaya, Mysuru from 2019 to 2025.",
  keywords: [
    "Result Graph Kautilya Vidyalaya",
    "CBSE Board Results Mysore",
    "Kautilya Vidyalaya Toppers",
    "Class 10 CBSE Results Mysore",
    "100 Percent Pass CBSE Mysore",
  ],
  openGraph: {
    title: "Result Graph | Kautilya Vidyalaya, Mysuru",
    description:
      "A proven track record of academic excellence, 100% CBSE pass percentages, and subject centum scorers.",
    url: "https://kautilyavidyalaya.edu.in/result-graph",
    siteName: "Kautilya Vidyalaya",
    locale: "en_IN",
    type: "website",
  },
};

export default function ResultGraphPage() {
  return <ResultGraphClientView />;
}
