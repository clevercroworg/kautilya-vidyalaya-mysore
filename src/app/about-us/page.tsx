import type { Metadata } from "next";
import AboutUsClientView from "@/components/school/AboutUsClientView";

export const metadata: Metadata = {
  title: "About Us | Kautilya Vidyalaya - Premier CBSE School in Mysuru",
  description:
    "Discover the vision, mission, core values, and educational philosophy of Kautilya Vidyalaya, Mysuru. Fostering holistic learning, ethical leadership, and 21st-century skills.",
  keywords: [
    "About Kautilya Vidyalaya",
    "CBSE School Mysore",
    "Best Schools in Mysuru",
    "School Vision and Mission",
    "Holistic Education Mysore",
    "Dattagalli School Mysuru",
  ],
  openGraph: {
    title: "About Us | Kautilya Vidyalaya, Mysuru",
    description:
      "Nurturing character, inspiring intellect, and empowering future leaders through balanced CBSE schooling.",
    url: "https://kautilyavidyalaya.edu.in/about-us",
    siteName: "Kautilya Vidyalaya",
    locale: "en_IN",
    type: "website",
  },
};

export default function AboutUsPage() {
  return <AboutUsClientView />;
}
