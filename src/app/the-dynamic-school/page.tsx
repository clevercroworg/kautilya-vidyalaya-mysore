import { Metadata } from "next";
import DynamicSchoolClientView from "@/components/school/DynamicSchoolClientView";

export const metadata: Metadata = {
  title: "The Dynamic School Award 2025 | Karnataka Educators' Summit | Kautilya Vidyalaya Mysore",
  description:
    "Kautilya Vidyalaya, Mysuru, was honoured with the prestigious 'The Dynamic School' award for 2025 at the Karnataka Educators’ Summit by Education News Network (ENN) and Education Today at The Radisson Blu, Mysuru.",
  keywords: [
    "The Dynamic School 2025",
    "Karnataka Educators Summit 2025",
    "Kautilya Vidyalaya Mysore Awards",
    "Education Today Award Mysore",
    "Education News Network ENN",
    "Best CBSE School Mysore",
    "Shri T Babu Chairman Kautilya",
    "Radisson Blu Mysuru Education Summit",
    "Dynamic School Karnataka",
  ],
  alternates: {
    canonical: "https://kautilyavidyalaya.edu.in/the-dynamic-school",
  },
  openGraph: {
    title: "Kautilya Vidyalaya Honoured as ‘The Dynamic School’ at Karnataka Educators’ Summit 2025",
    description:
      "Conferred by Education News Network (ENN) and Education Today in celebration of Kautilya Vidyalaya's progressive vision, holistic learning framework, and pioneering innovation labs.",
    url: "https://kautilyavidyalaya.edu.in/the-dynamic-school",
    siteName: "Kautilya Vidyalaya Mysore",
    images: [
      {
        url: "/images/awards/kautilya-dynamic-school-award-ceremony.jpg",
        width: 1200,
        height: 630,
        alt: "Chairman Shri T. Babu receiving The Dynamic School Award at Karnataka Educators’ Summit 2025",
      },
    ],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kautilya Vidyalaya Honoured as ‘The Dynamic School’ at Karnataka Educators’ Summit 2025",
    description:
      "Prestigious state accolade conferred by Education News Network (ENN) and Education Today at The Radisson Blu, Mysuru.",
    images: ["/images/awards/kautilya-dynamic-school-award-ceremony.jpg"],
  },
};

export default function TheDynamicSchoolPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Kautilya Vidyalaya, Mysuru, Honoured as ‘The Dynamic School’ at Karnataka Educators’ Summit 2025",
    description:
      "Kautilya Vidyalaya, Mysuru, has been honoured with the prestigious title of 'The Dynamic School' for the year 2025 by Education News Network (ENN) and Education Today.",
    image: [
      "https://kautilyavidyalaya.edu.in/images/awards/kautilya-dynamic-school-award-ceremony.jpg",
      "https://kautilyavidyalaya.edu.in/images/events/kautilya-educators-summit-award.jpg",
    ],
    datePublished: "2025-10-14T10:00:00+05:30",
    dateModified: "2025-12-19T10:00:00+05:30",
    author: {
      "@type": "Organization",
      name: "Education News Network (ENN) / Education Today",
    },
    publisher: {
      "@type": "Organization",
      name: "Kautilya Vidyalaya Mysore",
      logo: {
        "@type": "ImageObject",
        url: "https://kautilyavidyalaya.edu.in/images/kautilya-vidyalaya-logo.webp",
      },
    },
    about: {
      "@type": "Award",
      name: "The Dynamic School Award 2025",
      awardSubject: "Excellence in School Innovation and Progressive Pedagogy",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DynamicSchoolClientView />
    </>
  );
}
