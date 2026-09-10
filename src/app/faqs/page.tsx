import { Metadata } from "next";
import FaqsClientView from "@/components/parents/FaqsClientView";

export const metadata: Metadata = {
  title: "FAQs | Kautilya Vidyalaya, Mysore",
  description:
    "Frequently Asked Questions regarding admissions, CBSE curriculum, language policy, student welfare, bus transport, and fee guidelines at Kautilya Vidyalaya, Mysore.",
  keywords: [
    "Kautilya Vidyalaya FAQs",
    "CBSE school admission questions Mysore",
    "Kautilya fee refund policy",
    "Kautilya language policy",
    "Kautilya transport facility",
  ],
};

export default function FaqsPage() {
  return <FaqsClientView />;
}
