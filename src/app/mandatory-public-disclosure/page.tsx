import type { Metadata } from "next";
import DisclosureClientView from "@/components/disclosure/DisclosureClientView";

export const metadata: Metadata = {
  title: "Mandatory Public Disclosure | CBSE Affiliation 830193 - Kautilya Vidyalaya Mysuru",
  description:
    "Official CBSE Mandatory Public Disclosure for Kautilya Vidyalaya, Mysuru (Affiliation No: 830193, School Code: 45154). View statutory certificates, NOC, building and fire safety approvals, fee structure, and academic records.",
  keywords: [
    "Mandatory Public Disclosure",
    "CBSE Affiliation 830193",
    "School Code 45154",
    "Kautilya Vidyalaya Mysore Disclosure",
    "CBSE Appendix IX",
    "School Safety Certificates",
    "Fee Structure Kautilya Vidyalaya",
    "RTE Recognition Karnataka",
  ],
  openGraph: {
    title: "Mandatory Public Disclosure | Kautilya Vidyalaya, Mysuru",
    description:
      "Official statutory disclosures, certificates, fee structure, and infrastructure specifications in compliance with CBSE circulars.",
    url: "https://kautilyavidyalaya.edu.in/mandatory-public-disclosure",
    siteName: "Kautilya Vidyalaya",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mandatory Public Disclosure | Kautilya Vidyalaya",
    description:
      "Official CBSE Mandatory Public Disclosure (Affiliation No: 830193, School Code: 45154).",
  },
};

export default function MandatoryDisclosurePage() {
  return <DisclosureClientView />;
}
