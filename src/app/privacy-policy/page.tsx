import { Metadata } from "next";
import PrivacyPolicyClientView from "@/components/legal/PrivacyPolicyClientView";

export const metadata: Metadata = {
  title: "Privacy Policy | Kautilya Vidyalaya - CBSE School Mysuru",
  description:
    "Official Privacy Policy of Kautilya Vidyalaya, Mysuru (CBSE Affiliation No. 830193). Transparent guidelines on student data protection, parental consent, ERP security, and DPDP Act 2023 compliance.",
  keywords: [
    "Kautilya Vidyalaya Privacy Policy",
    "School Data Privacy Mysore",
    "CBSE School Student Data Protection",
    "DPDP Act 2023 School Compliance",
    "Kautilya Vidyalaya Grievance Officer",
    "Kautilya Vidyalaya Terms and Policies",
    "School ERP Security Mysore",
  ],
  alternates: {
    canonical: "https://kautilyavidyalaya.edu.in/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Kautilya Vidyalaya Mysore",
    description:
      "Learn how Kautilya Vidyalaya safeguards student records, parent communications, online fee transactions, and digital privacy.",
    url: "https://kautilyavidyalaya.edu.in/privacy-policy",
    siteName: "Kautilya Vidyalaya",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Kautilya Vidyalaya Mysore",
    description:
      "Transparent guidelines on student data protection, parental consent, ERP security, and DPDP Act compliance.",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClientView />;
}

