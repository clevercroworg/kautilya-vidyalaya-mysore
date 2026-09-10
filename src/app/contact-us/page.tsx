import { Metadata } from "next";
import ContactUsClientView from "@/components/contact/ContactUsClientView";

export const metadata: Metadata = {
  title: "Contact Us & Campus Location | Admissions Helpdesk",
  description:
    "Contact Kautilya Vidyalaya in Dattagalli, Kanakadasa Nagar, Mysore. Admissions phone: +91 99000 38358 / +91 70906 71299, office hours, official emails, and driving directions.",
  keywords: [
    "Contact Kautilya Vidyalaya",
    "Kautilya Vidyalaya phone number",
    "Kautilya Vidyalaya address Mysore",
    "CBSE school Dattagalli Kanakadasa Nagar",
    "Mysore CBSE school admissions helpline",
    "Best CBSE schools near Kuvempunagar Mysore",
    "Kautilya school Mysore directions",
  ],
  alternates: {
    canonical: "https://kautilyavidyalaya.edu.in/contact-us",
  },
};

export default function ContactUsPage() {
  return <ContactUsClientView />;
}
