import { Metadata } from "next";
import BrochureClientView from "@/components/parents/BrochureClientView";

export const metadata: Metadata = {
  title: "Brochure Download | Kautilya Vidyalaya, Mysore",
  description:
    "Download the official admissions brochure and school prospectus 2026-27 for Kautilya Vidyalaya, Mysore. Explore CBSE curriculum, Atal Tinkering Labs, sports, and facilities.",
  keywords: [
    "Kautilya Vidyalaya brochure download",
    "Kautilya school prospectus PDF",
    "CBSE school admission brochure Mysore",
    "Kautilya Vidyalaya admission guide 2026-27",
  ],
};

export default function BrochureDownloadPage() {
  return <BrochureClientView />;
}
