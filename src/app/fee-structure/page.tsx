import { Metadata } from "next";
import FeeStructureClientView from "@/components/parents/FeeStructureClientView";

export const metadata: Metadata = {
  title: "Fee Structure 2026-27 | Transparent Tuition & Admissions",
  description:
    "Official CBSE fee structure for the Academic Year 2026-27 at Kautilya Vidyalaya, Mysore. View class-wise tuition fees for Kindergarten to Grade 10 & PUC, and online payment details.",
  keywords: [
    "Kautilya Vidyalaya fee structure 2026-27",
    "CBSE school fees Mysore",
    "Kautilya Vidyalaya tuition fee Dattagalli",
    "Mysore CBSE school admission fee structure",
    "Affordable CBSE school Mysore",
    "Online fee payment Kautilya school",
  ],
  alternates: {
    canonical: "https://kautilyavidyalaya.edu.in/fee-structure",
  },
};

export default function FeeStructurePage() {
  return <FeeStructureClientView />;
}
