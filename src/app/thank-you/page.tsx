import { Metadata } from "next";
import ThankYouClientView from "@/components/thank-you/ThankYouClientView";

export const metadata: Metadata = {
  title: "Thank You | Admission Enquiry Submitted | Kautilya Vidyalaya",
  description:
    "Thank you for contacting Kautilya Vidyalaya Mysuru. Your admission inquiry has been received, and our admissions team will contact you shortly.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return <ThankYouClientView />;
}
